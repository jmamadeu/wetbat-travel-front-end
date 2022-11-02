import {
  Button,
  Container,
  Flex, Heading, Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent, ModalHeader,
  ModalOverlay, Stack,
  useDisclosure
} from "@chakra-ui/react";
import { QuoteSaveForm } from "./quote-save-form";

type QuoteContainerProps = {
  children: React.ReactNode;
};

export const QuoteContainer: React.FC<QuoteContainerProps> = ({ children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Container mt={4} maxW="container.xl">
      <Stack  p={4} borderRadius="md">
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
          <ModalHeader>Save Quote</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <QuoteSaveForm onSuccess={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};
