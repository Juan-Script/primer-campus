import React from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../shared/getToken";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { HStack, Flex, Heading, Box } from "@chakra-ui/react";
import Cardempleos from "../components/Empleos/Cardempleos";

const Empleos = () => {
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
        h="100%"
        bg="white"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
        borderRadius="3xl"
        overflow="hidden"
      >
        <Heading
          size="lg"
          justifyContent="space-between"
          position="absolute"
          left={30}
          top={8}
        >
          Empleos
        </Heading>
        <Heading
          size="md"
          justifyContent="space-between"
          position="absolute"
          left={30}
          top={28}
        >
          Vacantes
        </Heading>
        <Box
          display="flex"
          justifyContent="flex-start"
          position="absolute"
          left={30}
          top={40}
        >
          <Cardempleos />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Empleos;
