import { connectToDatabase, isDatabaseConnected } from '@lib/db';

import { apiHandler } from '../../../../lib/api';
import { cookies } from 'next/headers';
import joi from 'joi';
import { usersController } from '../../../../controllers/users';

module.exports = apiHandler({
    POST: login
});

async function login(req: Request) {
    if (!isDatabaseConnected()) await connectToDatabase();

    const body = await req.json();
    const { user, token } = await usersController.authenticate(body);

    // return jwt token in http only cookie
    cookies().set('authorization', token, { httpOnly: true });

    return user;
}

login.schema = joi.object({
    username: joi.string().required(),
    password: joi.string().required()
});