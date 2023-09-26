// Funciones con JavaScrip

/*
funcinoes de nombre (params){
    body function
}
*/

/**
 const nombre = function(params){
    body function

 }

 */

 // funcion sin paramertros sin retornos

 function saluda (){

    console.log("hellooo");

 }
  saluda();

  // funcion con parametros in rerotno 

  const saludaA = function (name){
    console.log(`hola  ${ name }`)
  }
  saludaA("SpiderMan ");


  // funcion con paremetros y retorno 

  const duplica= function (num){
return  num*2;
  }
  const doble= duplica(26);
  console.log(doble);

  // Arrow function, funciones de felca es6
  /*
  (param)=> {
    body function
  }
  */

  const getFullname=( firstname, lastname)=> {
    return firstname+''+ lastname;
  }
  const nombre= getFullname ('peter', 'parker');
  console.log(nombre); 


  // poodemos omirt () con un unico parametro 

  const minusculas = (word) => {
return word.toLowerCase();
  }
  console.log(minusculas("HELLO"));
  const mayusculas=word => {
    return word.toUpperCase();

  }
  console.log(mayusculas("hoals"));

  //Podemos omitir llaves y return si solo hay una linea
  const cuadrado = num => num * num;
  console.log(cuadrado(25));