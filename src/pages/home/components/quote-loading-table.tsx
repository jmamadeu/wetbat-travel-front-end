import { Skeleton, Stack } from "@chakra-ui/react"

export const QuoteLoadingTable = () => {
  return <Stack>
    <Skeleton width="100%" height="20px" />
    <Skeleton width="100%" height="20px" />
  </Stack>
}