import React from "react";
import { useState, useEffect } from "react";

import {
  Box,
  HStack,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  Heading,
  Text,
  Image,
  Divider,
  GridItem,
  Grid,
  Badge,
} from "@chakra-ui/react";
import TablaUsuarios from "../components/Profesores/TablaUsuarios";
import { useNavigate } from "react-router-dom";
import { getToken } from "../shared/getToken";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { getProfesores } from "../shared/middlewares/getProfesores";

export default function Profesores() {
  const [profesores, setProfesores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let token = getToken();

    if (!token) {
      // showToast()
      navigate("/");
    }

    getProfesores().then((response) => {
      console.log(response);
      setProfesores(response);
    });
  }, []);

  return (
    <>
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
          <Box>
            <Tabs variant="soft-rounded">
              <Box m={5}>
                <TabList>
                  {profesores.map((profesor) => {
                    return (
                      <Tab
                        m={5}
                        backgroundSize="cover"
                        backgroundPosition="center"
                        width="100%"
                        height="100%"
                      >
                        {profesor.attributes.Nombre}
                      </Tab>
                    );
                  })}
                </TabList>
              </Box>
              <Box>
                <TabPanels>
                  {profesores.map((profesor) => {
                    return (
                      <TabPanel>
                        <Flex
                          alignItems="flex-start"
                          flexDirection="row"
                          borderWidth={1}
                          borderRadius={20}
                          p={5}
                          mr={13}
                        >
                          <Box ml={5} mr={20}>
                            <Heading size={"md"}>
                              {profesor.attributes.Nombre} -{" "}
                              {profesor.attributes.especialidad}
                            </Heading>

                            <Heading mt={5} size={"sm"}>
                              Contacto: {profesor.attributes.Email}
                            </Heading>
                            <Text mt={10} maxW={700} minW={700}>
                              {profesor.attributes.descripcion}
                            </Text>
                          </Box>

                          <Box>
                            <Image
                              maxH="70%"
                              maxW="100%"
                              borderRadius={10}
                              src={profesor.attributes.imagen}
                            />
                          </Box>
                        </Flex>
                      </TabPanel>
                    );
                  })}
                </TabPanels>
              </Box>
            </Tabs>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

{
  /* <>
            {usuarios &&
              usuarios?.map((usuario, index) => (
                <Box margin="auto" w="50%" key={index}>
                  <TablaUsuarios usuario={usuario} />
                </Box>
              ))}
          </> */
}
