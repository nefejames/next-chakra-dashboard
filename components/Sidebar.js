import { useEffect } from "react";
import { useRouter } from "next/router";

import { Box, Button, CloseButton, Flex, Image, Text, useColorMode, useDisclosure, WrapItem } from "@chakra-ui/react";

import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";

import NavLink from "./NavLink";

const LinkItems = [
  { label: "Home", icon: FiHome, href: "/" },
  { label: "About Us", icon: FiTrendingUp, href: "/About" },
  { label: "Explore", icon: FiCompass, href: "/Categories" },
  { label: "Call Us", icon: FiStar, href: "/ContactUs" },
  { label: "Who We Are", icon: FiSettings, href: "/EventsGallery" },
];

export default function Sidebar({ onClose, ...rest }) {
  const { isOpen, onToggle } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", onClose);
    return () => {
      router.events.off("routeChangeComplete", onClose);
    };
  }, [router.events, onClose]);

  return (
    <Box
      bgGradient={'linear(red.100 0%, orange.100 25%, yellow.100 50%)'}
      transition="3s ease"
      bg="white"
      borderRight="1px"

      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image src="/logo.png" width={295} height={98} mt={6} />

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />

      </Flex>
      {LinkItems.map((link, i) => (
        <NavLink key={i} link={link} />
      ))}
      <Box>
        <WrapItem>
          <Button
            m={'-px'} mr={'1.5'} p={'6'} size={'lg'}

            color='black'

            onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </WrapItem>
      </Box>

    </Box>
  );
}
