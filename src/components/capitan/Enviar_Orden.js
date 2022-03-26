import { useState } from "react";
import { enviarMovimiento } from "./CapitanAPI";

export default function Enviar_Orden(props) {

    const [tipoMovimiento, setTipoMovimiento] = useState();
    const [destino, setDestino] = useState();

    const enviar = async () => {
        let datos = {
            destino_1 : destino,
            movimiento : tipoMovimiento
        };
        let respuesta = await enviarMovimiento(datos);

        if(respuesta === ""){
            props.disparoControl();
        } else {
            alert(respuesta);
        }
    }

    return (
        <div className="col-xl-auto col-md-6 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">

                        {/* Seleccionar movimiento */}
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Seleccionar Movimiento
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                <input list="movimientos_js" name="tipoMovimiento" type="text" value={tipoMovimiento} onChange={(e) => setTipoMovimiento(e.target.value)}/>
                                <datalist id="movimientos_js">
                                    <option value="Avanzar y atacar"></option>
                                    <option value="Avanzar y detenerse"></option>
                                    <option value="Acompañar al ejército de:"></option>
                                    <option value="Movimiento comercial"></option>
                                    <option value="Asaltar"></option>
                                    <option value="Asediar"></option>
                                    <option value="Liberarse"></option>
                                </datalist>
                            </div>
                        </div>

                        {/* Seleccionar destino */}
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                Seleccionar Destino
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                <input list="destinos_js" name="destino" type="text" value={destino} onChange={(e) => setDestino(e.target.value)}/>
                                <datalist id="destinos_js">
                                    <option value="Arequipa"></option>
                                    <option value="Asunción"></option>
                                    <option value="Buenos Aires"></option>
                                    <option value="Catamarca"></option>
                                    <option value="Chuquisaca"></option>
                                    <option value="Cochabamba"></option>
                                    <option value="Coimbra"></option>
                                    <option value="Concepción (Chile)"></option>
                                    <option value="Concepción del Uruguay"></option>
                                    <option value="Copiapó"></option>
                                    <option value="Coquimbo"></option>
                                    <option value="Córdoba"></option>
                                    <option value="Corrientes"></option>
                                    <option value="Esteco Nuevo"></option>
                                    <option value="Europa"></option>
                                    <option value="Jujuy"></option>
                                    <option value="La Paz"></option>
                                    <option value="La Rioja"></option>
                                    <option value="Mendoza"></option>
                                    <option value="Misiones"></option>
                                    <option value="Montevideo"></option>
                                    <option value="Porto Alegre"></option>
                                    <option value="Potosí"></option>
                                    <option value="Río Cuarto"></option>
                                    <option value="Salta"></option>
                                    <option value="Salto Chico"></option>
                                    <option value="San Juan"></option>
                                    <option value="San Luis"></option>
                                    <option value="San Borja"></option>
                                    <option value="Santa Fe"></option>
                                    <option value="Santiago (Chile)"></option>
                                    <option value="Santiago del Estero"></option>
                                    <option value="Suipacha"></option>
                                    <option value="Tacuarembó"></option>
                                    <option value="Talca"></option>
                                    <option value="Tarija"></option>
                                    <option value="Tucumán"></option>
                                    <option value="Valparaíso"></option>
                                    <option value="Xerez"></option>
                                </datalist>
                            </div>
                        </div>
                    </div>
                    {/* Enviar */}
                    <br />
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                <button className="btn btn-primary manito" onClick={enviar}>Enviar orden</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}