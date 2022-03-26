import { useState } from "react";
import Modal_Asignar_Unidades from "./Modal_Asignar_Unidades";


export default function Asignar_Unidades(props) {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="col-xl-auto col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Unidades a asignar
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    <label>
                                        {props.unidades_a_asignar}
                                    </label>
                                </div>
                            </div>
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Unidades agrupadas
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    <label>
                                        {props.unidades_agrupadas}
                                    </label>
                                </div>
                            </div>
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    <button className="btn btn-primary" onClick={() => setShowModal(true)}>Asignar Unidades</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Modal_Asignar_Unidades showModal={showModal} setShowModal={setShowModal} 
                                    disparoControl={props.disparoControl} disparoCapitanes={props.disparoCapitanes}/>
        </>
    );
}