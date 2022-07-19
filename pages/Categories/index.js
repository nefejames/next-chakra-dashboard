import { Button, Flex, Heading, Stack, Wrap, WrapItem, Text, Link, Box, SimpleGrid, Code } from '@chakra-ui/react'
import HumoCall from '@components/Calltoaction'
import Home from '@components/Marquee'
import React from 'react'

const ProductCategories = () => {
  return (
    <>
    <Flex bgImage={'https://img.freepik.com/free-photo/daily-pills-health-treatment-with-copy-space_23-2148550994.jpg?size=626&ext=jpg&ga=GA1.2.351659000.1609782162'}>
      <Stack 
      width={'8xl'}
      >
        <Text   fontSize={'4xl'} 
        fontFamily={'monospace'}  
        fontWeight={'extrabold'} 
        px={2} my={2} 
          >
        Discover the AIO Possibilities
        </Text>
        <Wrap p={2} m={2  } display={'-ms-inline-grid'} mt={3}>
          <WrapItem >
            <Button size={'lg'} p={2} m={2}>
              <Link href='/'><a>Head, Neck & Shoulder</a></Link>
            </Button>
          </WrapItem>
          <WrapItem>
            <Button size={'lg'} p={2} m={2}>
              <Link href='/'><a>Breast, Lung</a></Link>
            </Button>
          </WrapItem>
          <WrapItem>
            <Button size={'lg'} p={2} m={2}>
            <Link href='/'><a>Belly & Pellvic</a></Link>
              </Button>
          </WrapItem>
          <WrapItem>
            <Button size={'lg'} p={2} m={2}>
              <Link href='/'><a>SBRT Functionality</a></Link>
            </Button>
          </WrapItem>
        </Wrap>
      </Stack>
    </Flex>
    <Box bgImage={'https://www.orfit.com/app/uploads/HomeSlider3AndPage5Topper-1920x0-c-default.jpg'}>
       <Box>
        <HumoCall/>
      </Box>
      <SimpleGrid>
        <Heading 
        fontSize={'4xl'} 
        fontFamily={'monospace'}  
        fontWeight={'extrabold'} 
        px={2} my={2} 
        bgColor={'white'}>
        Products
        </Heading>
        <Code mb={4}>Beacuse Every Smile Matters</Code>
      </SimpleGrid>
    </Box>
    <Box>
      <Home/>
    </Box>
    
    </>
  )
}

export default ProductCategories