import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profesores from "./pages/Profesores";
import Login from "./pages/Login";
import Cursos from "./pages/Cursos";
import Inicio from "./pages/Inicio";
import Empleos from "./pages/Empleos";
import { ChakraProvider } from "@chakra-ui/react";
import Cursodetalles from "./components/Cursos/Cursodetalles";
import Empleodetalles from "./components/Empleos/Empleodetalles";
import { React, useState, useEffect } from "react";
import { UserContext } from "./components/UserContext";
import { useMemo } from "react";

function App() {
  const [user, setUser] = useState(null);

  // const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  // const [value, setValue] = useState("Pepe");

  useEffect(() => {
    console.log(user);
  }, [user]);

  const userData = (usuario) => {
    setUser(usuario);
  };

  // function handleClick(event, num) {
  //   console.log("Function ran in Child component");
  //   setCount(count + num);
  // }

  return (
    <div className="Contenedor">
      <BrowserRouter>
        <ChakraProvider>
          {/* header */}
          <UserContext.Provider value={user}>
            <Routes>
              <Route path="/" element={<Login userData={userData} />}></Route>
              <Route path="/profesores" element={<Profesores />}></Route>
              <Route path="/cursos" element={<Cursos />}></Route>
              <Route path="/inicio" element={<Inicio />}></Route>
              <Route path="/empleos" element={<Empleos />}></Route>
              <Route path="/cursodetalles" element={<Cursodetalles />}></Route>
              <Route
                path="/empleodetalles"
                element={<Empleodetalles />}
              ></Route>
            </Routes>
          </UserContext.Provider>
          {/* footer */}
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
