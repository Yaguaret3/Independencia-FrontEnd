import { enviarUnidades } from "./GobernadorAPI";

export default function Modal_Enviar_Unidades(props) {

    const enviar = async () => {
        let respuesta = await enviarUnidades();
        if(respuesta === ""){
            props.disparoControl();
            props.disparoGobernadores();
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
                        <h5 className="modal-title">Enviar Unidades al Capitán</h5>
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" onClick={() =>props.setShowModal(false)}>Cancelar</button>
                        <button className="btn btn-primary manito" onClick={enviar}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}