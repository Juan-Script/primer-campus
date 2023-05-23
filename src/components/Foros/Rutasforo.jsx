import React from "react";
import { VStack, useDisclosure, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { getCursos } from "../../shared/middlewares/getCursos";

export const Rutasforo = () => {
  const [cursos, setCursos] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCurso, setSelectedCurso] = useState(null); // Estado para almacenar el curso seleccionado
  const navigate = useNavigate();

  useEffect(() => {
    getCursos().then((response) => {
      setCursos(response);
      console.log(response);
    });
  }, []);
  // SACAR CURSOS EN FOROS Y TRAER POR PROPS COMO DATA Y EL MAP HACERLO A DATA
  // HACER EN FOROS UN STADO DE ID SETID Y ACA PASARLE EL SET ID HACER UN ONCLICK EN EL MAP Y SETEAR EL CURSO.ID

  //   Función para manejar la apertura del modal y establecer el curso seleccionado
  //   const handleOpenModal = (curso) => {
  //     setSelectedCurso(curso);
  //     onOpen();
  //   };

  //   const goToDetalle = (selectedCurso) => {
  //     navigate("/empleodetalles", { state: selectedCurso });
  //   };

  return (
    <VStack>
      {Array.isArray(cursos)
        ? cursos.map((curso) => {
            return <Button w="full">{curso.attributes.titulo}</Button>;
          })
        : null}
    </VStack>
  );
};
