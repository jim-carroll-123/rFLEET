import { NextResponse } from 'next/server'

import { connectToDatabase } from '@lib/db'

export async function GET(request, response) {
  const client = await connectToDatabase()

  return NextResponse.json({ message: 'This is test request' })
}
