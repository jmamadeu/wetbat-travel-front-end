import { useMutation } from "@tanstack/react-query";
import { apiInstance } from "../api-instance";
import { queryClient } from "../query-client";

type QueryContextProps = {
  previousQuotes: Array<Module.Quote.Type>;
};

const addQuote = async (quote: API.Quote.AddParams) => {
  const response = await apiInstance.post<API.Quote.Response>("/quotes", quote);

  return response.data;
};

const quotesQueryKey = ["quotes"];

export const useApiAddQuote = () => {
  return useMutation(addQuote, {
    async onMutate(quote) {
      await queryClient.cancelQueries(quotesQueryKey);

      const previousQuotes = queryClient.getQueryData(quotesQueryKey);

      queryClient.setQueryData<Array<Partial<Module.Quote.Type>>>(
        quotesQueryKey,
        (quotes = []) => [...quotes, quote],
      );

      return { previousQuotes };
    },
    onError(error, variables, context) {
      const { previousQuotes } = context as QueryContextProps;
      queryClient.setQueryData(quotesQueryKey, () => previousQuotes);
    },
    onSettled() {
      queryClient.invalidateQueries(quotesQueryKey);
    },
  });
};
