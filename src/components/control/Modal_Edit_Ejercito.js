import { useState, useEffect } from "react";
import { actualizarEjercito, despausar } from "./ControlAPI";

export default function Modal_Edit_Ejercito(props) {

    const [ejercitoEdit, setEjercitoEdit] = useState({});

    useEffect(() => {
        setEjercitoEdit(props.ejercitoModal);
    }, [props.ejercitoModal]);


    const editarCiudad = (e) => {

        let newEjercito = {
            ciudad: e.target.value,
            oficial_a: ejercitoEdit.oficial_a,
            oficial_b: ejercitoEdit.oficial_b,
            oficial_c: ejercitoEdit.oficial_c,
            oficial_d: ejercitoEdit.oficial_d,
            oficial_e: ejercitoEdit.oficial_e,
            nivel_mision_comercial: ejercitoEdit.nivel_mision_comercial,
            ubicacioncomercial: ejercitoEdit.ubicacion_comercial,
            unidades_agrupadas: ejercitoEdit.unidades_agrupadas,
            unidades_a_asignar: ejercitoEdit.unidades_a_asignar,
            ubicacion_militar: ejercitoEdit.ubicacion_militar

        };
        setEjercitoEdit(newEjercito);
    }
    const editarOficial_a = (e) => {

        let newEjercito = {
            ciudad: ejercitoEdit.ciudad,
            oficial_a: e.target.value,
            oficial_b: ejercitoEdit.oficial_b,
            oficial_c: ejercitoEdit.oficial_c,
            oficial_d: ejercitoEdit.oficial_d,
            oficial_e: ejercitoEdit.oficial_e,
            nivel_mision_comercial: ejercitoEdit.nivel_mision_comercial,
            ubicacion_comercial: ejercitoEdit.ubicacion_comercial,
            unidades_agrupadas: ejercitoEdit.unidades_agrupadas,
            unidades_a_asignar: ejercitoEdit.unidades_a_asignar,
            ubicacion_militar: ejercitoEdit.ubicacion_militar

        };
        setEjercitoEdit(newEjercito);
    }
    const editarOficial_b = (e) => {

        let newEjercito = {
            ciudad: ejercitoEdit.ciudad,
            oficial_a: ejercitoEdit.oficial_a,
            oficial_b: e.target.value,
            oficial_c: ejercitoEdit.oficial_c,
            oficial_d: ejercitoEdit.oficial_d,
            oficial_e: ejercitoEdit.oficial_e,
            nivel_mision_comercial: ejercitoEdit.nivel_mision_comercial,
            ubicacion_comercial: ejercitoEdit.ubicacion_comercial,
            unidades_agrupadas: ejercitoEdit.unidades_agrupadas,
            unidades_a_asignar: ejercitoEdit.unidades_a_asignar,
            ubicacion_militar: ejercitoEdit.ubicacion_militar

        };
        setEjercitoEdit(newEjercito);
    }
    const editarOficial_c = (e) => {

        let newEjercito = {
            ciudad: ejercitoEdit.ciudad,
            oficial_a: ejercitoEdit.oficial_a,
            oficial_b: ejercitoEdit.oficial_b,
            oficial_c: e.target.value,
            oficial_d: ejercitoEdit.oficial_d,
            oficial_e: ejercitoEdit.oficial_e,
            nivel_mision_comercial: ejercitoEdit.nivel_mision_comercial,
            ubicacion_comercial: ejercitoEdit.ubicacion_comercial,
            unidades_agrupadas: ejercitoEdit.unidades_agrupadas,
            unidades_a_asignar: ejercitoEdit.unidades_a_asignar,
            ubicacion_militar: ejercitoEdit.ubicacion_militar

        };
        setEjercitoEdit(newEjercito);
    }
    const editarOficial_d = (e) => {

        let newEjercito = {
            ciudad: ejercitoEdit.ciudad,
            oficial_a: ejercitoEdit.oficial_a,
            oficial_b: ejercitoEdit.oficial_b,
            oficial_c: ejercitoEdit.oficial_c,
            oficial_d: e.target.value,
            oficial_e: ejercitoEdit.oficial_e,
            nivel_mision_comercial: ejercitoEdit.nivel_mision_comercial,
            ubicacion_comercial: ejercitoEdit.ubicacion_comercial,
            unidades_agrupadas: ejercitoEdit.unidades_agrupadas,
            unidades_a_asignar: ejercitoEdit.unidades_a_asignar,
            ubicacion_militar: ejercitoEdit.ubicacion_militar

        };
        setEjercitoEdit(newEjercito);
    }
    const editarOficial_e = (e) => {

        let newEjercito = {
            ciudad: ejercitoEdit.ciudad,
            oficial_a: ejercitoEdit.oficial_a,
            oficial_b: ejercitoEdit.oficial_b,
            oficial_c: ejercitoEdit.oficial_c,
            oficial_d: ejercitoEdit.oficial_d,
            oficial_e: e.target.value,
            nivel_mision_comercial: ejercitoEdit.nivel_mision_comercial,
            ubicacion_comercial: ejercitoEdit.ubicacion_comercial,
            unidades_agrupadas: ejercitoEdit.unidades_agrupadas,
            unidades_a_asignar: ejercitoEdit.unidades_a_asignar,
            ubicacion_militar: ejercitoEdit.ubicacion_militar

        };
        setEjercitoEdit(newEjercito);
    }
    const editarNivel_mision_comercial = (e) => {

        let newEjercito = {
            ciudad: ejercitoEdit.ciudad,
            oficial_a: ejercitoEdit.oficial_a,
            oficial_b: ejercitoEdit.oficial_b,
            oficial_c: ejercitoEdit.oficial_c,
            oficial_d: ejercitoEdit.oficial_d,
            oficial_e: ejercitoEdit.oficial_e,
            nivel_mision_comercial: e.target.value,
            ubicacion_comercial: ejercitoEdit.ubicacion_comercial,
            unidades_agrupadas: ejercitoEdit.unidades_agrupadas,
            unidades_a_asignar: ejercitoEdit.unidades_a_asignar,
            ubicacion_militar: ejercitoEdit.ubicacion_militar

        };
        setEjercitoEdit(newEjercito);
    }
    const editarUbicacion_comercial = (e) => {

        let newEjercito = {
            ciudad: ejercitoEdit.ciudad,
            oficial_a: ejercitoEdit.oficial_a,
            oficial_b: ejercitoEdit.oficial_b,
            oficial_c: ejercitoEdit.oficial_c,
            oficial_d: ejercitoEdit.oficial_d,
            oficial_e: ejercitoEdit.oficial_e,
            nivel_mision_comercial: ejercitoEdit.nivel_mision_comercial,
            ubicacion_comercial: e.target.value,
            unidades_agrupadas: ejercitoEdit.unidades_agrupadas,
            unidades_a_asignar: ejercitoEdit.unidades_a_asignar,
            ubicacion_militar: ejercitoEdit.ubicacion_militar

        };
        setEjercitoEdit(newEjercito);
    }
    const editarUnidades_agrupadas = (e) => {

        let newEjercito = {
            ciudad: ejercitoEdit.ciudad,
            oficial_a: ejercitoEdit.oficial_a,
            oficial_b: ejercitoEdit.oficial_b,
            oficial_c: ejercitoEdit.oficial_c,
            oficial_d: ejercitoEdit.oficial_d,
            oficial_e: ejercitoEdit.oficial_e,
            nivel_mision_comercial: ejercitoEdit.nivel_mision_comercial,
            ubicacion_comercial: ejercitoEdit.ubicacion_comercial,
            unidades_agrupadas: e.target.value,
            unidades_a_asignar: ejercitoEdit.unidades_a_asignar,
            ubicacion_militar: ejercitoEdit.ubicacion_militar

        };
        setEjercitoEdit(newEjercito);
    }
    const editarUnidades_a_asignar = (e) => {

        let newEjercito = {
            ciudad: ejercitoEdit.ciudad,
            oficial_a: ejercitoEdit.oficial_a,
            oficial_b: ejercitoEdit.oficial_b,
            oficial_c: ejercitoEdit.oficial_c,
            oficial_d: ejercitoEdit.oficial_d,
            oficial_e: ejercitoEdit.oficial_e,
            nivel_mision_comercial: ejercitoEdit.nivel_mision_comercial,
            ubicacion_comercial: ejercitoEdit.ubicacion_comercial,
            unidades_agrupadas: ejercitoEdit.unidades_agrupadas,
            unidades_a_asignar: e.target.value,
            ubicacion_militar: ejercitoEdit.ubicacion_militar

        };
        setEjercitoEdit(newEjercito);
    }
    const editarUbicacion_militar = (e) => {

        let newEjercito = {
            ciudad: ejercitoEdit.ciudad,
            oficial_a: ejercitoEdit.oficial_a,
            oficial_b: ejercitoEdit.oficial_b,
            oficial_c: ejercitoEdit.oficial_c,
            oficial_d: ejercitoEdit.oficial_d,
            oficial_e: ejercitoEdit.oficial_e,
            nivel_mision_comercial: ejercitoEdit.nivel_mision_comercial,
            ubicacion_comercial: ejercitoEdit.ubicacion_comercial,
            unidades_agrupadas: ejercitoEdit.unidades_agrupadas,
            unidades_a_asignar: ejercitoEdit.unidades_a_asignar,
            ubicacion_militar: e.target.value

        };
        setEjercitoEdit(newEjercito);
    }

    const enviar = async () => {
        let respuesta = await actualizarEjercito(ejercitoEdit);
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
        despausar();
        props.setShowModal(false);
    }


    return (
        <div className={props.showModal ? "modalWrapper" : "modalWrapper modalHide"} onClick={() => props.setShowModal(false)}>
            <div className="modal-dialog " role="document" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Ejército</h5>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <label>
                                Ciudad:
                            </label>
                            <input type="text" onChange={editarCiudad} value={ejercitoEdit.ciudad} />
                        </div>
                        <div className="row">
                            <label>
                                Oficial A:
                            </label>
                            <input type="text" onChange={editarOficial_a} value={ejercitoEdit.oficial_a} />
                        </div>
                        <div className="row">
                            <label>
                                Oficial B:
                            </label>
                            <input type="text" onChange={editarOficial_b} value={ejercitoEdit.oficial_b} />
                        </div>
                        <div className="row">
                            <label>
                                Oficial C:
                            </label>
                            <input type="text" onChange={editarOficial_c} value={ejercitoEdit.oficial_c} />
                        </div>
                        <div className="row">
                            <label>
                                Oficial D:
                            </label>
                            <input type="text" onChange={editarOficial_d} value={ejercitoEdit.oficial_d} />
                        </div>
                        <div className="row">
                            <label>
                                Oficial E:
                            </label>
                            <input type="text" onChange={editarOficial_e} value={ejercitoEdit.oficial_e} />
                        </div>
                        <div className="row">
                            <label>
                                Nivel de Misión Comercial
                            </label>
                            <input type="text" onChange={editarNivel_mision_comercial} value={ejercitoEdit.nivel_mision_comercial} />
                        </div>
                        <div className="row">
                            <label>
                                Ubicación Comercial
                            </label>
                            <input type="text" onChange={editarUbicacion_comercial} value={ejercitoEdit.ubicacion_comercial} />
                        </div>
                        <div className="row">
                            <label>
                                Unidades a asignar
                            </label>
                            <input type="text" onChange={editarUnidades_a_asignar} value={ejercitoEdit.unidades_a_asignar} />
                        </div>
                        <div className="row">
                            <label>
                                Unidades agrupadas
                            </label>
                            <input type="text" onChange={editarUnidades_agrupadas} value={ejercitoEdit.unidades_agrupadas} />
                        </div>
                        <div className="row">
                            <label>
                                Ubicación militar
                            </label>
                            <input type="text" onChange={editarUbicacion_militar} value={ejercitoEdit.ubicacion_militar} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" onClick={cancelar}>Cancelar y despausar</button>
                        <button className="btn btn-primary manito" onClick={enviar}>Enviar y despausar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}