import { Button, Flex, SimpleGrid, Stack, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FormControlInput } from "../../../components/form-control-input";
import { useApiAddQuote } from "../../../services/api/quote/use-api-add-quote";

type QuoteSaveFormProps = {
  onSuccess: () => void;
};

export const QuoteSaveForm: React.FC<QuoteSaveFormProps> = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<API.Quote.AddParams>();

  const toast = useToast({
    position: "top-right",
  });

  const { mutate: addQuoteMutate, isLoading } = useApiAddQuote();

  const onSubmit = handleSubmit((data) => {
    addQuoteMutate(
      { ...data, travelers: Number(data.travelers) },
      {
        onSuccess() {
          toast({
            title: "Success!",
            description: "Quote created successfully",
            status: "success",
          });

          onSuccess();
        },
        onError(data) {
          console.log(data, "ERR")
          toast({
            title: "Error!",
            description:
              "An unexpected error occurred, verify your input or try again later",
            status: "error",
          });
        },
      },
    );
  });

  return (
    <Stack as="form" onSubmit={onSubmit}>
      <FormControlInput
        label="Name"
        {...register("name", {
          required: "name is required",
        })}
        error={errors?.name?.message}
      />

      <SimpleGrid columns={2} gap={2}>
        <FormControlInput
          label="Departure location"
          {...register("from", { required: "From is required" })}
          error={errors?.from?.message}
        />

        <FormControlInput
          label="Destination location"
          {...register("destination", {
            required: "Destination location is required",
          })}
          error={errors?.destination?.message}
        />
      </SimpleGrid>

      <SimpleGrid columns={2} gap={2}>
        <FormControlInput
          label="Departure date"
          type="date"
          {...register("depart_date", { required: "Depart date is required" })}
          error={errors?.depart_date?.message}
        />
        <FormControlInput
          label="Return date"
          type="date"
          {...register("return_date", {
            required: "Return date is required",
          })}
          error={errors?.return_date?.message}
        />
      </SimpleGrid>

      <SimpleGrid columns={2} gap={2}>
        <FormControlInput
          label="Number of travelers"
          type="number"
          {...register("travelers", {
            required: "Number of travelers is required",
          })}
          error={errors?.travelers?.message}
        />
        <FormControlInput
          label="Transportation (rental car, etc)"
          {...register("transportation", {
            required: "Transportation is required",
          })}
          error={errors?.transportation?.message}
        />
      </SimpleGrid>

      <Flex alignSelf="flex-end">
        <Button
          isLoading={isLoading}
          colorScheme="green"
          color="white"
          type="submit"
        >
          Save
        </Button>
      </Flex>
    </Stack>
  );
};
