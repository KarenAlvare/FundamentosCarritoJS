//Objetos es una coleccion de datos
//atravez de un key/value llave/valor

/*
objeto={
    key: 'valor',
    'key': 'valor'
}
objeto.key
objeto['key']
*/


const alumno ={
    name: 'Steve',
    age: 21,
    city:'Milan',
    califications: [10, 10, 8],
    carrer: 'TIADSM',
    'last name': 'Jobs',
    'greender': 'Male'
}
console.log(alumno),
console.log(alumno.name),
console.log(alumno.city),
console.log(alumno['califications']),
console.log(alumno['last name']),

alumno.heiht =1.75;
console.log(alumno);

const group ={
    name: '4A DSM',
    carrer: 'TIADSM',
    classroom: 'Lab Redes 1',
    subjets: ['Aplicaciones', 'Modelado', 'Data Bases'],
    alumns: [alumno, alumno, alumno]
}

console.log(group);
console.log(group.subjets[1]);
console.log(group.alumns[0].califications[1]);