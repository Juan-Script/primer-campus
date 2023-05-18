import React from "react";
import {
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

export default function TablaUsuarios({ usuario }) {
  return (
    <div>
      <Card
        margin={10}
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        borderRadius={52}
        borderWidth={3}
      >
        <Image
          objectFit="fill"
          maxW={{ base: "100%", sm: "200px" }}
          src={usuario.attributes.avatar}
          alt="Avatar"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{usuario.attributes.Nombre}</Heading>

            <Text py="2">{usuario.attributes.Email}</Text>
          </CardBody>

          {/* <CardFooter>
                <Button variant='solid' colorScheme='blue'>
                  
                </Button>
              </CardFooter> */}
        </Stack>
      </Card>
    </div>
  );
}

{
  /* // import {
//     Table,
//     Thead,
//     Tbody,
//     Tfoot,
//     Tr,
//     Th,
//     Td,
//     TableCaption,
//     TableContainer,
//   } from '@chakra-ui/react'


// export default function tablaUsuarios() {
//   return (
//     <TableContainer>
//   <Table variant='simple'>
//     <TableCaption>Usuarios actuales de OpenBootcamp</TableCaption>
//     <Thead>
//       <Tr>
//         <Th>Usuario</Th>
//         <Th>Email</Th>
//         <Th isNumeric>contraseña</Th>
//       </Tr>
//     </Thead>
//     <Tbody>
//       <Tr>
//         <Td>inches</Td>
//         <Td>millimetres (mm)</Td>
//         <Td isNumeric>25.4</Td>
//       </Tr>
//       <Tr>
//         <Td>feet</Td>
//         <Td>centimetres (cm)</Td>
//         <Td isNumeric>30.48</Td>
//       </Tr>
//       <Tr>
//         <Td>yards</Td>
//         <Td>metres (m)</Td>
//         <Td isNumeric>0.91444</Td>
//       </Tr>
//     </Tbody>
//     <Tfoot>
//       <Tr>
//         <Th>To convert</Th>
//         <Th>into</Th>
//         <Th isNumeric>multiply by</Th>
//       </Tr>
//     </Tfoot>
//   </Table>
// </TableContainer>
//   )
// } */
}
