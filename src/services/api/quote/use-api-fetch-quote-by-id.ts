import { QueryOptions, useQuery } from "@tanstack/react-query";
import { apiInstance } from "../api-instance";

export const fetchQuoteById = async ({ id }: API.Quote.GetByIdParams) => {
  const response = await apiInstance.get<API.Quote.Response>(`/quotes/${id}`);

  return response.data;
};

export const useApiFetchQuoteById = (
  params: Parameters<typeof fetchQuoteById>[0], options?: QueryOptions<API.Quote.Response>
) => {
  return useQuery<API.Quote.Response>(["posts", params.id], () => fetchQuoteById(params), options);
};
