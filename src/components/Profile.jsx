import {
  Card,
  CardHeader,
  Box,
  Flex,
  Avatar,
  Heading,
  Text,
  IconButton,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { useNavigate } from "react-router-dom";

// export const Profile = ({ collapse }) => {
//   if (!collapse) {
//     return (
//       <Card
//         maxW="md"
//         borderWidth={collapse ? 1 : 0}
//         borderColor="grey.200"
//         pos="absolute"
//         bottom="20"
//         borderRadius="20"
//         p={2}
//         alignItems="center"
//         gap={2}
//         flexDirection={collapse ? "row" : "column-reverse"}
//       >
//         <CardHeader>
//           <Flex spacing="4">
//             <Flex flex="1" gap="4" alignItems="center">
//               <Avatar src="https://bit.ly/dan-abramov" />
//             </Flex>
//           </Flex>
//         </CardHeader>
//       </Card>
//     );
//   } else {
//     return (
//       <Card
//         maxW="md"
//         borderWidth={collapse ? 1 : 0}
//         borderColor="grey.200"
//         pos="absolute"
//         bottom="20"
//         borderRadius="20"
//         p={2}
//         alignItems="center"
//         gap={2}
//         flexDirection={collapse ? "row" : "column-reverse"}
//       >
//         <CardHeader>
//           <Flex spacing="4">
//             <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
//               <Avatar name="Segun Adebayo" src="https://bit.ly/dan-abramov" />

//               <Box>
//                 <Heading size="sm">Carlos</Heading>
//                 <Text>Frontend Developer</Text>
//               </Box>
//             </Flex>
//             <IconButton
//               variant="ghost"
//               colorScheme="gray"
//               aria-label="See menu"
//               icon={<BsThreeDotsVertical />}
//             />
//           </Flex>
//         </CardHeader>
//       </Card>
//     );
//   }
// };

export const Profile = ({ collapse }) => {
  const navigate = useNavigate();

  const LogOut = () => {
    console.log("log out");
    localStorage.removeItem("Token");
    navigate("/");
  };

  return (
    <Flex
      mt="1090"
      borderWidth={collapse ? 1 : 0}
      borderColor="gray.100"
      borderRadius="full"
      w="full"
      p={2}
      alignItems="center"
      justifyContent="space-between"
      gap={2}
      flexDirection={collapse ? "row" : "column"}
    >
      <Avatar name="perfil" src="https://bit.ly/dan-abramov" bg="teal.300" />
      {collapse && (
        <Flex
          w="full"
          flexDirection="column"
          gap={4}
          justifyContent="center"
          alignItems="flex-start"
        >
          <Text fontSize="sm" fontWeight="bold" pb={0} lineHeight={0}>
            Carlos
          </Text>
          <Text as="small" color="gray.500" fontSize={12} lineHeight={0}>
            carlos@gmail.com
          </Text>

          <Menu>
            <MenuButton
              position="absolute"
              ml="40"
              as={IconButton}
              aria-label="Options"
              icon={<MdOutlineMoreHoriz />}
              variant="outline"
            />
            <MenuList top="0 !important">
              <MenuItem top="0" onClick={LogOut}>
                Cerrar sesión
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      )}
    </Flex>
  );
};
