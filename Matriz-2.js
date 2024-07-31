var anchoPantalla = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var acumuladorVideos = [] 

var intervaloColor;
let arrayVideos = ['vid06','prisma-vid-II','vid04','vid05']
let videoStore = []

var contenedor2 = document.getElementById('canvasContainer2')
var troublesh = document.getElementById('troubleshooting')
var grafica2 = document.getElementById('MiGrafica') 
var linkIni1 = document.getElementById('links-inicialesI')
var linkIni2 = document.getElementById('links-iniciales') 
var arrayAllPneumatica = ['contImaginario-II','vid-pneumatic','bailarina','padre-neumat','pneumatico','control-neumatico','imag1','imag2','imag3','imag4','contImaginario','vid-basculante','rodillo-infeed','puesta-punto','contImgEntrenos']
const coleccion = document.querySelectorAll('.desbobinador, .desbobinador-I, .uTeñido, .alimentadorId, .unidpre-prensaProceso, .rebobinador, .contTorrImp')
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var contImgsDistribuidor = document.getElementById("images-distribuidor")
var contImgsEntintador = document.getElementById("images-entintador")
var contiVidDistribuidor = document.getElementById('conti-video-distribuidor')
var contiVidEntintador = document.getElementById('conti-video-entintador') 
var contImgsSmed = document.getElementById('images-smed') 
var contImageneSmed = document.getElementById('imgsIsopropil') 
var contiVidSmed = document.getElementById('conti-video-smed')
var contibotsDistriV = document.getElementById('contenedor-7-VII')
var buttRepuestIII = document.getElementById('conti-boton-repuestos-II')
var padreImgsDistribuidor = document.getElementById("contene-images") 
var contiBotsDesbobina = document.getElementById('conti-boton-desb')
var contiBotsFreno = document.getElementById('conti-boton-freno')
var contibotsDistri = document.getElementById('contenedor-7')
var contibotsDistriII = document.getElementById('contenedor-7-V')
var contibotsDistriIII = document.getElementById('contenedor-7-VI')
var contibotsDistriVI = document.getElementById('contenedor-8')
var btnsIniciales = document.querySelectorAll('.btn-bloque')
var buttRepuest = document.getElementById('butt-repuestos')
var buttRepuestI = document.getElementById('butt-repuestos-I')
var buttRepuestV = document.getElementById('conti-boton-repuestos-III')
var contVideo = document.getElementById('video-entintado')
var contVideoSmed = document.getElementById('conti-video-bancada')
var conteBancada = document.getElementById('bancada-torre-II')
var padreManometro = document.getElementById('padre-1')

let firstClick = true;
let clickHabilitado = true;
let botonClick = document.getElementById('boton1')
let botonClickII = document.getElementById('boton7')
let botonClickIII = document.getElementById('boton13')
let botonClickIV = document.getElementById('boton19')
let botonClickV = document.getElementById('boton25')

var iterations;
var arrayIdButtsMA = ['resultados','troubleshoot','def1','def2','adtBut','fua1','lup','kaizen']
var arrayButtsKaizen = ['btn10','btn11','btn12','btn17']
var arrayButtsPlanos = ['btn13','btn14','btn15']
var arrayImgsRodilleria = document.querySelectorAll ('.durezas')
var arrayButtsInstructivos = ['contBotCasos','contBotInfeed']
var enlacesIDs = ['link1', 'link2', 'link3', 'link4','link5'] 
var arrayPosicionnador = []
var destino = 257
var idsArray = [];
var idsArrayEliminados = []
var idsMA = ['control-neumatico','rodillo-infeed','contBotCasos','puesta-punto','casos-kaizen','mejoras-kai','kaizen-propuestos','toyota-kaizen','toyota-kaizen-antes','planos-kaizen','materiales-kaizen','kaizenCont','conti-boton-planos', 'conti-boton-kaizen','troubleshooting','canvasContainer2','contChecks','canvasContainer3', 'contImagNeg',,'contImagGraf','canvasContainer4','canvasContainer4-II','canvasContainer5','canvasContainer5-II','canvasContainer6','canvasContainer6-II','canvasContainer7','canvasContainer7-II','canvasContainer8','canvasContainer8-II','canvasContainer9','canvasContainer9-II']
var contenedoresMA = ['troubleshooting','canvasContainer2','contChecks','canvasContainer3','contImagNeg','contImagGraf','kaizenCont']
var idsMAhijos = ['contBotCasos','materiales-kaizen','troubleshooting','canvasContainer2','contChecks','canvasContainer3','contImagNeg','contImagGraf']
var lineasGrid = document.getElementById('contLineas')
var lineasGridII = document.getElementById('contLineas-II')

var contAdministrar = document.getElementById('cont-titulo-admin')
var contComercial = document.getElementById('cont-titulo-comercial')
var contCalidad = document.getElementById('cont-titulo-calidad')
var contOperativa = document.getElementById('cont-titulo-operacion')
var previousElementID
var elementoEliminado
var contPadre = document.getElementById('conti-boton-freno')
var linkList = document.getElementById("linkList")
var linkListI = document.getElementById("linkListI")
var uTeñido = document.getElementById('uTeñidos')
var arrayIdButtsCheck = ['boton2','boton3','boton4','boton5','boton6','boton7','boton8','boton9','boton10','boton11','boton12','btn600','btn700','btn800']
var contiBtt = ['archivo','btt2','btt3','btt4','btt5','btt6','btt7'] 
var currentID = null;
var butInicio = document.getElementById('bot-inic')
var botonMa = document.getElementById('bot-mantaut')
const padreUno = document.getElementById('contenedor_padre')
const padreDos = document.getElementById('contenedor_padre_2')
const padreTres = document.getElementById('contenedor_padre_3') 
var display = document.getElementById('display') 
var displayII = document.getElementById('display_2')
var aplique = document.getElementById('aplique_3')
var apliqueII = document.getElementById('aplique_2')

var posicionPantalla = document.getElementById('positionDisplay')              
var positionDisplayIII = document.getElementById('positionDisplay_3')
var allContenedores = ['imagenes-plancha','uniteñido','video-placa','placa','imagen1','imagen2','imagen3','imagen4','imagenes-impresor','video-impresor','padre-naranja','tendencia-naranja','abuelo-variable','planetary','padre-variable','cont-variable','abuelo-plana','padre-plana','cont-plana','contenedorElementos','general','frec-lubrica','padre-grilla','grilla-durezas','abuelo-entintadores','padre-entintadores','abuelo-grilla-dureza','cont-arriba-rodillos','lubricantes','abuelo-cuadricula','abuelo-teñido','abuelo-grilla','abuelo-lubrica','padre-lubricante','freno-II','conti-boton-freno','cont-arriba','conti-boton-teñido','teñido-I','teñido-II','vidTeñido','teñido-vid','cont-arriba-freno','inicio','padre-lubrica','bis-abuelo','image-background','def2','over_size','over_side','equalizer','nicho_spans','padre','patern','first_half','cortina','second_half','wall_street_II','vid_festo','instrucciones_manometro','positionDisplay_3','display_2','container_interfaz_2','butts_interfaz_2','container_interfaz_3','butts_interfaz_3','display_3','subtitulo-I','display','container_interfaz','butts_interfaz','interfaz','conte-ayudas','ayudas-video','imagen-ayudas','imagen-ayudasII','logo-grande','agrupaOblicuos-XI','titulo-ancho','descripcion-I','ventana-lateral','buscador','linkList','contenedor-principal','contenedor','padre-circle','circle','options','nicho-videos','primerCont','vidColor','vid01','vidCicodelia','padre-interfaz','hijo-interaz-1','hijo-interaz-2','MiGrafica9-II','contLineas-II','contLineas','title-interfaz','vidElem','kaizen-propuestos','canvasContainer3','troubleshooting','conti-boton','canvasContainer2','contChecks','conteneMantaut','MiGrafica','contImaginario-II','contImaginario-III','padre-1','padre-2','imag3','imag4','contImaginario','bailarina','pneumatico','padre-neumat','contBotInfeed','largoImpresion','contImgEntrenos','imag1','imag2','linksMA','linkLis','sitio-en-construccion','curado-uv','video-container','conti-video-background','video-background-planas','contenedor-9','conti-video-bancada','plate-smed-I','contVid-smed-I','butt-repuestos-III','conti-boton-repuestos-III','imgsIsopropil','contenedor-8','bancada','contVid-smed','contenedor-7-VII','butt-repuestos-II','butt-repuestos-I','conti-boton-repuestos-II','conti-boton-repuestos-I','contenedor-7-VI','sector-smed','sector-entintador','sector-distribuidor','conti-video-smed','conti-video-entintador','conti-video-distribuidor','conti-boton-repuestos','contenedor-7-V','plate-smed','contenedor-7','butt-repuestos','images-entintador','toggleVideoButton','videoElement1-II','video-entintado','videos-training','videoElement2','contenedor-7','contene-images','cuartoContDensito','tercerContDensito','segundoContDensito','contDensito','imgs-densito','conte-botDensito','conte-botDensitoII','imgs-prepress','frame-rollers','links-inicialesI','linkListI','links-iniciales','impresorImg','agrupaOblicuos-IX','container01','imagenes-manta','cont-titulo-operacion','cont-titulo-calidad','cont-titulo-comercial','cont-titulo-admin','control-neumatico','rodillo-infeed','contBotCasos','puesta-punto','mejoras-kai','casos-kaizen','kaizen-propuestos','toyota-kaizen','toyota-kaizen-antes','materiales-kaizen','planos-kaizen','conti-boton-kaizen','conti-boton-planos','kaizenCont','pantalla-inicial','desbobinadorId','uTeñidos','alimentadorId','verticales-alimentador','unidProceso','rebobinador','torre-imp','tinter-o','bateria-entintado','pantalla-tintero','cont-links','imgTorre','imgsRepuestos','agrupaOblicuos-II','pantalla-frente','pantalla-mandos','pantalla-servicio','pantalla-atras','videosTraining','contPortPlaca','contPortManta','contImpresor','contImgDistribuidor','contImgEntintador','cont-variable','bancada-torre-II','bateria-entintado-II','cont-secador','sitema-humedad','pre-prensa','agrupaOblicuos-placa','densitometria','contImagGraf','contImagNeg','lubricacion','title-interfaz','iconos','canvasContainer4','canvasContainer4-II','canvasContainer5','canvasContainer5-II','canvasContainer6','canvasContainer6-II','canvasContainer7','canvasContainer7-II','canvasContainer8','canvasContainer8-II','canvasContainer9','canvasContainer9-II','conte-secundario','contenedor-vertical','franja-Blanca','cont-titulo','videoBackground','video-background','videoBackgroundII','lubri-II','lubri-I','images-smed','images-distribuidor','lubri-III','freno','uniTeñido','uniTeñidos','rodilleria', 'cont-user','cont-userI']

var linksIniciales = ['links-inicialesI','links-iniciales']
var allContIzquierdos = ['desbobinadorId','uTeñidos','alimentadorId','unidProceso','rebobinador']
var contenedoresHijo = ['contImgDistribuidor','rodillForma','portaPlancha','portaMantilla','cilindroImpresor']
var allContTintero = ['pantalla-tintero','cont-links','imgTorre','vidTintero','imgsRepuestos','agrupaOblicuos-II','container2']
var contVid = document.getElementById('videosTraining')
var contIMPlaca = document.getElementById('placa')
var contIMmanta = document.getElementById('manta')
var arrayButtsRutilantes = ['butt-113','butt-12','butt-16','butt-21','butt-22','butt-1130','butt-120','butt-160','butt-210','butt-220']
var arrayButtsRutilantesI = ['butt-024000','butt-020000','butt-023000','butt-015000','butt-013000','butt-7112000']
var arrayButtsRutilantesII = ['butt-01130','butt-012','butt-016','butt-021','butt-0202','butt-011300','butt-0120']
var arrayButtsRutilantesIII = ['butt-001130','butt-0012','butt-0016','butt-0021','butt-00202']
var buttonsMA = document.getElementsByClassName("butt-mautonomo")
var buttsToyota = ['toyota8', 'toyota7', 'toyota6', 'toyota5','toyota4','toyota3','toyota2','toyota1']
var contienePasos = document.getElementById('puesta-punto')
let contPlana = document.getElementById('cont-plana')
let contiButtCasos = document.getElementById('mejoras-kai')
const textToColor = document.getElementById("textToColor")
const textToColorI = document.getElementById("textToColorI")
const line = document.getElementById("line")  
const lineI = document.getElementById("lineI")
let hoverTimeout;
let hideTimeout;
let contadorClicks = 0;
var container1 = document.getElementById('container01')
var botIzquierda = document.getElementById('bot-atras')
var botDerecha = document.getElementById('bot-atras12')

const alimentadorId = document.getElementById('alimentadorId')
const reBobinado = document.getElementById('rebobinador')
const seccionTintero = document.getElementById('pantalla-tintero')
const pantallas = ['pantalla-frente', 'pantalla-mandos','pantalla-servicio','pantalla-atras']
const imgsRepuestos = document.getElementById('imgsRepuestos')
const videoPrisma = document.getElementById('prisma-vid-II')
const padreVideos = document.getElementById('nicho-videos')

const videoElements = document.querySelectorAll('.video-training') 
const videosPrepress = document.querySelectorAll('.vid-prepress')  
const video = document.getElementById("videoBackground")
const imgsDistribuidor = document.getElementById('contImgDistribuidor')
const imgsForma = document.getElementById('contImgEntintador')
const images = document.querySelectorAll('.image-training') 
const contImpresor = document.getElementById('contImpresor')
const input = document.querySelectorAll('.input-class')
const checks = document.querySelectorAll('.input-class')
const inpt = document.querySelectorAll('grafMini')

const verButtsInterfaz = document.getElementById('butts_interfaz')
const verButtsInterfazII = document.getElementById('butts_interfaz_2')
const verButtsInterfazIII = document.getElementById('butts_interfaz_3')

const positionDisplay = document.getElementById('positionDisplay')
const positionDisplayII = document.getElementById('positionDisplay_2')

const container = document.getElementById('container_interfaz')
const containerII = document.getElementById('container_interfaz_2')
const containerIII = document.getElementById('container_interfaz_3')

const spanGuide = document.getElementById('unicoide_triangulo')
const spanGuideI = document.getElementById('unicoide_flecha')
const cortina = document.getElementsByClassName('overlay')[0]
const buttonRight2 = document.getElementById('buttonRight_2')
const buttonRight3 = document.getElementById('buttonRight_3')

const buttReset2 = document.getElementById('buttonReset_2')  
const buttReset3 = document.getElementById('buttonReset_3')  

const buttonLeft2 = document.getElementById('buttonLeft_2')
const buttonLeft3 = document.getElementById('buttonLeft_3')

const buttonRight = document.getElementById('buttonRight')
const buttonLeft = document.getElementById('buttonLeft')
const buttReset = document.getElementById('buttonReset') 
const slider5 = document.getElementById('slider_1')
const slider4 = document.getElementById('slider_4')
const botVerde = document.getElementById('butt_green')
const botNaran = document.getElementById('butt_orange')
const botRed = document.getElementById('butt_red')
const botClose = document.getElementById('buttonClose')
const botCloseII = document.getElementById('buttonClose_I')
const botCloseIII = document.getElementById('buttonClose_II')

const interfaz = document.getElementById('interfaz')
const slider2 = document.getElementById('slider_2')
const slider3 = document.getElementById('slider_3')
const button = document.getElementById('button1')
const slider1 = document.getElementById('slider')
const butt2 = document.getElementById('button2')
var currentRotation = 0;
var currentZoom = 0;

let currentLeft = parseFloat(window.getComputedStyle(button).left)
var newLeft = currentLeft + 2

let miCanvas2 = document.getElementById('MiSegundaGrafica').getContext('2d')
let miCanvas3 = document.getElementById('MiTerceraGrafica').getContext('2d')
let miCanvas4 = document.getElementById('MiCuartaGrafica').getContext('2d')
let miCanvas5 = document.getElementById('MiQuintaGrafica').getContext('2d')
let miCanvas = document.getElementById('MiGrafica').getContext('2d')
let miCanvas6 = document.getElementById('MiGrafica4').getContext('2d')
let miCanvas6II = document.getElementById('MiGrafica4-II').getContext('2d')
let miCanvas7 = document.getElementById('MiGrafica5').getContext('2d')
let miCanvas7II = document.getElementById('MiGrafica5-II').getContext('2d')
let miCanvas8 = document.getElementById('MiGrafica6').getContext('2d')
let miCanvas8II = document.getElementById('MiGrafica6-II').getContext('2d')
let miCanvas9 = document.getElementById('MiGrafica7').getContext('2d')
let miCanvas9II = document.getElementById('MiGrafica7-II').getContext('2d')
let miCanvas10 = document.getElementById('MiGrafica8').getContext('2d')
let miCanvas10II = document.getElementById('MiGrafica8-II').getContext('2d')
let miCanvas11 = document.getElementById('MiGrafica9').getContext('2d');
let miCanvas11II = document.getElementById('MiGrafica9-II').getContext('2d')
var botones = document.querySelectorAll('.butt-mautonomo')
var arrayButtsIniciales = ['bot-atras','bot-inicial','iniciar','bot-atras12']
let currentIndex = 0;
let actualtIndex = 0;
let nowIndex = 0;
idsArray.push("cont-titulo") 
idsArrayEliminados.push('cont-titulo')
const IDSARRAYCICODELIA = ['first_half','cortina','second_half','nicho_spans','wall_street_II','equalizer','padre','patern']
const masterKey = [4];
function manejarLogica() {
  const inputs = document.querySelectorAll('.numero');
  let valoresIngresados = [0, 0, 0, 0];
  if(screenWidth < 500){
    if (inputs.length > 0) {
      inputs[0].focus();
      var tituloAngosto = document.getElementById('img-logo');
      tituloAngosto.style.width = '100%';      
    }
    function manejarEntrada(event) {
      const inputActual = event.target;
      const valor = parseInt(inputActual.value);
      let suma = 0;
      const indice = Array.from(inputs).indexOf(inputActual);
      if (!isNaN(valor)) {
        valoresIngresados[indice] = valor;
      } else {
        valoresIngresados[indice] = 0;
      }
        setTimeout(() => {
        inputActual.value = '*';
        if (indice < inputs.length - 1) {
          inputs[indice + 1].focus();
        }
      }, 177);
      suma = valoresIngresados.reduce((acumulador, valor) => acumulador + valor, 0);
      if (suma === masterKey[0]) {
        document.getElementById('contenedor-principal').style.display = 'none'
        setTimeout(() => {
          aumentoGradualVideo()              
        }, 200);
        setTimeout(() => {
          abrirInterfaz();
        }, 1100);
        inputs.forEach(input => {
        input.value = '';
        });         
      }
    }
    inputs.forEach(input => {
      input.addEventListener('input', manejarEntrada);
    });
  }else{
    if (inputs.length > 0) {
      inputs[0].focus();
      var tituloAncho = document.getElementById('titulo-ancho');
      tituloAncho.style.width = '100%'      
    }
    function manejarEntrada(event) {
      const inputActual = event.target;
      const valor = parseInt(inputActual.value);
      let suma = 0;
      const indice = Array.from(inputs).indexOf(inputActual);
      if (!isNaN(valor)) {
        valoresIngresados[indice] = valor;
      } else {
        valoresIngresados[indice] = 0;
      }
        setTimeout(() => {
        inputActual.value = '*';
        if (indice < inputs.length - 1) {
          inputs[indice + 1].focus();
        }
      }, 177);
      suma = valoresIngresados.reduce((acumulador, valor) => acumulador + valor, 0);
      if (suma === masterKey[0]) {
        document.getElementById('contenedor-principal').style.display = 'none'
        setTimeout(() => {
          aumentoGradualVideo()              
        }, 200);
        setTimeout(() => {
          abrirInterfaz();
        }, 600);
        inputs.forEach(input => {
        input.value = '';
        });         
      }
    }
    inputs.forEach(input => {
      input.addEventListener('input', manejarEntrada);
    });
  }
  let imgBackgound = document.getElementById('image-background')
  imgBackgound.style.display = 'flex'

}
function VolveraInicio(){
  location.reload()
  idsArray = []
  idsArrayEliminados = []
}
function ElementosMaII(elementId){
    var elementosExcluidos = ['buscador', 'conteneMantaut', 'conti-boton', 'container01', 'links-inicialesI', 'links-iniciales'];  
    for (var i = 0; i < allContenedores.length; i++) { 
      var elemento = document.getElementById(allContenedores[i]);
      if (elemento) {
        if (elementosExcluidos.includes(allContenedores[i])) {
          elemento.style.display = 'flex';
        } else {
          elemento.style.display = 'none';
        }
      }
    }
    setTimeout(() => {
      document.body.style.zoom = "100%"    
    }, 10);
    setTimeout(() => {
      container1.style.left=''    
    }, 20);
    setTimeout(() => {
      showButtonsMAconRetraso()  
    }, 50);  
    arrayIdButtsMA .forEach(function (elto) {
      var elemento = document.getElementById(elto)    
      if (elemento) {
        elemento.style.backgroundColor = 'rgba(83, 82, 82, 0.678)'
        elemento.style.color = ''
      }
    })
    document.getElementById('conti-boton').removeAttribute('style');
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId)
    if (index !== -1) {
      idsArray.splice(index, 1);
    }
    idsArray.push(elementId);
    console.log(idsArray);
  } 
}
function showButtonsMAconRetraso(){
  var botones = document.querySelectorAll('.butt-mautonomo')
  function mostrarBotonConRetraso(i) {
    if (i < botones.length) {
      var boton = botones[i]
      boton.style.display = 'inline-block'
      boton.style.marginTop = '10px';      
      setTimeout(function() {
        mostrarBotonConRetraso(i + 1)
      },100)
    }
  }
  mostrarBotonConRetraso(0)
}
function showButtonsTeoriaConRetraso() {
  var botones = document.querySelectorAll('.butt-prepre');
  for (var i = 0; i < botones.length; i++) {
      botones[i].style.display = 'none';
  }
  function mostrarBotonConRetraso(i) {
    if (i < botones.length) {
      var boton = botones[i];
      boton.style.display = 'inline-block';
      boton.style.marginTop = '10px';
      setTimeout(function() {
          mostrarBotonConRetraso(i + 1);
      }, 100);
    }
  }
  mostrarBotonConRetraso(0);
}
function showButtonsDensitoConRetraso() {
  var botones = document.querySelectorAll('.deploy-butt');
  for (var i = 0; i < botones.length; i++) {
      botones[i].style.display = 'none';
  }
  function mostrarBotonConRetraso(i) {
    if (i < botones.length) {
      var boton = botones[i];
      boton.style.display = 'inline-block';
      boton.style.marginTop = '10px';
      setTimeout(function() {
          mostrarBotonConRetraso(i + 1);
      }, 100);
    }
  }
  mostrarBotonConRetraso(0);
}
function changeButtonStyles(elementId){
  switch (elementId) {
    case 'pantalla-tintero':
      var elementosExcluidos = ['buscador','cont-links','pantalla-tintero','container01','links-inicialesI','links-iniciales','agrupaOblicuos-II','imgTorre','video-entintado','videoElement1-II']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      } 
      if(screenWidth < 500){        
        var elementosExcluidos = ['buscador','cont-links','pantalla-tintero','container01','links-inicialesI','links-iniciales','agrupaOblicuos-II','imgTorre','video-entintado','videoElement1-II']  
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i]) 
          if (elemento) {
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
          }
        }
        videoElements.forEach(video => {
          if (video.id === 'vidTintero') {
            video.style.top = '-4.5vh'
            video.style.left='65vw'
            video.style.display = 'block'
            video.play();
            setTimeout(function () {
              video.style.display = 'none'
            }, 977);
          } else {
            video.style.display = 'none'
          }
          });
      }else{
        videoElements.forEach(video => {
        if (video.id === 'vidTintero') {
          video.style.top = '0'
          video.style.left='17.7vw'
          video.style.display = 'block'
          video.play();          
          setTimeout(function () {
            video.style.display = 'none'
          }, 977);
        } else {
          video.style.display = 'none'
        }
        });
        if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
          idsArray.push(elementId);
          console.log(idsArray);
        } 
      }  
    break;    
    case 'bateria-entintado-II': 
      var elementosExcluidos = ['buscador','contenedor-7','container01','links-inicialesI','links-iniciales','video-entintado','videoElement1-II','bateria-entintado-II'];         
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
      videoElements.forEach(video => {
        if (video.id === 'videoElement1-II') {
          video.style.display = 'block'
          video.currentTime = 0
          video.play()      
        } else {
          video.style.display = 'none'
        }
      })
      contibotsDistri.style.marginTop = '1%'
      const buttonElements = document.querySelectorAll('.boton-f')
      var delay = 10;
      for (var i = 0; i < buttonElements.length; i++) {
        setTimeout(function(index) {
          buttonElements[index].style.display = 'flex'
      }, delay * i,i)}

      if (screenWidth < 500) {   
        var elementosExcluidos = ['buscador','links-iniciales','links-inicialesI','container01','contenedor-7','video-entintado','videoElement1-II','bateria-entintado-II'];
        for (var i = 0; i < allContenedores.length; i++) { 
          var elemento = document.getElementById(allContenedores[i]) 
          if (elemento) {
            elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
          }
        }
        contibotsDistri.classList.remove('move-up')
        contibotsDistri.style.marginTop = '-5%'
        contVideo.classList.remove('move-up-left')
        contVid.style.display='block' 
        videoElements.forEach(video => {
          if (video.id === 'videoElement1-II') {
            video.play()      
          } else {
            video.style.display = 'none'
          }
        })
        desplegarBotones()
      }
      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      }
    break;
    case 'bancada-torre-II': 
      var elementosExcluidos = ['buscador','conti-boton-repuestos-III','butt-repuestos-III','bancada-torre-II','container01','links-inicialesI','links-iniciales','conti-video-bancada','plate-smed-I','contenedor-8','imgsIsopropil'];
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]);  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
        }
      } 
      const botonElement = document.querySelectorAll('.boton-g, .image-isopropil')
      var delay = 100;
      for (var i = 0; i < botonElement.length; i++) {
        setTimeout(function(index) {
          botonElement[index].style.display = 'flex'
        }, delay * i,i)
      }
      contVid.style.display='flex' 
      videoElements.forEach(video => {
        if (video.id === 'plate-smed-I') {
          video.currentTime = 0
          video.style.display = 'block'
          video.play()      
        } else {
          video.style.display = 'none'
        }
      })
      setTimeout(() => {
        applyImageEffects4() 
      }, 277)

    if (screenWidth < 500) {   
      var elementosExcluidos = ['buscador','conti-boton-repuestos-III','butt-repuestos-III','bancada-torre-II','container01','links-inicialesI','links-iniciales','conti-video-bancada','plate-smed-I','contenedor-8','imgsIsopropil'];
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
        }
      }

      const botonElement = document.querySelectorAll('.boton-g, .image-isopropil')
      var delay = 100;
      for (var i = 0; i < botonElement.length; i++) {
        setTimeout(function(index) {
          botonElement[index].style.display = 'flex'
        }, delay * i,i)
      }
      contVid.style.display='flex' 
      setTimeout(() => {
        applyImageEffects4() 
      }, 277)
      videoElements.forEach(video => {
        if (video.id === 'plate-smed-I') {
          video.style.display = 'flex'
          video.play()      
        } else {
          video.style.display = 'none'
        }
      })
      contibotsDistriVI.classList.remove('move-butts-IV')
      contVideoSmed.classList.remove('move-vid-smed-II')
      contImageneSmed.classList.remove('move-images-IV')
      buttRepuestV.classList.remove('move-repuest-IV')
      desplegarBotonesV()  
     }

      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      }
    break;
    case 'sitema-humedad':     
      var elementosExcluidos = ['buscador','container01','sitema-humedad','links-inicialesI','links-iniciales','sitio-en-construccion']
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i])  
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
        }
      } 
      document.getElementById('butt-sitio').style.display='flex'
      if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
        idsArray.push(elementId);
        console.log(idsArray);
      } 
    break;
    case 'fua':
    break;
    case 'lup':
    break;
    default:
  }  
} 
function desplegarBotones(){
  const buttonElements = document.querySelectorAll('.boton-f')
  var delay = 100;
  for (var i = 0; i < buttonElements.length; i++) {
    setTimeout(function(index) {
      buttonElements[index].style.display = 'flex'
  }, delay * i,i)}

  setTimeout(function () {
    transicionElementos()
  }, 477);
}
function desplegarBotonesII(){
  const buttonElements = document.querySelectorAll('.boton-f')
  var delay = 100;
  for (var i = 0; i < buttonElements.length; i++) {
    setTimeout(function(index) {
      buttonElements[index].style.display = 'flex'
  }, delay * i,i)}

  setTimeout(function () {
    transicionElementosII()
  }, 477);
}
function desplegarBotonesIII(){
  const buttonElements = document.querySelectorAll('.boton-f')
  var delay = 100;
  for (var i = 0; i < buttonElements.length; i++) {
    setTimeout(function(index) {
      buttonElements[index].style.display = 'flex'
  }, delay * i,i)}

  setTimeout(function () {
    transicionElementosIII()
  }, 477);
}  
function desplegarBotonesIV(){
  const buttonElements = document.querySelectorAll('.boton-f')
  var delay = 100;
  for (var i = 0; i < buttonElements.length; i++) {
    setTimeout(function(index) {
      buttonElements[index].style.display = 'flex'
  }, delay * i,i)}

  setTimeout(function () {
    transicionElementosIV()
  }, 477);
}
function desplegarBotonesV(){
  const buttonElements = document.querySelectorAll('.boton-f')
  var delay = 100;
  for (var i = 0; i < buttonElements.length; i++) {
    setTimeout(function(index) {
      buttonElements[index].style.display = 'flex'
  }, delay * i,i)}

  setTimeout(function () {
    transicionElementosV()
  }, 477);
}
function cambioContenedor(elementId){
  var elementsToHide = document.querySelectorAll('.alimentador, .uTeñido, .desbobinador,.unidProceso,.rebobinador,.links-inicialesI,.links-iniciales') 
  var torreImpresion = document.getElementById('torre-imp')
  var botonTorre = document.getElementById('toggleVideoButton')
  var botAtras = document.getElementById('bot-atras10')
  var botTrasII = document.getElementById('bot-atras11')
  for (var i = 0; i < elementsToHide.length; i++) {
    elementsToHide[i].style.display = 'none'
  }
  botAtras.style.display='block'
  botTrasII.style.display='block'
  torreImpresion.style.position='absolute'
  torreImpresion.style.left='77px'
  botonTorre.style.position='absolute'
  botonTorre.style.left='307px'
  if (typeof elementId !== 'undefined') {
    const index = idsArray.indexOf(elementId);
    if (index !== -1) {
      idsArray.splice(index, 1);
    }
    idsArray.push(elementId);
    console.log(idsArray);
  }
}
function building(){
  var elementosExcluidos = ['buscador','container01','sitema-humedad','links-inicialesI','links-iniciales','sitio-en-construccion']
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  } 
  if (typeof elementId !== 'undefined' && !idsArray.includes(elementId)) {
    idsArray.push(elementId);
    console.log(idsArray);
  } 
  let botonSitio = document.getElementById('butt-sitio')
  botonSitio.style.display='flex'
}
const neumatica = document.getElementById('neumatica');
const moveButton = document.getElementById('moveButton');
let moved = false;
padreManometro.addEventListener('dblclick', () => {
  var elementosExcluidos = ['padre-1','imag1','instrucciones_manometro','vid_festo']  
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  if (!moved) {
    padreManometro.style.left = '1%'
    padreManometro.style.top = '-30%'
    padreManometro.style.width = 'calc(100% - 34%)'
    moved = true;
  }
  else {
    imagenesPasoApaso('contImgEntrenos','','contBotInfeed','imag1','link1','control-neumatico')
    padreManometro.style.top = ''
    padreManometro.style.left = ''
    padreManometro.style.width = ''
    moved = false;
  }
})
botonClick.addEventListener('mouseup', () => {                   
  cierraContenedores('desbobinadorId','boton1')
})
botonClickII.addEventListener('mouseup', () => {
  cierraContenedores('uTeñido')
})   
botonClickIII.addEventListener('mouseup', () => {                
 cierraContenedores('alimentadorId')
}) 
botonClickIV.addEventListener('mouseup', () => {                
  cierraContenedores('unidProceso')
}) 
botonClickV.addEventListener('mouseup', () => {                
  cierraContenedores('rebobinador')
}) 
videoPrisma.addEventListener('mouseup', () =>{
  abrirPrepress('pre-prensa')
})

