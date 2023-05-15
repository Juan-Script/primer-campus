import { Box } from "@chakra-ui/react";
import React from "react";
import { LogoSearch } from "./LogoSearch";
import { Navigation } from "./Navigation";
import { Profile } from "./Profile";

export const Sidebar = ({ collapse }) => (
  <React.Fragment>
    <Box w="full">
      <LogoSearch collapse={collapse} />
      <Navigation collapse={collapse} />
      <Profile collapse={collapse} />
    </Box>
  </React.Fragment>
);
