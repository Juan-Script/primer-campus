import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, ButtonGroup, Flex, Stack, Image, VStack } from '@chakra-ui/react'


export const Login = () => {
  return (
    <VStack display= "flex" justifyContent= 'center'>
        <Image 
                mx="auto"
                maxW={{ base: '100%', sm: '500px'}}
                src= 'https://vlctesting.es/wp-content/uploads/2022/08/Open-Bootcamp.png'
            />
        <Button size="lg" colorScheme='blue'>
            <Link to='/usuarios'>Ver usuarios</Link>
        </Button>
    </VStack>
  )
}

export default Login



