//----------------------------------------------------------ENVÍOS--------------------------------------------------------------------
//---------------------------------------------------Tres request sin datos-----------------------------------------------------------
export async function pausar() {

    const request = await fetch('api/control/pausar', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        },
    });
    return await request.text();
    
}
export async function despausar() {

    const request = await fetch('api/control/despausar', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        },
    });
    return await request.text();
}
export async function siguienteTurno() {

    const request = await fetch('api/control/avanzarTurno', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        },
    });
    return await request.text();
}

//----------------------------------Fase, Permitir actualizar, Actor, Improductividad, Ciudad, Congreso, Ejercito----------------------
export async function nuevaFase(fase) {

    // Enviar
    const request = await fetch('api/control/seleccionarFase', {
       method: 'POST',
       headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'Authorization': localStorage.getItem("token")
       },
       body: JSON.stringify(fase)
    });
    return await request.text();
    
}
export async function permitirActualizar(actualizarCapitanes) {

    // Enviar
    const request = await fetch('api/control/permitirActualizarListaCapitanes', {
       method: 'POST',
       headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'Authorization': localStorage.getItem("token")
       },
       body: JSON.stringify(actualizarCapitanes)
    });
    return await request.text();
}
export async function actualizarActor(actor) {
    // Enviar
    const request = await fetch('api/control/editarActorPolitico', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        },
        body: JSON.stringify(actor)
    });
    return await request.text();
}
export async function improductividad(nombre) {

    let datos = {actor:nombre}

    const request = await fetch('api/control/improductividad', {
       method: 'POST',
       headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'Authorization': localStorage.getItem("token")
       },
       body: JSON.stringify(datos)
    });
    return await request.text();
}
export async function actualizarCiudad(ciudad) {
    // Enviar
    const request = await fetch('api/control/editarCiudad', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        },
        body: JSON.stringify(ciudad)
    });
    return await request.text();
}
export async function actualizarCongreso(congreso) {
    // Enviar
    const request = await fetch('api/control/editarCongreso', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        },
        body: JSON.stringify(congreso)
    });
    return await request.text();
    
}
export async function actualizarEjercito(ejercito) {
    // Enviar
    const request = await fetch('api/control/editarEjercito', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        },
        body: JSON.stringify(ejercito)
    });
    return await request.text();
}

//------------------------------------------------------RECIBIMIENTOS------------------------------------------------------------------
export async function cargarRecursosCiudades(){

    const request = await fetch('api/control/listarRecursos', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("token")
        },
      });
    return await request.json();    
}

export async function cargarEjercitosCiudades(){

    const request = await fetch('api/control/listarEjercitos', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("token")
        },
      });
    return await request.json();
}

export async function cargarActoresPoliticos(){

    const request = await fetch('api/control/listarActoresPoliticos', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("token")
        },
      });
    return await request.json();    
}

export async function cargarCongresos(){

    const request = await fetch('api/control/listarCongresos', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("token")
        },
      });
    return await request.json();
}

export async function cargarTimer() {

    const request = await fetch('api/control/cargarTimer', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        },
    });
    return await request.json();
}