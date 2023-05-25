import { Box, Flex, HStack, Heading } from "@chakra-ui/react";
import { React, useState } from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Boxforo } from "../components/Foros/Boxforo";
import { Acordeon } from "../components/Foros/Acordeon";
import { Pruebaforos } from "../components/Foros/Pruebaforos";

export default function Foros() {
  const [cursoId, setCursoId] = useState(null);

  const [selectedCard, setSelectedCard] = useState("");

  //   const { id } = useParams();

  //   const foro = foros.find(foro => foro.id === id)

  // const handleButtonClick = (card) => {
  //   setSelectedCard(card);
  // };

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
          <Heading m={5} size="lg">
            Foros
          </Heading>

          <Flex m={5} gap={4} maxH="100%" maxW="100%">
            {/* <Box>
              <Acordeon />
            </Box>
            <Flex>
              <Boxforo />
            </Flex> */}
            <Flex>
              <Pruebaforos data={selectedCurso} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

{
  /* <div>
      <h2>Cursos</h2>
      <CursoList cursos={cursos} setCursoId={setCursoId} />
      <p>ID del curso seleccionado: {cursoId}</p>
    </div> */
}

{
  /* LE PASAS LOS CURSOS COMO DATA Y LE PASAS EL ID Y DENTRO HACES UN DATA.FIND Y FILTRAS POR ID Y AHI PODES MOSTRAR ESOS DATOS */
}
