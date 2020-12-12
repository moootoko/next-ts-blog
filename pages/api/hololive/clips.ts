import { NextApiRequest, NextApiResponse } from 'next'
import clipsData, { Clips } from '../../../utils/hololive/clips-data';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // GET以外はstatus500を返す
  if(req.method !== 'GET') {
    res.status(500).json({ statusCode: 500, message: 'GET request only.' });
  }

  try {
    const clips: Clips[] = clipsData.filter(members => members.memberName === req.query.name);
    if(clips.length === 0) {
      throw new Error('Cannot find clips dara.');
    }

    res.status(200).json(clips[0]);
  } catch(err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;