//funciones de Orden Superior
//High Order Functions
/*
Funciones que reciben finciones como parametros
*/

const myFunction = () => {
    console.log('Ejecuta la función, esclavo');
}
myFunction();
const sameFunction = myFunction;
sameFunction();

const otherSameFunction = myFunction;
otherSameFunction();

const funOne = () => {
    console.log('Ejecuta la función One, esclavo');
}
const funTwo = (username) => {
    console.log('Ejecuta la función One, movido, subdito');
    console.log('Hola'+username);
}

const funThree = (otherFunction) => {
    console.log('Inicia la funcion 3,porfis');
    otherFunction();
    console.log('Termina funcion 3')
}

funOne();
funTwo('Carlos');
funTwo('Bob Esponja');
funThree(funOne);
funThree(() => console.log('Soy una Arrow Function'));