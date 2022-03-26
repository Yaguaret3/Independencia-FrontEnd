import { useState } from "react";
import { nuevaFase, permitirActualizar } from "./ControlAPI";

export default function Tabla_Movs_Militares(props) {

    const [fase, setFase] = useState({accion:"fase_militar", valor:0});
    const [actualizarCapitanes, setActualizarCapitanes] = useState({actualizar_capitanes:1});

    const cambiarFase = (e) => {
        debugger;
        let newFase = {accion:"fase_militar", valor :e.target.value};
        setFase(newFase);
    }

    const cambiarPermitirActualizar = (e) => {
        let newPermitir = {actualizarCapitanes :e.target.value};
        setActualizarCapitanes(newPermitir);
    }

    const enviarPermitirActualizar = async () => {
        let respuesta = await permitirActualizar(actualizarCapitanes);
        if(respuesta === ""){
            props.disparoControl();
            props.disparoGobernadores();
            props.disparoCapitanes();
        } else {
            alert(respuesta);
        }
    }
    const enviarNuevaFase = async () => {
        let respuesta = await nuevaFase(fase);
        if(respuesta === ""){
            props.disparoControl();
            props.disparoGobernadores();
            props.disparoCapitanes();
        } else {
            alert(respuesta);
        }
    }

    return (
        <div className="col-lg-6 mb-4">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Movimientos Militares</h1>
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        <select onChange={cambiarFase}>
                            <option value="1">Fase inicial</option>
                            <option value="2">Fase militar 1</option>
                            <option value="3">Fase comercial</option>
                            <option value="4">Fase militar 2</option>
                            <option value="5">Fase final</option>
                        </select>
                        <button className="btn btn-primary manito" onClick={() => enviarNuevaFase()}>Actualizar Fase</button>
                        <select onChange={cambiarPermitirActualizar}>
                            <option value="1">Sí</option>
                            <option value="0">No</option>
                        </select>
                        <button className="btn btn-primary manito" onClick={() => enviarPermitirActualizar()}>Permitir Actualizar</button>
                    </h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" width="100%"
                            cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Ciudad</th>
                                    <th>Tipo de Movimiento</th>
                                    <th>Destino</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(props.movimientos) ? props.movimientos.map(movimiento => {
                                    return (
                                        <tr>
                                            <td>{movimiento.ciudad}</td>
                                            <td>{movimiento.movimiento}</td>
                                            <td>{movimiento.destino_1}</td>
                                        </tr>
                                    );
                                }) : ""}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}