import React, { useState, useEffect } from "react";
import { Button, Text, Flex } from "@chakra-ui/react";
import { getCursos } from "../../shared/middlewares/getCursos";

const Carta = ({ curso }) => {
  return (
    <Flex>
      <Text>{curso?.attributes?.titulo}</Text>
      <Text>{curso?.attributes?.categoria}</Text>
    </Flex>
  );
};

export function Pruebaforos() {
  // const data = props.data;
  const [selectedCurso, setSelectedCurso] = useState("");
  const [cursos, setCursos] = useState([]);

  const fetchData = async (id) => {
    try {
      const response = await getCursos(id);
      setSelectedCurso(response);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(selectedCurso);

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

  // console.log(fetchData);

  return (
    <Flex>
      <Flex flexDirection="column" display="inline-block">
        {Array.isArray(cursos) && cursos.length > 0 ? (
          cursos?.map((curso) => (
            <Button
              mb="3"
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
      </Flex>
      {selectedCurso && <Carta curso={selectedCurso} />}
    </Flex>
  );
}
