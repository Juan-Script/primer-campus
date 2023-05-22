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

export const Cardcurso = () => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      borderRadius={30}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src="http://localhost:1337/uploads/thumbnail_ckwneqwac000g0452b0yk4cxl_fa6d66c04f.png"
        alt="Introducción a la programación"
      />

      <Stack>
        <CardBody>
          <Heading size="xs" fontWeight={10}>
            CONCEPTOS DE LA PROGRAMACIÓN
          </Heading>

          <Text py="2">Introducción al ecosistema de la programación</Text>
        </CardBody>

        <CardFooter>
          <HStack spacing={20}>
            <Text color="gray.600" py="2">
              Video - 5 min
            </Text>
            <Button textColor="white" variant="solid" bg="#121625">
              Comienza la lección
            </Button>
          </HStack>
        </CardFooter>
      </Stack>
    </Card>
  );
};
