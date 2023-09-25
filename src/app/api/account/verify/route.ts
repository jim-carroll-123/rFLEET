import { NextRequest } from 'next/server'
import { apiHandler } from '@lib/api'
import { usersController } from '@controllers/users'

/**
 * @swagger
 * /api/account/verify:
 *   get:
 *     description: Verify Email
 *     parameters:
 *       name: code
 *       in: query
 *       description: verification code
 *       schema:
 *         type: string
 *     responses:
 *       200:
 *         description: Email Verify Successful
 */

module.exports = apiHandler({
  GET: verify
})

async function verify(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const code = searchParams.get('code')
  await usersController.verifyEmailVerificationLink(code!)
  return { response: { message: 'Email Verified Successfully' } }
}
