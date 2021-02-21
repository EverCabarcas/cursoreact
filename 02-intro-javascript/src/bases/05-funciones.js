// const saludar = function (nombre) {
//     return `Hola ${nombre}`;
// }


// const saludar2 = (nombre) => {
//     return `Hola ${nombre}`;
// }

// const saludar3 = (nombre) => `Hola ${nombre}`;
// const saludar4 = () => `Hola Mundo`;

// console.log(saludar('Ever'));

// console.log(saludar3('Ever'));
// console.log(saludar3('Goku'));
// console.log(saludar4());


const getUser = () =>({
        uuid: 'AHFJ33',
        username: 'Ascends54'
    })

const user = getUser();

// console.log(user);


function getUsuarioActivo(nombre){
    return {
        uuid: 'ASBG34',
        username: nombre
    }
};

const getUsuarioActivo2 = (nombre) => ({
    uuid: 'ASBG34',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Ever');
const usuarioActivo2 = getUsuarioActivo2('Ever');
console.log(usuarioActivo);
console.log(getUsuarioActivo2('Ever'))