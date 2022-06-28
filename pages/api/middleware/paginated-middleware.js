const paginatedMiddleware = (handler) => {
  return async (req, res) => {
    const { page, limit } = req.query;
    const { method } = req;

    if (method !== 'GET') {
      res.status(405).json({ message: `Method ${method} Not Allowed` });
    } else {
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      const results = {};
      results.data = discoverMock.slice(startIndex, endIndex);
      results.totalItems = discoverMock.length;

      req.data = results;

      return handler(req, res);
    }
  };
};

export default paginatedMiddleware;
