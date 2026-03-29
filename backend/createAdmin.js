require('dotenv').config();
const supabase = require('./supabase');
const { v4: uuidv4 } = require('uuid');

async function createAdmin() {
  const email = 'admin@qrollcall.com';
  const password = 'adminpassword123';
  
  const payload = {
    id: uuidv4(),
    email: email,
    password: password,
    role: 'admin',
    name: 'Master Admin',
  };

  const { data, error } = await supabase.from('users').insert([payload]);
  
  if (error) {
    if (error.code === '23505') {
      console.log('An account with this email already exists.');
    } else {
      console.error('Failed to create admin:', error);
    }
  } else {
    console.log('✅ Admin user successfully created!');
    console.log('-----------------------------------');
    console.log(`Login Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log('-----------------------------------');
  }
  process.exit(0);
}

createAdmin();
