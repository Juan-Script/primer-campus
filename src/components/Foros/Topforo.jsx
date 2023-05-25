import {
  Box,
  Image,
  Heading,
  Stack,
  VStack,
  InputLeftElement,
  InputGroup,
  Input,
  GridItem,
  SimpleGrid,
  Icon,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { MdSearch } from "react-icons/md";

export default function Topforo() {
  return (
    <Box p="34px" gap="30px" borderWidth="1px" borderRadius="lg" w="100%">
      <Flex flexDir="column" gap="25px">
        <Image
          borderRadius="lg"
          objectFit="cover"
          w="100%"
          h="100px"
          src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />

        <Box>
          <Heading size="md">
            {/* {cursos?.attributes?.titulo} */}
            JavaScript
          </Heading>

          <InputGroup mt="20px">
            <InputLeftElement pointerEvents="none">
              <Icon as={MdSearch} />
            </InputLeftElement>
            <Input placeholder="Buscar temas" />
          </InputGroup>
        </Box>
      </Flex>
    </Box>
  );
}
