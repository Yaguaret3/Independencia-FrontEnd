import { useEffect, useState } from "react";

export default function Oficiales(props) {

    const [imagenes, setImagenes] = useState({});

    useEffect(() => {
        
        let newImagenes = {
        
            oficial_a: "/static/img/A"+props.oficiales.oficial_a+".jpg",
            oficial_b: "/static/img/B"+props.oficiales.oficial_b+".jpg",
            oficial_c: "/static/img/C"+props.oficiales.oficial_c+".jpg",
            oficial_d: "/static/img/D"+props.oficiales.oficial_d+".jpg",
            oficial_e: "/static/img/E"+props.oficiales.oficial_e+".jpg"
        };
        setImagenes(newImagenes);

    }, [props.oficiales]);
    

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800" id="nombreCiudad">Oficiales</h1>
            </div>

            <div className="row">

                {/* Oficial A / col-xl-21 inventado en sb-admin-2.min.css */}
                <div className="col-xl-21 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Oficial A
                                    </div>
                                    <img className="img-fluid" src={imagenes.oficial_a} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Oficial B */}
                <div className="col-xl-21 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Oficial B
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        <img className="img-fluid" src={imagenes.oficial_b} alt="" />
                                    </div>
                                </div>
                                <div className="col-auto">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Oficial C */}
                <div className="col-xl-21 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Oficial C
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        <img className="img-fluid" src= {imagenes.oficial_c} alt="" />
                                    </div>
                                </div>
                                <div className="col-auto">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Oficial D */}
                <div className="col-xl-21 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Oficial D
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        <img className="img-fluid" src={imagenes.oficial_d} alt="" />
                                    </div>
                                </div>
                                <div className="col-auto">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Oficial E */}
                <div className="col-xl-21 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Oficial E
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        <img className="img-fluid" src={imagenes.oficial_e} alt="" />
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