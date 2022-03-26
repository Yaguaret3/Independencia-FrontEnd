import { useEffect, useState } from "react";
import Sidebar_Control from "./control/Sidebar_Control";
import Tabla_Actores from "./control/Tabla_Actores";
import Tabla_Ciudades from "./control/Tabla_Ciudades";
import Tabla_Ejercitos from "./control/Tabla_Ejercitos";
import Tabla_Movs_Militares from "./control/Tabla_Movs_Militares";
import Footer from "./Footer";
import Topbar from "./Topbar";
import { cargarActoresPoliticos, cargarCongresos, cargarEjercitosCiudades, cargarRecursosCiudades, cargarTimer } from "./control/ControlAPI";
import SockJS from 'sockjs-client';
import { over } from 'stompjs';



export default function Control() {

    const [ciudades, setCiudades] = useState([]);
    const [ejercitos, setEjercitos] = useState([]);
    const [actores, setActores] = useState([]);
    const [congresos, setCongresos] = useState([]);
    const [timer, setTimer] = useState([]);


    useEffect(() => {
        conectarWS();
    },[]);

    const actualizarTodo = async () => {
        setCiudades(await cargarRecursosCiudades());
        setEjercitos(await cargarEjercitosCiudades());
        setActores(await cargarActoresPoliticos());
        setCongresos(await cargarCongresos());
        setTimer(await cargarTimer());

    }

    const socket = new SockJS('/independencia-websocket');
    const stompClient = over(socket);
    const conectarWS = () => {
        stompClient.connect({}, function (frame) {
            stompClient.subscribe('/actualizar_control', function (valorFinal) {
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

        <div id="wrapper">
            {/* Page Wrapper */}

            <Sidebar_Control timer={timer} congresos={congresos} disparoControl={disparoControl} disparoGobernadores={disparoGobernadores} disparoCapitanes={disparoCapitanes} />
            
            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">

                {/* Main Content */}
                <div id="content">

                    <Topbar />




                    {/* Begin Page Content */}
                    <div className="container-fluid">


                        <div className="row">

                            <Tabla_Ciudades ciudades={ciudades} disparoControl={disparoControl} disparoGobernadores={disparoGobernadores} disparoCapitanes={disparoCapitanes} />

                            <Tabla_Actores actores={actores} disparoControl={disparoControl} disparoGobernadores={disparoGobernadores} disparoCapitanes={disparoCapitanes} />

                        </div>

                        <div className="row">

                            <Tabla_Ejercitos ejercitos={ejercitos} disparoControl={disparoControl} disparoGobernadores={disparoGobernadores} disparoCapitanes={disparoCapitanes} />

                            <Tabla_Movs_Militares movimientos={ejercitos} disparoControl={disparoControl} disparoGobernadores={disparoGobernadores} disparoCapitanes={disparoCapitanes} />

                        </div>

                    </div>

                </div>
                {/* End of Main Content */}


                <Footer />

            </div>
            {/* End of Content Wrapper */}
            {/* End of Page Wrapper */}

        </div>
    );

}