import { React, useState} from "react";
import { Link, Navigate } from 'react-router-dom'
import { Input, Button, Image, VStack, HStack, FormControl, FormLabel, FormErrorMessage,FormHelperText, Box, Heading, Flex, Card, Stack, CardBody, Checkbox } from '@chakra-ui/react'
import axios from "axios";
;

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [apiData, setApiData] = useState({});

const handleLogin = () => {
    axios.get("https://reqres.in/api/users/2").then((response) => 
            {setApiData(response.data);
            })
            .catch(error => {
                console.error(error);
            });

    if (email === apiData.email && password === apiData.password) {
        Navigate("/inicio")
    } else {
        alert("Email o contraseña incorrectos")
    }

}

function login()
{
    axios.get("https://reqres.in/api/users/2").then((response) => 
        console.log(response))
}    
    

  return (
   
    

         <HStack w="full" h="100vh">
            
            <Flex w="full" h="full" alignItems="center" justifyContent="center">
                <Stack w="full" maxW="md" spacing={4} p={6}>
                    <Image src="https://vlctesting.es/wp-content/uploads/2022/08/Open-Bootcamp.png"
                    maxW="200"
                    maxH="140"
                    position="absolute"
                    top={-5}
                    left={5}
                    />
                    <Heading fontSize="xl" color="#121625">
                    ¡Bienvenido/a!
                    </Heading>
                    <FormControl id="email">
                        <FormLabel fontSize="sm">Email</FormLabel>
                        <Input onChange={(e)=>setEmail(e.target.value)} autoComplete='off' placeholder="email@gmail.com" />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel fontSize="sm">Contraseña</FormLabel>
                        <Input onChange={(e)=>setPassword(e.target.value)} type='password' placeholder="••••••••••"/>
                    </FormControl>
                    <Stack spacing={4} direction="row" align="start" justify="space-between">
                        <Checkbox colorScheme="blue">Recuérdame</Checkbox>
                        <Link color="#28edb2">Recuperar contraseña</Link>
                    </Stack>
                    <Button onSubmit={handleLogin} onClick={login} bg="#32d4a4" color="white" size="sm" _hover={{ bg: 'grey'}} _active={{ bg: 'lightgrey'}}>
                        Iniciar sesión</Button>  {/* <Link to='/inicio'>Iniciar sesión</Link> */}
                    <Button bg="#121625" color="white" size="sm" _hover={{ bg: 'grey'}} _active={{ bg: 'lightgrey'}}>Registrarse</Button>
                </Stack>
            </Flex>
            <Flex w="full" h="full" borderRightWidth={1}>
                <Image objectFit="cover" w="full" h="full" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"/>
            </Flex>
        </HStack>

  )
}

export default Login






