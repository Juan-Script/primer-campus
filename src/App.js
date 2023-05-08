import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Usuarios from './components/Usuarios'
import Login from './components/Login'
import Cursos from './components/Cursos'


function App() {
  return (
    <div className="Contenedor">
      <BrowserRouter>
        {/* header */}
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/usuarios" element={<Usuarios/>}></Route>
          <Route path= "/cursos" element={<Cursos/>}></Route>
        </Routes>
          {/* footer */}
      </BrowserRouter>
    </div>
  );
}

export default App;
