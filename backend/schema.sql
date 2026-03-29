-- ============================================================
-- QRollCall Supabase Schema
-- Run this in the Supabase SQL Editor
-- ============================================================

-- Students table
CREATE TABLE IF NOT EXISTS students (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  roll TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  parent_phone TEXT,
  device_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Teachers / Users table
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL DEFAULT 'teacher',
  subject TEXT,
  password TEXT NOT NULL DEFAULT 'pass123',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Sessions table (active QR sessions)
CREATE TABLE IF NOT EXISTS sessions (
  token TEXT PRIMARY KEY,
  subject TEXT NOT NULL,
  teacher_id TEXT NOT NULL,
  expiry BIGINT NOT NULL,
  started BOOLEAN DEFAULT FALSE,
  started_at TIMESTAMPTZ,
  ended BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Attendance table
CREATE TABLE IF NOT EXISTS attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id TEXT NOT NULL REFERENCES students(id),
  student_name TEXT,
  subject TEXT NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  status TEXT NOT NULL CHECK (status IN ('present', 'absent')),
  device_id TEXT,
  location JSONB
);

-- Fraud logs table
CREATE TABLE IF NOT EXISTS fraud_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id TEXT REFERENCES students(id),
  student_name TEXT,
  reason TEXT,
  device TEXT,
  ip TEXT,
  location JSONB,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  risk_score INTEGER DEFAULT 0,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'locked')),
  resolved_at TIMESTAMPTZ
);

-- Notifications table
CREATE TABLE IF NOT EXISTS notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id TEXT REFERENCES students(id),
  student_name TEXT,
  type TEXT NOT NULL CHECK (type IN ('email', 'sms')),
  message TEXT,
  subject TEXT,
  status TEXT DEFAULT 'pending',
  error TEXT,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- Seed Data
-- ============================================================

-- Seed demo teacher
INSERT INTO users (id, name, email, role, subject, password) VALUES
  ('t1', 'Prof. Rajan Singh', 'teacher@qrollcall.edu', 'teacher', 'Computer Science', 'pass123')
ON CONFLICT (id) DO NOTHING;

-- Seed demo students
INSERT INTO students (id, name, roll, email, parent_phone, device_id) VALUES
  ('s1', 'Arjun Sharma',  '22CS001', 'arjun@student.edu',  '+919876543210', 'dev-abc-001'),
  ('s2', 'Priya Patel',   '22CS002', 'priya@student.edu',  '+919876543211', 'dev-abc-002'),
  ('s3', 'Rohit Kumar',   '22CS003', 'rohit@student.edu',  '+919876543212', 'dev-abc-003'),
  ('s4', 'Sneha Reddy',   '22CS004', 'sneha@student.edu',  '+919876543213', 'dev-abc-004'),
  ('s5', 'Vikram Joshi',  '22CS005', 'vikram@student.edu', '+919876543214', 'dev-abc-005')
ON CONFLICT (id) DO NOTHING;
