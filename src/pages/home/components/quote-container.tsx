import {
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
  useDisclosure
} from "@chakra-ui/react";

type QuoteContainerProps = {
  children: React.ReactNode;
};

export const QuoteContainer: React.FC<QuoteContainerProps> = ({ children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Container mt={4} maxW="container.xl">
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

        {children}
      </Stack>

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
            <Button colorScheme="green" color="white">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};
