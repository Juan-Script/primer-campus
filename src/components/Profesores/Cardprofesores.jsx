import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUsuarios } from "../../shared/middlewares/getUsuarios";

const Cardprofesores = () => {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsuarios().then((response) => {
      console.log(response);
      setUsuarios(response);
    });
  }, []);

  return (
    <HStack>
      <Card
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
          src={usuario.attributes.avatar}
          alt="Introducción a la programación"
        />

        <CardBody>
          <Heading size="xs" w="50%" whiteSpace="nowrap">
            {usuario.attributes.Nombre}
          </Heading>
        </CardBody>
        <CardFooter>
          <Text mt="-10" color="gray.600" py="2">
            {curso.attributes.Email}
          </Text>
        </CardFooter>
      </Card>
      ;
    </HStack>
  );
};

export default Cardprofesores;
