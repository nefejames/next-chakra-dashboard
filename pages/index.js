import { useState } from "react";
import { cardVariant, parentVariant } from "@root/motion";
import ProductModal from "@components/ProductModal ";
import { motion } from "framer-motion";
import data from "@root/data";
import ProductCard from "@components/ProductCard";
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import Carousels from "@components/Carousels";

const MotionSimpleGrid = motion(SimpleGrid);
const MotionBox = motion(Box);

export default function Home() {
  const [modalData, setModalData] = useState(null);
  return (
   <>
    <Flex>
      <Carousels/>
      </Flex>
      <SimpleGrid><Heading> Featured Products</Heading></SimpleGrid>
      <Box bgGradient={'linear(red.100 0%, orange.100 25%, yellow.100 50%)'}>
        <MotionSimpleGrid
          mt="4"
          minChildWidth="250px"
          spacing="2em"
          minH="full"
          variants={parentVariant}
          initial="initial"
          animate="animate"
        >
          {data.map((product, i) => (
            <MotionBox variants={cardVariant} key={i}>
              <ProductCard product={product} setModalData={setModalData} />
            </MotionBox>
          ))}
        </MotionSimpleGrid>
        <ProductModal
          isOpen={modalData ? true : false}
          onClose={() => setModalData(null)}
          modalData={modalData}
        />
      </Box>
     
      
      </>

  );
}
