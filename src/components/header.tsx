import { Flex, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
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
  );
};
