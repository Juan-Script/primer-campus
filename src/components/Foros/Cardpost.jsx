import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Stack,
  Box,
  HStack,
  Image,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { getForos } from "../../shared/middlewares/getForos";

export const Cardpost = () => {
  const [foros, setForos] = useState([]);
  const [selectedForo, setSelectedForo] = useState(null); // Estado para almacenar el curso seleccionado

  useEffect(() => {
    getForos().then((response) => {
      setForos(response);
      // console.log(response);
    });
  }, []);

  return (
    <Flex gap={5} mt={10}>
      {Array.isArray(foros)
        ? foros.map((foro) => (
            <>
              <Card
                // onClick={() => handleOpenModal(foro)} // Pasamos el curso al manejar el clic en el componente Card
                cursor="pointer"
                _hover={{
                  transform: "scale(1.05)",
                  transition: "transform 0.2s ease-in-out",
                }}
                overflow="hidden"
                borderRadius={30}
                display="flex"
                maxH={200}
                maxW={250}
                minW={250}
                // position={"absolute"}
              >
                <Image
                  objectFit="cover"
                  minWidth="300px"
                  minHeight="80px"
                  src={foro.attributes.imagen}
                />

                <CardBody>
                  <Heading
                    textAlign="left"
                    mt={-20}
                    py="2"
                    size="md"
                    color="white"
                  >
                    {foro.attributes.titulo}
                  </Heading>
                  <Text textAlign="left" mt={10} py="2" color="black">
                    {foro.attributes.descripcion}
                  </Text>
                </CardBody>
                <CardFooter>
                  <Text mt="-10" color="gray.600" py="2">
                    {foro.attributes.mensajes}
                  </Text>
                </CardFooter>
              </Card>
            </>
          ))
        : null}
    </Flex>
  );
};

//   return (
//     <Card
//       direction="column"
//       overflow="hidden"
//       variant="outline"
//       position="absolute"
//       top={290}
//       left={350}
//       maxH={200}
//       maxW={250}
//       minW={250}
//     >
//       <div
//         style={{
//           backgroundImage: "linear-gradient(to bottom right, #4FD1C5, #4361EE)",
//           minWidth: "300px",
//           minHeight: "80px",
//         }}
//       />

//       <Stack>
//         <CardBody>
//           {foros.map((foro, index) => {
//             if (index === 0) {
//               return (
//                 <Box key={foro.id}>
//                   <Heading
//                     textAlign="left"
//                     mt={-20}
//                     py="2"
//                     size="md"
//                     color="white"
//                   >
//                     {foro.attributes.titulo}
//                   </Heading>
//                   <Text textAlign="left" mt={10} py="2" color="black">
//                     {foro.attributes.descripcion}
//                   </Text>
//                   <CardFooter>
//                     <Text
//                       textAlign="left"
//                       mt={-3}
//                       ml={-5}
//                       py="2"
//                       color="gray.400"
//                     >
//                       {foro.attributes.mensajes}
//                     </Text>
//                   </CardFooter>
//                 </Box>
//               );
//             }
//             return null;
//           })}
//         </CardBody>
//       </Stack>
//     </Card>
//   );
// };
