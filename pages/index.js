import { useState } from "react";
import { cardVariant, parentVariant } from "@root/motion";
import CardModal from "@components/CardModal";
import { motion } from "framer-motion";
import data from "@root/data";
import Card from "@components/Card";
import { Box, SimpleGrid } from "@chakra-ui/react";

const MotionSimpleGrid = motion(SimpleGrid);
const MotionBox = motion(Box);

export default function Home() {
  const [modalData, setModalData] = useState(null);
  return (
    <Box>
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
            <Card product={product} setModalData={setModalData} />
          </MotionBox>
        ))}
      </MotionSimpleGrid>
      <CardModal
        isOpen={modalData ? true : false}
        onClose={() => setModalData(null)}
        modalData={modalData}
      />
    </Box>
  );
}
