import { useNavigate } from "react-router";
import { useState } from "react";

export default function IniciarSesion() {

    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const toRegister = () => {
        navigate("/register");
    }

    const iniciarSesion = async () => {

        let usuario = {
            email: email,
            password: password
        }

        const request = await fetch('api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario)
        });
        const respuesta = await request.json();
        if(respuesta.token === "Error"){
            alert(respuesta.token);
        } else {
            localStorage.setItem("token", respuesta.token);
            let url = respuesta.url;
            navigate(url);
        }
    }


    return (
        <div className="container">

            {/* Outer Row */}
            <div className="row justify-content-center">

                <div className="col-xl-10 col-lg-12 col-md-9">

                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/* Nested Row within Card Body */}
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="d-none d-lg-block row titulo mt-5 ml-4">
                                        <div className="text-center tituloIndependencia mt-2">Independencia:</div>
                                        <div className="text-center tituloElMegajuego mt-5">el Megajuego</div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">¡Bienvenido!</h1>
                                        </div>
                                        <div className="user">
                                            <div className="form-group">
                                                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control form-control-user"
                                                    aria-describedby="emailHelp" placeholder="Ingresá tu Email" value={email} />
                                            </div>
                                            <div className="form-group">
                                                <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control form-control-user"
                                                    placeholder="Ingresá tu Password" value={password} />
                                            </div>
                                            <button onClick={iniciarSesion} className="btn btn-primary btn-user btn-block manito">
                                                Iniciar Sesión
                                            </button>

                                        </div>
                                        <hr />
                                        <div class="text-center">
                                            <div class="small manito" onClick={toRegister}>Registrarse</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}