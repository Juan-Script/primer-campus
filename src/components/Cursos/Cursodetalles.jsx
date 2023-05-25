import React from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../shared/getToken";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Sidebar } from "../Sidebar/Sidebar";

const Cursodetalles = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    console.log(state);
    let token = getToken();

    if (!token) {
      // showToast()
      navigate("/");
    }
  }, []);

  return (
    <Flex h="100vh">
      <Sidebar />
      <Flex
        as="main"
        w="100%"
        h="100vp"
        bg="white"
        borderRadius="3xl"
        overflow="hidden"
        flexDirection="column"
        gap={4}
      >
        <Flex
          alignItems="flex-start"
          flexDirection="column"
          justifyContent="space-between"
          spacing="18px"
          margin="30px"
          p={10}
          borderWidth={3}
          borderRadius={10}
          w="40%"
        >
          <Heading size="md" justifyContent="space-between">
            {state?.attributes?.titulo}
          </Heading>
          <Image
            mt={10}
            justifyContent="space-between"
            borderRadius={10}
            src={state?.attributes?.precio}
          ></Image>
          <Box
            display="flex"
            justifyContent="flex-start"
            flexDirection="column"
          >
            <Text mt="10">{state?.attributes?.tecnologia}</Text>
            <Text mt="5" color="gray.400">
              Nivel: {state?.attributes?.nivel}
            </Text>
            <Text color="gray.400">
              Categoria: {state?.attributes?.categoria}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Cursodetalles;
