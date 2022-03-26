import { useState, useEffect } from "react";
import Footer from "./Footer";
import Fila_Acciones from "./gobernador/Fila_Acciones";
import Fila_Otros_Recursos from "./gobernador/Fila_Otros_Recursos";
import Tab_Historial_Comercio from "./gobernador/Tab_Historial_Comercio";
import Topbar_Gobernador from "./gobernador/Topbar_Gobernador";
import Sidebar from "./sidebar/Sidebar";
import Tabla_Actores_Gobernador from "./gobernador/Tabla_Actores_Gobernador"
import { cargarActoresPoliticos, cargarRecursos } from "./gobernador/GobernadorAPI";
import { cargarTimer } from "./gobernador/GobernadorAPI";
import SockJS from 'sockjs-client';
import { over } from 'stompjs';

export default function Gobernador() {

    const [recursos, setRecursos] = useState({});
    const [timer, setTimer] = useState([]);
    const [actores, setActores] = useState([]);
    const[historialComercial, setHistorialComercial] = useState("");

    useEffect(() =>{
        conectarWS();
    },[])

    const actualizarTodo = async () => {

        setRecursos(await cargarRecursos());
        setActores(await cargarActoresPoliticos());
        setTimer(await cargarTimer());
        setHistorialComercial(recursos.historial_comercio);
    }

    const socket = new SockJS('/independencia-websocket');
    const stompClient = over(socket);
    const conectarWS = () => {
        stompClient.connect({}, function (frame) {
            stompClient.subscribe('/actualizar_gobernadores', function (valorFinal) {
                actualizarTodo();
                
            });
        });
    }
    const disparoControl = () => {
        stompClient.send('/actualizar_control', {}, JSON.stringify({ 'mensaje': "" }));
    }
    const disparoGobernadores = () => {
        stompClient.send('/actualizar_gobernadores', {}, JSON.stringify({ 'mensaje': "" }));
    }
    const disparoCapitanes = () => {
        stompClient.send('/actualizar_capitanes', {}, JSON.stringify({ 'mensaje': "" }));
    }


    return (

        < div id="wrapper" >

            <Sidebar timer={timer}/>

            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">

                {/* Main Content */}
                <div id="content">


                    <Topbar_Gobernador recursos={recursos}/>


                    {/* Begin Page Content */}
                    <div className="container-fluid">

                        <Fila_Otros_Recursos recursos={recursos}/>
                        <Fila_Acciones recursos={recursos} disparoControl={disparoControl} 
                                        disparoGobernadores={disparoGobernadores} disparoCapitanes={disparoCapitanes}/>

                        {/* Tercera Fila: Tablas */}
                        <div className="row">

                            <Tabla_Actores_Gobernador actores={actores} />
                            <Tab_Historial_Comercio historialComercial={historialComercial}/>
                        </div>
                    </div>
                </div>
                {/* End of Main Content */}

                <Footer />

            </div>
            {/* End of Content Wrapper */}
        </div >
    );

}