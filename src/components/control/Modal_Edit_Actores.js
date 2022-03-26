import { useEffect, useState } from "react"
import { actualizarActor, despausar, improductividad } from "./ControlAPI";

export default function Modal_Edit_Actores(props) {

    const [actorEdit, setActorEdit] = useState({});

    useEffect(() => {
        setActorEdit(props.actorModal);
    }, [props.actorModal]);

    const editarValor = (e) => {

        let newActor = {
            actor: actorEdit.actor,
            valor: e.target.value
        };
        setActorEdit(newActor);
    }

    const editarActor = (e) => {

        let newActor = {
            actor: e.target.value,
            valor: actorEdit.valor
        };
        setActorEdit(newActor);
    }

    const enviar = async () => {
        let respuesta = await actualizarActor(actorEdit);
        if (respuesta === "") {
            despausar();
            props.disparoControl();
            props.disparoGobernadores();
            props.setShowModal(false);
        } else {
            alert(respuesta);
        }

    }
    const cancelar = () => {
        props.setShowModal(false);
        despausar();
    }
    const enviarImproductividad = () => {
        let respuesta = improductividad(actorEdit);
        if (respuesta === "") {
            despausar();
            props.disparoControl();
            props.disparoGobernadores();
            alert("Improductividad seleccionada con éxito");
        } else {
            alert(respuesta);
        }
    }

    return (
        <div className={props.showModal ? "modalWrapper" : "modalWrapper modalHide"} onClick={() => props.setShowModal(false)}>
            <div className="modal-dialog " role="document" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Actores Políticos</h5>
                    </div>
                    <div className="modal-body">
                        <div>
                            <label>
                                Actor:
                            </label>
                            <input type="text" onChange={editarActor} value={actorEdit.actor} />
                        </div>
                        <div>
                            <label>
                                Valor:
                            </label>
                            <input type="text" onChange={editarValor} value={actorEdit.valor} />
                        </div>
                        <div>
                            <input type="button" value="Improductividad" onClick={() => enviarImproductividad()} />
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" onClick={cancelar}>Cancelar
                            y despausar</button>
                        <button className="btn btn-primary manito" onClick={enviar}>Enviar y despausar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}