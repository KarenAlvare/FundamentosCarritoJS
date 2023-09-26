function eightball(){
    const opcion = Math.ceil(Math.random() * 8);
    let resp;
    switch(opcion){
        case 1:
            resp = 'Todo saldra bien!';
            break;
        default:
            resp = 'No lo se'
    }
    respuesta.innerHTML = resp;
}