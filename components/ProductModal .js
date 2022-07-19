import Image from "next/image";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useToast,
  Flex,
} from "@chakra-ui/react";

export default function ProductModal({ isOpen, onClose, modalData }) {
  const { title, price, img, details } = modalData || {};
  const toast = useToast();

  const handleModalClose = () => {
    toast({
      title: "Product Added to the cart.",
      description: "Cart",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>Product Details</ModalHeader>
        <ModalBody>
          <Box w="full" h="full">
            <Flex w="full" h="300px" position="relative">
              <Image src={img} alt="a house" objectFit="cover" layout="fill" />
            </Flex>

            <Box pt="3">
              <Box
                mt="3"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
                textColor={"goldenrod"}
              >
                {title}
              </Box>
              <Box
                mt="3"
                justifyItems={"center"}
                fontWeight="semibold"
                fontFamily={"heading"}
                as="h4"
                textColor={"GrayText"}
                lineHeight="tight"
                isTruncated
              >
                {details}
              </Box>
             
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button
            bg="cyan.700"
            color="white"
            w="150px"
            size="lg"
            onClick={handleModalClose}
            _hover={{ bg: "cyan.800" }}
          >
            Purchase
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
