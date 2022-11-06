import type { NextApiRequest, NextApiResponse } from 'next'

import { allPostsQuery } from '../../../utils/queries';
import { client } from '../../../utils/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'GET') {
    const postQuery = allPostsQuery();

    const posts = await client.fetch(postQuery)

    res.status(200).json(posts)
  }
}