import { useNavigate } from "react-router";
import { useState } from "react";

export default function Register() {

    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [repetirPass, setRepetirPass] = useState();

    const navigate = useNavigate();

    const register = async () => {

        let usuario = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            password:password
        }

        if (repetirPass !== password) {
            alert("Las contraseñas ingresadas son diferentes");
            return;
        } else {
            await fetch('registrarUsuario', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            });

            alert("Usuario creado correctamente");
            toIniciarSesion();
        }
    }

    const toIniciarSesion = () => {
        navigate("/");
    }

    return (
        <div >
            <div className="container">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/*<!-- Nested Row within Card Body -->*/}
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block">
                                <img className="img-fluid logo center" src="/static/img/logo.png" alt="Logo de Independencia"/>
                            </div>
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Registrarse</h1>
                                    </div>

                                    <div className="user">
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input onChange={(e) => setNombre(e.target.value)} type="text" className="form-control form-control-user"
                                                    placeholder="Nombre" value={nombre}/>
                                            </div>
                                            <div className="col-sm-6">
                                                <input onChange={(e) => setApellido(e.target.value)} type="text" className="form-control form-control-user"
                                                    placeholder="Apellido" value={apellido}/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control form-control-user"
                                                placeholder="Correo Electrónico" value={email}/>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control form-control-user"
                                                    placeholder="Password" value={password}/>
                                            </div>
                                            <div className="col-sm-6">
                                                <input onChange={(e) => setRepetirPass(e.target.value)} type="password" className="form-control form-control-user"
                                                    placeholder="Repetir Password" value={repetirPass}/>
                                            </div>
                                        </div>
                                        <button onClick={register} className="btn btn-primary btn-user btn-block">
                                            Registrarse
                                        </button>

                                    </div>

                                    <hr />
                                    <div className="text-center">
                                        <div onClick={toIniciarSesion} className="small manito" >¿Ya tenés cuenta? Iniciá sesión</div>
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