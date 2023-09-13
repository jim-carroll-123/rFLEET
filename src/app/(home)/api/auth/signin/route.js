import { NextResponse } from 'next/server'
import passport from 'passport';

export async function POST(req) {
  passport.authenticate('local', (err, user) => {
    if (err) {
      return NextResponse.json({ message: 'Error authenticating user' });
    }

    if (!user) {
      return NextResponse.json({ message: 'Authentication failed' });
    }

    req.login(user, (loginErr) => {
      if (loginErr) {
        return NextResponse.json({ message: 'Login error' });
      }

      return NextResponse.json({ message: 'Login successful', user });
    });
  })(req, res);
}
