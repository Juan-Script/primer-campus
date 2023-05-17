import React from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../shared/getToken";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Empleos = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    console.log(state);
    let token = getToken();

    if (!token) {
      // showToast()
      navigate("/");
    }
  }, []);

  return <div>Empleos</div>;
};

export default Empleos;
