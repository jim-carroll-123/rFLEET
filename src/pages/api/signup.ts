// pages/api/signup.ts

import { NextApiRequest, NextApiResponse } from 'next';
import User, { IUser } from '@db/models/User';
import { connectToDatabase, isDatabaseConnected } from '@lib/db'

import nextConnect from 'next-connect';
import passport from 'passport';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password } = req.body;
  if (!isDatabaseConnected()) {
    await connectToDatabase();
  }

  try {
    const user = new User({ username, password });
    await User.register(user, password);

    passport.authenticate('local')(req, res, () => {
      res.status(201).json({ message: 'Signup successful' });
    });
  } catch (error) {
    res.status(400).json({ message: 'Signup failed', error: error.message });
  }
};
