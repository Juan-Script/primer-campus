import {Box, Flex, Icon, IconButton, Text} from "@chakra-ui/react"
import {AiFillThunderbolt, AiOutlineSearch} from 'react-icons/ai'

export const LogoSearch = () => (
    <Flex w="full" alignItems="center" justifyContent="space-between" flexDirection="row">
        <Box display="flex" alignItems="center" gap={2}>
            <Icon as={AiFillThunderbolt} fontSize={30} />
            <Text fontWeight="bold" fontSize={16}>Design2ChakraUI</Text>
        </Box>
        <IconButton aria-label='Search' variant="ghost" icon={<AiOutlineSearch />} fontSize={26} color="gray.400" borderRadius="10%" />
    </Flex>
)