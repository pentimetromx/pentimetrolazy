const videoSheeter = document.querySelectorAll('.vid-demo'); 

function ocultarTodos(elementosVisibles = []) {
  for (let i = 0; i < allContenedores.length; i++) {
    const id = allContenedores[i];
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.style.display = elementosVisibles.includes(id) ? 'flex' : 'none';
    }
  }
}
function mostrarTodos() {
  for (let i = 0; i < allContenedores.length; i++) {
    const elemento = document.getElementById(allContenedores[i])
    if (elemento) {
      elemento.style.display = 'flex'
    }
  }
}
document.querySelector('#contenedor-botonera button:nth-child(1)').addEventListener('click', () =>{
  mostrarTodos()
  ocultarTodos()
  document.querySelector('#contenedor-1').style.display = 'grid'

})
document.querySelector('#contenedor-botonera button:nth-child(2)').addEventListener('click', () =>{
  mostrarTodos()
  ocultarTodos()
  document.querySelector('#contenedor-2').style.display = 'grid'
})
document.querySelector('#contenedor-botonera button:nth-child(3)').addEventListener('click', () =>{
  ocultarTodos(['image-uno']);
})
document.querySelector('#contenedor-botonera button:nth-child(4)').addEventListener('click', () =>{
  ocultarTodos(['image-tres', 'image-cuatro'])
  setTimeout(() => {
    const imagen = document.querySelector("#image-cuatro");
    // Evita que se vuelva a activar si ya está en rotación
    if (!imagen.classList.contains("rotando")) {
      imagen.classList.add("rotando");
      // Opcional: Remueve la clase después de la animación para poder volver a girar
      setTimeout(() => {
      imagen.classList.remove("rotando");
      }, 1000); // Debe coincidir con la duración de la animación en CSS (1s)
    }      
  }, 100);
  setTimeout(() => {
    const imagen = document.querySelector("#image-cuatro");
    let escala = 1; // Tamaño inicial  
    const intervalo = setInterval(() => {
      if (escala >= 3) {
        clearInterval(intervalo); // Detiene el aumento al llegar a 7X
      } else {
        escala += 0.1; // Incremento progresivo
        imagen.style.transform = `scale(${escala})`;
      }
    }, 50); 
      
  }, 1000);
  
})
document.querySelector('#contenedor-botonera button:nth-child(5)').addEventListener('click', () => {
  ocultarTodos(['contenedor-sheeter'])
  const contenedor = document.querySelector('#contenedor-sheeter')
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()
})
document.querySelector('#contenedor-botonera button:nth-child(6)').addEventListener('click', () => {
  var elementosExcluidos = ['']  
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        const contenedor = document.querySelector('#formulario-cuenta').style.display = 'grid'
    }
  }

})
document.querySelector('#contenedor-botonera button:nth-child(7)').addEventListener('click', () => {
    var elementosExcluidos = ['']  
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
      const contenedor = document.querySelector('#home-gym').style.display = 'grid'
    }
  }
})
function alternarImagenes() {
  const imgUno = document.getElementById("image-uno");
  const imgDos = document.getElementById("image-tres");

  imgUno.style.opacity = "1"; // Asegurar que inicia visible
  imgDos.style.opacity = "0"; // Asegurar que inicia oculto

  // Aplicar transición de desvanecimiento
  imgUno.style.transition = "opacity 2s ease-in-out";
  imgDos.style.transition = "opacity 2s ease-in-out";

  setTimeout(() => {
      imgUno.style.opacity = "0"; // Se desvanece
      imgDos.style.opacity = "1"; // Aparece
  }, 100); // Pequeño retraso para asegurar que la transición se active
}
document.querySelector('.formulario-crear-cuenta :nth-child(2)').addEventListener('click', () => {
  ocultarTodos(['imagenes-sheeter'])
  document.querySelector('#imagenes-sheeter').style.display = 'grid'
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  document.querySelectorAll('.imagenes-cortador').forEach(img => {
    img.classList.remove('imagen-expandida');
  });
  ocultarTodos()
  document.querySelector('#formulario-cuenta').style.display = 'grid'           
  document.querySelector('#imagenes-sheeter').style.display = 'grid'
  document.querySelector('#img-cuchilla-1').style.display = 'flex'
  document.querySelector('#img-cuchilla-2').style.display = 'flex'
  document.querySelector('#img-cuchilla-3').style.display = 'flex'
  document.querySelector('#img-cuchilla-4').style.display = 'flex'
  const contenedor = document.querySelector('#imagenes-sheeter')
  contenedor.style.position = 'absolute'
  contenedor.style.left='26vw'
});
document.querySelector('.formulario-crear-cuenta :nth-child(3)').addEventListener('click', () => {
  ocultarTodos(['contenedor-sheeter'])
  const contenedor = document.querySelector('#contenedor-sheeter')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()
  setTimeout(() => {
    borrarEnsayos('visor')
  }, 500);
});
document.querySelector('.formulario-crear-cuenta :nth-child(4)').addEventListener('click', () => {
  ocultarTodos(['video-graduar-sheeter'])
  const contenedor = document.querySelector('#video-graduar-sheeter')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
});
document.querySelector('.formulario-crear-cuenta :nth-child(5)').addEventListener('click', () => {
  ocultarTodos(['corte-ajuste','corte-oscilacion','ajuste-corte'])
  const contenedor = document.querySelector('#corte-ajuste')
  const contenedorI = document.querySelector('#corte-oscilacion')
  const contenedorII = document.querySelector('#ajuste-corte')
  document.querySelector('#triada-videos').style.display = 'grid'
  document.querySelector('#formulario-cuenta').style.display = 'grid'
});
document.querySelector('.formulario-crear-cuenta :nth-child(6)').addEventListener('click', () => {
  ocultarTodos(['video-la-manta'])
  const contenedor = document.querySelector('#video-la-manta')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
});
document.querySelector('.formulario-crear-cuenta :nth-child(7)').addEventListener('click', () => {
  ocultarTodos(['video-manta-render'])
  const contenedor = document.querySelector('#video-manta-render')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
});
document.querySelector('.formulario-crear-cuenta :nth-child(8)').addEventListener('click', () => {
  ocultarTodos(['video-manta-dos'])
  const contenedor = document.querySelector('#video-manta-dos')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
});
document.querySelector('.formulario-crear-cuenta :nth-child(9)').addEventListener('click', () => {
  ocultarTodos(['video-completo'])
  const contenedor = document.querySelector('#video-completo')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
});
document.querySelector('.formulario-crear-cuenta :nth-child(10)').addEventListener('click', () => {
  ocultarTodos(['video-cadena-offset'])
  const contenedor = document.querySelector('#video-cadena-offset')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
});
document.querySelector('.formulario-crear-cuenta :nth-child(11)').addEventListener('click', () => {
  ocultarTodos(['video-manta-enrolla'])
  const contenedor = document.querySelector('#video-manta-enrolla')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
});
document.querySelector('.formulario-crear-cuenta :nth-child(12)').addEventListener('click', () => {
  ocultarTodos(['video-manta-capas'])
  const contenedor = document.querySelector('#video-manta-capas')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
});
document.querySelector('.formulario-crear-cuenta :nth-child(13)').addEventListener('click', () => {
  ocultarTodos(['video-desliza-plancha'])
  const contenedor = document.querySelector('#video-desliza-plancha')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
});
document.querySelector('.formulario-crear-cuenta :nth-child(14)').addEventListener('click', () => {
  ocultarTodos(['video-insolacion'])
  const contenedor = document.querySelector('#video-insolacion')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
});
document.querySelector('.formulario-crear-cuenta :nth-child(15)').addEventListener('click', () => {
  ocultarTodos(['video-doctor-blade'])
  const contenedor = document.querySelector('#video-doctor-blade')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
});
document.querySelector('.formulario-crear-cuenta :nth-child(16)').addEventListener('click', () => {
  ocultarTodos(['tintero-interior'])
  const contenedor = document.querySelector('#tintero-interior')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
});
document.querySelector('.formulario-crear-cuenta :nth-child(17)').addEventListener('click', () => {
  ocultarTodos(['tintero-palanca'])
  const contenedor = document.querySelector('#tintero-palanca')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
});
document.querySelector('.formulario-crear-cuenta :nth-child(18)').addEventListener('click', () => {
  ocultarTodos(['tinta_segmento'])
  const contenedor = document.querySelector('#tinta_segmento')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
});
document.querySelector('.formulario-crear-cuenta :nth-child(19)').addEventListener('click', () => {
  ocultarTodos(['trinquete-rodillo-tintero-v'])
  const contenedor = document.querySelector('#trinquete-rodillo-tintero-v')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
});
document.querySelector('.formulario-crear-cuenta :nth-child(20)').addEventListener('click', () => {
  ocultarTodos(['trinquete'])
  const contenedor = document.querySelector('#trinquete')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
});
document.querySelector('.formulario-crear-cuenta :nth-child(21)').addEventListener('click', () => {
  ocultarTodos(['trinquete-multi'])
  const contenedor = document.querySelector('#trinquete-multi')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
});
document.querySelector('.formulario-crear-cuenta :nth-child(22)').addEventListener('click', () => {
  ocultarTodos(['trinquete-rodillo-tintero'])
  const contenedor = document.querySelector('#trinquete-rodillo-tintero')
  document.querySelector('#formulario-cuenta').style.display = 'grid'
  const video = contenedor.querySelector('video')
  video.currentTime = 0
  video.play()  
});
const labels = document.querySelectorAll('#formulario-cuenta label');
labels.forEach(label => {
  label.addEventListener('click', () => {
    labels.forEach(l => l.classList.remove('label-activa'));
    label.classList.add('label-activa');
  });
});
// Capturamos los 3 videos
const video1 = document.querySelector('#corte-ajuste video');
const video2 = document.querySelector('#corte-oscilacion video');
const video3 = document.querySelector('#ajuste-corte video');
// Los agrupamos en un array
const videos = [video1, video2, video3];
// Función general para manejar el clic en cualquier video
function manejarClick(videoSeleccionado) {
  videos.forEach(video => {
    if (video === videoSeleccionado) {
      video.currentTime = 0;
      video.play().catch(error => {
        console.error('Error al reproducir video:', error);
      });
    } else {
      video.pause();
      video.currentTime = 0;
    }
  });
}
// Asignar el evento click a cada video
videos.forEach(video => {
  video.addEventListener('click', () => {
    manejarClick(video);
  });
});

const alojamiento = document.getElementById("imagenes-sheeter");
const imagenes = alojamiento.querySelectorAll("img");
imagenes.forEach((img, index) => {
  img.addEventListener("click", () => {

    if (index === 0 || index === 1) {
      ocultarTodos(['video-cuchilla'])
      document.querySelector('#formulario-cuenta').style.display = 'grid'
      const contenedor = document.querySelector('#video-cuchilla')  
      const video = contenedor.querySelector('video')
      video.currentTime = 0
      video.play()
    }
    if (index === 2 || index === 3) {
      ocultarTodos(['video-cuchilla-1'])
      document.querySelector('#formulario-cuenta').style.display = 'grid'
      const contenedor = document.querySelector('#video-cuchilla-1')  
      const video = contenedor.querySelector('video')
      video.currentTime = 0
      video.play()
    }
    
    // Ocultar todas excepto la clickeada
    imagenes.forEach(i => {
     i.style.display = "none";
    });

  });
});

videoSheeter.forEach(video => {
  video.addEventListener('click', () => {
    // Oculta todos los videos con clase 'vid-demo'
    document.querySelectorAll('.vid-demo').forEach(v => {
      v.style.display = 'none';
    });

    // Elimina la clase 'imagen-expandida' de todos los elementos con clase 'imagenes-cortador'
    document.querySelectorAll('.imagenes-cortador').forEach(img => {
      img.classList.remove('imagen-expandida');
    });
    ocultarTodos()
    document.querySelector('#formulario-cuenta').style.display = 'grid'           
    document.querySelector('#imagenes-sheeter').style.display = 'grid'
    document.querySelector('#img-cuchilla-1').style.display = 'flex'
    document.querySelector('#img-cuchilla-2').style.display = 'flex'
    document.querySelector('#img-cuchilla-3').style.display = 'flex'
    document.querySelector('#img-cuchilla-4').style.display = 'flex'
  });
});

/* ******************************************************************************************************************************************************* */

const imgsVisor = [
  './assets/sheeter contra cuchilla.png',
  './assets/sheeter contra cuchilla_A.png',
  './assets/sheeter contra cuchilla_B.png',
  './assets/sheeter contra cuchilla_C.png',
  './assets/sheeter cuchilla giratoria.png',
  './assets/sheeter cuchilla giratoria_A.png',
  './assets/sheeter cuchilla giratoria_B.png',
  './assets/sheeter cuchilla giratoria_C.png',
  './assets/sheeter tornillo regulador.png',
  './assets/sheeter tornillo regulador_A.png',
  './assets/sheeter tornillo regulador_B.png',
  './assets/sheeter tornillo sujecion.png',
  './assets/sheeter tornillo sujecion_A.png',
  './assets/sheeter tornillo sujecion_B.png',
  './assets/llave 10.png',
  './assets/llave 8 mm.png',
];
const imgsVisorII = [
  './assets/aceite.jpg',
  './assets/aceitera.jpg',
  './assets/agua.png',
  './assets/antes 1.jpg',
  './assets/anodizado.jpg',
  './assets/cadena logo big.png'
];

let flagImgsVisor = false;
let flagImgsVisorII = false;

let actualPosicion = 0;

function showImage(index, imageArray) {
  const mainImage = document.getElementById('mainImage');
  mainImage.src = imageArray[index];
}

function prevImage() {
  let selectedArray;
  switch (true) {
    case flagImgsVisor:
      selectedArray = imgsVisor;
    break;
    case flagImgsVisorII:
      selectedArray = imgsVisorII;
    break;
    default:
      console.warn('No hay un array seleccionado');
    return;
  }
  actualPosicion = (actualPosicion - 1 + selectedArray.length) % selectedArray.length;
  showImage(actualPosicion, selectedArray);
}

function nextImage() {
  let selectedArray;
  switch (true) {
    case flagImgsVisor:
      selectedArray = imgsVisor;
      break;
    case flagImgsVisorII:
      selectedArray = imgsVisorII;
      break;
    default:
      console.warn('No hay un array seleccionado');
      return;
  }
  actualPosicion = (actualPosicion + 1) % selectedArray.length;
  showImage(actualPosicion, selectedArray);
}

function borrarEnsayos(parametro) {
  // Mostrar el visor
  document.querySelector('.image-viewer').style.display = 'grid';

  // Resetear todas las banderas
  flagImgsVisor = false;
  flagImgsVisorII = false;

  // Activar solo la bandera correspondiente
  switch (parametro) {
    case 'visor':
      flagImgsVisor = true;
      break;
    case 'visorII':
      flagImgsVisorII = true;
      break;
    default:
      console.warn('Parámetro inválido');
      return;
  }

  // Reiniciar posición y mostrar la primera imagen
  actualPosicion = 0;
  let selectedArray;
  switch (parametro) {
    case 'visor':
      selectedArray = imgsVisor;
      break;
    case 'visorII':
      selectedArray = imgsVisorII;
      break;
  }
  showImage(actualPosicion, selectedArray);
}


