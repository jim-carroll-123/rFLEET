import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  req.logout();
  res.status(200).json({ message: 'Logout successful' });
}
