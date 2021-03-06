
export default function Tab_Historial_Comercio(props) {

    return (

        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Historial de Comercio</h6>
                </div>
                <div className="card-body">
                    {props.historialComercial}
                </div>
            </div>
        </div>
    );
}