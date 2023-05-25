import React, { useState, useEffect } from "react";
import { Button, Box, Text, VStack, Flex } from "@chakra-ui/react";
import axios from "axios";
import { getCursos } from "../../shared/middlewares/getCursos";

const Carta = ({ curso }) => {
  return (
    <Box borderWidth="1px" borderRadius="md" p={4} mb={4}>
      <Text fontWeight="bold">{curso.attributes.titulo}</Text>
      <Text>{curso.attributes.descripcion}</Text>
    </Box>
  );
};

export function Pruebaforos(props) {
  const data = props.data;
  const [selectedCurso, setSelectedCurso] = useState(null);
  const [cursos, setCursos] = useState([]);

  const fetchData = async (id) => {
    try {
      const response = await getCursos(id);
      setSelectedCurso(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleButtonClick = async (id) => {
    await fetchData(id);
  };

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        await getCursos()
          .then((response) => {
            const data = response;
            return data;
          })
          .then((data) => setCursos(data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchCursos();
  }, []);

  console.log(cursos);

  return (
    <Flex>
      <VStack>
        {Array.isArray(cursos) && cursos.length > 0 ? (
          cursos?.map((curso) => (
            <Button
              key={curso.id}
              w="100%"
              onClick={() => handleButtonClick(curso.id)}
            >
              {curso?.attributes?.titulo}
            </Button>
          ))
        ) : (
          <Text>No se encontraron cursos</Text>
        )}
      </VStack>

      {selectedCurso && <Carta curso={selectedCurso} />}
    </Flex>
  );
}
