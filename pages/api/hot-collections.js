import { hotCollectionsMock } from '../../assets/data/hotCollectionsMock';

const handler = (req, res) => {
  const { method } = req;
  if (method === 'GET') {
    res.status(200).json(hotCollectionsMock);
  } else {
    res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
};

export default handler;
