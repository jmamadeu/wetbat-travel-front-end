import { Badge, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { formatDate } from "../../../utils/formate-date";

type QuoteProps = {
  quote: Module.Quote.Type;
};

export const QuoteCard: React.FC<QuoteProps> = ({ quote }) => {
  return (
    <Stack bg="#f1f1f1" p={4} borderRadius="md">
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h4" size="md">
          {quote.name}
        </Heading>
        <Stack>
          <Text fontSize="xs" fontWeight="bold">
            From:
            <Badge> {formatDate(new Date(quote?.depart_date))}</Badge>
          </Text>
          <Text fontSize="xs" fontWeight="bold">
            To:
            <Badge colorScheme="red">
              {formatDate(new Date(quote?.return_date))}
            </Badge>
          </Text>
        </Stack>
      </Flex>
      <hr />
      <Stack spacing={4}>
        <Flex gap={6}>
          <Badge colorScheme="purple">{quote.from}</Badge>
          <Text>/</Text>
          <Badge colorScheme="purple">{quote.destination}</Badge>
        </Flex>

        <Flex>
          <Text fontSize="md" fontWeight="normal">
            Number of travelers: {quote?.travelers}
          </Text>
        </Flex>

        <Flex>
          <Text fontSize="md" fontWeight="normal">
            Transportation: {quote?.transportation}
          </Text>
        </Flex>
      </Stack>
    </Stack>
  );
};
