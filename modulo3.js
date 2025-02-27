
let color = ''
class objetoColores {
  constructor() {
    this.amarillo = {
      linea: this.crearEstructura("linea", 22),         
      lineaSeguidor: this.crearEstructura("led", 22),
      lineaGrilla: this.crearEstructura("grilla", 22),  
      nivelAgua: [],
      nivelTinta: [],
      colorElemento: '',
      posicionTopDisplay: 0,           
      posicionTopAgua: 0
    };

    // Agregar propiedades adicionales con la misma estructura                      
    this.magenta = this.crearPropiedadColor();
    this.azul = this.crearPropiedadColor();   
    this.negro = this.crearPropiedadColor();
    this.especial = this.crearPropiedadColor();  
    this.barniz = this.crearPropiedadColor();   
  }

  // Método para crear la estructura repetitiva
  crearEstructura(prefijo, cantidad) {
    const estructura = {};
    for (let i = 1; i <= cantidad; i++) {
      estructura[`${prefijo}-${i}`] = [];
    }
    return estructura;
  }

  // Metodo para generar una estructura completa de color  
  crearPropiedadColor() {
    return {
      linea: this.crearEstructura("linea", 22),
      lineaSeguidor: this.crearEstructura("led", 22),
      lineaGrilla: this.crearEstructura("grilla", 22),
      nivelAgua: [],
      nivelAguaGral: [],
      nivelTinta: [],
      nivelTintaGral: [],
      colorElemento: '',
      posicionTopDisplay: 0
    };
  }
}
function restablecerMenuContextual() {
  document.removeEventListener('contextmenu', bloquearMenuPersonalizado); 
}
function bloquearMenuPersonalizado(event) {
  event.preventDefault();
}  
function desactivarClicEnElementos(...elementos) {
  elementos.forEach(coleccion => {
    // Verificar si la colección es iterable (como un array o NodeList)   
    if (coleccion && typeof coleccion[Symbol.iterator] === 'function') {   
      coleccion.forEach(elemento => {
        elemento.style.pointerEvents = 'none'; 
      });
    } else if (coleccion instanceof HTMLElement) {   
      // Si es un solo elemento HTML
      coleccion.style.pointerEvents = 'none';  
    }
  });
} 
function reactivarClicEnElementos(...elementos) {   
  elementos.forEach(coleccion => {
    coleccion.forEach(elemento => {   
      elemento.style.pointerEvents = 'auto';
    });
  });
}
const masTintaGeneral = document.querySelector('#ctrl-gral-tinta > div:nth-of-type(1)')
const menosTintaGeneral = document.querySelector('#ctrl-gral-tinta > div:nth-of-type(2)')
const masSolucionGeneral = document.querySelector('#ctrl-gral-agua > div:nth-of-type(1)')
const menosSolucionGeneral = document.querySelector('#ctrl-gral-agua > div:nth-of-type(2)') 
const botonesSelectores = document.querySelectorAll('.butt-selector') 
const buttsJobTrack = document.querySelectorAll('.estilo-1')
const buttsColores = document.querySelectorAll('.cabeza')
const buttsGenerales = document.querySelectorAll('.mod-tinta')
const alertaBotones = document.querySelector('.alerta-botones')
const alertaPerfil = document.querySelector('.alerta-perfil')
const buttsControl = document.querySelectorAll('.div-ctrl')
const irAconsola = document.querySelector('#ir-consola')
const listaClientes = document.getElementById('lista-clientes');

const nombreCliente = document.querySelector('.nombre-cliente')
 
const verdeAgua = 'rgb(127, 255, 212)';
const azul = 'blue'
/* const azul = 'rgb(0,174,239)' */
const verde = 'rgb(0,255,0)'
const rojo = 'rgba(255, 0, 0, 0.63)'
const amarillo ='rgb(255,255,0)'
const cian = 'rgb(0,255,255)'
const magenta = 'rgb(255,0,255)'
const negro = 'rgb(0,0,0)'
const especial = 'rgb(255,130,0)' 
const barniz = 'rgb(200,200,200)'

let botonera = document.querySelectorAll('.botones-registro');
let botonInicio = document.getElementById('startButton')
let botonDetener = document.getElementById('stopButton') 
let botonReseteo = document.getElementById('resetButton')
let flagAplicacion = false
let iniciador = document.getElementById('iniciador')
let retroceder = document.getElementById('iniciador-I')
let botRevertir = document.querySelector('#bot-revertir')
let almacenObjetos = JSON.parse(localStorage.getItem('almacenObjetos')) || {}; 
let objetoGlobal = null

document.addEventListener('keydown', function(event) {               
  if (event.ctrlKey && event.shiftKey) {
    switch (event.key) {
      case 'Z':
        abrirSeccionOperativa('cont-titulo-operacion')
        setTimeout(() => {
          iniciarAnimaciones()
        }, 1000);
      break;
      case 'H':
        verificarPosicionTop(['dynamic-graphs']); 
      break;
      case 'X':
        Geometria()
      break;                  
    }
  }
});
function Geometria() {
  console.clear();  
  var contiBoton = document.getElementById('container-slider')  
  var rect = contiBoton.getBoundingClientRect();
  var topPosition = rect.top;
  var leftPosition = rect.left;
  var widthValue = rect.width;
  var heightValue = rect.height;
  var style = window.getComputedStyle(contiBoton);
  var positionType = style.position;
  var displayType = style.display;
  var visibilityType = style.visibility;
  var isVisible = rect.width > 0 && rect.height > 0 && displayType !== 'none' && visibilityType !== 'hidden';
  console.log('1 :','ID:', contiBoton.id);
  console.log('1 :','Top:', topPosition);
  console.log('1 :','Left:', leftPosition);
  console.log('1 :','Height:', heightValue);
  console.log('1 :','Width:', widthValue);
  console.log('1 :','Position:', positionType);
  console.log('1 :','Display:', displayType);
  console.log('1 :','Visibility:', visibilityType);
  console.log('1 :','Is Visible:', isVisible);
  
  var contiBotonI = document.getElementById('lubricantes') 
  var rect = contiBotonI.getBoundingClientRect();
  var topPosition = rect.top;
  var leftPosition = rect.left;
  var widthValue = rect.width;
  var heightValue = rect.height;
  var style = window.getComputedStyle(contiBotonI);
  var positionType = style.position;
  var displayType = style.display;
  var visibilityType = style.visibility;
  var isVisible = rect.width > 0 && rect.height > 0 && displayType !== 'none' && visibilityType !== 'hidden';
  console.log('2 :','ID:', contiBotonI.id);
  console.log('2 :','Top:', topPosition);
  console.log('2 :','Left:', leftPosition);
  console.log('2 :','Height:', heightValue);
  console.log('2 :','Width:', widthValue);
  console.log('2 :','Position:', positionType);
  console.log('2 :','Display:', displayType);
  console.log('2 :','Visibility:', visibilityType);
  console.log('2 :','Is Visible:', isVisible); 
}
function ocultarElementos(id1,id2,id3,id4,id5,id6,id7,id8,id9,id10,id11,id12,id13,id14){
  var elementosExcluidos = [id1,id2,id3,id4,id5,id6,id7,id8,id9,id10,id11,id12,id13,id14]  
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'  
    }
  }
  document.querySelector('#simulador').style.display = 'flex'
  container1.style.display = 'none'
  const interfaz = document.getElementById('inerfaz-ajuste-fino');    
  let displayTraining = document.getElementById('component1')  
  displayTraining.style.display = 'flex'
  switch(id1){
    case 'segunda-pantalla':
      break;
    case 'interfaz-registro':
    break;
    case 'inerfaz-ajuste-fino':
      if (interfaz.style.display === 'none' || interfaz.style.visibility === 'hidden') {
        interfaz.style.display = 'flex'
      }
    break;
    case 'colorDisplay':
      let contenedor = document.querySelector('#padre-controles')
      contenedor.style.display = 'grid'
    break;
    case 'colorBox':
      document.querySelector('#container-slider').style.display = 'grid'
      document.querySelectorAll('.slider-group').forEach(element => {
        element.style.display = 'grid'
      });      
      break;
    case 'interfaz-perfiles':
    break;
  }  
}
function updateDigitalClock() {   
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  document.getElementById('clock').textContent = formattedTime;
}
const colorComponents = document.querySelectorAll('.intermitencia');
let cronometroInterval = null;
let elapsedTime = 0;
let primerClick = true;
let colorInterval; 
const emergency = document.getElementById('emergency');
function toggleBackgroundColor() {
  const elements = document.querySelectorAll('.equal');
  let isOriginalColor = true;
  colorInterval = setInterval(() => {
    elements.forEach(element => {
      if (isOriginalColor) {
        element.style.backgroundColor = 'rgb(255, 0, 0)';
        colorComponents.forEach(colorComponent => {
          colorComponent.style.backgroundColor = '';
        });
      } else {
        element.style.backgroundColor = 'rgb(255, 166, 0)';
        colorComponents.forEach(colorComponent => {
          colorComponent.style.backgroundColor = 'rgb(255, 166, 0)';
        });
      }
    });
    isOriginalColor = !isOriginalColor;
  }, 500);
}
emergency.addEventListener('click', () => {
  let sombra = document.getElementById('sombra');
  if (primerClick) {
    emergency.style.transform = 'translateY(3px) rotate(85deg)';
    sombra.style.height = '21%';
    sombra.style.width = '12%';
    sombra.style.left = '27.5%';
    sombra.style.top = '9%';
    toggleBackgroundColor();
    balizaAlarma()
  } else {
    emergency.style.transform = 'translateY(0px) rotate(0deg)';
    sombra.style.height = '';
    sombra.style.width = '';
    sombra.style.left = '';
    sombra.style.top = '';
    colorComponents.forEach(colorComponent => {
    colorComponent.style.backgroundColor = '';
    detenerBaliza()
    });
    clearInterval(colorInterval); // Detenemos el intervalo
    document.querySelectorAll('.equal').forEach(element => {
      element.style.backgroundColor = 'rgb(255, 166, 0)'; // Color original
    });
  }
  primerClick = !primerClick;
});
function startCronometro() {
  botonDetener.style.backgroundColor = ''
  botonInicio.style.backgroundColor = 'rgb(0,255,0)'
  botonInicio.style.color = 'rgb(77,0,0)'
  botonReseteo.style.backgroundColor=''

  if (cronometroInterval === null) { // Verifica si no hay otro intervalo corriendo
    cronometroInterval = setInterval(() => {
      elapsedTime += 1;
      const hours = Math.floor(elapsedTime / 36000);
      const minutes = Math.floor((elapsedTime % 36000) / 600);
      const seconds = Math.floor((elapsedTime % 600) / 10);
      const tenths = elapsedTime % 10;

      document.getElementById('cronometro').textContent =
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${tenths}`;
    }, 100);
  }
}
function stopCronometro() {
  if(botonInicio.style.backgroundColor === 'rgb(0,255,0)'){    
    botonDetener.style.backgroundColor = 'rgb(255,0,0)'
    botonDetener.style.color='rgb(255,255,255)'
    botonReseteo.style.backgroundColor=''
  }else{
    botonInicio.style.backgroundColor = ''
    botonInicio.style.color = ''
    botonDetener.style.backgroundColor = 'rgb(255,0,0)'
    botonDetener.style.color='rgb(255,255,255)'
  }
  if (cronometroInterval !== null) {
    clearInterval(cronometroInterval);
    cronometroInterval = null;
    // Capturar y mostrar el tiempo transcurrido
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = Math.floor(elapsedTime % 60);
    const tenths = Math.floor((elapsedTime % 1) * 10);
  }
}
function resetCronometro() {
  if(botonDetener.style.backgroundColor === 'rgb(255,0,0)'){
    botonDetener.style.backgroundColor = ''
    botonDetener.style.color=''
    botonInicio.style.backgroundColor = ''
    botonInicio.style.color = ''
  }
  if (cronometroInterval !== null) {
    return;
  }
  stopCronometro(); 
  elapsedTime = 0;
  document.getElementById('cronometro').textContent = '00:00:00.0';
  botonDetener.style.backgroundColor = ''
  botonDetener.style.color=''
  botonInicio.style.backgroundColor = ''
  botonInicio.style.color = ''

}
botonInicio.addEventListener('click', startCronometro);
botonDetener.addEventListener('click', stopCronometro);
botonReseteo.addEventListener('click', resetCronometro);
setInterval(updateDigitalClock, 1000);
updateDigitalClock(); // Llamar inmediatamente para mostrar la hora al cargar
const contenedorPadre = document.getElementById('clock');
const tableta = document.getElementById('water-background');
let isDragging = false; // Indica si el elemento está siendo arrastrado
let isDraggingI = false;
let offsetX, offsetY; // Desplazamiento del ratón al hacer clic en el contenedor 
// Evento para iniciar el arrastre
contenedorPadre.addEventListener('mousedown', (e) => {
  e.preventDefault(); // Prevenir comportamiento predeterminado de arrastre
  isDragging = true; // El elemento empieza a ser arrastrado
  offsetX = e.clientX - contenedorPadre.offsetLeft; // Distancia del clic desde el borde izquierdo del contenedor
  offsetY = e.clientY - contenedorPadre.offsetTop; // Distancia del clic desde el borde superior del contenedor
  contenedorPadre.style.cursor = 'grabbing'; // Cambia el cursor a "grabbing" durante el arrastre
});
let contenedorPanel = document.getElementById('segunda-pantalla');
let enArrastre = false;
let offsetXX, offsetYY;
contenedorPanel.addEventListener('mousedown', (e) => {
  e.preventDefault(); // Prevenir comportamiento predeterminado
  enArrastre = true; // Indicar que estamos en modo de arrastre
  // Calcular la distancia desde el borde del elemento hasta el clic
  offsetXX = e.clientX - contenedorPanel.offsetLeft;
  offsetYY = e.clientY - contenedorPanel.offsetTop;
  contenedorPanel.style.cursor = 'grabbing'; // Cambia el cursor a "grabbing" durante el arrastre
});
// Mover el elemento mientras se arrastra
document.addEventListener('mousemove', (e) => {
  if (enArrastre) { // Si estamos en modo de arrastre
    // Calcular nuevas coordenadas del elemento
    let newX = e.clientX - offsetXX;
    let newY = e.clientY - offsetYY;
    // Actualizar posición del elemento
    contenedorPanel.style.left = newX + 'px';
    contenedorPanel.style.top = newY + 'px';
  }
});
// Detener el arrastre cuando se suelta el mouse
document.addEventListener('mouseup', () => {
  enArrastre = false; // Dejar de arrastrar
  contenedorPanel.style.cursor = 'grab'; // Cambia el cursor a "grab" cuando se suelta
});
tableta.addEventListener('mousedown', (e) => {
  e.preventDefault(); // Prevenir comportamiento predeterminado de arrastre
  isDraggingI = true; // El elemento empieza a ser arrastrado
  offsetX = e.clientX - tableta.offsetLeft; // Distancia del clic desde el borde izquierdo del contenedor
  offsetY = e.clientY - tableta.offsetTop; // Distancia del clic desde el borde superior del contenedor
  tableta.style.cursor = 'grabbing'; // Cambia el cursor a "grabbing" durante el arrastre
});
// Evento para mover el contenedor
document.addEventListener('mousemove', (e) => {
  if (isDragging) { // Si el arrastre está activo
    e.preventDefault(); // Prevenir comportamiento predeterminado de arrastre
    // Calcula la nueva posición del contenedor
    const newLeft = e.clientX - offsetX;
    const newTop = e.clientY - offsetY;
    contenedorPadre.style.left = `${newLeft}px`;
    contenedorPadre.style.top = `${newTop}px`;
  }
  if (isDraggingI) { // Si el arrastre está activo
    e.preventDefault(); // Prevenir comportamiento predeterminado de arrastre
    // Calcula la nueva posición del contenedor
    const newLeft = e.clientX - offsetX;
    const newTop = e.clientY - offsetY;
    tableta.style.left = `${newLeft}px`;
    tableta.style.top = `${newTop}px`;
  }

});
// Evento para finalizar el arrastre
document.addEventListener('mouseup', () => {
  isDragging = false; // El arrastre ha 
  isDraggingI = false;
  contenedorPadre.style.cursor = 'grab'; // Regresa el cursor a "grab"
  tableta.style.cursor = 'grab';
});
function resetearElementos() {
  const elementos = [
    document.getElementById('miRectangulo'),
    document.getElementById('miRectangulo1'),
    document.getElementById('miRectangulo2'),
    document.getElementById('miRectangulo3'),
    document.getElementById('miRectangulo4'),
    document.getElementById('miRectangulo5'),
    document.getElementById('miRectangulo6')
  ];

  elementos.forEach(elemento => {
    elemento.style.transition = 'none'; // Elimina cualquier transición aplicada
    elemento.style.transform = 'none';  // Restablece la transformación (rotación, escala, etc.)
    elemento.style.top = '';            // Restablece la posición `top` a su valor por defecto
  });
}
function animarRectangulos() {
  const rectangulos = document.querySelectorAll('.rectangulo');
  rectangulos.forEach((rectangulo, index) => {
    const nuevaPosicion = 479 - index * 40; 
    setTimeout(() => {
      rectangulo.style.transition = 'top 0.5s ease';
      rectangulo.style.top = `${nuevaPosicion}px`;
    }, index * 200); 
  });
}
function girarElemento(esquina) {
  resetearElementos()
  const elementos = [
    document.getElementById('miRectangulo'),
    document.getElementById('miRectangulo1'),
    document.getElementById('miRectangulo2'),
    document.getElementById('miRectangulo3'),
    document.getElementById('miRectangulo4'),
    document.getElementById('miRectangulo5'),
    document.getElementById('miRectangulo6')
  ];
  const origenes = {
    'top-left': '0% 0%',
    'top-right': '100% 0%',
    'bottom-left': '0% 100%',
    'bottom-right': '100% 100%'
  };
  elementos.forEach((elemento, index) => {
    elemento.style.display='flex'
  });
  elementos.forEach((elemento, index) => {
    setTimeout(() => {
      elemento.style.transformOrigin = origenes[esquina];
      elemento.style.transition = 'transform 1.5s ease';
      elemento.style.transform = `rotate(${360}deg)`;
    }, index * 100);    
  });
  setTimeout(() => {
    animarRectangulos()
  }, 2000);
}
document.getElementById('alterna1').addEventListener('click', () =>{ 
  document.getElementById('pantalla-registro').style.zIndex=2
  document.getElementById('pantalla-guias').style.zIndex=1
  document.getElementById('alterna2').style.backgroundColor='rgb(177,177,177)'
  document.getElementById('alterna1').style.backgroundColor=''
}  )
document.getElementById('alterna2').addEventListener('click', () =>{
  document.getElementById('pantalla-registro').style.zIndex=1
  document.getElementById('pantalla-guias').style.zIndex=2
  document.getElementById('alterna1').style.backgroundColor='rgb(177,177,177)'
  document.getElementById('alterna2').style.backgroundColor=''
})
const pliego = document.getElementById('pliego');
let anguloX = 0;
let posLeft = 50;
let direccionA = 1;
document.getElementById('guia-4').addEventListener('mouseup', () => {
  // Obtener la transformación actual del elemento
  const computedStyle = window.getComputedStyle(pliego);
  const matrix = computedStyle.transform;
  // Verificar si hay una transformación aplicada
  let anguloActual = 0;
  if (matrix !== 'none') {
    // Extraer el valor de la matriz de transformación y convertir a grados
    const values = matrix.split('(')[1].split(')')[0].split(',');
    const a = parseFloat(values[0]);
    const b = parseFloat(values[1]);
    anguloActual = Math.round(Math.atan2(b, a) * (180 / Math.PI));
  }
  // Sumar o restar el ángulo basado en la dirección
  let anguloX = anguloActual + direccionA;
  // Aplicar la nueva rotación al elemento
  pliego.style.transform = `rotateZ(${anguloX}deg)`;
  // Actualizar el texto de conteo
  document.getElementById('conteo-sup').textContent = `${anguloX}º`;
  document.getElementById('conteo-inf').textContent = ``;
});
document.getElementById('guia-1').addEventListener('mouseup', () => {
  const computedStyle = window.getComputedStyle(pliego);
  const matrix = computedStyle.transform;
  let anguloActual = 0;
  if (matrix !== 'none') {
    const values = matrix.split('(')[1].split(')')[0].split(',');
    const a = parseFloat(values[0]);
    const b = parseFloat(values[1]);
    anguloActual = Math.round(Math.atan2(b, a) * (180 / Math.PI));
  }
  let anguloX = anguloActual - direccionA;
  pliego.style.transform = `rotateZ(${anguloX}deg)`;
  document.getElementById('conteo-sup').textContent = `${anguloX}º`;
  document.getElementById('conteo-inf').textContent = ``;
});
let direccion = 1;
document.getElementById('guia-6').addEventListener('mouseup', () => {
  const computedStyle = window.getComputedStyle(pliego);
  const matrix = computedStyle.transform;
  let anguloActual = 0;
  if (matrix !== 'none') {
    const values = matrix.split('(')[1].split(')')[0].split(',');
    const a = parseFloat(values[0]);
    const b = parseFloat(values[1]);
    anguloActual = Math.round(Math.atan2(b, a) * (180 / Math.PI));
  }
  let anguloX = anguloActual - direccion;
  pliego.style.transform = `rotateZ(${anguloX}deg)`;
  document.getElementById('conteo-inf').textContent = `${anguloX}º`;
  document.getElementById('conteo-sup').textContent = ``;
});
document.getElementById('guia-3').addEventListener('mouseup', () => {
  // Obtener la transformación actual del elemento
  const computedStyle = window.getComputedStyle(pliego);
  const matrix = computedStyle.transform;
  // Verificar si hay una transformación aplicada
  let anguloActual = 0;
  if (matrix !== 'none') {
    // Extraer el valor de la matriz de transformación y convertir a grados
    const values = matrix.split('(')[1].split(')')[0].split(',');
    const a = parseFloat(values[0]);
    const b = parseFloat(values[1]);
    anguloActual = Math.round(Math.atan2(b, a) * (180 / Math.PI));
  }
  // Sumar o restar el ángulo basado en la dirección
  let anguloX = anguloActual + direccion;
  // Aplicar la nueva rotación al elemento
  pliego.style.transform = `rotateZ(${anguloX}deg)`;
  // Actualizar el texto de conteo
  document.getElementById('conteo-inf').textContent = `${anguloX}º`;
  document.getElementById('conteo-sup').textContent = ``;
});
let direccionLeft = -1;
document.getElementById('guia-2').addEventListener('click', () => {
  const computedStyle = window.getComputedStyle(pliego);
  let leftActual = parseFloat(computedStyle.left); // Obtener la posición actual (en píxeles)
  const parentWidth = pliego.offsetParent.offsetWidth;
  let leftPorcentajeActual = (leftActual / parentWidth) * 100;
  let nuevaPosLeft = leftPorcentajeActual + direccionLeft;
  if (nuevaPosLeft > 44) {
    pliego.style.left = `${nuevaPosLeft}%`;
  }
});
document.getElementById('guia-5').addEventListener('click', () => {
  const computedStyle = window.getComputedStyle(pliego);
  let leftActual = parseFloat(computedStyle.left); // Obtener la posición actual (en píxeles)
  const parentWidth = pliego.offsetParent.offsetWidth;
  let leftPorcentajeActual = (leftActual / parentWidth) * 100;
  let nuevaPosLeft = leftPorcentajeActual - direccionLeft;
  if (nuevaPosLeft < 57) {
    pliego.style.left = `${nuevaPosLeft}%`;
  }
});
const pliego1 = document.getElementById('pliego');
let incrementos = 0; // Contador de clics
document.getElementById('guia-7').addEventListener('click', () => {
  // Obtener los estilos computados
  let computedStyles = window.getComputedStyle(pliego1);
  let topPosition = parseFloat(computedStyles.getPropertyValue('top')); // Convertir 'top' a número en píxeles  
  // Obtener el alto del contenedor padre o de la ventana
  const containerHeight = pliego1.parentElement.clientHeight || window.innerHeight;  
  // Convertir 5% y 15% del alto del contenedor a píxeles
  const minTop = containerHeight * 0.05; // 5%
  const maxTop = containerHeight * 0.15; // 15%
  // Comprobar si el valor 'top' está dentro del rango y si no ha alcanzado el mínimo
  if (topPosition > minTop) {
    topPosition -= 1; // Mover hacia arriba (disminuir top en 1px)
    pliego1.style.top = `${topPosition}px`; // Actualizar la posición 'top'
  }
  document.getElementById('conteo-escuadra').textContent = `${topPosition.toFixed(1)}`}
);
document.getElementById('guia-8').addEventListener('click', () => {
  let computedStyles = window.getComputedStyle(pliego1);
  let topPosition = parseFloat(computedStyles.getPropertyValue('top')); // Convertir 'top' a número en píxeles 
  const containerHeight = pliego1.parentElement.clientHeight || window.innerHeight;
  const minTop = containerHeight * 0.05; // 5%
  const maxTop = containerHeight * 0.15; // 15%
  if (topPosition < maxTop) {
    topPosition += 1; // Mover hacia abajo (incrementar top en 1px)
    pliego1.style.top = `${topPosition}px`; // Actualizar la posición 'top'
  }
  document.getElementById('conteo-escuadra').textContent = `${topPosition.toFixed(1)}`
});
const reflejo = document.getElementById('reflejo');
let visible = true;
let intervaloId = null;
function balizaAlarma() {
  if (!intervaloId) {
    intervaloId = setInterval(() => {
      if (visible) {
        reflejo.style.boxShadow = 'none';
      } else {
        reflejo.style.display = 'flex'
        reflejo.style.boxShadow = '0 0 320px 160px rgba(255, 0, 0, 0.8)';
      }
      visible = !visible;
    }, 500);
  }
}
function detenerBaliza() {
  if (intervaloId) {
    clearInterval(intervaloId);
    intervaloId = null;
  }
  reflejo.style.display = 'none'
}
function resetRegistros() {
  pliego.style.top = '';
  pliego.style.left = '';
  pliego.style.zIndex = '';
  pliego.style.transform = '';
  document.getElementById('conteo-escuadra').textContent = ``
  document.getElementById('conteo-sup').textContent = ``
  document.getElementById('conteo-inf').textContent = ``;

  botonera.forEach(element => {
    element.style.backgroundColor = ''
  });
  
}
botonera.forEach(element => {
  element.addEventListener('click', () => {
    // Restablecer el color de todos los elementos al color por defecto
    botonera.forEach(el => {
      el.style.backgroundColor = ''; // Vuelve al color por defecto del CSS
    });

    // Cambiar el color del elemento que recibe el clic
    element.style.backgroundColor = 'rgb(0,200,255)'; // Color naranja
  });
});
// Incrementar la posición en Z solo cuando se haga clic en 'interfaz-perfiles'
document.getElementById('interfaz-perfiles').addEventListener('click', (e) => {
  e.stopPropagation();   
  document.getElementById('interfaz-perfiles').style.zIndex = 30;
});
// Evitar la propagación del clic en los elementos hijos
document.querySelectorAll('.cabeza').forEach(element => {
  element.addEventListener('click', (e) => {
    e.stopPropagation(); // Esto evita que el clic en '.cabeza' afecte al padre
  });
});
function crearLineaLeds(idLinea) {
  // Crear contenedor principal para la línea
  const lineaLeds = document.createElement('div');
  lineaLeds.id = `linea-${idLinea}`;
  lineaLeds.classList.add('linea-leds');
  // Crear regla de LEDs (divisiones numéricas del 24 al 1)
  const reglaLeds = document.createElement('div');
  reglaLeds.id = 'regla-leds';  
  for (let i = 24; i >= 1; i--) {
    const division = document.createElement('div');
    division.classList.add('division');
    division.textContent = i; // El número de la división
    reglaLeds.appendChild(division);
  }
  // Crear el display de LEDs (los LEDs visuales)
  const displayLeds = document.createElement('div');
  displayLeds.id = 'display-leds';  
  for (let i = 1; i <= 24; i++) {
    const led = document.createElement('div');
    led.classList.add('leds');
    displayLeds.appendChild(led);
  }
  // Crear el display de ajuste (otra fila de LEDs)
  const displayAjuste = document.createElement('div');
  displayAjuste.id = 'display-ajuste';  
  for (let i = 1; i <= 24; i++) {
    const led = document.createElement('div');
    led.classList.add('litle-leds');
    displayAjuste.appendChild(led);
  }
  // Añadir los tres bloques al contenedor de la línea
  lineaLeds.appendChild(reglaLeds);
  lineaLeds.appendChild(displayLeds);
  lineaLeds.appendChild(displayAjuste);
  // Devolver la línea completa
  return lineaLeds;
}
function crearVariasLineas(numeroDeLineas) {
  const contenedorPrincipal = document.getElementById('columna-70');

  for (let i = 1; i <= numeroDeLineas; i++) {
    const lineaLeds = crearLineaLeds(i);
    contenedorPrincipal.appendChild(lineaLeds);
  }
}
function crearBotoneraDinamica(color) {
  setTimeout(() => {
    eliminarBotonesSuma()
    eliminarBotonesResta()
  }, 20);
  setTimeout(() => {
    crearBotonSuma(color, 'linea', 'lineaSeguidor', 'lineaGrilla') 
    crearBotonResta(color, 'linea', 'lineaSeguidor', 'lineaGrilla')
  }, 40);
  setTimeout(() => {
    crearLedsSpan();
  }, 60);
  setTimeout(() => {
    renderizarPerfilesTinta(color)
  }, 80);
}
let almacenGlogal = [];
let flagNegro = false  
let flagCyan = false
let flagMagenta = false
let flagAmarillo = false
let flagEspecial = false
let flagBarniz = false
const estadoIntervaloSolucion = { intervalo: null };  
const estadoIntervaloTinta = { intervalo: null };

const estadoBalanceNegro = {
  indices: [], // Almacena los índices de los elementos coloreados de amarillo
  indicador: []
};
const estadoBalanceCyan = {
  indices: [],
  indicador: []
};
const estadoBalanceMagenta = {
  indices: [],
  indicador: []
};
const estadoBalanceAmarillo = {
  indices: [],
  indicador: []
};
const estadoBalanceEspecial = {
  indices: [],
  indicador: []
};
const estadoBalanceBarniz = {
  indices: [],
  indicador: []
};
const estadoTinta = {
  indices: []
}
const estadoSolucion = {
  indices: [],
  indicador: []
}  



masTintaGeneral.addEventListener('mousedown', () =>{
  if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
    if (!flagNegro && !flagCyan && !flagMagenta && !flagAmarillo && !flagEspecial && !flagBarniz) {  
      darColorVerdeCabeza()
      alertaBotones.style.display = 'flex'
      alertaBotones.style.backgroundColor = verde
      alertaBotones.style.color = 'black'
      alertaBotones.style.left='21vw'
      setTimeout(() => {
        alertaBotones.style.backgroundColor = ''
        alertaBotones.style.color = ''  
      }, 500);
      desactivarClicEnElementos(buttsPerfiles);
    }
  }else{
    darColorVerdeCabeza()
    alertaBotones.style.display = 'flex'
    alertaBotones.style.backgroundColor = verde
    alertaBotones.style.color = 'black'
    alertaBotones.style.left='21vw'
    setTimeout(() => {
      alertaBotones.style.backgroundColor = ''
      alertaBotones.style.color = ''  
    }, 500);
    desactivarClicEnElementos(buttsPerfiles);
  }  
  if(flagNegro){
    aumentarBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-negro #footer-1 .divs-grales-tinta-negro', 
      'yellow',
      'black',
      'negro'
    );    
  }
  if(flagCyan){
    aumentarBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-azul #footer-3 .divs-grales-tinta-azul',
      'yellow',
      'cyan',
      'azul'
    );    
  }
  if(flagMagenta){
    aumentarBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-magenta #footer-5 .divs-grales-tinta-magenta',
      'yellow',
      'magenta',
      'magenta'
    );    
  }
  if(flagAmarillo){
    aumentarBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-amarillo #footer-7 .divs-grales-tinta-amarillo',
      'yellow',
      'yellow',
      'amarillo',
    );    
  }
  if(flagEspecial){
    aumentarBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-especial #footer-9 .divs-grales-tinta-especial',
      'yellow',
      'rgb(255,130,0)',
      'especial',
    );    
  }
  if(flagBarniz){
    aumentarBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-barniz #footer-11 .divs-grales-tinta-barniz',
      'yellow',
      'rgb(200,200,200)',
      'barniz',
    );    
  }
  masTintaGeneral.style.backgroundColor='rgb(0,255,0)'
}) 
masTintaGeneral.addEventListener('mouseup', () => {
  if (estadoIntervaloTinta.intervalo) { // Verifica que el intervalo esté activo
    clearInterval(estadoIntervaloTinta.intervalo); // Detiene el intervalo
    estadoIntervaloTinta.intervalo = null; // Resetea el intervalo
  }
  masTintaGeneral.style.backgroundColor=''
});
masTintaGeneral.addEventListener('mouseleave', () => {
  if (estadoIntervaloTinta.intervalo) { // Verifica que el intervalo esté activo
    clearInterval(estadoIntervaloTinta.intervalo); // Detiene el intervalo
    estadoIntervaloTinta.intervalo = null; // Resetea el intervalo
  }
  masTintaGeneral.style.backgroundColor=''
});
menosTintaGeneral.addEventListener('mousedown', () => {
  if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
    if (!flagNegro && !flagCyan && !flagMagenta && !flagAmarillo && !flagEspecial && !flagBarniz) {   
      darColorVerdeCabeza()
      alertaBotones.style.display = 'flex'
      alertaBotones.style.backgroundColor = verde
      alertaBotones.style.color = 'black'
      alertaBotones.style.left='21vw'
      setTimeout(() => {
        alertaBotones.style.backgroundColor = ''
        alertaBotones.style.color = ''  
      }, 500);
      desactivarClicEnElementos(buttsPerfiles,botonesSelectores)
    }
  }else{
    darColorVerdeCabeza()
    alertaBotones.style.display = 'flex'
    alertaBotones.style.backgroundColor = verde
    alertaBotones.style.color = 'black'
    alertaBotones.style.left='21vw'
    setTimeout(() => {
      alertaBotones.style.backgroundColor = ''
      alertaBotones.style.color = ''  
    }, 500);
    desactivarClicEnElementos(buttsPerfiles);
  }  
  if (flagNegro) {
    disminuirBalanceTinta(     
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-negro #footer-1 .divs-grales-tinta-negro',
      'yellow',
      'black',
      'negro'
    )
  }
  if(flagCyan){
    disminuirBalanceTinta(     
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-azul #footer-3 .divs-grales-tinta-azul',    
      'yellow',
      'cyan',
      'azul'
    )
  }
  if(flagMagenta){
    disminuirBalanceTinta(     
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-magenta #footer-5 .divs-grales-tinta-magenta',    
      'yellow',
      'magenta',
      'magenta'
    )
  }
  if(flagAmarillo){
    disminuirBalanceTinta(     
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-amarillo #footer-7 .divs-grales-tinta-amarillo',    
      'yellow',
      'yellow',
      'amarillo',
    )
  }
  if(flagEspecial){
    disminuirBalanceTinta(     
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-especial #footer-9 .divs-grales-tinta-especial',    
      'yellow',
      'orange',
      'especial',
    )
  }
  if(flagBarniz){
    disminuirBalanceTinta(     
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-barniz #footer-11 .divs-grales-tinta-barniz',    
      'yellow',
      'gray',
      'barniz',
    )
  }
  menosTintaGeneral.style.backgroundColor='rgb(0,255,0)'
});
menosTintaGeneral.addEventListener('mouseup', () => {
  if (estadoIntervaloTinta.intervalo) { 
    clearInterval(estadoIntervaloTinta.intervalo); 
    estadoIntervaloTinta.intervalo = null;
  }
  menosTintaGeneral.style.backgroundColor=''
});
menosTintaGeneral.addEventListener('mouseleave', () => {
  if (estadoIntervaloTinta.intervalo) { 
    clearInterval(estadoIntervaloTinta.intervalo); 
    estadoIntervaloTinta.intervalo = null;
  }
  menosTintaGeneral.style.backgroundColor=''
});
masSolucionGeneral.addEventListener('mousedown', () => {
  if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
    if (!flagNegro && !flagCyan && !flagMagenta && !flagAmarillo && !flagEspecial && !flagBarniz) {
      darColorVerdeCabeza()
      alertaBotones.style.display = 'flex'
      alertaBotones.style.backgroundColor = verde
      alertaBotones.style.color = 'black'
      alertaBotones.style.left='21vw'
      setTimeout(() => {
        alertaBotones.style.backgroundColor = ''
        alertaBotones.style.color = ''  
      }, 500);
      desactivarClicEnElementos(buttsPerfiles,buttsColores);
    }
  }else{
    darColorVerdeCabeza()
    alertaBotones.style.display = 'flex'
    alertaBotones.style.backgroundColor = verde
    alertaBotones.style.color = 'black'
    alertaBotones.style.left='21vw'
    setTimeout(() => {
      alertaBotones.style.backgroundColor = ''
      alertaBotones.style.color = ''  
    }, 500);
    desactivarClicEnElementos(buttsPerfiles);
  }  
  if(flagNegro){
    aumentarBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-negro #footer-2 .divs-grales-solucion-negro',
      'yellow',
      verdeAgua,  
      'negro',
      'nivelAgua',
    );    
  }
  if(flagCyan){
    aumentarBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-azul #footer-4 .divs-grales-solucion-azul',
      'yellow',
      verdeAgua,  
      'azul',
      'nivelAgua',
    );    
  }
  if(flagMagenta){
    aumentarBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-magenta #footer-6 .divs-grales-solucion-magenta',
      'yellow',
      verdeAgua,  
      'magenta',
      'nivelAgua',    
    );    
  }
  if(flagAmarillo){
    aumentarBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-amarillo #footer-8 .divs-grales-solucion-amarillo',
      'yellow',
      verdeAgua,  
      'amarillo',
      'nivelAgua',
    );    
  }
  if(flagEspecial){
    aumentarBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-especial #footer-10 .divs-grales-solucion-especial',
      'yellow',
      verdeAgua,  
      'especial',
      'nivelAgua',
    );    
  }
  if(flagBarniz){
    aumentarBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-barniz #footer-12 .divs-grales-solucion-barniz',
      'yellow',
      verdeAgua,  
      'barniz',
      'nivelAgua',
    );    
  }
  masSolucionGeneral.style.backgroundColor='rgb(0,255,0)'
});
masSolucionGeneral.addEventListener('mouseup', () => {
  if (estadoIntervaloSolucion.intervalo) { // Verifica que el intervalo esté activo
    clearInterval(estadoIntervaloSolucion.intervalo); // Detiene el intervalo
    estadoIntervaloSolucion.intervalo = null; // Resetea el intervalo
  }
  masSolucionGeneral.style.backgroundColor = ''; // Restaura el color de fondo
});
masSolucionGeneral.addEventListener('mouseleave', () => {
  if (estadoIntervaloSolucion.intervalo) { // Verifica que el intervalo esté activo
    clearInterval(estadoIntervaloSolucion.intervalo); // Detiene el intervalo
    estadoIntervaloSolucion.intervalo = null; // Resetea el intervalo
  }
  masSolucionGeneral.style.backgroundColor = ''; // Restaura el color de fondo

});
menosSolucionGeneral.addEventListener('mousedown', () => {
  if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
    if (!flagNegro && !flagCyan && !flagMagenta && !flagAmarillo && !flagEspecial && !flagBarniz) {
      darColorVerdeCabeza()
      alertaBotones.style.display = 'flex'
      alertaBotones.style.backgroundColor = verde
      alertaBotones.style.color = 'black'
      alertaBotones.style.left='21vw'
      setTimeout(() => {
        alertaBotones.style.backgroundColor = ''
        alertaBotones.style.color = ''  
      }, 500);
      desactivarClicEnElementos(buttsPerfiles,buttsColores);
    }
  }else{
    darColorVerdeCabeza()
    alertaBotones.style.display = 'flex'
    alertaBotones.style.backgroundColor = verde
    alertaBotones.style.color = 'black'
    alertaBotones.style.left='21vw'
    setTimeout(() => {
      alertaBotones.style.backgroundColor = ''
      alertaBotones.style.color = ''  
    }, 500);
    desactivarClicEnElementos(buttsPerfiles);
  }  
  if(flagNegro){
    reducirBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-negro #footer-2 .divs-grales-solucion-negro',
      'yellow',
      verdeAgua,
      'negro',
      'nivelAgua',
    );
    }
  if(flagCyan){
    reducirBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-azul #footer-4 .divs-grales-solucion-azul',
      'yellow',
      verdeAgua,
      'azul',
      'nivelAgua'
    );
  }
  if(flagMagenta){
    reducirBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-magenta #footer-6 .divs-grales-solucion-magenta',
      'yellow',
      verdeAgua,
      'magenta',
      'nivelAgua',
    );
  }
  if(flagAmarillo){
    reducirBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-amarillo #footer-8 .divs-grales-solucion-amarillo',
      'yellow',
      verdeAgua,
      'amarillo',
      'nivelAgua',
    );
  }
  if(flagEspecial){
    reducirBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-especial #footer-10 .divs-grales-solucion-especial',
      'yellow',
      verdeAgua,
      'especial',
      'nivelAgua',
    );
  }
  if(flagBarniz){
    reducirBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-barniz #footer-12 .divs-grales-solucion-barniz',
      'yellow',
      verdeAgua,
      'barniz',
      'nivelAgua',
    );
  }
  menosSolucionGeneral.style.backgroundColor= 'rgb(0,255,0)'
});
menosSolucionGeneral.addEventListener('mouseup', () => {
  if (estadoIntervaloSolucion.intervalo) { 
    clearInterval(estadoIntervaloSolucion.intervalo); 
    estadoIntervaloSolucion.intervalo = null;
  }
  menosSolucionGeneral.style.backgroundColor=''
});
menosSolucionGeneral.addEventListener('mouseleave', () => {
  if (estadoIntervaloSolucion.intervalo) { // Verifica que el intervalo esté activo
    clearInterval(estadoIntervaloSolucion.intervalo); // Detiene el intervalo
    estadoIntervaloSolucion.intervalo = null; // Resetea el intervalo
  }
  menosSolucionGeneral.style.backgroundColor=''
});
alertaBotones.addEventListener('click', () =>{
  document.querySelectorAll('.cliente-item').forEach(item => {
    item.style.filter = 'none';
  });
  reactivarClicEnElementos(buttsPerfiles,buttsColores, buttsControl,buttsGenerales,botonesSelectores,buttsJobTrack);
  alertaBotones.classList.add('move-alerta')
  setTimeout(() => {
    alertaBotones.style.display='none'
    alertaBotones.classList.remove('move-alerta')
  }, 1000);   
})
alertaPerfil.addEventListener('click', () =>{
  reactivarClicEnElementos(buttsPerfiles,buttsColores,buttsGenerales,botonesSelectores,buttsControl); 
  alertaPerfil.classList.add('move-alerta-perfil')
  setTimeout(() => {
    alertaPerfil.style.display='none'
    alertaPerfil.classList.remove('move-alerta-perfil')
  }, 1000);   
})
let contadorTinta = document.getElementById('tinta-perc')
let tanqueTinta = document.getElementById('tanque-tinta')
const masTinta = document.querySelector('#ctrl-gral > div:nth-of-type(5)')
const menosTinta = document.querySelector('#ctrl-gral > div:nth-of-type(7)')
let contadorSolucion = document.getElementById('solucion-porcentaje')
let tanqueSolucion = document.getElementById('tanque-solucion')
let lineasSolucion = document.querySelectorAll('.lineas-solucion')
const masSolucion = document.querySelector('#ctrl-gral > div:nth-of-type(6)')
const menosSolucion = document.querySelector('#ctrl-gral > div:nth-of-type(8)')
function AelementosDinamicamente(contPadre, numeroDeLineas, classElto, startNumber = null) {
  const contenedorPrincipal = document.getElementById(contPadre);
  contenedorPrincipal.innerHTML = '';
  let numeroConsecutivo = startNumber !== null ? startNumber : null;

  for (let i = 1; i <= numeroDeLineas; i++) {
    const lineaLeds = document.createElement('div'); 
    lineaLeds.classList.add(classElto);
    lineaLeds.classList.add('lineas-tinta')
    if (numeroConsecutivo !== null) {
      lineaLeds.textContent = numeroConsecutivo;
      numeroConsecutivo++;
    }
    contenedorPrincipal.appendChild(lineaLeds); 
  }
}
let actualIndexSolucion = 99;  
let actualIndexTinta = 99
let intervaloTinta = null;
masTinta.addEventListener('mousedown', () => {
  if (objetoGlobal && Object.keys(objetoGlobal).length > 0) { 
    if (!flagNegro && !flagCyan && !flagMagenta && !flagAmarillo && !flagEspecial && !flagBarniz) {   
      darColorVerdeCabeza()
      alertaBotones.style.display = 'flex'
      alertaBotones.style.backgroundColor = verde
      alertaBotones.style.color = 'black'
      alertaBotones.style.top = '25vh'
      alertaBotones.style.left='21vw'
      setTimeout(() => {
        alertaBotones.style.backgroundColor = '' 
        alertaBotones.style.color = ''  
      }, 500);
      desactivarClicEnElementos(buttsPerfiles,botonesSelectores)
    }
  }else{
    darColorVerdeCabeza()
    alertaBotones.style.display = 'flex'
    alertaBotones.style.backgroundColor = verde
    alertaBotones.style.color = 'black'
    alertaBotones.style.top = '25vh'
    alertaBotones.style.left='21vw'
    setTimeout(() => {
      alertaBotones.style.backgroundColor = '' 
      alertaBotones.style.color = ''  
    }, 500);
    desactivarClicEnElementos(buttsPerfiles,botonesSelectores)
  }  
  if(flagNegro){
    aumentarBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-negro #footer-1 .divs-grales-tinta-negro', 
      'yellow',
      'black',
      'negro'
    );    
  }
  if(flagCyan){
    aumentarBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-azul #footer-3 .divs-grales-tinta-azul',
      'yellow',
      'cyan',
      'azul',
    );    
  }
  if(flagMagenta){
    aumentarBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-magenta #footer-5 .divs-grales-tinta-magenta',
      'yellow',
      'magenta',
      'magenta'
    );    
  }
  if(flagAmarillo){
    aumentarBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-amarillo #footer-7 .divs-grales-tinta-amarillo',
      'yellow',
      'yellow',
      'amarillo',
    );    
  }
  if(flagEspecial){
    aumentarBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-especial #footer-9 .divs-grales-tinta-especial',
      'yellow',
      'rgb(255,130,0)',
      'especial',
    );    
  }
  if(flagBarniz){
    aumentarBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-barniz #footer-11 .divs-grales-tinta-barniz',
      'yellow',
      'rgb(200,200,200)',
      'barniz',
    );    
  }
  masTinta.style.backgroundColor='rgb(0,255,0)'
});
masTinta.addEventListener('mouseup', () => {
  if (estadoIntervaloTinta.intervalo) { // Verifica que el intervalo esté activo
    clearInterval(estadoIntervaloTinta.intervalo); // Detiene el intervalo
    estadoIntervaloTinta.intervalo = null; // Resetea el intervalo
  }
  masTinta.style.backgroundColor = ''; 
});
masTinta.addEventListener('mouseleave', () =>{
  if (estadoIntervaloTinta.intervalo) { // Verifica que el intervalo esté activo
    clearInterval(estadoIntervaloTinta.intervalo); // Detiene el intervalo
    estadoIntervaloTinta.intervalo = null; // Resetea el intervalo
  }
  masTinta.style.backgroundColor = ''; 
} )
menosTinta.addEventListener('mousedown', () => {
  if (objetoGlobal && Object.keys(objetoGlobal).length > 0) { 
    if (!flagNegro && !flagCyan && !flagMagenta && !flagAmarillo && !flagEspecial && !flagBarniz) {   
      darColorVerdeCabeza()
      alertaBotones.style.display = 'flex'
      alertaBotones.style.backgroundColor = verde
      alertaBotones.style.color = 'black'
      alertaBotones.style.top = '25vh'
      alertaBotones.style.left='21vw'
      setTimeout(() => {
        alertaBotones.style.backgroundColor = '' 
        alertaBotones.style.color = ''  
      }, 500);
      desactivarClicEnElementos(buttsPerfiles,botonesSelectores)
    }
  }else{
    darColorVerdeCabeza()
    alertaBotones.style.display = 'flex'
    alertaBotones.style.backgroundColor = verde
    alertaBotones.style.color = 'black'
    alertaBotones.style.top = '25vh'
    alertaBotones.style.left='21vw'
    setTimeout(() => {
      alertaBotones.style.backgroundColor = '' 
      alertaBotones.style.color = ''  
    }, 500);
    desactivarClicEnElementos(buttsPerfiles,botonesSelectores)
  }  
  if (flagNegro) {
    disminuirBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-negro #footer-1 .divs-grales-tinta-negro',    
      'yellow',
      'black',
      'negro',
    )
  }
  if (flagCyan) {
    disminuirBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-azul #footer-3 .divs-grales-tinta-azul',    
      'yellow',
      'cyan',
      'azul',
    )
  }
  if (flagMagenta) {
    disminuirBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-magenta #footer-5 .divs-grales-tinta-magenta',    
      'yellow',
      'magenta',
      'magenta',
    )
  }
  if (flagAmarillo) {
    disminuirBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-amarillo #footer-7 .divs-grales-tinta-amarillo',    
      'yellow',
      'amarillo',
      'amarillo',
    )
  }
  if (flagEspecial) {
    disminuirBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-especial #footer-9 .divs-grales-tinta-especial',    
      'yellow',
      'especial',
      'especial',
    )
  }
  if (flagBarniz) {
    disminuirBalanceTinta(
      estadoIntervaloTinta,
      '.lineas-tinta',
      '#footer-barniz #footer-11 .divs-grales-tinta-barniz',    
      'yellow',
      'gray',
      'barniz', 
    )
  }
  menosTinta.style.backgroundColor = 'rgb(0,255,0)'
});
menosTinta.addEventListener('mouseup', () => {
  if (estadoIntervaloTinta.intervalo) { // Verifica que el intervalo esté activo
    clearInterval(estadoIntervaloTinta.intervalo); // Detiene el intervalo
    estadoIntervaloTinta.intervalo = null; // Resetea el intervalo
  }
  menosTinta.style.backgroundColor = ''; 
});

menosTinta.addEventListener('mouseleave', () =>{
  if (estadoIntervaloTinta.intervalo) { // Verifica que el intervalo esté activo
    clearInterval(estadoIntervaloTinta.intervalo); // Detiene el intervalo
    estadoIntervaloTinta.intervalo = null; // Resetea el intervalo
  }  
  menosTinta.style.backgroundColor = ''; 
})

let intervaloTintaNegro = null
let intervaloTintaCyan = null
let intervaloTintaMagenta = null
let intervaloTintaAmarillo = null
let intervaloTintaEspecial = null
let intervaloTintaBarniz = null
let intervaloSolucionNegro = null
let intervaloSolucionCyan = null 
let intervaloSolucionMagenta = null 
let intervaloSolucionAmarillo = null
let intervaloSolucionEspecial = null
let intervaloSolucionBarniz = null
function reducirBalanceSolucion(estado, lineasSelector, footerSelector, colorTinta, colorAgua, gama) {
  const lineasTinta = document.querySelectorAll(lineasSelector);
  const lineasGrales = document.querySelectorAll(footerSelector);   
  const totalElementos = lineasTinta.length;
  let displays = document.querySelector('#ctrl-gral .div-ctrl #solucion-porcentaje');
  let displayGeneral = document.querySelector(`#display-general-${gama}`)
  
  if (flagNegro) {  
    traerObjetoNegro();
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length;
      if (actualIndex < 0) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = '';
        lineaGral.style.backgroundColor = '';
        almacenObjetos[objetoGlobal][gama].nivelAgua.pop();
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%';
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarObjetoNegro(objetoNegro);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
  if (flagCyan) {
    traerObjetoCian(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length;
      if (actualIndex < 0) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = '';
        lineaGral.style.backgroundColor = '';        
        almacenObjetos[objetoGlobal][gama].nivelAgua.pop();
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%';        
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarObjetoCian(objetoCian);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
  if (flagMagenta) {
    traerObjetoMagenta(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length;
      if (actualIndex < 0) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = '';
        lineaGral.style.backgroundColor = '';        
        almacenObjetos[objetoGlobal][gama].nivelAgua.pop();
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%';        
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarobjetoMagenta(objetoMagenta);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
  if (flagAmarillo) {
    traerObjetoAmarillo(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length;
      if (actualIndex < 0) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = '';
        lineaGral.style.backgroundColor = '';        
        almacenObjetos[objetoGlobal][gama].nivelAgua.pop();
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%';        
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarObjetoAmarillo(objetoAmarillo);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
  if (flagEspecial) {
    traerObjetoEspecial(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length;
      if (actualIndex < 0) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = '';
        lineaGral.style.backgroundColor = '';        
        almacenObjetos[objetoGlobal][gama].nivelAgua.pop();
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%';        
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarObjetoEspecial(objetoEspecial);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
  if (flagBarniz) {
    traerObjetoBarniz(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length;
      if (actualIndex < 0) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = '';
        lineaGral.style.backgroundColor = '';        
        almacenObjetos[objetoGlobal][gama].nivelAgua.pop();
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%';        
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarObjetoBarniz(objetoBarniz);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
}
function aumentarBalanceSolucion(estado, lineasSelector, footerSelector, colorTinta, colorAgua,gama, aquaLevel) {
  const lineasTinta = document.querySelectorAll(lineasSelector);
  const lineasGrales = document.querySelectorAll(footerSelector)
  const totalElementos = lineasTinta.length;
  let displays = document.querySelector('#ctrl-gral .div-ctrl #solucion-porcentaje') 
  let displayGeneral = document.querySelector(`#display-general-${gama}`)

  if(flagNegro){
    traerObjetoNegro(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length - 1; 
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex]
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta;
        lineaGral.style.backgroundColor = colorAgua;
        almacenObjetos[objetoGlobal][gama].nivelAgua.push(actualIndex)
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%';
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarObjetoNegro(objetoNegro);
        guardarCambiosGeneralesEnAlmacen()
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
  if(flagCyan){
    traerObjetoCian(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length - 1;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex]
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta;
        lineaGral.style.backgroundColor = colorAgua;
        almacenObjetos[objetoGlobal][gama].nivelAgua.push(actualIndex)
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'; 
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = actualIndex + '%'
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarObjetoCian(objetoCian);
        guardarCambiosGeneralesEnAlmacen()
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);

  }
  if (flagAmarillo) {
    traerObjetoAmarillo(); // Sincroniza el objetoAmarillo
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length - 1;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        console.log("Proceso completado.");
        return;
      }  
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];  
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta;
        lineaGral.style.backgroundColor = colorAgua;
        almacenObjetos[objetoGlobal][gama].nivelAgua.push(actualIndex)
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%';
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = actualIndex + '%'
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarObjetoAmarillo(objetoAmarillo);
        guardarCambiosGeneralesEnAlmacen()
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }  
  if (flagMagenta) {
    traerObjetoMagenta(); // Sincroniza el objetoMagenta
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length - 1;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }  
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];  
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta;
        lineaGral.style.backgroundColor = colorAgua;
        almacenObjetos[objetoGlobal][gama].nivelAgua.push(actualIndex)
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%';
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = actualIndex + '%'
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarobjetoMagenta(objetoMagenta);
        guardarCambiosGeneralesEnAlmacen()
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }  
  if (flagEspecial) {
    traerObjetoEspecial(); // Sincroniza el objetoEspecial
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length - 1;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        console.log("Proceso completado.");
        return;
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta;
        lineaGral.style.backgroundColor = colorAgua;
        almacenObjetos[objetoGlobal][gama].nivelAgua.push(actualIndex)
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%';
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = actualIndex + '%'
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarObjetoEspecial(objetoEspecial);
        guardarCambiosGeneralesEnAlmacen()
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }  
  if (flagBarniz) {
    traerObjetoBarniz(); // Sincroniza el objetoBarniz
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelAgua.length - 1;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        console.log("Proceso completado.");
        return;
      }  
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta;
        lineaGral.style.backgroundColor = colorAgua;
        almacenObjetos[objetoGlobal][gama].nivelAgua.push(actualIndex)
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%';
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = actualIndex + '%'
        displayGeneral.textContent = almacenObjetos[objetoGlobal][gama].nivelAgua.length + '%'
        displayGeneral.style.top = (actualIndex - 14) + '%'
        guardarObjetoBarniz(objetoBarniz);
        guardarCambiosGeneralesEnAlmacen()
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
}
function aumentarBalanceTinta(estado, lineasSelector, footerSelector, colorTinta, colorAgua, gama) { 
  const lineasTinta = document.querySelectorAll(lineasSelector);
  const lineasGrales = document.querySelectorAll(footerSelector);
  const totalElementos = lineasTinta.length;
  let displays = document.querySelector('#ctrl-gral .div-ctrl #tinta-perc');
  let displayGral = document.querySelector(`#gral-display-${gama}`);

  if (flagNegro) {
    traerObjetoNegro();
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length - 1;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }      
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta;
        lineaGral.style.backgroundColor = colorAgua;
        almacenObjetos[objetoGlobal][gama].nivelTinta.push(actualIndex);
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarObjetoNegro(objetoNegro);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
  if (flagCyan) {
    traerObjetoCian(); // Sincroniza el objetoCian
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length - 1;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;s
      }      
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta; // Aplicar color de tinta
        lineaGral.style.backgroundColor = azul;   // Aplicar color general
        almacenObjetos[objetoGlobal][gama].nivelTinta.push(actualIndex)
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarObjetoCian(objetoCian);
        guardarCambiosGeneralesEnAlmacen()
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }  
  if (flagAmarillo) {
    traerObjetoAmarillo(); // Sincroniza el objetoAmarillo
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length - 1;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta; // Aplicar color de tinta
        lineaGral.style.backgroundColor = colorAgua;   // Aplicar color general
        almacenObjetos[objetoGlobal][gama].nivelTinta.push(actualIndex)    
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarObjetoAmarillo(objetoAmarillo);
        guardarCambiosGeneralesEnAlmacen()
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }  
  if (flagMagenta) {
    traerObjetoMagenta(); // Sincroniza el objetoMagenta
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length - 1;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;s
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta; // Aplicar color de tinta
        lineaGral.style.backgroundColor = colorAgua;   // Aplicar color general
        almacenObjetos[objetoGlobal][gama].nivelTinta.push(actualIndex)    
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarobjetoMagenta(objetoMagenta);
        guardarCambiosGeneralesEnAlmacen()
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }  
  if (flagEspecial) {
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length - 1;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta; // Aplicar color de tinta
        lineaGral.style.backgroundColor = colorAgua;   // Aplicar color general
        almacenObjetos[objetoGlobal][gama].nivelTinta.push(actualIndex)    
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarObjetoEspecial(objetoEspecial);
        guardarCambiosGeneralesEnAlmacen()
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }  
  if (flagBarniz) {
    traerObjetoBarniz(); // Sincroniza el objetoBarniz
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length - 1;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;s
      }
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = colorTinta; // Aplicar color de tinta
        lineaGral.style.backgroundColor = colorAgua;   // Aplicar color general
        almacenObjetos[objetoGlobal][gama].nivelTinta.push(actualIndex)    
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarObjetoBarniz(objetoBarniz);
        guardarCambiosGeneralesEnAlmacen()
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
}
function disminuirBalanceTinta(estado, lineasSelector, footerSelector, uno, dos, gama) {
  const lineasTinta = document.querySelectorAll(lineasSelector);
  const lineasGrales = document.querySelectorAll(footerSelector);
  const totalElementos = lineasTinta.length;
  let displays = document.querySelector('#ctrl-gral .div-ctrl #tinta-perc');  
  let displayGral = document.querySelector(`#gral-display-${gama}`);

  if (flagNegro) {
    traerObjetoNegro();
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length;
      if (actualIndex < 0 || actualIndex >= totalElementos) {   
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }      
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = '';
        lineaGral.style.backgroundColor = '';
        almacenObjetos[objetoGlobal][gama].nivelTinta.pop();
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarObjetoNegro(objetoNegro);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }  
  if (flagCyan) {
    traerObjetoCian(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }      
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = ''; // Eliminar color de tinta
        lineaGral.style.backgroundColor = '';  // Eliminar color general
        almacenObjetos[objetoGlobal][gama].nivelTinta.pop(); // Elimina el índice del arreglo
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarObjetoCian(objetoCian);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);

  }
  if (flagMagenta) {
    traerObjetoMagenta(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }      
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = ''; // Eliminar color de tinta
        lineaGral.style.backgroundColor = '';  // Eliminar color general
        almacenObjetos[objetoGlobal][gama].nivelTinta.pop(); // Elimina el índice del arreglo
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarobjetoMagenta(objetoMagenta);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
  if (flagAmarillo) {
    traerObjetoAmarillo(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }      
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = ''; // Eliminar color de tinta
        lineaGral.style.backgroundColor = '';  // Eliminar color general
        almacenObjetos[objetoGlobal][gama].nivelTinta.pop(); // Elimina el índice del arreglo
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarObjetoAmarillo(objetoAmarillo);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  } 
  if (flagEspecial) {
    traerObjetoEspecial(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }      
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = ''; // Eliminar color de tinta
        lineaGral.style.backgroundColor = '';  // Eliminar color general
        almacenObjetos[objetoGlobal][gama].nivelTinta.pop(); // Elimina el índice del arreglo
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarObjetoEspecial(objetoEspecial);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
  if (flagBarniz) {
    traerObjetoBarniz(); // Sincroniza el objetoNegro
    estado.intervalo = setInterval(() => {
      let actualIndex = totalElementos - almacenObjetos[objetoGlobal][gama].nivelTinta.length;
      if (actualIndex < 0 || actualIndex >= totalElementos) {
        clearInterval(estado.intervalo);
        estado.intervalo = null;
        return;
      }      
      let lineaActual = lineasTinta[actualIndex];
      let lineaGral = lineasGrales[actualIndex];
      if (lineaActual) {
        lineaActual.style.backgroundColor = ''; // Eliminar color de tinta
        lineaGral.style.backgroundColor = '';  // Eliminar color general
        almacenObjetos[objetoGlobal][gama].nivelTinta.pop(); // Elimina el índice del arreglo
        displays.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.textContent = almacenObjetos[objetoGlobal][gama].nivelTinta.length + '%';
        displayGral.style.top = (actualIndex - 14) + '%'
        guardarObjetoBarniz(objetoBarniz);
        guardarCambiosGeneralesEnAlmacen();
      } else {
        console.warn(`Elemento no encontrado en el índice ${actualIndex}.`);
      }
    }, 77);
  }
}
function darColorVerdeCabeza() {
  const elementosCabeza = document.querySelectorAll('.cabeza');
  let index = 0;
  const verde = '#00FF00'; // Definir el color verde aquí
  
  const intervaloAplicarColor = setInterval(() => {
    if (index >= elementosCabeza.length) {
      clearInterval(intervaloAplicarColor);
      setTimeout(() => {
        let eliminarIndex = elementosCabeza.length - 1;
        const intervaloEliminarColor = setInterval(() => {
          if (eliminarIndex >= 0) {
            elementosCabeza[eliminarIndex].style.backgroundColor = '';  
            eliminarIndex--;
          } else {
            clearInterval(intervaloEliminarColor);
          }
        }, 17);
      }, 300);
    } else {
      elementosCabeza[index].style.backgroundColor = verde;
      index++;
    }
  }, 17);
}
let indexSolucion = 99;
let intervaloSolucion = null; 
const controlSolucion = [];   
let intervaloMasSolucion = null;
let intervaloMasTinta = null;
let intervaloMenosSolucion = null;
let indexAumento = 0
const lineasTinta = document.querySelectorAll('.lineas-tinta');
const contenedor = document.getElementById('butts-selectores');
masSolucion.addEventListener('mousedown', () => {
  if (objetoGlobal && Object.keys(objetoGlobal).length > 0) { 
    if (!flagNegro && !flagCyan && !flagMagenta && !flagAmarillo && !flagEspecial && !flagBarniz) {   
      darColorVerdeCabeza()
      alertaBotones.style.display = 'flex'
      alertaBotones.style.backgroundColor = verde
      alertaBotones.style.color = 'black'
      alertaBotones.style.top = '25vh'
      alertaBotones.style.left='21vw'
      setTimeout(() => {
        alertaBotones.style.backgroundColor = '' 
        alertaBotones.style.color = ''  
      }, 500);
      desactivarClicEnElementos(buttsPerfiles,botonesSelectores)
    }
  }else{
    darColorVerdeCabeza()
    alertaBotones.style.display = 'flex'
    alertaBotones.style.backgroundColor = verde
    alertaBotones.style.color = 'black'
    alertaBotones.style.top = '25vh'
    alertaBotones.style.left='21vw'
    setTimeout(() => {
      alertaBotones.style.backgroundColor = '' 
      alertaBotones.style.color = ''  
    }, 500);
    desactivarClicEnElementos(buttsPerfiles,botonesSelectores)
  }  
  
  if(flagNegro){
    aumentarBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-negro #footer-2 .divs-grales-solucion-negro',   
      'yellow',
      verdeAgua,
      'negro',
      'nivelAgua',
    );    
  }
  if(flagCyan){
    aumentarBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-azul #footer-4 .divs-grales-solucion-azul',
      'yellow',
      verdeAgua,
      'azul',
      'nivelAgua',
    );    
  }
  if(flagMagenta){
    aumentarBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-magenta #footer-6 .divs-grales-solucion-magenta',
      'yellow',
      verdeAgua,
      'magenta',
      'nivelAgua',
    );    
  }
  if(flagAmarillo){
    aumentarBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-amarillo #footer-8 .divs-grales-solucion-amarillo',
      'yellow',
      verdeAgua,
      'amarillo'
    );    
  }
  if(flagEspecial){
    aumentarBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-especial #footer-10 .divs-grales-solucion-especial',
      'yellow',
      verdeAgua,
      'especial'
    );    
  }
  if(flagBarniz){
    aumentarBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-barniz #footer-12 .divs-grales-solucion-barniz',
      'yellow',
      verdeAgua,
      'barniz'
    );    
  }
  masSolucion.style.backgroundColor='rgb(0,255,0)'
});

masSolucion.addEventListener('mouseup', () => {
  if (estadoIntervaloSolucion.intervalo) { // Verifica que el intervalo esté activo
    clearInterval(estadoIntervaloSolucion.intervalo); // Detiene el intervalo
    estadoIntervaloSolucion.intervalo = null; // Resetea el intervalo
  }
  masSolucion.style.backgroundColor = ''; // Restaura el color de fondo
});

masSolucion.addEventListener('mouseleave', () => {
  if (estadoIntervaloSolucion.intervalo) { // Verifica que el intervalo esté activo
    clearInterval(estadoIntervaloSolucion.intervalo); // Detiene el intervalo
    estadoIntervaloSolucion.intervalo = null; // Resetea el intervalo
  }
  masSolucion.style.backgroundColor = ''; // Restaura el color de fondo
});
menosSolucion.addEventListener('mousedown', () => {
  if (objetoGlobal && Object.keys(objetoGlobal).length > 0) { 
    if (!flagNegro && !flagCyan && !flagMagenta && !flagAmarillo && !flagEspecial && !flagBarniz) {   
      darColorVerdeCabeza()
      alertaBotones.style.display = 'flex'
      alertaBotones.style.backgroundColor = verde
      alertaBotones.style.color = 'black'
      setTimeout(() => {
        alertaBotones.style.backgroundColor = ''
        alertaBotones.style.color = ''  
      }, 500);
      desactivarClicEnElementos(buttsPerfiles,botonesSelectores)
    }
  }else{
    darColorVerdeCabeza()
    alertaBotones.style.display = 'flex'
    alertaBotones.style.backgroundColor = verde
    alertaBotones.style.color = 'black'
    alertaBotones.style.top = '25vh'
    alertaBotones.style.left='21vw'
    setTimeout(() => {
      alertaBotones.style.backgroundColor = '' 
      alertaBotones.style.color = ''  
    }, 500);
    desactivarClicEnElementos(buttsPerfiles,botonesSelectores)
  }  

  if(flagNegro){
    reducirBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-negro #footer-2 .divs-grales-solucion-negro',
      'yellow', 
      verdeAgua,
      'negro',
    );
    }
  if(flagCyan){
    reducirBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-azul #footer-4 .divs-grales-solucion-azul',
      'yellow',
      verdeAgua,
      'azul'
    );
  }
  if(flagMagenta){
    reducirBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-magenta #footer-6 .divs-grales-solucion-magenta',
      'yellow',
      verdeAgua,
      'magenta',
    );
  }
  if(flagAmarillo){
    reducirBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-amarillo #footer-8 .divs-grales-solucion-amarillo',
      'yellow',
      verdeAgua,
      'amarillo',
    );
  }
  if(flagEspecial){
    reducirBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-especial #footer-10 .divs-grales-solucion-especial',
      'yellow',
      verdeAgua,
      'especial'
    );
  }
  if(flagBarniz){
    reducirBalanceSolucion(
      estadoIntervaloSolucion,
      '.lineas-solucion',
      '#footer-barniz #footer-12 .divs-grales-solucion-barniz',
      'yellow',
      verdeAgua,
      'barniz',
    );
  }
  menosSolucion.style.backgroundColor= 'rgb(0,255,0)'
});
menosSolucion.addEventListener('mouseup', () => {
  if (estadoIntervaloSolucion.intervalo) { // Verifica que el intervalo esté activo
    clearInterval(estadoIntervaloSolucion.intervalo); // Detiene el intervalo
    estadoIntervaloSolucion.intervalo = null; // Resetea el intervalo
  }
  menosSolucion.style.backgroundColor=''
});
menosSolucion.addEventListener('mouseleave', () => {
  if (estadoIntervaloSolucion.intervalo) { // Verifica que el intervalo esté activo
    clearInterval(estadoIntervaloSolucion.intervalo); // Detiene el intervalo
    estadoIntervaloSolucion.intervalo = null; // Resetea el intervalo
  }
  menosSolucion.style.backgroundColor=''
});
let almacenSolucionNegro = []  
let almacenSolucionCyan = []
let almacenSolucionMagenta = []
let almacenSolucionAmarillo = []
let almacenSolucionEspecial = []
let almacenSolucionBarniz = []

let almacenTintaNegro = []
let almacenTintaCyan = []
let almacenTintaMagenta = []
let almacenTintaAmarillo = []  
let almacenTintaEspecial = []
let almacenTintaBarniz = []

// Objetos que contienen las banderas y los estados correspondientes
const flags = {
  negro: flagNegro,
  cyan: flagCyan,
  magenta: flagMagenta,
  amarillo: flagAmarillo,
  epecial: flagEspecial,
  barniz: flagBarniz
};
const estadosBalance = {
  negro: estadoBalanceNegro,
  cyan: estadoBalanceCyan,
  magenta: estadoBalanceMagenta,
  amarillo: estadoBalanceAmarillo,
  especial: estadoBalanceEspecial,
  barniz: estadoBalanceBarniz
};
function aplicarColor(estadoObjeto, claseElemento) {
  const displaySolucion = document.getElementById('solucion-porcentaje')
  const displayTinta = document.getElementById('tinta-perc')
  const lineasTinta = document.querySelectorAll('.lineas-tinta');
  displaySolucion.textContent = 0 + '%'
  displayTinta.textContent = 0 + '%'
  lineasTinta.forEach(linea => {
    linea.style.backgroundColor = '';
  });
  if(flagNegro){
    const nivelTintaGral = document.querySelectorAll('#footer-negro #footer-1 .divs-grales-tinta-negro'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-negro #footer-2 .divs-grales-solucion-negro')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displaySolucion = document.getElementById('solucion-porcentaje')
    const iteraciones = objetoNegro.nivelTinta.length;
    const iterAgua = objetoNegro.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = negro;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;
        displaySolucion.textContent = iterAgua + '%';
      }
    }
  
  }
  if(flagCyan){
    const nivelTintaGral = document.querySelectorAll('#footer-azul #footer-3 .divs-grales-tinta-azul'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-azul #footer-4 .divs-grales-solucion-azul')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displayTinta = document.getElementById('tinta-perc')
    const displaySolucion = document.getElementById('solucion-porcentaje')
    const iteraciones = objetoCian.nivelTinta.length;
    const iterAgua = objetoCian.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = cian;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;
        displaySolucion.textContent = iterAgua + '%';
      }
    }
  }
  if(flagMagenta){
    const nivelTintaGral = document.querySelectorAll('#footer-magenta #footer-5 .divs-grales-tinta-magenta'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-magenta #footer-6 .divs-grales-solucion-magenta')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displayTinta = document.getElementById('tinta-perc')
    const displaySolucion = document.getElementById('solucion-porcentaje')
    const iteraciones = objetoMagenta.nivelTinta.length;
    const iterAgua = objetoMagenta.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = magenta;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;
        displaySolucion.textContent = iterAgua + '%';
      }
    }
  }
  if(flagAmarillo){
    const nivelTintaGral = document.querySelectorAll('#footer-amarillo #footer-7 .divs-grales-tinta-amarillo'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-amarillo #footer-8 .divs-grales-solucion-amarillo')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displayTinta = document.getElementById('tinta-perc')
    const displaySolucion = document.getElementById('solucion-porcentaje')
    const iteraciones = objetoAmarillo.nivelTinta.length;
    const iterAgua = objetoAmarillo.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = amarillo;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;
        displaySolucion.textContent = iterAgua + '%';
      }
    }
  }
  if(flagEspecial){
    const nivelTintaGral = document.querySelectorAll('#footer-especial #footer-9 .divs-grales-tinta-especial'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-especial #footer-10 .divs-grales-solucion-especial')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displayTinta = document.getElementById('tinta-perc')
    const displaySolucion = document.getElementById('solucion-porcentaje')
    const iteraciones = objetoEspecial.nivelTinta.length;
    const iterAgua = objetoEspecial.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = especial;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;
        displaySolucion.textContent = iterAgua + '%';
      }
    }
  }
  if(flagBarniz){
    const nivelTintaGral = document.querySelectorAll('#footer-barniz #footer-11 .divs-grales-tinta-barniz'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-barniz #footer-12 .divs-grales-solucion-barniz')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displayTinta = document.getElementById('tinta-perc')
    const displaySolucion = document.getElementById('solucion-porcentaje')
    const iteraciones = objetoBarniz.nivelTinta.length;
    const iterAgua = objetoBarniz.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = barniz;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;
        displaySolucion.textContent = iterAgua + '%';
      }
    }
  }
  const elementos = document.querySelectorAll(claseElemento);
  // Captura el último porcentaje almacenado en el objeto, o 0 si está vacío
  const porcentaje = estadoObjeto.indices.length > 0 ? estadoObjeto.indices.at(-1) : 0;
  contadorTinta.textContent = `${porcentaje}%`;
}
function aplicarSolucion(estadoObjeto, claseElemento) {
  const lineasSolucion = document.querySelectorAll('.lineas-solucion');
 // Restablecer colores
  lineasSolucion.forEach(linea => {
    linea.style.backgroundColor = ''; // Quitar cualquier color previo
  });

  if(flagNegro){
    const nivelTintaGral = document.querySelectorAll('#footer-negro #footer-1 .divs-grales-tinta-negro'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-negro #footer-2 .divs-grales-solucion-negro')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displayTinta = document.getElementById('tinta-perc')
    const displaySolucion = document.querySelector('#inerfaz-ajuste-fino #ctrl-gral #solucion-porcentaje');

    const iteraciones = objetoNegro.nivelTinta.length;
    const iterAgua = objetoNegro.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = negro;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;  
      }

    }
  }  
  if(flagCyan){
    const nivelTintaGral = document.querySelectorAll('#footer-azul #footer-3 .divs-grales-tinta-azul'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-azul #footer-4 .divs-grales-solucion-azul')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displayTinta = document.getElementById('tinta-perc')
    const displaySolucion = document.querySelector('#inerfaz-ajuste-fino #ctrl-gral #solucion-porcentaje');

    const iteraciones = objetoCian.nivelTinta.length;
    const iterAgua = objetoCian.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = cian;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;  
      }

    }
  }
  if(flagMagenta){
    const nivelTintaGral = document.querySelectorAll('#footer-magenta #footer-5 .divs-grales-tinta-magenta'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-magenta #footer-6 .divs-grales-solucion-magenta')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displayTinta = document.getElementById('tinta-perc')
    const displaySolucion = document.querySelector('#inerfaz-ajuste-fino #ctrl-gral #solucion-porcentaje');

    const iteraciones = objetoMagenta.nivelTinta.length;
    const iterAgua = objetoMagenta.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = magenta;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;  
      }

    }
  }
  if(flagAmarillo){
    const nivelTintaGral = document.querySelectorAll('#footer-amarillo #footer-7 .divs-grales-tinta-amarillo'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-amarillo #footer-8 .divs-grales-solucion-amarillo')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displayTinta = document.getElementById('tinta-perc')
    const displaySolucion = document.querySelector('#inerfaz-ajuste-fino #ctrl-gral #solucion-porcentaje');

    const iteraciones = objetoAmarillo.nivelTinta.length;
    const iterAgua = objetoAmarillo.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = amarillo;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;  
      }

    }
  }
  if(flagEspecial){
    const nivelTintaGral = document.querySelectorAll('#footer-especial #footer-9 .divs-grales-tinta-especial'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-especial #footer-10 .divs-grales-solucion-especial')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displayTinta = document.getElementById('tinta-perc')
    const displaySolucion = document.querySelector('#inerfaz-ajuste-fino #ctrl-gral #solucion-porcentaje');

    const iteraciones = objetoEspecial.nivelTinta.length;
    const iterAgua = objetoEspecial.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = especial;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;  
      }

    }
  }
  if(flagBarniz){
    const nivelTintaGral = document.querySelectorAll('#footer-barniz #footer-11 .divs-grales-tinta-barniz'); 
    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelSolucionGral = document.querySelectorAll('#footer-barniz #footer-12 .divs-grales-solucion-barniz')
    const nivelSolucion = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const displayTinta = document.getElementById('tinta-perc')
    const displaySolucion = document.querySelector('#inerfaz-ajuste-fino #ctrl-gral #solucion-porcentaje');

    const iteraciones = objetoBarniz.nivelTinta.length;
    const iterAgua = objetoBarniz.nivelAgua.length;
    // 4. Crear un bucle para recorrer los elementos desde el último hacia el primero 
    const elementosTinta = nivelTinta.length;
    for (let i = 0; i < iteraciones; i++) {
      const indice = elementosTinta - 1 - i; // Índice del elemento desde el final
      if (nivelTinta[indice]) { // Verificar que el elemento exista
        nivelTinta[indice].style.backgroundColor = amarillo; // Aplicar color
        nivelTintaGral[indice].style.backgroundColor = barniz;
        displayTinta.textContent = iteraciones + '%';
      }
    }
    const elementosAgua = nivelSolucion.length;
    for (let i = 0; i < iterAgua; i++) {
      const indice = elementosAgua - 1 - i; // Índice del elemento desde el final
      if (nivelSolucion[indice]) { // Verificar que el elemento exista
        nivelSolucion[indice].style.backgroundColor = amarillo;
        nivelSolucionGral[indice].style.backgroundColor = verdeAgua;  
      }

    }
  }
} 
function renderObjeto() {
  // 1. Selecciona todos los elementos con la clase `.lineas-tinta`
  const elementos = document.querySelectorAll('.lineas-tinta');  
  // 2. Calcula la cantidad de elementos a los que se les dará color
  const cantidad = estadoBalanceNegro.indices.length;  
  // 3. Recorre desde el último elemento hacia el primero, aplicando color a los `cantidad` elementos
  for (let i = 0; i < cantidad; i++) {
    const index = elementos.length - 1 - i;  // Calcula el índice desde el final
    
    if (index >= 0) {  // Verifica que el índice no sea negativo
      elementos[index].style.backgroundColor = 'yellow';  // Aplica el color amarillo
    }
  }
  // 4. Actualiza el porcentaje de tinta en el elemento de texto
  const porcentajeTinta = document.getElementById('tinta-perc'); // Obtiene el elemento donde mostrar el porcentaje
  const porcentaje = Math.min(cantidad, elementos.length) * 100 / elementos.length; // Calcula el porcentaje (0-100)
  porcentajeTinta.textContent = `${Math.round(porcentaje)}%`;  
}  

document.getElementById('butt-perfil-tinta').addEventListener('click', () =>{ 
  nombreCliente.style.top=''
  let nombreDatos = document.querySelector('#cliente-nombre')
  let interfazPerfiles = document.getElementById('perfiles-entintado')
  interfazPerfiles.classList.remove('move-perfiles-entintado')
  desactivarClick(['.butt-perfiles', '.cabeza', '.mod-tinta']); 
  var elementosExcluidos = ['simulador','interfaz-perfiles','perfiles-entintado','boton-perfiles','boton-reseteo','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5','spn-blur-6','spn-blur-7'] 
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  container1.style.display = 'none'
  if(objetoGlobal === null || objetoGlobal === ''){nombreDatos.textContent = ''}
  setTimeout(() => {
    interfazPerfiles.classList.add('move-perfiles-entintado')
      botRevertir.style.display='block'
  }, 100);
  setTimeout(() => {
    document.querySelector('.nombre-cliente').style.display='flex'
  }, 1500);
  setTimeout(() =>{
    restablecerClick(['.butt-perfiles', '.cabeza', '.mod-tinta']);
  },1550);
    document.querySelectorAll('.butt-perfiles').forEach(elemento => {  
    elemento.style.display = 'flex'; 
  });

})
document.getElementById('butt-perfil').addEventListener('click', () =>{
  var elementosExcluidos = ['simulador','inerfaz-ajuste-fino','perfil-individual','control-perfiles','admin-perfiles','texto-perf-indiv','blur-interfaz-perfiles','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4']  
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  container1.style.display = 'none'
  const displayAjusteFino = document.getElementById('inerfaz-ajuste-fino');
  let interfazAjuste = document.getElementById('interfaz-perfiles');
  interfazAjuste.style.zIndex = '';
  interfazAjuste.style.display = 'flex';
  interfazAjuste.style.position = 'absolute';
  interfazAjuste.style.top = '5vh';
  interfazAjuste.style.left = '10vw';
  if (!primerClickRealizado) {
    displayAjusteFino.style.display = 'flex';
    displayAjusteFino.style.top = '33vh'
    crearVariasLineas(22);
    primerClickRealizado = true;
  }
})  
let primerClickRealizado = false;
document.getElementById('butt-control-tinta').addEventListener('click', () =>{ 
  const colorPerfilador = document.querySelector('#current-Color');   
/*   if (objetoGlobal && Object.keys(objetoGlobal).length <= 0) {
  } */
  var elementosExcluidos = ['simulador','inerfaz-ajuste-fino','perfil-individual','control-perfiles','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5','spn-blur-6','spn-blur-7']  
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  container1.style.display = 'none'
  if(flagNegro){
    color = 'rgb(0,0,0)'
    flagNegro = true;
    flagCyan = false;
    flagMagenta = false;
    flagAmarillo = false;
    flagEspecial = false;
    flagBarniz = false; 
    crearBotoneraDinamica(color)
    setTimeout(() => {
      eliminarColores()
    }, 50);
    setTimeout(() => {
      if (objetoGlobal && flagNegro) {
        muestraRenderObjetoGlobal(objetoGlobal, 'negro', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 1,2);
      }
    }, 100);
    colorPerfilador.style.color = color
  }  
  if (flagCyan) {
    color = 'rgb(0,0,255)'
    flagCyan = true;
    flagNegro = false;
    flagMagenta = false;
    flagAmarillo = false;
    flagEspecial = false;
    flagBarniz = false; 
    crearBotoneraDinamica(color)
    setTimeout(() => {
      eliminarColores()
    }, 50);
    setTimeout(() => {
      if (objetoGlobal && flagCyan) {
        muestraRenderObjetoGlobal(objetoGlobal, 'azul', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 3,4);
      }
    }, 100);
  }
  if (flagMagenta) {
    color = 'rgb(255,0,255)'
    flagMagenta = true;
    flagCyan = false;
    flagNegro = false;
    flagAmarillo = false;
    flagEspecial = false;
    flagBarniz = false; 
    crearBotoneraDinamica(color)
    setTimeout(() => {
      eliminarColores()
    }, 50);
    setTimeout(() => {
      if (objetoGlobal && flagMagenta) {
        muestraRenderObjetoGlobal(objetoGlobal, 'magenta', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 5,6);
      }
    }, 100);
  }
  if (flagAmarillo) {
    color = 'rgb(255,255,0)'
    flagAmarillo = true;
    flagCyan = false;
    flagMagenta = false;
    flagNegro = false;
    flagEspecial = false;
    flagBarniz = false; 
    crearBotoneraDinamica(color)
    setTimeout(() => {
      eliminarColores()
    }, 50);
    setTimeout(() => {
      if (objetoGlobal && flagAmarillo) {
        muestraRenderObjetoGlobal(objetoGlobal, 'amarillo', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 7,8);
      }
    }, 100);
  }    
  if (flagEspecial) {
    color = 'rgb(255,130,0)'
    flagEspecial = true;
    flagCyan = false;
    flagMagenta = false;
    flagAmarillo = false;
    flagNegro = false;
    flagBarniz = false; 
    crearBotoneraDinamica(color)
    setTimeout(() => {
      eliminarColores()
    }, 50);
    setTimeout(() => {
      if (objetoGlobal && flagEspecial) {
        muestraRenderObjetoGlobal(objetoGlobal, 'especial', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 9,10);
      }
    }, 100);
  }    
  if (flagBarniz) {
    color = 'rgb(200,200,200)'
    flagBarniz = true;
    flagCyan = false;
    flagMagenta = false;
    flagAmarillo = false;
    flagEspecial = false;
    flagNegro = false; 
    crearBotoneraDinamica(barniz);
    setTimeout(() => {
      eliminarColores()
    }, 50);
    setTimeout(() => {
      if (objetoGlobal && flagBarniz) {
        muestraRenderObjetoGlobal(objetoGlobal, 'barniz', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 11,12);
      }
    }, 100);
    colorPerfilador.style.color = color
  }   
  const contPerfilIndividual = document.getElementById('perfil-individual')  
  contPerfilIndividual.classList.remove('move-perfil-individual')
  const displayAjusteFino = document.getElementById('inerfaz-ajuste-fino'); 
  nombreCliente.style.display='flex'
  nombreCliente.style.top='5vh'
  let interfazAjuste = document.getElementById('interfaz-perfiles'); 
  interfazAjuste.style.zIndex = '';
  interfazAjuste.style.display = 'flex';
  interfazAjuste.style.position = 'absolute';
  interfazAjuste.style.top = '5vh';
  interfazAjuste.style.left = '10vw';
  if (!primerClickRealizado) {
    displayAjusteFino.style.display = 'flex';
    displayAjusteFino.style.top = '33vh'
    crearVariasLineas(22);   
    primerClickRealizado = true;
  }
  contPerfilIndividual.classList.add('move-perfil-individual')
  setTimeout(() => {
    document.querySelectorAll('.butt-perfiles').forEach(elemento => {   
      elemento.style.display = 'block'; 
    });   
    restablecerClick(['.butt-selector'])      
    botRevertir.style.display='block'      
  }, 10);
})
document.getElementById('butt-job-track').addEventListener('click', () =>{
  ["panel-uno", "panel-dos"].forEach(id => document.getElementById(id)?.removeAttribute("style"));
  const conteJobTrack = document.querySelector('#job-files')
  conteJobTrack.classList.remove('move-job-track')
  var elementosExcluidos = ['simulador','unit-job-track','interfaz-perfiles', 'boton-perfiles' , 'boton-reseteo','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5','spn-blur-6','spn-blur-7'] 
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
    }
  }
  container1.style.display = 'none'
  desactivarClick(['.butt-perfiles'])
  restablecerClick(['.estilo-1', '.butt-revierte'])
  document.getElementById('boton-reseteo').style.pointerEvents = 'auto';
  
  conteJobTrack.style.display='flex'
  document.querySelectorAll('.datos-base').forEach((elemento) => { 
    elemento.textContent = ''
  });  
  setTimeout(() => {
    conteJobTrack.classList.add('move-job-track') 
    botRevertir.style.display='block'        
  }, 100);
})
document.getElementById('conte-img').addEventListener('click', () =>{
  var elementosExcluidos = ['simulador','interfaz-perfiles','inerfaz-ajuste-fino','perfil-individual','control-perfiles']  
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }  
})
container1.style.display = 'none'
let menuHambrgr = document.getElementById('show-todos')
let txtHambrgr = document.getElementById('texto-perf-todos')
// Función común para manejar el cambio de color y las acciones relacionadas
function manejarColor(flagActual, estadoBalance, color, index) {
  removerClasesColores()
  if (!flagActual) {
    // Restablecemos todos los flags a false y activamos el flag correspondiente
    flagNegro = flagCyan = flagMagenta = flagAmarillo = flagEspecial = flagBarniz = false;    
    switch(index) {
      case 1:
        flagNegro = true;
      break;
      case 2:
        flagCyan = true;
      break;
      case 3:
        flagMagenta = true;
      break;
      case 4:
        flagAmarillo = true;
        break;
      case 5:
        flagEspecial = true;
      break;
      case 6:
        flagBarniz = true;
      break;
    }
    // Llama a las funciones para actualizar la interfaz
    crearBotoneraDinamica(color);
    aplicarColor(estadoBalance, '.lineas-tinta');
    aplicarSolucion(estadoBalance, '.lineas-solucion');
  }
}
// Función común para mostrar los elementos y manejar el cambio de color
function mostrarMenuYAplicarColor(flagActual, estadoBalance, color, index) {
  menuHambrgr.style.display = 'flex';
  txtHambrgr.style.display = 'flex';
  manejarColor(flagActual, estadoBalance, color, index);
}
menuHambrgr.addEventListener('click', () => {
  document.querySelectorAll('.color-ind').forEach(el => el.style.display = 'flex');
  document.getElementById('info-perfiles').style.display = 'none'
  document.getElementById('cont-modificadores').style.display = 'none'       
});
document.querySelectorAll('.color-ind').forEach((elemento, index) => {
  elemento.addEventListener('click', () => {    
    document.getElementById('info-perfiles').style.display = 'grid'
    document.getElementById('cont-modificadores').style.display = 'grid'
    document.querySelectorAll('.color-ind').forEach(el => el.style.display = 'none');    
    elemento.style.display = 'flex';
    menuHambrgr.style.display='flex'
    txtHambrgr.style.display='flex'

    // Lógica de mostrar el menú y aplicar color basado en el índice
    switch(index + 1) {
      case 1:
        mostrarMenuYAplicarColor(flagNegro, estadoBalanceNegro, negro, 1);
      break;
      case 2:
        mostrarMenuYAplicarColor(flagCyan, estadoBalanceCyan, azul, 2);
      break;
      case 3:
        mostrarMenuYAplicarColor(flagMagenta, estadoBalanceMagenta, magenta, 3);
      break;
      case 4:
        mostrarMenuYAplicarColor(flagAmarillo, estadoBalanceAmarillo, 'yellow', 4);
      break;
      case 5:
        mostrarMenuYAplicarColor(flagEspecial, estadoBalanceEspecial, especial, 5);
      break;
      case 6:
        mostrarMenuYAplicarColor(flagBarniz, estadoBalanceBarniz, barniz, 6);
      break;
    }
  });
});
let banderaNegro = false;
let banderaCian = false;
let banderaMagenta = false;
let banderaAmarillo = false;
let banderaEspecial = false;  
let banderaBarniz = false;
  
function removerClasesColores() {
  const elementosColorInd = document.querySelectorAll('.color-ind');  
  // Recorremos todos los elementos y eliminamos las clases de movimiento
  elementosColorInd.forEach((elemento) => {
    elemento.classList.remove(
      'move-perfil-barniz',
      'move-perfil-especial',
      'move-perfil-amarillo',
      'move-perfil-magenta',
      'move-perfil-cian',  
      'move-perfil-negro'
    );
  });
}
const textos = ['N', 'C', 'M', 'A', 'E-1', 'E-2'];
const textosEncabezados = ['Negro', 'Cyan', 'Magenta', 'Aamarillo', 'Especial', 'Barniz'];
const textosReglas = Array.from({ length: 22 }, (_, i) => i + 1); // Array de números del 1 al 20
const idsEncabezados = ['cabeza-negro', 'cabeza-azul', 'cabeza-magenta', 'cabeza-amarillo', 'cabeza-especial', 'cabeza-barniz'];
const maquinasTextos = ['IBM 5000','IBM Infoprint','GTO 52','Pinza','Heidelberg SORMZ','rotatek RK-200','rotatek RK-300'] 

function elementosDinamicamente(contPadre, numeroDeLineas, classElto, startNumber = null, prefixId = '') {
  const contenedorPrincipal = document.getElementById(contPadre);
  // Limpiar el contenedor para evitar acumulación de elementos
  contenedorPrincipal.innerHTML = '';
  // Definir el número inicial solo si se proporciona `startNumber` y es un número
  let numeroConsecutivo = Number.isInteger(startNumber) ? startNumber : null;

  for (let i = 1; i <= numeroDeLineas; i++) {
    const lineaLeds = document.createElement('div');    
    lineaLeds.classList.add(classElto);

    // Asignar contenido de texto solo si `numeroConsecutivo` es un número válido
    if (numeroConsecutivo !== null) {
      lineaLeds.textContent = numeroConsecutivo;
      numeroConsecutivo++;
    }

    // Asignar ID con prefijo solo si `prefixId` tiene un valor
    if (prefixId) {
      lineaLeds.id = `${prefixId}-${i}`; // Prefijo y número de línea
    }

    contenedorPrincipal.appendChild(lineaLeds);
  }
}
function elementosConSpanDinamicamente(contPadre, numeroDeLineas, classElto, texts = [], ids = []) {
  const contenedorPrincipal = document.getElementById(contPadre);  
  contenedorPrincipal.innerHTML = '';

  for (let i = 0; i < numeroDeLineas; i++) {
    const lineaLeds = document.createElement('div');
    lineaLeds.classList.add(classElto);

    // Crear el span con el texto del array texts si está disponible
    if (texts[i]) {
      const span = document.createElement('span');
      span.classList.add('texto-selectores');
      span.textContent = texts[i];
      lineaLeds.appendChild(span);
    }

    // Asignar id del arreglo ids si está disponible
    if (ids[i]) {
      lineaLeds.id = ids[i];
    }    

    contenedorPrincipal.appendChild(lineaLeds);
  }
  
}
function clasePadreCantidadClaseTextId(contPadre, numeroDeLineas, classElto, texts = [], prefixId = '') {
  const contenedoresPrincipales = document.querySelectorAll(`.${contPadre}`);

  // Verifica si se encontraron elementos con la clase proporcionada
  if (contenedoresPrincipales.length === 0) {
    console.warn(`No se encontró ningún contenedor con la clase: ${contPadre}`);
    return;
  }

  contenedoresPrincipales.forEach((contenedorPrincipal, index) => {
    // Limpiar cada contenedor para evitar acumulación de elementos
    contenedorPrincipal.innerHTML = '';

    for (let i = 1; i <= numeroDeLineas; i++) {
      const spanElement = document.createElement('span');
      spanElement.classList.add(classElto);
      
      // Añadir el texto correspondiente, si se proporciona
      spanElement.textContent = texts.length > 0 ? texts[i - 1] || '' : ''; 

      // Asignar un ID basado en el índice y el prefijo, si se proporciona
      if (prefixId) {
        spanElement.id = `${prefixId}-${i}`; // Prefijo, índice del contenedor, y número de línea
      }

      // Agregar el span creado al contenedor padre
      contenedorPrincipal.appendChild(spanElement);
    }
  });
}
function idPadreCantidadClaseTextId(contPadre, numeroDeLineas, classElto, claseDos = '', texts = [], prefixId = '', padreEtiqueta, color, padreEtiquetaTinta) {   
  const contenedorPrincipal = document.getElementById(contPadre);  
  // Limpiar el contenedor para evitar acumulación de elementos
  contenedorPrincipal.innerHTML = '';


  // Crear el único span que debe estar fuera del bucle
  const spanAgua = document.createElement('span');
  const spanTinta = document.createElement('span');

  spanAgua.classList.add('div-agua', 'agua-div');
  spanTinta.classList.add('div-gral');

  // Asignar ID al span creado
  spanAgua.id = `display-general-${color}`;
  spanTinta.id = `gral-display-${color}`;


  // Agregar el span al contenedor padre especificado en `padreEtiqueta`
  const contenedorDestino = document.getElementById(padreEtiqueta);
  const contenedorTinta = document.getElementById(padreEtiquetaTinta);

  
  if (contenedorDestino) {
    contenedorDestino.appendChild(spanAgua);
  } else {
    console.warn(`El contenedor con ID "${padreEtiqueta}" no se encontró.`);
  }

  if (contenedorTinta) {
    contenedorTinta.appendChild(spanTinta);
  } else {
    console.warn(`El contenedor con ID "${padreEtiqueta}" no se encontró.`);
  }

  // Crear múltiples spans dentro del contenedorPrincipal usando el bucle
  for (let i = 1; i <= numeroDeLineas; i++) {
    const spanElement = document.createElement('span');
    
    // Agregar la clase principal
    spanElement.classList.add(classElto); 

    // Agregar la segunda clase si se proporciona
    if (claseDos) {
      spanElement.classList.add(claseDos);
    }

    // Añadir el texto correspondiente, si se proporciona
    spanElement.textContent = texts.length > 0 ? texts[i - 1] || '' : ''; 

    // Asignar un ID basado en el índice y el prefijo, si se proporciona
    if (prefixId) {
      spanElement.id = `${prefixId}-${i}`;
    }

    // Agregar el span creado dentro del contenedor principal
    contenedorPrincipal.appendChild(spanElement);
  }
}
let intervalColorNegro = null
let intervalColorCyan = null
let intervalColorMagenta = null
let intervalColorAmmarillo = null
let intervalColorEspecial = null
let intervalColorBarniz = null

function toggleColorButton(index) {
  const coleccionCabeza = document.querySelectorAll('.cabeza');
  const coleccionButtSelector = document.querySelectorAll('.butt-selector');

  // Restablece el color de todos los botones en ambas colecciones
  coleccionCabeza.forEach(boton => boton.style.backgroundColor = '');
  coleccionButtSelector.forEach(boton => boton.style.backgroundColor = '');

  // Aplica el color rojo solo a los botones en la posición `index`
  if (coleccionCabeza[index]) coleccionCabeza[index].style.backgroundColor = verde; 
  // Aplicar color verde al botón y negro al texto en el <span> inmediatamente
  if (coleccionButtSelector[index]) {
    coleccionButtSelector[index].style.backgroundColor = verde;

    // Captura el <span> directamente dentro del botón y aplica el color negro
    const span = coleccionButtSelector[index].querySelector(`#butts-selectores div:nth-child(${index}) .texto-selectores`);
    if (span) {
      span.style.color = 'black';
    }
  }
  
}
document.addEventListener('DOMContentLoaded', () => {
  // elementosDinamicamente(PADRE , CANTIDAD , CLASE , TEXTO ENTRE DIVS , span); 
  elementosDinamicamente('tanque-solucion', 100,'lineas-solucion');
  AelementosDinamicamente('tanque-tinta', 100, 'lineas-tinta');
  elementosDinamicamente('puntos', 22,'punto');
  elementosDinamicamente('indexado', 22,'indexar',1);
  elementosDinamicamente('perfil-barniz', 22,'grilla-barniz','','grilla');
  elementosDinamicamente('perfil-especial', 22,'grilla-especial','','grilla');
  elementosDinamicamente('perfil-amarillo', 22,'grilla-amarillo','','grilla');  
  elementosDinamicamente('perfil-magenta', 22,'grilla-magenta','','grilla');
  elementosDinamicamente('perfil-azul', 22,'grilla-azul','','grilla');
  elementosDinamicamente('perfil-negro', 22,'grilla-negro','','grilla');
  elementosDinamicamente('conte-colors',8,'celda');
  clasePadreCantidadClaseTextId('grilla-negro', 24, 'led-general', '','')
  clasePadreCantidadClaseTextId('grilla-amarillo', 24, 'led-general', '','')
  clasePadreCantidadClaseTextId('grilla-azul', 24, 'led-general', '','')
  clasePadreCantidadClaseTextId('grilla-magenta', 24, 'led-general', '','')
  clasePadreCantidadClaseTextId('grilla-especial', 24, 'led-general', '','')
  clasePadreCantidadClaseTextId('grilla-barniz', 24, 'led-general', '','')
  idPadreCantidadClaseTextId('footer-1', 100, 'divs-grales-tinta-negro','clase-dos', '','','','');
  idPadreCantidadClaseTextId('footer-2', 100, 'divs-grales-solucion-negro','clase-dos', '','','footer-2', 'negro', 'footer-1')
  idPadreCantidadClaseTextId('footer-3', 100, 'divs-grales-tinta-azul','clase-dos', '','')
  idPadreCantidadClaseTextId('footer-4', 100, 'divs-grales-solucion-azul','clase-dos', '','', 'footer-4', 'azul', 'footer-3')
  idPadreCantidadClaseTextId('footer-5', 100, 'divs-grales-tinta-magenta','clase-dos', '','')
  idPadreCantidadClaseTextId('footer-6', 100, 'divs-grales-solucion-magenta','clase-dos', '','','footer-6', 'magenta', 'footer-5')
  idPadreCantidadClaseTextId('footer-7', 100, 'divs-grales-tinta-amarillo','clase-dos', '','')
  idPadreCantidadClaseTextId('footer-8', 100, 'divs-grales-solucion-amarillo','clase-dos', '','','footer-8', 'amarillo', 'footer-7')
  idPadreCantidadClaseTextId('footer-9', 100, 'divs-grales-tinta-especial','clase-dos', '','')
  idPadreCantidadClaseTextId('footer-10', 100, 'divs-grales-solucion-especial','clase-dos', '','','footer-10', 'especial', 'footer-9')
  idPadreCantidadClaseTextId('footer-11', 100, 'divs-grales-tinta-barniz','clase-dos', '','')
  idPadreCantidadClaseTextId('footer-12', 100, 'divs-grales-solucion-barniz','clase-dos', '','','footer-12', 'barniz', 'footer-11')

 const botonesLatentes = document.querySelectorAll('.butt-selector'); 
 const colorActual = document.querySelector('#current-Color');   
  botonesLatentes.forEach((boton,index) => {
    boton.addEventListener('click', () => {
      // Cambia el color de fondo y el color del texto del span dentro del botón clicado
      boton.style.backgroundColor = 'rgb(0,255,0)';
      const spanBoton = boton.querySelector('span');
      if (spanBoton) {
        spanBoton.style.color = 'black'; // Cambia el color del texto a negro
      }  
      // Reinicia el color de fondo y el color del texto del span en los demás botones
      botonesLatentes.forEach(otroBoton => {
        if (otroBoton !== boton) {
          otroBoton.style.backgroundColor = ''; // Reinicia el color de fondo
          const spanOtroBoton = otroBoton.querySelector('span');
          if (spanOtroBoton) {
            spanOtroBoton.style.color = ''; // Reinicia el color del texto
          }
        }
      });
      switch (index) {
        case 0:
          colorActual.textContent = 'NEGRO';
          colorActual.style.color = 'black'
          break;
        case 1:
          colorActual.textContent = 'AZUL';
          colorActual.style.color = 'rgb(0,255,255)';
          break;
        case 2:
          colorActual.textContent = 'MAGENTA';
          colorActual.style.color = 'rgb(255,0,255)'
          break;
        case 3:
          colorActual.textContent = 'AMARILLO';
          colorActual.style.color = 'rgb(255,255,0)'
          break;
        case 4:
          colorActual.textContent = 'ESPECIAL';
          colorActual.style.color = 'rgb(255,130,0)'
          break;
        case 5:
          colorActual.textContent = 'BARNIZ';
          colorActual.style.color = 'rgb(200,200,200)'
          break;
      }

    });
  }); 

  document.querySelector('.alerta-perfil').addEventListener('click', function () {  
    this.classList.add('move-alerta-perfil');
  });






  document.querySelector('#butts-selectores > div:nth-of-type(1)').addEventListener('click', () => {  
    alertaSeis.classList.remove('move-alerta')
    color = 'rgb(0,0,0)'
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
      if(!flagAplicacion){
        alertaPerfil.style.display = 'flex'
        alertaPerfil.style.backgroundColor = verde
        alertaPerfil.style.color = 'black'
        setTimeout(() => {
          alertaPerfil.style.backgroundColor = ''  
          alertaPerfil.style.color = ''  
        }, 500);
      }else{      
        if (!flagNegro) {
          flagNegro = true;   
          flagCyan = false;
          flagMagenta = false;
          flagAmarillo = false;
          flagEspecial = false;
          flagBarniz = false; 
          crearBotoneraDinamica(color)
          setTimeout(() => {
            eliminarColores()
          }, 50);
          setTimeout(() => {
            if (objetoGlobal && flagNegro) {
              muestraRenderObjetoGlobal(objetoGlobal, 'negro', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 1,2);
            }
          }, 100);
        }    
      }  
    }else{
      alertaSeis.style.display='grid'
      desactivarClick(['.div-ctrl','.butt-perfiles', '.butt-selector', '.digit']);
    }
  });
  document.querySelector('#butts-selectores > div:nth-of-type(2)').addEventListener('click', () => { 
    alertaSeis.classList.remove('move-alerta')
    color = 'rgb(0,0,255)'
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
      if(!flagAplicacion){
        console.log('ESTADO BANDERA ', flagAplicacion)
        alertaPerfil.style.display = 'flex'
        alertaPerfil.style.backgroundColor = verde
        alertaPerfil.style.color = 'black'
        setTimeout(() => {
          alertaPerfil.style.backgroundColor = ''  
          alertaPerfil.style.color = ''  
        }, 500);
      }else{      
        if (!flagCyan) {
          flagCyan = true;
          flagNegro = false;
          flagMagenta = false;
          flagAmarillo = false;
          flagEspecial = false;
          flagBarniz = false; 
          crearBotoneraDinamica(color)
          setTimeout(() => {
            eliminarColores()
          }, 50);
          setTimeout(() => {
            if (objetoGlobal && flagCyan) {
              muestraRenderObjetoGlobal(objetoGlobal, 'azul', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 3,4);
            }
          }, 100);
        }    
      } 
    }else{
      alertaSeis.style.display='grid'
      desactivarClick(['.div-ctrl','.butt-perfiles', '.butt-selector', '.digit']);
    }   
  });
  document.querySelector('#butts-selectores > div:nth-of-type(3)').addEventListener('click',() => {
    alertaSeis.classList.remove('move-alerta')
    color = 'rgb(255,0,255)'
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
      if(!flagAplicacion){
        console.log('ESTADO BANDERA ', flagAplicacion)
        alertaPerfil.style.display = 'flex'
        alertaPerfil.style.backgroundColor = verde
        alertaPerfil.style.color = 'black'
        desactivarClicEnElementos(buttSelector,buttsPerfiles,buttsColores,buttSuma,buttResta,buttsControl);
        setTimeout(() => {
          alertaPerfil.style.backgroundColor = ''  
          alertaPerfil.style.color = ''  
        }, 500);
      }else{      
        if (!flagMagenta) {
          flagMagenta = true;
          flagCyan = false;
          flagNegro = false;
          flagAmarillo = false;
          flagEspecial = false;
          flagBarniz = false; 
          crearBotoneraDinamica(color)
          setTimeout(() => {
            eliminarColores()
          }, 50);
          setTimeout(() => {
            if (objetoGlobal && flagMagenta) {
              muestraRenderObjetoGlobal(objetoGlobal, 'magenta', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 5,6);
            }
          }, 100);
        }    
      }  
    }else{
      alertaSeis.style.display='grid'
      desactivarClick(['.div-ctrl','.butt-perfiles', '.butt-selector', '.digit']);
    }  
  });
  document.querySelector('#butts-selectores > div:nth-of-type(4)').addEventListener('click',() => {
    alertaSeis.classList.remove('move-alerta')
    color = 'rgb(255,255,0)'
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
      if(!flagAplicacion){
        console.log('ESTADO BANDERA ', flagAplicacion)
        alertaPerfil.style.display = 'flex'
        alertaPerfil.style.backgroundColor = verde
        alertaPerfil.style.color = 'black'
        desactivarClicEnElementos(buttSelector,buttsPerfiles,buttsColores,buttSuma,buttResta,buttsControl);
        setTimeout(() => {
          alertaPerfil.style.backgroundColor = ''  
          alertaPerfil.style.color = ''  
        }, 500);
      }else{      
        if (!flagAmarillo) {
          flagAmarillo = true;
          flagCyan = false;
          flagMagenta = false;
          flagNegro = false;
          flagEspecial = false;
          flagBarniz = false; 
          crearBotoneraDinamica(color)
          setTimeout(() => {
            eliminarColores()
          }, 50);
          setTimeout(() => {
            if (objetoGlobal && flagAmarillo) {
              muestraRenderObjetoGlobal(objetoGlobal, 'amarillo', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 7,8);
            }
          }, 100);
        }    
      }  
    }else{
      alertaSeis.style.display='grid'
      desactivarClick(['.div-ctrl','.butt-perfiles', '.butt-selector', '.digit']);
    }  
  });  
  document.querySelector('#butts-selectores > div:nth-of-type(5)').addEventListener('click',() => {
    alertaSeis.classList.remove('move-alerta')
    color = 'rgb(255,130,0)'
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
      if(!flagAplicacion){
        console.log('ESTADO BANDERA ', flagAplicacion)
        alertaPerfil.style.display = 'flex'
        alertaPerfil.style.backgroundColor = verde
        alertaPerfil.style.color = 'black'
        desactivarClicEnElementos(buttSelector,buttsPerfiles,buttsColores,buttSuma,buttResta,buttsControl);
        setTimeout(() => {
          alertaPerfil.style.backgroundColor = ''  
          alertaPerfil.style.color = ''  
        }, 500);
      }else{      
        if (!flagEspecial) {
          flagEspecial = true;
          flagCyan = false;
          flagMagenta = false;
          flagAmarillo = false;
          flagNegro = false;
          flagBarniz = false; 
          crearBotoneraDinamica(color)
          setTimeout(() => {
            eliminarColores()
          }, 50);
          setTimeout(() => {
            if (objetoGlobal && flagEspecial) {
              muestraRenderObjetoGlobal(objetoGlobal, 'especial', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 9,10);
            }
          }, 100);
        }    
      } 
    }else{
      alertaSeis.style.display='grid'
      desactivarClick(['.div-ctrl','.butt-perfiles', '.butt-selector', '.digit']);
    }   
  });
  document.querySelector('#butts-selectores > div:nth-of-type(6)').addEventListener('click',() => {
    alertaSeis.classList.remove('move-alerta')
    color = 'rgb(200,200,200)'
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
      if(objetoGlobal != '' && objetoGlobal != null){
        if(!flagAplicacion){
          console.log('ESTADO BANDERA ', flagAplicacion)
          alertaPerfil.style.display = 'flex'
          alertaPerfil.style.backgroundColor = verde
          alertaPerfil.style.color = 'black'
          desactivarClicEnElementos(buttSelector,buttsPerfiles,buttsColores,buttSuma,buttResta,buttsControl);
          setTimeout(() => {
            alertaPerfil.style.backgroundColor = ''  
            alertaPerfil.style.color = ''  
          }, 500);
        }else{      
          if (!flagBarniz) {
            flagBarniz = true;
            flagCyan = false;
            flagMagenta = false;
            flagAmarillo = false;
            flagEspecial = false;
            flagNegro = false; 
            crearBotoneraDinamica(color)
            setTimeout(() => {
              eliminarColores()
            }, 50);
            setTimeout(() => {
              if (objetoGlobal && flagBarniz) {
                muestraRenderObjetoGlobal(objetoGlobal, 'barniz', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 11,12);
              }
            }, 100);
          }    
        }
      }else{
        alertaSeis.style.display='grid'
      }
    }else{
      alertaSeis.style.display='grid'
      desactivarClick(['.div-ctrl','.butt-perfiles', '.butt-selector', '.digit']);
    }     
  });
  idPadreCantidadClaseTextId('control-perfiles', 22,'leds-indiv','','','led');
  idPadreCantidadClaseTextId('regla-barniz', textosReglas.length, 'spn-gral','', textosReglas, 'spn');
  idPadreCantidadClaseTextId('regla-especial', textosReglas.length, 'spn-gral','', textosReglas, 'spn');
  idPadreCantidadClaseTextId('regla-amarillo', textosReglas.length, 'spn-gral','', textosReglas, 'spn'); 
  idPadreCantidadClaseTextId('regla-magenta', textosReglas.length, 'spn-gral','', textosReglas, 'spn');
  idPadreCantidadClaseTextId('regla-azul', textosReglas.length, 'spn-gral','', textosReglas, 'spn');
  idPadreCantidadClaseTextId('regla-negro', textosReglas.length, 'spn-gral','', textosReglas, 'spn');
  const negroGeneral = document.querySelector('#perfiles-entintado > #encabezado > div:nth-of-type(1)')
  const cyanGeneral = document.querySelector('#perfiles-entintado > #encabezado > div:nth-of-type(2)')
  const magentaGeneral = document.querySelector('#perfiles-entintado > #encabezado > div:nth-of-type(3)')
  const amarilloGeneral = document.querySelector('#perfiles-entintado > #encabezado > div:nth-of-type(4)')
  const especialGeneral = document.querySelector('#perfiles-entintado > #encabezado > div:nth-of-type(5)')
  const barnizGeneral = document.querySelector('#perfiles-entintado > #encabezado > div:nth-of-type(6)')
  const  botonesGenerales = [negroGeneral, cyanGeneral, magentaGeneral, amarilloGeneral, especialGeneral, barnizGeneral];
  const bloqueTinta = document.getElementById('ctrl-gral-tinta')
  const bloqueAgua = document.getElementById('ctrl-gral-agua')
  const clases = [
    'move-generales-cyan',
    'move-generales-magenta',
    'move-generales-amarillo',
    'move-generales-especial',
    'move-generales-barniz',
    'move-generales-barniz-II'
  ];  

  function alertaCrearPerfil(){
    alertaSeis.classList.remove('move-alerta')
    darColorVerdeCabeza()
    alertaSeis.style.display='grid'   
    alertaSeis.style.backgroundColor = 'rgb(0, 166, 255)'
    alertaSeis.style.color = 'black'
    alertaSeis.style.top = '42vh'
    setTimeout(() => {
      alertaSeis.style.backgroundColor = ''  
      alertaSeis.style.color = ''  
    }, 500);
    desactivarClicEnElementos(buttsPerfiles,buttsAguaGral,buttsAguaSingle);
  }
 



  negroGeneral.addEventListener('mousedown', () => { 
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
        color = 'rgb(0,0,0)';
        manejoGeneralIndividual('negro', negro, estadoBalanceNegro, negroGeneral, 'negro', 'NEGRO', 'flagNegro', 1, 0);  
        muestraRenderObjetoGlobal(objetoGlobal, 'negro', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 1, 2);  
    } else {
        alertaCrearPerfil();  
    }
  })
  cyanGeneral.addEventListener('mousedown', () => {
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
    color = 'rgb(0,0,255)'
    manejoGeneralIndividual('azul',cian,estadoBalanceCyan,cyanGeneral,'cyan','AZUL','flagCyan',2,1)  
    muestraRenderObjetoGlobal(objetoGlobal, 'azul', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 3,4);
  }else{
    alertaCrearPerfil()
  }
  })
  magentaGeneral.addEventListener('mousedown', () => {
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
      color = 'rgb(255,0,255)'
    manejoGeneralIndividual('magenta',magenta,estadoBalanceMagenta ,magentaGeneral,'magenta','MAGENTA','flagMagenta',3,2)  
    muestraRenderObjetoGlobal(objetoGlobal, 'magenta', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 5,6);
  }else{
    alertaCrearPerfil()
  }
  })
  amarilloGeneral.addEventListener('mousedown', () => {
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
      color = 'rgb(255,255,0)'
    manejoGeneralIndividual('amarillo',amarillo,estadoBalanceAmarillo,amarilloGeneral,'amarillo','AMARILLO','flagAmarillo',4,3)  
    muestraRenderObjetoGlobal(objetoGlobal, 'amarillo', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 7,8);
  }else{
    alertaCrearPerfil()
  }
  })
  especialGeneral.addEventListener('mousedown', () => {
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
      color = 'rgb(255,130,0)'
    manejoGeneralIndividual('especial',especial,estadoBalanceEspecial,especialGeneral,'especial','ESPECIAL','flagEspecial',5,4)  
    muestraRenderObjetoGlobal(objetoGlobal, 'especial', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 9,10);
  }else{
    alertaCrearPerfil()
  }
  })
  barnizGeneral.addEventListener('mousedown', () => {
    if (objetoGlobal && Object.keys(objetoGlobal).length > 0) {  
      color = 'rgb(200,200,200)'
    manejoGeneralIndividual('barniz',barniz,estadoBalanceBarniz,barnizGeneral,'especial','BARNIZ','flagBarniz',6,5)  
    muestraRenderObjetoGlobal(objetoGlobal, 'barniz', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 11,12);
  }else{
    alertaCrearPerfil()
  }
  })  
  function manejoGeneralIndividual(grilla,botoneraDinamica,actualBalanceColor,botonActual,claseColor,textoSpan,banderaActiva,index,indexSelector){
    const lineaLeds = document.querySelectorAll(`.grilla-${grilla}`);
    lineaLeds.forEach((elto, index) => { 
      setTimeout(() => {
        elto.style.backgroundColor = verde;
      }, index * 7); // Retraso de 100ms entre cada elemento
    });
    setTimeout(() => {
      lineaLeds.forEach((elto, index) => {
        setTimeout(() => {
          elto.style.backgroundColor = '';
        }, index * 7); // Retraso de 100ms entre cada elemento
      });    
    }, 177);
    clases.forEach(clase => {
      bloqueTinta.classList.remove(clase);
      bloqueAgua.classList.remove(clase);
    });
    flagNegro = false;
    flagCyan = false;
    flagMagenta = false;
    flagAmarillo = false;
    flagEspecial = false;
    flagBarniz = false;
    switch (banderaActiva) {
      case 'flagNegro':
        flagNegro = true;
        break;
      case 'flagCyan':
        flagCyan = true;
        break;
      case 'flagMagenta':
        flagMagenta = true;
        break;
      case 'flagAmarillo':
        flagAmarillo = true;
        break;
      case 'flagEspecial':
        flagEspecial = true;
        break;
      case 'flagBarniz':
        flagBarniz = true;
        break;
      default:
        console.warn('Bandera no reconocida');
    }
    crearBotoneraDinamica(botoneraDinamica);
    botonesGenerales.forEach(boton => {
      boton.style.backgroundColor = ''; // Reinicia el color
    });    
    botonActual.style.backgroundColor = verde;    
    bloqueTinta.classList.add(`move-generales-${claseColor}`)
    bloqueAgua.classList.add(`move-generales-${claseColor}`)    
    colorActual.textContent= textoSpan    
    const todosSpan = document.querySelectorAll('.texto-selectores');
    todosSpan.forEach(span => {
      span.style.color = ''; 
    });  
    const spanElement = botonActual.querySelector('span.texto-selectores');
    if (spanElement) {
      spanElement.style.color = 'black';
    }
    const spanSelectores = document.querySelector(`#butts-selectores div:nth-child(${index}) .texto-selectores`);
    if (spanSelectores) {
      spanSelectores.style.color = 'black';
    }
    const bottsSelectores = document.querySelectorAll('.butt-selector');  
    bottsSelectores.forEach((boton, i) => {
      if (i === indexSelector) {
        boton.style.backgroundColor = verde ; // Aplicar fondo verde al botón en la posición `index`
      } else {
        boton.style.backgroundColor = ''; // Restablecer color para los demás botones
      }
    });
  }      
  function mostrarSecuenciaPerfiles(){
    manejoGeneralIndividual('negro',negro,estadoBalanceNegro,negroGeneral,'negro','NEGRO','flagNegro',1,0)  
    muestraRenderObjetoGlobal(objetoGlobal, 'negro', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 1,2);  
    setTimeout(() => {
      manejoGeneralIndividual('azul',cian,estadoBalanceCyan,cyanGeneral,'cyan','AZUL','flagCyan',2,1)  
      muestraRenderObjetoGlobal(objetoGlobal, 'azul', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 3,4);
    }, 150);
    setTimeout(() => {
      manejoGeneralIndividual('magenta',magenta,estadoBalanceMagenta ,magentaGeneral,'magenta','MAGENTA','flagMagenta',3,2)  
      muestraRenderObjetoGlobal(objetoGlobal, 'magenta', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 5,6);
    }, 300);
    setTimeout(() => {
      manejoGeneralIndividual('amarillo',amarillo,estadoBalanceAmarillo,amarilloGeneral,'amarillo','AMARILLO','flagAmarillo',4,3)  
      muestraRenderObjetoGlobal(objetoGlobal, 'amarillo', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 7,8);
    }, 450);
    setTimeout(() => {
      manejoGeneralIndividual('especial',especial,estadoBalanceEspecial,especialGeneral,'especial','ESPECIAL','flagEspecial',5,4)  
      muestraRenderObjetoGlobal(objetoGlobal, 'especial', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 9,10);
    }, 600);
    setTimeout(() => {
      manejoGeneralIndividual('barniz',barniz,estadoBalanceBarniz,barnizGeneral,'especial','BARNIZ','flagBarniz',6,5)  
      muestraRenderObjetoGlobal(objetoGlobal, 'barniz', 'linea', 'lineaSeguidor', 'lineaGrilla', 'tanque-tinta', 'nivelTinta', 'nivelAgua', 11,12);
    }, 750);

  }
  irAconsola.addEventListener('click', () =>{
    nombreCliente.style.top=''
    let nombreDatos = document.querySelector('#cliente-nombre')
    let interfazPerfiles = document.getElementById('perfiles-entintado')
    interfazPerfiles.classList.remove('move-perfiles-entintado')
    desactivarClick(['.butt-perfiles', '.cabeza', '.mod-tinta']); 
    var elementosExcluidos = ['simulador','interfaz-perfiles','perfiles-entintado','boton-perfiles','boton-reseteo','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5','spn-blur-6','spn-blur-7']
    for (var i = 0; i < allContenedores.length; i++) {
      var elemento = document.getElementById(allContenedores[i])  
      if (elemento) {
        elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'  
      }
    }
    const elementos = document.querySelectorAll('.div-gral, .div-agua');
    elementos.forEach(elemento => {
      elemento.style.color = 'transparent'
    });
    container1.style.display = 'none'
    restablecerClick(['.butt-perfiles', '.cabeza', '.mod-tinta']);
    if(objetoGlobal === null || objetoGlobal === ''){nombreDatos.textContent = ''}
    setTimeout(() => {
      interfazPerfiles.classList.add('move-perfiles-entintado')
        botRevertir.style.display='block'
    }, 100);
    setTimeout(() => {
      document.querySelector('.nombre-cliente').style.display='flex'
    }, 1500);
    setTimeout(() =>{
      mostrarSecuenciaPerfiles()                        
    },1550);
      document.querySelectorAll('.butt-perfiles').forEach(elemento => {
      elemento.style.display = 'flex'; 
    });
    buttsPerfiles.forEach(boton =>{ 
      boton.style.backgroundColor = ''
    })
    document.querySelector('#butt-perfil-tinta').style.backgroundColor='rgb(0,255,0)'
    irAconsola.style.display='none'
      restablecerClick(['.perfiles'])
  })

  /* *************************************************************************************************************************** */
  let red = 255, green = 255, blue = 255;
  function updateColorDisplay() {
    document.getElementById('colorDisplay').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    document.getElementById('redValue').textContent = red;
    document.getElementById('greenValue').textContent = green;
    document.getElementById('blueValue').textContent = blue;
  }
  function updateColor(channel, value) {
    value = parseInt(value); // Convertir el valor del slider a número

    if (channel === 'red') red = value;
    if (channel === 'green') green = value;
    if (channel === 'blue') blue = value;

    updateColorDisplay();
  }
  // Detectar cambios en los sliders
  document.getElementById("redSlider").addEventListener("input", function() {
    updateColor('red', this.value);
  });
  document.getElementById("greenSlider").addEventListener("input", function() {
    updateColor('green', this.value);
  });
  document.getElementById("blueSlider").addEventListener("input", function() {
    updateColor('blue', this.value);
  });
  // Inicializar el color al cargar la página
  updateColorDisplay();
  
  
});  
function crearLedsSpan() {
  // Ciclo para crear 22 padres con IDs secuenciales y 24 spans en cada uno
  for (let i = 1; i <= 22; i++) {
    // Obtener el padre correspondiente
    const contenedorLed = document.getElementById(`led-${i}`);
    
    // Verificar que el contenedor padre exista
    if (contenedorLed) {
      // Eliminar todos los spans hijos existentes en el contenedor
      while (contenedorLed.firstChild) {
        contenedorLed.removeChild(contenedorLed.firstChild);
      }

      // Crear 24 elementos span y agregarlos al padre actual
      for (let j = 1; j <= 24; j++) {
        const elementoSpan = document.createElement('span');
        elementoSpan.classList.add('led'); // Agregar la clase 'led' a cada span
        contenedorLed.appendChild(elementoSpan); // Agregar el span al contenedor padre 
      }
    } else {
      console.warn(`No se encontró el contenedor con id: led-${i}`);
    }
  }

  const columnaClon = document.querySelectorAll('#control-perfiles #led-1 .led')
  if (columnaClon.length === 0) { 
    columnaClon.forEach(nieto => {
      nieto.classList.add('elemento-sync');
    });
  }

}
function eliminarBotonesSuma() {
  const contenedorPrincipal = document.getElementById('columna-30');
  const botonesSuma = contenedorPrincipal.querySelectorAll('.linea-control.suma');
  botonesSuma.forEach((boton) => {
    contenedorPrincipal.removeChild(boton);
  });
}
function eliminarBotonesResta() {
  const contenedorPrincipal = document.getElementById('columna-30');
  const botonesSuma = contenedorPrincipal.querySelectorAll('.linea-control.resta');
  botonesSuma.forEach((boton) => {
    contenedorPrincipal.removeChild(boton);
  });
}
const informacionBotonesNegro = [];
const informacionBotonesAmarillo = [];
const informacionBotonesCyan = [];
const informacionBotonesMagenta = [];
const informacionBotonesNaranja = [];
const informacionBotonesGris = [];
let colorAplicadoContador = 0;

const numeroLineas = 22; 
let currentLinea = 0;
let currentIndice = 0;

function desactivarEventos() {
  // Prevenir clicks y mousedown en toda la página
  document.addEventListener('click', bloquearEvento, true);
  document.addEventListener('mousedown', bloquearEvento, true);
}
function activarEventos() {
  // Reactivar clicks y mousedown
  document.removeEventListener('click', bloquearEvento, true);
  document.removeEventListener('mousedown', bloquearEvento, true);
}
function bloquearEvento(e) {
  e.stopPropagation();
  e.preventDefault();
}

let objetoAmarillo = { 
  linea: {
    "linea-1": [],
    "linea-2": [],
    "linea-3": [],
    "linea-4": [],
    "linea-5": [],
    "linea-6": [],
    "linea-7": [],
    "linea-8": [],
    "linea-9": [],
    "linea-10": [],
    "linea-11": [],
    "linea-12": [],
    "linea-13": [],
    "linea-14": [],
    "linea-15": [],
    "linea-16": [],
    "linea-17": [],
    "linea-18": [],
    "linea-19": [],
    "linea-20": [],
    "linea-21": [],
    "linea-22": [],
  },
    lineaSeguidor: {
    "led-1": [],
    "led-2": [],
    "led-3": [],
    "led-4": [],
    "led-5": [],
    "led-6": [],
    "led-7": [],
    "led-8": [],
    "led-9": [],
    "led-10": [],
    "led-11": [],
    "led-12": [],
    "led-13": [],
    "led-14": [],
    "led-15": [],
    "led-16": [],
    "led-17": [],
    "led-18": [],
    "led-19": [],
    "led-20": [],
    "led-21": [],
    "led-22": [],
  },
    lineaGrilla: {
    "grilla-1": [],
    "grilla-2": [],
    "grilla-3": [],
    "grilla-4": [],
    "grilla-5": [],
    "grilla-6": [],
    "grilla-7": [],
    "grilla-8": [],
    "grilla-9": [],
    "grilla-10": [],
    "grilla-11": [],
    "grilla-12": [],
    "grilla-13": [],
    "grilla-14": [],
    "grilla-15": [],
    "grilla-16": [],
    "grilla-17": [],
    "grilla-18": [],
    "grilla-19": [],
    "grilla-20": [],
    "grilla-21": [],
    "grilla-22": [],
  },
  nivelAgua: [],
  nivelAguaGral: [],
  nivelTinta: [],
  nivelTintaGral: [],
  colorElemento: ''
};

let objetoMagenta = JSON.parse(JSON.stringify(objetoAmarillo));
let objetoCian = JSON.parse(JSON.stringify(objetoAmarillo));
let objetoNegro = JSON.parse(JSON.stringify(objetoAmarillo));
let objetoEspecial = JSON.parse(JSON.stringify(objetoAmarillo));
let objetoBarniz = JSON.parse(JSON.stringify(objetoAmarillo));

let primeraPantalla = true;
let segundaPantalla = false;

let objetoRender = {
  boton1: {
    boton: "",
    elementosColoreados: [],
    linea1: "",
    claseElemento: "",
    colorElemento: ""
  }
};
const colorNames = {
  "rgb(255,255,0)": "amarillo",
  "rgb(0,0,255)": "azul",
  "rgb(255,0,255)": "magenta",
  "rgb(0,0,0)": "negro",
  "rgb(255,130,0)": "especial",
  "rgb(200,200,200)": "barniz",
};
function getColorName(color) {
  const rgbColor = typeof color === "string" ? color : color.toString();      
  return colorNames[rgbColor] || "desconocido";
}

function crearBotonSuma(color, linea1, linea2, linea3) {
  const contenedorPrincipal = document.getElementById('columna-30');
  const botonesSuma = []; 

  const indexarElements = document.querySelectorAll('.indexar');

  for (let i = 1; i <= 22; i++) {
    const elementoSuma = document.createElement('div');
    elementoSuma.classList.add('linea-control', 'suma');
    elementoSuma.id = `bot-${i}`;
    contenedorPrincipal.appendChild(elementoSuma);
    botonesSuma.push(elementoSuma);      

    elementoSuma.addEventListener("mousedown", () => {
      console.log(' COLORNAME ANTES :', color);
      if (!flagAplicacion) {
        alertaBotones.style.display = 'flex';
        alertaBotones.style.backgroundColor = verde;
        alertaBotones.style.color = 'black';
        alertaBotones.style.top = '20vh';
        desactivarClicEnElementos(buttSelector, buttSelector, buttsPerfiles, buttsControl, buttsColores, buttSuma, buttResta);
        setTimeout(() => {
          alertaBotones.style.backgroundColor = '';
          alertaBotones.style.color = '';
        }, 500);
      } else {
        const numeroBoton = elementoSuma.id.match(/\d+/)?.[0]; // Extrae el número del ID
        elementoSuma.style.backgroundColor = 'rgb(0, 250, 254)';
        const colorName = getColorName(color);
        const lineaID = `linea-${numeroBoton}`;
        const ledID = `led-${numeroBoton}`;
        const ledGeneral = `grilla-${numeroBoton}`;
        const ledsRuta = `#columna-70 #${lineaID} #display-leds .leds`;
        const ledControlRuta = `#control-perfiles #led-${numeroBoton} .led`;
        const ledGeneralRuta = `#perfil-${colorName} #grilla-${numeroBoton} .led-general`;
        const coleccionLeds = document.querySelectorAll(ledsRuta);
        const coleccionLed = document.querySelectorAll(ledControlRuta);
        const coleccionGeneral = document.querySelectorAll(ledGeneralRuta);
        console.log(' COLORNAME DESPUES :', colorName);
        // Determinar el índice inicial dinámicamente
        let index = (coleccionLeds.length - 1) - almacenObjetos[objetoGlobal][colorName][linea1][lineaID].length;
        // Iniciar el intervalo
        let intervalID = setInterval(() => {
          if (index >= 0) {
            coleccionLeds[index].style.backgroundColor = rojo;
            coleccionLed[index].style.backgroundColor = color;
            coleccionGeneral[index].style.backgroundColor = color;

            almacenObjetos[objetoGlobal][colorName][linea1][lineaID].push(index);
            almacenObjetos[objetoGlobal][colorName][linea2][ledID].push(index);
            almacenObjetos[objetoGlobal][colorName][linea3][ledGeneral].push(index);

            guardarObjetoEnLocalStorage();
            guardarCambiosGeneralesEnAlmacen();
            index--;
          } else {
            clearInterval(intervalID); 
          }
        }, 177);
        const indexarElement = indexarElements[i - 1];
        if (indexarElement) {
          indexarElement.style.color = 'red';
          indexarElement.style.fontSize='1em'
          indexarElement.style.fontWeight = 'bold';
        }

        elementoSuma.addEventListener("mouseup", () => {
          const indexarElement = indexarElements[i - 1];
          if (indexarElement) {
            indexarElement.style.color = '';
            indexarElement.style.fontSize=''
            indexarElement.style.fontWeight = '';
          }
  
          elementoSuma.style.backgroundColor = '';
          clearInterval(intervalID);
        });
        elementoSuma.addEventListener("mouseleave", () => {
          elementoSuma.style.backgroundColor = '';
          clearInterval(intervalID);
        });
      }
    });
  }
}

function guardarObjetoEnLocalStorage(){
  localStorage.setItem('objetoAmarillo', JSON.stringify(objetoAmarillo));
  localStorage.setItem('objetoMagenta', JSON.stringify(objetoMagenta));
  localStorage.setItem('objetoCian', JSON.stringify(objetoCian));
  localStorage.setItem('objetoNegro', JSON.stringify(objetoNegro));
  localStorage.setItem('objetoEspecial', JSON.stringify(objetoEspecial));
  localStorage.setItem('objetoBarniz', JSON.stringify(objetoBarniz));
}

function traerObjetoDeLocalStorage() {
  const objetoAmarilloDesdeLocal = JSON.parse(localStorage.getItem('objetoAmarillo') || '{}'); 
  const objetoMagentaDesdeLocal = JSON.parse(localStorage.getItem('objetoMagenta') || '{}');
  const objetoCianDesdeLocal = JSON.parse(localStorage.getItem('objetoCian') || '{}');
  const objetoNegroDesdeLocal = JSON.parse(localStorage.getItem('objetoNegro') || '{}');
  const objetoEspecialDesdeLocal = JSON.parse(localStorage.getItem('objetoEspecial') || '{}');
  const objetoBarnizDesdeLocal = JSON.parse(localStorage.getItem('objetoBarniz') || '{}');
  if (Object.keys(objetoAmarilloDesdeLocal).length > 0) {
    // Reasignar las propiedades del objeto local al objeto global
    Object.assign(objetoAmarillo, objetoAmarilloDesdeLocal);
  } else {
    console.warn('El objeto no existe en localStorage o está vacío.');
  }
  if (Object.keys(objetoMagentaDesdeLocal).length > 0) {
    // Reasignar las propiedades del objeto local al objeto global
    Object.assign(objetoMagenta, objetoMagentaDesdeLocal);
  } else {
    console.warn('El objeto no existe en localStorage o está vacío.');
  }
  if (Object.keys(objetoCianDesdeLocal).length > 0) {
    // Reasignar las propiedades del objeto local al objeto global
    Object.assign(objetoCian, objetoCianDesdeLocal);
  } else {
    console.warn('El objeto no existe en localStorage o está vacío.');
  }
  if (Object.keys(objetoNegroDesdeLocal).length > 0) {
    // Reasignar las propiedades del objeto local al objeto global
    Object.assign(objetoNegro, objetoNegroDesdeLocal);
  } else {
    console.warn('El objeto no existe en localStorage o está vacío.');
  }
  if (Object.keys(objetoEspecialDesdeLocal).length > 0) {
    // Reasignar las propiedades del objeto local al objeto global
    Object.assign(objetoEspecial, objetoEspecialDesdeLocal);
  } else {
    console.warn('El objeto no existe en localStorage o está vacío.');
  }
  if (Object.keys(objetoBarnizDesdeLocal).length > 0) {
    // Reasignar las propiedades del objeto local al objeto global
    Object.assign(objetoBarniz, objetoBarnizDesdeLocal);
  } else {
    console.warn('El objeto no existe en localStorage o está vacío.');
  }
  ensayoAplicacion(objetoMagenta,'#perfil-magenta',magenta,'magenta'); 
  ensayoAplicacion(objetoAmarillo,'#perfil-amarillo',amarillo,'amarillo');      
  ensayoAplicacion(objetoCian,'#perfil-azul',cian,'cyan');     
  ensayoAplicacion(objetoNegro,'#perfil-negro',negro,'negro'); 
  ensayoAplicacion(objetoEspecial,'#perfil-especial',especial,'especial');         
  ensayoAplicacion(objetoBarniz,'#perfil-barniz',barniz,'barniz');
}

function vaciarObjeto(){
  const objetos = [objetoAmarillo, objetoMagenta, objetoCian, objetoNegro, objetoEspecial, objetoBarniz];  
  objetos.forEach(objeto => {
    for (let key in objeto) {
      if (typeof objeto[key] === 'object' && !Array.isArray(objeto[key])) { 
        // Si es un objeto, limpiarlo recursivamente
        for (let subKey in objeto[key]) {
          objeto[key][subKey] = [];
        }
      } else if (Array.isArray(objeto[key])) {
        // Si es un array, vaciarlo
        objeto[key] = [];
      } else {
        // Si es otro tipo de dato, inicializarlo
        objeto[key] = '';
      }
    }
  });  
  guardarObjetoEnLocalStorage();
}











function vaciarAlmacenObjetos() {
  // 1. Traer el objeto almacenado en localStorage
  const almacenJSON = localStorage.getItem('almacenObjetos');

  if (!almacenJSON) {
    console.log("El almacén de objetos está vacío o no existe.");
    return;
  }

  // Parsear el objeto JSON almacenado
  almacenObjetos = JSON.parse(almacenJSON);
  console.log("Almacén antes de vaciarlo:", almacenObjetos);

  // 2. Vaciar el objeto
  almacenObjetos = {};

  // 3. Guardar los cambios en localStorage
  localStorage.setItem('almacenObjetos', JSON.stringify(almacenObjetos));

  console.log("El almacén de objetos ha sido vaciado.");
}

function ensayoAplicacion(objeto,colorPerfil,color,colorTinta){ 
  setTimeout(() => {
    const ledsRutaBase = `#columna-70`;
    const ledRutaBase = `#control-perfiles`;
    const ledGeneralBase = colorPerfil
    const colorAplicar = amarillo
    // Iterar sobre cada línea en la propiedad 'linea'
    for (let lineaKey in objeto.linea) {
      if (objeto.linea[lineaKey].length === 0) {
        continue; // Saltar si no hay elementos en la línea
      }
      // Construir las rutas dinámicamente para cada línea
      const ledsRuta = `${ledsRutaBase} #${lineaKey} #display-leds .leds`;
      const ledRuta = `${ledRutaBase} #${lineaKey} .led`;
      const ledGeneral = `${ledGeneralBase} #${lineaKey} .led-general`;
      // Seleccionar los elementos de cada ruta
      const coleccionLeds = document.querySelectorAll(ledsRuta);
      const coleccionLed = document.querySelectorAll(ledRuta);
      const coleccionGenerales = document.querySelectorAll(ledGeneral);
      // Calcular los índices de inicio y fin
      const inicio = coleccionLeds.length - 1; // Último elemento de la colección
      const cantidadColorear = objeto.linea[lineaKey].length;
      const fin = inicio - cantidadColorear + 1; // Índice donde debe detenerse
      // Recorrer desde inicio hasta fin e invertir el índice
      for (let i = inicio; i >= fin; i--) {
        if (coleccionLeds[i]) coleccionLeds[i].style.backgroundColor = rojo;
        if (coleccionLed[i]) coleccionLed[i].style.backgroundColor = color;
        if (coleccionGenerales[i]) coleccionGenerales[i].style.backgroundColor = color;  
      }
    }
    for (let lineaKey in objeto.lineaSeguidor) {
      if (objeto.lineaSeguidor[lineaKey].length === 0) {
        continue; // Saltar si no hay elementos en la línea
      }
      // Construir las rutas dinámicamente para cada línea
      const ledRuta = `${ledRutaBase} #${lineaKey} .led`;
      // Seleccionar los elementos de cada ruta
      const coleccionLed = document.querySelectorAll(ledRuta);
      // Calcular los índices de inicio y fin
      const inicio = coleccionLed.length - 1; // Último elemento de la colección
      const cantidadColorear = objeto.lineaSeguidor[lineaKey].length;
      const fin = inicio - cantidadColorear + 1; // Índice donde debe detenerse
      // Recorrer desde inicio hasta fin e invertir el índice
      for (let i = inicio; i >= fin; i--) {
        if (coleccionLed[i]) coleccionLed[i].style.backgroundColor = color;
      }
    }
    for (let lineaKey in objeto.lineaGrilla) {
      const elementosEnLinea = objeto.lineaGrilla[lineaKey].length;
      if (elementosEnLinea === 0) {
        console.log(`No hay elementos para colorear en ${lineaKey}`);
        continue; // Saltar si no hay elementos en la línea
      }
      // Construir la ruta dinámica para cada línea
      const ledRuta = `${ledGeneralBase} #${lineaKey} .led-general`;
      // Seleccionar los elementos de la ruta
      const coleccionLed = document.querySelectorAll(ledRuta);
      console.log(`Elementos encontrados en ${lineaKey}: ${coleccionLed.length}`);
      if (coleccionLed.length === 0) {
        console.warn(`No se encontraron elementos DOM para ${lineaKey}. Verifica las rutas.`);
        continue; // Saltar si no se encuentran elementos en el DOM
      }
      // Calcular los índices de inicio y fin
      const inicio = coleccionLed.length - 1; // Último elemento de la colección
      const cantidadColorear = Math.min(elementosEnLinea, coleccionLed.length); // Usar el menor entre los dos
      const fin = inicio - cantidadColorear + 1; // Índice donde debe detenerse
      // Recorrer desde inicio hasta fin e invertir el índice
      for (let i = inicio; i >= fin; i--) {
        if (coleccionLed[i]) {
          coleccionLed[i].style.backgroundColor = color;
        }
      }
    }
    let cantidadLedsTinta = objeto.nivelTinta.length;
    let cantidadLedsAgua = objeto.nivelAgua.length;
     const elementosTinta = document.querySelectorAll(`.divs-grales-tinta-${colorTinta}`);
     const elementosAgua = document.querySelectorAll(`.divs-grales-solucion-${colorTinta}`);    

    // Recorrer la colección en reversa y aplicar color solo a la cantidad especificada
    for (let i = elementosTinta.length - 1; i >= elementosTinta.length - cantidadLedsTinta && i >= 0; i--) {
      elementosTinta[i].style.backgroundColor = color; // Aplicar el color
    }
    for (let i = elementosAgua.length - 1; i >= elementosAgua.length - cantidadLedsAgua && i >= 0; i--) {
      elementosAgua[i].style.backgroundColor = verdeAgua; // Aplicar el color
    }       
  }, 100);
}

let buttonSmart = document.getElementById('seleccion-gral')
let intervaloLeds; // Declaración global
buttonSmart.addEventListener('mousedown', () =>{
  primeraPantalla = false
  segundaPantalla = true
  objetoAmarillo.linea['linea-11'].push(1);
  guardarObjetoAmarillo(objetoAmarillo)
  console.log(objetoAmarillo)
})
buttonSmart.addEventListener('mouseup', () =>{
  // Detener el intervalo si todos los LEDs han sido coloreados
  clearInterval(intervaloLeds);
  console.log("Todos los LEDs han sido coloreados.");  
})
function guardarObjetoEnLocal(objeto) {
  // Convertir el objeto a una cadena JSON
  const objetoString = JSON.stringify(objeto);
  
  // Guardarlo en localStorage
  localStorage.setItem('informacionCopia', objetoString);
  
}




function guardarObjetoAmarillo(objetoAmarillo) {   
  try {
      // Convertir el objeto a una cadena JSON
      const objetoString = JSON.stringify(objetoAmarillo);

      // Guardar en localStorage con la clave "objetoAmarillo"
      localStorage.setItem("objetoAmarillo", objetoString);

      console.log("Objeto guardado exitosamente:", objetoAmarillo);
  } catch (error) {
      console.error("Error al guardar el objeto en localStorage:", error);
  }
} 


function guardarobjetoMagenta(objetoMagenta) {
  try {
      // Convertir el objeto a una cadena JSON
      const objetoString = JSON.stringify(objetoMagenta);

      // Guardar en localStorage con la clave "objetoAmarillo"
      localStorage.setItem("objetoMagenta", objetoString);

      console.log("Objeto guardado exitosamente:", objetoMagenta);
  } catch (error) {
      console.error("Error al guardar el objeto en localStorage:", error);
  }
}
function guardarObjetoCian(objetoCian) {
  try {
    const objetoString = JSON.stringify(objetoCian);
    localStorage.setItem("objetoCian", objetoString);
    console.log("Objeto guardado exitosamente:", objetoCian);
  } catch (error) {
    console.error("Error al guardar el objeto en localStorage:", error);
  }
}
function guardarObjetoNegro(objetoNegro) {
  try {
    const objetoString = JSON.stringify(objetoNegro);
    localStorage.setItem("objetoNegro", objetoString);
    console.log("Objeto guardado exitosamente:", objetoNegro);
  } catch (error) {
    console.error("Error al guardar el objeto en localStorage:", error);
  }
}
function guardarObjetoEspecial(objetoEspecial) {
  try {
    const objetoString = JSON.stringify(objetoEspecial);
    localStorage.setItem("objetoEspecial", objetoString);
    console.log("Objeto guardado exitosamente:", objetoEspecial);
  } catch (error) {
    console.error("Error al guardar el objeto en localStorage:", error);
  }
}
function guardarObjetoBarniz(objetoBarniz) {
  try {
    const objetoString = JSON.stringify(objetoBarniz);
    localStorage.setItem("objetoBarniz", objetoString);
    console.log("Objeto guardado exitosamente:", objetoBarniz);
  } catch (error) {
    console.error("Error al guardar el objeto en localStorage:", error);
  }
}  
function vaciarObjetosPerfiles() {
  // Lista de nombres de los objetos a vaciar
  const objetos = ["objetoAmarillo", "objetoMagenta", "objetoCian", "objetoNegro", "objetoEspecial", "objetoBarniz"];
  // Estructura base para reiniciar
  const estructuraBase = {
    clase: '',
    claseSeguidor: '',
    claseGrilla: '',
    linea: {
      "linea-1": [],
      "linea-2": [],
      "linea-3": [],
      "linea-4": [],
      "linea-5": [],
      "linea-6": [],
      "linea-7": [],
      "linea-8": [],
      "linea-9": [],
      "linea-10": [],
      "linea-11": [],
      "linea-12": [],
      "linea-13": [],
      "linea-14": [],
      "linea-15": [],
      "linea-16": [],
      "linea-17": [],
      "linea-18": [],
      "linea-19": [],
      "linea-20": [],
      "linea-21": [],
      "linea-22": [],
    },
    lineaSeguidor: {
      "led-1": [],
      "led-2": [],
      "led-3": [],
      "led-4": [],
      "led-5": [],
      "led-6": [],
      "led-7": [],
      "led-8": [],
      "led-9": [],
      "led-10": [],
      "led-11": [],
      "led-12": [],
      "led-13": [],
      "led-14": [],
      "led-15": [],
      "led-16": [],
      "led-17": [],
      "led-18": [],
      "led-19": [],
      "led-20": [],
      "led-21": [],
      "led-22": [],
    },
    lineaGrilla: {
      "grilla-1": [],
      "grilla-2": [],
      "grilla-3": [],
      "grilla-4": [],
      "grilla-5": [],
      "grilla-6": [],
      "grilla-7": [],
      "grilla-8": [],
      "grilla-9": [],
      "grilla-10": [],
      "grilla-11": [],
      "grilla-12": [],
      "grilla-13": [],
      "grilla-14": [],
      "grilla-15": [],
      "grilla-16": [],
      "grilla-17": [],
      "grilla-18": [],
      "grilla-19": [],
      "grilla-20": [],
      "grilla-21": [],
      "grilla-22": [],
    },
    colorElemento: '',
    contadorPulsos: [], 
  };

  // Iterar sobre cada objeto
  objetos.forEach(nombre => {
    if (window[nombre]) {
      const objeto = window[nombre];
      // Restablecer al estado inicial
      Object.assign(objeto, JSON.parse(JSON.stringify(estructuraBase)));
    }
    // Eliminar del localStorage
    localStorage.removeItem(nombre);
  });
  console.log("Objetos vaciados y eliminados de localStorage.");

}
document.querySelector('#boton-reseteo').addEventListener('click', () =>{
  var elementosExcluidos = ['simulador','butt-perfil-tinta', 'butt-control-tinta', 'butt-perfil', 'butt-job-track', 'boton-perfiles', 'interfaz-perfiles','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5']  
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  container1.style.display = 'none'
  desactivarClick(['.butt-perfiles']); 
  const alertasPerfiles = document.querySelectorAll('.alerta-perfiles');
  alertasPerfiles.forEach(alertaPerfiles => {
    alertaPerfiles.style.opacity = '1';
    alertaPerfiles.style.display = 'flex';
  });
})
document.querySelector('#boton-perfiles').addEventListener('click', () =>{
  var elementosExcluidos = ['simulador','butt-perfil-tinta', 'butt-control-tinta', 'butt-perfil', 'butt-job-track', 'boton-perfiles', 'interfaz-perfiles', 'boton-reseteo','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5','spn-blur-6','spn-blur-7']  
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'   
    }
  } 
  container1.style.display = 'none'
  desactivarClick(['.butt-perfiles']); 
  restablecerClick(['.butt-revierte'])
  setTimeout(() => {
    botRevertir.style.display='block'  
  }, 10);
  setTimeout(() => {
    moverFormulario()
    document.getElementById('nombreCliente').focus();
    document.getElementById('nombreCliente').value = ''
  }, 20);
})  
document.querySelector('#aceptar-eliminar').addEventListener('click', () =>{
  const contenedor = document.getElementById('botonera-fondo');
  const alertasPerfiles = document.querySelectorAll('.alerta-perfiles');  

  vaciarObjeto()
  vaciarAlmacenObjetos()
  const colecciones = document.querySelectorAll('.lineas-tinta, .lineas-solucion, .leds, .led, .led-general, .clase-dos');
  colecciones.forEach((elemento) => {
    elemento.style.backgroundColor = '';
  });
  alertasPerfiles.forEach(alertaPerfiles => {
    alertaPerfiles.style.opacity = '0'; // Desvanece el elemento
    setTimeout(() => {
      alertaPerfiles.style.display = 'none';
      document.querySelector('#cliente-nombre').textContent = ''
      document.querySelectorAll('.butt-perfiles').forEach(elemento => {  
        elemento.style.display = 'block';
      });
      document.querySelectorAll('.butt-perfiles').forEach(elemento => {
        elemento.style.display = 'block';
      });      
      if (contenedor) {
        contenedor.querySelectorAll('*').forEach(elemento => {
          elemento.style.display = 'block';
        });
      }

      objetoGlobal = {}
    }, 1000);
  });
  restablecerClick(['.butt-perfiles'])
})
document.querySelector('#cancelar-eliminar').addEventListener('click', () =>{
  const alertasPerfiles = document.querySelectorAll('.alerta-perfiles');

  alertasPerfiles.forEach(alertaPerfiles => {
    alertaPerfiles.style.opacity = '0'; // Desvanece el elemento
    setTimeout(() => {
      alertaPerfiles.style.display = 'block'; 
      document.querySelectorAll('.butt-perfiles').forEach(elemento => {           
        elemento.style.display = 'block';
      });
      
      const contenedor = document.getElementById('botonera-fondo');
      if (contenedor) {
        contenedor.querySelectorAll('*').forEach(elemento => {
          elemento.style.display = 'block';
        });
      }
    

    }, 1000);
  });
  restablecerClick(['.butt-perfiles'])
})
function traerObjetoAmarillo() {
  try {
    // Recuperar el objeto almacenado en localStorage
    const objetoString = localStorage.getItem("objetoAmarillo");

    if (objetoString) {
      // Convertir la cadena JSON de vuelta a un objeto
      const objeto = JSON.parse(objetoString);
      console.log("Objeto recuperado exitosamente:", objeto);
      return objeto;
    } else {
      console.warn("No se encontró un objeto en localStorage. Devolviendo un objeto vacío.");
      return {
        clase: [],
        claseSeguidor: [],
        claseGrilla: [],
        linea: '',
        lineaSeguidor: '',
        lineaGrilla: '',
        colorPerfilGrilla: '',
        colorElemento: '',
        contadorPulsos: []
      };
    }
  }
  catch (error) {
    console.error("Error al recuperar el objeto desde localStorage:", error);
    return {
      clase: [],
      claseSeguidor: [],
      linea: '',
      lineaSeguidor: '',
      colorElemento: '',
      contadorPulsos: []
    };
  }
}
function traerObjetoMagenta() {
  try {
    // Recuperar el objeto almacenado en localStorage
    const objetoString = localStorage.getItem("objetoMagenta");

    if (objetoString) {
      // Convertir la cadena JSON de vuelta a un objeto
      const objeto = JSON.parse(objetoString);
      console.log("Objeto recuperado exitosamente:", objeto);
      return objeto;
    } else {
      console.warn("No se encontró un objeto en localStorage. Devolviendo un objeto vacío.");
      return {
        clase: [],
        claseSeguidor: [],
        claseGrilla: [],
        colorPerfilGrilla: '',
        linea: '',
        lineaSeguidor: '',
        lineaGrilla: '',
        colorElemento: '',
        contadorPulsos: []
      };
    }
  }
  catch (error) {
    console.error("Error al recuperar el objeto desde localStorage:", error);
    return {
      clase: [],
      claseSeguidor: [],
      linea: '',
      lineaSeguidor: '',
      colorElemento: '',
      contadorPulsos: []
    };
  }
}
function traerObjetoCian() {
  try {
    // Recuperar el objeto almacenado en localStorage
    const objetoString = localStorage.getItem("objetoCian");

    if (objetoString) {
      // Convertir la cadena JSON de vuelta a un objeto
      const objeto = JSON.parse(objetoString);
      console.log("Objeto recuperado exitosamente:", objeto);
      return objeto;
    } else {
      console.warn("No se encontró un objeto en localStorage. Devolviendo un objeto vacío.");
      return {
        clase: [],
        claseSeguidor: [],
        claseGrilla: [],
        colorPerfilGrilla: '',
        linea: '',
        lineaSeguidor: '',
        lineaGrilla: '',
        colorElemento: '',
        contadorPulsos: []
      };
    }
  }
  catch (error) {
    console.error("Error al recuperar el objeto desde localStorage:", error);
    return {
      clase: [],
      claseSeguidor: [],
      linea: '',
      lineaSeguidor: '',
      colorElemento: '',
      contadorPulsos: []
    };
  }
}
function traerObjetoNegro() {
  try {
    // Recuperar el objeto almacenado en localStorage
    const objetoString = localStorage.getItem("objetoNegro");

    if (objetoString) {
      // Convertir la cadena JSON de vuelta a un objeto
      const objeto = JSON.parse(objetoString);
      console.log("Objeto recuperado exitosamente:", objeto);
      return objeto;
    } else {
      console.warn("No se encontró un objeto en localStorage. Devolviendo un objeto vacío.");
      return {
        clase: [],
        claseSeguidor: [],
        claseGrilla: [],
        colorPerfilGrilla: '',
        linea: '',
        lineaSeguidor: '',
        lineaGrilla: '',
        colorElemento: '',
        contadorPulsos: [],
        nivelTinta: [],
        nivelAgua: []
      };
    }
  }
  catch (error) {
    console.error("Error al recuperar el objeto desde localStorage:", error);
    return {
      clase: [],
      claseSeguidor: [],
      linea: '',
      lineaSeguidor: '',
      colorElemento: '',
      contadorPulsos: []
    };
  }
}
function traerObjetoEspecial() {
  try {
    // Recuperar el objeto almacenado en localStorage
    const objetoString = localStorage.getItem("objetoEspecial");

    if (objetoString) {
      // Convertir la cadena JSON de vuelta a un objeto
      const objeto = JSON.parse(objetoString);
      console.log("Objeto recuperado exitosamente:", objeto);
      return objeto;
    } else {
      console.warn("No se encontró un objeto en localStorage. Devolviendo un objeto vacío.");
      return {
        clase: [],
        claseSeguidor: [],
        claseGrilla: [],
        colorPerfilGrilla: '',
        linea: '',
        lineaSeguidor: '',
        lineaGrilla: '',
        colorElemento: '',
        contadorPulsos: []
      };
    }
  }
  catch (error) {
    console.error("Error al recuperar el objeto desde localStorage:", error);
    return {
      clase: [],
      claseSeguidor: [],
      linea: '',
      lineaSeguidor: '',
      colorElemento: '',
      contadorPulsos: []
    };
  }
}
function traerObjetoBarniz() {
  try {
    // Recuperar el objeto almacenado en localStorage
    const objetoString = localStorage.getItem("objetoBarniz");

    if (objetoString) {
      // Convertir la cadena JSON de vuelta a un objeto
      const objeto = JSON.parse(objetoString);
      console.log("Objeto recuperado exitosamente:", objeto);
      return objeto;
    } else {
      console.warn("No se encontró un objeto en localStorage. Devolviendo un objeto vacío.");
      return {
        clase: [],
        claseSeguidor: [],
        claseGrilla: [],
        colorPerfilGrilla: '',
        linea: '',
        lineaSeguidor: '',
        lineaGrilla: '',
        colorElemento: '',
        contadorPulsos: []
      };
    }
  }
  catch (error) {
    console.error("Error al recuperar el objeto desde localStorage:", error);
    return {
      clase: [],
      claseSeguidor: [],
      linea: '',
      lineaSeguidor: '',
      colorElemento: '',
      contadorPulsos: []
    };
  }
}
function aplicarColorDesdeObjeto(objeto) {
  if(objeto === objetoAmarillo){
    // 1. Capturar la colección de elementos
    const lineaLeds = document.querySelectorAll('#columna-70 #linea-1 #display-leds .leds')
    const lineaSeguidor = document.querySelectorAll('#control-perfiles #led-1 .led')
    const lineaGeneral = document.querySelectorAll('#perfil-amarillo #grilla-1 .led-general')

    const nivelTinta = document.querySelectorAll('#ctrl-gral #tanque-tinta .lineas-tinta');
    const nivelAgua = document.querySelectorAll('#ctrl-gral #tanque-solucion .lineas-solucion');
    const nivelTintaGral = document.querySelectorAll('#footer-amarillo #footer-7 .divs-grales-tinta-amarillo');
    const nivelAguaGral = document.querySelectorAll('#footer-amarillo #footer-8 .divs-grales-solucion-amarillo');
    const ledsTinta = document.getElementsByClassName('lineas-tinta');
    const ledsAgua = document.getElementsByClassName('lineas-solucion');
    const displayAgua = document.getElementById('solucion-porcentaje')
    const displayTinta = document.getElementById('tinta-perc')

    let ledsParaColorear = objeto.linea["linea-1"].length;
    console.log('LEDS : ', ledsParaColorear)

  }
}
function traerObjetoDeLocal() {
  const objetoString = localStorage.getItem('informacionCopia');

  if (objetoString) {
    let objetos = JSON.parse(objetoString);

    if (Array.isArray(objetos)) {
      // Limitar a los primeros 22 elementos
      objetos = objetos.slice(0, 22);

      console.log('Información del objeto recuperado de localStorage:');
      objetos.forEach((objetoActual, index) => {
        console.log(`Elemento ${index + 1}:`);
        console.log(`botonOprimido: ${objetoActual.botonOprimido}`);
        console.log(`lineaActual: ${objetoActual.lineaActual}`);
        console.log(`ledActual: ${objetoActual.ledActual}`);
        console.log(`ledSecundario: ${objetoActual.ledSecundario}`);
        console.log(`ledsColoreados: ${objetoActual.ledsColoreados.length}`);
        console.log(`colorAplicadoContador: ${objetoActual.colorAplicadoContador}`);
        console.log(`clasesColoreadas: ${objetoActual.clasesColoreadas.join(', ')}`);
        console.log(`clasesColoreadas: ${objetoActual.colorElemento}`);
        console.log('---');
      });

      // Llama a renderizarObjetoLocal con el array de objetos
      objetos.forEach((objetoActual) => {
        renderizarObjetoLocal(objetoActual);
      });

      return objetos;
    } else {
      console.log('El objeto recuperado no es una lista.');
      return null;
    }
  } else {
    console.log('No se encontró objeto en localStorage.');
    return null;
  }
}
function renderizarObjetoLocal(objetoActual) {
  const elementosObjeto = document.querySelectorAll(`#${objetoActual.lineaActual} .${objetoActual.clasesColoreadas[0]}`);
  const elementosLedObjeto = document.querySelectorAll(`#${objetoActual.lineaActual} .${objetoActual.ledActual}`);
  const elementosGrillaObjeto = document.querySelectorAll(`#${objetoActual.lineaActual} .${objetoActual.ledSecundario}`);

  if (elementosObjeto.length > 0 || elementosLedObjeto.length || elementosGrillaObjeto.length > 0) {
    const limite = objetoActual.colorAplicadoContador;
    let coloreados = 0;

    // Aplicar el color almacenado
    for (let i = elementosObjeto.length - 1; i >= 0; i--) {
      if (coloreados < limite) {
        elementosObjeto[i].style.backgroundColor = objetoActual.colorElemento; // Usa el color directamente.
        coloreados++;
      } else {
        break;
      }
    }

    for (let i = elementosLedObjeto.length - 1; i >= 0; i--) {
      if (coloreados < limite) {
        elementosLedObjeto[i].style.backgroundColor = objetoActual.colorElemento;
        coloreados++;
      } else {
        break;
      }
    }
  } else {
    console.warn('No se encontraron elementos para aplicar color.');  
  }
}
function vaciarObjetoEnLocal() {
  // Eliminar el objeto almacenado en localStorage
  localStorage.removeItem('objetoAmarillo');
  
  console.log('Objeto eliminado de localStorage');
}
/* *************************************************************************************************************************************************** */
/* LOGICA AL CREAR EL OBJETO EN LOCAL STORE*/

// Crear una nueva instancia de la clase objetoColores y guardarla en almacenObjetos
function crearYGuardarInstanciaEnAlmacen(clave) {
  // Verificar si la clave ya existe en el almacén
  if (almacenObjetos[clave]) {
    console.warn(`La clave "${clave}" ya existe en el almacén. No se creó una nueva instancia.`);
    return;
  }

  // Crear la nueva instancia
  const nuevaInstancia = new objetoColores();

  // Guardar la instancia en almacenObjetos con la clave proporcionada
  almacenObjetos[clave] = nuevaInstancia;

  // Guardar el almacén actualizado en localStorage
  localStorage.setItem('almacenObjetos', JSON.stringify(almacenObjetos));

  console.log(`Nueva instancia creada y almacenada bajo la clave "${clave}":`, nuevaInstancia);
}

function guardarCambios(nombreClave) {
  if (objetoGlobal) {
    try {
      // Convertir el objeto a una cadena JSON y almacenarlo en localStorage
      localStorage.setItem(nombreClave, JSON.stringify(almacenObjetos));
      console.log(`Cambios guardados bajo la clave: ${nombreClave}`);
    } catch (error) {
      console.error("Error al guardar los cambios en localStorage:", error);
    }
  } else {
    console.warn("No hay una instancia cargada para guardar cambios.");
  }
}

function cargarInstanciaDesdeLocalStorage(nombreClave) {
  const instanciaGuardada = localStorage.getItem(nombreClave);

  if (instanciaGuardada) {
    try {
      objetoGlobal = JSON.parse(instanciaGuardada);
      console.log(`Instancia cargada desde la clave "${nombreClave}":`, objetoGlobal);  
    } catch (error) {
      console.error("Error al parsear la instancia desde localStorage:", error);
      objetoGlobal = null;
    }
  } else {
    console.warn(`No se encontró ninguna instancia bajo la clave "${nombreClave}".`);
  }
}
document.getElementById('nombreCliente').addEventListener('input', function() {
  this.value = this.value.toLowerCase(); // convierte a minusculas
});
function vaciarTodoAlmacenObjetos() {
  localStorage.clear(); // Borra todo el contenido de localStorage
  console.log("Todos los objetos han sido eliminados del almacenamiento local.");
}


document.getElementById('btn1').addEventListener('click', () => {

  // Capturar el valor del input
  let inputNombre = document.getElementById('nombreCliente').value.trim();
  if (inputNombre === '') {
    mostrarVentanaEmergente('Por favor, ingrese un nombre válido');
    return;
  }
  // Capitalizar la primera letra de cada palabra
  inputNombre = capitalizarTexto(inputNombre);
  if (almacenObjetos[inputNombre]) {
    mostrarVentanaEmergente('Ya existe un perfil con este nombre');
    return;
  }
  // Crear una nueva instancia de la clase objetoColores
  const nuevoObjeto = new objetoColores();
 
  // Almacenar el objeto en el almacén bajo el nombre del input
  almacenObjetos[inputNombre] = nuevoObjeto;
  // Crear un nuevo objeto ordenado alfabéticamente por las claves
  const almacenObjetosOrdenado = Object.keys(almacenObjetos)
    .sort() // Ordenar las claves alfabéticamente
    .reduce((obj, key) => {
      obj[key] = almacenObjetos[key]; // Reconstruir el objeto con las claves ordenadas
      return obj;
    }, {});
  // Actualizar el almacén con el objeto ordenado
  almacenObjetos = almacenObjetosOrdenado;
  // Guardar el objeto ordenado en localStorage
  localStorage.setItem('almacenObjetos', JSON.stringify(almacenObjetos));
  // Notificar al usuario
  console.log(`Perfil "${inputNombre}" creado y almacenado.`);
  console.log("Objeto almacenado en la variable global:", objetoGlobal);
  console.log(almacenObjetos);
  // Mostrar mensaje de éxito
  mostrarVentanaEmergente('Perfil creado y almacenado');
  // Limpiar el input
  document.getElementById('nombreCliente').value = '';
  // Recuperar y mostrar el almacén desde localStorage
  const almacenJSON = localStorage.getItem('almacenObjetos');
  if (almacenJSON) {
    const almacenRecuperado = JSON.parse(almacenJSON);
    console.log("Almacén de Objetos:", "almacenObjetos"); // Nombre del almacén 
    Object.keys(almacenRecuperado).forEach(nombreObjeto => {
      console.log(`- Objeto: ${nombreObjeto}`); // Nombre del objeto
      const propiedades = Object.keys(almacenRecuperado[nombreObjeto]);
      console.log("  Propiedades principales:", propiedades.join(", "));
    });
    console.log('VARIABLE GLOBAL CON JSON :', JSON.stringify(objetoGlobal, null, 2));
    console.log('VARIABLE GLOBAL SIN JSON :', objetoGlobal);
  } else {
    console.log("No se encontraron objetos almacenados en el localStorage.");
  }
  restablecerClick(['.butt-perfiles'])
});


/* document.querySelector('#salir-frm').addEventListener('click', () =>{ 
  ocultarElemento('.formulario')
  document.querySelector('#unit-job-track').style.display='flex'
  const conteJobTrack = document.querySelector('#job-files')
  conteJobTrack.classList.add('move-job-track')
  document.querySelector('#nombreCliente').value = '';
  document.querySelectorAll('.datos-base').forEach((elemento) => { 
    elemento.textContent = ''
  });    
  setTimeout(() => {
    mostrarElemento('.files-job')
  }, 500);
}) */

// Función para capitalizar la primera letra de cada palabra
function capitalizarTexto(texto) {
  return texto.replace(/\b\w/g, char => char.toUpperCase());
}

// Función para actualizar y mostrar la lista de nombres
function actualizarListaNombres() {
  const listaNombresContainer = document.getElementById('listaNombresContainer');  
  // Limpiar el contenedor antes de actualizarlo
  listaNombresContainer.innerHTML = '';

  // Obtener los nombres del almacén y ordenarlos alfabéticamente
  const nombresOrdenados = Object.keys(almacenObjetos)
    .sort(); // Ordenar alfabéticamente

  // Iterar sobre los nombres ordenados y mostrarlos en el contenedor
  nombresOrdenados.forEach(nombre => {
    const nombreDiv = document.createElement('div');
    nombreDiv.textContent = nombre; // Mostrar el nombre con formato
    nombreDiv.classList.add('elemento-objeto'); // Agregar clase para estilos o identificación

    // Agregar evento de clic al elemento dinámico
    nombreDiv.addEventListener('click', () => {
      resaltarElemento(nombreDiv);
    });

    listaNombresContainer.appendChild(nombreDiv);
  });
}
// Función para resaltar un elemento y ocultar los demás
function resaltarElemento(elementoClicado) {
  const listaNombresContainer = document.getElementById('listaNombresContainer');
  const nombresDivs = Array.from(listaNombresContainer.querySelectorAll('.elemento-objeto'));

  // Quitar el color de fondo y mostrar todos los elementos primero
  nombresDivs.forEach(div => {
    div.style.backgroundColor = ''; // Restaurar el color original
    div.style.color = ''; // Restaurar el color del texto
    div.style.display = 'block'; // Mostrar todos los elementos
  });

  // Aplicar el color azul de fondo al elemento clicado
  elementoClicado.style.backgroundColor = 'blue';
  elementoClicado.style.color = 'white';

  // Ocultar todos los demás elementos
  nombresDivs.forEach(div => {
    if (div !== elementoClicado) {
      div.style.display = 'none'; // Ocultar los demás
    }
   });
  document.querySelector('#filtroNombres input').value = '';
}

/* *************************************************************************************************************************************************** */
/* *************************************************************************************************************************************************** */
/* LOGICA PARA ADMINISTRAR EL objetoGlobal */
function cargarObjetoGlobalDesdeLocalStorage() {
  const datosObjetoGlobal = localStorage.getItem('objetoGlobal');
  if (datosObjetoGlobal) {
    try {
      objetoGlobal = JSON.parse(datosObjetoGlobal); // Carga objetoGlobal desde localStorage
      console.log('objetoGlobal cargado desde localStorage:', objetoGlobal);
    } catch (error) {
      console.error('Error al cargar objetoGlobal desde localStorage:', error);
    }
  } else {
    console.warn('No se encontraron datos de objetoGlobal en localStorage.');
  }
}
function guardarCambiosGeneralesEnAlmacen() {
  try {
    localStorage.setItem('almacenObjetos', JSON.stringify(almacenObjetos));
    console.log('Todos los cambios en almacenObjetos guardados en localStorage.');
  } catch (error) {
    console.error('Error al guardar almacenObjetos en localStorage:', error);  
  }
}

/* *************************************************************************************************************************************************** */

// Función para mostrar la ventana emergente
function mostrarVentanaEmergente(mensaje) {
  const ventanaEmergente = document.getElementById('ventanaEmergente');
  const mensajeEmergente = document.getElementById('mensajeEmergente');
  mensajeEmergente.textContent = mensaje;
  ventanaEmergente.classList.remove('oculta');
}







// Manejar el cierre de la ventana emergente
document.getElementById('cerrarEmergente').addEventListener('click', () => {
  const mensajeEmergente = document.getElementById('mensajeEmergente');

  if(mensajeEmergente.textContent ==='Perfil creado y almacenado'){
    document.getElementById('ventanaEmergente').classList.add('oculta');
    document.querySelector('#unit-job-track').style.display='flex'
    const conteJobTrack = document.querySelector('#job-files')
    conteJobTrack.classList.add('move-job-track')
    document.querySelector('#nombreCliente').value = '';
    document.querySelectorAll('.datos-base').forEach((elemento) => { 
    elemento.textContent = ''
    }); 
    desactivarClick(['.butt-perfiles'])
    restablecerClick(['.cont-vacio'])
    setTimeout(() => {
      ocultarElemento('.formulario')
    }, 200);   
    setTimeout(() => {
      mostrarElemento('.files-job')
      document.getElementById('nombreCliente').focus();
      document.getElementById('nombreCliente').value = ''
    }, 700);

  }else{
    document.getElementById('ventanaEmergente').classList.add('oculta');
    document.getElementById('nombreCliente').focus();
    document.getElementById('nombreCliente').value = ''
  }
});

function borrarEnsayos(){
  let acumular = objetoAmarillo.nivelTinta.length;
  acumular = ''
  const leds = document.querySelectorAll('.leds, .led, .led-general, .lineas-tinta, .lineas-solucion, .divs-grales-tinta-magenta');
  contadorTinta.textContent = ''
  // Iterar sobre los LEDs y borrar propiedades
  leds.forEach(led => {
    led.style.backgroundColor = ''; // Restablecer color visual
    led.dataset.color = ''; // Limpiar dataset asociado
  });
}

function crearBotonResta(color, linea1, linea2, linea3) {
  const contenedorPrincipal = document.getElementById('columna-30');
  const botonesResta = [];

  const indexarElements = document.querySelectorAll('.indexar');

  for (let i = 1; i <= 22; i++) {
    const elementoResta = document.createElement('div');
    elementoResta.classList.add('linea-control', 'resta');
    elementoResta.id = `bot-resta-${i}`;
    contenedorPrincipal.appendChild(elementoResta); 
    botonesResta.push(elementoResta);

    elementoResta.addEventListener("mousedown", () => {
      if(!flagAplicacion){
        alertaBotones.style.display = 'flex'
        alertaBotones.style.backgroundColor = verde
        alertaBotones.style.color = 'black'
        alertaBotones.style.top='20vh'
        desactivarClicEnElementos(buttSelector,buttSelector,buttsPerfiles,buttsControl ,buttsColores,buttSuma,buttResta);
        setTimeout(() => {
          alertaBotones.style.backgroundColor = ''  
          alertaBotones.style.color = ''  
        }, 500);
      }else{
        const numeroBoton = elementoResta.id.match(/\d+/)?.[0]; // Extrae el número del ID
        elementoResta.style.backgroundColor = 'rgb(0, 250, 254)';
        const colorName = getColorName(color);
        const lineaID = `linea-${numeroBoton}`;
        const ledID = `led-${numeroBoton}`;
        const ledGeneral = `grilla-${numeroBoton}`;
        const ledsRuta = `#columna-70 #${lineaID} #display-leds .leds`;
        const ledControlRuta = `#control-perfiles #led-${numeroBoton} .led`;
        const ledGeneralRuta = `#perfil-${colorName} #grilla-${numeroBoton} .led-general`;
        const coleccionLeds = document.querySelectorAll(ledsRuta);
        const coleccionLed = document.querySelectorAll(ledControlRuta);
        const coleccionGeneral = document.querySelectorAll(ledGeneralRuta);
        console.log(' COLORNAME :', colorName)
        // Determinar el índice inicial dinámicamente
        let index = (coleccionLeds.length) - almacenObjetos[objetoGlobal][colorName][linea1][lineaID].length  
        // Iniciar el intervalo
        let intervalID = setInterval(() => {
        if(index === 24) return
          if (index >=0 ) {
            coleccionLeds[index].style.backgroundColor = '';
            coleccionLed[index].style.backgroundColor = '';
            coleccionGeneral[index].style.backgroundColor = '';  

            almacenObjetos[objetoGlobal][colorName][linea1][lineaID].pop()
            almacenObjetos[objetoGlobal][colorName][linea2][ledID].pop()
            almacenObjetos[objetoGlobal][colorName][linea3][ledGeneral].pop()
            
            guardarObjetoEnLocalStorage()
            guardarCambiosGeneralesEnAlmacen()
            index++;
          } else {
            clearInterval(intervalID);
          }
        }, 177);
        const indexarElement = indexarElements[i - 1];
        if (indexarElement) {
          indexarElement.style.color = 'red';
          indexarElement.style.fontSize='1em'
          indexarElement.style.fontWeight = 'bold';
        }

        elementoResta.addEventListener("mouseup", () => {
          const indexarElement = indexarElements[i - 1];
          if (indexarElement) {
            indexarElement.style.color = '';
            indexarElement.style.fontSize=''
            indexarElement.style.fontWeight = '';
          }
          elementoResta.style.backgroundColor = '';
          clearInterval(intervalID);
        });
        elementoResta.addEventListener("mouseleave", () => {
          elementoResta.style.backgroundColor = '';
          clearInterval(intervalID);
        });
      }
    });
  }
}

function renderizarPerfilesTinta(color) {
  const todosLeds = document.querySelectorAll('.led, .leds');
  todosLeds.forEach(led => {
    led.style.backgroundColor = '';
  });

  let informacionBalance; // Variable para almacenar la información de los botones según el color
  let informacionBotones; // Variable para almacenar la información de los botones según el color
  switch(color) {
    case negro:
      informacionBotones = informacionBotonesNegro;
    break;
    case amarillo:
    informacionBotones = informacionBotonesAmarillo;
    break;
    case magenta:        
      informacionBotones = informacionBotonesMagenta;
    break;
    case cian:
      informacionBotones = informacionBotonesCyan;
    break;
    case especial:
      informacionBotones = informacionBotonesNaranja;
    break;
    case barniz:
      informacionBotones = informacionBotonesGris;
    break;  
    default:
    return; // Salir si no hay un color válido
  }
  aplicarColorLeds(informacionBotones, color);
}
function aplicarColorLeds(informacionBotones, color) {
  informacionBotones.forEach((obj, index) => {
    // Seleccionar todos los leds correspondientes a la linea actual
    const displayLedsLinea = document.querySelectorAll(`#linea-${index + 1} #display-leds .leds`);
    const displayLedsSeguidores = document.querySelectorAll(`#control-perfiles #led-${index + 1} .led`);      

    // Recorrer los índices de leds coloreados almacenados en el objeto
    obj.ledsColoreados.forEach((ledIndex) => {
      // Aplicar el color a cada led que se encuentra en el array ledsColoreados
      const led = displayLedsLinea[ledIndex];
      const seguidorLed = displayLedsSeguidores[ledIndex];      
      if (led) {
        led.style.backgroundColor = color; // Cambia 'red' por el color deseado
        led.dataset.color = color;
      }      
      if (seguidorLed) {
        seguidorLed.style.backgroundColor = color;
        seguidorLed.dataset.color = color;
      }
    });
  });
}
document.querySelector('#cont-modificadores span:nth-child(1)').addEventListener('click', () =>{
  let blurPerfiles = document.getElementById('blur-interfaz-perfiles') 
  blurPerfiles.style.display='none'
  resetPerfiles()
  desactivarEventos()
})
document.querySelector('#cont-modificadores span:nth-child(3)').addEventListener('click', () =>{
  var elementosExcluidos = ['interfaz-perfiles','inerfaz-ajuste-fino','perfil-individual','control-perfiles']  
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }  
  
})
function resetPerfiles() {
  resetColor(flagNegro, informacionBotonesNegro, 'negro');
  resetColor(flagCyan, informacionBotonesCyan, 'cyan');
  resetColor(flagMagenta, informacionBotonesMagenta, 'magenta');
  resetColor(flagEspecial, informacionBotonesNaranja, 'especial');
  resetColor(flagBarniz, informacionBotonesGris, 'barniz');
  resetColor(flagAmarillo, informacionBotonesAmarillo, 'yellow');
}
function resetColor(flag, informacionBotones, color) {
  const displaySolucion = document.getElementById('solucion-porcentaje')
  const displayTinta = document.getElementById('tinta-perc')
  if (flag) {
    informacionBotones.forEach(informacion => {
      informacion.ledsColoreados = []; 
      informacion.colorAplicadoContador = 0;
     });
    eliminarColoresConIntervalo(color);
    displaySolucion.textContent = 0 + '%'
    displayTinta.textContent = 0 + '%'
  }
}
//ELIMINA COLOR DE PERFILES
function eliminarColoresConIntervalo(perfil) {
  const dialogoFlotante = document.getElementById('dialogo-flotante'); 
  dialogoFlotante.style.display = 'block';  
  if (currentLinea === 0 && currentIndice === 0) {
    desactivarEventos();
  }
  if (currentLinea < numeroLineas) {
    // Seleccionar elementos de las líneas y perfiles correspondientes
    const lineaActual = document.querySelectorAll(`#linea-${currentLinea + 1} #display-leds .leds`);
    const lineaClon = document.querySelectorAll(`#perfil-${perfil} #grilla-${currentLinea + 1} .led-general`);
    const lineaCopiadora = document.querySelectorAll(`#led-${currentLinea + 1} .led`);
    const colecciones = [lineaActual, lineaClon, lineaCopiadora];
    if (currentIndice < lineaActual.length) {
      colecciones.forEach((coleccion) => {
        const elemento = coleccion[currentIndice];
        if (elemento && elemento.style.backgroundColor !== '') {
          elemento.style.backgroundColor = '';
          elemento.style.border = '';
          elemento.dataset.color = ''; // Limpiar el dataset
        }
      });
      currentIndice++;
      setTimeout(() => eliminarColoresConIntervalo(perfil), 1); // Llamar de nuevo con el mismo perfil
    } else {
      currentLinea++; // Pasar a la siguiente línea
      currentIndice = 0; // Reiniciar el índice para la nueva línea
      setTimeout(() => eliminarColoresConIntervalo(perfil), 1); // Llamar de nuevo con el mismo perfil
    }
  } else {
    // Reactivar los eventos cuando todo ha finalizado
    activarEventos();
    dialogoFlotante.style.display = 'none';
    if(perfil === 'negro'){
    almacenSolucionNegro = []
    almacenTintaNegro = []
    limpiarColores('negro');
    }
    if(perfil === 'cyan'){
      almacenSolucionCyan = []
      almacenTintaCyan = []
    }
    if(perfil === 'magenta'){
      almacenSolucionMagenta = []
      almacenTintaMagenta = []
    }
    if(perfil === 'yellow'){
      almacenSolucionAmarillo = []
      almacenTintaAmarillo = []
    }
    if(perfil === 'especial'){
      almacenSolucionEspecial = []
      almacenTintaEspecial = []
    }
    if(perfil === 'barniz'){
      almacenSolucionBarniz = []
      almacenTintaBarniz = []
    }

    limpiarColores(perfil)
    // Reiniciar variables para futuras ejecuciones
    currentLinea = 0;
    currentIndice = 0;

  }

}
function limpiarColores(perfil) {
  const lineasSolucion = document.querySelectorAll('.lineas-solucion');
  const lineasTinta = document.querySelectorAll('.lineas-tinta');

  lineasTinta.forEach(lineas =>{
    lineas.style.backgroundColor=''
    almacenTintaNegro = []
  })
  lineasSolucion.forEach(lineat =>{
    lineat.style.backgroundColor=''
    almacenSolucionNegro = []
  })

  const inkLines = document.querySelectorAll(`#footer-${perfil} #footer-1 .divs-grales-tinta-${perfil}`);  
  inkLines.forEach(line => {
    line.style.backgroundColor = ''; // Elimina el color de fondo de cada elemento
  });

  const fontLines = document.querySelectorAll(`#footer-${perfil} #footer-2 .divs-grales-solucion-${perfil}`)
  fontLines.forEach(font => {
    font.style.backgroundColor = '';
    font.classList.remove('elemento-agua');
  });    
}
let intervalo = null    
function actualizarSolucion(color) {
  const boranda = document.querySelectorAll('.lineas-solucion');
  switch(color){
    case 'negro':  
        const limit = boranda.length - almacenSolucionNegro.length; // Límite hasta donde se aplicará el color  
        for (let index = boranda.length - 1; index >= limit; index--) {
          boranda[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
        } 
    break
    case 'cyan':
      const limit1 = boranda.length - almacenSolucionCyan.length; // Límite hasta donde se aplicará el color
      for (let index = boranda.length - 1; index >= limit1; index--) {
        boranda[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
      }
    break
    case 'magenta':
      const limit2 = boranda.length - almacenSolucionMagenta.length; // Límite hasta donde se aplicará el color
      for (let index = boranda.length - 1; index >= limit2; index--) {
        boranda[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
      }
    break
    case 'yellow':
      const limit3 = boranda.length - almacenSolucionAmarillo.length; // Límite hasta donde se aplicará el color
      for (let index = boranda.length - 1; index >= limit3; index--) {
        boranda[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
      }
    break
    case 'especial':
      const limit4 = boranda.length - almacenSolucionEspecial.length; // Límite hasta donde se aplicará el color
      for (let index = boranda.length - 1; index >= limit4; index--) {
        boranda[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
      }
    break
    case 'barniz':
      const limit5 = boranda.length - almacenSolucionBarniz.length; // Límite hasta donde se aplicará el color
      for (let index = boranda.length - 1; index >= limit5; index--) {
        boranda[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
      }
    break
  }
} 
function actualizarTinta(color) {
  const coleccionTinta = document.querySelectorAll('.lineas-tinta');
  switch(color){
    case 'negro':
      contadorTinta.textContent = objetoNegro.nivelTinta.length + '%';           
      const limit = coleccionTinta.length - almacenTintaNegro.length; // Límite hasta donde se aplicará el color
      for (let index = coleccionTinta.length - 1; index >= limit; index--) {
        coleccionTinta[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
      }
      const coleccionTintaNegro = document.querySelectorAll('.divs-grales-tinta-negro')
      for (let index = coleccionTintaNegro.length - 1; index >= limit; index--) {
        coleccionTintaNegro[index].style.backgroundColor = negro ; // Aplica el color amarillo simultáneamente
      }
    break
    case 'cyan':
      contadorTinta.textContent = objetoCian.nivelTinta.length + '%';   
      const limit1 = coleccionTinta.length - almacenTintaCyan.length; // Límite hasta donde se aplicará el color
      for (let index = coleccionTinta.length - 1; index >= limit1; index--) {
        coleccionTinta[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
      }
      const coleccionTintaCian = document.querySelectorAll('.divs-grales-tinta-azul')
      for (let index = coleccionTintaCian.length - 1; index >= limit1; index--) {
        coleccionTintaCian[index].style.backgroundColor = negro ; // Aplica el color amarillo simultáneamente
      }
    break
    case 'magenta':
      contadorTinta.textContent = objetoMagenta.nivelTinta.length + '%';   
      const limit2 = coleccionTinta.length - almacenTintaMagenta.length; // Límite hasta donde se aplicará el color
      for (let index = coleccionTinta.length - 1; index >= limit2; index--) {
        coleccionTinta[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
      }
      const coleccionTintaMagenta = document.querySelectorAll('.divs-grales-tinta-magenta')
      for (let index = coleccionTintaMagenta.length - 1; index >= limit2; index--) {
        coleccionTintaMagenta[index].style.backgroundColor = magenta ; // Aplica el color amarillo simultáneamente
      }
    break
    case 'yellow':
      contadorTinta.textContent = objetoAmarillo.nivelTinta.length + '%';   
      const limit3 = coleccionTinta.length - almacenTintaAmarillo.length; // Límite hasta donde se aplicará el color
      for (let index = coleccionTinta.length - 1; index >= limit3; index--) {
        coleccionTinta[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
      }
      const coleccionTintaAmarillo = document.querySelectorAll('.divs-grales-tinta-amarillo')
      for (let index = coleccionTintaAmarillo.length - 1; index >= limit3; index--) {
        coleccionTintaAmarillo[index].style.backgroundColor = amarillo ; // Aplica el color amarillo simultáneamente
      }      
    break
    case 'especial':
      contadorTinta.textContent = objetoEspecial.nivelTinta.length + '%';   
      const limit4 = coleccionTinta.length - almacenTintaEspecial.length; // Límite hasta donde se aplicará el color
      for (let index = coleccionTinta.length - 1; index >= limit4; index--) {
        coleccionTinta[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
      }
      const coleccionTintaEspecial = document.querySelectorAll('.divs-grales-tinta-especial')
      for (let index = coleccionTintaEspecial.length - 1; index >= limit4; index--) {
        coleccionTintaEspecial[index].style.backgroundColor = especial ; // Aplica el color amarillo simultáneamente
      }
    break
    case 'barniz':
      contadorTinta.textContent = objetoBarniz.nivelTinta.length + '%';   
      const limit5 = coleccionTinta.length - almacenTintaBarniz.length; // Límite hasta donde se aplicará el color
      for (let index = coleccionTinta.length - 1; index >= limit5; index--) {
        coleccionTinta[index].style.backgroundColor = 'yellow'; // Aplica el color amarillo simultáneamente
      }
      const coleccionTintaBarniz = document.querySelectorAll('.divs-grales-tinta-barniz')
      for (let index = coleccionTintaBarniz.length - 1; index >= limit5; index--) {
        coleccionTintaBarniz[index].style.backgroundColor = barniz ; // Aplica el color amarillo simultáneamente
      }
    break
  }
}  
const botonesPerfiles = document.querySelectorAll('.butt-perfiles');   
botonesPerfiles.forEach(boton => {
  boton.addEventListener('click', () => {
    botRevertir.style.display='none'
    botonesPerfiles.forEach(b => b.style.backgroundColor = '');
    boton.style.backgroundColor = '#00FF00';
  });
});


let intervalColor;
function alternarColor() {
  const elemento = document.querySelector('#tirada > div:nth-child(13)')   
  
  if (!intervalColor) {
    // Cambia el color inmediatamente
    elemento.style.backgroundColor = 'rgb(0, 255, 0)';
    
    // Inicia el intervalColor para alternar el color
    intervalColor = setInterval(() => {
      if (elemento.style.backgroundColor === 'rgb(0, 255, 0)') {
        elemento.style.backgroundColor = 'transparent'; // Cambia a transparente
      } else {
        elemento.style.backgroundColor = 'rgb(0, 255, 0)'; // Cambia a verde
      }
    }, 100);
  } else {
    console.log('El intervalColor ya está en ejecución.');
  }
}


function detenerAlternarColor() {
  if (intervalColor) {
    clearInterval(intervalColor); // Detiene la ejecución del intervalo
    intervalColor = null; // Restablece la variable para poder iniciarlo nuevamente
    document.querySelector('#tirada > div:nth-child(13)').style.backgroundColor = 'transparent'; // Restablece el color
    console.log('Alternancia de color detenida.');
  } else {
    console.log('No hay alternancia en ejecución.');
  }
}
// Para detener el intervalColor (si es necesario)
function detenerAlternarColor() {
  const elemento = document.querySelector('#tirada > div:nth-child(13)');  
  if (intervalColor) {
    clearInterval(intervalColor);
    elemento.style.backgroundColor = '';
    intervalColor = null;
    console.log('El intervalColor ha sido detenido.');
  }
}
document.querySelector('#conte-butts-calculadora > div:nth-child(1)').addEventListener('click', ()=>{ 
  const numeros = document.querySelectorAll('.number'); // Selecciona todos los elementos con la clase .number  
  const algunoConContenido = Array.from(numeros).some(numero => numero.textContent.trim() !== '');
  if(alertaCuatro.style.display ==='flex'){
    desactivarClick(['.butt-perfiles', '.estilo-1','.digit']); 
    return
  }
  if (algunoConContenido) {
    alertaCinco.style.display = 'flex'
    desactivarClick(['.butt-perfiles', '.estilo-1','.digit','.digito']); 
    alternarColor()
  }else{
    restablecerClick(['.estilo-1','.digit']);   
    const calculadora = document.getElementById('calculadora') 
    calculadora.classList.add('move-calculadora')
  }
}) 
                                            
const coleccionNumeros = [];
const contenedorResultado = document.querySelector('#resultado-calculadora');
const spansNumeros = contenedorResultado.querySelectorAll('.number');
const contenedorCantidad = document.querySelector('#display-cantidad')
const spansCantidades = contenedorCantidad.querySelectorAll('.cantidad-display'); 
const digitos = document.querySelectorAll('.digit');  
const buttsPerfiles = document.querySelectorAll('.butt-perfiles');
const buttsAguaGral = document.querySelectorAll('.mod-tinta');
const buttsAguaSingle = document.querySelectorAll('.div-ctrl');
const buttSelector = document.querySelectorAll('.butt-selector')
const buttSuma = document.querySelectorAll('.linea-control')
const buttResta = document.querySelectorAll('.resta')
const buttsClientes = document.querySelectorAll('.estilo-1');
const calculadora = document.getElementById('calculadora')
const alertaTres = document.getElementById('alerta-tres')
const alertaCuatro = document.getElementById('alerta-cuatro')  
const alertaCinco = document.getElementById('alerta-cinco')
const alertaSeis = document.getElementById('alerta-seis')
const alertaSiete = document.getElementById('alerta-siete')
const alertaOcho = document.getElementById('alerta-ocho')
let alertaNueve = document.querySelector('#alerta-nueve')

const buttsJobs = document.querySelectorAll('.base-datos');

buttsJobs.forEach(boton => {
  let panelUno = document.getElementById('panel-uno')
  let panelDos = document.getElementById('panel-dos')  
  boton.addEventListener('click', () => {
    switch(boton.id) {
      case 'clientes':      
        document.querySelectorAll('.butt-perfiles').forEach(elemento => {   
          elemento.style.display = 'block'; 
        });
        botRevertir.style.display='block'
        let listaClientes = document.querySelector('#lista-clientes')  
        listaClientes.style.top='43vh'
        limpiarColoresDeFondo()
        desactivarClick(['.butt-perfiles', '.estilo-1']);  
        listaClientes.style.display = 'block'
        mostrarNombresDeObjetos();  
        setTimeout(() => {
          if (listaClientes && listaClientes.children.length === 0) {
            alertaCuatro.style.display='flex'
            alertaCuatro.style.top = '30vh'       
            alertaCuatro.textContent= 'El almacenamiento y la base de datos estan vacíos'   
          }
      }, 50);      
      break;
      case 'lineas':
        let lineaClientes = document.querySelector('#lista-lineas')
        lineaClientes.style.top='57vh'
        lineaClientes.style.height = '39vh'
        desactivarClick(['.butt-perfiles', '.estilo-1']);
        if(panelUno.textContent === ''){alertaTres.style.display = 'flex';} 
        else{
          document.querySelector('#lista-lineas').style.display = 'block'
          document.querySelector('#lista-clientes').style.display = 'none'
        }
      break;
      case 'tirajes':
        desactivarClick(['.butt-perfiles', '.estilo-1']);
        restablecerClick(['.digito'])
        if(panelUno.textContent === '' || panelDos.textContent === ''){  
          alertaTres.style.display = 'flex';
        }else{          
          calculadora.classList.remove('move-calculadora')
          calculadora.classList.remove('move-calculadora-1')
          setTimeout(() => {
            calculadora.classList.add('move-calculadora-1') 
          }, 100);
        }
        coleccionNumeros.length = 0;
        actualizarDisplay(); 
      break;  
    } 
  });
});

function actualizarDisplay() {
  document.querySelectorAll('#resultado-calculadora .number, #display-cantidad .cantidad-display').forEach(elemento => elemento.textContent = '');
}

const listadoClientes = document.querySelectorAll('#lista-clientes > div');
const arriba = document.querySelector('#job-files > div:nth-child(1) > span:nth-child(2)');
listadoClientes.forEach(cliente => {
  cliente.addEventListener('click', () => {
    arriba.textContent = cliente.textContent;
    document.querySelector('#lista-clientes').style.display = 'none'
    restablecerClick(['.butt-perfiles', '.estilo-1']);
  });
});

const listaLineas = document.querySelectorAll('#lista-lineas > div');
const panelDos = document.getElementById('panel-dos');
const destinoLinea = document.querySelector('#job-files > .jobs:nth-child(2) > .base-datos:nth-child(2)');  
listaLineas.forEach(linea => {
  linea.addEventListener('click', () => {
    panelDos.style.backgroundColor='rgb(0,0,23)'
    panelDos.style.color='rgb(200,200,200)'
    destinoLinea.textContent = linea.textContent;
    document.querySelector('#lista-lineas').style.display = 'none';  
    restablecerClick(['.jobs', '.estilo-1']);
  });
});
digitos.forEach((elemento) => {
  elemento.addEventListener('click', () => {
    // Desactiva temporalmente los clics en los botones
    digitos.forEach(d => d.style.pointerEvents = 'none');  

    const spans = document.querySelectorAll('.datos-base');

    // Verifica el estado de los spans y lanza las alertas correspondientes
    if ([...spans].every(span => span.textContent.trim() === '')) {
      alertaTres.style.display = 'flex';
      desactivarClicEnElementos(digitos, buttsPerfiles, buttsClientes);
    } else if (spans[0].textContent.trim() === '') {
      document.getElementById('alerta-uno').style.display = 'flex';
      desactivarClicEnElementos(digitos, buttsPerfiles, buttsClientes);
    } else if (spans[1].textContent.trim() === '') {
      document.getElementById('alerta-dos').style.display = 'flex';
      desactivarClicEnElementos(digitos, buttsPerfiles, buttsClientes);
    } else {
      const numero = parseInt(elemento.textContent); // Convertir el contenido del botón a número
      if (!isNaN(numero)) { // Solo agregar si es un número válido      
        // Verificar si el array ya tiene 10 elementos
        if (coleccionNumeros.length >= 10) {
          // Reactiva los clics y termina la ejecución si ya hay 10 elementos
          digitos.forEach(d => d.style.pointerEvents = 'auto');
          return;
        }
        coleccionNumeros.push(numero); // Agregar el nuevo número
        // Limpiar ambos conjuntos de spans antes de mostrar los números actualizados
        spansNumeros.forEach(span => span.textContent = '');
        spansCantidades.forEach(span => span.textContent = '');
        // Mover los números del array a los spans de derecha a izquierda
        for (let i = 0; i < coleccionNumeros.length; i++) {
          spansNumeros[spansNumeros.length - coleccionNumeros.length + i].textContent = coleccionNumeros[i];
          spansCantidades[spansCantidades.length - coleccionNumeros.length + i].textContent = coleccionNumeros[i];
        }
      }
    }

    // Reactivar los clics después del evento
    setTimeout(() => {
      digitos.forEach(d => d.style.pointerEvents = 'auto');  
    }, 200);
  });
});
alertaTres.addEventListener('click', ()=> {
  restablecerClick(['.butt-perfiles', '.estilo-1']);
})
alertaCuatro.addEventListener('click', ()=> {
  restablecerClick(['.estilo-1','.digit', '.estilo-2']);
  desactivarClick(['.butt-perfiles'])
  restablecerClick(['.cont-vacio'])
})
alertaCinco.addEventListener('click', ()=> {
  restablecerClick(['.estilo-1','.digit','.digito']);
  detenerAlternarColor()
})
document.getElementById('alerta-seis').children[2].addEventListener('click', () => {
  alertaSeis.classList.add('move-alerta')
  restablecerClick(['.mod-tinta','.div-ctrl','.butt-perfiles', '.butt-selector', '.cabeza', '.estilo-1', '.digit', '.digito']);
  setTimeout(() => {
    alertaSeis.classList.remove('move-alerta')
    alertaSeis.style.display='none'
  }, 700);
});



document.querySelector('#perfil-existe').addEventListener('click', () => {
  ["panel-uno", "panel-dos"].forEach(id => document.getElementById(id)?.removeAttribute("style"));
  alertaSeis.classList.add('move-alerta')
  const conteJobTrack = document.querySelector('#job-files')
  conteJobTrack.classList.remove('move-job-track')
  var elementosExcluidos = ['simulador','unit-job-track','interfaz-perfiles','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5','spn-blur-6','spn-blur-7']  
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'    
    }
  }
  container1.style.display = 'none'
  document.querySelectorAll('.butt-perfiles').forEach(elemento => {
    elemento.style.display = 'block';
  });
  conteJobTrack.style.display='flex'
  document.querySelectorAll('.datos-base').forEach((elemento) => {
    elemento.textContent = ''
  });
   setTimeout(() => {
    conteJobTrack.classList.add('move-job-track') 
  }, 100); 
  setTimeout(() => {
    alertaSeis.style.display='none'
    alertaSeis.classList.remove('move-alerta')
    restablecerClick(['.cont-vacio', '.mod-tinta', '.div-ctrl','.base-datos'])
  }, 1000);
}) 








document.querySelector('#perfil-crear').addEventListener('click', () => {
  ["panel-uno", "panel-dos"].forEach(id => document.getElementById(id)?.removeAttribute("style"));
  alertaSeis.classList.add('move-alerta')  
  var elementosExcluidos = ['simulador','butt-perfil-tinta', 'butt-control-tinta', 'butt-perfil', 'butt-job-track', 'boton-perfiles', 'interfaz-perfiles','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5','spn-blur-6','spn-blur-7']  
  for (var i = 0; i < allContenedores.length; i++) {
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
    }
  } 
  container1.style.display = 'none'
  document.querySelectorAll('.butt-perfiles').forEach(elemento => {
    elemento.style.display = 'block';
  });
  setTimeout(() => {
    desactivarClick(['.butt-perfiles'])
    restablecerClick(['.cont-vacio', '.mod-tinta', '.div-ctrl','.base-datos'])
  }, 50);
  setTimeout(() => {
    moverFormulario()
    document.getElementById('nombreCliente').focus();
    document.getElementById('nombreCliente').value = ''
  }, 200);   
})
const alertasVacios = document.querySelectorAll('.alerta-vacio');
const alertaNormal = document.querySelectorAll('.alerta-normal');
alertasVacios.forEach((alerta) => {
  alerta.addEventListener('click', () => {
    alertasVacios.forEach((alertaItem) => {
      alertaItem.style.backgroundColor = verde
      alertaItem.style.color = 'black'
      setTimeout(() => {
        alertaItem.style.display = 'none';
        alertaItem.style.backgroundColor = ''
        alertaItem.style.color = ''  
      }, 200);
    });
    reactivarClicEnElementos(digitos, buttsPerfiles, buttsClientes);
    calculadora.classList.add('move-calculadora');
  });
});
alertaNormal.forEach((alerta) => {
  alerta.addEventListener('click', () => {
    alertaNormal.forEach((alertaItem) => {
      alertaItem.style.backgroundColor = verde
      alertaItem.style.color = 'black'
      setTimeout(() => {
        alertaItem.style.display = 'none';
        alertaItem.style.backgroundColor = ''
        alertaItem.style.color = ''  
      }, 200);
    });
    reactivarClicEnElementos(digitos, buttsClientes);
  });
});
document.querySelector('#tirada > div:nth-child(12)').addEventListener('click', () => {
  coleccionNumeros.length = 0;
  actualizarDisplay();  
  detenerAlternarColor();
});

document.querySelector('#tirada > div:nth-child(13)').addEventListener('click', () => {
  desactivarClick(['.butt-perfiles','.digit', '.estilo-1','digito']);

  detenerAlternarColor()
  const elementos = document.querySelectorAll('.number');
  const todosVacios = Array.from(elementos).every(elemento => elemento.textContent.trim() === ''); 
  console.log(document.querySelectorAll('.digito'));
  if (todosVacios) {
    alertaCuatro.style.display = 'flex'
    alertaCuatro.style.left = '27.4vw'
    alertaCuatro.style.top = '59.5vh'
    desactivarClick(['.butt-perfiles','.digit', '.estilo-1']);
  }else{
    document.querySelectorAll('.butt-perfiles, .btn-respaldo').forEach(elemento => {  
      elemento.style.display = 'none';
    }); 
  
    coleccionNumeros.length = 0;        
    document.querySelectorAll('#resultado-calculadora .number').forEach(elemento => elemento.textContent = '');
    calculadora.classList.add('move-calculadora')
    setTimeout(() => {
      
      irAconsola.style.display='block'
    }, 1000); 
    setTimeout(() => {
      if(document.querySelector('#alerta-cuatro').style.display === 'flex'){
        document.querySelector('#alerta-cuatro').style.display='none'
      }
    }, 1550); 
    setTimeout(() => {
      desactivarClick(['.butt-perfiles'])    
    }, 1700);
  }
});



function sumarPorcentaje() {
  // Obtener el valor actual del contador (remover el símbolo '%')
  let porcentajeCurrent = parseInt(contadorTinta.textContent.replace('%', ''), 10);

  // Sumar 1 al porcentaje
  porcentajeCurrent = porcentajeCurrent + 1;

  // Si el porcentaje supera 100, igualarlo a 100
  if (porcentajeCurrent > 100) {
    porcentajeCurrent = 100;
  }

  // Actualizar el texto del contador con el nuevo valor y el símbolo '%'
  contadorTinta.textContent = porcentajeCurrent + '%';

  // Para depuración (opcional)
  console.log('Nuevo porcentaje:', porcentajeCurrent + '%');
}
function borrarEnsayo() {
  // Definir las rutas de las tres colecciones
  const rutas = [
      '.led-general .leds .led', // General
      '#columna-70 .leds',      // Columna 70
      '#control-perfiles .led', // Control perfiles
      '#perfiles-entintado .led-general' // Perfiles entintado
  ];

  let totalRestaurados = 0; // Contador de elementos restaurados

  // Iterar sobre cada ruta y restaurar los colores
  rutas.forEach(ruta => {
      const elementos = document.querySelectorAll(ruta);

      if (elementos.length > 0) {
          elementos.forEach(led => {
              led.style.backgroundColor = 'transparent'; // Restaurar a color predeterminado
          });

          totalRestaurados += elementos.length;
          console.log(`Se restauraron ${elementos.length} elementos de la ruta '${ruta}'.`);
      } else {
          console.warn(`No se encontraron elementos en la ruta '${ruta}'.`);
      }
  });

  console.log(`En total se restauraron ${totalRestaurados} elementos.`); 
  console.log('OBJETO GLOBAL', objetoGlobal);
}
   
//APLICA A leds, led, grilla
function muestraRenderObjetoGlobal(objeto, color, propiedad, propiedadII, propiedadIII, propiedadIV, propiedadV, propiedadVI, footer, foot){
  // Mapeo de nombres de colores a valores CSS válidos
  const colorMap = {
    negro: 'black',
    amarillo: 'yellow',
    rojo: 'red',
    azul: 'blue',
    verde: 'green',
    gris: 'rgb(200,200,200)',
    barniz: 'rgb(200,200,200)', 
    especial: 'rgb(255,130,0)',   
  };
  // Convertir el valor del parámetro `color` al correspondiente CSS
  const colorCSS = colorMap[color] || color; // Si no existe en el mapa, usar el valor directamente
  let displayTinta = document.querySelector('#ctrl-gral .div-ctrl #tinta-perc');
  let displaySolucion = document.querySelector('#ctrl-gral .div-ctrl #solucion-porcentaje');  
  let displayTintaGral = document.querySelector(`#gral-display-${color}`)
  let displaySolucionGral = document.querySelector(`#display-general-${color}`)
  displaySolucion.textContent = almacenObjetos[objetoGlobal][color].nivelAgua.length + '%';
  displayTinta.textContent = almacenObjetos[objetoGlobal][color].nivelTinta.length + '%';
  // Primera iteración: Aplicar lógica a `#columna-70`
  for (let i = 1; i <= 22; i++) {
    const rutaEntrega = almacenObjetos[objeto][color][propiedad];    
    if (!rutaEntrega) {
      console.error(`No se encontró la propiedad '${propiedad}' en el color '${color}'.`);
      return;
    } 
    const lineaKey = `linea-${i}`;
    const linea = rutaEntrega[lineaKey];  
    if (linea) {
      const rutaRecibe = document.querySelectorAll(`#columna-70 #${lineaKey} #display-leds .leds`);
      if (rutaRecibe.length > 0) {
        for (let index = rutaRecibe.length - 1, count = 0; count < linea.length && index >= 0; index--, count++) {
          rutaRecibe[index].style.backgroundColor = rojo; // Aplicar el color CSS
        }
      }
    }
  }
  // Segunda iteración: Aplicar lógica a `#control-perfiles`
  for (let i = 1; i <= 22; i++) {
    const rutaEntregaII = almacenObjetos[objeto][color][propiedadII];    
    if (!rutaEntregaII) {
      console.error(`No se encontró la propiedad '${propiedadII}' en el color '${color}'.`);
      return;
    } 
    const lineaKey = `led-${i}`;
    const lineaSigue = rutaEntregaII[lineaKey];

    if (lineaSigue) {
      const rutaSigue = document.querySelectorAll(`#control-perfiles #led-${i} .led`);
      if (rutaSigue.length > 0) {
        for (let index = rutaSigue.length - 1, count = 0; count < lineaSigue.length && index >= 0; index--, count++) {
          rutaSigue[index].style.backgroundColor = colorCSS; // Aplicar el color CSS
        }
      }
    }
  }
  // Tercera iteración: Aplicar lógica a `#perfiles-entintado`
  for (let i = 1; i <= 22; i++) {
    const rutaEntregaIII = almacenObjetos[objeto][color][propiedadIII];
    if (!rutaEntregaIII) {
      console.error(`No se encontró la propiedad '${propiedadIII}' en el color '${color}'.`);
      return;
    } 
    const lineaKey = `grilla-${i}`;
    const linea = rutaEntregaIII[lineaKey];
    if (linea) {
      const rutaClona = document.querySelectorAll(`#perfiles-entintado #perfil-${color} #grilla-${i} .led-general`);
      if (rutaClona.length > 0) {
        for (let index = rutaClona.length - 1, count = 0; count < linea.length && index >= 0; index--, count++) {
          rutaClona[index].style.backgroundColor = colorCSS; // Aplicar el color CSS
        }
      } 
    }
  }  
  // Cuarta iteración: Aplicar lógica a `#tanque-tinta y tanque general`
  for (let i = 1; i <= 100; i++) {
    const rutaEntregaIII = almacenObjetos[objetoGlobal][color][propiedadV];
    if (!rutaEntregaIII) {
      console.error(`No se encontró la propiedad '${propiedadV}' en el color '${color}'.`); 
      return;
    }
    const rutaClona = document.querySelectorAll(`#ctrl-gral #tanque-tinta .lineas-tinta`);
    const rutaClonaGral = document.querySelectorAll(`#footer-perfiles #footer-${color} #footer-${footer} .divs-grales-tinta-${color}`);
    if (rutaClona.length > 0) {
      const elementosAColorear = rutaEntregaIII.length;
      for (let index = rutaClona.length - 1; index >= rutaClona.length - elementosAColorear; index--) {          
        if (index >= 0 && index < rutaClona.length) { // Verificar que el índice es válido
          rutaClona[index].style.backgroundColor = amarillo; // Aplicar el color CSS
        }
      }
    }
    if (rutaClonaGral.length > 0) {
      const elementosAColorear = rutaEntregaIII.length;
      for (let index = rutaClonaGral.length - 1; index >= rutaClonaGral.length - elementosAColorear; index--) {          
        if (index >= 0 && index < rutaClonaGral.length) { // Verificar que el índice es válido
          rutaClonaGral[index].style.backgroundColor = colorCSS;
        }
      }
    }else{console.log()}
  }  
  // Quinta iteración: Aplicar lógica a `#tanque-agua y tanque general`  
  for (let i = 1; i <= 100; i++) {
    const rutaEntregaIII = almacenObjetos[objetoGlobal][color][propiedadVI];
    if (!rutaEntregaIII) {
      console.error(`No se encontró la propiedad '${propiedadVI}' en el color '${color}'.`);
      return;
    }
    const rutaClona = document.querySelectorAll(`#ctrl-gral #tanque-solucion .lineas-solucion`);
    const rutaClonaGral = document.querySelectorAll(`#footer-perfiles #footer-${color} #footer-${foot} .divs-grales-solucion-${color}`);
    if (rutaClona.length > 0) {
      const elementosAColorear = rutaEntregaIII.length;
      for (let index = rutaClona.length - 1; index >= rutaClona.length - elementosAColorear; index--) {          
        if (index >= 0) { // Asegurarnos de no acceder a índices negativos
          rutaClona[index].style.backgroundColor = amarillo; // Aplicar el color CSS
        }
      }
    }
    if (rutaClonaGral.length > 0) {
      const elementosAColorear = rutaEntregaIII.length;
      for (let index = rutaClonaGral.length - 1; index >= rutaClonaGral.length - elementosAColorear; index--) {          
        if (index >= 0) { // Asegurarnos de no acceder a índices negativos
          rutaClonaGral[index].style.backgroundColor = verdeAgua;
        }
      }  
    }
  }
  setTimeout(() => {
    displayTintaGral.textContent = almacenObjetos[objetoGlobal][color].nivelTinta.length + '%';
    displayTintaGral.style.top = 87 - (almacenObjetos[objetoGlobal][color].nivelTinta.length) + '%';
    displaySolucionGral.textContent = almacenObjetos[objetoGlobal][color].nivelAgua.length + '%';
    displaySolucionGral.style.top = 87 - (almacenObjetos[objetoGlobal][color].nivelAgua.length) + '%';     
    const elementos = document.querySelectorAll('.div-gral, .div-agua');
    elementos.forEach(elemento => {
    elemento.style.color = ''
    });
  }, 1000);
}
function eliminarColores(){
  const lineasSolucion = document.querySelectorAll('.lineas-solucion');
  const lineasTinta = document.querySelectorAll('.lineas-tinta');
  const lineasLeds = document.querySelectorAll('.leds');
  const lineasLed = document.querySelectorAll('.led');
  for (let i = 0; i < lineasSolucion.length; i++) {
    lineasSolucion[i].style.backgroundColor = '';
  }
  for (let i = 0; i < lineasTinta.length; i++) {
    lineasTinta[i].style.backgroundColor = '';
  }
  for (let i = 0; i < lineasLeds.length; i++) {
    lineasLeds[i].style.backgroundColor = '';
  }
  for (let i = 0; i < lineasLed.length; i++) {
    lineasLed[i].style.backgroundColor = '';
  } 


}
/* ********************************************************************************************************************************************************** */
function desactivarClick(classElements) {
  if (!Array.isArray(classElements)) {
    console.error('El parámetro debe ser un array de selectores.');
    return;
  }
  classElements.forEach(selector => {
    const botones = document.querySelectorAll(selector);
    botones.forEach(boton => {
      boton.style.pointerEvents = 'none'; // Bloquea eventos de clic
    });
  });
}
 function restablecerClick(classElements) { 
  if (!Array.isArray(classElements)) {
    console.error('El parámetro debe ser un array de selectores.');
    return;
  }

  classElements.forEach(selector => {
    const botones = document.querySelectorAll(selector);
    botones.forEach(boton => {
      boton.style.pointerEvents = 'auto'; // Reactiva eventos de clic
      boton.style.opacity = '1'; // Restaura la apariencia
    });
  });
}  
function bloquearClick(event) {
  if (event.currentTarget.dataset.clickDisabled === 'true') {
    event.stopPropagation();
    event.preventDefault();
    console.log('Click desactivado en:', event.currentTarget); 
  }
} 
/* ********************************************************************************************************************************************************** */
function limpiarColoresDeFondo() {
  // Lista de clases a recorrer
  const clases = ['.led-general', '.clase-dos', '.led', '.leds', '.lineas-tinta', '.lineas-solucion'];

  // Recorrer cada clase
  clases.forEach(clase => {
    // Seleccionar todos los elementos con la clase actual
    const elementos = document.querySelectorAll(clase);

    // Recorrer los elementos seleccionados
    elementos.forEach(elemento => {
      elemento.style.backgroundColor = ''; // Eliminar el color de fondo
    });
  });

  console.log('Colores de fondo eliminados para las clases:', clases.join(', '));
}
function mostrarNombresDeObjetos() {
  flagAplicacion = true;

  // Recuperar el objeto almacenado en localStorage
  const almacenJSON = localStorage.getItem('almacenObjetos');
  if (almacenJSON) {
    const almacenRecuperado = JSON.parse(almacenJSON);
    const almacenCapitalizado = {};

    // Capitalizar los nombres y reconstruir el objeto
    Object.keys(almacenRecuperado).forEach(nombreObjeto => {
      const nombreCapitalizado = capitalizarTexto(nombreObjeto);
      almacenCapitalizado[nombreCapitalizado] = almacenRecuperado[nombreObjeto];
    });

    // Sobrescribir almacenObjetos en localStorage con los nombres capitalizados
    localStorage.setItem('almacenObjetos', JSON.stringify(almacenCapitalizado));

    // Seleccionar el contenedor de la lista
    listaClientes.innerHTML = '';

    // Crear un contenedor para el menú contextual
    const menuContextual = document.createElement('div');
    menuContextual.id = 'menu-contextual';
    document.body.appendChild(menuContextual);

    // Agregar opciones al menú contextual
    const opcionesMenu = ['Editar', 'Ver detalles', 'Eliminar'];
    opcionesMenu.forEach(opcion => {
      const menuItem = document.createElement('div');
      menuItem.className = 'opcion';
      menuItem.textContent = opcion;
      menuItem.style.cursor = 'pointer';
      menuItem.style.padding = '5px';
      menuItem.addEventListener('click', () => {
        menuContextual.style.display = 'none';

        if (opcion === 'Eliminar') {
          eliminarObjeto(menuContextual.dataset.nombreObjeto);  
        } else if (opcion === 'Editar') {
          editarObjeto(menuContextual.dataset.nombreObjeto);
        } else if (opcion === 'Ver detalles') {
          verDetallesObjeto(menuContextual.dataset.nombreObjeto);
        }
      });
      menuContextual.appendChild(menuItem);
      menuContextual.addEventListener('mouseleave', () =>{
        menuContextual.style.display = 'none';
      })

    });
    // Remover cualquier listener anterior para evitar duplicaciones
    document.removeEventListener('contextmenu', bloquearMenuPersonalizado);    
    // Agregar el listener para bloquear el menú del navegador
    document.addEventListener('contextmenu', bloquearMenuPersonalizado);
    document.addEventListener('click', () => {
      menuContextual.style.display = 'none';
    });

    // Recorrer los nombres de los objetos capitalizados
    Object.keys(almacenCapitalizado).forEach(nombreCapitalizado => {  
      const nuevoDiv = document.createElement('div');
      nuevoDiv.className = 'cliente-item';
      nuevoDiv.textContent = nombreCapitalizado;
      nuevoDiv.style.fontSize = '1em';

      nuevoDiv.addEventListener('click', () => {
        restablecerClick(['.estilo-1']);
        const panelUno = document.getElementById('panel-uno');
        const nombreCliente = document.querySelector('.nombre-cliente');
        nombreCliente.textContent = nombreCapitalizado;
        panelUno.textContent = nombreCapitalizado;
        panelUno.style.backgroundColor='rgb(0,0,23)'
        panelUno.style.color='rgb(200,200,200)'
        objetoGlobal = nombreCapitalizado;
        console.log('OBJETO GLOBAL :', objetoGlobal);
        listaClientes.style.display = 'none';
      });

      // Asignar evento 'contextmenu' para el clic derecho
      nuevoDiv.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        menuContextual.style.display = 'block';
        menuContextual.style.left = `${event.pageX}px`;

        const alturaVentana = window.innerHeight;
        const menuAltura = menuContextual.offsetHeight;
        const maxPosY = alturaVentana - menuAltura;
        const posY = Math.min(event.pageY, maxPosY);
        menuContextual.style.top = `${posY}px`;

        menuContextual.dataset.nombreObjeto = nombreCapitalizado;
      });

      listaClientes.appendChild(nuevoDiv);
    });

    console.log('Nombres de objetos mostrados en lista-clientes:', Object.keys(almacenCapitalizado));
  } else {
    console.log("No se encontraron objetos almacenados en localStorage.");
  }
}
function guardarObjetoEnAlmacen(nombreObjeto, datosObjeto) {
  // Capitalizar el nombre antes de guardar
  const nombreCapitalizado = capitalizarTexto(nombreObjeto);

  // Obtener el objeto almacenado en localStorage
  almacenObjetos = JSON.parse(localStorage.getItem('almacenObjetos')) || {};

  // Guardar o actualizar el objeto con el nombre capitalizado
  almacenObjetos[nombreCapitalizado] = datosObjeto;

  // Actualizar el almacenamiento en localStorage
  localStorage.setItem('almacenObjetos', JSON.stringify(almacenObjetos));

  console.log(`Guardado en almacenObjetos:`, almacenObjetos);
}
function eliminarObjeto(nombreObjeto) {
  document.querySelectorAll('.cliente-item').forEach(item => {
    item.style.filter = 'blur(15px)';
  });
  const divEliminacion = document.createElement('div');
  divEliminacion.id = 'alerta-nueve';
  listaClientes.appendChild(divEliminacion);

  // Crear elementos de la alerta
  const spanAnuncio = document.createElement('span');
  const nombreElemento = document.createElement('span');
  const spanConfirmar = document.createElement('span');
  const spanAbandonar = document.createElement('span');

  spanAnuncio.id = 'actual-nombre';
  spanAnuncio.textContent = 'Se eliminará definitivamente el perfil :'; 

  nombreElemento.id = 'name-span';
  nombreElemento.className =  'span-nueve'
  nombreElemento.textContent = `${nombreObjeto}`;

  spanConfirmar.textContent = 'Aceptar';
  spanConfirmar.id = 'perfil-eliminar';
  spanConfirmar.className =  'nueve-span'

  spanAbandonar.textContent = 'Abandonar'
  spanAbandonar.id = 'perfil-abandonar'
  spanAbandonar.className = 'nueve-span'
  divEliminacion.appendChild(spanAnuncio);
  divEliminacion.appendChild(nombreElemento);
  divEliminacion.appendChild(spanConfirmar);   
  divEliminacion.appendChild(spanAbandonar);
  divEliminacion.style.display = 'grid';
  divEliminacion.style.height = '30vh'
  // Evento para confirmar la eliminación
  spanConfirmar.addEventListener('click', () => {
    divEliminacion.style.display='none'
    // Eliminar del localStorage  
    const almacenJSON = localStorage.getItem('almacenObjetos');
    if (almacenJSON) {
      const almacenRecuperado = JSON.parse(almacenJSON);
      if (almacenRecuperado[nombreObjeto]) {
        delete almacenRecuperado[nombreObjeto]; // Eliminar la clave del objeto
        localStorage.setItem('almacenObjetos', JSON.stringify(almacenRecuperado)); // Guardar cambios
        setTimeout(() => {
          almacenObjetos = JSON.parse(localStorage.getItem('almacenObjetos')) || {};
        }, 50);
      }
    }
    // Eliminar visualmente de la lista
    const elementosLista = document.querySelectorAll('.cliente-item');
    elementosLista.forEach((elemento) => {
      if (elemento.textContent === nombreObjeto) {
        elemento.remove();
      }
    });
    mostrarNombresDeObjetos(); // Refrescar la lista después de eliminar
    document.querySelector('.alerta-botones').style.display='flex'
    document.querySelector('.alerta-botones').style.top='43vh'
    document.querySelector('.alerta-botones').style.left='37vw'
    document.querySelector('.alerta-botones').textContent= `El perfil : ${nombreObjeto} ha sido eliminado exitosamente.`
    document.querySelectorAll('.cliente-item').forEach(item => {
      item.style.filter = 'blur(15px)';
    });
  });
  spanAbandonar.addEventListener('click', () => {
    document.querySelectorAll('.cliente-item').forEach(item => {
      item.style.filter = 'none';
    });
      const alertaNueve = document.getElementById('alerta-nueve'); // Obtener el elemento  
    if (alertaNueve) { // Verificar si existe
      divEliminacion.style.display = 'none';
    }
  });
}
function editarObjeto(nombreObjeto) {
  document.querySelectorAll('.cliente-item').forEach(item => {
    item.style.filter = 'blur(15px)';
  });
  
  let spanAviso = document.querySelector('#span-nombre')
  // Crear un input para capturar el nuevo nombre
  const inputNuevoNombre = document.createElement('input');
  inputNuevoNombre.type = 'text';
  inputNuevoNombre.value = nombreObjeto; // Valor actual por defecto
  inputNuevoNombre.id = 'input-edicion'

  // Botón para confirmar el cambio de nombre
  const botonConfirmar = document.createElement('button');
  const botonSalir = document.createElement('button')
  botonConfirmar.textContent = 'Guardar';
  botonConfirmar.className = 'boton-edicion'
  botonConfirmar.className ='edicion-span'  

  botonSalir.textContent = 'Salir'
  botonSalir.className = 'boton-edicion'
  botonSalir.className ='edicion-span'

  // Contenedor temporal para edición
  const contenedorEdicion = document.createElement('div');
  contenedorEdicion.classList.add('contenedor-edicion'); // Usamos la clase para el posicionamiento estático  
  contenedorEdicion.appendChild(inputNuevoNombre);
  contenedorEdicion.appendChild(botonConfirmar);
  contenedorEdicion.appendChild(botonSalir);
 
  // Insertar el contenedor en el DOM
  listaClientes.appendChild(contenedorEdicion);
  contenedorEdicion.style.display='grid'
  inputNuevoNombre.focus();
  // Evento para confirmar el cambio de nombre
  botonConfirmar.addEventListener('click', () => {
    const nuevoNombre = inputNuevoNombre.value.trim(); 
    if (!nuevoNombre) {
      alertaOcho.style.display='flex'
      alertaOcho.textContent='El perfil debe tener un nombre'
      return;
    }
    // Recuperar el objeto almacenado en localStorage
    const almacenJSON = localStorage.getItem('almacenObjetos');
    if (almacenJSON) {
      const almacenRecuperado = JSON.parse(almacenJSON);
      // Verificar que el nuevo nombre no exista ya
      if (almacenRecuperado[nuevoNombre]) {
        alertaOcho.style.display='flex'
        alertaOcho.addEventListener('click', () => {
          alertaOcho.style.display='none'
          listaClientes.style.filter = 'none';
        });
        return;
      }
      // Actualizar el nombre en el almacenamiento
      almacenRecuperado[nuevoNombre] = almacenRecuperado[nombreObjeto]; // Copiar los datos del objeto
      delete almacenRecuperado[nombreObjeto]; // Eliminar la clave antigua
      // Guardar nuevamente en localStorage
      localStorage.setItem('almacenObjetos', JSON.stringify(almacenRecuperado));
      // Actualizar la lista visualmente
      const elementosLista = document.querySelectorAll('.cliente-item');
      elementosLista.forEach((elemento) => {
        if (elemento.textContent === nombreObjeto) {
          elemento.textContent = nuevoNombre; // Cambiar el nombre visualmente 
          elemento.style.filter = 'blur(15px)';
        }
      });
      // Ordenar la lista después de actualizar el nombre
      ordenarListaClientes();
      mostrarNombresDeObjetos();
      alertaSiete.style.display='grid'
      spanAviso.textContent = `${nuevoNombre}`;      
    }                           
    // Eliminar el contenedor temporal
    contenedorEdicion.remove();
    traerAlmacenObjetos();
  });

  botonSalir.addEventListener('click', () => {    
    document.querySelectorAll('.cliente-item').forEach(item => {
      item.style.filter = 'none';
    });
    let alertas = document.querySelectorAll('.cerrar')
    contenedorEdicion.style.display='none'
    alertas.forEach(alerta =>{
      alerta.style.display='none'
    })
    document.querySelectorAll('.datos-base').forEach((elemento) => {
    elemento.textContent = ''
    })
    restablecerClick(['.butt-perfiles', '.estilo-1','.digit','.digito']); 
    calculadora.classList.add('move-calculadora')
    objetoGlobal = '' 
    
  }) 
}
function ordenarListaClientes() {
  const elementos = Array.from(listaClientes.children);
  
  elementos.sort((a, b) => {
    return a.textContent.localeCompare(b.textContent, 'es', { sensitivity: 'base' });
  });

  // Reordenar los elementos en el DOM
  elementos.forEach(elemento => listaClientes.appendChild(elemento));
}
document.querySelector('#perfil-cambio').addEventListener('click', () =>{ 
  document.querySelector('#alerta-siete').style.display='none'
  restablecerClick((['.butt-perfiles']))
  document.querySelectorAll('.cliente-item').forEach(item => {
    item.style.filter = 'none';
  });
})
function verDetallesObjeto(nombreObjeto) {
  console.log(`Mostrando detalles del objeto "${nombreObjeto}"`);  
}
botRevertir.addEventListener('click', () =>{
  let alertas = document.querySelectorAll('.cerrar')
  let menu = document.querySelector('#menu-contextual')
  let alerta = document.querySelector('#alerta-siete')
  ocultarElemento('.formulario, .files-job, .listado-clientes, .consola-ir')
  document.querySelector('#spn-blur-7').style.display='none'
  document.querySelectorAll('.butt-perfiles').forEach(elemento => {
    elemento.style.display = 'block';
  })  
  detenerAlternarColor();
  alertas.forEach(alerta =>{
    alerta.style.display='none'
  })
  document.querySelectorAll('.datos-base').forEach((elemento) => {
  elemento.textContent = ''
  })
  restablecerClick(['.butt-perfiles', '.estilo-1','.digit','.digito']);  
  calculadora.classList.add('move-calculadora')
  if(menu){
    menu.style.display = 'none'
  }
  alerta.style.display = 'none'
  botRevertir.style.display='none'
  if(document.querySelector('#butt-job-track').style.backgroundColor === 'rgb(0,255,0)' && document.querySelector('#boton-perfiles').style.backgroundColor === 'rgb(0,255,0)' ){
    objetoGlobal = ''
  }
  console.log('OBJETO GLOBAL ', objetoGlobal)
})
function consultarCapacidadAlamcenamiento() {
  // Verificar uso actual
  let totalUsed = 0;
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      totalUsed += ((localStorage[key].length + key.length) * 2); // Cada carácter ocupa 2 bytes
    }
  }

  // Capacidad total estimada
  const totalCapacity = 5 * 1024 * 1024; // 5 MB en bytes (ajustar si sabes la capacidad específica de tu navegador)

  // Mostrar resultados
  console.log(`Uso actual: ${(totalUsed / 1024).toFixed(2)} KB`);
  console.log(`Capacidad total: ${(totalCapacity / 1024).toFixed(2)} KB`);
  console.log(`Espacio disponible: ${((totalCapacity - totalUsed) / 1024).toFixed(2)} KB`);

  const flagsEstado = {
    flagNegro,
    flagCyan,
    flagMagenta,
    flagAmarillo,
    flagEspecial,
    flagBarniz
  };
  
  // Muestra el estado actual de las banderas en la consola
  console.log("Estado de las banderas:", flagsEstado);
  
}
function traerAlmacenObjetos(){
  // Recuperar el almacenamiento desde localStorage
  const datosGuardados = localStorage.getItem('almacenObjetos');
  if (datosGuardados) {
    // Parsear los datos y asignarlos a `almacenObjetos`
    almacenObjetos = JSON.parse(datosGuardados);
    console.log('ALMACEN DE OBJETOS ', almacenObjetos);
  } else {
    console.warn('No se encontraron datos en localStorage.');  
    almacenObjetos = {}; // Inicializar con un objeto vacío si no hay datos   
  }
  console.log('OBJETO GLOBAL ', objetoGlobal)
}
function moverFormulario() {
  const formulario = document.querySelector('.formulario'); 
  formulario.style.display='none' 
  // Deshabilitar la transición para que el cambio sea inmediato
  formulario.style.transition = 'none';
  formulario.classList.remove('mover-izquierda');
  // FORZAR un reflow para aplicar el cambio de inmediato
  void formulario.offsetHeight;
  // Restaurar la transición
  formulario.style.transition = 'transform 0.5s ease-in-out';
  // Asegurar que el formulario es visible antes de moverlo
  formulario.style.display = 'flex';
  setTimeout(() => {
    formulario.style.display='flex'
    formulario.classList.add('mover-izquierda');
  }, 50);
}
function ocultarElemento(selectores) {
  const formularios = document.querySelectorAll(selectores); // Selecciona los elementos basados en el parámetro
  if (formularios.length === 0) return; // Si no hay elementos, salir
  let opacidad = 1;
  const duracion = 500; // 0.5 segundos
  const intervalo = 50; 
  const decremento = intervalo / duracion; 
  const animacion = setInterval(() => {
    opacidad -= decremento;
    formularios.forEach(formulario => {
      formulario.style.opacity = opacidad;
    });
    if (opacidad <= 0) {
      clearInterval(animacion); 
      formularios.forEach(formulario => {
        formulario.style.display = 'none';
        formulario.style.opacity = '1'; // Restablece para futuras apariciones
      });
    }
  }, intervalo);
}
function mostrarElemento(selectores) {
  const elementos = document.querySelectorAll(selectores); // Selecciona los elementos basados en el parámetro
  if (elementos.length === 0) return; // Si no hay elementos, salir

  elementos.forEach(elemento => {
    elemento.style.display = ''; // Asegura que sea visible antes de animar
    elemento.style.opacity = '0'; // Inicia en 0 para el efecto de aparición
  });

  let opacidad = 0;
  const duracion = 500; // 0.5 segundos
  const intervalo = 50;
  const incremento = intervalo / duracion;

  const animacion = setInterval(() => {
    opacidad += incremento;
    elementos.forEach(elemento => {
      elemento.style.opacity = opacidad;
    });
    if (opacidad >= 1) {
      clearInterval(animacion);
      elementos.forEach(elemento => elemento.style.opacity = '1'); // Asegura que quede en 1 al final
    }
  }, intervalo);
}
/* ************************************************************************************************************************************** */

/* Bloque para manejar y renderizar colores en RGB*/
let red = 0, green = 0, blue = 0; 
let intervalRgb;
function updateColorDisplay() {
  document.getElementById('colorDisplay').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  document.getElementById('redValue').textContent = red;
  document.getElementById('greenValue').textContent = green;
  document.getElementById('blueValue').textContent = blue;
}
function changeColor(channel, change) {
  if (channel === 'red') red = Math.min(255, Math.max(0, red + change));
  if (channel === 'green') green = Math.min(255, Math.max(0, green + change));
  if (channel === 'blue') blue = Math.min(255, Math.max(0, blue + change));

  updateColorDisplay();
}
function startChange(channel, change) {
  if (intervalRgb) clearInterval(intervalRgb); // Detener cualquier intervalo activo antes de iniciar uno nuevo

  changeColor(channel, change); // Aplicar el cambio inmediato

  intervalRgb = setInterval(() => changeColor(channel, change), 27); // Cambio continuo si se mantiene presionado
}
function stopChange() {
  clearInterval(intervalRgb);
  intervalRgb = null; // Asegurar que la variable se resetee
}
updateColorDisplay();
/* ************************************************************************************************************************************** */
function normalizeCMYK(c, m, y, k) {
  let max = Math.max(c, m, y, k);

  if (max > 0) {
    c = (c / max) * 100;
    m = (m / max) * 100;
    y = (y / max) * 100;
    k = (k / max) * 100;
  }

  return { c, m, y, k };
}
function cmykwToRgb(c, m, y, k, w) {
  // Normalizamos CMYK antes de convertir a RGB
  let normalized = normalizeCMYK(c, m, y, k);
  c = normalized.c;
  m = normalized.m;
  y = normalized.y;
  k = normalized.k;

  // Convertimos CMYK a RGB
  let r = 255 * (1 - c / 100) * (1 - k / 100);
  let g = 255 * (1 - m / 100) * (1 - k / 100);
  let b = 255 * (1 - y / 100) * (1 - k / 100);

  // Aplicamos el canal Blanco sin romper la relación de color
  let factorBlanco = w / 100;
  r = r + (255 - r) * factorBlanco;
  g = g + (255 - g) * factorBlanco;
  b = b + (255 - b) * factorBlanco;

  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}
function updateColor() {
  let c = parseFloat(document.getElementById("c").value);
  let m = parseFloat(document.getElementById("m").value);
  let y = parseFloat(document.getElementById("y").value);
  let k = parseFloat(document.getElementById("k").value);
  let w = parseFloat(document.getElementById("w").value); // Nuevo canal Blanco

  document.getElementById("colorBox").style.backgroundColor = cmykwToRgb(c, m, y, k, w);

  document.getElementById("c-span").textContent = c;
  document.getElementById("m-span").textContent = m;
  document.getElementById("y-span").textContent = y;
  document.getElementById("k-span").textContent = k;
  document.getElementById("w-span").textContent = w;
}
document.querySelectorAll("input[type='range']").forEach(slider => {
  slider.addEventListener("input", updateColor);
});
updateColor();
/* ************************************************************************************************************************************** */
function animarColorSecuencia() {
  desactivarClick(['.butt-perfiles']);
  
  const botones = document.querySelectorAll(".btn-respaldo");
  const perfiles = document.querySelectorAll(".btn-respaldo"); // Selecciona los botones de perfil  

  if (botones.length === 0) return;

  let r = 0, g = 255, b = 0; // Inicia en verde
  let fase = 0; // Controla las fases del ciclo
  let tiempoInicio = Date.now(); // Guarda el tiempo de inicio

  function actualizarColor() {
    botones.forEach(btn => {
      btn.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
  }

  function iniciarTransicion(objetivoR, objetivoG, objetivoB, siguienteFase) {
    const intervalo = setInterval(() => {
      let tiempoTranscurrido = Date.now() - tiempoInicio;

      // Si han pasado 2000ms, forzar color verde y detener animación
      if (tiempoTranscurrido >= 2000) {
        clearInterval(intervalo);
        r = 0;
        g = 255;
        b = 0;
        actualizarColor();


        return;
      }

      if (r !== objetivoR) r += (r < objetivoR) ? 51 : -51;
      if (g !== objetivoG) g += (g < objetivoG) ? 51 : -51;
      if (b !== objetivoB) b += (b < objetivoB) ? 51 : -51;

      actualizarColor();

      if (r === objetivoR && g === objetivoG && b === objetivoB) {
        clearInterval(intervalo);
        setTimeout(() => {
          fase = siguienteFase;
          ejecutarFase();
        }, 100);
      }
    }, 1);
  }

  function ejecutarFase() {
    // Si ya pasaron 2000ms, no continuar con más transiciones
    if (Date.now() - tiempoInicio >= 1000) return;

    switch (fase) {
      case 0: iniciarTransicion(255, 255, 255, 1); break; // Verde → Blanco
      case 1: iniciarTransicion(255, 255, 0, 2); break;  // Blanco → Amarillo
      case 2: iniciarTransicion(255, 255, 255, 3); break; // Amarillo → Blanco
      case 3: iniciarTransicion(255, 0, 255, 4); break; // Blanco → Magenta
      case 4: iniciarTransicion(255, 255, 255, 5); break; // Magenta → Blanco
      case 5: iniciarTransicion(0, 255, 255, 6); break;  // Blanco → Cian
      case 6: iniciarTransicion(255, 255, 255, 7); break; // Cian → Blanco
      case 7: iniciarTransicion(0, 255, 0, 0); break; // Blanco → Verde (reinicio)
    }
  }

  ejecutarFase(); // Iniciar la secuencia
  setTimeout(() => {
    perfiles.forEach(btn => {
      btn.style.backgroundColor = `rgb(0,255,0)`;
    });
    restablecerClick(['.butt-perfiles'])
  }, 1010);
}
function animarSecuenciaPerfiles() {
  const perfiles = document.querySelectorAll(".butt-perfiles");

  if (perfiles.length === 0) return; // Si no hay elementos, no hacer nada

  let indice = 0;

  function cambiarColor() {
    if (indice >= perfiles.length) return; // Si ya pasó por todos, detener ejecución

    const boton = perfiles[indice]; // Selecciona el botón actual
    const colorOriginal = boton.style.backgroundColor; // Guarda su color original

    boton.style.backgroundColor = "rgb(0,255,0)"; // Lo cambia a verde

    setTimeout(() => {
      boton.style.backgroundColor = colorOriginal; // Lo regresa a su color original
      indice++; // Pasa al siguiente elemento

      cambiarColor(); // Llama a la función para el siguiente botón
    }, 145);
  }

  cambiarColor(); // Inicia la secuencia
}


function iniciarAnimaciones() {
  var elementosExcluidos = ['simulador','interfaz-perfiles','perfiles-entintado','boton-perfiles','boton-reseteo','spn-blur-1','spn-blur-2','spn-blur-3','spn-blur-4','spn-blur-5','spn-blur-6','spn-blur-7','bot-revertir'] 
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  container1.style.display = 'none'
  document.querySelector('#contiene-lineas').style.display = 'none'
  animarColorSecuencia();
  animarSecuenciaPerfiles();
}
