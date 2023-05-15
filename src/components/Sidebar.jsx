import { Box } from "@chakra-ui/react";
import React from "react";
import { LogoSearch } from "./LogoSearch";
import { Navigation } from "./Navigation";


export const Sidebar = () => (
    <React.Fragment>
        <Box w="full">
            <LogoSearch />
            <Navigation />
        </Box>
    </React.Fragment>
)