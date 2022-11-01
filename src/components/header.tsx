import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
      <Link to="/">
        <Text fontSize="lg" fontWeight="bold">
          Wet Bat
        </Text>
      </Link>

      <Text>Find your quotes</Text>
    </Flex>
  );
};
