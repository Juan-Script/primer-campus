import React from 'react'

const LogOut = () => {
    localStorage.removeItem("Token");
    navigate("/")
    
}
