import nextConnect from 'next-connect';
import passport from 'passport';

const handler = nextConnect();

handler.use(
  require('express-session')({
    secret: 'secret-key', // TODO: add env variable
    resave: false,
    saveUninitialized: false,
  })
);

handler.use(passport.initialize());
handler.use(passport.session());

export default handler;