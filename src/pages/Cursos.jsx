import { React, useState, useEffect } from "react";
import { getCursos } from "../shared/middlewares/getCursos";
import TablaCursos from "../components/Cursos/TablaCursos";
import getToken from "./Login";
import { useNavigate } from "react-router-dom";
import { HStack, Flex, Box, Heading } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import Cardcursos from "../components/Cursos/Cardcursos";

export default function Cursos() {
  const [cursos, setCursos] = useState();
  const navigate = useNavigate();

  // useEffect(() => {
  //   let token = getToken();

  //   if (!token) {
  //     // showToast()
  //     navigate("/");
  //   }
  // }, []);

  const getData = () => {
    getCursos().then((response) => {
      setCursos(response);
    });
  };

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
        <Heading
          size="lg"
          justifyContent="space-between"
          position="absolute"
          left={30}
          top={8}
        >
          Cursos
        </Heading>
        <Heading
          size="md"
          justifyContent="space-between"
          position="absolute"
          left={30}
          top={28}
        >
          Cursos en progreso
        </Heading>
        <Box
          display="flex"
          justifyContent="flex-start"
          position="absolute"
          left={30}
          top={40}
        >
          <Cardcursos />
        </Box>
        <Heading
          size="md"
          justifyContent="space-between"
          position="absolute"
          left={30}
          top={470}
        >
          Cursos
        </Heading>
      </Flex>
    </HStack>
  );
}
