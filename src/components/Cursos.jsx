import React, { useState, useEffect } from 'react';
import { getCursos } from '../shared/middlewares/getCursos';
import TablaCursos from './TablaCursos';
import { Box } from '@chakra-ui/react';


export default function Cursos() {
    const [cursos, setCursos] = useState(null)

       useEffect(()=>{
         getCursos().then((response) => {
           console.log(response)
           setCursos(response)
         })
       },[])
    
  return (
    
        <>
         {
            
             <Box margin='auto' w='50%'>
             {cursos && <TablaCursos cursos={cursos} />}
              
              </Box>
       
          }
        </>
      );
    

  

}




