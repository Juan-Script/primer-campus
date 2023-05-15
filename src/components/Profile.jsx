import {
  Card,
  CardHeader,
  Box,
  Flex,
  Avatar,
  Heading,
  Text,
  IconButton,
} from "@chakra-ui/react";

import { BsThreeDotsVertical } from "react-icons/bs";

export const Profile = ({ collapse }) => (
  <Card
    maxW="md"
    borderWidth={collapse ? 1 : 0}
    borderColor="grey.200"
    pos="absolute"
    bottom="20"
    borderRadius="20"
    p={2}
    alignItems="center"
    gap={2}
    flexDirection={collapse ? "row" : "column-reverse"}
  >
    <CardHeader>
      <Flex spacing="4">
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar name="Segun Adebayo" src="https://bit.ly/dan-abramov" />

          <Box>
            <Heading size="sm">Carlos</Heading>
            <Text>Frontend Developer</Text>
          </Box>
        </Flex>
        <IconButton
          variant="ghost"
          colorScheme="gray"
          aria-label="See menu"
          icon={<BsThreeDotsVertical />}
        />
      </Flex>
    </CardHeader>
  </Card>
);
