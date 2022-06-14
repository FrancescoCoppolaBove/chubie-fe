import { hotBidsMock } from '../../assets/data/hotBidsMock';

const handler = (req, res) => {
  const { method } = req;
  if (method === 'GET') {
    res.status(200).json(hotBidsMock);
  } else {
    res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
};

export default handler;
