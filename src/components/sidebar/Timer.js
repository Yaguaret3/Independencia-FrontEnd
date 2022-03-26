import { useEffect, useState } from "react";

export default function Timer(props) {

    const [timer, setTimer] = useState({ minDec: 0, minUni: 0, secDec: 0, secUni: 0 });
    const [turno, setTurno] = useState({ turnoDec: 0, turnoUni: 0 });
    const [faseLetras, setFaseLetras] = useState("");
    const [pausado, setPausado] = useState(false);

    useEffect(() => {
        mostrarPausa();
        establecerFase();
        establecerTurno();
        establecerProximoFinTurno();
    }, [props.timer]);

    const intervalo = setInterval(() => {

        // Tomamos la fecha actual
        let ahora = new Date().getTime();

        // Restamos para calcular la distancia
        let distancia = localStorage.getItem("proximoFinTurno") - ahora;
        // Calculamos minutos y segundos
        let minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        let segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        let newTimer = { minDec: 0, minUni: 0, secDec: 0, secUni: 0 };

        // Mostramos el resultado
        if (minutos < 10) {
            newTimer.minDec = "0";
            newTimer.minUni = minutos.toString().charAt(0);
        } else {
            newTimer.minDec = minutos.toString().charAt(0);
            newTimer.minUni = minutos.toString().charAt(1);
        }
        if (segundos < 10) {
            newTimer.secDec = "0";
            newTimer.secUni = segundos.toString().charAt(0);
        } else {
            newTimer.secDec = segundos.toString().charAt(0);
            newTimer.secUni = segundos.toString().charAt(1);
        }

        // Si la cuenta terminó, dejá en cero todo
        if (distancia < 0) {
            newTimer = {
                minDec: 0,
                minUni: 0,
                secDec: 0,
                secUni: 0
            }
        }
        setTimer(newTimer);
    }, 1000);

    const mostrarPausa = () => {
        for (let accion of props.timer) {
            if (accion.accion === "pausa") {
                if (accion.valor === 1) {
                    setPausado(true);
                } else if (accion.valor === 0) {
                    setPausado(false);
                }
            }
        }
    }

    const establecerFase = () => {
        for (let accion of props.timer) {

            if (accion.accion === "fase_militar") {

                switch (accion.valor) {
                    case 1: setFaseLetras("Inicial");
                        break;
                    case 2: setFaseLetras("Militar 1");
                        break;
                    case 3: setFaseLetras("Comercial");
                        break;
                    case 4: setFaseLetras("Militar 2");
                        break;
                    case 5: setFaseLetras("Final");
                        break;
                }
            }
        }
    }

    const establecerTurno = () => {
        for (let accion of props.timer) {
            if (accion.accion === "turno") {
                let newTurno = {
                    turnoDec: 0,
                    turnoUni: 0
                }
                if (accion.valor >= 10) {
                    newTurno.turnoDec = accion.valor.toString().charAt(0);
                    newTurno.turnoUni = accion.valor.toString().charAt(1);
                } else {
                    newTurno.turnoDec = 0;
                    newTurno.turnoUni = accion.valor.toString().charAt(0);
                }
                setTurno(newTurno);

            }
        }
    }
    const establecerProximoFinTurno = () => {
        for(let accion of props.timer){
            if(accion.accion === "timer"){
                localStorage.setItem("proximoFinTurno", accion.valor);
            }
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-lg-4 mb-1">
                    <div className="sidebar-heading">
                        Turno
                    </div>
                    <li className="nav-item active">
                        <div className="timer">

                            <span className="flip">
                                {turno.turnoDec}
                            </span>
                            <span className="flip">
                                {turno.turnoUni}
                            </span>
                        </div>
                    </li>
                </div>
                <div className="col-lg-8 mb-1">
                    <div className="sidebar-heading">
                        Timer
                    </div>
                    <li className="nav-item active">
                        <div className="timer">
                            <span className="flip">{timer.minDec}</span>
                            <span className="flip">{timer.minUni}</span>
                            <span className="flip"> : </span>
                            <span className="flip">{timer.secDec}</span>
                            <span className="flip">{timer.secUni}</span>
                        </div>
                    </li>
                </div>
            </div>
            <div className="sidebar-heading">
                Fase
            </div>
            <li className="nav-item active mb-4">
                <div className="timer">
                    <span className="fase">
                        Fase {faseLetras}
                    </span>
                </div>
            </li>
            <li className="nav-item active">
                <div className="timer">
                    {pausado ? <span className="fase mb-4">PAUSADO</span> : ""}
                </div>
            </li>
        </>
    );
}