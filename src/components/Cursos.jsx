import React, { useState, useEffect } from 'react';
import { getCursos } from '../shared/middlewares/getCursos';
import TablaCursos from './TablaCursos';
import { Box, Stack } from '@chakra-ui/react';


export default function Cursos() {
    const [cursos, setCursos] = useState()

       useEffect(()=>{
        getData()
       },[])

       const getData = () => {
        getCursos().then((response) => {
          setCursos(response)
        })
       }
    
  return (
    
        <>
         {
            
             <div margin='auto' w='50%'>
                {cursos && <TablaCursos cursos={cursos} />}
              
              </div>
       
          }
        </>
      );
    

  

}




