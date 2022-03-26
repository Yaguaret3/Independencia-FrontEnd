import CerrarSesion from "./CerrarSesion";
import Timer from "./Timer";

export default function Sidebar(props) {    

    return (
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* Sidebar - Brand */}
            <img src="static/img/logo.png" alt="Logo de Independencia: el Megajuego"/>
            <div class="titulo tituloIndependencia"><h3 class="text-white">Independencia:</h3></div>
            <div class="titulo tituloElMegajuego"><h3 class="text-white mb-3">el Megajuego</h3></div>

            {/* Divider */}
            <hr class="sidebar-divider my-0" />

            
            <Timer timer={props.timer}/>

            {/* Divider */}
            <hr class="sidebar-divider" />

            <CerrarSesion />

            {/* Divider */}
            <hr class="sidebar-divider" />

            {/* Sidebar Toggler (Sidebar) */}
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
    )

}