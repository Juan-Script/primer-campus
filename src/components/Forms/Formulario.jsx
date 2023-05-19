import { Formik, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
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
  name: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
};

const schema = Yup.object().shape({
  name: Yup.string().required("Nombre es un campo requerido"),
  lastname: Yup.string().required("Apellido es un campo requerido"),
  username: Yup.string().required("Nombre de usuario es un campo requerido"),
  email: Yup.string()
    .required("Email es un campo requerido")
    .email("Formato de email inválido"),
  password: Yup.string()
    .required("Contraseña es un campo requerido")
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
});

export function Formulario() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const formRef = React.useRef(null);

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

      <Formik
        validationSchema={schema}
        initialValues={FormularioValues}
        onSubmit={(values) => {
          // console.log(values);
          alert(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <form noValidate onSubmit={handleSubmit}>
              <ModalContent>
                <ModalHeader>Crea tu cuenta</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Nombre</FormLabel>
                    <Input
                      ref={initialRef}
                      placeholder="Nombre"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      borderColor={
                        errors.name && touched.name ? "red" : undefined
                      }
                    />{" "}
                    {errors.name && touched.name && (
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error"
                      />
                    )}
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Apellido</FormLabel>
                    <Input
                      placeholder="Apellido"
                      name="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      borderColor={
                        errors.lastname && touched.lastname ? "red" : undefined
                      }
                    />
                    {errors.lastname && touched.lastname && (
                      <ErrorMessage
                        name="lastname"
                        component="div"
                        className="error"
                      />
                    )}
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Nombre de usuario</FormLabel>
                    <Input
                      placeholder="Nombre de usuario"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      borderColor={
                        errors.username && touched.username ? "red" : undefined
                      }
                    />
                    {errors.username && touched.username && (
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="error"
                      />
                    )}
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      borderColor={
                        errors.email && touched.email ? "red" : undefined
                      }
                    />
                    {errors.email && touched.email && (
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                      />
                    )}
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Contraseña</FormLabel>
                    <Input
                      type="password"
                      placeholder="Contraseña"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      borderColor={
                        errors.password && touched.password ? "red" : undefined
                      }
                    />
                    {errors.password && touched.password && (
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="error"
                      />
                    )}
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button
                    type="submit"
                    bg="#32d4a4"
                    color="white"
                    mr={3}
                    onClick={onClose}
                  >
                    Continuar
                  </Button>
                  <Button onClick={onClose}>Cancelar</Button>
                </ModalFooter>
              </ModalContent>
            </form>
          </Modal>
        )}
      </Formik>
    </>
  );
}
