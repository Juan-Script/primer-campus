import React from 'react'
import {useState, useEffect} from 'react'
import { getUsuarios } from '../shared/middlewares/getUsuarios'
import { Box } from "@chakra-ui/react";
import TablaUsuarios from './TablaUsuarios';

// export default function Usuarios() {
//   return (
//     <div>Usuarios</div>
//   )

export default function Usuarios() {
    const [usuarios, setUsuarios] = useState(null)

       useEffect(()=>{
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
              {/* <TablaUsuarios usuario={usuario}/> */}
              </Box>
       ))
          }
        </>
      );
    }