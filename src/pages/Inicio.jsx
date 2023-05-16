import {
  Button,
  HStack,
  Flex,
  Text,
  Box,
  IconButton,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { getToken } from "../shared/getToken";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import showToast from "./Login";
import { Sidebar } from "../components/Sidebar";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { Cardcurso } from "../components/Cardcurso";
import { Cardcurso2 } from "../components/Cardcurso2";
import Cardcursos from "../components/Cardcursos";

export default function Inicio() {
  const navigate = useNavigate();

  useEffect(() => {
    let token = getToken();

    if (!token) {
      alert(showToast());
      navigate("/");
    }
  }, []);

  const LogOut = () => {
    localStorage.removeItem("Token");
    navigate("/");
  };

  const [collapse, setCollapse] = React.useState(false);

  return (
    //

    <HStack w="full" h="100vw" bg="gray.100" padding={10}>
      <Flex
        as="aside"
        w="full"
        h="full"
        maxW={collapse ? 350 : 100}
        bg="white"
        alignItems="center"
        padding={6}
        flexDirection="column"
        justifyContent="space-between"
        borderRadius="3xl"
        transition="ease-in-out .2"
      >
        <Sidebar collapse={collapse} />
      </Flex>
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
        <IconButton
          arial-Label="Menu Collapse"
          icon={<MdMenu />}
          position="absolute"
          top={6}
          left={6}
          onClick={() => setCollapse(!collapse)}
        />
        <Heading
          size="md"
          justifyContent="space-between"
          position="absolute"
          left={20}
          top={8}
        >
          Inicio
        </Heading>
        <Heading
          size="lg"
          justifyContent="space-between"
          position="absolute"
          left={30}
          top={120}
        >
          ¡Comienza a aprender con nosotros!
        </Heading>

        <Box
          display="flex"
          justifyContent="flex-start"
          position="absolute"
          top="0"
          mt="200"
          left={30}
        >
          <Cardcurso></Cardcurso>
        </Box>
        <Heading
          size="md"
          position="absolute"
          justifyContent="space-between"
          left={30}
          top={430}
        >
          Cursos mejor valorados
        </Heading>
        <HStack
          display="flex"
          justifyContent="flex-start"
          position="absolute"
          top="300"
          mt="200"
          left={30}
        >
          <Cardcurso2></Cardcurso2>
          <Cardcursos></Cardcursos>
        </HStack>
      </Flex>
    </HStack>
  );
}
