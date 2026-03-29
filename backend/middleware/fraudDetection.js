const GEOFENCE = {
  lat: parseFloat(process.env.GEO_LAT) || 17.3850,
  lng: parseFloat(process.env.GEO_LNG) || 78.4867,
  radiusMeters: parseInt(process.env.GEO_RADIUS_METERS) || 200
};

// Track rapid attempts: studentId -> [timestamps]
const attemptTracker = {};
const RAPID_THRESHOLD_MS = 5000; // 5 seconds
const RAPID_MAX_ATTEMPTS = 3;

function haversineDistance(lat1, lng1, lat2, lng2) {
  const R = 6371000; // Earth's radius in meters
  const toRad = x => x * Math.PI / 180;
  const φ1 = toRad(lat1);
  const φ2 = toRad(lat2);
  const Δφ = toRad(lat2 - lat1);
  const Δλ = toRad(lng2 - lng1);
  
  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

function check({ token, session, student, deviceId, location }) {
  let riskScore = 0;
  const reasons = [];

  // 1. Token validation
  if (!session) {
    return { isFraud: true, reason: 'Invalid or unknown QR token', riskScore: 100 };
  }
  if (Date.now() > session.expiry) {
    return { isFraud: true, reason: 'QR token has expired', riskScore: 100 };
  }

  // 2. Device mismatch
  if (deviceId && student.device_id && deviceId !== student.device_id) {
    riskScore += 40;
    reasons.push('Device ID mismatch — possible proxy attempt');
  }

  // 3. Geofence check
  const hasSessionGeofence = Number.isFinite(Number(session?.latitude)) && Number.isFinite(Number(session?.longitude));
  const hasLocation = Number.isFinite(Number(location?.lat)) && Number.isFinite(Number(location?.lng));

  if (hasLocation) {
    const targetLat = Number(session?.latitude || GEOFENCE.lat);
    const targetLng = Number(session?.longitude || GEOFENCE.lng);
    const allowedRadius = session?.allowed_radius || GEOFENCE.radiusMeters;
    
    // Only perform check if a target location is actually set
    if (targetLat && targetLng) {
      const dist = haversineDistance(location.lat, location.lng, targetLat, targetLng);
      if (dist > allowedRadius) {
        riskScore += 50;
        reasons.push(`Outside allowed radius (${Math.round(dist)}m from teacher)`);
      }
    }
  } else if (hasSessionGeofence) {
    riskScore += 60;
    reasons.push('Location unavailable — enable GPS for attendance verification');
  }

  // 4. Rapid repeat attempts
  const now = Date.now();
  if (!attemptTracker[student.id]) attemptTracker[student.id] = [];
  attemptTracker[student.id].push(now);
  const recent = attemptTracker[student.id].filter(t => now - t < RAPID_THRESHOLD_MS);
  if (recent.length > RAPID_MAX_ATTEMPTS) {
    riskScore += 30;
    reasons.push(`Rapid repeat attempts detected (${recent.length} in 5s)`);
  }
  // Cleanup old entries
  attemptTracker[student.id] = attemptTracker[student.id].filter(t => now - t < 60000);

  const isFraud = riskScore >= 40;
  return { isFraud, reason: reasons.join('; ') || null, riskScore };
}

module.exports = { check };
