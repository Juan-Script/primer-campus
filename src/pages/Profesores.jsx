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
          <Tabs variant="soft-rounded" ml={0} mt={-1100}>
            <TabList>
              {profesores.map((profesor) => {
                return (
                  <Tab
                    ml={10}
                    mr={20}
                    mb
                    backgroundSize="cover"
                    backgroundPosition="center"
                    width="60px"
                    height="60px"
                  >
                    {profesor.attributes.Nombre}
                  </Tab>
                );
              })}
            </TabList>

            <TabPanels>
              {profesores.map((profesor) => {
                return (
                  <TabPanel>
                    <Box ml={5} mr={20}>
                      <Heading mt={10} size={"md"}>
                        {profesor.attributes.Nombre} -{" "}
                        {profesor.attributes.especialidad}
                      </Heading>

                      <Heading mt={5} size={"sm"}>
                        Contacto: {profesor.attributes.Email}
                      </Heading>
                      <Text mt={5}>{profesor.attributes.descripcion}</Text>
                    </Box>
                  </TabPanel>
                );
              })}
            </TabPanels>
          </Tabs>
          {/* <>
            {usuarios &&
              usuarios?.map((usuario, index) => (
                <Box margin="auto" w="50%" key={index}>
                  <TablaUsuarios usuario={usuario} />
                </Box>
              ))}
          </> */}
        </Flex>
      </HStack>
    </>
  );
}
