import React from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../shared/getToken";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Card,
  CardFooter,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Sidebar } from "../Sidebar/Sidebar";

const Empleodetalles = () => {
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
    <HStack w="full" h="100vw" bg="gray.100" padding={10}>
      <Sidebar />
      <Flex
        as="main"
        w="100%"
        h="100%"
        bg="white"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
        borderRadius="3xl"
      >
        <VStack
          alignItems="flex-start"
          flexDirection="column"
          justifyContent="space-between"
          spacing="18px"
          margin="30px"
        >
          <Heading
            size="md"
            justifyContent="space-between"
            position="absolute"
            left={30}
            top={8}
          >
            {state?.attributes?.titulo}
          </Heading>
          <Image
            justifyContent="space-between"
            position="absolute"
            left={30}
            top={20}
            borderRadius={10}
            src={state?.attributes?.precio}
          ></Image>
          <Box
            display="flex"
            justifyContent="flex-start"
            position="absolute"
            top="60"
            mt="200"
            left={30}
            flexDirection="column"
            paddingRight="40"
          >
            <Text mt="10">{state?.attributes?.empresa}</Text>
            <Text mt="5" color="gray.400">
              Jornada: {state?.attributes?.jornada}
            </Text>
            <Text color="gray.400">Salario: {state?.attributes?.salario}</Text>
            <Text>Lugar: {state?.attributes?.lugar}</Text>
            <Text>Modalidad: {state?.attributes?.modalidad}</Text>
          </Box>
        </VStack>
      </Flex>
    </HStack>
  );
};

export default Empleodetalles;
