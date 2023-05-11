import { React, useState} from "react";
import { Link, useNavigate  } from 'react-router-dom'
import { Input, Button, Image, useToast, VStack, HStack, FormControl, FormLabel, FormErrorMessage,FormHelperText, Box, Heading, Flex, Card, Stack, CardBody, Checkbox, position } from '@chakra-ui/react'
import axios from "axios";
;

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [apiData, setApiData] = useState({});
    const navigate = useNavigate();


        const toast = useToast()
        const showToast = () => {
            toast({
                title: 'Error de conexión',
                description: 'Comprueba que has ingresado los datos correctamente',
                duration: 5000,
                isClosable: true,
                status: 'error',
                position: 'top',
            })
        }
    // const getUsers = async () => {
    //     axios.post("https://reqres.in/api/login").then((response) => 
    //         {
    //             console.log(response.data)
    //             setApiData(response.data);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }


    // const handleLogin = () => {

    // getUsers().then(() => {
    //     if (email === apiData.email && password === apiData.password) {
    //         navigate("/inicio")
    //     } else {
    //         alert("Email o contraseña incorrectos")
            
    //     }
    // })

// }
  // const {data} = await axios.post('/user', document.querySelector('#my-form'), {
    //     body: {
    //       'Content-Type': 'application/json'
    //     }
    //   })

const login = () =>
    {
        axios.post('https://reqres.in/api/login', {
            "email": email,
            "password": password
          })
          .then(function (response) {
            if (response.data.token) {
                navigate("/inicio")
            }
          })
          .catch(function (error) {
            showToast()
        });
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
                    <FormControl>
                        <FormLabel fontSize="sm">Email</FormLabel>
                            <Input onChange={(e)=>setEmail(e.target.value)} autoComplete='off' placeholder="email@gmail.com" required/>
                            </FormControl>
                            <FormControl>
                        <FormLabel fontSize="sm">Contraseña</FormLabel>
                            <Input onChange={(e)=>setPassword(e.target.value)} type='password' placeholder="••••••••••" required/>
                            </FormControl>
                            <Button type="submit" onClick={() => login()}  bg="#32d4a4" color="white" size="sm" _hover={{ bg: 'grey'}} _active={{ bg: 'lightgrey'}}>
                            Iniciar sesión</Button>  {/* <Link to='/inicio'>Iniciar sesión</Link> */}
                            <Button onClick={showToast} bg="#121625" color="white" size="sm" _hover={{ bg: 'grey'}} _active={{ bg: 'lightgrey'}}>Registrarse</Button>
                </Stack>
            </Flex>
            <Flex w="full" h="full" borderRightWidth={1}>
                <Image objectFit="cover" w="full" h="full" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"/>
            </Flex>
        </HStack>

  )





}
