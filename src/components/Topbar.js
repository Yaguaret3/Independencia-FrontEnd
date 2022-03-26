export default function Topbar() {

    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow align-content-center">

            {/* Sidebar Toggle (Topbar) */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>
            <div className="titulo">
                <span className="tituloIndependencia">Independencia: </span> <span className="tituloElMegajuego"> el Megajuego</span>
            </div>


        </nav>
    )
}