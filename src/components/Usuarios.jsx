import React from 'react'
import {useState, useEffect} from 'react'
import { getUsuarios } from '../shared/middlewares/getUsuarios'
import { Box } from "@chakra-ui/react";
import TablaUsuarios from './TablaUsuarios';
import { useNavigate } from "react-router-dom";
import { getToken } from '../shared/getToken';

export default function Usuarios() {

    const [usuarios, setUsuarios] = useState(null)
    const navigate = useNavigate();

      useEffect(()=>{

        let token = getToken()
  
          if(!token){
              // showToast() 
              navigate("/")
          }

        getUsuarios().then((response) => {
          console.log(response)
          setUsuarios(response)
        })
      },[])


      return (
        <>
        {
            usuarios && usuarios?.map((usuario, index) => (
            <Box margin='auto' w='50%' key={index}>
                <TablaUsuarios usuario={usuario}/>
              </Box>
      ))
          }
        </>
      );
    }