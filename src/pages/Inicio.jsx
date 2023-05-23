import {
  HStack,
  Flex,
  Box,
  Heading,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { getToken } from "../shared/getToken";
import { useEffect, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import showToast from "./Login";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Cardcurso } from "../components/Cursos/Cardcurso";
import Cardcursos from "../components/Cursos/Cardcursos";
import Cardempleos from "../components/Empleos/Cardempleos";
import { Formulario } from "../components/Forms/Formulario";
import { UserContext } from "../components/UserContext";

export default function Inicio() {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const { colorMode, toggleColorMode } = useColorMode();
  // const { user } = useContext(UserContext);

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

  return (
    //

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
          size="md"
          justifyContent="space-between"
          position="absolute"
          left={30}
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
          Bienvenido,{" "}
          <span
            style={{
              background: "linear-gradient(to right, #1dee8a, #3544e8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {user?.email}
          </span>{" "}
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
          <Cardcursos></Cardcursos>
        </HStack>
        <Heading
          size="md"
          position="absolute"
          justifyContent="space-between"
          left={30}
          mt="140px"
        >
          Empleos destacados
        </Heading>
        <HStack
          display="flex"
          justifyContent="flex-start"
          position="absolute"
          top={850}
          left={30}
        >
          <Cardempleos></Cardempleos>
        </HStack>
      </Flex>
    </HStack>
  );
}
