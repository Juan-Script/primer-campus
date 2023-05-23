import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Divider,
  Text,
  Badge,
  HStack,
  VStack,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getEmpleos } from "../../shared/middlewares/getEmpleos";
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

  // Función para manejar la apertura del modal y establecer el curso seleccionado
  const handleOpenModal = (curso) => {
    setSelectedCurso(curso);
    onOpen();
  };

  const goToDetalle = (selectedCurso) => {
    navigate("/empleodetalles", { state: selectedCurso });
  };

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
