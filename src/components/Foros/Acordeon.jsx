import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import { AccordionTab, Accordion } from "primereact/accordion";
import React from "react";
import { Rutasforo } from "./Rutasforo";

export const Acordeon = () => {
  return (
    <Box h="100%" w="300px">
      <Accordion activeIndex={0}>
        <AccordionTab header="Tus cursos">
          <Flex flexDirection="column" textAlign="left">
            <Rutasforo></Rutasforo>
          </Flex>
          {/* <Box ml={4} mt={4}>
          {selectedCard && <Cardforo cardTitle={selectedCard} />}
        </Box> */}
        </AccordionTab>
        <AccordionTab header="Otros cursos">
          <Flex flexDirection="column">
            <Button mb={3}>ReactJS</Button>
            <Button mb={3}>ReactJS Avanzado</Button>
            <Button>Python</Button>
          </Flex>
        </AccordionTab>
      </Accordion>
    </Box>
  );
};
