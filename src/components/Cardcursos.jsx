import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getCursos } from "../shared/middlewares/getCursos";

const Cardcursos = () => {
  const [cursos, setCursos] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCurso, setSelectedCurso] = useState(null); // Estado para almacenar el curso seleccionado

  useEffect(() => {
    getCursos().then((response) => {
      setCursos(response);
      //console.log(response);
    });
  }, []);

  // Función para manejar la apertura del modal y establecer el curso seleccionado
  const handleOpenModal = (curso) => {
    setSelectedCurso(curso);
    onOpen();
  };

  return (
    <HStack>
      {Array.isArray(cursos)
        ? cursos.map((curso) => {
            return (
              <>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent top={150}>
                    <ModalHeader>
                      {selectedCurso?.attributes?.titulo}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      {selectedCurso ? (
                        <>
                          <Text>{selectedCurso.attributes.tecnologia}</Text>
                        </>
                      ) : (
                        <Text>No se ha seleccionado ningún curso.</Text>
                      )}
                    </ModalBody>

                    <ModalFooter>
                      <Button bg="#32d4a4" color="white">
                        Comenzar curso
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>

                <Card
                  onClick={() => handleOpenModal(curso)} // Pasamos el curso al manejar el clic en el componente Card
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
              </>
            );
          })
        : null}
    </HStack>
  );
};

export default Cardcursos;
