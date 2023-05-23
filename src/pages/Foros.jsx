import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { React, useState } from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Accordion, AccordionTab } from "primereact/accordion";

import { MdSearch } from "react-icons/md";
import { Cardpost } from "../components/Foros/Cardpost";
import { useParams } from "react-router-dom";
import { Rutasforo } from "../components/Foros/Rutasforo";
import { Cardforo } from "../components/Foros/Cardforo";

export default function Foros() {
  const [selectedCard, setSelectedCard] = useState("");
  //   const { id } = useParams();

  //   const foro = foros.find(foro => foro.id === id)

  const handleButtonClick = (card) => {
    setSelectedCard(card);
  };

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
          <Heading
            size="lg"
            justifyContent="space-between"
            position="absolute"
            left={30}
            top={8}
          >
            Foros
          </Heading>

          <Box
            margin={30}
            maxH={20}
            maxW={300}
            minW={300}
            position="absolute"
            top={20}
            left={0}
          >
            <Accordion activeIndex={0}>
              <AccordionTab header="Tus cursos">
                <VStack alignItems="initial" textAlign="left">
                  <Rutasforo></Rutasforo>
                </VStack>
                <Box ml={4} mt={4}>
                  {selectedCard && <Cardforo cardTitle={selectedCard} />}
                </Box>
              </AccordionTab>
              <AccordionTab header="Otros cursos">
                <VStack alignItems="-moz-initial">
                  <Button>ReactJS</Button>
                  <Button>ReactJS Avanzado</Button>
                  <Button>Python</Button>
                  <Button>Docker</Button>
                  <Button>PHP</Button>
                  <Button>Git</Button>
                  <Button>Hibernate</Button>
                  <Button>C#</Button>
                  <Button>FC Fullstack</Button>
                  <Button>FC Frontend</Button>
                  <Button>TypeScript</Button>
                </VStack>
              </AccordionTab>
            </Accordion>

            {/* LE PASAS LOS CURSOS COMO DATA Y LE PASAS EL ID Y DENTRO HACES UN DATA.FIND Y FILTRAS POR ID Y AHI PODES MOSTRAR ESOS DATOS */}
            <Cardforo></Cardforo>
          </Box>
        </Flex>
      </HStack>
    </>
  );
}
