import { Formik, Field, Form, ErrorMessage } from "formik";
import React from "react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import * as Yup from "yup";

const FormularioValues = {
  fullname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
};

export function Formulario() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button
        bg="#121625"
        color="white"
        size="sm"
        _hover={{ bg: "grey" }}
        _active={{ bg: "lightgrey" }}
        onClick={onOpen}
      >
        Registrarse
      </Button>

      <Formik>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />

          <ModalContent>
            <ModalHeader>Crea tu cuenta</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input ref={initialRef} placeholder="Nombre" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Apellido</FormLabel>
                <Input placeholder="Apellido" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Nombre de usuario</FormLabel>
                <Input placeholder="Nombre de usuario" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel type="email">Email</FormLabel>
                <Input placeholder="Email" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel type="password">Contraseña</FormLabel>
                <Input placeholder="Contraseña" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button bg="#32d4a4" color="white" mr={3}>
                Continuar
              </Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Formik>
    </>
  );
}
