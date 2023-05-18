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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getEmpleos } from "../../shared/middlewares/getEmpleos";
import { useNavigate } from "react-router-dom";

const Cardempleos = () => {
  const [empleos, setEmpleos] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedEmpleo, setSelectedEmpleo] = useState(null); // Estado para almacenar el curso seleccionado
  const navigate = useNavigate();

  useEffect(() => {
    getEmpleos().then((response) => {
      setEmpleos(response);
      console.log(response);
    });
  }, []);

  // Función para manejar la apertura del modal y establecer el curso seleccionado
  const handleOpenModal = (empleo) => {
    setSelectedEmpleo(empleo);
    onOpen();
  };

  const goToDetalle = (selectedEmpleo) => {
    navigate("/empleodetalles", { state: selectedEmpleo });
  };

  return (
    <HStack>
      {Array.isArray(empleos)
        ? empleos.map((empleo) => {
            return (
              <>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent top={150}>
                    <ModalHeader>
                      {selectedEmpleo?.attributes?.titulo}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      {selectedEmpleo ? (
                        <>
                          <Text>{selectedEmpleo.attributes.empresa}</Text>
                        </>
                      ) : (
                        <Text>No se ha seleccionado ningún empleo.</Text>
                      )}
                    </ModalBody>

                    <ModalFooter>
                      <Button
                        bg="#32d4a4"
                        color="white"
                        onClick={() => goToDetalle(selectedEmpleo)}
                      >
                        Comenzar curso
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
                <Card
                  onClick={() => handleOpenModal(empleo)}
                  cursor="pointer"
                  _hover={{
                    bg: "gray.100",
                    transition: "transform 0.3 easeout",
                  }}
                  maxH="220px"
                  minH="220px"
                  variant="outline"
                  alignItems="flex-start !important"
                >
                  <CardBody>
                    <Stack mt="6" spacing="3" width={3}>
                      <HStack mt="-5" spacing="20">
                        <VStack>
                          <Heading size="xs">
                            {empleo.attributes.titulo}
                          </Heading>
                          <Text
                            fontSize="sm"
                            whiteSpace="nowrap"
                            textAlign="left !important"
                          >
                            {empleo.attributes.empresa}
                          </Text>
                        </VStack>
                        <Image
                          objectFit="cover"
                          width="80px"
                          height="80px"
                          maxW="52px"
                          maxH="52px"
                          borderRadius="full"
                          src={empleo.attributes.imagen}
                        ></Image>
                      </HStack>
                      <Text whiteSpace="nowrap">
                        {empleo.attributes.salario}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <HStack>
                      <Badge
                        fontWeight="medium"
                        variant="outline"
                        colorScheme={
                          empleo.attributes.jornada === "Completa"
                            ? "purple"
                            : "red"
                        }
                      >
                        {empleo.attributes.jornada}
                      </Badge>
                      <Badge
                        fontWeight="medium"
                        variant="outline"
                        colorScheme={
                          empleo.attributes.modalidad === "Remoto"
                            ? "green"
                            : empleo.attributes.modalidad === "Híbrida"
                            ? "yellow"
                            : "orange"
                        }
                      >
                        {empleo.attributes.modalidad}
                      </Badge>
                      <Badge
                        fontWeight="medium"
                        variant="outline"
                        colorScheme="gray"
                      >
                        {empleo.attributes.lugar}
                      </Badge>
                    </HStack>
                  </CardFooter>
                </Card>
              </>
            );
          })
        : null}
    </HStack>
  );
};

export default Cardempleos;
