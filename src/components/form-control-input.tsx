import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps
} from "@chakra-ui/react";
import { forwardRef } from "react";

type CreateJobFormControlProps = InputProps & {
  label: string;
  error?: string;
};

export const FormControlInput = forwardRef<
  HTMLInputElement,
  CreateJobFormControlProps
>(({ id, label, error, ...props }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel fontSize="xs" htmlFor={id} color="grey.300">
        {label}
      </FormLabel>
      <Input id={id} ref={ref} {...props} />

      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
});
