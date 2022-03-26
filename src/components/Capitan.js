import { useState, useEffect } from "react"
import Asignar_Unidades from "./capitan/Asignar_Unidades"
import Enviar_Orden from "./capitan/Enviar_Orden"
import Oficiales from "./capitan/Oficiales"
import Tabla_Movimientos_C from "./capitan/Tabla_Movimientos_C"
import Footer from "./Footer"
import Sidebar from "./sidebar/Sidebar"
import Topbar from "./Topbar"
import SockJS from 'sockjs-client';
import { over } from 'stompjs';
import { cargarRecursosMilitares, cargarTimer } from "./capitan/CapitanAPI"

export default function Capitan(){

    const [recursosMilitares, setRecursosMilitares] = useState({});
    const [timer, setTimer] = useState([]);

    useEffect(() =>{
        conectarWS();
    },[])

    const actualizarTodo = async () => {
        setRecursosMilitares(await cargarRecursosMilitares());
        setTimer(await cargarTimer());
    }

    const socket = new SockJS('/independencia-websocket');
    const stompClient = over(socket);
    const conectarWS = () => {
        stompClient.connect({}, function (frame) {
            stompClient.subscribe('/actualizar_capitanes', function (valorFinal) {
                actualizarTodo();
            });
        });
    }
    const disparoControl = () => {
        stompClient.send('/actualizar_control', {}, JSON.stringify({ 'mensaje': "" }));
    }
    const disparoCapitanes = () => {
        stompClient.send('/actualizar_capitanes', {}, JSON.stringify({ 'mensaje': "" }));
    }
    
return (
    <>
        {/* Page Wrapper */}
        <div id="wrapper">
            
            <Sidebar timer={timer}/>

            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">

                {/* Main Content */}
                <div id="content">
                    
                    <Topbar />

                    {/* Begin Page Content */}
                    <div className="container-fluid">

                        
                        <Oficiales oficiales={recursosMilitares}/>



                        {/* Segunda Fila. Tabla de Movimientos */}

                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 id="referencia" className="h3 mb-0 text-gray-800">Movimientos</h1>
                        </div>

                        <div className="row">

                            <Tabla_Movimientos_C/>
                            

                            <div className="col-lg-6 mb-4">

                                <Asignar_Unidades unidades_a_asignar={recursosMilitares.unidades_a_asignar} unidades_agrupadas={recursosMilitares.unidades_agrupadas}
                                                    disparoControl={disparoControl} disparoCapitanes={disparoCapitanes}/>
                                <Enviar_Orden disparoControl={disparoControl}/>
                                
                            </div>
                        </div>

                    </div>
                </div>
                {/* End of Main Content */}

                <Footer />

            </div>
            {/* End of Content Wrapper */}

        </div>
        {/* End of Page Wrapper */}
    </>
)

}