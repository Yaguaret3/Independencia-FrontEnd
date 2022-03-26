import { useState } from "react";
import { aumentarMisionComercial } from "./GobernadorAPI";

export default function Modal_Aumentar_Mision_Comercial(props) {

    const [caballos, setCaballos] = useState(false);
    const [vacas, setVacas] = useState(false);
    const [hierro, setHierro] = useState(false);
    const [vino, setVino] = useState(false);
    const [yerba, setYerba] = useState(false);


    const enviar = async () => {
        let datos = {};
        caballos ? datos.caballos = 1 : datos.caballos = 0;
        vacas ? datos.vacas= 1 : datos.vacas = 0;
        hierro ? datos.hierro= 1 : datos.hierro = 0;
        vino ? datos.vino= 1 : datos.vino = 0;
        yerba ? datos.yerba= 1 : datos.yerba = 0;

        let respuesta = await aumentarMisionComercial(datos);
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
                        <h5 className="modal-title">Incentivar Misiones Comerciales</h5>
                    </div>
                    <div className="modal-body">

                        <div>Elegí con qué pagar: 1 recurso</div>
                        <div>
                            <input type="checkbox" name="caballos" checked={caballos} onChange={() => setCaballos(!caballos)}/>
                            <label for="caballos_checkbox_mision">Caballos</label>
                        </div>
                        <div>
                            <input type="checkbox" name="vacas" checked={vacas} onChange={() => setVacas(!vacas)} />
                            <label for="vacas_checkbox_mision">Vacas</label>
                        </div>
                        <div>
                            <input type="checkbox" name="hierro" checked={hierro} onChange={() => setHierro(!hierro)} />
                            <label for="hierro_checkbox_mision">Hierro</label>
                        </div>
                        <div>
                            <input type="checkbox" name="vino" checked={vino} onChange={() => setVino(!vino)} />
                            <label for="vino_checkbox_mision">Vino</label>
                        </div>
                        <div>
                            <input type="checkbox" name="yerba" checked={yerba} onChange={() => setYerba(!yerba)} />
                            <label for="yerba_checkbox_mision">Yerba</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" onClick={() => props.setShowModal(false)}>Cancelar</button>
                        <button className="btn btn-primary manito" onClick={enviar}>Pagar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}