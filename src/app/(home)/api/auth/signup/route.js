import { NextResponse } from 'next/server'
import User from '@db/models/User';
import { connectToDatabase } from '@lib/db'
import passport from 'passport';

export async function POST(req) {
  const { username, password } = req.body;

  const client = await connectToDatabase();

  try {
    const user = new User({ username });
    await User.register(user, password);

    passport.authenticate('local')(req, res, () => {
      return NextResponse.json({ message: 'Signup successful' });
    });
  } catch (error) {
    return NextResponse.json({ message: 'Signup failed', error: error.message });
  }
}
