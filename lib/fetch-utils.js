const BASE_URL = `http://localhost:3001/`;

export const getTopCreators = async () => {
  const res = await fetch(`${BASE_URL}top-creators`);
  const creators = await res.json();
  return creators;
};

export const getLatestUploadCreators = async () => {
  const res = await fetch(`${BASE_URL}latest-upload-creators`);
  const latestUploadCreators = await res.json();
  return latestUploadCreators;
};

export const getPopularCreators = async () => {
  const url = new URL(`${BASE_URL}popular?type=sellers`);

  const res = await fetch(url);
  const popular = await res.json();
  return popular;
};

export const getHotBids = async () => {
  const res = await fetch(`${BASE_URL}hot-bids`);
  const hotBids = await res.json();

  return hotBids;
};
