import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Usuarios from './components/Usuarios'
import Login from './components/Login'


function App() {
  return (
    <div className="Contenedor">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/usuarios" element={<Usuarios/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
