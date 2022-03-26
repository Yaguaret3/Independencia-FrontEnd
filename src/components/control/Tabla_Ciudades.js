import { useState } from "react";
import Modal_Edit_Ciudad from "./Modal_Edit_Ciudad";
import { pausar } from "./ControlAPI";

export default function Tabla_Ciudades(props) {

    const [ciudadModal, setCiudadModal] = useState({});
    const [showModal, setShowModal] = useState(false);


    const mostrarModalCiudad = (ciudad) => {

        pausar();
        setCiudadModal(ciudad);
        setShowModal(true);
        
    }

    return (
        <>
            <div className="col-lg-8 mb-4">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Ciudades</h1>
                </div>

                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary dropdown-item">
                            Ciudades
                        </h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" width="100%"
                                cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Ciudad</th>
                                        <th>Estatus</th>
                                        <th>Caballos</th>
                                        <th>Vacas</th>
                                        <th>Hierro</th>
                                        <th>Vino</th>
                                        <th>Yerba</th>
                                        <th>Nivel Industrial</th>
                                        <th>Improductividad</th>
                                        <th>Congreso</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(props.ciudades) ? props.ciudades.map(ciudad => {
                                        return (
                                            <tr>
                                                <td className="manito" onClick={() => mostrarModalCiudad(ciudad)}>{ciudad.ciudad}</td>
                                                <td>{ciudad.estatus}</td>
                                                <td>{ciudad.caballos}</td>
                                                <td>{ciudad.vacas}</td>
                                                <td>{ciudad.hierro}</td>
                                                <td>{ciudad.vino}</td>
                                                <td>{ciudad.yerba}</td>
                                                <td>{ciudad.nivel_industria}</td>
                                                <td>{ciudad.improductividad}</td>
                                                <td>{ciudad.congreso}</td>
                                            </tr>
                                        )
                                    }) : ""}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Modal_Edit_Ciudad showModal={showModal} setShowModal={setShowModal} ciudadModal={ciudadModal}
                                disparoControl={props.disparoControl} disparoGobernadores={props.disparoGobernadores} disparoCapitanes={props.disparoCapitanes}/>
        </>
    );
}