import { useMutation } from "@tanstack/react-query"
import { apiInstance } from "../api-instance"

const addQuote = async (quote: API.Quote.AddParams) => {
  const response = await apiInstance.post<API.Quote.Response>("/quotes", quote)

  return response.data
}

export const useApiAddQuote = () => {
  return useMutation(addQuote)
}