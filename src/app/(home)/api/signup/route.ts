import { NextRequest, NextResponse } from 'next/server'

import User from '@db/models/User';
import db  from '@lib/db'
import passport from 'passport';

export async function POST(req: NextRequest, res: NextResponse) {
  const requestData = await req.json();

  const { username, password } = requestData;
  try {
    // const user = new User({ username, password });
    // await User.register(user, password);

    passport.authenticate('local', () => {
      console.log('5555')
      return NextResponse.json({ message: 'Signup successful' });
    })
  } catch (error) {
    return NextResponse.json({ message: 'Signup failed', error: error.message });
  }
}
