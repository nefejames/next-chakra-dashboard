import { IconButton, Flex, Text, Box, HStack, Link } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import UserProfile from "./UserProfile";

export default function Header({ onOpen, ...rest }) {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px="4"
      position="sticky"
      top="0"
      height="20"
      zIndex="1"
      alignItems="center"
      bg="white"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <Box>
        <HStack>
        <Link href="/"><Text>Radiation Oncology</Text></Link>
        <Link href="/Distributers"><Text>Where to Buy </Text></Link>
        <Link href="/"><Text>About Humo Health Care  </Text></Link>
        <Link href="/"><Text>Contact</Text></Link>
        </HStack>
      </Box>
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Humo Health Care
      </Text>

      <UserProfile />
    </Flex>
  );
}
