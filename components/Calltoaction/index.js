import React from "react";
import { chakra, Box, Flex, Stack, Link } from "@chakra-ui/react";

export default function HumoCall() {
    return (
        <Flex

            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                bgImage={'https://media.istockphoto.com/photos/soft-pink-to-orange-gradient-background-picture-id1370245734?b=1&k=20&m=1370245734&s=170667a&w=0&h=2U_1Isrk8IfaWS2MMKjKXeSgw5qSec040CJUOYIG5WU='}>
                <Box
                    maxW="4xl"
                    w={{ md: "3xl", lg: "4xl" }}
                    mx="auto"
                    py={{ base: 12, lg: 16 }}
                    px={{ base: 4, lg: 8 }}
                    display={{ lg: "flex" }}
                    alignItems={{ lg: "center" }}
                    justifyContent={{ lg: "space-between" }}
                >
                    <chakra.h2
                        fontSize={{ base: "2xl", sm: "-moz-initial" }}
                        fontWeight="medium"
                        letterSpacing="wide"
                        lineHeight="shorter"
                        color="InfoBackground"
                        _dark={{ color: "gray.100" }}
                    >
                        <chakra.span display="block" >Resources </chakra.span>
                        <chakra.span
                            display="block"
                            color="brand.600"
                            _dark={{ color: "gray.500" }}
                        >
                            Humo Health Care Private Limited resources include product demonstrations
                            and product insights to help you choose the
                            patient setup and immobilization systems you need for
                            your clinic.

                        </chakra.span>
                    </chakra.h2>
                    <Stack
                        direction={{ base: "column", sm: "row" }}
                        mt={{ base: 8, lg: 0 }}
                        flexShrink={{ lg: 0 }}
                    >
                        <Link
                            w={["full", , "auto"]}
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                            px={5}
                            py={3}
                            border="solid transparent"
                            fontWeight="bold"
                            rounded="md"
                            shadow="md"
                            _light={{ color: "white" }}
                            bg="brand.600"
                            _dark={{ bg: "brand.500" }}
                            _hover={{
                                bg: "brand.700",
                                _dark: { bg: "brand.600" },
                            }}
                        >
                            Get started
                        </Link>
                        <Link
                            w={["full", , "auto"]}
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                            px={5}
                            py={3}
                            border="solid transparent"
                            fontWeight="bold"
                            rounded="md"
                            shadow="md"
                            color="brand.600"
                            bg="white"
                            _hover={{
                                bg: "brand.50",
                            }}
                        >
                            Learn More
                        </Link>
                    </Stack>
                </Box>
            </Box>
        </Flex>
    );
};
