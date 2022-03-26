import { useEffect, useState } from "react"
import { actualizarCongreso, despausar } from "./ControlAPI";

export default function Modal_Edit_Congreso(props) {

    const [congresoEdit, setCongresoEdit] = useState({});

    useEffect(() => {
        setCongresoEdit(props.congresoModal);
    }, [props.congresoModal]);

    const editarId = (e) => {

        let newCongreso = {
            id: e.target.value,
            capital: congresoEdit.capital,
            sistema_de_gobierno: congresoEdit.sistema_de_gobierno,
            cuantos: congresoEdit.cuantos,
            presidente: congresoEdit.presidente,
            sistema_economico: congresoEdit.sistema_economico
        };
        setCongresoEdit(newCongreso);
    }
    const editarCapital = (e) => {

        let newCongreso = {
            id: congresoEdit.id,
            capital: e.target.value,
            sistema_de_gobierno: congresoEdit.sistema_de_gobierno,
            cuantos: congresoEdit.cuantos,
            presidente: congresoEdit.presidente,
            sistema_economico: congresoEdit.sistema_economico
        };
        setCongresoEdit(newCongreso);
    }
    const editarSistema_de_gobierno = (e) => {

        let newCongreso = {
            id: congresoEdit.id,
            capital: congresoEdit.capital,
            sistema_de_gobierno: e.target.value,
            cuantos: congresoEdit.cuantos,
            presidente: congresoEdit.presidente,
            sistema_economico: congresoEdit.sistema_economico
        };
        setCongresoEdit(newCongreso);
    }
    const editarCuantos = (e) => {

        let newCongreso = {
            id: congresoEdit.id,
            capital: congresoEdit.capital,
            sistema_de_gobierno: congresoEdit.sistema_de_gobierno,
            cuantos: e.target.value,
            presidente: congresoEdit.presidente,
            sistema_economico: congresoEdit.sistema_economico
        };
        setCongresoEdit(newCongreso);
    }
    const editarPresidente = (e) => {

        let newCongreso = {
            id: congresoEdit.id,
            capital: congresoEdit.capital,
            sistema_de_gobierno: congresoEdit.sistema_de_gobierno,
            cuantos: congresoEdit.cuantos,
            presidente: e.target.value,
            sistema_economico: congresoEdit.sistema_economico
        };
        setCongresoEdit(newCongreso);
    }
    const editarSistema_economico = (e) => {

        let newCongreso = {
            id: congresoEdit.id,
            capital: congresoEdit.capital,
            sistema_de_gobierno: congresoEdit.sistema_de_gobierno,
            cuantos: congresoEdit.cuantos,
            presidente: congresoEdit.presidente,
            sistema_economico: e.target.value
        };
        setCongresoEdit(newCongreso);
    }

    const enviar = async () =>{
        let respuesta = await actualizarCongreso(congresoEdit);
        if( respuesta === ""){
            despausar();
            props.disparoControl();
            props.disparoGobernadores();
            props.setShowModal(false);
        } else {
            alert(respuesta);
        }
    }

    const cancelar = () => {
        despausar();
        props.setShowModal(false);
    }



    return (
        <div className={props.showModal ? "modalWrapper" : "modalWrapper modalHide"} onClick={() => props.setShowModal(false)}>
            <div role="dialog">
                <div className="modal-dialog " role="document" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Congreso</h5>
                        </div>
                        <div className="modal-body">
                            <div>
                                <label>
                                    Congreso:
                                </label>
                            </div>
                            <div>
                            <input type="text" onChange={editarId} value={congresoEdit.id} />
                            </div>
                            <div>
                                <label>
                                    Capital:
                                </label>
                            </div>
                            <div>
                                <input type="text" onChange={editarCapital} value={congresoEdit.capital} />
                            </div>
                            <div>
                                <label>
                                    Sistema Político: (federalismo o centralismo)
                                </label>
                            </div>
                            <div>
                                <input type="text" onChange={editarSistema_de_gobierno} value={congresoEdit.sistema_de_gobierno} />
                            </div>
                            <div>
                                <label>
                                    ¿Cuántas ciudades lo componen?
                                </label>
                            </div>
                            <div>
                                <input type="text" onChange={editarCuantos} value={congresoEdit.cuantos} />
                            </div>
                            <div>
                                <label>
                                    Presidente:
                                </label>
                            </div>
                            <div>
                                <input type="text" onChange={editarPresidente} value={congresoEdit.presidente} />
                            </div>
                            <div>
                                <label>
                                    Sistema Económico: (default, liberalismo o proteccionismo)
                                </label>
                            </div>
                            <div>
                                <input type="text" onChange={editarSistema_economico} value={congresoEdit.sistema_economico} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" onClick={cancelar}>Cancelar y despausar</button>
                            <button className="btn btn-primary manito" onClick={enviar}>Enviar y despausar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}