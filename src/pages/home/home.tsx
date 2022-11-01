import {
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import { useApiFetchQuotes } from "../../services/api/quote/use-api-fetch-quotes";
import { formatDate } from "../../utils/formate-date";
import { QuoteContainer } from "./components/quote-container";
import { QuoteLoadingTable } from "./components/quote-loading-table";

function HomePage() {
  const { data: quotes, isLoading, isError } = useApiFetchQuotes();

  if (isLoading) {
    return (
      <QuoteContainer>
        <QuoteLoadingTable />
      </QuoteContainer>
    );
  }

  if (!isLoading && !quotes?.length && !isError) {
    return (
      <QuoteContainer>
        <Text>There's no quotes to show</Text>
      </QuoteContainer>
    );
  }

  if (isError) {
    return (
      <QuoteContainer>
        <Text>An error occurred, try again later</Text>
      </QuoteContainer>
    );
  }

  return (
    <QuoteContainer>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>From/Destination</Th>
              <Th>Depart/Return date</Th>
              <Th>Traveler's number</Th>
              <Th>Transportation</Th>
              <Th>Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {quotes.map((quote) => (
              <Tr key={quote.id}>
                <Td>
                  <Tag variant="solid" colorScheme="teal">
                    {quote.from} - {quote.destination}
                  </Tag>
                </Td>
                <Td>
                  <Tag variant="solid" colorScheme="teal">
                    {formatDate(new Date(quote?.depart_date))}/{" "}
                    {formatDate(new Date(quote.return_date))}
                  </Tag>
                </Td>
                <Td>{quote.travelers}</Td>
                <Td>{quote.transportation}</Td>
                <Td>{quote.name}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </QuoteContainer>
  );
}

export default HomePage;
