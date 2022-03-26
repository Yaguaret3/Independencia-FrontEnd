import { useNavigate } from "react-router";

export default function Modal_Logout(props) {

    const navigate = useNavigate();

    const cerrarSesion = () =>{
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
        <div className={props.showModal ? "modalWrapper" : "modalWrapper modalHide"} onClick={() => props.setShowModal(false)}>
            <div className="modal-dialog" role="document" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">¿Cerrar sesión?</h5>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={() => props.setShowModal(false)}>Cancelar</button>
                        <button className="btn btn-primary manito" onClick={cerrarSesion}>Cerrar sesión</button>
                    </div>
                </div>
            </div>
        </div>
    );
}