import { NextApiRequest, NextApiResponse } from 'next';

import passport from 'passport';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  passport.authenticate('local', (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Error authenticating user' });
    }

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    req.login(user, (loginErr) => {
      if (loginErr) {
        return res.status(500).json({ message: 'Login error' });
      }

      return res.status(200).json({ message: 'Login successful', user });
    });
  })(req, res);
}
