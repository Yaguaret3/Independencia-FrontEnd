import { useState } from "react";
import { actualizarMovimientos } from "./CapitanAPI";

export default function Tabla_Movimientos_C() {

    const [movimientos, setMovimientos] = useState([]);

    const enviar = async () => {

        let respuesta = await actualizarMovimientos();
        if(respuesta === null){
            alert("En este momento no se puede actualizar la tabla. Esperá confirmación de Control.");
        } else {
            setMovimientos(respuesta);
        }
    }

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <button className="btn btn-primary" onClick={enviar}>Actualizar Movimientos</button>
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
                                    <th>Unidades</th>
                                    <th>Nivel de Misión Comercial</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(movimientos) ? movimientos.map(movimiento=>{
                                    return (
                                        <tr>
                                            <td>{movimiento.ciudad}</td>
                                            <td>{movimiento.movimiento}</td>
                                            <td>{movimiento.destino_1}</td>
                                            <td>{movimiento.unidades_agrupadas}</td>
                                            <td>{movimiento.nivel_mision_comercial}</td>
                                        </tr>
                                    )
                                }): ""}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}