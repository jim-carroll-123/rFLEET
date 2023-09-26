import { apiHandler } from '@lib/api';
import { usersController } from '@controllers/users';

module.exports = apiHandler({
    GET: getCurrent
});

async function getCurrent() {
    return await usersController.getCurrent();
}