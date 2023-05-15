import React from 'react'
import { useNavigate } from 'react-router-dom';
import { getToken } from '../shared/getToken';
import { useEffect } from 'react';

const Empleos = () => {

    const navigate = useNavigate();

    useEffect(() => {
        let token = getToken()

        if(!token){
            // showToast() 
            navigate("/")
        }

    }, []);

  return (
    <div>empleos</div>
  )
}

export default Empleos