import React, { useState, useEffect } from 'react';
import { getCursos } from '../shared/middlewares/getCursos';
import TablaCursos from './TablaCursos';
import  getToken  from './Login'
import { useNavigate } from 'react-router-dom';
import showToast from './Login'


export default function Cursos  () {
    const [cursos, setCursos] = useState()
    const navigate = useNavigate();

  useEffect(() => {
      
      
      let token = getToken()

      if(!token){
          // showToast() 
          navigate("/")
      }

  }, []);

  

  getData()

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





