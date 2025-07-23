// pages/api/get-blog-posts.js
const BLOG_POSTS_ENDPOINT = 'https://api.webflow.com/v2/collections/64349569fab43e3ac7344722/items';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const blogPosts = await getBlogPosts();
      res.status(200).json(blogPosts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      res.status(500).json({
        message: 'Error fetching blog posts',
        error: error.message
      });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

const getBlogPosts = async () => {
  const response = await fetch(BLOG_POSTS_ENDPOINT, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.WEBFLOW_ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Webflow API error: ${errorText}`);
  }

  return response.json();
};
