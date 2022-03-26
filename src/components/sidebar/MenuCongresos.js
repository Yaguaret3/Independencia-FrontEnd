import Modal_Edit_Congreso from "../control/Modal_Edit_Congreso";
import { pausar } from "../control/ControlAPI";
import { useState } from "react";

export default function MenuCongresos(props) {

    const [showList, setShowList] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [congresoModal, setCongresoModal] = useState({});

    const mostrarModalCongreso = (congreso) => {

        pausar();
        setCongresoModal(congreso);
        setShowModal(true);

    }


    return (
        <>
            <div className="sidebar-heading">
                Control Congresos
            </div>


            <li className="nav-item">
                <div className="nav-link collapsed manito" onClick={() => setShowList(!showList)}>
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Congresos</span>
                </div>
                <div className={!showList ? "invisible" : ""}>
                    <table className="bg-white menu rounded">
                        <tbody>
                            {Array.isArray(props.congresos) ? props.congresos.map(congreso => {
                                return (
                                    <tr className=" manito" onClick={() => mostrarModalCongreso(congreso)}>Congreso {congreso.id}</tr>
                                )
                                }): ""
                            }
                        </tbody>


                    </table>
                </div>
            </li>

            {<Modal_Edit_Congreso showModal={showModal} setShowModal={setShowModal} congresoModal={congresoModal} 
                                disparoControl={props.disparoControl} disparoGobernadores={props.disparoGobernadores} disparoCapitanes={props.disparoCapitanes}/>}

            
        </>

    );
}