import Image from "next/image";
import { Box, Flex, chakra } from "@chakra-ui/react";
import { AiTwotoneStar } from "react-icons/ai";

const ChakraStar = chakra(AiTwotoneStar);

export default function ProductCard({ product, setModalData }) {
  const { img, title, price } = product;
  const score = Math.floor(Math.random(5) * 5);
  const reviewCount = Math.floor(Math.random(50) * 50);

  return (
    <Flex
      w="full"
      h="full"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      bg="white"
      rounded="xl"
      shadow="lg"
      borderWidth="1px"
      onClick={() => setModalData(product)}
    >
      <Box w="full" h="full">
        <Box
          w="100%"
          height="200px"
          position="relative"
          overflow="hidden"
          roundedTop="lg"
        >
          <Image
            src={img}
            objectFit="cover"
            alt="picture of a house"
            layout="fill"
          />
        </Box>

        <Box p="6">
          <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {title}
          </Box>

          <Box>${price}</Box>

          <Box d="flex" mt="3" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <ChakraStar
                  key={i}
                  color={i < score ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
