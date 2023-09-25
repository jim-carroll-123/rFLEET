import { apiHandler } from '../../../../lib/api';
import { cookies } from 'next/headers';

/**
 * @swagger
 * /api/account/logout:
 *   post:
 *     description: Logout
 *     responses:
 *       200:
 *         description: Logout Successful
 */

module.exports = apiHandler({
    POST: logout
});

function logout() {
    cookies().delete('authorization');

    return { response: { message: 'logout successful'}}
}