import React from "react";
import {
  ListIcon,
  Link as LinkChakra,
  Box,
  Badge,
  Text,
  Heading,
  Link,
  Icon,
  Card,
} from "@chakra-ui/react";
import { Profile } from "../Profile";

export const NavItem = ({ item, isActive, collapse }) => {
  const { label } = item;

  if (item.type === "link") {
    const { icon, notifications, messages, path } = item;

    return (
      <Box display="flex" alignItems="center" my={6} justifyContent="center">
        <LinkChakra
          href={path}
          as={Link}
          gap={1}
          display="flex"
          alignItems="center"
          fontWeight="medium"
          w="full"
          color={isActive ? "black" : "gray.400"}
          _hover={{ textDecoration: "none", color: "black" }}
          justifyContent={!collapse ? "center" : ""}
        >
          {/* <ListIcon as={icon} fontSize={22} m={0} /> */}

          <Icon as={icon} fontSize={20} />
          {collapse && <Text>{label}</Text>}
        </LinkChakra>
        {collapse && (
          <React.Fragment>
            {notifications && (
              <Badge
                borderRadius="full"
                colorScheme="yellow"
                w={6}
                textAlign="center"
              >
                {notifications}
              </Badge>
            )}
            {messages && (
              <Badge
                borderRadius="full"
                colorScheme="green"
                w={6}
                textAlign="center"
              >
                {messages}
              </Badge>
            )}
          </React.Fragment>
        )}
      </Box>
    );
  }
  return (
    <Heading
      color="gray.400"
      fontWeight="medium"
      textTransform="uppercase"
      fontSize="sm"
      borderTopWidth={1}
      borderColor="gray.100"
      pt={collapse ? 8 : 0}
      my={6}
    >
      <Text display={collapse ? "flex" : "none"}>{label}</Text>
    </Heading>
  );
};
