import Head from "next/head";

import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import greavesglobal from "../../public/greavesglobal.jpg";
import greavesagri from "../../public/greavesagri.jpg";
import greavesengine from "../../public/greavesengine.jpg";
import greavespower from "../../public/greavespower.jpg";
import greavesspares from "../../public/greavesspares.jpg";
import { Box, Button, Container, Heading, Wrap, WrapItem } from "@chakra-ui/react";




const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Humo Health Care List | Home</title>
        <meta name="keywords" content="Humo Health Care" />
      </Head>
      
    
     


      <Box>
        
   <Container maxWidth={"-webkit-fit-content"} bgGradient={"initial"}>
   <Marquee>
          <Wrap>
            <WrapItem >
            <Image src={greavesglobal} mx={3} mt={4}/>
            </WrapItem>
          </Wrap>
          <Image src={greavesagri}mx={3} mt={4} />
          <Image src={greavesengine} mx={3}mt={4} />
          <Image src={greavespower}mx={3} mt={4} />
          <Image src={greavesagri} mx={3}mt={4} />
          <Image src={greavesspares}mx={3} mt={4} />
        
        </Marquee>

   </Container>

      
   
        <Button alignContent={"center"} justifyContent={"space-between"} mt={2} >
        <Link href="/">
          <a textColor={'blue'}>View All</a>
        </Link>
        </Button>
      </Box>
    </>
  );
}
