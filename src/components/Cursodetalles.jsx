import React from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../shared/getToken";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardFooter,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const Cursodetalles = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    console.log(state);
    let token = getToken();

    if (!token) {
      // showToast()
      navigate("/");
    }
  }, []);

  return (
    <Card
      ml="10"
      mt="10"
      maxW="700px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      borderColor="green.200"
    >
      <VStack
        alignItems="flex-start"
        flexDirection="column"
        justifyContent="space-between"
        spacing="18px"
        margin="30px"
      >
        <Heading mb="10">{state?.attributes?.titulo}</Heading>
        <Image borderRadius={10} src={state?.attributes?.precio}></Image>
        <Text>{state?.attributes?.tecnologia}</Text>
        <CardFooter flexDirection="column">
          <Text color="gray.400">Nivel: {state?.attributes?.nivel}</Text>
          <Text color="gray.400">
            Categoria: {state?.attributes?.categoria}
          </Text>
        </CardFooter>
      </VStack>
    </Card>
  );
};

export default Cursodetalles;
