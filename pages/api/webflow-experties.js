// pages/api/webflow-experties.js
const COLLECTION_ID = '64349569fab43e73c2344702';
const BASE_ENDPOINT = `https://api.webflow.com/v2/collections/${COLLECTION_ID}/items`;

let cachedData = null;
let lastFetchTime = 0;
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour in ms

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const now = Date.now();

    // Use cache if within the duration
    if (cachedData && now - lastFetchTime < CACHE_DURATION) {
      res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
      return res.status(200).json({ items: cachedData });
    }

    const blogPosts = await getAllBlogPosts();
    cachedData = blogPosts;
    lastFetchTime = now;

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    res.status(200).json({ items: blogPosts });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({
      message: 'Error fetching blog posts',
      error: error.message
    });
  }
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getAllBlogPosts = async () => {
  const limit = 100;
  let offset = 0;
  let allItems = [];

  while (true) {
    const response = await fetch(
      `${BASE_ENDPOINT}?limit=${limit}&offset=${offset}&archived=false&draft=false`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.WEBFLOW_ACCESS_TOKEN}`,
          'Accept-Version': '1.0.0',
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Webflow API error: ${errorText}`);
    }

    const data = await response.json();
    allItems = allItems.concat(data.items);

    if (data.items.length < limit) break;

    offset += limit;
    await sleep(1000); // avoid rate limits
  }

  return allItems;
};
