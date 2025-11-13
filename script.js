//valor inicial
let contador = 0;

function aumentar(valor) {
    //aumentar el contador
    contador ++;
    //actualizar el valor en el HTML
    document.getElementById("numero").innerText = contador;
}

document.addEventListener("DOMContentLoaded", function() 
{
    const botonEnviar = document.querySelector('.enviar');
    const inputEmail = document.querySelector('.input');
    botonEnviar.addEventListener("click", function(event)
    {
        event.preventDefault();
        const email = inputEmail.value;
        if(email)
        {
            alert(`Bienvenido ${email}`);
        }
    });
});

const changingImage = document.getElementById('changing-image');

const imagenesSecuencia = [
    'Data/Tacos.png',
    'Data/images (2).jfif'
];

function obtenerImagenAleatoria() {
    let imagenAleatoria;
    for (const imagen of imagenesSecuencia) {
        const indiceAleatorio = Math.floor(Math.random() * imagenesSecuencia.length);
        imagenAleatoria = imagenesSecuencia[indiceAleatorio];
    }
    return imagenAleatoria;
}

changingImage.addEventListener('mouseover', () => {
    changingImage.src = obtenerImagenAleatoria();
});