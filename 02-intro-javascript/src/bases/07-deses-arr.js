const personajes = ['Goku', 'Vegueta', 'Trunks'];

const [, , p3] = personajes;

console.log(p3);

const retornaArreglo = ()=> {
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

const usarState = (valor) => {
    return[valor, () =>{ console.log('Hola Mundo')}];
}

const [nombre, setNombre] = usarState('Ever');

console.log(nombre);
setNombre();
