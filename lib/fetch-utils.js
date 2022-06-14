const BASE_URL = `http://localhost:3000/`;
const MOCKOON_BASE_URL = `http://localhost:3001/`;

/* export const getTopCreators = async () => {
  const res = await fetch(`${BASE_URL}api/top-creators`);
  const creators = await res.json();
  return creators;
}; */

/* export const getLatestUploadCreators = async () => {
  const res = await fetch(`${MOCKOON_BASE_URL}latest-upload-creators`);
  const latestUploadCreators = await res.json();
  return latestUploadCreators;
}; */

/* export const getPopularCreators = async () => {
  const url = new URL(`${MOCKOON_BASE_URL}popular?type=sellers`);

  const res = await fetch(url);
  const popular = await res.json();
  return popular;
}; */

/* export const getHotBids = async () => {
  const res = await fetch(`${MOCKOON_BASE_URL}hot-bids`);
  const hotBids = await res.json();

  return hotBids;
}; */

/* export const getHotCollections = async () => {
  const res = await fetch(`${MOCKOON_BASE_URL}hot-collections`);
  const hotCollections = await res.json();

  return hotCollections;
}; */

export const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error(`An error occurred while fetching the data.`);

    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};
