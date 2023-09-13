// lib/db.js

import { MongoClient } from 'mongodb';

let cachedClient: MongoClient | undefined = undefined;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017', {
    useNewUrlParser: true, useUnifiedTopology: true
  } as any);

  const database = client.db(process.env.MONGODB_NAME || 'rfleet');

  cachedClient = client;
  return client;
}
