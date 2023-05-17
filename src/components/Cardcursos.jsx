import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getCursos } from "../shared/middlewares/getCursos";

const Cardcursos = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    getCursos().then((response) => {
      setCursos(response);
      //   console.log(response);
    });
  }, []);

  return (
    <HStack>
      {Array.isArray(cursos)
        ? cursos.map((curso) => {
            return (
              <Card
                cursor="pointer"
                _hover={{
                  transform: "scale(1.05)",
                  transition: "transform 0.2s ease-in-out",
                }}
                direction="column"
                overflow="hidden"
                variant="outline"
                borderRadius={30}
                display="flex"
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={curso.attributes.precio}
                  alt="Introducción a la programación"
                />

                <CardBody>
                  <Heading size="xs" w="50%" whiteSpace="nowrap">
                    {curso.attributes.titulo}
                  </Heading>
                </CardBody>
                <CardFooter>
                  <Text mt="-10" color="gray.600" py="2">
                    {curso.attributes.categoria}
                  </Text>
                </CardFooter>
              </Card>
            );
          })
        : null}
    </HStack>
  );
};

export default Cardcursos;
