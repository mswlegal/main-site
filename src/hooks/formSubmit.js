import { useMutation } from '@tanstack/react-query';

const postToFormSubmit = async (data) => {
  const response = await fetch(`/api/form-submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'Submission failed');
  }

  return result;
};

export const useFormSubmit = ({ onSuccess, onError }) =>
  useMutation({
    mutationFn: postToFormSubmit,
    onSuccess,
    onError
  });
