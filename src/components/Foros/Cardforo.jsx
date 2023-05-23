import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Stack,
  VStack,
  InputLeftElement,
  InputGroup,
  Input,
  GridItem,
  Grid,
  Icon,
} from "@chakra-ui/react";
import { Cardpost } from "./Cardpost";
import { MdSearch } from "react-icons/md";
import { getCursos } from "../../shared/middlewares/getCursos";

export const Cardforo = () => {
  const [cursos, setCursos] = useState([]);
  const [selectedCurso, setSelectedCurso] = useState(null); // Estado para almacenar el curso seleccionado

  useEffect(() => {
    getCursos().then((response) => {
      setCursos(response);
      // console.log(response);
    });
  }, []);
  return (
    <VStack>
      <Card
        direction="column"
        position="absolute"
        top={0}
        left={350}
        overflow="hidden"
        variant="outline"
        maxW={1300}
        minW={860}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%" }}
          maxH={100}
          src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">
              {/* {cursos?.attributes?.titulo} */}JavaScript
            </Heading>
          </CardBody>

          <CardFooter>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={MdSearch} />
              </InputLeftElement>
              <Input placeholder="Buscar temas" />
            </InputGroup>
          </CardFooter>
        </Stack>
      </Card>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="blue.500">
          <Cardpost></Cardpost>
        </GridItem>
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid>
    </VStack>
  );
};
