
// const getImagenPromesa = () => new Promise(resolve => resolve('http://localhost:3000/'))
// getImagenPromesa().then(console.log)

const getImagen = async () =>{
    try {
      const apiKey = "2ihJ0Ot9DzKfocgTfhs3OcL8GOHFkVys";
      const resp = await fetch(
        `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
      );
      const { data } = await resp.json();

      const { url } = data.images.original;

      const img = document.createElement("img");
      img.src = url;

      document.body.append(img);
    } catch (error) {
        //manejo del error
        console.error(error)
    }
}

getImagen()

