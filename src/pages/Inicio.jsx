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
          Bienvenido, {user?.email} ¡Comienza a aprender con nosotros!
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

          <div>
            <h2>Home</h2>
            {/* <div>{value}</div>
            <button onClick={() => setValue("hey")}>login</button>
            {console.log(value)}
            <pre>{JSON.stringify(value, null, 2)}</pre> */}
          </div>
          {/* <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button> */}
        </HStack>
      </Flex>
    </HStack>
  );
}
