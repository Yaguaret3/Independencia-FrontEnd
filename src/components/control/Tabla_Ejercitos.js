import { useState } from "react";
import { pausar } from "./ControlAPI";
import Modal_Edit_Ejercito from "./Modal_Edit_Ejercito";

export default function Tabla_Ejercitos(props) {

    const [ejercitoModal, setEjercitoModal] = useState({});
    const [showModal, setShowModal] = useState(false);

    const mostrarModalEjercito = (ejercito) => {

        pausar();
        setEjercitoModal(ejercito);
        setShowModal(true);
        
    }    

    return (
        <>
            <div className="col-lg-6 mb-4">

                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 id="referencia" className="h3 mb-0 text-gray-800">Ejércitos</h1>
                </div>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary dropdown-item">
                            Ejércitos
                        </h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" width="100%"
                                cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Ejército</th>
                                        <th>Unidades</th>
                                        <th>Of.A</th>
                                        <th>Of.B</th>
                                        <th>Of.C</th>
                                        <th>Of.D</th>
                                        <th>Of.E</th>
                                        <th>Nivel de Misión Comercial</th>
                                        <th>Ubicación de Misión Comercial</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(props.ejercitos) ? props.ejercitos.map(ejercito => {
                                        return (
                                            <tr>
                                                <td className="manito" onClick={() => mostrarModalEjercito(ejercito)}>{ejercito.ciudad}</td>
                                                <td>{ejercito.unidades_agrupadas}</td>
                                                <td>{ejercito.oficial_a}</td>
                                                <td>{ejercito.oficial_b}</td>
                                                <td>{ejercito.oficial_c}</td>
                                                <td>{ejercito.oficial_d}</td>
                                                <td>{ejercito.oficial_e}</td>
                                                <td>{ejercito.nivel_mision_comercial}</td>
                                                <td>{ejercito.ubicacion_comercial}</td>
                                            </tr>
                                        );
                                    }) : ""}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Modal_Edit_Ejercito showModal={showModal} setShowModal={setShowModal} ejercitoModal={ejercitoModal}
                                disparoControl={props.disparoControl} disparoGobernadores={props.disparoGobernadores} disparoCapitanes={props.disparoCapitanes}/>                    
        </>
    );
}