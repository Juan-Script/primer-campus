import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Cardpost } from "./Cardpost";

import { getCursos } from "../../shared/middlewares/getCursos";
import Topforo from "./Topforo";

export const Boxforo = () => {
  const [cursos, setCursos] = useState([]);
  const [selectedCurso, setSelectedCurso] = useState(null); // Estado para almacenar el curso seleccionado

  useEffect(() => {
    getCursos().then((response) => {
      setCursos(response);
      // console.log(response);
    });
  }, []);
  return (
    <Flex flexDirection="column">
      <Flex>
        <Topforo></Topforo>
      </Flex>
      <Flex>
        <Cardpost></Cardpost>
      </Flex>
    </Flex>
  );
};
