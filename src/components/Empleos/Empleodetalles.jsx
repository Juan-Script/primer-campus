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
          borderWidth={2}
          borderRadius={10}
          p={5}
          w="25%"
        >
          <Heading size="md" justifyContent="space-between">
            {state?.attributes?.titulo}
          </Heading>
          <Image
            justifyContent="space-between"
            borderRadius={10}
            src={state?.attributes?.precio}
          ></Image>
          <Box
            display="flex"
            justifyContent="flex-start"
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
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Empleodetalles;
