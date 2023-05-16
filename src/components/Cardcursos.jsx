import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  HStack,
  Box,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getCursos } from "../shared/middlewares/getCursos";

const Cardcursos = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    getCursos().then((response) => {
      setCursos(response);
      console.log(response);
    });
  }, []);

  return (
    <HStack>
      {Array.isArray(cursos)
        ? cursos.map((curso) => {
            return (
              <Card>
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={curso.attributes.precio}
                  alt="Introducción a la programación"
                />
                <Box margin="auto" w="50%">
                  <Card curso={curso.attributes.categoria} />
                </Box>
              </Card>
            );
          })
        : null}
    </HStack>
  );
};

export default Cardcursos;
