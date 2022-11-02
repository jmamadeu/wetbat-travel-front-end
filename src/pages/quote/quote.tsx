import {
  Box,
  Container, Text
} from "@chakra-ui/react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useApiFetchQuoteById } from "../../services/api/quote/use-api-fetch-quote-by-id";
import { QuoteCard } from "./components/quote-card";

export const QuotePage = () => {
  let { quoteId } = useParams();
  const { state: currentQuote } = useLocation();

  const { data: quote } = useApiFetchQuoteById(
    { id: quoteId ?? "" },
    {
      initialData: currentQuote,
    },
  );

  if (!quote) {
    return <></>;
  }

  return (
    <Container mt={4} maxW="container.md">
      <Box my={4}>
        <Link to="/">
          <Text fontWeight="bold" fontSize="sm">
            Go Back
          </Text>
        </Link>
      </Box>
      
      <QuoteCard quote={quote} />
    </Container>
  );
};
