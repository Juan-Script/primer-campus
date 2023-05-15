import React from 'react'
import {ListIcon, Link as LinkChakra, Box, Badge, Text, Heading, Link, Icon, Card} from '@chakra-ui/react'

export const NavItem = ({item, isActive}) => {
    const {label} = item

    if (item.type==='link') {
        const {icon, notifications, messages, path} = item;

        return(
            <Box display="flex" alignItems="center" my={6} justifyContent="center">
                <LinkChakra 
                href={path} 
                as={Link} 
                gap={1} 
                display="flex" 
                alignItems="center" 
                fontWeight="medium" 
                w="full" 
                color={isActive ? "black" : 'gray.400'} 
                _hover={{textDecoration: 'none', color: 'black'}}>

                    {/* <ListIcon as={icon} fontSize={22} m={0} /> */}
                    <Text>{label}</Text>
                    {notifications && <Badge borderRadius="full" colorScheme="yellow" w={6} textAlign="center">{notifications}</Badge>}
                    {messages && <Badge borderRadius="full" colorScheme="green" w={6} textAlign="center">{messages}</Badge>}
                    <Icon as={icon} fontSize={20} ml={2} />
                </LinkChakra>
                
            </Box>
            
        )
    }
    return (
        <Heading color="gray.400" fontWeight="medium" textTransform="uppercase" fontSize="sm" borderTopWidth={1} borderColor="gray.100" pt={8} my={6}>
            <Text>{label}</Text>
        </Heading>
    )
};