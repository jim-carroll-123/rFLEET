import { connectToDatabase, isDatabaseConnected } from '@lib/db'

import { NextResponse } from 'next/server'
import User from '@db/models/User';
import passport from '@lib/passport';

export async function POST(req) {
    const requestData = await req.json();
  const { username, password } = requestData;

  if (!isDatabaseConnected()) await connectToDatabase();

  try {
    const user = new User({ username, password });
    await User.register(user, password);

    passport.authenticate('local', () => {
        console.log('555')
      return NextResponse.json({ message: 'Signup successful' });
    });
  } catch (error) {
    return NextResponse.json({ message: 'Signup failed', error: error.message });
  }
}
