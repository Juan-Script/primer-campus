import { Button, HStack, Flex, Text, Box, IconButton } from "@chakra-ui/react"
import React from 'react'
import { getToken } from "../shared/getToken";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import showToast from "./Login"
import { Sidebar } from "./Sidebar";
import { MdMenu } from "react-icons/md"

export default function Inicio() {
    const navigate = useNavigate();

    useEffect(() => {
        let token = getToken()

        if(!token){
            alert(showToast())
            navigate("/")
        }

    }, []);

const LogOut = () => {
    localStorage.removeItem("Token");
    navigate("/")
    
}

    return (
        
        //  
        
        <HStack w="full" h="100vw" bg="gray.100" padding={10}>
            <Flex 
                as="aside"
                w="full"
                h="full"
                maxW={350}
                bg="white"
                alignItems="center"
                padding={6}
                flexDirection="column"
                justifyContent="space-between"
                borderRadius="3xl"
            >
                <Sidebar />

            </Flex>
            <Flex 
                as="main" 
                w="100%" 
                h="100%" 
                bg="white" 
                alignItems="center" 
                justifyContent="center" 
                flexDirection="column" 
                position="relative" 
                borderRadius="3xl"
                >
                <IconButton 
                arial-Label="Menu Collapse" 
                icon={<MdMenu />}
                position="absolute"
                top={6}
                left={6}
                onClick={() => null}
                />
                <Text fontSize={100} color="gray.300" >
                    Main
                </Text>
            </Flex>
        </HStack>
    )
}




    // <VStack display= "flex" justifyContent= 'center'>
    //     <Image 
    //             mx="auto"
    //             maxW={{ base: '100%', sm: '200px'}}
    //             src= 'https://vlctesting.es/wp-content/uploads/2022/08/Open-Bootcamp.png'
    //         />
    //     {/* <HStack>
    //         <Button size="lg" colorScheme='blue'>
    //             <Link to='/usuarios'>Ver usuarios</Link>
    //         </Button>
    //         <Button size="lg" colorScheme='teal'>
    //             <Link to='/cursos'>Ver cursos</Link>
    //         </Button>
    //         <Button size="lg" colorScheme='whatsapp'>
    //             <Link to="/empleos">Ver empleos</Link>
    //         </Button>
    //     </HStack> */}
    //     <Box>
    //  

