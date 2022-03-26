import { useState } from "react";
import { asignarUnidades } from "./CapitanAPI";

export default function Modal_Asignar_Unidades(props) {

    const [cuantas, setCuantas] = useState(0);
    const [aQuien, setAQuien] = useState();

    const enviar = async () => {
        let datos = {
            unidades_a_asignar : cuantas,
            dar_unidades_a : aQuien
        }
        let respuesta = await asignarUnidades(datos);
        if(respuesta === ""){
            props.disparoControl();
            props.disparoCapitanes();
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
                        <h5 className="modal-title">Asignar Unidades:</h5>
                    </div>
                    <div className="modal-body">
                        <h6>A:</h6>
                        <input list="destinoAsignarUnidades" name="aQuien" value={aQuien} type="text" onChange={(e) => setAQuien(e.target.value)}/>
                        <datalist id="destinoAsignarUnidades">
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
                        <select name="cuantas" value={cuantas} onChange={(e) => setCuantas(e.target.value)} >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" onClick={() => props.setShowModal(false)}>Cancelar</button>
                        <button className="btn btn-primary manito" onClick={enviar}>Asignar Unidades</button>
                    </div>
                </div>
            </div>
        </div>
    );
}