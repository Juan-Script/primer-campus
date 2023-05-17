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
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getEmpleos } from "../shared/middlewares/getEmpleos";

const Cardempleos = () => {
  const [empleos, setEmpleos] = useState([]);

  useEffect(() => {
    getEmpleos().then((response) => {
      setEmpleos(response);
      console.log(response);
    });
  }, []);

  return (
    <HStack>
      {Array.isArray(empleos)
        ? empleos.map((empleo) => {
            return (
              <Card
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
                        <Heading size="xs">{empleo.attributes.titulo}</Heading>
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
                    <Text whiteSpace="nowrap">{empleo.attributes.salario}</Text>
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
            );
          })
        : null}
    </HStack>
  );
};

export default Cardempleos;
