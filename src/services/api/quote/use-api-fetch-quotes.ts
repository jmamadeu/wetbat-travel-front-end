import { useQuery } from "@tanstack/react-query"
import { apiInstance } from "../api-instance"

export const fetchQuotes = async () => {
  const response = await apiInstance.get<API.Quote.Response>("/quotes")

  return response.data
}

export const useApiFetchQuotes = () => {
  return useQuery(["quotes"], fetchQuotes)
}