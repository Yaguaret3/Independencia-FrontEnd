//------------------------------------------------------RECIBIMIENTOS------------------------------------------------------------------
export async function cargarTimer() {

    const request = await fetch('api/capitanes/cargarTimer', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        },
    });
    return await request.json();
}
export async function cargarRecursosMilitares(){

    const request = await fetch('api/capitanes/listarRecursos', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem("token")
            },
          });
        return await request.json();
}
export async function actualizarMovimientos(){

    const request = await fetch('api/capitanes/listarMovimientos', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("token")
        },
      });
    return await request.json();
}

//----------------------------------------------------------ENVÍOS--------------------------------------------------------------------
export async function asignarUnidades(datos){
    
    const request = await fetch('api/capitanes/asignarUnidades', {
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
export async function enviarMovimiento(datos){

    const request = await fetch('api/capitanes/enviarMovimiento', {
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

//--------------------------------------------------------WEBSOCKETS------------------------------------------------------------------
let stompClient = null;
export function disparoControl() {
    stompClient.send('/actualizar_control', {}, JSON.stringify({ 'mensaje': "" }));
}
export function disparoGobernadores() {
    stompClient.send('/actualizar_gobernadores', {}, JSON.stringify({ 'mensaje': "" }));
}
export function disparoCapitanes() {
    stompClient.send('/actualizar_capitanes', {}, JSON.stringify({ 'mensaje': "" }));
}