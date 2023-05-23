import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";

import { getCursos } from "../../shared/middlewares/getCursos";

export const Cardpost = () => {
  const [cursos, setCursos] = useState([]);
  const [selectedCurso, setSelectedCurso] = useState(null); // Estado para almacenar el curso seleccionado

  useEffect(() => {
    getCursos().then((response) => {
      setCursos(response);
      // console.log(response);
    });
  }, []);
  return (
    <Card
      direction="column"
      overflow="hidden"
      variant="outline"
      position="absolute"
      top={290}
      left={350}
      maxH={200}
      maxW={250}
      minW={250}
    >
      <div
        style={{
          backgroundImage: "linear-gradient(to bottom right, #4FD1C5, #4361EE)",
          minWidth: "300px",
          minHeight: "80px",
        }}
      />

      <Stack>
        <CardBody>
          {Array.isArray(cursos)
            ? cursos.map((curso) => {
                return (
                  <Heading mt={-20} size="md" color="white">
                    {curso.attributes.titulo}
                  </Heading>
                );
              })
            : null}

          <Text mt={14} py="2" color="black">
            Errores del curso
          </Text>
        </CardBody>

        <CardFooter>
          <Text mt={-8} color="gray.300">
            123 mensajes
          </Text>
        </CardFooter>
      </Stack>
    </Card>
  );
};
