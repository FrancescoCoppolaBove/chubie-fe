import { latestUploadCreatorsMock } from '../../assets/data/latestUploadCreatorsMock';

const handler = (req, res) => {
  res.status(200).json(latestUploadCreatorsMock);
};

export default handler;
