import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
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

function App() {
  return (
    <Box>
      <Flex
        background="#5F6CAF"
        height={14}
        alignItems="center"
        gap={4}
        paddingX={4}
        color="white"
      >
        <Text fontSize="lg" fontWeight="bold">
          Wet Bat
        </Text>

        <Text>Find your quotes</Text>
      </Flex>

      <Container mt={4} maxW="container.lg">
        <Stack bg="#f1f1f1" p={4} borderRadius="md">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading as="h5" size="sm" color="#5F6CAF">
              My quotes
            </Heading>
            <Button colorScheme="purple" variant="outline">
              Add new quote
            </Button>
          </Flex>
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
                <Tr>
                  <Td>
                    <Tag variant="solid" colorScheme="teal">
                      Texas - Vancouver
                    </Tag>
                  </Td>
                  <Td>
                    <Tag variant="solid" colorScheme="teal">
                      12-10-2020/ 13-11-2020
                    </Tag>
                  </Td>
                  <Td>04</Td>
                  <Td>Shoes</Td>
                  <Td>João Amadeu</Td>
                </Tr>

                <Tr>
                  <Td>
                    <Tag variant="solid" colorScheme="teal">
                      Texas - Vancouver
                    </Tag>
                  </Td>
                  <Td>
                    <Tag variant="solid" colorScheme="teal">
                      12-10-2020/ 13-11-2020
                    </Tag>
                  </Td>
                  <Td>04</Td>
                  <Td>Shoes</Td>
                  <Td>João Amadeu</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
