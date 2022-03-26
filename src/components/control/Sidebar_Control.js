import AccionesControl from "../sidebar/AccionesControl";
import CerrarSesion from "../sidebar/CerrarSesion";
import Timer from "../sidebar/Timer";

export default function Sidebar_Control(props){


    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* Sidebar - Brand */}
            <img src="/static/img/logo.png" alt="Logo de Independencia: el Megajuego"/>

            {/* Divider */}
            <hr className="sidebar-divider my-0" />

            <Timer timer={props.timer}/>

            {/* -----------------------------Divider----------------------------------- */}
            <hr className="sidebar-divider" />

            <AccionesControl congresos={props.congresos} 
                            disparoControl={props.disparoControl} disparoGobernadores={props.disparoGobernadores} disparoCapitanes={props.disparoCapitanes}/>

            {/* ------------------------------Divider-------------------------------------- */}
            <hr className="sidebar-divider d-none d-md-block" />

            <CerrarSesion />

            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>

    );
}