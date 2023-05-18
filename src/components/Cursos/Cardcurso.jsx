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
        src="https://storage.googleapis.com/openvitae-prod/cursos/ckwneqwac000g0452b0yk4cxl.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&amp;X-Goog-Credential=openvitaebeta%40wired-coda-333713.iam.gserviceaccount.com%2F20230515%2Fauto%2Fstorage%2Fgoog4_request&amp;X-Goog-Date=20230515T152226Z&amp;X-Goog-Expires=518400&amp;X-Goog-SignedHeaders=host&amp;X-Goog-Signature=11325812e499ec0a0e928f5a880e068da98e7f8bae2a4c5276158553a4c1c77244c0dc5c78ad56e6361cf0cdd118087512cdfdb26fc1004cb085aab145bfb3685bbb92c65c99e2393d30f5843e0947c66e9bfe42ad7abf972318166ab6ece0d6aecc1f6edec376b19e9fc5f3255844924324535fc55b6c3dd225bc47d16d01c062abfef839ada01a6df8156c01a39f85b3851a4e5a543fddbafaf4187f54368bedf16f10daa66391bc6b3f7593496269396259bd0778edc38e05bcdb6a83efadc28d7de194f0f809a79281368b643d47d69e602c36ca7e22e07f0bdd184ce744c0d41489b66fa4d2f993bbacf8bbf29c551ad157026d13d8ef860d6ca8b3160a"
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
