const FORM_ENDPOINT = 'https://mswlegal.leaddocket.com/opportunities/form/28?preview=true';

const formSubmit = async (data) => {
  const formBody = new URLSearchParams(data).toString(); // Convert to x-www-form-urlencoded

  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formBody
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`LeadDocket error: ${text}`);
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await formSubmit(req.body); // req.body must be a plain object
      res.status(200).json({ message: 'Data forwarded successfully' });
    } catch (error) {
      console.error('Error forwarding to LeadDocket:', error);
      res.status(500).json({ message: 'Error forwarding data', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
