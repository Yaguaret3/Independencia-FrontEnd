import { useState } from "react";
import Modal_Aumentar_Estatus from "./Modal_Aumentar_Estatus";
import Modal_Aumentar_Industria from "./Modal_Aumentar_Industria";
import Modal_Aumentar_Mision_Comercial from "./Modal_Aumentar_Mision_Comercial";
import Modal_Comerciar from "./Modal_Comerciar";
import Modal_Contratar_Oficial from "./Modal_Contratar_Oficial";
import Modal_Enviar_Unidades from "./Modal_Enviar_Unidades";
import Modal_Reclutar_Unidades from "./Modal_Reclutar_Unidades";

export default function Fila_Acciones(props) {

    const [showEstatusModal, setShowEstatusModal] = useState(false);
    const [showIndustriaModal, setShowIndustriaModal] = useState(false);
    const [showMisionComercialModal, setShowMisionComercialModal] = useState(false);
    const [showUnidadesModal, setShowUnidadesModal] = useState(false);
    const [showOficialModal, setShowOficialModal] = useState(false);
    const [showEnviarAlCapitanModal, setShowEnviarAlCapitanModal] = useState(false);
    const [showComerciarModal, setShowComerciarModal] = useState(false);


    return (
    


    <>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Acciones</h1>
        </div>
        <div className="row">

            {/* Aumentar Estatus */}
            <div className="col-xl-3 col-md-6 mb-4 cols4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Aumentar Estatus
                                </div>
                                <div>
                                    <button className="btn btn-primary" onClick={() => setShowEstatusModal(true)}>Tocame</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Aumentar Nivel de Industria */}
            <div className="col-xl-3 col-md-6 mb-4 cols4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    Invertir en Industria
                                </div>
                                <div>
                                    <button className="btn btn-primary" onClick={() => setShowIndustriaModal(true)}>Tocame</button>

                                </div>
                            </div>
                            <div className="col-auto">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Aumentar Nivel de Misión Comercial */}
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Incentivar Misiones Comerciales
                                </div>
                                <div>
                                    <button className="btn btn-primary" onClick={() => setShowMisionComercialModal(true)}>Tocame</button>
                                </div>
                            </div>
                            <div className="col-auto">

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Reclutar Unidades Militares */}
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Reclutar Unidades Militares
                                </div>
                                <div>
                                    <button className="btn btn-primary" onClick={() => setShowUnidadesModal(true)}>Tocame</button>
                                </div>
                            </div>
                            <div className="col-auto">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contratar Oficiales Militares */}
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Contratar Oficial Militar
                                </div>
                                <div>
                                    <button className="btn btn-primary" onClick={() =>setShowOficialModal(true)}>Tocame</button>
                                </div>
                            </div>
                            <div className="col-auto">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enviar Unidades Militares al Capitán */}
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Enviar Unidades Militares al Capitán
                                </div>
                                <div>
                                    <button className="btn btn-primary" onClick={() => setShowEnviarAlCapitanModal(true)}>Tocame</button>
                                </div>
                            </div>
                            <div className="col-auto">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Comerciar */}
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Comerciar
                                </div>
                                <div>
                                    <button className="btn btn-primary" onClick={() => setShowComerciarModal(true)}>Tocame</button>
                                </div>
                            </div>
                            <div className="col-auto">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <Modal_Aumentar_Estatus showModal={showEstatusModal} setShowModal={setShowEstatusModal} actor_politico_1={props.recursos.actor_politico_1} 
                                actor_politico_2={props.recursos.actor_politico_2} disparoControl={props.disparoControl} 
                                disparoGobernadores={props.disparoGobernadores} disparoCapitanes={props.disparoCapitanes}/>

        <Modal_Aumentar_Industria  showModal={showIndustriaModal} setShowModal={setShowIndustriaModal} disparoControl={props.disparoControl} 
                                    disparoGobernadores={props.disparoGobernadores} disparoCapitanes={props.disparoCapitanes}/>

        <Modal_Aumentar_Mision_Comercial showModal={showMisionComercialModal} setShowModal={setShowMisionComercialModal} disparoControl={props.disparoControl} 
                                        disparoGobernadores={props.disparoGobernadores} disparoCapitanes={props.disparoCapitanes}/>

        <Modal_Reclutar_Unidades showModal={showUnidadesModal} setShowModal={setShowUnidadesModal} disparoControl={props.disparoControl} 
                                        disparoGobernadores={props.disparoGobernadores} disparoCapitanes={props.disparoCapitanes}/>

        <Modal_Contratar_Oficial showModal={showOficialModal} setShowModal={setShowOficialModal} disparoControl={props.disparoControl} 
                                        disparoGobernadores={props.disparoGobernadores} disparoCapitanes={props.disparoCapitanes}/>

        <Modal_Enviar_Unidades showModal={showEnviarAlCapitanModal} setShowModal={setShowEnviarAlCapitanModal} disparoControl={props.disparoControl} 
                                        disparoGobernadores={props.disparoGobernadores} disparoCapitanes={props.disparoCapitanes}/>
        
        <Modal_Comerciar showModal={showComerciarModal} setShowModal={setShowComerciarModal} disparoControl={props.disparoControl} 
                                        disparoGobernadores={props.disparoGobernadores} disparoCapitanes={props.disparoCapitanes}/>
    </>
    );
}