import { connectToDatabase, isDatabaseConnected } from '../../../../lib/db';

import { apiHandler } from '../../../../lib/api';
import joi from 'joi';
import { usersController } from '../../../../controllers/users';

/**
 * @swagger
 * /api/account/register:
 *   post:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: Hello World!
 */

module.exports = apiHandler({
    POST: register
});

async function register(req: Request) {
    if (!isDatabaseConnected()) await connectToDatabase();

    const body = await req.json();
    await usersController.create(body);
}

register.schema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    username: joi.string().required(),
    password: joi.string().min(6).required(),
});