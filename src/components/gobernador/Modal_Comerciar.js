import { useState } from "react";
import { comerciar } from "./GobernadorAPI";

export default function Modal_Comerciar(props) {

    const [conQuien, setConQuien] = useState("");
    const [cuanto, setCuanto] = useState(0);
    const [cualRecurso, setCualRecurso] = useState("");

    const enviar = async () => {
        let datos = {
            caballos: 0,
            vacas: 0,
            hierro: 0,
            vino: 0,
            yerba: 0
        };

        switch (cualRecurso) {
            case 'caballos':
                datos.caballos = cuanto;
                break;
            case 'vacas':
                datos.vacas = cuanto;
                break;
            case 'hierro':
                datos.hierro = cuanto;
                break;
            case 'vino':
                datos.vino = cuanto;
                break;
            case 'yerba':
                datos.yerba = cuanto;
                break;
        }

        let respuesta = await comerciar(datos);
        if (respuesta === "") {
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
                        <h5 className="modal-title">Comerciar</h5>
                    </div>

                    <div className="modal-body">
                        <h6>Con:</h6>
                        <input list="comerciar_js" type="text" value={conQuien} onChange={(e) => setConQuien(e.target.value)} />
                        <datalist id="comerciar_js">
                            <option value="Buenos Aires"></option>
                            <option value="Asunción"></option>
                            <option value="Montevideo"></option>
                            <option value="Santa Fe"></option>
                            <option value="Córdoba"></option>
                            <option value="Mendoza"></option>
                            <option value="Tucumán"></option>
                            <option value="Salta"></option>
                            <option value="Potosí"></option>
                            <option value="La Paz"></option>
                        </datalist>
                        <select name="cuanto" value={cuanto} onChange={(e) => setCuanto(e.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <br />
                        <input type="radio" name="recursos" value="caballos" onChange={(e) => setCualRecurso(e.target.value)} />
                        <label for="caballos_comerciar">Caballos</label>
                        <input type="radio" name="recursos" value="vacas" onChange={(e) => setCualRecurso(e.target.value)} />
                        <label for="vacas_comerciar">Vacas</label>
                        <input type="radio" name="recursos" value="hierro" onChange={(e) => setCualRecurso(e.target.value)} />
                        <label for="hierro_comerciar">Hierro</label>
                        <input type="radio" name="recursos" value="vino" onChange={(e) => setCualRecurso(e.target.value)} />
                        <label for="vino_comerciar">Vino</label>
                        <input type="radio" name="recursos" value="yerba" onChange={(e) => setCualRecurso(e.target.value)} />
                        <label for="yerba_comerciar">Yerba</label>
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" onClick={() => props.setShowModal(false)}>Cancelar</button>
                        <button className="btn btn-primary manito" onClick={enviar}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}