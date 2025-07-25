// /pages/api/collections.js

export default async function handler(req, res) {
  const token = process.env.WEBFLOW_ACCESS_TOKEN;
  const siteId = '5f9358a10bfac7b113cb8431';

  if (!siteId) {
    return res.status(400).json({ error: 'Missing siteId in query parameters' });
  }

  try {
    const response = await fetch(`https://api.webflow.com/v2/sites/${siteId}/collections`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'accept-version': '1.0.0'
      }
    });

    const data = await response.json();
    res.status(200).json(data.collections);
  } catch (error) {
    console.error('Error fetching collections:', error);
    res.status(500).json({ error: 'Failed to fetch collections' });
  }
}

// [
//   {
//     "id": "64349569fab43e48d43446ec",
//     "displayName": "Reviews",
//     "singularName": "Review",
//     "slug": "reviews",
//     "createdOn": "2020-11-18T22:23:54.992Z",
//     "lastUpdated": "2025-06-09T19:28:31.535Z"
//   },
//   {
//     "id": "64349569fab43e73c2344702",
//     "displayName": "Expertise Areas",
//     "singularName": "Expertise Area",
//     "slug": "expertise-areas",
//     "createdOn": "2018-11-13T15:09:18.405Z",
//     "lastUpdated": "2025-06-09T19:28:31.532Z"
//   },
//   {
//     "id": "64349569fab43e3ac7344722",
//     "displayName": "Blog Posts",
//     "singularName": "Blog Post",
//     "slug": "post",
//     "createdOn": "2022-03-18T00:20:03.683Z",
//     "lastUpdated": "2025-06-09T19:28:31.530Z"
//   },
//   {
//     "id": "64349569fab43e11e2344725",
//     "displayName": "Services",
//     "singularName": "Service",
//     "slug": "services",
//     "createdOn": "2021-08-11T16:50:46.853Z",
//     "lastUpdated": "2025-06-09T19:28:31.537Z"
//   }
// ]
