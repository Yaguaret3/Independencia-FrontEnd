export default function Fila_Otros_Recursos(props) {
    
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Ciudad de {props.recursos.ciudad}</h1>
            </div>
            
            <div className="row">

                {/* Estatus */}
                <div className="col-xl-2 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Estatus</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {props.recursos.estatus}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nivel de Industria */}
                <div className="col-xl-2 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Nivel de Industria</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {props.recursos.nivel_industria}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nivel de Misión Comercial */}
                <div className="col-xl-2 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Nivel de Misión Comercial</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {props.recursos.nivel_mision_comercial}
                                    </div>
                                </div>
                                <div className="col-auto">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Unidades Militares Reclutadas aún no enviadas */}
                <div className="col-xl-2 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Unidades Militares Reclutadas aún no enviadas</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {props.recursos.unidades}
                                    </div>
                                </div>
                                <div className="col-auto">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Unidades Militares Totales Enviadas */}
                <div className="col-xl-2 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Unidades Militares Totales Enviadas</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {props.recursos.unidades_enviadas}
                                    </div>
                                </div>
                                <div className="col-auto">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Oficiales Militares Graduados */}
                <div className="col-xl-2 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Oficiales Militares Contratados</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {props.recursos.oficiales}
                                    </div>
                                </div>
                                <div className="col-auto">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}