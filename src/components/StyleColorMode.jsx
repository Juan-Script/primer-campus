import { useColorMode, useColorModeValue, Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function StyleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("red.500", "red.200");
  const color = useColorModeValue("white", "gray.800");

  return (
    <>
      <Button
        position="absolute"
        top="0"
        right="0"
        size="sm"
        onClick={toggleColorMode}
      >
        {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </>
  );
}
