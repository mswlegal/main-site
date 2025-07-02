export const formSubmit = async (data) => {
  const formBody = new URLSearchParams(data).toString();

  const response = await fetch('https://mswlegal.leaddocket.com/opportunities/form/28', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formBody
  });

  console.log(response);

  if (!response.ok) {
    throw new Error('Request failed');
  }
};
