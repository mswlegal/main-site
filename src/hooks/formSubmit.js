import { useMutation } from '@tanstack/react-query';
import { formSubmit } from '@/api/formSubmit';

export const useFormSubmit = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: formSubmit,
    onSuccess: (_, variables, context) => {
      if (onSuccess) onSuccess(variables, context);
    },
    onError: (error, variables, context) => {
      if (onError) onError(error, variables, context);
    }
  });
};
