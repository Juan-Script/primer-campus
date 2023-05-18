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

function App() {
  return (
    <div className="Contenedor">
      <BrowserRouter>
        <ChakraProvider>
          {/* header */}

          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/profesores" element={<Profesores />}></Route>
            <Route path="/cursos" element={<Cursos />}></Route>
            <Route path="/inicio" element={<Inicio />}></Route>
            <Route path="/empleos" element={<Empleos />}></Route>
            <Route path="/cursodetalles" element={<Cursodetalles />}></Route>
            <Route path="/empleodetalles" element={<Empleodetalles />}></Route>
          </Routes>
          {/* footer */}
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
