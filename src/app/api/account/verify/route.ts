import { NextRequest } from 'next/server'
import { apiHandler } from '@lib/api'
import { usersController } from '@controllers/users'

/**
 * @swagger
 * /api/account/verify:
 *   put:
 *     requestBody:
 *       description: Verify Email
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/VerifyAccountRequest'
 *     responses:
 *       200:
 *         description: Email Verify Successful
 */

module.exports = apiHandler({
  PUT: verify
})

async function verify(req: Request) {
  const body = await req.json();
  const { code = '' } = body;
  await usersController.verifyEmailVerificationLink(code!)
  return { response: { message: 'Email Verified Successfully' } }
}
