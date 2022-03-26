import { useState } from "react";
import Modal_Logout from "./Modal_Logout";

export default function CerrarSesion() {

    const [showModal, setShowModal] = useState(false);

    return (

        <>
            {/* Cerrar sesión */}
            <li className="nav-item">
                <div className="nav-link manito" onClick={() => setShowModal(true)}>Cerrar sesión</div>
            </li>

            <Modal_Logout showModal={showModal} setShowModal={setShowModal}/>
        </>
    );

}