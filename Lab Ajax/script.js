const galeria = document.getElementById("galeria");
const botonGatos = document.getElementById("botonGatos");

botonGatos.addEventListener("click", cargarGatos);

async function cargarGatos() {
  galeria.innerHTML = "<p>Cargando gatos...</p>";

  try {
    const respuesta = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");

    if (!respuesta.ok) throw new Error("No se pudieron cargar las imágenes");

    const gatos = await respuesta.json();
    galeria.innerHTML = "";

    gatos.forEach((gato) => {
      const imagen = document.createElement("img");
      imagen.src = gato.url;
      imagen.alt = "Foto de un gato";
      galeria.appendChild(imagen);
    });
  } catch (error) {
    galeria.innerHTML = "<p>Error al cargar las imágenes.</p>";
    console.error(error);
  }
}
