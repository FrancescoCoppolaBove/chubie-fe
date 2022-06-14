import { discoverMock } from '../../assets/data/discoverMock';

const handler = (req, res) => {
  const { page, limit } = req.query;
  const { method } = req;

  if (method === 'GET') {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};
    results.data = discoverMock.slice(startIndex, endIndex);
    results.totalItems = discoverMock.length;
    if (endIndex < discoverMock.length) {
      results.nextPage = page + 1;
    }
    if (startIndex > 0) {
      results.prevPage = page - 1;
    }

    res.status(200).json(results);
  } else {
    res.status(405).json({ message: `Method ${method} Not Allowed!` });
  }
};

export default handler;
