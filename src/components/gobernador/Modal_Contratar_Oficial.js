import { useState } from "react";
import { contratarOficial } from "./GobernadorAPI";

export default function Modal_Contratar_Oficial(props) {

    const [caballos, setCaballos] = useState(false);
    const [vacas, setVacas] = useState(false);
    const [hierro, setHierro] = useState(false);
    const [vino, setVino] = useState(false);
    const [yerba, setYerba] = useState(false);

    const [oficialPedido, setOficialPedido] = useState();

    const enviar = async () => {
        let datos = {};
        caballos ? datos.caballos = 1 : datos.caballos = 0;
        vacas ? datos.vacas= 1 : datos.vacas = 0;
        hierro ? datos.hierro= 1 : datos.hierro = 0;
        vino ? datos.vino= 1 : datos.vino = 0;
        yerba ? datos.yerba= 1 : datos.yerba = 0;
        datos.nivel_oficial_pedido = oficialPedido;

        let respuesta = await contratarOficial(datos);
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
                        <h5 className="modal-title">Contratar Oficial Militar</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h6>Nivel:</h6>
                        <input list="oficiales_js" type="text" value={oficialPedido} onChange={(e) => setOficialPedido(e.target.value)}/>
                        <datalist id="oficiales_js">
                            <option value="2"></option>
                            <option value="3"></option>
                        </datalist>

                        <div>Elegí con qué pagar: 2 recursos diferentes para nivel 2, y 3 para nivel 3</div>
                        <div>
                            <input type="checkbox" name="caballos" checked={caballos} onChange={() => setCaballos(!caballos)}/>
                            <label for="caballos_checkbox_oficial">Caballos</label>
                        </div>
                        <div>
                            <input type="checkbox" name="vacas" checked={vacas} onChange={() => setVacas(!vacas)}/>
                            <label for="vacas_checkbox_oficial">Vacas</label>
                        </div>
                        <div>
                            <input type="checkbox" name="hierro" checked={hierro} onChange={() => setHierro(!hierro)}/>
                            <label for="hierro_checkbox_oficial">Hierro</label>
                        </div>
                        <div>
                            <input type="checkbox" name="vino" checked={vino} onChange={() => setVino(!vino)}/>
                            <label for="vino_checkbox_oficial">Vino</label>
                        </div>
                        <div>
                            <input type="checkbox" name="yerba" checked={yerba} onChange={() => setYerba(!yerba)}/>
                            <label for="yerba_checkbox_oficial">Yerba</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" onClick={() => props.setShowModal(false)}>Cancelar</button>
                        <button className="btn btn-primary" onClick={enviar}>Pagar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}