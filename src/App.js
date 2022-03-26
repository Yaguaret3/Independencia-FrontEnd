import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import IniciarSesion from './components/IniciarSesion';
import Gobernador from './components/Gobernador';
import Capitan from './components/Capitan';
import Control from './components/Control';

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<IniciarSesion />} />

        <Route path="/gobernador" element={<Gobernador />} />

        <Route path="/capitan" element={<Capitan />} />

        <Route path="/control" element={<Control />} />

        <Route path="/register" element={<Register />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
