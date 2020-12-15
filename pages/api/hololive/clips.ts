import { NextApiRequest, NextApiResponse } from 'next'
import clipsData from '../../../utils/hololive/clips-data';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // return code 500 except GET request
  if(req.method !== 'GET') {
    res.status(500).json({ statusCode: 500, message: 'GET request only.' });
  }

  try {
    const clips: string[] | null = clipsData[`${req.query.name}`]
    if(clips === null) {
      throw new Error('Cannot find clips data.');
    }
    else if(clips.length !== 4) {
      throw new Error('The number of clips is invalid.');
    }

    res.status(200).json(clips[0]);
  } catch(err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;