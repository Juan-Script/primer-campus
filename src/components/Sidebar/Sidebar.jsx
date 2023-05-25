import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { LogoSearch } from "./LogoSearch";
import { Navigation } from "./Navigation";
import { Profile } from "./Profile";

export const Sidebar = () => {
  const [collapses, setCollapse] = React.useState(false);

  return (
    <Flex
      as="aside"
      w="full"
      h="100vp"
      maxW={collapses ? 350 : 100}
      bg="gray.100"
      alignItems="center"
      padding={6}
      flexDirection="column"
      justifyContent="space-between"
      borderTopRightRadius="3xl"
      borderBottomRightRadius="3xl"
      transition="ease 0.5s "
      onMouseEnter={() => setCollapse(!collapses)}
      onMouseLeave={() => setCollapse(!collapses)}
    >
      <React.Fragment>
        <Box w="full">
          <LogoSearch collapse={collapses} />
          <Navigation collapse={collapses} />
          <Profile collapse={collapses} />
        </Box>
      </React.Fragment>
    </Flex>
  );
};
