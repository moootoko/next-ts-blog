import { NextApiRequest, NextApiResponse } from 'next'
import clipsData from '../../../utils/hololive/clips-data';

const getNameList = (req: NextApiRequest, res: NextApiResponse) => {
  // return code 500 except GET request
  if(req.method !== 'GET') {
    res.status(500).json({ statusCode: 500, message: 'GET request only.' });
  }

  try {
    const nameList: string[] = Object.keys(clipsData);
    res.status(200).json(nameList);
  } catch(err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default getNameList;