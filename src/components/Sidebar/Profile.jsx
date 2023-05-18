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
import { useToast } from "@chakra-ui/react";

export const Profile = ({ collapse }) => {
  const navigate = useNavigate();
  const toast = useToast();

  const LogOut = () => {
    // console.log("log out");
    localStorage.removeItem("Token");
    navigate("/");
    showToastlogout();
  };
  const toastlogout = useToast();
  const showToastlogout = () => {
    toast({
      title: "Logout correcto",
      description: "¡Nos vemos pronto!",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
    });
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
