import NextLink from "next/link";
import { Flex, Icon, Text } from "@chakra-ui/react";

export default function NavLink({ link, ...rest }) {
  const { label, icon, href } = link;

  return (
    <NextLink href={href} passHref>
      <a>
        <Flex
          align="center"
          p="2"
          
          mt={5}
          borderRadius="lg"
          role="group"
          cursor="alias"
          _hover={{
            bg: "goldenrod",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "goldenrod",
              }}
              as={icon}
            />
          )}
          <Text fontSize="1.2rem">{label}</Text>
        </Flex>
      </a>
    </NextLink>
  );
}
