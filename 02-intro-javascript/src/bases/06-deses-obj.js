const persona = {
    nombre: 'Ever',
    edad: 25,
    clave: 'Ironman'
};

const {nombre, edad, clave} = persona;

// console.log(nombre)
// console.log(edad)
// console.log(clave)

const usarContext = ({nombre, edad, clave, rango ='Capitan'}) =>{
    // console.log(edad, clave, nombre)
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 43.4554,
            lng: -4518.874
        }
    }
};

const {nombreClave, anios, latlng: {lat, lng}} = usarContext(persona);

console.log(nombreClave, anios, lat, lng)