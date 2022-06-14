import { topCreatorsMock } from '../../assets/data/topCreatorsMock';

const handler = (req, res) => {
  res.status(200).json(topCreatorsMock);
};

export default handler;
