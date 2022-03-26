import { useState } from "react";
import { pausar } from "./ControlAPI";
import Modal_Edit_Actores from "./Modal_Edit_Actores";

export default function Tabla_Actores(props) {

    const [actorModal, setActorModal] = useState({});
    const [showModal, setShowModal] = useState(false);

    const mostrarModalActor = (actor) => {

        pausar();
        setActorModal(actor);
        setShowModal(true);
        
    }

    return (
        <>
            <div className="col-lg-4 mb-4">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Actores Políticos</h1>
                </div>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary dropdown-item">
                            Actores Políticos
                        </h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" width="100%"
                                cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Poder Político</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(props.actores) ? props.actores.map(actor => {
                                        return (
                                            <tr>
                                                <td className="manito" onClick={() => mostrarModalActor(actor)}>{actor.actor}</td>
                                                <td>{actor.valor}</td>
                                            </tr>
                                        );
                                    }) : ""}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Modal_Edit_Actores showModal={showModal} setShowModal={setShowModal} actorModal={actorModal}
                                disparoControl={props.disparoControl} disparoGobernadores={props.disparoGobernadores} disparoCapitanes={props.disparoCapitanes}/>
        </>
    );
}