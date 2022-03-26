import { useState, useEffect } from "react";
import { actualizarCiudad, despausar } from "./ControlAPI";

export default function Modal_Edit_Ciudad(props) {

    const [ciudadEdit, setCiudadEdit] = useState({});

    useEffect(() => {
        setCiudadEdit(props.ciudadModal);
    }, [props.ciudadModal]);

    const editarCiudad = (e) => {

        let newCiudad = {
            ciudad: e.target.value,
            estatus: ciudadEdit.estatus,
            caballos: ciudadEdit.caballos,
            vacas: ciudadEdit.vacas,
            hierro: ciudadEdit.hierro,
            vino: ciudadEdit.vino,
            yerba: ciudadEdit.yerba,
            nivel_industria: ciudadEdit.nivel_industria,
            improductividad: ciudadEdit.improductividad,
            congreso: ciudadEdit.congreso
        };
        setCiudadEdit(newCiudad);
    }
    const editarEstatus = (e) => {
        let newCiudad = {
            ciudad: ciudadEdit.ciudad,
            estatus: e.target.value,
            caballos: ciudadEdit.caballos,
            vacas: ciudadEdit.vacas,
            hierro: ciudadEdit.hierro,
            vino: ciudadEdit.vino,
            yerba: ciudadEdit.yerba,
            nivel_industria: ciudadEdit.nivel_industria,
            improductividad: ciudadEdit.improductividad,
            congreso: ciudadEdit.congreso
        };
        setCiudadEdit(newCiudad);
    }
    const editarCaballos = (e) => {
        let newCiudad = {
            ciudad: ciudadEdit.ciudad,
            estatus: ciudadEdit.estatus,
            caballos: e.target.value,
            vacas: ciudadEdit.vacas,
            hierro: ciudadEdit.hierro,
            vino: ciudadEdit.vino,
            yerba: ciudadEdit.yerba,
            nivel_industria: ciudadEdit.nivel_industria,
            improductividad: ciudadEdit.improductividad,
            congreso: ciudadEdit.congreso
        };
        setCiudadEdit(newCiudad);
    }
    const editarVacas = (e) => {
        let newCiudad = {
            ciudad: ciudadEdit.ciudad,
            estatus: ciudadEdit.estatus,
            caballos: ciudadEdit.caballos,
            vacas: e.target.value,
            hierro: ciudadEdit.hierro,
            vino: ciudadEdit.vino,
            yerba: ciudadEdit.yerba,
            nivel_industria: ciudadEdit.nivel_industria,
            improductividad: ciudadEdit.improductividad,
            congreso: ciudadEdit.congreso
        };
        setCiudadEdit(newCiudad);
    }
    const editarHierro = (e) => {
        let newCiudad = {
            ciudad: ciudadEdit.ciudad,
            estatus: ciudadEdit.estatus,
            caballos: ciudadEdit.caballos,
            vacas: ciudadEdit.vacas,
            hierro: e.target.value,
            vino: ciudadEdit.vino,
            yerba: ciudadEdit.yerba,
            nivel_industria: ciudadEdit.nivel_industria,
            improductividad: ciudadEdit.improductividad,
            congreso: ciudadEdit.congreso
        };
        setCiudadEdit(newCiudad);
    }
    const editarVino = (e) => {
        let newCiudad = {
            ciudad: ciudadEdit.ciudad,
            estatus: ciudadEdit.estatus,
            caballos: ciudadEdit.caballos,
            vacas: ciudadEdit.vacas,
            hierro: ciudadEdit.hierro,
            vino: e.target.value,
            yerba: ciudadEdit.yerba,
            nivel_industria: ciudadEdit.nivel_industria,
            improductividad: ciudadEdit.improductividad,
            congreso: ciudadEdit.congreso
        };
        setCiudadEdit(newCiudad);
    }
    const editarYerba = (e) => {
        let newCiudad = {
            ciudad: ciudadEdit.ciudad,
            estatus: ciudadEdit.estatus,
            caballos: ciudadEdit.caballos,
            vacas: ciudadEdit.vacas,
            hierro: ciudadEdit.hierro,
            vino: ciudadEdit.vino,
            yerba: e.target.value,
            nivel_industria: ciudadEdit.nivel_industria,
            improductividad: ciudadEdit.improductividad,
            congreso: ciudadEdit.congreso
        };
        setCiudadEdit(newCiudad);
    }
    const editarNivelIndustria = (e) => {
        let newCiudad = {
            ciudad: ciudadEdit.ciudad,
            estatus: ciudadEdit.estatus,
            caballos: ciudadEdit.caballos,
            vacas: ciudadEdit.vacas,
            hierro: ciudadEdit.hierro,
            vino: ciudadEdit.vino,
            yerba: ciudadEdit.yerba,
            nivel_industria: e.target.value,
            improductividad: ciudadEdit.improductividad,
            congreso: ciudadEdit.congreso
        };
        setCiudadEdit(newCiudad);
    }
    const editarImproductividad = (e) => {
        let newCiudad = {
            ciudad: ciudadEdit.ciudad,
            estatus: ciudadEdit.estatus,
            caballos: ciudadEdit.caballos,
            vacas: ciudadEdit.vacas,
            hierro: ciudadEdit.hierro,
            vino: ciudadEdit.vino,
            yerba: ciudadEdit.yerba,
            nivel_industria: ciudadEdit.nivel_industria,
            improductividad: e.target.value,
            congreso: ciudadEdit.congreso
        };
        setCiudadEdit(newCiudad);
    }
    const editarCongreso = (e) => {
        let newCiudad = {
            ciudad: ciudadEdit.ciudad,
            estatus: ciudadEdit.estatus,
            caballos: ciudadEdit.caballos,
            vacas: ciudadEdit.vacas,
            hierro: ciudadEdit.hierro,
            vino: ciudadEdit.vino,
            yerba: ciudadEdit.yerba,
            nivel_industria: ciudadEdit.nivel_industria,
            improductividad: ciudadEdit.improductividad,
            congreso: e.target.value
        };
        setCiudadEdit(newCiudad);
    }

    const enviar = async () =>{
        let respuesta = await actualizarCiudad(ciudadEdit);
        if (respuesta === ""){
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
                        <h5 className="modal-title">Ciudad</h5>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <label>
                                Ciudad:
                            </label>
                            <input type="text" onChange={editarCiudad} value={ciudadEdit.ciudad} />
                        </div>
                        <div className="row">
                            <label>
                                Estatus:
                            </label>
                            <input type="text" onChange={editarEstatus} value={ciudadEdit.estatus} />
                        </div>
                        <div className="row">
                            <label>
                                Caballos:
                            </label>
                            <input type="text" onChange={editarCaballos} value={ciudadEdit.caballos} />
                        </div>
                        <div className="row">
                            <label>
                                Vacas:
                            </label>
                            <input type="text" onChange={editarVacas} value={ciudadEdit.vacas} />
                        </div>
                        <div className="row">
                            <label>
                                Hierro
                            </label>
                            <input type="text" onChange={editarHierro} value={ciudadEdit.hierro} />
                        </div>
                        <div className="row">
                            <label>
                                Vino
                            </label>
                            <input type="text" onChange={editarVino} value={ciudadEdit.vino} />
                        </div>
                        <div className="row">
                            <label>
                                Yerba
                            </label>
                            <input type="text" onChange={editarYerba} value={ciudadEdit.yerba} />
                        </div>
                        <div className="row">
                            <label>
                                Nivel de Industria
                            </label>
                            <input type="text" onChange={editarNivelIndustria} value={ciudadEdit.nivel_industria} />
                        </div>
                        <div className="row">
                            <label>
                                Improductividad
                            </label>
                            <input type="text" onChange={editarImproductividad} value={ciudadEdit.improductividad} />
                        </div>
                        <div className="row">
                            <label>
                                Congreso
                            </label>
                            <input type="text" onChange={editarCongreso} value={ciudadEdit.congreso} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={cancelar}>Cancelar y despausar</button>
                        <button className="btn btn-primary manito" onClick={enviar}>Enviar y despausar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}