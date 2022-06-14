import { popularMock } from '../../assets/data/popularMock';

const handler = (req, res) => {
  const { method } = req;
  if (method === 'GET') {
    res.status(200).json(popularMock);
  } else {
    res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
};

export default handler;
