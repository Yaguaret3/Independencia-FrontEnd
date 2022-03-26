import { useState } from "react";
import { aumentarEstatus } from "./GobernadorAPI";

export default function Modal_Aumentar_Estatus(props) {

    const [caballos, setCaballos] = useState(false);
    const [vacas, setVacas] = useState(false);
    const [hierro, setHierro] = useState(false);
    const [vino, setVino] = useState(false);
    const [yerba, setYerba] = useState(false);

    const [actorPoliticoPedido, setActorPoliticoPedido] = useState("");

    const enviar = async () => {
        debugger;
        let datos = {};
        caballos ? datos.caballos = 1 : datos.caballos = 0;
        vacas ? datos.vacas= 1 : datos.vacas = 0;
        hierro ? datos.hierro= 1 : datos.hierro = 0;
        vino ? datos.vino= 1 : datos.vino = 0;
        yerba ? datos.yerba= 1 : datos.yerba = 0;
        datos.actor_politico_pedido = actorPoliticoPedido;

        let respuesta = await aumentarEstatus(datos);
        if(respuesta === ""){
            props.disparoControl();
            props.disparoGobernadores();
            props.setShowModal(false);
        } else {
            alert(respuesta);
        }        
    }

    

    return (
        <div className={props.showModal ? "modalWrapper" : "modalWrapper modalHide"} onClick={() => props.setShowModal(false)}>
            <div className="modal-dialog" role="document" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Aumentar Estatus</h5>
                    </div>
                    <div className="modal-body">

                        <input list="actores_js" name="actorPedido" type="text" placeholder="-- Elegí Actor Político --"
                            onChange={(e) => setActorPoliticoPedido(e.target.value)} value={actorPoliticoPedido}/>
                        <datalist id="actores_js">
                            <option value="1">{props.actor_politico_1}</option>
                            <option value="2">{props.actor_politico_2}</option>
                            <option value="3">Gobierno Nacional</option>
                        </datalist>
                        <div>Elegí con qué pagar:
                            <br />1 solo recurso para {props.actor_politico_1},
                            <br />2 recursos diferentes para {props.actor_politico_2}, y
                            <br />3 para Gobierno Nacional</div>
                        <div>
                            <input type="checkbox" value="caballos" onChange={() => setCaballos(!caballos)} checked={caballos}/>
                            <label for="caballos_checkbox_estatus">Caballos</label>
                        </div>
                        <div>
                            <input type="checkbox" value="vacas" onChange={() => setVacas(!vacas)} checked={vacas}/>
                            <label for="vacas_checkbox_estatus">Vacas</label>
                        </div>
                        <div>
                            <input type="checkbox" value="hierro" onChange={() => setHierro(!hierro)} checked={hierro}/>
                            <label for="hierro_checkbox_estatus">Hierro</label>
                        </div>
                        <div>
                            <input type="checkbox" value="vino" onChange={() => setVino(!vino)} checked={vino}/>
                            <label for="vino_checkbox_estatus">Vino</label>
                        </div>
                        <div>
                            <input type="checkbox" value="yerba" onChange={() => setYerba(!yerba)} checked={yerba}/>
                            <label for="yerba_checkbox_estatus">Yerba</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" onClick={() => props.setShowModal(false)}>Cancelar</button>
                        <button className="btn btn-primary manito" onClick={enviar}>Seleccionar y pagar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}