//------------------------------------------------------RECIBIMIENTOS------------------------------------------------------------------
export async function cargarTimer() {

    const request = await fetch('api/gobernadores/cargarTimer', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        },
    });
    return await request.json();
}

export async function cargarActoresPoliticos() {

    const request = await fetch('api/gobernadores/listarActoresPoliticos', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        },
    });
    return await request.json();
}

export async function cargarRecursos() {
    const request = await fetch('api/gobernadores/cargarRecursos', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        },
    });
    const respuesta = await request.json();
    respuesta.nivel_mision_comercial = await cargarNivelMisionComercial();
    alert(respuesta.nivel_mision_comercial);
    return respuesta;
}

export async function cargarNivelMisionComercial() {

    const request = await fetch('api/gobernadores/cargarNivelMisionComercial', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        },
    });
    let respuesta = await request.json();
    return respuesta.nivel_mision_comercial;
}

//----------------------------------------------------------ENVÍOS--------------------------------------------------------------------
export async function aumentarEstatus(datos){

    const request = await fetch('api/gobernadores/aumentarEstatus', {
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

export async function aumentarIndustria(datos){

    const request = await fetch('api/gobernadores/aumentarIndustria', {
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

export async function aumentarMisionComercial(datos){

    const request = await fetch('api/gobernadores/aumentarMisionComercial', {
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

export async function reclutarUnidades(datos){

    const request = await fetch('api/gobernadores/reclutarUnidades', {
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

export async function contratarOficial(datos){

    const request = await fetch('api/gobernadores/contratarOficiales/', {
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

export async function enviarUnidades(){

    const request = await fetch('api/gobernadores/enviarUnidades/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("token")
        },
    });
    return await request.text();
}

export async function comerciar(datos){

    const request = await fetch('api/gobernadores/comerciar', {
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