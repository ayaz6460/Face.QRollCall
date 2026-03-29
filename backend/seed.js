// backend/seed.js
// Run: node seed.js
// Creates all tables via Supabase RPC then seeds data

require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function seed() {
  console.log('Seeding Supabase...\n');

  // Seed teacher (users table)
  const { error: uErr } = await supabase.from('users').upsert([
    { id: 't1', name: 'Prof. Rajan Singh', email: 'teacher@qrollcall.edu',
      role: 'teacher', subject: 'Computer Science', password: 'pass123' }
  ], { onConflict: 'id' });
  if (uErr) console.error('users error:', uErr.message); else console.log('✓ Teacher seeded');

  // Seed students
  const students = [
    { id: 's1', name: 'Arjun Sharma',  roll: '22CS001', email: 'arjun@student.edu',  parent_phone: '+919876543210', device_id: 'dev-abc-001' },
    { id: 's2', name: 'Priya Patel',   roll: '22CS002', email: 'priya@student.edu',  parent_phone: '+919876543211', device_id: 'dev-abc-002' },
    { id: 's3', name: 'Rohit Kumar',   roll: '22CS003', email: 'rohit@student.edu',  parent_phone: '+919876543212', device_id: 'dev-abc-003' },
    { id: 's4', name: 'Sneha Reddy',   roll: '22CS004', email: 'sneha@student.edu',  parent_phone: '+919876543213', device_id: 'dev-abc-004' },
    { id: 's5', name: 'Vikram Joshi',  roll: '22CS005', email: 'vikram@student.edu', parent_phone: '+919876543214', device_id: 'dev-abc-005' },
  ];
  const { error: sErr } = await supabase.from('students').upsert(students, { onConflict: 'id' });
  if (sErr) console.error('students error:', sErr.message); else console.log(`✓ ${students.length} students seeded`);

  console.log('\nDone! You can now start the server: node server.js');
}

seed().catch(console.error);
