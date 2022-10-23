import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure
} from "@chakra-ui/react";

function HomePage() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
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
              <Button
                colorScheme="purple"
                variant="outline"
                size="sm"
                onClick={onOpen}
              >
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

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new quote</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack as="form">
              <FormControl>
                <FormLabel>Enter your name </FormLabel>
                <Input placeholder="Your name" type="text" />
              </FormControl>

              <SimpleGrid columns={2} gap={2}>
                <FormControl>
                  <FormLabel>Departure location</FormLabel>
                  <Input placeholder="Airport name" type="text" />
                </FormControl>

                <FormControl>
                  <FormLabel>Destination location</FormLabel>
                  <Input placeholder="Airport name" type="text" />
                </FormControl>
              </SimpleGrid>

              <SimpleGrid columns={2} gap={2}>
                <FormControl>
                  <FormLabel>Departure date</FormLabel>
                  <Input type="date" />
                </FormControl>

                <FormControl>
                  <FormLabel>Return date</FormLabel>
                  <Input type="date" />
                </FormControl>
              </SimpleGrid>

              <SimpleGrid columns={2} gap={2}>
                <FormControl>
                  <FormLabel>Number of travelers</FormLabel>
                  <Input type="number" />
                </FormControl>

                <FormControl>
                  <FormLabel>Transportation (rental car, etc)</FormLabel>
                  <Input type="text" />
                </FormControl>
              </SimpleGrid>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='green' color="white">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default HomePage;
