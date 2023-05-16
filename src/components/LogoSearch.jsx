import { Box, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { AiFillThunderbolt, AiOutlineSearch } from "react-icons/ai";
import { TbBrandGitlab } from "react-icons/tb";

export const LogoSearch = ({ collapse }) => (
  <Flex
    w="full"
    alignItems="center"
    justifyContent="space-between"
    flexDirection={collapse ? "row" : "column"}
    gap={4}
  >
    <Box display="flex" alignItems="center" gap={2}>
      <Icon as={TbBrandGitlab} fontSize={30} />
      {collapse && (
        <Text whiteSpace="nowrap" fontWeight="bold" fontSize={22}>
          My Campus
        </Text>
      )}
    </Box>
    <IconButton
      aria-label="Search"
      variant="ghost"
      icon={<AiOutlineSearch />}
      fontSize={26}
      color="gray.400"
      borderRadius="10%"
    />
  </Flex>
);
