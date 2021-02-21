const nombre = 'Ever';
const apellido = 'Cabarcas';

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola Mundo ' + nombre;
}
console.log(`Este es un texto: ${ getSaludo(nombre)}`)