import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";

export const Cardcurso2 = (props) => {
  return (
    <Card
      direction="column"
      overflow="hidden"
      variant="outline"
      borderRadius={30}
      display="flex"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src="https://storage.googleapis.com/openvitae-prod/cursos/ckwnek1ee0003045230j9g2q7.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&amp;X-Goog-Credential=openvitaebeta%40wired-coda-333713.iam.gserviceaccount.com%2F20230516%2Fauto%2Fstorage%2Fgoog4_request&amp;X-Goog-Date=20230516T081906Z&amp;X-Goog-Expires=518401&amp;X-Goog-SignedHeaders=host&amp;X-Goog-Signature=85381a4b8c243cfa381f994fa4c8e99f3b97a8cbbeb26a6ba5f0f19fcd37556e82fe6ad6344502f836d3e3cc6121ff0b2158edc638b864a29fa0fc5730715f94b988e7388c5846919dbc78c7cd9400efcc645705106f88b08b2075e2621a06d43d576b3da403aca9f0796412d8a81d53b1a896209f9a0a2e051ab3f512d315413bd1c957526cbd5a20f663001472b1bccdb84e3a2e9b56de762f3808cc2f46cd52243332bf6391f0203e6ee9599a1b0496c529e2d45e96adfad01c8c045fb3213806ac9b59d27af9a954b79ce13a22f6509bcef3d71e8b1a4d198131f2dbe0de97babda9e0a9e5964e980e2f018c7b8fec7765ac2077e9648d49ad5b6e5539a1"
        alt="Introducción a la programación"
      />

      <Stack>
        <CardBody>
          <Heading size="sm">Java Básico</Heading>
        </CardBody>

        <CardFooter>
          <HStack>
            <Text mt="-10" color="gray.600" py="2">
              12 módulos - 14 hrs
            </Text>
          </HStack>
        </CardFooter>
      </Stack>
    </Card>
  );
};
