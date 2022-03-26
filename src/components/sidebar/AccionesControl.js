import MenuCongresos from "./MenuCongresos";
import { pausar, despausar, siguienteTurno } from "../control/ControlAPI";

export default function AccionesControl(props) {

    const enviarSiguienteTurno = async () => {

        let respuesta = await siguienteTurno();
        if (respuesta === "") {
            props.disparoControl();
            props.disparoGobernadores();
            props.disparoCapitanes();
        } else {
            alert(respuesta);
        }
    }
    const enviarPausar = async () => {
        let respuesta = await pausar();
        if (respuesta === "") {
            props.disparoControl();
            props.disparoGobernadores();
            props.disparoCapitanes();
        } else {
            alert(respuesta);
        }
    }
    const enviarDespausar = async () => {
        let respuesta = await despausar();
        if (respuesta === "") {
            props.disparoControl();
            props.disparoGobernadores();
            props.disparoCapitanes();
        } else {
            alert(respuesta);
        }
    }

    return (
        <>
            {/* Heading - Control General - Siguiente Turno - Pausar - Despausar */}
            <div className="sidebar-heading">
                Control General
            </div>

            <li className="nav-item">
                <div className="nav-link manito" onClick={() => enviarSiguienteTurno()}>
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Siguiente Turno</span>
                </div>
            </li>

            <li className="nav-item">
                <div className="nav-link manito" onClick={() => enviarPausar()}>
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Pausar</span>
                </div>
            </li>

            <li className="nav-item">
                <div className="nav-link manito" onClick={() => enviarDespausar()}>
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Despausar</span
                    ></div>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider" />

            <MenuCongresos congresos={props.congresos} disparoControl={props.disparoControl}
                disparoGobernadores={props.disparoGobernadores} disparoCapitanes={props.disparoCapitanes} />

        </>
    );

}