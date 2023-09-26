// condicionales de JavaScript
// if(exp) {body}
const age = 18;
if (age>= 18){
    console.log(" es mayor ");

}
// if(exp) { body} else {body}
if (age>= 18){
    console.log("es mayor");
} else {
    console.log (" es Menor ");
}
// if ternario (exp)? true: flase:

(age>=18)? console.log("Es Mayor"): console.log("Es Menor");
(age>=18)? 
    console.log("Es Mayor"):
    console.log("Es Menor");

// if(exp) {} else if (exp) {} else {}
const ppt= Math.ceil(Math.random()*3);
if (ppt === 1){
    console.log("cayo Piedra");
} else if(ppt===2) {
    console.log("cayo Papel");  
} else {
    console.log("cayo tijera");  
}
//swith /case 
const day= Math.ceil(Math.random()*7);
switch(day){
    case 1:
        console.log("Es Domingo");
        break;
    case 2:
        console.log("Es Lunes ");
        break;
    case 3:
        console.log("Es Martes ");
        break;
    case 4:
        console.log("Es Miercoles ");
        break;
    case 5:
        console.log("Es Jueves");
        break;
    case 6:
        console.log("Es Viernes ");
        break;
    default:
        console.log("sabado");
 
}



// truthy and falsy

// distintos tipos de datos  evaluados como boolean
// 0 ->false
// not 0 -> true
// '' -> false 
// 'algo' -> True 

let apples =0;
if (apples >0){
    console.log(`tenemos ${apples}  manzanas`)
} else {
    console.log("no hay manzanas ");


}

apples =10;
if (apples){
    console.log(`tenemos ${ apples } manzanas`);
} else {
    console.log(`no hay manzanas`);
}

let userloggeado='';
let usuarioActual;
userloggeado?
    usuarioActual=userloggeado:
    usuarioActual='invitado';

console.log(usuarioActual);

    userloggeado=" Karen";

usuarioActual= userloggeado || 'initado'
console.log(usuarioActual);
