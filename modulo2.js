function deslizaContenedor(identificador, idButton) {
  clearAllIntervals() 
  arrayIdButtsMA.forEach(element => {                                                                                                        
    var elemento = document.getElementById(element)
    if (elemento) {
      if (element === idButton) {
         elemento.style.backgroundColor = 'orange'
         elemento.style.color = 'black'
      } else {
        elemento.style.backgroundColor = 'rgba(83, 82, 82, 0.678)'
        elemento.style.color = ''
      }
    }
  })
  contiBtt.forEach(element => {                                                                                                                                                   
    var elemento = document.getElementById(element)
    if (elemento) {
      elemento.style.backgroundColor = ''
    }
  })  
  if (document.body.style.zoom !== "100%") {                                                                                          
    document.body.style.zoom = "100%";
  }
  switch(identificador){
    case 'troubleshooting' :
      var elementosExcluidos = ['buscador','container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conteneMantaut']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
      document.getElementById('conti-boton').removeAttribute('style');
      var contenedor = document.getElementById(identificador)                                                     
      if (identificador !== 'troubleshooting' && contenedor) {
        contenedor.style.display = 'flex'
      } else{
        var contenedorPadre = document.getElementById(identificador)
        if (contenedorPadre) {
          contenedorPadre.style.display = 'flex'  
          var elementosHijos = contenedorPadre.children;  
          for (var i = 0; i < elementosHijos.length; i++) {
            elementosHijos[i].style.display = 'none'
          }
        }
      }
      mostrarTroublesshIntervalo()
    break;
    case 'canvasContainer2' :
      var elementosExcluidos = ['def2','buscador','container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','canvasContainer2','MiGrafica','wall_street_II','general']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
      document.getElementById('conti-boton').removeAttribute('style');
      incrementoHeightVII()
      document.getElementById('wall_street_II').style.top = '44%'
      document.getElementById('wall_street_II').style.left = '29.5%'
    break;
    case 'contChecks' :
      var elementosExcluidos = ['buscador','container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','contChecks','general','first_half']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
      document.getElementById('conti-boton').removeAttribute('style');
      stopWidth = false
      let mitad1 = document.getElementById('first_half')
      let general = document.getElementById('general')
      general.style.display = 'block'
      mitad1.style.display = 'grid'

      setTimeout(() => {
        firstMovement()
      }, 7);
      setTimeout(() => {
        secondMovement()
      }, 117);

      if(screenWidth < 500){
        var contChecks = document.getElementById(identificador);
        if (contChecks !== null) {
          contChecks.style.marginTop = '12%';
        }
      }
    break;
    case 'canvasContainer3' :
      var elementosExcluidos = ['buscador','container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','canvasContainer3','general','padre']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
      inicioTracker()
      if(screenWidth < 500){
        var canvas3 = document.getElementById(identificador);
        if (canvas3 !== null) {
          canvas3.style.marginTop = '12%';
        }
        document.getElementById('conti-boton').style.top='14vh'
      }
    break;
    case 'contImagNeg' :  
      var elementosExcluidos = ['buscador','container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conteneMantaut','contImagNeg','general','equalizer']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
      document.getElementById('conti-boton').removeAttribute('style');
      changeColorToGreen()
      const numeros = document.querySelectorAll('.column_spans')
      document.getElementById('column_2').style.marginTop = '-6%'
      numeros.forEach((numero) => {
        numero.style.marginTop = '260%'
      });

      /* if(screenWidth < 500){
        var imagNeg = document.getElementById(identificador);
        if (imagNeg !== null) {
          imagNeg.style.marginTop = '12%';
        }
      } */
    break;
    case 'contImagGraf' :
      var elementosExcluidos = ['buscador','container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conteneMantaut','contImagGraf','general','patern']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
      document.getElementById('conti-boton').removeAttribute('style');
      detenerCicodelia()
      let padre = document.getElementById('patern')
      padre.style.display = 'grid'
      changeColors()
      if(screenWidth < 500){
        var imagGraf = document.getElementById(identificador);
        if (imagGraf !== null) {
          imagGraf.style.marginTop = '12%';
        }
      }
    break;
    case 'conti-boton-kaizen' :
      var elementosExcluidos = ['buscador','container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conti-boton-kaizen']  
      for (var i = 0; i < allContenedores.length; i++) { 
        var elemento = document.getElementById(allContenedores[i]) 
        if (elemento) {
          elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none' 
        }
      }
      document.getElementById('conti-boton').removeAttribute('style');
      hideButtonsKaizenRetraso()
      setTimeout(function() {
        showButtonsKaizenRetraso();
      }, 500);
      break;
    default:
  }
}
function resetearBarras(){
  let ensayos = document.querySelectorAll('.first_table .barras .horizontales');
  ensayos.forEach(ensayo => {
    ensayo.style.top = '';
    ensayo.style.height = '';
    ensayo.style.width = '';
  });
  imgWallStreetI.style.width = ''
  imgWallStreet.style.height = ''
  parentElements.style.display = 'none'

  isAnimatingXIII = false      
  isAnimatingXIV = false      
  isAnimatingXV = false 
  isAnimatingXII = false
  isAnimatingXI = false
  isAnimatingX = false
  isAnimatingIX = false
  isAnimatingVIII = false
  isAnimatingVII = false
  isAnimatingVI = false
  /* isAnimatingXVI = false */
}
// COMBINACION TECLAS EJECUTA FUNCION
document.addEventListener('keydown', function(event) {             
  if (event.ctrlKey && event.shiftKey) {
    switch (event.key) {
      case 'Z':
        
        abrirSeccionOperativa('cont-titulo-operacion')       
        setTimeout(function() {
          ElementosMaII('conteneMantaut')        
        },577)
        setTimeout(function() {
          resultadosMA()
        },977) 
        /*setTimeout(function() {
          muestraRodillo('videoElement2','images-distribuidor')
        },1177) 
        setTimeout(function() {
          deslizaContenedor('conti-boton-kaizen','kaizen')           
        },1377)
        setTimeout(function() {
          rodillosKaizen('btn17','')                               
        },1677) 
        setTimeout(function() {
          abrirSeccionContinua()              
        },1977)
        setTimeout(function() {
          cierraContenedores('uTeñido')         
        },2177)
        setTimeout(function() {
          UnidadTeñido('boton9')
        },3077) 
        setTimeout(function() {
          rodillosTeñido('btn06')
        },3377)
        setTimeout(function() {
          lubricaDiario('lub-diario','labl1')
        },3677) */
      
      break;
      case 'H': 
      changeColorRedAndBack()      
      break;
      case 'X':
        Geometria()
      break;                  
    }
  }
});
// SECCION EXTRAER DATOS A  ELEMENTOS DEL DOM
function Geometria() {
  console.clear();
  var contiBoton = document.getElementById('icon-carlos-I') 
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
  
  var contiBotonI = document.getElementById('kaizenCont') 
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
function updateAna() {
  // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer4')
  },500) // 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer7')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer5')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer6')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer8')
  }, 700) // 0.3 segundos (300 ms + 300 ms) 
  setTimeout(function() {
    graficosAutomaticos('canvasContainer9')
  }, 700) // 0.3 segundos (300 ms + 300 ms)

  var nuevosDatos = [/* Nuevos valores de datos */ 0,70,30,70,50,90]
  // Actualiza los datos del gráfico
  chart7.data.datasets[0].data = nuevosDatos;
  // Actualiza el gráfico
  chart7.update()
  ///////////////////////////////////////////////////////////////////
  var nuevosDatosI = [/* Nuevos valores de datos */ 55,5,95,30,10,10]
  // Actualiza los datos del gráfico
  chart8.data.datasets[0].data = nuevosDatosI;
  // Actualiza el gráfico
  chart8.update()
  //////////////////////////////////////////////////////////////////
  var nuevosDatosII = [/* Nuevos valores de datos */ 30,50,60,77,20,8]
  // Actualiza los datos del gráfico
  chart9.data.datasets[0].data = nuevosDatosII;
  // Actualiza el gráfico
  chart9.update() 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosIII = [/* Nuevos valores de datos */ 5,17,8,30,44,10]
  // Actualiza los datos del gráfico
  chart10.data.datasets[0].data = nuevosDatosIII;
  // Actualiza el gráfico
  chart10.update()
    //////////////////////////////////////////////////////////////////
  var nuevosDatosIIII = [/* Nuevos valores de datos */ 11,50,20,80,10,100]
  // Actualiza los datos del gráfico
  chart11.data.datasets[0].data = nuevosDatosIIII;
  // Actualiza el gráfico
  chart11.update() 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosV = [/* Nuevos valores de datos */ 5,17,33,45,51,57,67,99]           
  // Actualiza los datos del gráfico
  chart12.data.datasets[0].data = nuevosDatosV;
  // Actualiza el gráfico
  chart12.update() 

}
function updateAnaII() {
  // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos    
  setTimeout(function() {
  graficosAutomaticos('canvasContainer4-II')
},500) // 0.3 segundos
setTimeout(function() {
  graficosAutomaticos('canvasContainer7-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)
setTimeout(function() {
  graficosAutomaticos('canvasContainer5-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)
setTimeout(function() {
  graficosAutomaticos('canvasContainer6-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)
/*setTimeout(function() {
  graficosAutomaticos('canvasContainer8-II')
}, 700) // 0.3 segundos (300 ms + 300 ms) */
setTimeout(function() {
  graficosAutomaticos('canvasContainer9-II')  
}, 700) // 0.3 segundos (300 ms + 300 ms)

var nuevosDatos = [/* Nuevos valores de datos */ 0,70,30,70,50,90]
// Actualiza los datos del gráfico
chart7II.data.datasets[0].data = nuevosDatos;
// Actualiza el gráfico
chart7II.update()
///////////////////////////////////////////////////////////////////
var nuevosDatosI = [/* Nuevos valores de datos */ 55,5,95,30,10,10]            
// Actualiza los datos del gráfico
chart8II.data.datasets[0].data = nuevosDatosI;
// Actualiza el gráfico
chart8II.update()
//////////////////////////////////////////////////////////////////
var nuevosDatosII = [/* Nuevos valores de datos */ 30,50,60,77,20,8]        
// Actualiza los datos del gráfico
chart9II.data.datasets[0].data = nuevosDatosII;
// Actualiza el gráfico
chart9II.update() 
//////////////////////////////////////////////////////////////////
var nuevosDatosIII = [/* Nuevos valores de datos */ 5,17,8,30,44,10]
// Actualiza los datos del gráfico
chart10II.data.datasets[0].data = nuevosDatosIII;
// Actualiza el gráfico
chart10II.update()
  //////////////////////////////////////////////////////////////////
var nuevosDatosIIII = [/* Nuevos valores de datos */ 11,50,20,80,10,100]
// Actualiza los datos del gráfico
chart11II.data.datasets[0].data = nuevosDatosIIII;
// Actualiza el gráfico
chart11II.update() 
//////////////////////////////////////////////////////////////////
var nuevosDatosV = [/* Nuevos valores de datos */ 5,17,33,45,51,57,67,99]
// Actualiza los datos del gráfico
chart12II.data.datasets[0].data = nuevosDatosV;
// Actualiza el gráfico
chart12II.update() 

}
function updateMario() {
  // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer4')
  },500) // 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer7')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer5')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer6')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer8')
  }, 700) // 0.3 segundos (300 ms + 300 ms) 
  setTimeout(function() {
    graficosAutomaticos('canvasContainer9')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  var nuevosDatos = [/* Nuevos valores de datos */ 100,20,70,10,80,90]
  // Actualiza los datos del gráfico
  chart7.data.datasets[0].data = nuevosDatos;
  // Actualiza el gráfico
  chart7.update()
  ///////////////////////////////////////////////////////////////////
  var nuevosDatosI = [/* Nuevos valores de datos */ 30,25,90,110,50,77]
  // Actualiza los datos del gráfico
  chart8.data.datasets[0].data = nuevosDatosI;
  // Actualiza el gráfico
  chart8.update()
  //////////////////////////////////////////////////////////////////
  var nuevosDatosII = [/* Nuevos valores de datos */ 100,90,10,30,70,10]
  // Actualiza los datos del gráfico
  chart9.data.datasets[0].data = nuevosDatosII;
  // Actualiza el gráfico
  chart9.update() 
    //////////////////////////////////////////////////////////////////
    var nuevosDatosIII = [/* Nuevos valores de datos */ 99,11,70,47,17,80]
    // Actualiza los datos del gráfico
    chart10.data.datasets[0].data = nuevosDatosIII;
    // Actualiza el gráfico
    chart10.update()
      //////////////////////////////////////////////////////////////////
  var nuevosDatosIIII = [/* Nuevos valores de datos */ 10,80,50,20,90,40]
  // Actualiza los datos del gráfico
  chart11.data.datasets[0].data = nuevosDatosIIII;
  // Actualiza el gráfico
  chart11.update() 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosV = [/* Nuevos valores de datos */ 55,67,73,70,65,80,80,91]
  // Actualiza los datos del gráfico
  chart12.data.datasets[0].data = nuevosDatosV;
  // Actualiza el gráfico
  chart12.update() 
}
function updateMarioII() {
  // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
  setTimeout(function() {
  graficosAutomaticos('canvasContainer4-II')
},500) // 0.3 segundos
setTimeout(function() {
  graficosAutomaticos('canvasContainer7-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)
setTimeout(function() {
  graficosAutomaticos('canvasContainer5-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)
setTimeout(function() {
  graficosAutomaticos('canvasContainer6-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)
/*setTimeout(function() {
  graficosAutomaticos('canvasContainer8')
}, 700) // 0.3 segundos (300 ms + 300 ms)*/ 
setTimeout(function() {
  graficosAutomaticos('canvasContainer9-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)
var nuevosDatos = [/* Nuevos valores de datos */ 100,20,70,10,80,90]
// Actualiza los datos del gráfico
chart7II.data.datasets[0].data = nuevosDatos;
// Actualiza el gráfico
chart7II.update()
///////////////////////////////////////////////////////////////////
var nuevosDatosI = [/* Nuevos valores de datos */ 30,25,90,110,50,77]
// Actualiza los datos del gráfico
chart8II.data.datasets[0].data = nuevosDatosI;
// Actualiza el gráfico
chart8II.update()
//////////////////////////////////////////////////////////////////
var nuevosDatosII = [/* Nuevos valores de datos */ 100,90,10,30,70,10]
// Actualiza los datos del gráfico
chart9II.data.datasets[0].data = nuevosDatosII;
// Actualiza el gráfico
chart9II.update() 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosIII = [/* Nuevos valores de datos */ 99,11,70,47,17,80]
  // Actualiza los datos del gráfico
  chart10II.data.datasets[0].data = nuevosDatosIII;
  // Actualiza el gráfico
  chart10II.update()
    //////////////////////////////////////////////////////////////////
var nuevosDatosIIII = [/* Nuevos valores de datos */ 10,80,50,20,90,40]
// Actualiza los datos del gráfico
chart11II.data.datasets[0].data = nuevosDatosIIII;
// Actualiza el gráfico
chart11II.update() 
//////////////////////////////////////////////////////////////////
var nuevosDatosV = [/* Nuevos valores de datos */ 55,67,73,70,65,80,80,91]
// Actualiza los datos del gráfico
chart12II.data.datasets[0].data = nuevosDatosV;
// Actualiza el gráfico
chart12II.update() 
}
function updateSandra() {
  // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer4')
  },500) // 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer7')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer5')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer6')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer8')
  }, 700) // 0.3 segundos (300 ms + 300 ms) 
  setTimeout(function() {
    graficosAutomaticos('canvasContainer9')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
var nuevosDatos = [/* Nuevos valores de datos */ 33,20,100,50,80,10]
// Actualiza los datos del gráfico
chart7.data.datasets[0].data = nuevosDatos;
// Actualiza el gráfico
chart7.update()
///////////////////////////////////////////////////////////////////
var nuevosDatosI = [/* Nuevos valores de datos */ 30,75,20,100,50,17]
// Actualiza los datos del gráfico
chart8.data.datasets[0].data = nuevosDatosI;
// Actualiza el gráfico
chart8.update()
//////////////////////////////////////////////////////////////////
var nuevosDatosII = [/* Nuevos valores de datos */ 33,50,30,90,100,5]
// Actualiza los datos del gráfico
chart9.data.datasets[0].data = nuevosDatosII;
// Actualiza el gráfico
chart9.update() 
//////////////////////////////////////////////////////////////////
  var nuevosDatosIII = [/* Nuevos valores de datos */ 9,5,70,97,37,60]
  // Actualiza los datos del gráfico
  chart10.data.datasets[0].data = nuevosDatosIII;
  // Actualiza el gráfico
  chart10.update()
  //////////////////////////////////////////////////////////////////
var nuevosDatosIIII = [/* Nuevos valores de datos */ 30,40,250,600,45,800]
// Actualiza los datos del gráfico
chart11.data.datasets[0].data = nuevosDatosIIII;
// Actualiza el gráfico
chart11.update() 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosV = [/* Nuevos valores de datos */ 50,37,33,17,51,77,67,70]
  // Actualiza los datos del gráfico
  chart12.data.datasets[0].data = nuevosDatosV;
  // Actualiza el gráfico
  chart12.update()  
}
function updateSandraII() {
  // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
  setTimeout(function() {
  graficosAutomaticos('canvasContainer4-II')
},500) // 0.3 segundos
setTimeout(function() {
  graficosAutomaticos('canvasContainer7-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)
setTimeout(function() {
  graficosAutomaticos('canvasContainer5-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)
setTimeout(function() {
  graficosAutomaticos('canvasContainer6-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)
/*  setTimeout(function() {
  graficosAutomaticos('canvasContainer8-II')
}, 700) // 0.3 segundos (300 ms + 300 ms) */ 
setTimeout(function() {
  graficosAutomaticos('canvasContainer9-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)
var nuevosDatos = [/* Nuevos valores de datos */ 33,20,100,50,80,10]
// Actualiza los datos del gráfico
chart7II.data.datasets[0].data = nuevosDatos;
// Actualiza el gráfico
chart7II.update()
///////////////////////////////////////////////////////////////////
var nuevosDatosI = [/* Nuevos valores de datos */ 30,75,20,100,50,17]
// Actualiza los datos del gráfico
chart8II.data.datasets[0].data = nuevosDatosI;
// Actualiza el gráfico
chart8II.update()
//////////////////////////////////////////////////////////////////
var nuevosDatosII = [/* Nuevos valores de datos */ 33,50,30,90,100,5]
// Actualiza los datos del gráfico
chart9II.data.datasets[0].data = nuevosDatosII;
// Actualiza el gráfico
chart9II.update() 
//////////////////////////////////////////////////////////////////
var nuevosDatosIII = [/* Nuevos valores de datos */ 9,5,70,97,37,60]
// Actualiza los datos del gráfico
chart10II.data.datasets[0].data = nuevosDatosIII;
// Actualiza el gráfico
chart10II.update()
//////////////////////////////////////////////////////////////////
var nuevosDatosIIII = [/* Nuevos valores de datos */ 30,40,250,600,45,800]
// Actualiza los datos del gráfico
chart11II.data.datasets[0].data = nuevosDatosIIII;
// Actualiza el gráfico
chart11II.update() 
//////////////////////////////////////////////////////////////////
var nuevosDatosV = [/* Nuevos valores de datos */ 50,37,33,17,51,77,67,70]
// Actualiza los datos del gráfico
chart12II.data.datasets[0].data = nuevosDatosV;
// Actualiza el gráfico
chart12II.update()  
}
function updateJesus() {
  // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer4')
  },500) // 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer7')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer5')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer6')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer8')
  }, 700) // 0.3 segundos (300 ms + 300 ms) 
  setTimeout(function() {
    graficosAutomaticos('canvasContainer9')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  var nuevosDatos = [/* Nuevos valores de datos */ 10,100,10,20,50,90]
  // Actualiza los datos del gráfico
  chart7.data.datasets[0].data = nuevosDatos;
  // Actualiza el gráfico
  chart7.update()  
  ///////////////////////////////////////////////////////////////////
var nuevosDatosI = [/* Nuevos valores de datos */ 100,50,10,100,50,17]
// Actualiza los datos del gráfico
chart8.data.datasets[0].data = nuevosDatosI;
// Actualiza el gráfico
chart8.update()
//////////////////////////////////////////////////////////////////
var nuevosDatosII = [/* Nuevos valores de datos */ 10,100,50,30,10,90]
// Actualiza los datos del gráfico
chart9.data.datasets[0].data = nuevosDatosII;
// Actualiza el gráfico
chart9.update() 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosIII = [/* Nuevos valores de datos */ 9,90,70,47,87,10]
  // Actualiza los datos del gráfico
  chart10.data.datasets[0].data = nuevosDatosIII;
  // Actualiza el gráfico
  chart10.update()
    //////////////////////////////////////////////////////////////////
var nuevosDatosIIII = [/* Nuevos valores de datos */ 100,8,50,70,30,10]
// Actualiza los datos del gráfico
chart11.data.datasets[0].data = nuevosDatosIIII;
// Actualiza el gráfico
chart11.update()
  //////////////////////////////////////////////////////////////////
  var nuevosDatosV = [/* Nuevos valores de datos */ 33,37,33,77,45,77,80,87]
  // Actualiza los datos del gráfico
  chart12.data.datasets[0].data = nuevosDatosV;
  // Actualiza el gráfico
  chart12.update()   
}
function updateJesusII() {
  // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
  setTimeout(function() {
  graficosAutomaticos('canvasContainer4-II')
},500) // 0.3 segundos
setTimeout(function() {
  graficosAutomaticos('canvasContainer7-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)
setTimeout(function() {
  graficosAutomaticos('canvasContainer5-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)
setTimeout(function() {
  graficosAutomaticos('canvasContainer6-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)
/*setTimeout(function() {
    graficosAutomaticos('canvasContainer8-II')
}, 700) // 0.3 segundos (300 ms + 300 ms) */ 
setTimeout(function() {
  graficosAutomaticos('canvasContainer9-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)
var nuevosDatos = [/* Nuevos valores de datos */ 10,100,10,20,50,90]
// Actualiza los datos del gráfico
chart7II.data.datasets[0].data = nuevosDatos;
// Actualiza el gráfico
chart7II.update()  
///////////////////////////////////////////////////////////////////
var nuevosDatosI = [/* Nuevos valores de datos */ 100,50,10,100,50,17]
// Actualiza los datos del gráfico
chart8II.data.datasets[0].data = nuevosDatosI;
// Actualiza el gráfico
chart8II.update()
//////////////////////////////////////////////////////////////////
var nuevosDatosII = [/* Nuevos valores de datos */ 10,100,50,30,10,90]
// Actualiza los datos del gráfico
chart9II.data.datasets[0].data = nuevosDatosII;
// Actualiza el gráfico
chart9II.update() 
//////////////////////////////////////////////////////////////////
var nuevosDatosIII = [/* Nuevos valores de datos */ 9,90,70,47,87,10]
// Actualiza los datos del gráfico
chart10II.data.datasets[0].data = nuevosDatosIII;
// Actualiza el gráfico
chart10II.update()
  //////////////////////////////////////////////////////////////////
var nuevosDatosIIII = [/* Nuevos valores de datos */ 100,8,50,70,30,10]
// Actualiza los datos del gráfico
chart11II.data.datasets[0].data = nuevosDatosIIII;
// Actualiza el gráfico
chart11II.update()
//////////////////////////////////////////////////////////////////
var nuevosDatosV = [/* Nuevos valores de datos */ 33,37,33,77,45,77,80,87]
// Actualiza los datos del gráfico
chart12II.data.datasets[0].data = nuevosDatosV;
// Actualiza el gráfico
chart12II.update()   
}
function updateJorge() {
  // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer4')
  },500) // 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer7')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer5')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer6')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer8')
  }, 700) // 0.3 segundos (300 ms + 300 ms) 
  setTimeout(function() {
    graficosAutomaticos('canvasContainer9')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  var nuevosDatos = [/* Nuevos valores de datos */ 10,20,50,10,10,5]
// Actualiza los datos del gráfico
chart7.data.datasets[0].data = nuevosDatos;
// Actualiza el gráfico
chart7.update()
///////////////////////////////////////////////////////////////////
var nuevosDatosI = [/* Nuevos valores de datos */ 77,33,44,66,55,17]
// Actualiza los datos del gráfico
chart8.data.datasets[0].data = nuevosDatosI;
// Actualiza el gráfico
chart8.update()
//////////////////////////////////////////////////////////////////
var nuevosDatosII = [/* Nuevos valores de datos */ 50,5,5,10,100,77]
// Actualiza los datos del gráfico
chart9.data.datasets[0].data = nuevosDatosII;
// Actualiza el gráfico
chart9.update() 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosIII = [/* Nuevos valores de datos */ 55,17,77,100,47,7]
  // Actualiza los datos del gráfico
  chart10.data.datasets[0].data = nuevosDatosIII;
  // Actualiza el gráfico
  chart10.update()
    //////////////////////////////////////////////////////////////////
var nuevosDatosIIII = [/* Nuevos valores de datos */ 44,99,17,77,10,5]
// Actualiza los datos del gráfico
chart11.data.datasets[0].data = nuevosDatosIIII;
// Actualiza el gráfico
chart11.update() 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosV = [/* Nuevos valores de datos */ 100,37,55,77,77,77,81,99]
  // Actualiza los datos del gráfico
  chart12.data.datasets[0].data = nuevosDatosV;
  // Actualiza el gráfico
  chart12.update()  
}
function updateJorgeII() {
  // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
  setTimeout(function() {
  graficosAutomaticos('canvasContainer4-II')
},500) // 0.3 segundos
setTimeout(function() {
  graficosAutomaticos('canvasContainer7-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)
setTimeout(function() {
  graficosAutomaticos('canvasContainer5-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)
setTimeout(function() {
  graficosAutomaticos('canvasContainer6-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)
/*  setTimeout(function() {
  graficosAutomaticos('canvasContainer8-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)  */
setTimeout(function() {
  graficosAutomaticos('canvasContainer9-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)
var nuevosDatos = [/* Nuevos valores de datos */ 10,20,50,10,10,5]
  // Actualiza los datos del gráfico
  chart7II.data.datasets[0].data = nuevosDatos;
  // Actualiza el gráfico
  chart7II.update()
  ///////////////////////////////////////////////////////////////////
  var nuevosDatosI = [/* Nuevos valores de datos */ 77,33,44,66,55,17]
  // Actualiza los datos del gráfico
  chart8II.data.datasets[0].data = nuevosDatosI;
  // Actualiza el gráfico
  chart8II.update()
  //////////////////////////////////////////////////////////////////
  var nuevosDatosII = [/* Nuevos valores de datos */ 50,5,5,10,100,77]
  // Actualiza los datos del gráfico
  chart9II.data.datasets[0].data = nuevosDatosII;
  // Actualiza el gráfico
  chart9II.update() 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosIII = [/* Nuevos valores de datos */ 55,17,77,100,47,7]
  // Actualiza los datos del gráfico
  chart10II.data.datasets[0].data = nuevosDatosIII;
  // Actualiza el gráfico
  chart10II.update()
    //////////////////////////////////////////////////////////////////
  var nuevosDatosIIII = [/* Nuevos valores de datos */ 44,99,17,77,10,5]
  // Actualiza los datos del gráfico
  chart11II.data.datasets[0].data = nuevosDatosIIII;
  // Actualiza el gráfico
  chart11II.update() 
//////////////////////////////////////////////////////////////////
var nuevosDatosV = [/* Nuevos valores de datos */ 100,37,55,77,77,77,81,99]
// Actualiza los datos del gráfico
chart12II.data.datasets[0].data = nuevosDatosV;
// Actualiza el gráfico
chart12II.update()  
}
function updateAndres() {
  // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer4')
  },500) // 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer7')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer5')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer6')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer8')
  }, 700) // 0.3 segundos (300 ms + 300 ms) 
  setTimeout(function() {
    graficosAutomaticos('canvasContainer9')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  var nuevosDatos = [/* Nuevos valores de datos */ 0,20,10,0,0,5]
// Actualiza los datos del gráfico
chart7.data.datasets[0].data = nuevosDatos;
// Actualiza el gráfico
chart7.update()
///////////////////////////////////////////////////////////////////
var nuevosDatosI = [/* Nuevos valores de datos */ 7,3,4,6,5,7]
// Actualiza los datos del gráfico
chart8.data.datasets[0].data = nuevosDatosI;
// Actualiza el gráfico
chart8.update()
//////////////////////////////////////////////////////////////////
var nuevosDatosII = [/* Nuevos valores de datos */ 5,15,55,10,100,77]
// Actualiza los datos del gráfico
chart9.data.datasets[0].data = nuevosDatosII;
// Actualiza el gráfico
chart9.update() 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosIII = [/* Nuevos valores de datos */ 0,17,37,50,97,27]
  // Actualiza los datos del gráfico
  chart10.data.datasets[0].data = nuevosDatosIII;
  // Actualiza el gráfico
  chart10.update()
    //////////////////////////////////////////////////////////////////
var nuevosDatosIIII = [/* Nuevos valores de datos */ 5,29,17,47,3,19]
// Actualiza los datos del gráfico
chart11.data.datasets[0].data = nuevosDatosIIII;
// Actualiza el gráfico
chart11.update()
  //////////////////////////////////////////////////////////////////
  var nuevosDatosV = [/* Nuevos valores de datos */ 77,37,55,41,33,77,50,60]
  // Actualiza los datos del gráfico
  chart12.data.datasets[0].data = nuevosDatosV;
  // Actualiza el gráfico
  chart12.update()  
}
function updateAndresII() {
  // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
  setTimeout(function() {
  graficosAutomaticos('canvasContainer4-II')
},500) // 0.3 segundos
setTimeout(function() {
  graficosAutomaticos('canvasContainer7-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)
setTimeout(function() {
  graficosAutomaticos('canvasContainer5-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)
setTimeout(function() {
  graficosAutomaticos('canvasContainer6-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)
/*  setTimeout(function() {
  graficosAutomaticos('canvasContainer8-II')
}, 700) // 0.3 segundos (300 ms + 300 ms) */ 
setTimeout(function() {
  graficosAutomaticos('canvasContainer9-II')
}, 700) // 0.3 segundos (300 ms + 300 ms)
var nuevosDatos = [/* Nuevos valores de datos */ 0,20,10,0,0,5]
  // Actualiza los datos del gráfico
  chart7II.data.datasets[0].data = nuevosDatos;
  // Actualiza el gráfico
  chart7II.update()
  ///////////////////////////////////////////////////////////////////
  var nuevosDatosI = [/* Nuevos valores de datos */ 7,3,4,6,5,7]
  // Actualiza los datos del gráfico
  chart8II.data.datasets[0].data = nuevosDatosI;
  // Actualiza el gráfico
  chart8II.update()
  //////////////////////////////////////////////////////////////////
  var nuevosDatosII = [/* Nuevos valores de datos */ 5,15,55,10,100,77]
  // Actualiza los datos del gráfico
  chart9II.data.datasets[0].data = nuevosDatosII;
  // Actualiza el gráfico
  chart9II.update() 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosIII = [/* Nuevos valores de datos */ 0,17,37,50,97,27]
  // Actualiza los datos del gráfico
  chart10II.data.datasets[0].data = nuevosDatosIII;
  // Actualiza el gráfico
  chart10II.update()
    //////////////////////////////////////////////////////////////////
  var nuevosDatosIIII = [/* Nuevos valores de datos */ 5,29,17,47,3,19]
  // Actualiza los datos del gráfico
  chart11II.data.datasets[0].data = nuevosDatosIIII;
  // Actualiza el gráfico
  chart11II.update()
  //////////////////////////////////////////////////////////////////
  var nuevosDatosV = [/* Nuevos valores de datos */ 77,37,55,41,33,77,50,60]
  // Actualiza los datos del gráfico
  chart12II.data.datasets[0].data = nuevosDatosV;
  // Actualiza el gráfico
  chart12II.update()  
 }
 function updateCarlos() {
    // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
    setTimeout(function() {
     graficosAutomaticos('canvasContainer4')
   },500) // 0.3 segundos
   setTimeout(function() {
     graficosAutomaticos('canvasContainer7')
   }, 700) // 0.3 segundos (300 ms + 300 ms)
   setTimeout(function() {
     graficosAutomaticos('canvasContainer5')
   }, 700) // 0.3 segundos (300 ms + 300 ms)
   setTimeout(function() {
     graficosAutomaticos('canvasContainer6')
   }, 700) // 0.3 segundos (300 ms + 300 ms)
   setTimeout(function() {
     graficosAutomaticos('canvasContainer8')
   }, 700) // 0.3 segundos (300 ms + 300 ms) 
   setTimeout(function() {
     graficosAutomaticos('canvasContainer9')
   }, 700) // 0.3 segundos (300 ms + 300 ms)
   var nuevosDatos = [/* Nuevos valores de datos */ 17,99,44,0,7,5]
   // Actualiza los datos del gráfico
   chart7.data.datasets[0].data = nuevosDatos;
   // Actualiza el gráfico
   chart7.update()
   ///////////////////////////////////////////////////////////////////
   var nuevosDatosI = [/* Nuevos valores de datos */ 27,33,84,6,15,97]
   // Actualiza los datos del gráfico
   chart8.data.datasets[0].data = nuevosDatosI;
   // Actualiza el gráfico
   chart8.update()
   //////////////////////////////////////////////////////////////////
   var nuevosDatosII = [/* Nuevos valores de datos */ 15,5,55,90,100,17]
   // Actualiza los datos del gráfico
   chart9.data.datasets[0].data = nuevosDatosII;
   // Actualiza el gráfico
   chart9.update() 
    //////////////////////////////////////////////////////////////////
    var nuevosDatosIII = [/* Nuevos valores de datos */ 20,97,27,80,7,77]
    // Actualiza los datos del gráfico
    chart10.data.datasets[0].data = nuevosDatosIII;
    // Actualiza el gráfico
    chart10.update()
      //////////////////////////////////////////////////////////////////
  var nuevosDatosIIII = [/* Nuevos valores de datos */ 50,91,17,77,33,89]
  // Actualiza los datos del gráfico
  chart11.data.datasets[0].data = nuevosDatosIIII;
  // Actualiza el gráfico
  chart11.update() 
   //////////////////////////////////////////////////////////////////
   var nuevosDatosV = [/* Nuevos valores de datos */ 17,37,22,30,5,60,77,80]
   // Actualiza los datos del gráfico
   chart12.data.datasets[0].data = nuevosDatosV;
   // Actualiza el gráfico
   chart12.update()  
 }
 function updateCarlosII() {
   // Usar setTimeout para ejecutar las funciones con un intervalo de 0.3 segundos
   setTimeout(function() {
    graficosAutomaticos('canvasContainer4-II')
  },500) // 0.3 segundos
  setTimeout(function() {
    graficosAutomaticos('canvasContainer7-II')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer5-II')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  setTimeout(function() {
    graficosAutomaticos('canvasContainer6-II')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
 /*  setTimeout(function() {
    graficosAutomaticos('canvasContainer8-II')
  }, 700) // 0.3 segundos (300 ms + 300 ms) */ 
  setTimeout(function() {
    graficosAutomaticos('canvasContainer9-II')
  }, 700) // 0.3 segundos (300 ms + 300 ms)
  var nuevosDatos = [/* Nuevos valores de datos */ 17,99,44,0,7,5]
  // Actualiza los datos del gráfico
  chart7II.data.datasets[0].data = nuevosDatos;
  // Actualiza el gráfico
  chart7II.update()
  ///////////////////////////////////////////////////////////////////
  var nuevosDatosI = [/* Nuevos valores de datos */ 27,33,84,6,15,97]
  // Actualiza los datos del gráfico
  chart8II.data.datasets[0].data = nuevosDatosI;
  // Actualiza el gráfico
  chart8II.update()
  //////////////////////////////////////////////////////////////////
  var nuevosDatosII = [/* Nuevos valores de datos */ 15,5,55,90,100,17]
  // Actualiza los datos del gráfico
  chart9II.data.datasets[0].data = nuevosDatosII;
  // Actualiza el gráfico
  chart9II.update() 
   //////////////////////////////////////////////////////////////////
   var nuevosDatosIII = [/* Nuevos valores de datos */ 20,97,27,80,7,77]
   // Actualiza los datos del gráfico
   chart10II.data.datasets[0].data = nuevosDatosIII;
   // Actualiza el gráfico
   chart10II.update()
     //////////////////////////////////////////////////////////////////
   var nuevosDatosIIII = [/* Nuevos valores de datos */ 50,91,17,77,33,89]
   // Actualiza los datos del gráfico
   chart11II.data.datasets[0].data = nuevosDatosIIII;
   // Actualiza el gráfico
   chart11II.update() 
  //////////////////////////////////////////////////////////////////
  var nuevosDatosV = [/* Nuevos valores de datos */ 17,37,22,30,5,60,77,80]
  // Actualiza los datos del gráfico
  chart12II.data.datasets[0].data = nuevosDatosV;
  // Actualiza el gráfico
  chart12II.update()  
 }
 function deslizaMosaicoII(idElement) {
   var contLinkMant = document.getElementById('linksMA')
   var elementoAnterior = null;
   var elementoActual = null;
 
   if (contLinkMant !== null && contImgEntrenos !== null) {
     contLinkMant.style.display = 'none'
     contImgEntrenos.style.display = 'none'
   }
   // Verificar si el elemento ya está en el array
   if (!arrayPosicionnador.includes(idElement)) {
     arrayPosicionnador.push(idElement)
   }
   var contenedor = document.getElementById(idElement)  
   contenedor.style.display = 'flex'
   contenedor.style.left = '257px'
   var inicio = 1100;
   var velocidad = 500;
   var duracion = Math.abs(destino - inicio) / velocidad * 100;
   var inicioTiempo = null;
   function animar(tiempo) {
     if (!inicioTiempo) inicioTiempo = tiempo;
     var progreso = (tiempo - inicioTiempo) / duracion;
     var izquierda = inicio + progreso * (destino - inicio)
     if (progreso < 1) {
       contenedor.style.left = izquierda + 'px'
       requestAnimationFrame(animar)
     } else {
       contenedor.style.left = destino + 'px'
     }
   }
   requestAnimationFrame(animar)
 
   for (var i = 1; i < arrayPosicionnador.length; i++) {
     var elementoActual = document.getElementById(arrayPosicionnador[i])
     var elementoAnterior = document.getElementById(arrayPosicionnador[i - 1])
 
     if (elementoActual && elementoAnterior) {
       var estiloAnterior = window.getComputedStyle(elementoAnterior)
       var posicionAnterior = parseFloat(estiloAnterior.getPropertyValue('left'))
       var anchoAnterior = parseFloat(estiloAnterior.getPropertyValue('width'))
 
       destino = posicionAnterior + anchoAnterior;
     }
   }
 
 }
 function ampliaIndicaciones(index) {
   var botonConico = document.getElementById('bot-indicacionesII')
   var indicEjeI = document.getElementById('indicaciones-conico')
   var indicEje = document.getElementById('indicaciones-eje') 
   var conico = document.getElementById('conico')
   var eje = document.getElementById('eje')
 
   switch (index) {
     case 'eje':
     eje.style.width = (window.innerWidth * 0.75) + 'px' 
     eje.style.height = window.innerHeight + 'px' 
     indicEje.style.display = 'flex'
     eje.style.position = 'fixed'
     conico.style.zIndex = '0'     
     eje.style.zIndex = '999'
     eje.style.left = '0' 
     eje.style.top = '0' 
     
     break;
     case 'conico':
       botonConico.style.display = 'block'
       indicEjeI.style.display = 'flex' 
       conico.style.position = 'fixed'
       conico.style.height = window.innerHeight + 'px' 
       conico.style.width = (window.innerWidth * 0.75) + 'px'    
       conico.style.zIndex = '999'
       conico.style.left = '0' 
       conico.style.top = '0'    
       break;
     case 2:
     break;
     case 3:
     break;
     default:
     break;
   }
 }
 function ocultarIndicaciones(idIndicador) {
   /* var contenedor = document.getElementById('imgsRepuestos') */
   var indicEjeI = document.getElementById('indicaciones-conico')
   var indicEje = document.getElementById('indicaciones-eje')
   var conico = document.getElementById('conico')
   var eje = document.getElementById('eje')
 
   switch(idIndicador) {
     case 'eje':
       indicEje.style.display = 'none'
       eje.style.position = 'relative'
       eje.style.height = '117px'
       eje.style.display = 'flex'
       eje.style.width = '143px'
     break;
     case 'conico':
       conico.style.position = 'relative'
       indicEjeI.style.display = 'none'
       conico.style.display = 'flex'  
       conico.style.height = '117px'
       conico.style.width = '143px'
     break;  
     default:
   }
   linkListI.style.display = "none";  
   linkList.style.display = "none";
 
 }
 function rodillosKaizen(idButton,vidElem) {
   var buttsTerceros = document.getElementsByClassName('butt-mautonomo-planos') 
   var imgsEstudio = document.getElementById('mejoras-kai')
   var casoEstudio = document.getElementById('casos-kaizen')
   var contMateriales = document.getElementById('materiales-kaizen')
   var contplanosKaizen = document.getElementById('planos-kaizen')
   var videoKaizen = document.getElementById('videoElem')
   var imgsPlanos = document.getElementsByClassName('imgs-Planos')
   var contBotKaizen = document.getElementById('conti-boton-kaizen')
   var conPlanos = document.getElementById('planos-kaizen')
   var bton12 = document.getElementById('btn12')
   if (bton12 !== null) {
     bton12.style.backgroundColor = '' 
     bton12.style.color = ''
     bton12.innerText = 'IMPLEMENTADOS'
   }
   switch(idButton){
     case 'btn10':
       var elementosExcluidos = ['buscador','container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conti-boton-kaizen','toyota-kaizen']  
       for (var i = 0; i < allContenedores.length; i++) { 
         var elemento = document.getElementById(allContenedores[i])  
         if (elemento) {
           elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
         }
       } 
       if(screenWidth < 500){
         for (var i = 0; i < buttsToyota.length; i++) {
          var elemento = document.getElementById(buttsToyota[i])      
           var estiloDisplay = window.getComputedStyle(elemento).getPropertyValue('display')
           elemento.style.display = 'none'
         }
         casoEstudio.removeAttribute("style");
         imgsEstudio.classList.remove('move-casos')        
         casoEstudio.classList.remove('move-label') 
         casoEstudio.removeAttribute('style')
         casoEstudio.style.left = '-63%';
         casoEstudio.style.display = 'none' 
         imgsEstudio.style.display = 'none'       
         const imagenes = document.querySelectorAll('.imgs-toyota');
         imagenes.forEach((imagen, index) => {
           setTimeout(() => {
               imagen.style.display = 'block';
           }, 400 + index * 177);
           setTimeout(() => {
             imgsEstudio.style.display = 'flex'       
             casoEstudio.style.display = 'flex'  
             casoEstudio.classList.remove('move-label')    
           }, 1700);
           setTimeout(() => {
             casoEstudio.classList.add('move-label')         
           }, 1710);
           setTimeout(() => {
             imgsEstudio.classList.add('move-casos')         
           }, 1910);  
         });
       } else{               
       for (var i = 0; i < buttsToyota.length; i++) {
         var elemento = document.getElementById(buttsToyota[i])      
         if (elemento) {
           // Accede a la propiedad 'display' utilizando window.getComputedStyle
           var estiloDisplay = window.getComputedStyle(elemento).getPropertyValue('display')       
           // Verifica si la propiedad 'display' es 'none' y cámbiala a 'flex' si es necesario
           if (estiloDisplay === 'none') {
             elemento.style.display = 'flex'
           }
         }
       }
       transicionImagenes()
     }
 
     break;
     case 'btn11':
       var elementosExcluidos = ['buscador','container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conti-boton-planos','conti-boton-kaizen']  
       for (var i = 0; i < allContenedores.length; i++) { 
         var elemento = document.getElementById(allContenedores[i])  
         if (elemento) {
           elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
         }
       }  
       ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
       for (var i = 0; i < arrayButtsPlanos.length; i++) {                                                                            /// OCULTA TERCEROS BOTONES
         var elemento = document.getElementById(arrayButtsPlanos[i])
         if (elemento) {
           elemento.style.display = 'none'
         }
       }
     break; 
     case 'btn12':
       var miBot = document.getElementById('btn12')
       var videoKaizen = document.getElementById('vidElem')
       var contBotKaizen = document.getElementById('conti-boton-kaizen')
       contadorClicks++;
       console.log(contadorClicks)
       if (contadorClicks === 1) {
         miBot.innerText = 'ANTES';
         miBot.style.backgroundColor = 'red' 
         var elementosExcluidos = ['buscador','container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conti-boton-kaizen','conti-boton-planos','toyota-kaizen-antes']
         for (var i = 0; i < allContenedores.length; i++) { 
           var elemento = document.getElementById(allContenedores[i])  
           if (elemento) {
             elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
           }
         } 
         if (screenWidth < 500){
           /* contiButts.style.top = '7%'
           contiButts.removeAttribute('style')
           contBotKaizen.removeAttribute('style') */
         }
       } else if (contadorClicks === 2) {
           miBot.innerText = 'DESPUES';
           miBot.style.backgroundColor = 'green' 
           var elementosExcluidos = ['buscador','container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conti-boton-kaizen','conti-boton-planos','kaizenCont','vidElem']  
           for (var i = 0; i < allContenedores.length; i++) { 
             var elemento = document.getElementById(allContenedores[i])  
             if (elemento) {
               elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
             }
           } 
           videoKaizen.style.display = 'flex'
           videoKaizen.currentTime = 0
           videoKaizen.play()  
           // Reiniciar la variable a cero después del segundo clic
           contadorClicks = 0;
           if (screenWidth < 500){
             contBotKaizen.removeAttribute('style')
             document.getElementById('conti-boton-kaizen').style.display='flex'
           }
         }
       for (var i = 0; i < buttsTerceros.length; i++) {
         var boton = buttsTerceros[i]
         setTimeout(function(currentBoton) { 
           return function() {
             currentBoton.style.display = 'block'
             setTimeout(function() {
               currentBoton.style.transform = 'scale(4)'
               setTimeout(function() {
                 currentBoton.style.transform = 'scale(1)'
               }, 200)
             }, 200)
           };
         }(boton), i * 100) // Multiplicar por i para aplicar el intervalo adecuado
       }       
     break;
     case 'btn13':
       var elementosExcluidos = ['buscador','container01','links-inicialesI','links-iniciales','planos-kaizen','conteneMantaut','conti-boton-kaizen','conti-boton','conti-boton-planos']  
       for (var i = 0; i < allContenedores.length; i++) { 
         var elemento = document.getElementById(allContenedores[i])  
         if (elemento) {
           elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
         }
       }  
       ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
       Array.from(buttsTerceros).forEach(elemento => {                                                                                /// MOSTRAR BOTONES TERCEROS
         var element = document.getElementById(elemento.id) // Aquí asumo que cada elemento tiene un atributo 'id'
         if (element) {
           element.style.display = 'inline-block'
         }
       })
       conPlanos.style.display = 'flex'
       for(var i = 0; i < imgsPlanos.length; i ++ ){
         var elto = imgsPlanos[i]
         if(elto){
           elto.style.display = 'flex'
         }
       }
       contplanosKaizen.style.display = 'flex'
     break;  
     case 'btn14':
       var elementosExcluidos = ['buscador','container01','links-inicialesI','links-iniciales','materiales-kaizen','conteneMantaut','conti-boton-kaizen','conti-boton','conti-boton-planos']  
       for (var i = 0; i < allContenedores.length; i++) { 
         var elemento = document.getElementById(allContenedores[i])  
         if (elemento) {
           elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
         }
       }  
       ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
       Array.from(buttsTerceros).forEach(elemento => {                                                                                /// MOSTRAR BOTONES TERCEROS
         var element = document.getElementById(elemento.id) // Aquí asumo que cada elemento tiene un atributo 'id'
         if (element) {
           element.style.display = 'inline-block'
         }
       })
       contMateriales.style.display = 'flex'
     break;  
     case 'btn15':
       var elementosExcluidos = ['buscador','container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conti-boton-planos','conti-boton-kaizen']  
       for (var i = 0; i < allContenedores.length; i++) { 
         var elemento = document.getElementById(allContenedores[i])  
         if (elemento) {
           elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
         }
       }  
       ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
       Array.from(buttsTerceros).forEach(elemento => {                                                                                /// MOSTRAR BOTONES TERCEROS
         var element = document.getElementById(elemento.id) // Aquí asumo que cada elemento tiene un atributo 'id'
         if (element) {
           element.style.display = 'inline-block'
         }
       })
     break;
     case 'btn17':
       var elementosExcluidos = ['buscador','container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','conti-boton-kaizen','kaizen-propuestos']  
       for (var i = 0; i < allContenedores.length; i++) { 
         var elemento = document.getElementById(allContenedores[i])  
         if (elemento) {
           elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
         }
       } 
     break;       
     default:
   }
 }
 function transicionImagenes() {
   var casoEstudio = document.getElementById('casos-kaizen')
   var index = 0;
   casoEstudio.style.display = 'none'
 
     function ocultarSiguienteImagen() {
         var imageId = buttsToyota[index]
         var image = document.getElementById(imageId)
         if (image) {
           image.style.display = 'none'
         }
         index++;
         if (index < buttsToyota.length) {
           // Si hay más imágenes, programa la siguiente ocultación después de 0.3 segundos
           setTimeout(ocultarSiguienteImagen, 150)
         } else {
           // Después de mostrar todas las imágenes, ejecuta el código adicional
           var imgToyota = document.getElementById('toyota7')
           imgToyota.style.display = 'flex'
           casoEstudio.style.display = 'flex' 
           casoEstudio.style.marginLeft = '7%'                                                                    
           // Aquí, pasa el índice 0 a la función mostrarBotonConRetardo
           /* mostrarBotonConRetardo(0) */
           aumentarTamanosDeBotonesVI()
         }
     }
     // Inicia la primera ocultación
     ocultarSiguienteImagen()
   
   
 }
 function mostrarBotonConRetardo(index) {
   let arrayButtCasos = ['caso1', 'caso2', 'caso3']
 
   contiButtCasos.style.display = 'flex'
 
   if (index < arrayButtCasos.length) {
 
     let casoId = arrayButtCasos[index]
     document.getElementById(casoId).style.display = 'flex'
 
     // Luego de 1 segundo, mostrar el siguiente botón
     setTimeout(function () {
         mostrarBotonConRetardo(index + 1)
     }, 350)
   }
 }
 function showButtonsKaizenRetraso() {
   var contiButtsKaizen = document.getElementById('conti-boton-kaizen')
   contiButtsKaizen.style.display = 'flex'
   function mostrarConRetraso(i) {
     if (i < arrayButtsKaizen.length) {
       var botonId = arrayButtsKaizen[i]
       var boton = document.getElementById(botonId)
 
       if (boton) {
         boton.style.display = 'inline-block'
         boton.color = ''
         boton.style.backgroundColor = ''
         setTimeout(function() {
           mostrarConRetraso(i + 1)
         }, 150) // 150 milisegundos de retraso entre botones
       }
     }
   }
   mostrarConRetraso(0) // Comienza desde el primer botón
 }
 function hideButtonsKaizenRetraso() {
   var contiButtsKaizen = document.getElementById('conti-boton-kaizen')
   contiButtsKaizen.style.display = 'flex'
   function mostrarConRetraso(i) {
     if (i < arrayButtsKaizen.length) {
       var botonId = arrayButtsKaizen[i]
       var boton = document.getElementById(botonId)
 
       if (boton) {
         boton.style.display = 'none'
         boton.style.color = ''
         boton.style.backgroundColor = ''
           if(boton.id === 'btn12'){
             boton.textContent = 'IMPLEMENTADOS';        
           }
         setTimeout(function() {
           mostrarConRetraso(i + 1)
         }, 17) 
       }
     }
   }
   mostrarConRetraso(0) // Comienza desde el primer botón
 }
 function showButtonsPlanosRetraso() {
   var contiButtsPlanos = document.getElementById('conti-boton-planos')
   contiButtsPlanos.style.display = 'flex'
   function mostrarConRetraso(i) {
     if (i < arrayButtsPlanos.length) {
       var botonId = arrayButtsPlanos[i]
       var boton = document.getElementById(botonId)
 
       if (boton) {
         boton.style.display = 'inline-block' // o 'inline-block' según tus necesidades
 
         setTimeout(function() {
           mostrarConRetraso(i + 1)
         }, 150) // 150 milisegundos de retraso entre botones
       }
     }
   }
   mostrarConRetraso(0) // Comienza desde el primer botón
 }
 function aumentoBotonesBody() {
   var elementosExcluidos = ['buscador','franja-Blanca','cont-titulo','subtitulo-I','descripcion-I','contenedor-principal']
   for (var i = 0; i < allContenedores.length; i++) { 
     var elemento = document.getElementById(allContenedores[i])  
     if (elemento) {
       elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
     }
   }  
   // Función para aumentar el tamaño de un botón y luego restaurarlo
   function aumentarYRestaurar(index) {
     if (index < buttonsIds.length) {
       const buttonId = buttonsIds[index];
       const button = document.getElementById(buttonId);
       // Aumentar el tamaño del botón
       if (button) {
         button.style.transform = 'scale(7)'
         // Después de 0.5 segundos, devolverlo al tamaño normal
         setTimeout(function () {
           button.style.transform = 'scale(1)'
           // Llamada a la función para eliminar estilos después de restaurar el tamaño
           /* eliminarEstilosEnLinea(); */
           // Llamada recursiva para pasar al siguiente botón en el array
           aumentarYRestaurar(index + 1);
         }, 177);
       }
     }
   }
   // Iniciar el proceso con el primer botón
   aumentarYRestaurar(0);
 }
 function tamaño100(){
   var elementosExcluidos = ['buscador','container01','links-inicialesI','links-iniciales','conteneMantaut','conti-boton','troubleshooting','linksMA','linkLis']  
   for (var i = 0; i < allContenedores.length; i++) { 
     var elemento = document.getElementById(allContenedores[i])  
     if (elemento) {
       elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
     }
   }  
   troublesh.removeAttribute('style')
   document.body.style.zoom = "100%"
   linkIni1.style.left = ''
   linkIni2.style.left = ''  
   container1.style.left=''
 }
 const imagenesAumentar = document.querySelectorAll('img.aumentar')
 imagenesAumentar.forEach(image => {
   image.addEventListener('click', () => {
     if (!document.fullscreenElement) {
       if (image.requestFullscreen) {
         image.requestFullscreen()
       } else if (image.mozRequestFullScreen) { // Firefox
         image.mozRequestFullScreen()
       } else if (image.webkitRequestFullscreen) { // Chrome, Safari y Opera
         image.webkitRequestFullscreen()
       } else if (image.msRequestFullscreen) { // IE/Edge
         image.msRequestFullscreen()
       }
     } else {
       if (document.exitFullscreen) {
         document.exitFullscreen()
       } else if (document.mozCancelFullScreen) { // Firefox
         document.mozCancelFullScreen()
       } else if (document.webkitExitFullscreen) { // Chrome, Safari y Opera
         document.webkitExitFullscreen()
       } else if (document.msExitFullscreen) { // IE/Edge
         document.msExitFullscreen()
       }
     }
   })
 })
 botones.forEach(function(boton) {
 var id = boton.getAttribute('id')
 alternarVisibilidad(id)
 }) 
 document.addEventListener("DOMContentLoaded", function() {
   toggleVideoButton.addEventListener("click", function() {
     video.pause()
   })
 })
 images.forEach(image => {
   let isFullscreen = false;
   image.addEventListener('click', () => {
     if (!isFullscreen) {
       if (image.requestFullscreen) {
         image.requestFullscreen()
       } else if (image.mozRequestFullScreen) {
         image.mozRequestFullScreen()
       } else if (image.webkitRequestFullscreen) {
         image.webkitRequestFullscreen()
       } else if (image.msRequestFullscreen) {
         image.msRequestFullscreen()
       }
     } else {
       if (document.exitFullscreen) {
         document.exitFullscreen()
       } else if (document.mozCancelFullScreen) {
         document.mozCancelFullScreen()
       } else if (document.webkitExitFullscreen) {
         document.webkitExitFullscreen()
       } else if (document.msExitFullscreen) {
         document.msExitFullscreen()
       }
     }
     isFullscreen = !isFullscreen;
   })
 })
 images.forEach((image, index) => {
   // Añadir el evento de aumento de tamaño al hacer clic
   image.addEventListener('click', () => {
     // Guardar el tamaño original para volver a él después
     const originalWidth = image.width;
     const originalHeight = image.height;
     // Aumentar el tamaño de la imagen en un 30% durante 0.1 segundos
     image.style.transition = 'transform 0.1s'
     image.style.transform = 'scale(1.3)'    
     // Volver al tamaño original después de 0.1 segundos
     setTimeout(() => {
       image.style.transition = 'transform 0.1s'
       image.style.transform = 'scale(1)'
     }, 400) 
   })
 })
 var chart = new Chart(miCanvas, {
     type: 'bar',    
     data: {
         labels: ['TROUBLESHOOTING', 'DEFECTOS TIPO 1', 'DEFECTOS TIPO 2', 'ADT', 'FUA', 'LUP'],
         datasets: [
             {
                 label: 'Participación en M.A',
                 backgroundColor: ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)', 'rgb(0, 255, 255)', 'rgb(255, 0, 255)'],
                 data: [57, 88, 62, 33, 14, 20]
             }
         ]
     },
     options: {
         scales: {
             x: {
                 grid: {
                     display: false // Ocultar líneas de la cuadrícula en el eje X
                 },
                 ticks: {
                     color: 'rgb(255,255,255)' // Color de las etiquetas de texto en el eje X
                 }
             },
             y: {
                 grid: {
                     display: false // Ocultar líneas de la cuadrícula en el eje X
                 },
                 ticks: {
                     color: 'rgb(255,255,255)' ,// Color de las etiquetas de texto en el eje X
 
                     beginAtZero: true // Empezar el eje Y desde cero
                 }
 
             }
         },
         indexAxis: 'y', // Mostrar barras horizontalmente
         plugins: {
             legend: {
                 display: false // Ocultar la leyenda
             }
         }
     }
 })
 var chart3 = new Chart(miCanvas2, {
     type: 'bar',
     data: {
         labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
         datasets: [
             {
                 label: 'Datos del Segundo Gráfico',
                 backgroundColor: ['rgb(0, 128, 0)', 'rgb(0,0,255)', 'rgb(255, 102, 0)', 'rgb(255, 0, 0)'],
                 data: [15, 25, 35, 20, 10, 19]
             }
         ]
     },
     options: {
         scales: {
             x: {
                 grid: {
                     display: false // Ocultar líneas de la cuadrícula en el eje X
                 },
                 ticks: {
                     color: 'rgb(255,255,0)' // Color de las etiquetas de texto en el eje X
                 }
             },
             y: {
                 grid: {
                     display: false // Ocultar líneas de la cuadrícula en el eje X
                 },
                 ticks: {
                     color: 'rgb(255,255,0)', // Color de las etiquetas de texto en el eje X
                     beginAtZero: true // Empezar el eje Y desde cero
                 }
 
             }
         },
         indexAxis: 'x', // Mostrar barras horizontalmente
         plugins: {
             legend: {
                 display: false // Ocultar la leyenda
             }
         }
     }
 })
 var chart4 = new Chart(miCanvas3, {
     type: 'line',
     data: {
         labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
         datasets: [
             {
                 label: 'Datos del Segundo Gráfico',
                 backgroundColor: ['rgb(0, 128, 0)', 'rgb(255, 102, 0)', 'rgb(0,0,255)', 'rgb(255,255,0)', 'rgb(255, 0, 0)', 'rgb(255, 0, 255)' ],
                 data: [15, 25, 35, 20, 10, 19]
             }
         ]
     },
     options: {
         scales: {
             x: {
                 grid: {
                     display: false // Ocultar líneas de la cuadrícula en el eje X
                 },
                 ticks: {
                     color: 'rgb(255,255,255)' // Color de las etiquetas de texto en el eje X
                 }
             },
             y: {
                 grid: {
                     display: false // Ocultar líneas de la cuadrícula en el eje X
                 },
                 ticks: {
                     color: 'rgb(255,255,255)', // Color de las etiquetas de texto en el eje X
                     beginAtZero: true // Empezar el eje Y desde cero
                 }
 
             }
         },
         indexAxis: 'x', // Mostrar barras horizontalmente
         plugins: {
             legend: {
                 display: false // Ocultar la leyenda
             }
         }
     }
 })
 var chart5 = new Chart(miCanvas4, {
     type: 'pie',
     data: {
         labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
         datasets: [
             {
                 label: 'Datos del Segundo Gráfico',
                 backgroundColor: ['#ff1700', '#ff2e00', '#ff4500', '#ff7300', '#ffa200)', '#ffff00'],
                 data: [15, 25, 35, 20, 10, 19],
                 borderWidth: 0.3,
             }
         ]
     },
     options: {
         scales: {
             x: {
                 grid: {
                     display: false // Ocultar líneas de la cuadrícula en el eje X
                 },
                 ticks: {
                     color: 'rgb(3, 237, 253)' // Color de las etiquetas de texto en el eje X
                 }
             },
             y: {
                 grid: {
                     display: false // Ocultar líneas de la cuadrícula en el eje X
                 },
                 ticks: {
                     color: 'rgb(3, 237, 253)', // Color de las etiquetas de texto en el eje X
                     beginAtZero: true // Empezar el eje Y desde cero
                 }
 
             }
         },
         indexAxis: 'x', // Mostrar barras horizontalmente
         plugins: {
             legend: {
                 display: false // Ocultar la leyenda
             }
         }
     }
 })
 var chart6 = new Chart(miCanvas5, {
     type: 'bar',
     data: {
         labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
         datasets: [
             {
                 label: 'Datos del Segundo Gráfico',
                 backgroundColor: ['rgb(0,255,0)', '#ff1700', 'green', '#ff1700', '#ffa200)', '#ffff00'],
                 data: [55, -65, 35, -90, 10, 19],
                 borderWidth: 0.3,
             }
         ]
     },
     options: {
         scales: {
             x: {
                 grid: {
                     display: false // Ocultar líneas de la cuadrícula en el eje X
                 },
                 ticks: {
                     color: 'rgb(3, 237, 253)' // Color de las etiquetas de texto en el eje X
                 }
             },
             y: {
                 grid: {
                     display: false // Ocultar líneas de la cuadrícula en el eje X
                 },
                 ticks: {
                     color: 'rgb(3, 237, 253)', // Color de las etiquetas de texto en el eje X
                     beginAtZero: true // Empezar el eje Y desde cero
                 }
 
             }
         },
         indexAxis: 'x', // Mostrar barras horizontalmente
         plugins: {
             legend: {
                 display: false // Ocultar la leyenda
             }
         }
     }
 })
 var chart7 = new Chart(miCanvas6, { 
   type: 'bar',
   data: {
       labels: ['DEFECTOS IDENTIFICADOS', 'DEFECTOS CORREGIDOS', 'TIPO 1', 'TIPO 2'],
       datasets: [
           {
               label: 'Participación en M.A',
               backgroundColor: ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(128,128,128)', 'rgb(255, 255, 0)'],
               data: [57, 88, 62, 33]
           }
       ]
   },
   options: {
       scales: {
           x: {
               grid: {
                   display: false
               },
               ticks: {
                   color: 'rgb(255,255,255)',
                   font: {
                       size: 9
                   }
               }
           },
           y: {
               grid: {
                   display: false
               },
               ticks: {
                   color: 'rgb(255,255,255)',
                   font: {
                       size: 10
                   },
                   beginAtZero: true
               }
           }
       },
       indexAxis: 'x',
       plugins: {
           legend: {
               display: false
           },
           title: {  // Agregar un título al gráfico
               display: true,  // Mostrar el título
               text: 'Participacion semanal',  // Texto del título
               font: {
                   size: 16  // Tamaño del texto del título
               }
           }
       }
   }
 })
 var chart7II = new Chart(miCanvas6II, { 
   type: 'bar',
   data: {
     labels: ['DEFECTOS IDENTIFICADOS', 'DEFECTOS CORREGIDOS', 'TIPO 1', 'TIPO 2'],
     datasets: [
       {
         label: 'Participación en M.A',
         backgroundColor: ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(128,128,128)', 'rgb(255, 255, 0)'],
         data: [57, 88, 62, 33]
       }
     ]
   },
   options: {
     scales: {
       x: {
         grid: {
           display: false
         },
         ticks: {
           color: 'rgb(255,255,255)',
           font: {
             size: 4
           }
         }
       },
       y: {
         grid: {
           display: false
         },
         ticks: {
           color: 'rgb(255,255,255)',
           font: {
             size: 5
           },
           beginAtZero: true
         }
       }
     },
     indexAxis: 'x',
     plugins: {
       legend: {
         display: false
       },
       title: {
         display: true,
         text: 'Participacion semanal',
         font: {
           size: 14
         }
       },
       datalabels: {
         color: 'rgb(255,255,255)',
         font: {
           size: 5 // Tamaño de la fuente para las etiquetas del conjunto de datos
         },
         anchor: 'end',
         align: 'end',
         formatter: function(value, context) {
           return value; // Puedes personalizar el formato del valor si es necesario
         }
       }
     }
   }
 });
 var chart8 = new Chart(miCanvas7, {
   type: 'bar',
   data: {
     labels: ['Propuestas', 'Ejecutadas','Entrenadas'],
     datasets: [
       {
         label: 'Participación en M.A',
         backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','rgb(125,77,157)'],
         data: [17, 9,27]
       }
     ]
   },
   options: {
     scales: {
       x: {
         grid: {
           display: false
         },
         ticks: {
           color: 'rgb(255,255,255)',
           font: {
             size: 9
           }
         }
       },
       y: {
         grid: {
           display: false
         },
         ticks: {
           color: 'rgb(255,255,255)',
           font: {
             size: 10
           },
           beginAtZero: true
         }
       }
     },
     indexAxis: 'y',
     plugins: {
       legend: {
         display: false
       },
       title: {
         display: true,
         text: 'Lección de un punto',
         font: {
           size: 16
         }
       }
     }
   }
 })
 var chart8II = new Chart(miCanvas7II, {
   type: 'bar',
   data: {
     labels: ['Propuestas', 'Ejecutadas','Entrenadas'],
     datasets: [
       {
         label: 'Participación en M.A',
         backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','rgb(125,77,157)'],
         data: [17, 9,27]
       }
     ]
   },
   options: {
     scales: {
       x: {
         grid: {
           display: false
         },
         ticks: {
           color: 'rgb(255,255,255)',
           font: {
             size: 4
           }
         }
       },
       y: {
         grid: {
           display: false
         },
         ticks: {
           color: 'rgb(255,255,255)',
           font: {
             size: 5
           },
           beginAtZero: true
         }
       }
     },
     indexAxis: 'y',
     plugins: {
       legend: {
         display: false
       },
       title: {
         display: true,
         text: 'Lección de un punto',
         font: {
           size: 14
         }
       }
     }
   }
 })
 var chart9 = new Chart(miCanvas8, {
   type: 'line',
   data: {
     labels: ['Mecanicas', 'Layout','Diseño','Temporales','Fijas','Transicion'],
     datasets: [
       {
         label: 'Participación en M.A',
         borderColor: 'rgb(0, 0, 255)',
         backgroundColor: ['rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)'],
         borderWidth: 1,        
         data: [17, 9,27,55,19,33]
       }
     ]
   },
   options: {
     scales: {
       x: {
         grid: {
           display: false
         },
         ticks: {
           color: 'rgb(255,255,255)',
           font: {
             size: 9
           }
         }
       },
       y: {
         grid: {
           display: false
         },
         ticks: {
           color: 'rgb(255,255,255)',
           font: {
             size: 10
           },
           beginAtZero: true
         }
       }
     },
     indexAxis: 'x',
     plugins: {
       legend: {
         display: false
       },
       title: {
         display: true,
         text: 'Areas De Dificil Acceso',
         font: {
           size: 16
         }
       }
     }
   }
 })
 var chart9II = new Chart(miCanvas8II, {
   type: 'line',
   data: {
     labels: ['Mecanicas', 'Layout','Diseño','Temporales','Fijas','Transicion'],
     datasets: [
       {
         label: 'Participación en M.A',
         borderColor: 'rgb(0, 0, 255)',
         backgroundColor: ['rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)','rgb(0,255,255)'],
         borderWidth: 1,        
         data: [17, 9,27,55,19,33]
       }
     ]
   },
   options: {
     scales: {
       x: {
         grid: {
           display: false
         },
         ticks: {
           color: 'rgb(255,255,255)',
           font: {
             size: 4
           }
         }
       },
       y: {
         grid: {
           display: false
         },
         ticks: {
           color: 'rgb(255,255,255)',
           font: {
             size: 5
           },
           beginAtZero: true
         }
       }
     },
     indexAxis: 'x',
     plugins: {
       legend: {
         display: false
       },
       title: {
         display: true,
         text: 'Areas de dificil acceso',
         font: {
           size: 14
         }
       }
     }
   }
 })
 var chart10 = new Chart(miCanvas9, {
   type: 'doughnut',
   data: {
     labels: ['Mecanicas', 'Layout','Diseño','Temporales','Fijas'],
     datasets: [
       {
         label: 'Participación en M.A',
         backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','rgb(125,77,157)','rgb(255,255,0)','rgb(255,0,0)','rgb(0,0,255)'],
         data: [17, 9,27,55,19,33]
       }
     ]
   },
   options: {
     scales: {
       x: {
         grid: {
           display: false
         },
         ticks: {
           color: 'rgb(255,255,255)',
           font: {
             size: 9
           }
         }
       },
       y: {
         grid: {
           display: false
         },
         ticks: {
           color: 'rgb(255,255,255)',
           font: {
             size: 10
           },
           beginAtZero: true
         }
       }
     },
     indexAxis: 'x',
     plugins: {
       legend: {
         display: false
       },
       title: {
         display: true,
         text: 'Ayudas De Trabajo',
         font: {
           size: 16
         }
       }
     }
   }
 })
 var chart10II = new Chart(miCanvas9II, {
   type: 'doughnut',
   data: {
     labels: ['Mecanicas', 'Layout','Diseño','Temporales','Fijas'],
     datasets: [
       {
         label: 'Participación en M.A',
         backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','rgb(125,77,157)','rgb(255,255,0)','rgb(255,0,0)','rgb(0,0,255)'],
         data: [17, 9,27,55,19,33]
       }
     ]
   },
   options: {
     scales: {
       x: {
         grid: {
           display: false
         },
         ticks: {
           color: 'rgb(255,255,255)',
           font: {
             size: 4
           }
         }
       },
       y: {
         grid: {
           display: false
         },
         ticks: {
           color: 'rgb(255,255,255)',
           font: {
             size: 5
           },
           beginAtZero: true
         }
       }
     },
     indexAxis: 'x',
     plugins: {
       legend: {
         display: false
       },
       title: {
         display: true,
         text: ' Ayudas de trabajo',
         font: {
           size: 14
         }
       }
     }
   }
 })
 var chart11 = new Chart(miCanvas10, {
   type: 'pie',
   data: {
     labels: ['LUP', 'DEF 1','DEF 2','ADA','ADT'],
     datasets: [
       {
         label: 'Participación en M.A',
         backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','#d6919a','rgb(255,255,0)','rgb(128,128,128)','rgb(0,255,255)'],
         data: [7, 19,17,37,9,77]
       }
     ]
   },
   options: {
     scales: {
       x: {
         grid: {
           display: false
         },
         ticks: {
           color: 'rgb(255,255,255)',
           font: {
             size: 9
           }
         }
       },
       y: {
         grid: {
           display: false
         },
         ticks: {
           color: 'rgb(255,255,255)',
           font: {
             size: 10
           },
           beginAtZero: true
         }
       }
     },
     indexAxis: 'x',
     plugins: {
       legend: {
         display: false
       },
       title: {
         display: true,
         text: 'Ejecución ',
         font: {
           size: 16
         }
       }
     }
   }
 })
 var chart11II = new Chart(miCanvas10II, {
   type: 'pie',
   data: {
     labels: ['LUP', 'DEF 1','DEF 2','ADA','ADT'],
     datasets: [
       {
         label: 'Participación en M.A',
         backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','#d6919a','rgb(255,255,0)','rgb(128,128,128)','rgb(0,255,255)'],
         data: [7, 19,17,37,9,77]
       }
     ]
   },
   options: {
     scales: {
       x: {
         grid: {
           display: false
         },
         ticks: {
           color: 'rgb(255,255,255)',
           font: {
             size: 9
           }
         }
       },
       y: {
         grid: {
           display: false
         },
         ticks: {
           color: 'rgb(255,255,255)',
           font: {
             size: 10
           },
           beginAtZero: true
         }
       }
     },
     indexAxis: 'x',
     plugins: {
       legend: {
         display: false
       },
       title: {
         display: true,
         text: 'Ejecución ',
         font: {
           size: 16
         }
       }
     }
   }
 })
 var chart12 = new Chart(miCanvas11, {
   type: 'line',
   data: {
     labels: ['S1','S2','S3','S4','S5','S6','S7','S8'],
     datasets: [
       {
         label: 'Participación en M.A',
         borderColor: 'rgb(255,165,0)', 
         borderWidth: 1,
         pointRadius: 0,                       
         /* backgroundColor: ['rgb(255, 165, 0)', 'rgb(0, 255, 0)','#d6919a','rgb(255,255,0)','rgb(128,128,128)','rgb(255,255,0)','rgb(0,0,255)','rgb(177,0,255)'], */
         /* data: [7, 19, 27, 37, 59, 77, 81, 99] */
       }
     ]
   },
   options: {
     scales: {
       x: {
         grid: {
           display: false
         },
         ticks: {
           color: 'rgb(255,255,255)',
           font: {
             size: 9
           }
         }
       },
       y: {
         grid: {
           display: false
         },
         ticks: {
           color: 'rgb(255,255,255)',
           font: {
             size: 10
           },
           beginAtZero: true
         }
       }
     },
     indexAxis: 'x',
     plugins: {
       legend: {
         display: false
       },
       title: {
         display: true,
         text: 'Tendencia',
         font: {
           size: 16
         }
       }
     }
   }
 });
 var chart12II = new Chart(miCanvas11II, {
   type: 'line',
   data: {
     labels: ['S1','S2','S3','S4','S5','S6','S7','S8'],
     datasets: [
       {
         label: 'Participación en M.A',
         borderColor: 'rgb(255,165,0)', 
         borderWidth: 1,
         pointRadius: 0, 
         data: [7, 19,17,37,9,77]
                       
       }
     ]
   },
   options: {
     scales: {
       x: {
         grid: {
           display: false
         },
         ticks: {
           color: 'rgb(255,255,255)',
           font: {
             size: 4
           }
         }
       },
       y: {
         grid: {
           display: false
         },
         ticks: {
           color: 'rgb(255,255,255)',
           font: {
             size: 5
           },
           beginAtZero: true
         }
       }
     },
     indexAxis: 'x',
     plugins: {
       legend: {
         display: false
       },
       title: {
         display: true,
         text: 'Tendencia',
         font: {
           size: 14
         }
       }
     }
   }
 });
 const zoomableImages = document.querySelectorAll('.image-trainings')
 const sensitivity = 5; 
 zoomableImages.forEach((zoomableImage) => {
   zoomableImage.addEventListener('mouseenter', () => {
     zoomableImage.style.transition = 'transform 0.1s ease, filter 0.1s ease'
   })
   zoomableImage.addEventListener('mousemove', (e) => {
     const x = (zoomableImage.clientWidth / 2 - e.clientX + zoomableImage.getBoundingClientRect().left) / sensitivity;
     const y = (zoomableImage.clientHeight / 2 - e.clientY + zoomableImage.getBoundingClientRect().top) / sensitivity;
 
     zoomableImage.style.transform = `translate(${x}px, ${y}px) scale(1.5)`;
   })
   zoomableImage.addEventListener('mouseleave', () => {
     zoomableImage.style.transition = 'transform 0.1s ease'
     zoomableImage.style.transform = 'translate(0, 0) scale(1)'
   })
 })
 textToColor.addEventListener("mouseover", () => {
     clearTimeout(hideTimeout)
     hoverTimeout = setTimeout(() => {
       linkList.style.display = "block";
       linkListI.style.display = 'none'
       line.style.width = textToColor.offsetWidth + "px";
       linkListI.style.display = "none";
     }, 7)
 })
 linkList.addEventListener("mouseover", () => {
     clearTimeout(hideTimeout)
     linkListI.style.display = 'none'
 })
 textToColor.addEventListener("mouseout", () => {
     clearTimeout(hoverTimeout)
     hideTimeout = setTimeout(() => {
       textToColor.style.color = "white";
       linkList.style.display = "none";
       line.style.width = "0";
     }, 7)
 })
 linkList.addEventListener("mouseout", () => {
     hideTimeout = setTimeout(() => {
       textToColor.style.color = "white";
       linkList.style.display = "none";
       line.style.width = "0";
     }, 1)
 })
 textToColorI.addEventListener("mouseover", () => {
   var linkList = document.getElementById('linkList')
   clearTimeout(hideTimeout)
   hoverTimeout = setTimeout(() => {
     linkListI.style.display = "block";
     linkList.style.display = 'none'
     lineI.style.width = textToColorI.offsetWidth + "px";
   }, 7)
 })
 linkListI.addEventListener("mouseover", () => {
   clearTimeout(hideTimeout)
 })
 textToColorI.addEventListener("mouseout", () => {
   clearTimeout(hoverTimeout)
   hideTimeout = setTimeout(() => {
     textToColorI.style.color = "white";
     linkListI.style.display = "none";
     lineI.style.width = "0";
   }, 77)
 })
 linkListI.addEventListener("mouseout", () => {
   hideTimeout = setTimeout(() => {
     textToColorI.style.color = "white";
     linkListI.style.display = "none";
     lineI.style.width = "0";
   }, 1)
 })
 const searchForm = document.getElementById('search-form')
 const searchInput = document.getElementById('search-input')
 const suggestionsList = document.getElementById('suggestions') // Agrega el elemento datalist
 const sugerencias = [
   'autonomo',
   'bateria',
   'contra',
   'contraPresion',
   'densitometria',
   'impresorImg',
   'inicio',
   'manta',
   'mantenimiento autonomo',
   'mantilla',
   'pantalla-inicial',
   'planas',
   'plancha',
   'porta mantilla',
   'porta plancha',
   'pre',
   'preprensa',
   'rotatek',
   'secador',
   'secador uv',
   'smed',
   'resultados',
   'tintero',
   'torre',
   'variable'
   
 ]
 // Agregamos un evento para manejar la búsqueda
 searchForm.addEventListener('submit', function (e) {
   e.preventDefault() // Evita que se envíe el formulario
   const searchTerm = searchInput.value.toLowerCase() // Obtenemos el término de búsqueda y lo convertimos a minúsculas
 
   // ... Tu código de manejo de búsqueda actual ...
   switch (searchTerm) {
     case 'autonomo':
     case 'mantenimiento autonomo':
       ElementosMaII('conteneMantaut')
     break;
     case 'densitometria':
       abrirDensitometria()
     break;
     case 'inicio':
       VolveraInicio()
     break;
     case 'tintero':
       changeButtonStyles('pantalla-tintero')
     break;
     case 'bateria':
       changeButtonStyles('bateria-entintado-II', 'contene-7')
     break;
     case 'variable':
       abrirSeccionVariable('cont-variable')
     break;
     case 'planas':
       abrirSeccionPlanas('cont-plana')
     break;
     case 'secador uv':
     case 'secador':      
       abrirSeccionCurado('cont-secador')
     break;
     case 'torre':      
       cambioContenedor('torre-imp')
     break;
     case 'smed':      
     changeButtonStyles('bancada-torre-II')
     break;  
     case 'plancha':  
     case 'porta plancha': 
       for (var i = 0; i < allContenedores.length; i++) {
         var elemento = document.getElementById(allContenedores[i])
         if (elemento) {
           elemento.style.display = 'none'
         }
       }             
       showRepuesto('contPortPlaca')
     break;
     case 'pantalla inicial':
     case 'pantalla-inicial':
       abrirSeccionContinua('pantalla-inicial')
     break;
     case 'preprensa':
     abrirPrepress('pre-prensa')
     break;
     case 'mantilla': 
     case 'manta':      
     case 'porta mantilla': 
     for (var i = 0; i < allContenedores.length; i++) {
       var elemento = document.getElementById(allContenedores[i])
       if (elemento) {
         elemento.style.display = 'none'
       }
     }          
     showRepuesto('contPortManta', 'videoTrain03')
     break;
     case 'contra':      
     case 'contraPresion':
     case 'impresorImg':
       for (var i = 0; i < allContenedores.length; i++) {
         var elemento = document.getElementById(allContenedores[i])
         if (elemento) {
           elemento.style.display = 'none'
         }
       }       
     showRepuesto('contImpresor', 'videoTrain01')
     break;
     case 'empleados':
     case 'resultados':
       for (var i = 0; i < allContenedores.length; i++) {
         var elemento = document.getElementById(allContenedores[i])
         if (elemento) {
           elemento.style.display = 'none'
         }
       } 
       resultadosMA() 
       container1.style.display = 'flex'           
     break;
     default:
       alert("No se encontró ninguna coincidencia para la búsqueda: " + searchTerm)  
     break;
   }
   // Verifica si suggestionsList no es nulo antes de intentar establecer su propiedad innerHTML
   if (suggestionsList) {
     // Puedes agregar una lógica para autocompletar el término de búsqueda
     if (sugerencias.includes(searchTerm)) {
       // Si el término de búsqueda coincide con una sugerencia, lo autocompletamos
       suggestionsList.innerHTML = ''; // Borra cualquier sugerencia anterior
       const suggestionOption = document.createElement('option');
       suggestionOption.value = searchTerm;
       suggestionsList.appendChild(suggestionOption);
     }
   } else {
     console.error('No se encontró el elemento con ID "suggestions"');
   }
 })
 const canvasElements2 = document.querySelectorAll('#canvasContainer2 canvas')
 const canvasElements3 = document.querySelectorAll('#canvasContainer3 canvas')
 const canvasElements4 = document.querySelectorAll('#contChecks input')
 canvasElements2.forEach(canvas => {
   canvas.addEventListener('click', () => {
     toggleFullScreen(canvas)
   })
 })
 canvasElements3.forEach(canvas => {
   canvas.addEventListener('click', () => {
     toggleFullScreen(canvas)
   })
 })
 canvasElements4.forEach(input => {
   input.addEventListener('click', () => {
     toggleFullScreen(input)
   })
 })
 var colorClickLinks = document.querySelectorAll('.colorClick')
   colorClickLinks.forEach(function (link) {
     link.addEventListener('click', function (event) {
       event.preventDefault()
       link.classList.add('orange-text')
       imagenesPasoApaso(link.getAttribute('data-imagen'))
     })
 })
 function aumentarTamanosDeBotones() {
   const buttons = [
     document.getElementById("boton1"),
     document.getElementById("boton2"),
     document.getElementById("boton3"),
     document.getElementById("boton4"),
     document.getElementById("boton5"),
     document.getElementById("boton6")
   ]
   // Función para aumentar el tamaño de un botón y pasar al siguiente
   function aumentarSiguienteBoton(index) {
     if (index < buttons.length) {
       const boton = buttons[index]
       boton.style.transform = "scale(7)";
       setTimeout(() => {
         restaurarTamanosBoton(boton)
         aumentarSiguienteBoton(index + 1)
       }, 200) // Restaura el tamaño y pasa al siguiente botón después de 0.2 segundos
     }
   }
   // Función para restaurar el tamaño normal de un botón
   function restaurarTamanosBoton(boton) {
     boton.style.transform = "scale(1)";
   }
   aumentarSiguienteBoton(0) // Comienza el proceso con el primer botón
 }
 function aumentarTamanosDeBotonesII() {
   const buttons = [
     document.getElementById("boton7"),
     document.getElementById("boton8"),
     document.getElementById("boton9"),
     document.getElementById("boton10"),
     document.getElementById("boton11"),
     document.getElementById("boton12")
   ]
   // Función para aumentar el tamaño de un botón y pasar al siguiente
   function aumentarSiguienteBoton(index) {
     if (index < buttons.length) {
       const boton = buttons[index]
       boton.style.transform = "scale(7)";
       setTimeout(() => {
         restaurarTamanosBoton(boton)
         aumentarSiguienteBoton(index + 1)
       }, 200) // Restaura el tamaño y pasa al siguiente botón después de 0.2 segundos
     }
   }
   // Función para restaurar el tamaño normal de un botón
   function restaurarTamanosBoton(boton) {
     boton.style.transform = "scale(1)";
   }
   aumentarSiguienteBoton(0) // Comienza el proceso con el primer botón
 }
 function aumentarTamanosDeBotonesIII() {
   const buttons = [
     document.getElementById("boton13"),
     document.getElementById("boton14"),
     document.getElementById("boton15"),
     document.getElementById("boton16"),
     document.getElementById("boton17"),
     document.getElementById("boton18")
   ]
   // Función para aumentar el tamaño de un botón y pasar al siguiente
   function aumentarSiguienteBoton(index) {
     if (index < buttons.length) {
       const boton = buttons[index]
       boton.style.transform = "scale(7)";
       setTimeout(() => {
         restaurarTamanosBoton(boton)
         aumentarSiguienteBoton(index + 1)
       }, 200) // Restaura el tamaño y pasa al siguiente botón después de 0.2 segundos
     }
   }
   // Función para restaurar el tamaño normal de un botón
   function restaurarTamanosBoton(boton) {
     boton.style.transform = "scale(1)";
   }
   aumentarSiguienteBoton(0) // Comienza el proceso con el primer botón
 }
 function aumentarTamanosDeBotonesIV() {
   const buttons = [
     document.getElementById("boton19"),
     document.getElementById("boton20"),
     document.getElementById("boton21"),
     document.getElementById("boton22"),
     document.getElementById("boton23"),
     document.getElementById("boton24")
   ]
   // Función para aumentar el tamaño de un botón y pasar al siguiente
   function aumentarSiguienteBoton(index) {
     if (index < buttons.length) {
       const boton = buttons[index]
       boton.style.transform = "scale(7)";
       setTimeout(() => {
         restaurarTamanosBoton(boton)
         aumentarSiguienteBoton(index + 1)
       }, 200) // Restaura el tamaño y pasa al siguiente botón después de 0.2 segundos
     }
   }
   // Función para restaurar el tamaño normal de un botón
   function restaurarTamanosBoton(boton) {
     boton.style.transform = "scale(1)";
   }
   aumentarSiguienteBoton(0) // Comienza el proceso con el primer botón
 }
 function aumentarTamanosDeBotonesV() {
   const buttons = [
     document.getElementById("boton25"),
     document.getElementById("boton26"),
     document.getElementById("boton27"),
     document.getElementById("boton28"),
     document.getElementById("boton29"),
     document.getElementById("boton30")
   ]
   // Función para aumentar el tamaño de un botón y pasar al siguiente
   function aumentarSiguienteBoton(index) {
     if (index < buttons.length) {
       const boton = buttons[index]
       boton.style.transform = "scale(7)";
       setTimeout(() => {
         restaurarTamanosBoton(boton)
         aumentarSiguienteBoton(index + 1)
       }, 200) // Restaura el tamaño y pasa al siguiente botón después de 0.2 segundos
     }
   }
   // Función para restaurar el tamaño normal de un botón
   function restaurarTamanosBoton(boton) {
     boton.style.transform = "scale(1)";
   }
   aumentarSiguienteBoton(0) // Comienza el proceso con el primer botón
 }
 function aumentarTamanosDeBotonesVI() {
   const buttons = [
       document.getElementById("caso1"),
       document.getElementById("caso2"),
       document.getElementById("caso3")
   ];
   let caso1 = document.getElementById ('caso1')
   contiButtCasos.style.display = 'flex'
   /* caso1.style.display = 'flex' */
 
   function aumentarBotonCasos(index) {
       if (index < buttons.length) {
           const boton = buttons[index];
           boton.style.display = 'flex'
           boton.style.transform = "scale(2)";
           setTimeout(() => {
               restaurarTamanosBoton(boton);
               aumentarBotonCasos(index + 1);
           }, 200);
       }
   }
 
   function restaurarTamanosBoton(boton) {
       boton.style.transform = "scale(1)";
   }
 
   aumentarBotonCasos(0);
 }
 function moveScroll(container) {
   // Mover el scroll 100px hacia abajo
   container.scrollTop += 100;
   // Reducir el número de iteraciones en 1
   iterations--;
   // Verificar si quedan más iteraciones
   if (iterations > 0) {
     // Llamar a la función nuevamente después de 1 segundo
     setTimeout(function() {
       // Restaurar el color de fondo del botón antes de mover el scroll
       moveScroll(container);
     }, 57);
   } else {
     // Cuando termina el desplazamiento, regresar a la parte superior
     container.scrollTop = 0;
   }
 }
 function iniciarMovimiento(instrucId) {
   var container = document.getElementById(instrucId);
   container.scrollTop = container.scrollHeight;



   setTimeout(function() {
    if(instrucId === 'control-neumatico') {
      const contenedor = document.getElementById('control-neumatico');
      // Función para animar el scroll hacia arriba
      function scrollToTopSmoothly() {
        const currentPosition = contenedor.scrollTop;
        const targetPosition = 0;
        const duration = 500; // Duración de la animación en     
        const startTime = performance.now();    
        function animateScroll(timestamp) {
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeInOutCubic(progress);    
          contenedor.scrollTop = currentPosition + (targetPosition - currentPosition) * easedProgress;    
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        }    
        requestAnimationFrame(animateScroll);
      }    
      // Función para aplicar una función de easing (interpolación suave)
      function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      }    
      // Llama a la función para animar el scroll hacia arriba
      scrollToTopSmoothly();
    }}, 277
  );



     
   setTimeout(function() {
     if(instrucId === 'rodillo-infeed') {
       const contenedor = document.getElementById('rodillo-infeed');
       // Función para animar el scroll hacia arriba
       function scrollToTopSmoothly() {
         const currentPosition = contenedor.scrollTop;
         const targetPosition = 0;
         const duration = 500; // Duración de la animación en     
         const startTime = performance.now();    
         function animateScroll(timestamp) {
           const elapsed = timestamp - startTime;
           const progress = Math.min(elapsed / duration, 1);
           const easedProgress = easeInOutCubic(progress);    
           contenedor.scrollTop = currentPosition + (targetPosition - currentPosition) * easedProgress;    
           if (progress < 1) {
             requestAnimationFrame(animateScroll);
           }
         }    
         requestAnimationFrame(animateScroll);
       }    
       // Función para aplicar una función de easing (interpolación suave)
       function easeInOutCubic(t) {
         return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
       }    
       // Llama a la función para animar el scroll hacia arriba
       scrollToTopSmoothly();
     }}, 277
   );    
   setTimeout(function() {
     if(instrucId === 'puesta-punto') {
       const contenedor = document.getElementById('puesta-punto');
       // Función para animar el scroll hacia arriba
       function scrollToTopSmoothly() {
         const currentPosition = contenedor.scrollTop;
         const targetPosition = 0; // Desplazar hacia arriba
         const duration = 500; // Duración de la animación en milisegundos
         const startTime = performance.now();    
         function animateScroll(timestamp) {
           const elapsed = timestamp - startTime;
           const progress = Math.min(elapsed / duration, 1);
           const easedProgress = easeInOutCubic(progress);    
           contenedor.scrollTop = currentPosition + (targetPosition - currentPosition) * easedProgress;    
           if (progress < 1) {
             requestAnimationFrame(animateScroll);
           }
         }    
         requestAnimationFrame(animateScroll);
       }    
       // Función para aplicar una función de easing (interpolación suave)
       function easeInOutCubic(t) {
         return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
       }    
       // Llama a la función para animar el scroll hacia arriba
       scrollToTopSmoothly();
     }
   }, 277
   );   
   setTimeout(function() {
     if(instrucId === 'agrupaOblicuos-XII') {
       const contenedor = document.getElementById('agrupaOblicuos-XII');
       // Función para animar el scroll hacia arriba
       function scrollToTopSmoothly() {
         const currentPosition = contenedor.scrollTop;
         const targetPosition = 0;
         const duration = 400; // Duración de la animación en ms     
         const startTime = performance.now();    
         function animateScroll(timestamp) {
           const elapsed = timestamp - startTime;
           const progress = Math.min(elapsed / duration, 1);
           const easedProgress = easeInOutCubic(progress);    
           contenedor.scrollTop = currentPosition + (targetPosition - currentPosition) * easedProgress;    
           if (progress < 1) {
             requestAnimationFrame(animateScroll);
           }
         }    
         requestAnimationFrame(animateScroll);
       }    
       // Función para aplicar una función de easing (interpolación suave)
       function easeInOutCubic(t) {
         return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
       }    
       // Llama a la función para animar el scroll hacia arriba
       scrollToTopSmoothly();
     }}, 277    
   );
   setTimeout(() => {
     changeColorToRedAndBack();    
   }, 877);
   setTimeout(function() {
     if(instrucId === 'agrupaOblicuos-XVIII') {
       const contenedor = document.getElementById('agrupaOblicuos-XVIII');
       // Función para animar el scroll hacia arriba
       function scrollToTopSmoothly() {
         const currentPosition = contenedor.scrollTop;
         const targetPosition = 0;
         const duration = 400; // Duración de la animación en ms     
         const startTime = performance.now();    
         function animateScroll(timestamp) {
           const elapsed = timestamp - startTime;
           const progress = Math.min(elapsed / duration, 1);
           const easedProgress = easeInOutCubic(progress);    
           contenedor.scrollTop = currentPosition + (targetPosition - currentPosition) * easedProgress;    
           if (progress < 1) {
             requestAnimationFrame(animateScroll);
           }
         }    
         requestAnimationFrame(animateScroll);
       }    
       // Función para aplicar una función de easing (interpolación suave)
       function easeInOutCubic(t) {
         return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
       }    
       // Llama a la función para animar el scroll hacia arriba
       scrollToTopSmoothly();
     }}, 277
   );  
   setTimeout(function() {
      if(instrucId === 'contenedor-vertical') {
      const contenedor = document.getElementById('contenedor-vertical');
      // Función para animar el scroll hacia arriba
      function scrollToTopSmoothly() {
        const currentPosition = contenedor.scrollTop;
        const targetPosition = 0;
        const duration = 400; // Duración de la animación en ms     
        const startTime = performance.now();    
        function animateScroll(timestamp) {
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeInOutCubic(progress);    
          contenedor.scrollTop = currentPosition + (targetPosition - currentPosition) * easedProgress;    
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        }    
        requestAnimationFrame(animateScroll);
      }    
      // Función para aplicar una función de easing (interpolación suave)
      function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      }    
      // Llama a la función para animar el scroll hacia arriba
      scrollToTopSmoothly();
    }}, 277
   );
 }
 var canvas = document.getElementById("sinusoidalCanvas");         
 var ctx = canvas.getContext("2d");
 ctx.strokeStyle = "rgb(0, 255, 0)"; // Verde
 ctx.lineWidth = 1;
 drawSinusoidalI();
 function drawSinusoidalI() {
   // Ajusta la escala de la onda y el desplazamiento
   var amplitude = 50; // Altura máxima de la onda
   var frequency = 0.05; // Frecuencia de la onda
   var phase = 0; // Desplazamiento horizontal
   // Comienza el trazado de la onda
   ctx.beginPath();
   for (var x = 0; x < canvas.width; x++) {
   // Calcula el valor y de la onda en función de x
   var y = amplitude * Math.sin(frequency * x + phase);
   // Dibuja un segmento de la onda
   ctx.lineTo(x, canvas.height / 2 - y);
   }
   // Finaliza el trazado y dibuja la línea
   ctx.stroke();
   // Dibuja el eje horizontal con numeración y etiquetas rojas
   drawHorizontalAxisI();
   // Dibuja el eje vertical con numeración y etiquetas rojas
   drawVerticalAxis();
 }
 function drawHorizontalAxisI() {
   // Dibuja el eje horizontal
   ctx.beginPath();
   ctx.moveTo(0, canvas.height / 2);
   ctx.lineTo(canvas.width, canvas.height / 2);
   ctx.stroke();
   // Dibuja las marcas y etiquetas en el eje horizontal
   for (var x = 0; x <= canvas.width; x += 50) {
   ctx.beginPath();
   ctx.moveTo(x, canvas.height / 2 - 5);
   ctx.lineTo(x, canvas.height / 2 + 5);
   ctx.stroke();
   ctx.fillStyle = "yellow"; // Etiquetas rojas
   ctx.fillText(x - canvas.width / 2, x - 10, canvas.height / 2 + 20);
   }
 }
 function drawVerticalAxis() {
   // Dibuja el eje vertical
   ctx.beginPath();
   ctx.moveTo(canvas.width / 2, 0);
   ctx.lineTo(canvas.width / 2, canvas.height);
   ctx.stroke();
   // Dibuja las marcas y etiquetas en el eje vertical
   for (var y = 0; y <= canvas.height; y += 50) {
   ctx.beginPath();
   ctx.moveTo(canvas.width / 2 - 5, y);
   ctx.lineTo(canvas.width / 2 + 5, y);
   ctx.stroke();
   ctx.fillStyle = "yellow"; // Etiquetas rojas
   ctx.fillText(canvas.height / 2 - y, canvas.width / 2 - 30, y + 5);
   }
 }
 var canvasI = document.getElementById("diagonalCanvas");
 var dcx = canvasI.getContext("2d");
 dcx.strokeStyle = "rgb(0,255,0)"; // Azul
 dcx.lineWidth = 1;
 drawDiagonalLine();
 function drawDiagonalLine() {
   // Comienza el trazado de la línea
   dcx.beginPath();
   // Establece el punto de inicio en (300, 0)
   dcx.moveTo(0, 177);
   // Dibuja la línea hasta (0, 300)
   dcx.lineTo(300, 0);
   // Finaliza el trazado y dibuja la línea
   dcx.stroke();
 
   // Dibuja el eje horizontal con numeración y etiquetas rojas
   drawHorizontalAxisII();
   // Dibuja el eje vertical con numeración y etiquetas rojas
   drawVerticalAxisII();
 }
 function drawHorizontalAxisII() {
   // Dibuja el eje horizontal
   dcx.beginPath();
   dcx.moveTo(0, canvasI.height / 2);
   dcx.lineTo(canvasI.width, canvasI.height / 2);
   dcx.stroke();
   // Dibuja las marcas y etiquetas en el eje horizontal
   for (var x = 0; x <= canvasI.width; x += 50) {
   dcx.beginPath();
   dcx.moveTo(x, canvasI.height / 2 - 5);
   dcx.lineTo(x, canvasI.height / 2 + 5);
   dcx.stroke();
   dcx.fillStyle = "orangered"; // Etiquetas rojas
   dcx.fillText(x - canvasI.width / 2, x - 10, canvasI.height / 2 + 20);
   }
 }
 function drawVerticalAxisII() {
   // Dibuja el eje vertical
   dcx.beginPath();
   dcx.moveTo(canvasI.width / 2, 0);
   dcx.lineTo(canvasI.width / 2, canvasI.height);
   dcx.stroke();
   // Dibuja las marcas y etiquetas en el eje vertical
   for (var y = 0; y <= canvasI.height; y += 50) {
   dcx.beginPath();
   dcx.moveTo(canvasI.width / 2 - 5, y);
   dcx.lineTo(canvasI.width / 2 + 5, y);
   dcx.stroke();
   dcx.fillStyle = "orangered"; // Etiquetas rojas
   dcx.fillText(canvasI.height / 2 - y, canvasI.width / 2 - 30, y + 5);
   }
 }
 var canvasII = document.getElementById("dualSinusoidalCanvas");
 var cdsc = canvasII.getContext("2d");
 cdsc.strokeStyle = "rgb(0, 255, 0)"; // Verde
 cdsc.lineWidth = 1;
 drawSinusoidalDoubleI(50, 0.05, 0);
 cdsc.strokeStyle = "rgb(0, 0, 255)"; // Amarillo
 cdsc.lineWidth = 1;
 drawSinusoidalDoubleI(60, 0.05, Math.PI / 2); // Parámetros diferentes para la segunda onda
 drawGridI(4, 7);
 function drawSinusoidalDoubleI(amplitude, frequency, phase) {
   // Comienza el trazado de la onda
   cdsc.beginPath();
   for (var x = 0; x < canvasII.width; x++) {
   // Calcula el valor y de la onda en función de x
   var y = amplitude * Math.sin(frequency * x + phase);
   // Dibuja un segmento de la onda
   cdsc.lineTo(x, canvasII.height / 2 - y);
   }
   // Finaliza el trazado y dibuja la línea
   cdsc.stroke();
 }
 function drawGridI(horizontalLinesI, verticalLinesI) {
   // Configura el color y el grosor de las líneas de la cuadrícula
   cdsc.strokeStyle = "rgb(0,255,0)"; // Gris
   cdsc.lineWidth = 1;
   // Dibuja líneas horizontales
   for (var i = 1; i < horizontalLinesI; i++) {
   var y = (i / horizontalLinesI) * canvasII.height;
   cdsc.beginPath();
   cdsc.moveTo(0, y);
   cdsc.lineTo(canvasII.width, y);
   cdsc.stroke();
   }
   // Dibuja líneas verticales
   for (var j = 1; j < verticalLinesI; j++) {
   var x = (j / verticalLinesI) * canvasII.width;
   cdsc.beginPath();
   cdsc.moveTo(x, 0);
   cdsc.lineTo(x, canvasII.height);
   cdsc.stroke();
   }
 }        
 var canvas = document.getElementById("tripleSinusoidalCanvas");
 var ctx = canvas.getContext("2d");
 ctx.strokeStyle = "rgb(255, 125, 0)"; // Verde
 ctx.lineWidth = 1;
 drawSinusoidalDouble(50, 0.05, 0);
 ctx.strokeStyle = "rgb(255, 0, 255)"; // Amarillo
 ctx.lineWidth = 1;
 drawSinusoidalDouble(60, 0.05, Math.PI / 2); // Parámetros diferentes para la segunda onda
 ctx.strokeStyle = "rgb(255, 255, 0)"; // Azul
 ctx.lineWidth = 1;
 drawSinusoidal(40, 0.1, Math.PI); // Parámetros diferentes para la tercera onda
 drawGrid(4, 7);
 function drawSinusoidal(amplitude, frequency, phase) {
 // Comienza el trazado de la onda
 ctx.beginPath();
 for (var x = 0; x < canvas.width; x++) {
 // Calcula el valor y de la onda en función de x
 var y = amplitude * Math.sin(frequency * x + phase);
 // Dibuja un segmento de la onda
 ctx.lineTo(x, canvas.height / 2 - y);
 }
 // Finaliza el trazado y dibuja la línea
 ctx.stroke();
 }
 function drawSinusoidalDouble(amplitude, frequency, phase) {
   // Comienza el trazado de la onda
   ctx.beginPath();
   for (var x = 0; x < canvas.width; x++) {
   // Calcula el valor y de la onda en función de x
   var y = amplitude * Math.sin(frequency * x + phase);
   // Dibuja un segmento de la onda
   ctx.lineTo(x, canvas.height / 2 - y);
   }
   // Finaliza el trazado y dibuja la línea
   ctx.stroke();
 }
function drawGrid(horizontalLines, verticalLines) {
  // Configura el color y el grosor de las líneas de la cuadrícula
  ctx.strokeStyle = "rgb(150, 150, 150)"; // Gris
  ctx.lineWidth = 1;
  // Dibuja líneas horizontales
  for (var i = 1; i < horizontalLines; i++) {
  var y = (i / horizontalLines) * canvas.height;
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(canvas.width, y);
  ctx.stroke();
  }
  // Dibuja líneas verticales
  for (var j = 1; j < verticalLines; j++) {
  var x = (j / verticalLines) * canvas.width;
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, canvas.height);
  ctx.stroke();
  }
}
var intervalId;
function iniciarEventos() {
  var contSinusoidales = document.getElementById('contMetrics')
  var contCicodelicos = document.getElementById('botonesContainer')   
  var colores = ['verde', 'rojo', 'amarillo', 'azul', 'violeta','magenta','gris','verdesat','cyan','purpura','anaranjado'] 
  // Inicia cada botón con un índice de inicio diferente
  var botones = document.querySelectorAll('#botonesContainer .botoneras')
  botones.forEach(function (boton, index) {
    boton.dataset.indiceInicio = index;
  });
  function cambiarColor() {
    botones.forEach(function (boton) {
      var indiceInicio = parseInt(boton.dataset.indiceInicio)
      var indiceColor = (indiceInicio + 1) % colores.length

      // Cambia la clase de color del botón
      boton.classList.remove(...colores);
      boton.classList.add(colores[indiceColor])

      // Actualiza el índice de inicio para el próximo color
      boton.dataset.indiceInicio = indiceColor
    });
  }
  // Llama a la función cambiarColor cada 77 MS y guarda el ID del intervalo
  intervalId = setInterval(cambiarColor, 77)
  contSinusoidales.style.display = 'flex'
  contCicodelicos.style.display = 'grid'

}
function detenerEventos() {
  clearInterval(intervalId);
  var contCicodelicos = document.getElementById('botonesContainer')  
  contCicodelicos.style.left = '555px'
}
function iniciarTransito() {
  var boton = document.getElementById("buttSolitario");
  var stopFlag = false;
  var anchoPantalla = window.innerWidth;
  var altoPantalla = window.innerHeight - 37;
  var duracion = 1000;

  // 1. Array de colores
  var colores = ['verde', 'rojo', 'amarillo', 'azul', 'violeta', 'magenta', 'gris', 'verdesat', 'cyan', 'purpura', 'anaranjado'];
  // 2. Elemento del botón
  var boton = document.getElementById("buttSolitario");
  // 3. Función para cambiar el color del botón con un intervalo
  function cambiarColorConIntervalo() {
    var i = 0;
    setInterval(function () {
      // Cambiar el color del botón
      boton.style.backgroundColor = colores[i];      
      // Incrementar el índice para el próximo color
      i = (i + 1) % colores.length;
    }, 77); // Intervalo de 0.1 segundos (100 milisegundos)
  }
  // Llamar a la función para iniciar el cambio de colores
  cambiarColorConIntervalo();

  // Función para mover el botón y reiniciar el ciclo
  function mover(distanciaX, distanciaY, transitionProperty, nextMove) {
    if (stopFlag) return;
    // Aplicar la transición
    boton.style.transition = transitionProperty;
    boton.style.left = distanciaX + "px";
    boton.style.top = distanciaY + "px";
    // Esperar y luego realizar el siguiente movimiento
    setTimeout(function () {
      if (nextMove) {
        nextMove();
      } 
    }, duracion);
  }
  // Primer movimiento: Derecha a izquierda
  function moverDerechaIzquierda() {
    boton.style.backgroundColor = 'rgb(0,255,0)'
    mover(anchoPantalla - boton.offsetWidth, 0, 'left ' + duracion / 1000 + 's', moverArribaAbajo);
  }
  // Segundo movimiento: Arriba a abajo
  function moverArribaAbajo() {
    boton.style.backgroundColor = 'rgb(255,0,0)'
    mover(anchoPantalla - boton.offsetWidth, altoPantalla - boton.offsetHeight, 'top ' + duracion / 1000 + 's', moverIzquierdaDerecha);
  }
  // Tercer movimiento: Izquierda a derecha
  function moverIzquierdaDerecha() {
    boton.style.backgroundColor = 'rgb(255,255,0)'
    mover(0, altoPantalla - boton.offsetHeight, 'left ' + duracion / 1000 + 's', moverAbajoArriba);
  }
  // Cuarto movimiento: Abajo a arriba
  function moverAbajoArriba() {
    boton.style.backgroundColor = 'rgb(0,0,255)'
    mover(0, 0, 'top ' + duracion / 1000 + 's', moverDiagonal);
  }
  // Quinto movimiento: Diagonal
  function moverDiagonal() {
    boton.style.backgroundColor = 'rgb(255,0,255)'
    mover(anchoPantalla - boton.offsetWidth, altoPantalla - boton.offsetHeight, 'left ' + duracion / 1000 + 's, top ' + duracion / 1000 + 's', moverAbajoArribaII);
  }
  // Sexto movimiento: Abajo a arriba
  function moverAbajoArribaII() {
    boton.style.backgroundColor = 'orangered'
    mover(anchoPantalla - boton.offsetWidth, 0, 'top ' + duracion / 1000 + 's',moverDiagonalI);
  } 
  // séptimo movimiento: Diagonal inversa
  function moverDiagonalI() {
    boton.style.backgroundColor = 'white'
    mover(0, altoPantalla - boton.offsetHeight, 'left ' + duracion / 1000 + 's, top ' + duracion / 1000 + 's', moverAbajoArribaI);
  }
  // Cuarto movimiento: Abajo a arriba
  function moverAbajoArribaI() {
    boton.style.backgroundColor = 'purple'
    mover(0, 0, 'top ' + duracion / 1000 + 's', moverDerechaIzquierda);
  }  
  // Iniciar el ciclo de movimientos
  moverDerechaIzquierda();
  iniciarEventos()
}
function detenerMovimiento() {
  stopFlag = true;
  clearTimeout(timeoutId);
}
var botonSolitario = document.getElementById('buttSolitario');
var botonSeguidor = document.getElementById('boton2');
function moverDerecha() {
  botonSeguidor.style.top = botonSolitario.style.top
  var posicionInicialX = 0
  var posicionFinalX = window.innerWidth - botonSolitario.offsetWidth

  var intervalo = setInterval(function() {
    if (posicionInicialX >= posicionFinalX) {
      clearInterval(intervalo)
      moverAbajo()
    } else {
      // Movimiento hacia la derecha
      posicionInicialX += 7
      botonSolitario.style.left = posicionInicialX + 'px'
      botonSeguidor.style.left = (posicionInicialX - 85) + 'px'

    }
  }, 17);  
}
function moverAbajo() {
  botonSeguidor.style.left = botonSolitario.style.left
  var posicionInicialY = 0;
  var posicionFinalY =(window.innerHeight - 33) - botonSolitario.offsetHeight;

  var intervalo = setInterval(function() {
    if (posicionInicialY >= posicionFinalY) {
      moverIzquierda()      
      clearInterval(intervalo);
    } else {
      // Movimiento hacia abajo
      posicionInicialY += 7;
      botonSolitario.style.top = posicionInicialY + 'px';
      botonSeguidor.style.top = (posicionInicialY - 35) + 'px';
    }
  }, 17);
}
function moverIzquierda() {
  botonSeguidor.style.top = botonSolitario.style.top
  var posicionInicialX = (window.innerWidth - 33) - botonSolitario.offsetWidth;
  var posicionFinalX = 0

  var intervalo = setInterval(function() {
    if (posicionInicialX <= posicionFinalX) {
      moverArriba()      
      clearInterval(intervalo);
    } else {
      // Movimiento hacia la izquierda
      posicionInicialX -= 7;
      botonSolitario.style.left = posicionInicialX + 'px';
      botonSeguidor.style.left = posicionInicialX + 95 + 'px'
    }
  }, 17);
} 
function moverArriba() {
  botonSeguidor.style.left = botonSolitario.style.left;
  var posicionInicialY = (window.innerHeight - 33) - botonSolitario.offsetHeight;
  var posicionFinalY = 0;

  var intervalo = setInterval(function() {
    if (posicionInicialY <= posicionFinalY) {
      moverDerecha()      
      clearInterval(intervalo);
    } else {
      // Movimiento hacia arriba
      posicionInicialY -= 7;
      botonSolitario.style.top = posicionInicialY + 'px';
      botonSeguidor.style.top = (posicionInicialY + 35) + 'px';
    }
  }, 17);
}
const buttons = document.querySelectorAll('.buttons')  
var contButtsAround = document.getElementById('button-container')
function moverBoton(boton, index) {
  const valoresLeft = ['-52px', '-104px', '-156px', '-208px', '-260px', '-312px', '-364px', '-416px', '-468px', '-520px', '-572px', '-624px', '-676px', '-728px', '-780px', '-832px', '-884px', '-936px', '-988px', '-1040px', '-1092px', '-1144px', '-1196px', '-1248px', '-1300px', '-1352px', '-1404px', '-1456px', '-1508px', '-1560px', '-1612px', '-1664px', '-1716px', '-1768px', '-1820px', '-1872px', '-1924px', '-1976px', '-2028px', '-2080px', '-2132px', '-2184px', '-2236px', '-2288px', '-2340px', '-2392px', '-2444px', '-2496px', '-2548px', '-2600px', '-2652px', '-2704px', '-2756px', '-2808px', '-2860px', '-2912px', '-2964px', '-3016px', '-3068px', '-3120px', '-3172px', '-3224px', '-3276px', '-3328px', '-3380px', '-3432px', '-3484px', '-3536px', '-3588px']

  // Calcular la distancia total de los cuatro lados de la pantalla
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const totalDistance = screenWidth + screenHeight + screenWidth + screenHeight;
  // Obtener la cantidad de botones
  const cantidadBotones = valoresLeft.length;
  // Calcular el espacio entre botones (considerando 2px de separación)
  const espacioEntreBotones = 2;
  const espacioTotalEntreBotones = (cantidadBotones - 1) * espacioEntreBotones;
  // Calcular la distancia disponible para posicionar los botones
  const distanciaDisponible = totalDistance - espacioTotalEntreBotones;
  // Calcular la distancia entre cada botón
  const distanciaEntreBotones = distanciaDisponible / cantidadBotones;
  // Posicionar los botones en el lado izquierdo de la pantalla
  const nuevosValoresLeft = Array.from({ length: cantidadBotones }, (_, index) => `-${index * (distanciaEntreBotones + espacioEntreBotones)}px`);
  // Asignar las nuevas posiciones a los botones
  nuevosValoresLeft.forEach((valor, index) => {
  const boton = document.getElementById(`buttons${index + 2}`)
  if (boton) {
    boton.style.left = valor
  } 
});
  boton.style.left = nuevosValoresLeft[index]
  const velocidad = 26
  let x = parseFloat(boton.style.left) || 0
  let y = 0
  let moviendoDerecha = true
  let moviendoAbajo = false
  let moviendoIzquierda = false
  let moviendoArriba = false
  let contador = 0
  let nuevoContador = 0

  function mover() {
    contador++;  // Incrementa el primer contador cuando moviendoDerecha es true
    contButtsAround.style.display = 'flex'
    /////////////////////////////////////////////////////////////////////////////////////////////
    if (contador ===20) {
      contador = 0;  // Reinicia el primer contador cuando llega a 80 unidades
      nuevoContador++;  // Incrementa el nuevo contador cada vez que contador llega a 80 unidades
      console.log("Nuevo Contador:", nuevoContador)          
    }    
    //////////////////////////////////////////////////////////////////////////////////////////////
    if (moviendoDerecha) {
      if (x < window.innerWidth - boton.offsetWidth) {
        x += velocidad
        boton.style.background = 'rgb(0,255,0)'
        const colores = {
          1: 'rgb(255, 0, 0)',
          2: 'rgb(255, 255, 0)',
          3: 'rgb(0, 0, 255)',
          4: 'rgb(255, 145, 0)',
          5: 'rgb(125, 125, 125)',
          6: 'rgb(233, 2, 25)',
          7: 'rgb(222, 53, 230)'
        };        
        if (nuevoContador >= 1 && nuevoContador <= 7) {
          boton.style.background = colores[nuevoContador];
        }
      } else {
        x = window.innerWidth - boton.offsetWidth
        moviendoDerecha = false
        moviendoAbajo = true        
      }
    }  
    else if (moviendoAbajo) {
      if (y < (window.innerHeight) - boton.offsetHeight) {
        y += velocidad;
        boton.style.background = 'rgb(255,255,0)'
        const colores = {

          3: 'rgb(0, 255, 0)',
          4: 'rgb(0, 255, 255)',
          5: 'rgb(222, 53, 230)',
          6: 'rgb(100, 255, 100)',
          7: 'rgb(255, 255, 0)',
          8: 'rgb(77, 0, 255)',
          9: 'rgb(255, 145, 0)'
        };
        
        if (nuevoContador >= 3 && nuevoContador <= 9) {
          boton.style.background = colores[nuevoContador];
        }
      } else {
        y = (window.innerHeight) - boton.offsetHeight
        moviendoAbajo = false;
        moviendoIzquierda = true
      }
    } else if (moviendoIzquierda) {
      if (x > 0) {
        x -= velocidad
        boton.style.background = 'rgb(255,0,255)'
        const colores = {
          4: 'rgb(255, 0, 0)',
          5: 'rgb(255, 255, 0)',
          6: 'rgb(0, 0, 255)',
          7: 'rgb(255, 145, 0)',
          8: 'rgb(125, 125, 125)',
          9: 'rgb(233, 2, 25)',
          10: 'rgb(222, 53, 230)'
        }        
        if (nuevoContador >= 4 && nuevoContador <= 11) {
          boton.style.background = colores[nuevoContador];
        }
      } else {
        x = 0
        moviendoIzquierda = false
        moviendoArriba = true
      }
    } else if (moviendoArriba) {
      if (y > 0) {
        y -= velocidad
        boton.style.background = 'rgb(0,255,255)'
        const colores = {
        7: 'rgb(0, 255, 0)',
        8: 'rgb(0, 255, 255)',
        9: 'rgb(222, 53, 230)',
        10: 'rgb(100, 255, 100)',
        11: 'rgb(255, 255, 0)',
        12: 'rgb(77, 0, 255)',
        13: 'rgb(255, 145, 0)'
      };      
      if (nuevoContador >= 7 && nuevoContador <= 13) {
        boton.style.background = colores[nuevoContador];
      }
      if(nuevoContador >= 9){
        nuevoContador = 0
      }

      } else {
      y = 0
      moviendoArriba = false
      // Inicia el movimiento hacia la derecha para reiniciar el ciclo
      moviendoDerecha = true
  }
    }
    boton.style.left = x + 'px'
    boton.style.top = y + 'px'
    requestAnimationFrame(mover);
  }
  // Inicia el movimiento hacia la derecha
  mover();
} 
function iniciaMove() {
  var contiVideoJuegos = document.getElementById('cont-videojuegos')
  contiVideoJuegos.style.display = 'block'
  buttons.forEach((button, index) => {
    moverBoton(button, index);
  });
  iniciarTransito()
}
function palpitarBoton(elemento){
  switch (elemento){

    case 'desbobinadorId':
      document.getElementById('boton1').classList.add('parpadea');
    setTimeout(function () {
      document.getElementById('boton1').classList.remove('parpadea');
    }, 277);
    break;
    case 'uTeñidos':
      document.getElementById('boton7').classList.add('parpadea');
    setTimeout(function () {
      document.getElementById('boton7').classList.remove('parpadea');
    }, 277);
    break;
    case 'alimentadorId':
      document.getElementById('boton13').classList.add('parpadea');
    setTimeout(function () {
      document.getElementById('boton13').classList.remove('parpadea');
    }, 277);
    break;
    case 'unidProceso':
      document.getElementById('boton19').classList.add('parpadea');
    setTimeout(function () {
      document.getElementById('boton19').classList.remove('parpadea');
    }, 277);
    case 'rebobinador':
      document.getElementById('boton25').classList.add('parpadea');
    setTimeout(function () {
      document.getElementById('boton25').classList.remove('parpadea');
    }, 277);
    break;       
    default:
  }

}
function palpitarBotonTintero() {
  document.getElementById('tinteroButton').classList.add('parpadea');
  setTimeout(function() {
    document.getElementById('tinteroButton').classList.remove('parpadea');
  }, 277);  
}
function palpitarBotonBateria() {
  document.getElementById('bateriaButton').classList.add('parpadea');
  setTimeout(function() {
    document.getElementById('bateriaButton').classList.remove('parpadea');
  }, 277);  
}
function palpitarBotonTorre() {
  document.getElementById('bancadaButton').classList.add('parpadea');
  setTimeout(function() {
    document.getElementById('bancadaButton').classList.remove('parpadea');
  }, 277);  
}
function palpitarBotonHumedad() {
  document.getElementById('humedadButton').classList.add('parpadea');
  setTimeout(function() {
    document.getElementById('humedadButton').classList.remove('parpadea');
  }, 277);  
}
function aumentarIconos() {
  const iconosLateral = document.getElementsByClassName('iconos-laterales');
  let currentIndex = 0;
  function applyEffect() {
    if (currentIndex < iconosLateral.length) {
      const currentImage = iconosLateral[currentIndex]
      currentImage.style.transition = 'transform 0.1s'
      currentImage.style.transform = 'scale(3.0)'
      setTimeout(() => {
        currentImage.style.transition = 'transform 0.7s'
        currentImage.style.transform = 'scale(1)'
        currentIndex++;
        applyEffect()
      }, 17)
    }}
      applyEffect()
}
function moverIconos(){  
  for (let i = 1; i <= 8; i++) {
    // Generar el ID del elemento actual
    const elementoId = 'icono' + i;
    // Eliminar la clase 'icon1-up' del elemento actual
    document.getElementById(elementoId).classList.remove('icon1-up');
  }  
  setTimeout(() => {
    document.getElementById('icono5').classList.add('icon1-up');
  }, 77)
  setTimeout(() => {
    document.getElementById('icono6').classList.add('icon1-up');
  }, 157)
  setTimeout(() => {
    document.getElementById('icono7').classList.add('icon1-up');
  }, 237)
  setTimeout(() => {
    document.getElementById('icono8').classList.add('icon1-up');
  }, 317)
}
document.getElementById('icono1').addEventListener('click', function(event) {
  event.stopPropagation(); // Detener la propagación del evento
  moverIconos() // Ejecutar la función asociada al child
});
document.getElementById('icono2').addEventListener('click', function(event) {
  event.stopPropagation(); // Detener la propagación del evento
  moverIconos() // Ejecutar la función asociada al child
});
document.getElementById('iniciar').addEventListener('click', function() {
  contibotsDistri.classList.toggle('move-down')
  contVideo.classList.toggle('move-down-I')
});
function transicionElementos() {
  contibotsDistri.classList.add('move-up')
  contVideo.classList.add('move-up-left')
}
var contOblicuosInicio = document.getElementById('cont-titulo')
function transitoInicio(){
  contOblicuosInicio.style.animation = "giro-y 1s linear";
  contOblicuosInicio.classList.add('move-images-IV');
}
function transicionElementosII() {
  contibotsDistriII.classList.add('move-butts')
  contImgsDistribuidor.classList.add('move-images')
  buttRepuest.classList.add('move-repuest')
  contiVidDistribuidor.classList.add('move-video')    
}
function transicionElementosIII() {
  contibotsDistriIII.classList.add('move-butts-II')
  contImgsEntintador.classList.add('move-images-II') 
  buttRepuestI.classList.add('move-repuest-II')
  contiVidEntintador.classList.add('move-vid-entintador') 
} 
function transicionElementosIV(){
  contibotsDistriV.classList.add('move-butts-III')
  contImgsSmed.classList.add('move-images-III') 
  buttRepuestIII.classList.add('move-repuest-III')
  contiVidSmed.classList.add('move-vid-smed') 
}
function transicionElementosV(){
  contibotsDistriVI.classList.add('move-butts-IV')
  contVideoSmed.classList.add('move-vid-smed-II')
  contImageneSmed.classList.add('move-images-IV')
  buttRepuestV.classList.add('move-repuest-IV')
}
function restablecerEstilos(elemento) {
  // Eliminar estilos en línea
  elemento.removeAttribute('style');

  // Asegurarse de que no haya clases que apliquen estilos no deseados
  elemento.className = '';

  // Agregar la clase que define el lugar desde CSS
  elemento.classList.add('clase-contenedor-7');  // Ajusta el nombre de la clase según tu caso
}
function volverApre(){
  var elementosExcluidos = ['buscador','container01','links-inicialesI','links-iniciales','pre-prensa','imgs-prepress','primerCont','vidCicodelia']  
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }  
}
const applyFilters = () => {
  videoStore.forEach(videoElement => {
    videoElement.style.filter = `blur(${blurAmount}px)`;
  });   
};
const applyFiltersII = () => {
  videoStore.forEach(videoElement => {
    videoElement.style.transform = `scale(${zoomAmount}%) rotate(${degreesAmount}deg)`
  })
};
const applyFiltersV = () => {
  videoStore.forEach(videoElement => {
    videoElement.style.transform = `scale(${zoomAmount}%) rotate(${degreesAmount}deg)`;
  });
};
const applyFiltersIII = () => {
  videoStore.forEach(videoElement => {
    videoElement.style.transform = `scale(${zoomAmount}%) rotate(${degreesAmount}deg)`;
  });

  
};
const applyFiltersIV = () => {
  videoPrisma.style.filter = `blur(${blurAmount}px)`;
}
const makeFilters = () => { // Resetear filtros
  blurAmount = 1
  videoStore.forEach(videoElement => {
    videoElement.style.filter = `blur(${1}px)`;
  });
  button.style.left = '0'
  slider1.style.width = '0'
  slider2.style.width = '0'
  slider3.style.width = '0'
  display.style.color = 'rgb(0,255,0)'
  posicionPantalla.style.borderColor = 'rgb(0,255,0)'
  posicionPantalla.style.color = 'rgb(0,255,0)'
  positionDisplay.textContent = `${'0'} - µpm`
  applyFiltersII()
  applyFiltersIII()
};
const makeFiltersII = () => { // Resetear filtros 
  currentRotation = 0
  degreesAmount = 0
  videoStore.forEach(videoElement => {
    videoElement.style.transform = `rotate(${0}deg)`;
  });
  spanGuide.style.left = '0'
  slider5.style.width = '0'
  positionDisplayII.textContent = `${'0'}°`
  applyFilters()
  applyFiltersII()
  applyFiltersIII()
  applyFiltersIV()
};
const makeFiltersIII = () => { // Resetear filtros
  currentZoom = 0
  zoomAmount = 100
  videoPrisma.style.transform = `scale(100%)`
  spanGuideI.style.left = '0'
  slider4.style.width = '0'
  positionDisplayIII.textContent = `${'100'} %`
  applyFilters()
  applyFiltersII()
  applyFiltersIII()
  applyFiltersIV()
};
const makeFiltersIV = () => { // Resetear filtros
  positionDisplay.textContent = `${'400'} - µpm`
};
let degreesAmount = 0
let zoomAmount = 100
let blurAmount = 0
let brightnessAmount = 1   
var intervalId = null
let intervalId2 = null
let intervalId3 = null
let intervalId4 = null
let intervalId5 = null
let intervalId6 = null
let intervalId7 = null
buttonLeft.addEventListener('mousedown', () => {
  if (!clickHabilitado) return; 
  intervalId = setInterval(() => {
    var tituloElement = document.getElementById("titulo");
    let currentLeft = parseFloat(window.getComputedStyle(button).left)        
    let newLeft = currentLeft + 2
    if(newLeft <= 2){
      makeFilters()
      blurAmount = 0;
      brightnessAmount = 1;      
    }
    if (newLeft <= 150) {
      posicionPantalla.style.color = 'rgb(0,255,0)'
      posicionPantalla.style.borderColor = 'rgb(0,255,0)'
      button.style.left = `${newLeft}px`;
      slider1.style.width = `${newLeft}px`;
      blurAmount += 0.01
      applyFilters();
      console.log(videoStore)
    }    
    if(newLeft === 150){
      clearInterval(intervalId)
      verButtsInterfaz.style.pointerEvents = "none";    
      interfaz.style.display = 'flex'
      tituloElement.textContent = "BAJA DEFINICION DE VIDEO"; 
      tituloElement.style.backgroundColor = 'orange'
      tituloElement.style.color = 'black'           
    }
    if(newLeft >= 150){
      posicionPantalla.style.color = 'orange'
      posicionPantalla.style.borderColor = 'orange'
      slider2.style.width = `${newLeft-150}px`
      button.style.left = `${newLeft}px`
      blurAmount += 0.01
      applyFilters();
    } 
    if(newLeft === 330){
      clearInterval(intervalId)
      interfaz.style.display = 'flex'
      tituloElement.textContent = "PERDIDA TOTAL DE DEFINICION";  
      tituloElement.style.backgroundColor = 'rgb(255,0,0)'
      tituloElement.style.color = 'white'
      verButtsInterfaz.style.pointerEvents = "none";
    }
    if(newLeft >= 330){
      posicionPantalla.style.color = 'rgb(255,0,0)'
      posicionPantalla.style.borderColor = 'rgb(255,0,0)'
      slider3.style.width = `${newLeft-327}px`
      button.style.left = `${newLeft}px`
      blurAmount += 0.1
      applyFilters();
    }
    if (newLeft >= 400) {
      positionDisplay.textContent = `400 - µpm`
      clearInterval(intervalId);
      clickHabilitado = false;
    }    
    positionDisplay.textContent = `${newLeft} - µpm`
  }, 7);
});
buttonLeft.addEventListener('mouseup', () => {
  clearInterval(intervalId)
}); 
buttonLeft.addEventListener('mouseleave', () => {
  clearInterval(intervalId)
});
buttonRight.addEventListener('mousedown', () => {
  /* clickHabilitado = true; */
  intervalId2 = setInterval(() => {
    const currentLeft = parseFloat(window.getComputedStyle(button).left)
    const barraWidth = parseFloat(window.getComputedStyle(slider3).width)
    const barraWidth1 = parseFloat(window.getComputedStyle(slider2).width) 
    const barraWidth2 = parseFloat(window.getComputedStyle(slider1).width)
    const newLeft = currentLeft - 2
    const newWidth = barraWidth -2 
    const withNew1 = barraWidth1 - 2
    const withNew2 = barraWidth2 - 2
    if (newLeft >=330) {
      button.style.left = `${newLeft}px`
      slider3.style.width = `${newWidth}px`
      blurAmount -= 0.025;
      applyFilters(); // Aplicar los filtros actualizados
      posicionPantalla.style.borderColor = 'rgb(255,0,0)'
      display.style.color = 'rgb(255,0,0)'
    }
    if (newLeft >= 130 && newLeft <= 330) {
      button.style.left = `${newLeft}px`
      slider2.style.width = `${withNew1}px`
      blurAmount -= 0.025;
      applyFilters(); // Aplicar los filtros actualizados
      posicionPantalla.style.color = 'orange'
      posicionPantalla.style.borderColor = 'orange'      
      display.style.color = 'rgb(255,100,0)'
    }
    if (newLeft >= 0 && newLeft <= 150) {
      button.style.left = `${newLeft}px`
      slider1.style.width = `${withNew2}px`
      blurAmount -= 0.025;
      applyFilters(); // Aplicar los filtros actualizados
      posicionPantalla.style.color = 'rgb(0,255,0)'
      posicionPantalla.style.borderColor = 'rgb(0,255,0)'    
      display.style.color = 'rgb(0,255,0)'
    }
    if (newLeft <= 0) {
      setTimeout(() => {
      positionDisplay.textContent = `${'0'} - µpm`     
      clearInterval(intervalId2)        
      }, 17);
      makeFilters()
      blurAmount = 0;
    }
    positionDisplay.textContent = `${newLeft} - µpm`
  }, 7)
})
buttonRight.addEventListener('mouseup', () => {
  clearInterval(intervalId2)
})
buttonRight.addEventListener('mouseleave', () => {
  clearInterval(intervalId2)
})
buttReset.addEventListener('mousedown', () => {
  makeFilters()
    clickHabilitado = true;
})
buttonLeft2.addEventListener('mousedown', () => {
  intervalId5 = setInterval(() => {    
    if (currentRotation < 360) {
      currentRotation++
      console.log(currentZoom)
      posicionPantalla.style.color = 'rgb(0,255,0)'
      posicionPantalla.style.borderColor = 'rgb(0,255,0)'
      spanGuide.style.left = `${currentRotation}px`
      slider5.style.width = `${currentRotation}px`
      degreesAmount += 1
      applyFiltersV();  
      positionDisplayII.textContent = `${currentRotation}°` 
    }
    if(currentRotation >= 360){
      clearInterval(intervalId5)
    }
  }, 77);

});
buttonLeft2.addEventListener('mouseup', () => {
  clearInterval(intervalId5)
})
buttonLeft2.addEventListener('mouseleave', () => {
  clearInterval(intervalId5)
})
buttonRight2.addEventListener('mousedown', () => {
  clearInterval(intervalId4); // Limpiar intervalo anterior si existe
  intervalId4 = setInterval(() => {    
    if (currentRotation > 0) {
      currentRotation--;
      posicionPantalla.style.color = 'rgb(0,255,0)';
      posicionPantalla.style.borderColor = 'rgb(0,255,0)';
      spanGuide.style.left = `${currentRotation}px`;
      slider5.style.width = `${currentRotation}px`;
      degreesAmount -= 1;
      applyFiltersII(); // Aplicar los filtros actualizados
      positionDisplayII.textContent = `${currentRotation}°`;
    }
  }, 77);
}); 
buttonRight2.addEventListener('mouseup', () => {
  clearInterval(intervalId4);
})
buttonRight2.addEventListener('mouseleave', () => {
  clearInterval(intervalId4);
})
buttReset2.addEventListener('mousedown', () => {
  makeFiltersII()
})
buttonLeft3.addEventListener('mousedown', () => {
  intervalId6 = setInterval(() => {        
    if (currentZoom + 101 <= 300) {
      currentZoom++;
      positionDisplayIII.style.color = 'rgb(0,255,255)';
      positionDisplayIII.style.borderColor = 'rgb(0,255,255)';
      spanGuideI.style.left = `${(currentZoom)*1.7}px`;
      slider4.style.width = `${(currentZoom)*1.7}px`;
      zoomAmount += 1;
      applyFiltersIII(videoStore); // Aplicar los filtros actualizados
      positionDisplayIII.textContent = `${currentZoom + 100} %`;
      console.log(currentZoom)
    }
    if(currentZoom + 100 === 300){
      clearInterval(intervalId6);
      console.log(currentZoom)
    }
  }, 77);
});
buttonLeft3.addEventListener('mouseup', () => {
  clearInterval(intervalId6);
})
buttonLeft3.addEventListener('mouseleave', () => {
  clearInterval(intervalId6);
})
buttonRight3.addEventListener('mousedown', () => {
  intervalId7 = setInterval(() => {     
    if (currentZoom + 100 <= 300 && currentZoom + 99 >= 100) {
      currentZoom--;
      positionDisplayIII.style.color = 'rgb(0,255,255)';
      positionDisplayIII.style.borderColor = 'rgb(0,255,255)';
      spanGuideI.style.left = `${(currentZoom)*1.7}px`;
      slider4.style.width = `${(currentZoom)*1.7}px`;
      zoomAmount -= 1;
      applyFiltersIII(); // Aplicar los filtros actualizados
      /* applyFilters() */
      positionDisplayIII.textContent = `${currentZoom + 100} %`;
      console.log(currentZoom)

    }
  }, 77);
});
buttonRight3.addEventListener('mouseup', () => {
  clearInterval(intervalId7);
})
buttonRight3.addEventListener('mouseleave', () => {
  clearInterval(intervalId7);
})
buttReset3.addEventListener('mousedown', () => {
  makeFiltersIII()
})
botVerde.addEventListener('mousedown', () => {
  verButtsInterfaz.style.pointerEvents = "auto"
  interfaz.style.display = 'none'
  container.style.visibility = 'visible'
  verButtsInterfaz.style.visibility = 'visible'
  button.style.visibility = 'visible'
  posicionPantalla.style.visibility = 'visible'
})
botNaran.addEventListener('mousedown', () => {
  verButtsInterfaz.style.pointerEvents = "auto"
  interfaz.style.display = 'none'
  container.style.visibility = 'visible'
  verButtsInterfaz.style.visibility = 'visible'
  button.style.visibility = 'visible'
  posicionPantalla.style.visibility = 'visible'
  slider1.style.width = '0'
  slider2.style.width = '0'
  slider3.style.width = '0'
  positionDisplay.textContent = `${'0'} - µpm`
  positionDisplay.style.borderColor = 'rgb(0,255,0)'  
  positionDisplay.style.color = 'rgb(0,255,0)'  
  button.style.left = '0'
  makeFilters()
})
botRed.addEventListener('mousedown', resetButtons);
botClose.addEventListener('mousedown', resetButtons); 
function resetButtons() {
  clickHabilitado = true; 
  makeFilters()
  desactivarClicsPorUnTiempoIII()
  if(containerII.style.display === 'flex'){
    verButtsInterfaz.style.pointerEvents = "auto";
    slider1.style.width = '0';
    slider2.style.width = '0';
    slider3.style.width = '0';
    posicionPantalla.textContent = `${'0'} - µpm`;
    posicionPantalla.style.borderColor = 'rgb(0,255,0)';
    posicionPantalla.style.color = 'rgb(0,255,0)';
    button.style.left = '0';
    container.style.display = 'none';
    verButtsInterfaz.style.display = 'none';
    display.style.display = 'none';
    button.style.display = 'none';
    posicionPantalla.style.display = 'none';
    interfaz.style.display = 'none';
    newLeft = 0;
    padreTres.classList.add('move_containerI')
  }else{
    verButtsInterfaz.style.pointerEvents = "auto";
    slider1.style.width = '0';
    slider2.style.width = '0';
    slider3.style.width = '0';
    posicionPantalla.textContent = `${'0'} - µpm`;
    posicionPantalla.style.borderColor = 'rgb(0,255,0)';
    posicionPantalla.style.color = 'rgb(0,255,0)';
    button.style.left = '0';
    container.style.display = 'none';
    verButtsInterfaz.style.display = 'none';
    display.style.display = 'none';
    button.style.display = 'none';
    posicionPantalla.style.display = 'none';
    interfaz.style.display = 'none';
    newLeft = 0;
    padreTres.classList.add('move_containerII')
}
}
botCloseII.addEventListener('mouseup', resetButtonsII);   // PRIMER BOTON CIERRE TOTAL 
function resetButtonsII() {
  makeFiltersII()
  desactivarClicsPorUnTiempoIII()
  if(container.style.display === 'none'){
    displayII.style.display = 'none';
    positionDisplayII.textContent = `${'0'}°`;
    containerII.style.display = 'none';
    spanGuide.style.display = 'none';
    slider5.style.width = '0';
    verButtsInterfazII.style.display = 'none';
    positionDisplayII.style.display = 'none';
    padreTres.classList.add('move_containerII')    
  }else{
    displayII.style.display = 'none';
    positionDisplayII.textContent = `${'0'}°`;
    containerII.style.display = 'none';
    spanGuide.style.display = 'none';
    slider5.style.width = '0';
    verButtsInterfazII.style.display = 'none';
    positionDisplayII.style.display = 'none';
    setTimeout(() => {
      padreUno.classList.add('move_container')    
    },177);
    setTimeout(() => {
      padreTres.classList.add('move_container')    
    },400);
  }
}
botCloseIII.addEventListener('mousedown', resetButtonsIII);
function resetButtonsIII() {
  makeFiltersIII()
  desactivarClicsPorUnTiempoIII()
  positionDisplayIII.style.display = 'none';
  positionDisplayIII.textContent = `${'100'}%`;
  containerIII.style.display = 'none';
  spanGuideI.style.display = 'none';
  slider4.style.width = '0';
  verButtsInterfazIII.style.display = 'none';
  positionDisplayIII.style.display = 'none';
  aplique.style.display = 'none'
}
function mostrarInterfaz() { 
  container.style.display = 'flex'
  verButtsInterfaz.style.display = 'flex'
  display.style.display = 'flex'
  button.style.display = 'flex'
  posicionPantalla.style.display = 'flex'
  slider1.style.width = '0'
  slider2.style.width = '0'
  slider3.style.width = '0'
  posicionPantalla.textContent = `${'0'} - µpm`
  posicionPantalla.style.borderColor = 'rgb(0,255,0)'  
  posicionPantalla.style.color = 'rgb(0,255,0)'  
  button.style.left = '0'
  container.style.zIndex = '3'
  verButtsInterfaz.style.zIndex = '3'
  button.style.zIndex = '3'
  posicionPantalla.style.zIndex = '3'
  display.style.zIndex = '3'
}
function interfazAvance() {
  let verInterfaz = document.getElementById('container_interfaz')
  let verInterfazII = document.getElementById('container_interfaz_2')
  let verInterfazIII = document.getElementById('container_interfaz_3')              
  let verDisplay = document.getElementById('display')
  let verDisplayII = document.getElementById('display_2')
  let verDisplayIII = document.getElementById('display_3') 
  botIzquierda.style.display = 'none'
  botDerecha.style.display = 'none'
  clickHabilitado = true  
  if (botIzquierda && botDerecha && padreUno && padreDos && padreTres) {
    botIzquierda.style.display = 'none';
    botDerecha.style.display = 'none';
    [padreUno, padreDos, padreTres].forEach(padre => {
      padre.style.display = 'block';
      padre.classList.remove('move_container', 'move_containerI', 'move_containerII');
    });
  }
  makeFilters()
  makeFiltersII()
  makeFiltersIII()
  desactivarClicsPorUnTiempoIII()
  padreVideos.classList.remove('move_video');
  setTimeout(() => {
  padreVideos.classList.add('move_video');
}, 500);
  ocultarElementos('contenedorElementos');
  [container, verButtsInterfaz, display, button, posicionPantalla].forEach(elemento => {
    eliminarEstilosInline(elemento);
  });
  const elementosFlex = [
    verInterfaz, verButtsInterfaz, verDisplay, verInterfazII, verButtsInterfazII,
    verDisplayII, positionDisplayIII, positionDisplayII, verInterfazIII,
    verButtsInterfazIII, verDisplayIII, aplique, apliqueII
  ];  
  const elementosVisible = [
    verInterfaz, verButtsInterfaz, verDisplay, verInterfazII, verButtsInterfazII,
    verDisplayII, positionDisplayIII, positionDisplayII, verInterfazIII,
    verButtsInterfazIII, verDisplayIII, aplique, apliqueII
  ];
  for (let i = 0; i < elementosFlex.length; i++) {
    elementosFlex[i].style.display = 'flex';
  }  
  for (let i = 0; i < elementosVisible.length; i++) {
    elementosVisible[i].style.visibility = 'visible';
  }
} 
function eliminarEstilosInline(elemento) {
  var estilosAplicados = window.getComputedStyle(elemento)
  for (var i = 0; i < estilosAplicados.length; i++) {
    var propiedad = estilosAplicados[i];
    elemento.style[propiedad] = ""
  }
}
let contFriends = []
function animateVideoWidth(eltoHtml) {
  const videoElement = document.getElementById(eltoHtml); // Obtén el elemento de video
  const initialWidth = 60; // Ancho inicial en píxeles
  const targetWidth = 400; // Ancho final en píxeles
  const duration = 500; // Duración de la animación en milisegundos (0.5 segundos)
  let startTime;
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1); // Asegúrate de no exceder el 100% de progreso
    const newWidth = initialWidth + (targetWidth - initialWidth) * progress;
    videoElement.style.width = `${newWidth}px`; // Aplica el nuevo ancho al elemento de video
    if (progress < 1) {
      requestAnimationFrame(step); // Sigue animando hasta que se complete el tiempo
    }
  }
  requestAnimationFrame(step); // Comienza la animación
}
function animateVideoWidthII(eltoHtml) {
  const videoElement = document.getElementById(eltoHtml); // Obtén el elemento de video
  const initialWidth = 60; // Ancho inicial en píxeles
  const targetWidth = 800; // Ancho final en píxeles
  const duration = 500; // Duración de la animación en milisegundos (0.5 segundos)
  let startTime;
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1); // Asegúrate de no exceder el 100% de progreso
    const newWidth = initialWidth + (targetWidth - initialWidth) * progress;
    videoElement.style.width = `${newWidth}px`; // Aplica el nuevo ancho al elemento de video
    if (progress < 1) {
      requestAnimationFrame(step); // Sigue animando hasta que se complete el tiempo
    }
  }
  requestAnimationFrame(step); // Comienza la animación
}
function moveCursorToEnd(input) {
  // Obtener la longitud del texto en el input
  var textLength = input.value.length;
  // Mover el cursor al final del input
  input.setSelectionRange(textLength, textLength); 
} 
function abrirInterfaz() {
  var elementosExcluidos = ['videoBackgroundII','video-background','padre-interfaz','cont-titulo','franja-Blanca','subtitulo-I','descripcion-I','butt-Institucional','padre-interfaz', 'agrupaOblicuos-XI', 'hijo-interaz-1', 'hijo-interaz-2', 'contFrente-V','titulo-ancho','logo-grande','image-background'];
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i]);
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none';
    }
  }
  if(screenWidth < 500){
    var elementoPadre = document.getElementById('cont-titulo');
    elementoPadre.classList.remove('move-oblicuos');
    setTimeout(function () {
    elementoPadre.classList.add ('move-oblicuos');
    desactivarClicsPorUnTiempo()
    }, 177);
    setTimeout(() => {
      var contenedor = document.getElementById('video-background');  
      contenedor.style.filter = 'none';
      reduccionGradualVideo()
    }, 1800);
    setTimeout(() => {
      document.getElementById('subtitulo-I').classList.add('move-title')    
    }, 1977);
    setTimeout(() => {
      alternarColorVerde() 
    }, 2500);
    setTimeout(() => {
      alternarColorVerdeInverso() 
      applyImageEffects5()      
    }, 2800); 
    setTimeout(() => {
      alternarColorVerde() 
    }, 3100);
    setTimeout(() => {
      alternarColorVerdeInverso() 
    }, 3400); 
  }else{
    var titulo = document.getElementById('subtitulo-I')
    var elementoPadre = document.getElementById('cont-titulo');
    elementoPadre.classList.remove('move-oblicuosII');
    setTimeout(function () {
    elementoPadre.classList.add('move-oblicuosII');
    desactivarClicsPorUnTiempo()
    }, 177);
    setTimeout(() => {
      var contenedor = document.getElementById('video-background');  
      contenedor.style.filter = 'none';
      reduccionGradualVideo()
    }, 500);
    setTimeout(() => {
      titulo.classList.add('move-title')    
    }, 1722);
    setTimeout(() => {
      alternarColorVerde() 
    }, 300);  
    setTimeout(() => {
      alternarColorVerdeInverso() 
      applyImageEffects5()            
    }, 3300);  
    setTimeout(() => {
      alternarColorVerde() 
    }, 3600);
    setTimeout(() => {
      alternarColorVerdeInverso() 
    }, 3900);      
  }
}
function trasladarOblicuos(){
  var contOblicuosXI = document.getElementById('agrupaOblicuos-XI');
  contOblicuosXI.classList.add('move-oblicuos');
  console.log('se AGREGO la clase')
}
function desactivarClicsPorUnTiempoIII() {
  // Desactivar los clics
  document.addEventListener('click', bloquearClic, true);
  // Volver a habilitar los clics después de 1 segundo
  setTimeout(function() {
      document.removeEventListener('click', bloquearClic, true);
  }, 1000);
}
function desactivarClicsPorUnTiempoII() {
  // Desactivar los clics
  document.addEventListener('click', bloquearClic, true);
  // Volver a habilitar los clics después de 1 segundo
  setTimeout(function() {
      document.removeEventListener('click', bloquearClic, true);
  }, 3000);
}
function desactivarClicsPorUnTiempo() {
  // Desactivar los clics
  document.addEventListener('click', bloquearClic, true);
  // Volver a habilitar los clics después de 1 segundo
  setTimeout(function() {
      document.removeEventListener('click', bloquearClic, true);
  }, 4000);
}
function bloquearClic(event) {
event.stopPropagation();
event.preventDefault();
}
function aumentoGradualVideo() {
  var video = document.getElementById('video-background');
  var currentScale = 1; // Escala inicial del video
  var targetScale = 10; // Escala objetivo del video
  var increment = 0.1; // Incremento de escala en cada paso
  var interval = 1; // Intervalo de tiempo entre cada paso (en milisegundos)
  var scaleUp = setInterval(function() {
    currentScale += increment; // Aumentar la escala actual
    video.style.transform = 'scale(' + currentScale + ')'; // Aplicar la escala al video
    // Verificar si se alcanzó la escala objetivo
    if (currentScale >= targetScale) {
        clearInterval(scaleUp); // Detener el aumento progresivo
    }
  }, interval);
}
function reduccionGradualVideo() {
  var video = document.getElementById('video-background');
  var currentScale = 10; // Escala inicial del video (10x)
  var targetScale = 1.1; // Escala objetivo del video (1x)
  var decrement = 1; // Decremento de escala en cada paso
  var interval = 1; // Intervalo de tiempo entre cada paso (en milisegundos)
  var scaleDown = setInterval(function() {
    currentScale -= decrement; // Reducir la escala actual
    video.style.transform = 'scale(' + currentScale + ')'; // Aplicar la escala al video
    // Verificar si se alcanzó la escala objetivo
    if (currentScale <= targetScale) {
        clearInterval(scaleDown); // Detener la reducción progresiva
    }
  }, interval);
}
const boton = document.getElementById('butt-Institucional');
const elementos = document.querySelectorAll('.accion-secuencial');
function animarBoton() {
  if(screenWidth < 500){  
    boton.classList.add('big-button'); // Agregar clase para aumentar tamaño
    setTimeout(() => {
      boton.classList.remove('big-button'); 
    }, 400);
  }else{
    boton.classList.add('big-buttonII'); // Agregar clase para aumentar tamaño
    setTimeout(() => {
      boton.classList.remove('big-buttonII'); 
    }, 400);
  }  
}
const elements = document.querySelectorAll('.Bot-inicio7');
function changeColorToRedAndBack() {
  elements.forEach((element, index) => {
  setTimeout(() => {
    element.style.backgroundColor = 'rgb(255,160,0)';
    // Verificar si es el último elemento
    if (index === elements.length - 1) {
      // Después de cambiar todos los elementos a rojo, programar el retorno del color original
      setTimeout(() => {
        elements.forEach((elem, idx) => {
          setTimeout(() => {
            elem.style.backgroundColor = '';
          }, idx * 25);
        });
      },25); // Retraso inicial de 100 milisegundos
    }
    }, index * 25);
  });
  changeColorRedAndBack() 
}
function changeColorRedAndBack() {
  elementos.forEach((element, index) => {
  setTimeout(() => {
    element.style.backgroundColor = 'rgb(255,160,0)';
    // Verificar si es el último elemento
    if (index === elementos.length - 1) {
      // Después de cambiar todos los elementos a rojo, programar el retorno del color original
      setTimeout(() => {
        elementos.forEach((elem, idx) => {
          setTimeout(() => {
            elem.style.backgroundColor = '';
          }, idx * 25);
        });
      },25); // Retraso inicial de 100 milisegundos
    }
    }, index * 25);
  });
}
function dañarLogo() {
  var imagenAyudas = document.getElementById('imagen-ayudas')
  var imagenAyudasII = document.getElementById('imagen-ayudasII')

  imagenAyudas.style.display = 'none'
  setTimeout(() => {  
    imagenAyudasII.style.display = 'flex'      
  }, 77);
  setTimeout(() => {  
    imagenAyudasII.style.display = 'none' 
    imagenAyudas.style.display = 'flex'
  }, 350);  

}
let ejecutando = false;
function alternarAyudas() {
  var imagenAyudas = document.getElementById('imagen-ayudas')
  var contenedorElementos = document.getElementById('contenedorElementos')
  imagenAyudas.classList.remove('pressed');

  if (ejecutando) {
    // Si la función ya está ejecutándose, salimos para no ejecutarla de nuevo
    return;
  }
  ejecutando = true;
  setTimeout(() => {
    imagenAyudas.classList.add('pressed');
  }, 17);
  setTimeout(() => {
    contenedorElementos.style.display = 'block';
  }, 77);
  setTimeout(() => {
    imagenAyudas.classList.remove('pressed');
    ejecutando = false;
  },277);
}
let ocultarTimer = null; 
function mostrarElementos() {
  const contenedorElementos = document.getElementById('contenedorElementos');
  contenedorElementos.style.display = 'block';
}
let isMouseOver = false;
var conteElementos = document.getElementById('contenedorElementos');
conteElementos.addEventListener('mouseover', () => {
  isMouseOver = true;
});
conteElementos.addEventListener('mouseout', () => {
  isMouseOver = false;
});
function ocultarElementos(eltoID) {
  const contenedorElementos = document.getElementById('contenedorElementos');
  const segundoListado = document.getElementById('segundaLista');
  segundoListado.style.display = 'none'
  switch(eltoID){
    case 'miBoton':
      if (segundoListado.style.display === 'block') {
        return;
      }      
      ocultarTimer = setTimeout(() => {
        // Verifica si el ratón todavía está sobre el contenedor
        if (!contenedorElementos.matches(':hover')) {
          contenedorElementos.style.display = 'none';
        }
      }, 100)
    break;
    case 'contenedorElementos':
      if (segundoListado.style.display === 'none') {   
        ocultarTimer = setTimeout(() => {
          // Verifica si el ratón todavía está sobre el contenedor
          if (!contenedorElementos.matches(':hover')) {
            contenedorElementos.style.display = 'none';
          }
        }, 200)        
      }else{
        contenedorElementos.style.display = 'block';
        segundoListado.style.display = 'block';
      }
    break;
    case 'imagen-ayudas':
      const imagenAyudas = document.getElementById('imagen-ayudas');
      const imagenAyudasII = document.getElementById('imagen-ayudasII');
      imagenAyudas.style.display = 'flex'
      imagenAyudasII.style.display = 'none' 
      if (conteElementos.style.display === 'block') { // Asegúrate de usar `===` para comparación
        // Espera 500 ms antes de ocultar el elemento
        setTimeout(() => {
          // Solo oculta el elemento si el ratón no está sobre él
          if (!isMouseOver) {
            conteElementos.style.display = 'none';
          }
        }, 200);
      }
    break;
    case 'imagen-ayudasII':
      const imageAyudas = document.getElementById('imagen-ayudas');
      const imageAyudasII = document.getElementById('imagen-ayudasII');
      imageAyudas.style.display = 'flex'
      imageAyudasII.style.display = 'none' 
      if (conteElementos.style.display === 'block') { // Asegúrate de usar `===` para comparación
        // Espera 500 ms antes de ocultar el elemento
        setTimeout(() => {
          // Solo oculta el elemento si el ratón no está sobre él
          if (!isMouseOver) {
            conteElementos.style.display = 'none';
          }
        }, 200);
      }
    break;
  }
} 
function cambiarColor(elemento, encendido) {
  const segundoListado = document.getElementById('segundaLista')
  switch(elemento.className){
    case 'conte-listado':
      if(screenWidth < 500){
        if (encendido) {
          elemento.style.backgroundColor = 'rgb(0,255,0)'
          elemento.style.color = 'rgb(0,0,77)';
          elemento.style.fontSize = '16px'
          elemento.style.fontWeight = 'bold';       
        } else {
          elemento.style.backgroundColor = '';
          elemento.style.color = 'rgb(255, 255, 177)';
          elemento.style.fontSize = '16px'
          elemento.style.fontWeight = 'normal'
        }
        if(encendido && elemento.id === 'ultimoElemento'){
          segundoListado.style.display = 'block'
          var lineas = document.getElementsByClassName('listado');
          for(var i = 0; i < lineas.length; i ++){
            lineas[i].style.fontWeight = 'normal';
            lineas[i].style.fontSize = '14px'
          }
        }
      }else {
        if (encendido) {
          elemento.style.backgroundColor = 'rgb(0,255,0)'
          elemento.style.color = 'rgb(0,0,77)'
          elemento.style.fontSize = '19px'
          elemento.style.fontWeight = 'bold'
        } else {
          elemento.style.backgroundColor = ''
          elemento.style.color = 'rgb(255, 255, 177)'
          elemento.style.fontSize = ''
          elemento.style.fontWeight = 'normal'
        }
        if(encendido && elemento.id === 'ultimoElemento'){
          segundoListado.style.display = 'block'
          var lineas = document.getElementsByClassName('listado')  
          for(var i = 0; i < lineas.length; i ++){
            lineas[i].style.fontWeight = 'normal'
            lineas[i].style.fontSize = '16px'
          }
        }
      }  
    break;
    case 'listado':
      if (encendido) {
        elemento.style.backgroundColor = 'rgb(0,255,0)'
        elemento.style.color = 'rgb(0,0,77)';
        elemento.style.fontSize = '16px'
        elemento.style.fontWeight = 'bold';             
      } else {
        elemento.style.backgroundColor = '';
        elemento.style.color = 'rgb(255, 255, 177)';
        elemento.style.fontSize = '19px'
        elemento.style.fontWeight = 'normal'
      }     
    break;
  }
}
let barraI = document.getElementById('iniciador_1')
let barraII = document.getElementById('iniciador_2')
let barraIII = document.getElementById('iniciador_3')
let barraIV = document.getElementById('iniciador_4')
let barraV = document.getElementById('iniciador_5')
let barraVI = document.getElementById('iniciador_6')
let barraVII = document.getElementById('iniciador_7')
let barraVIII = document.getElementById('iniciador_8')
let barraIX = document.getElementById('iniciador_9')
let barraX = document.getElementById('iniciador_10')
let barra = document.getElementById('iniciador_11')
let barraXI = document.getElementById('animatedDiv')
let barraXII = document.getElementById('iniciador_11')
let pantallaI = document.getElementById('pantalla');
let pantallaII = document.getElementById('pantalla_II')
let pantallaIII = document.getElementById('pantalla_III')
let pantallaIV = document.getElementById('pantalla_IV')
let pantallaV = document.getElementById('pantalla_V')
let pantallaVI = document.getElementById('pantalla_VI')
let paternStreet = document.getElementById('equalizer')
let paternLittles = document.getElementById('padre')
let imgWallStreet = document.getElementById('cortina')
let imgWallStreetI = document.getElementById('cortina_II')  
let parentElements = document.getElementById('nicho_spans');
let wallSt = document.getElementById('wall_street')
let wallStI = document.getElementById('wall_street_II')
let secondMid = document.getElementById('second_half')
let firstMid = document.getElementById('first_half')
let alturaBarras = 77 
let topBarra = 320
let topBarraI = 300
let topBarraII = 270
let topBarraIII = 330
let topBarraIV = 290 
let heightBarra = 0
let counter = 0
let contador = 0
let contadorII = 0
let contadorIII = 0
let stopFunction = false
let stopWidth = true
const INTERVALOS = {
  intervaloI: null,
  intervaloII: null,
  intervaloIII: null,
  intervaloIV: null,
  intervaloV: null,
  intervaloXI: null,
  intervaloXII: null,
  intervaloXIII: null,
  intervaloXIV: null,
  intervaloXV: null,
  intervaloXXI: null,
  intervaloXXVI: null,
  intervaloXXVII: null,
  intervaloXXVIII: null,
  intervaloXXIX: null,
  intervaloXXX: null,
  intervaloXXXI: null,
  intervaloXXXII: null,
  intervaloXXXIII: null,
  intervaloXXXIV: null,
  intervaloXXXV: null,
  intervaloXXXVI: null,
  intervaloXXXVII: null,
  intervaloXXXVIII: null,
  intervaloXXXIX: null,
  intervaloXL: null,
  intervaloXLI: null,  //column_1 .lineas
  intervaloXLII: null,// column_3 .lineas
  intervaloXLIII: null, // column_1 .lineas
  intervaloXLIV: null,// column_1 .lineas
  intervaloXLV: null, //column_2 .column_spans
  intervaloXLVI: null,  // numeros equalizaer
};
const INTERVALOSHORIZONTALES = {
  intervaloXVI: null,
  intervaloXVII: null,
  intervaloXVIII: null,
  intervaloXIX: null,
  intervaloXX: null,
  intervaloXLVII: null, // iniciador_11
  intervaloXXII: null,
  intervaloXXIII: null,
  intervaloXXIV: null,
  intervaloXXV: null,
  intervaloXLVIII: null,
}
function barraInteligente() {
  var elementosExcluidos = ['first_half','buscador','conteneMantaut','conti-boton','container01','links-inicialesI','links-iniciales']  
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }

  const elementos = document.querySelectorAll('nicho_spans .estilos'); 
  elementos.forEach(elemento => {
    elemento.removeAttribute('style');
  });

  removeInlineStyles(parentElements);   
  removeInlineStyles(imgWallStreet);
  removeInlineStyles(imgWallStreetI); 
  removeInlineStyles(firstMid)        
  removeInlineStyles(secondMid);
  removeInlineStyles(wallStI);
  removeInlineStyles(paternLittles);
  removeInlineStyles(paternStreet);
  clearAllIntervals(firstMid)  

  stopWidth = false
  resetearBarras()
  incrementoHeightXI()
  incrementoHeightXII()
  incrementoHeightXIII()
  incrementoHeightXIV()
  incrementoHeightXV()
  /* incrementoHeightXVI() */
}
function removeInlineStyles(element) {
  element.removeAttribute('style');
  const children = element.querySelectorAll('*');
  children.forEach(child => {
    child.removeAttribute('style');
  });
}
function incrementoHeightXI() {
  INTERVALOS.intervaloXXVI = setInterval(() => {  
    const animatedDiv = document.getElementById('animatedDiv');
    let currentTop = parseInt(window.getComputedStyle(animatedDiv).top);
    let currentHeight = parseInt(window.getComputedStyle(animatedDiv).height);    
    animatedDiv.style.top = (currentTop - 1) + 'px';
    animatedDiv.style.height = (currentHeight + 1) + 'px';
    if (currentTop <= 50) {
      clearInterval(INTERVALOS.intervaloXXVI);
      reduccionHeightXI()
      if(stopWidth === false){
        incrementoWidth()
        stopWidth = true; 
      }
    }
  }, 1);
}
function reduccionHeightXI() {
  INTERVALOS.intervaloXXXVII = setInterval(() => {  
    const animatedDiv = document.getElementById('animatedDiv');
    let currentTop = parseInt(window.getComputedStyle(animatedDiv).top);
    let currentHeight = parseInt(window.getComputedStyle(animatedDiv).height);    
    animatedDiv.style.top = (currentTop + 1) + 'px';
    animatedDiv.style.height = (currentHeight - 1) + 'px';
    if (currentTop >= 215) {
      clearInterval(INTERVALOS.intervaloXXXVII);
      incrementoHeightXI()
    }
  }, 1);
}
function incrementoHeightXII() {
  INTERVALOS.intervaloXXVIII = setInterval(() => {
    const animatedDiv = document.getElementById('animatedDivI');
    let currentTop = parseInt(window.getComputedStyle(animatedDiv).top);
    let currentHeight = parseInt(window.getComputedStyle(animatedDiv).height);    
    // Decrementar la posición top y aumentar height
    animatedDiv.style.top = (currentTop - 1) + 'px';
    animatedDiv.style.height = (currentHeight + 1) + 'px';
    if(currentTop <= 50){
      clearInterval(INTERVALOS.intervaloXXVIII);
      reduccionHeightXII()
    }
  }, 11);
} 
function reduccionHeightXII() {
  INTERVALOS.intervaloXXVIII = setInterval(() => {  
    const animatedDiv = document.getElementById('animatedDivI');
    let currentTop = parseInt(window.getComputedStyle(animatedDiv).top);
    let currentHeight = parseInt(window.getComputedStyle(animatedDiv).height);    
    animatedDiv.style.top = (currentTop + 1) + 'px';
    animatedDiv.style.height = (currentHeight - 1) + 'px';
    if (currentTop >= 215) {
      clearInterval(INTERVALOS.intervaloXXVIII);
      incrementoHeightXII()
    }
  }, 11);
}
function incrementoHeightXIII() {
  INTERVALOS.intervaloXXIX = setInterval(() => {
    const animatedDiv = document.getElementById('animatedDivII');
    let currentTop = parseInt(window.getComputedStyle(animatedDiv).top);
    let currentHeight = parseInt(window.getComputedStyle(animatedDiv).height);    
    // Decrementar la posición top y aumentar height
    animatedDiv.style.top = (currentTop - 1) + 'px';
    animatedDiv.style.height = (currentHeight + 1) + 'px';
    if(currentTop <= 50){
      clearInterval(INTERVALOS.intervaloXXIX);
      reduccionHeightXIII()
    }
  }, 22);
}
function reduccionHeightXIII() {
  INTERVALOS.intervaloXXXVIII = setInterval(() => {  
    const animatedDiv = document.getElementById('animatedDivII');
    let currentTop = parseInt(window.getComputedStyle(animatedDiv).top);
    let currentHeight = parseInt(window.getComputedStyle(animatedDiv).height);    
    animatedDiv.style.top = (currentTop + 1) + 'px';
    animatedDiv.style.height = (currentHeight - 1) + 'px';
    if (currentTop >= 215) {
      clearInterval(INTERVALOS.intervaloXXXVIII);
      incrementoHeightXIII()
    }
  }, 22);
}
function incrementoHeightXIV() {
  INTERVALOS.intervaloXXX = setInterval(() => {
    const animatedDiv = document.getElementById('animatedDivIII');
    let currentTop = parseInt(window.getComputedStyle(animatedDiv).top);
    let currentHeight = parseInt(window.getComputedStyle(animatedDiv).height);    
    // Decrementar la posición top y aumentar height
    animatedDiv.style.top = (currentTop - 1) + 'px';
    animatedDiv.style.height = (currentHeight + 1) + 'px';
    if(currentTop <= 50){
      clearInterval(INTERVALOS.intervaloXXX);
      reduccionHeightXIV()
    }
  }, 33);
}
function reduccionHeightXIV() {
  INTERVALOS.intervaloXXXIX = setInterval(() => {  
    const animatedDiv = document.getElementById('animatedDivIII');
    let currentTop = parseInt(window.getComputedStyle(animatedDiv).top);
    let currentHeight = parseInt(window.getComputedStyle(animatedDiv).height);    
    animatedDiv.style.top = (currentTop + 1) + 'px';
    animatedDiv.style.height = (currentHeight - 1) + 'px';
    if (currentTop >= 215) {
      clearInterval(INTERVALOS.intervaloXXXIX);
      incrementoHeightXIV()
    }
  }, 33);
}
function incrementoHeightXV() {
  INTERVALOS.intervaloXXXI = setInterval(() => {
    const animatedDiv = document.getElementById('animatedDivIV');
    let currentTop = parseInt(window.getComputedStyle(animatedDiv).top);
    let currentHeight = parseInt(window.getComputedStyle(animatedDiv).height);    
    // Decrementar la posición top y aumentar height
    animatedDiv.style.top = (currentTop - 1) + 'px';
    animatedDiv.style.height = (currentHeight + 1) + 'px';
    if(currentTop <= 50){
      clearInterval(INTERVALOS.intervaloXXXI);
      reduccionHeightXV()
    }
  }, 17);
}
function reduccionHeightXV() {
  INTERVALOS.intervaloXL = setInterval(() => {  
    const animatedDiv = document.getElementById('animatedDivIV');
    let currentTop = parseInt(window.getComputedStyle(animatedDiv).top);
    let currentHeight = parseInt(window.getComputedStyle(animatedDiv).height);    
    animatedDiv.style.top = (currentTop + 1) + 'px';
    animatedDiv.style.height = (currentHeight - 1) + 'px';
    if (currentTop >= 215) {
      clearInterval(INTERVALOS.intervaloXL);
      incrementoHeightXV()
    }
  }, 17);
}
function incrementoWidth() {
  imgWallStreetI.style.display = 'flex'
  stopWidth === true
  INTERVALOS.intervaloXXXII = setInterval(() => {
    let currentWidth = parseFloat(window.getComputedStyle(imgWallStreetI).width) / parseFloat(window.getComputedStyle(imgWallStreetI.parentElement).width) * 100;
    imgWallStreetI.style.width = (currentWidth + 1) + '%';

     if(currentWidth >= 99){
      clearInterval(INTERVALOS.intervaloXXXII);            
    }
  }, 1);
}
function incrementoHeight(barra, pantalla, intervaloVariable, intervaloTiempo) {
  parentElements.style.display = 'grid' //NICHO SPANS
  INTERVALOS[intervaloVariable] = setInterval(() => {
    let currentValue = parseInt(pantalla.textContent);
    let newValue = currentValue + 5773;
    pantalla.textContent = newValue;
    let alturaAct = parseInt(barra.style.height) || 0;
    barra.style.height = (alturaAct + 5) + 'px';
    let alturaAcumuladaBarra = alturaAct + 1;
    let alturaMaxima = 90;
    let iniciador = 100
    contador++

    if (parseInt (alturaAcumuladaBarra) >= alturaMaxima) {
      clearInterval(INTERVALOS[intervaloVariable]);
      if(barra.id === 'iniciador_1'){
        reduccionHeight(barraI, pantallaI,'intervaloI', 30);
        /* pantallaI.style.visibility = 'visible' */ 
      }
      if(barra.id === 'iniciador_2'){
        reduccionHeight(barraII, pantallaII,'intervaloII',30);
      }
      if(barra.id === 'iniciador_3'){
        reduccionHeight(barraIII, pantallaIII,'intervaloIII',30); 
      }
      if(barra.id === 'iniciador_4'){
        reduccionHeight(barraIV, pantallaIV,'intervaloIV',30); 
      }
      if(barra.id === 'iniciador_5'){
        reduccionHeight(barraV, pantallaV,'intervaloV',30);
    }
    } 
    /* if (contador >= iniciador) {
      incrementoHeightVI(); // BARRAS HORIZONTALES (1)
    } */
  }, intervaloTiempo);
}
function reduccionHeight(elementoBarra, elementoPantalla, intervaloVariable, intervaloTiempo) {
  INTERVALOS[intervaloVariable] = setInterval(() => {
    let currentValue = parseInt(elementoPantalla.textContent);
    let newValue = currentValue + 7328;
    elementoPantalla.textContent = newValue;
    let altura = parseInt(elementoBarra.style.height) || 0;
    elementoBarra.style.height = (altura - 4) + 'px';
    let alturaAcumuladaBarra = altura - 4;
    elementoPantalla.style.display = 'flex';
    if (parseInt(alturaAcumuladaBarra) <= 0) {
      clearInterval(INTERVALOS[intervaloVariable]);
        if(elementoBarra.id === 'iniciador_1'){
          incrementoHeight(barraI, pantallaI,'intervaloI', 25);
        }
        if(elementoBarra.id === 'iniciador_2'){
          incrementoHeight(barraII, pantallaII,'intervaloII', 25);
        }
        if(elementoBarra.id === 'iniciador_3'){
          incrementoHeight(barraIII, pantallaIII,'intervaloIII', 25);
        }
        if(elementoBarra.id === 'iniciador_4'){
          incrementoHeight(barraIV, pantallaIV,'intervaloIV', 25);
        }
        if(elementoBarra.id === 'iniciador_5'){
          incrementoHeight(barraV, pantallaV,'intervaloV', 25);
        }
    }
  }, intervaloTiempo);
}
let isAnimatingVI = false; 
let isAnimatingVII = false;
let isAnimatingVIII = false;  
let isAnimatingIX = false;   
let isAnimatingX = false;
let isAnimatingXI = false;
function incrementoHeightVII() {
  if (isAnimatingVII) return;
  isAnimatingVII = true;
  contadorII = 0;
  let r = 0;
  let g = 255;
  let b = 255;
  barraVII.style.display = 'flex';
  INTERVALOSHORIZONTALES.intervaloXVII = setInterval(() => {
      let alturaAct = parseFloat(barraVII.style.width) || 0;
      barraVII.style.width = (alturaAct + 1) + '%';
      let alturaAcumuladaBarraI = alturaAct + 1;
      if (alturaAcumuladaBarraI <= alturaBarras) {
          let progreso = alturaAcumuladaBarraI / alturaBarras;
          g = alturaAcumuladaBarraI + 1.4;
      }
      barraVII.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      /* if (alturaAcumuladaBarraI >= 20 && !isAnimatingVIII) {
        isAnimatingVIII = false
        incrementoHeightVIII();
      } */
      if (alturaAcumuladaBarraI >= alturaBarras) {
          clearInterval(INTERVALOSHORIZONTALES.intervaloXVII);
          isAnimatingVII = false;
          reduccionHeightVII();
      }
  }, 6);
}
function reduccionHeightVII() {
  if (isAnimatingVII) return;
  isAnimatingVII = true;
  INTERVALOSHORIZONTALES.intervaloXXII = setInterval(() => {
    let altura = parseFloat(barraVII.style.width) || 0;
    barraVII.style.width = (altura - 1) + '%';
    let alturaAcumuladaBarraIII = altura - 1;
    if (parseInt(alturaAcumuladaBarraIII) <= 0) {             
      clearInterval(INTERVALOSHORIZONTALES.intervaloXXII);
      isAnimatingVII = false
      incrementoHeightVII();
    }
    if (alturaAcumuladaBarraIII <= 10 && !isAnimatingVIII) {             
      incrementoHeightVIII();
    }    
  }, 5); 
}
function incrementoHeightVIII() {  
  if (isAnimatingVIII) return;
  isAnimatingVIII = true;
  let r = 255; 
  let g = 0; 
  let b = 0; 
  INTERVALOSHORIZONTALES.intervaloXVIII = setInterval(() => {
    let alturaAct = parseFloat(barraVIII.style.width) || 0;
    barraVIII.style.width = (alturaAct + 1) + '%';
    let alturaAcumuladaBarraI = alturaAct + 1;
    if (alturaAcumuladaBarraI <= alturaBarras) {
      let progreso = alturaAcumuladaBarraI / alturaBarras;
      g = alturaAcumuladaBarraI + 1.4
    }
    barraVIII.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    barraVII.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    if (alturaAcumuladaBarraI >= 20 && !isAnimatingIX) {
      isAnimatingIX = false
      incrementoHeightIX();
    }
    if (alturaAcumuladaBarraI >=alturaBarras) {
      clearInterval(INTERVALOSHORIZONTALES.intervaloXVIII);
      isAnimatingVIII = false;
      reduccionHeightVIII();
    }
  }, 7);
}
function reduccionHeightVIII() {
  if (isAnimatingVIII) return;
  isAnimatingVIII = true;
  INTERVALOSHORIZONTALES.intervaloXXIII = setInterval(() => {
    let altura = parseFloat(barraVIII.style.width) || 0;
    barraVIII.style.width = (altura - 1) + '%';
    let alturaAcumuladaBarraIII = altura - 1;
    if (parseInt(alturaAcumuladaBarraIII) <= 0) {             
      clearInterval(INTERVALOSHORIZONTALES.intervaloXXIII);
      isAnimatingVIII = false
      incrementoHeightVIII();
    }    
  }, 5); 
}
function incrementoHeightIX() {
  if (isAnimatingIX) return;
  isAnimatingIX = true
  let r = 100; 
  let g = 50; 
  let b = 255; 
  INTERVALOSHORIZONTALES.intervaloXIX = setInterval(() => {
    let alturaAct = parseFloat(barraIX.style.width) || 0;
    barraIX.style.width = (alturaAct + 1) + '%';
    let alturaAcumuladaBarraI = alturaAct + 1;
    if (alturaAcumuladaBarraI <= alturaBarras) {
      let progreso = alturaAcumuladaBarraI / alturaBarras;
      b = alturaAcumuladaBarraI + 1.4 
    }
    barraVIII.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    barraIX.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    if (alturaAcumuladaBarraI >= 20 && !isAnimatingX) {
      isAnimatingX = false
      incrementoHeightX();
    }
   if (parseInt(alturaAcumuladaBarraI) >=alturaBarras) {
      clearInterval(INTERVALOSHORIZONTALES.intervaloXIX);
      isAnimatingIX = false
      reduccionHeightIX();
    }
  }, 8);
}
function reduccionHeightIX() {
  if (isAnimatingIX) return;
  isAnimatingIX = true
  INTERVALOSHORIZONTALES.intervaloXXIV = setInterval(() => {
    let altura = parseFloat(barraIX.style.width) || 0;
    barraIX.style.width = (altura - 1) + '%';
    let alturaAcumuladaBarraIII = altura - 1;
    if (parseInt(alturaAcumuladaBarraIII) <= 0) {             
      clearInterval(INTERVALOSHORIZONTALES.intervaloXXIV);
      isAnimatingIX = false;
      incrementoHeightIX();
    }    
  }, 5); 
}
function incrementoHeightX() {
  if (isAnimatingX) return;
  isAnimatingX = true;
  let r = 170;
  let g = 50; 
  let b = 255; 
  INTERVALOSHORIZONTALES.intervaloXX = setInterval(() => {
    let anchoAct = parseFloat(barraX.style.width) || 0;    
    barraX.style.width = (anchoAct + 1) + '%'; 
    let alturaAcumuladaBarraI = anchoAct + 1;    
      if (alturaAcumuladaBarraI <= alturaBarras) {
      let progreso = alturaAcumuladaBarraI / alturaBarras;
      b = alturaAcumuladaBarraI + 1.4 
      g = alturaAcumuladaBarraI + 1.4
    }         
    barraX.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    barraIX.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    if (alturaAcumuladaBarraI >= 20 /* && !isAnimatingXVI */) {
      /* isAnimatingXVI = false */
      /* incrementoHeightXVI(); */
    }
    if (parseInt(alturaAcumuladaBarraI) >=alturaBarras) {
      clearInterval(INTERVALOSHORIZONTALES.intervaloXX);
      isAnimatingX = false;
      reduccionHeightX();
    }
  }, 9);
}
function reduccionHeightX() {
  if (isAnimatingX) return;
  isAnimatingX = true;
  INTERVALOSHORIZONTALES.intervaloXXV = setInterval(() => {
    let altura = parseFloat(barraX.style.width) || 0;
    barraX.style.width = (altura - 1) + '%';
    let alturaAcumuladaBarraIII = altura - 1;
    if (parseInt(alturaAcumuladaBarraIII) <= 0) {             
      clearInterval(INTERVALOSHORIZONTALES.intervaloXXV);
      isAnimatingX = false
      incrementoHeightX()
    }    
  }, 5); 
}
function incrementoWidthI() { 
  INTERVALOS.intervaloXXXIII = setInterval(() => {
    imgWallStreet.style.display = 'flex'
    let currentHeight = parseInt(window.getComputedStyle(imgWallStreet).height);
    imgWallStreet.style.height = (currentHeight + 1) + 'px'
    if(parseInt(currentHeight) >= 103){
      clearInterval(INTERVALOS.intervaloXXXIII);
    }
  }, 9); 
}
function aumentarOverSize() {
  let overSize = document.getElementById('over_size');
  let overSide = document.getElementById('over_side');
  overSize.style.display = 'flex'
  overSide.style.display = 'flex'
  let actualHeight = parseInt(window.getComputedStyle(overSize).height);
  INTERVALOS.intervaloXXXIV = setInterval(() => {
    actualHeight += 10;
    overSize.style.height = actualHeight + 'px';
    overSide.style.width = actualHeight + 'px'
    console.log(actualHeight)
    console.log(window.innerHeight)
    if (actualHeight >= window.innerHeight) {
    clearInterval(INTERVALOS.intervaloXXXIV);
    resetStyles();
    console.log('Se han restablecido los estilos.');
    }
  },5);
}
function incrementarBlur() {
  let overSize = document.getElementById('wall_street_II');
  let overSizeI = document.getElementById('second_half');
  let overSizeII = document.getElementById('first_half');
  let overSizeIII = document.getElementById('cortina');
  let overSizeIV = document.getElementById('nicho_spans');
  let blurValue = 0;
  INTERVALOS.intervaloXXXV = setInterval(() => {
    blurValue += 1;
    overSize.style.filter = `blur(${blurValue}px)`; 
    overSizeI.style.filter = `blur(${blurValue}px)`;
    overSizeII.style.filter = `blur(${blurValue}px)`;
    overSizeIII.style.filter = `blur(${blurValue}px)`;
    overSizeIV.style.filter = `blur(${blurValue}px)`;
    if (blurValue >= 20) { // Ajusta este valor según sea necesario
      clearInterval(INTERVALOS.intervaloXXXV);
    }
  }, 100);
}
function eliminarBlur() {
  var elementsWithBlur = [
    document.getElementById('first_half'),
    document.getElementById('cortina'),
    document.getElementById('second_half'),
    document.getElementById('nicho_spans'),
    document.getElementById('wall_street_II')
  ];
  // Iteramos sobre los elementos y eliminamos el efecto blur
  elementsWithBlur.forEach(function(element) {
    if (element) {
      element.style.filter = 'none';
    }
  });
}
function resetStyles() {
  let elements = [
    document.getElementById('animatedDiv'),
    document.getElementById('first_half'),
    document.getElementById('cortina'),
    document.getElementById('second_half'),
    document.getElementById('nicho_spans'),
    document.getElementById('wall_street_II'),
    document.getElementById('over_size'),
    document.getElementById('over_side'),
  ];
  
  elements.forEach(el => {
    if (el) {
      el.style.height = '';
      el.style.width = '';
      el.style.display = '';
      el.style.visibility = '';
      el.style.filter = ''; 
      el.style.top = ''; 
      el.style.display = 'none'    
    }
  });
    imgWallStreetI.style.display = ''
    imgWallStreet.style.display = ''
  clearAllIntervals()
}
function stopLogic() {
  clearAllIntervals()
  stopFunction = true
}
function clearAllIntervals() {
    for (let key in INTERVALOS) {
      if (INTERVALOS[key]) {
        clearInterval(INTERVALOS[key]);
        INTERVALOS[key] = null;
      }
    }
}
function changeColorToGreen() {
  let index = 0;
  paternStreet.style.display = 'flex'
  clearInterval(INTERVALOS.intervaloXLI);  
  const lines = document.querySelectorAll('#column_1 .lineas');
  lines.forEach(line => {
  line.style.backgroundColor = '';
  });
  changeColorToGreenII();
  changeColorToNumbres();
  INTERVALOS.intervaloXLI = setInterval(() => {
    if (index < lines.length) {
      if (index < 8) {
        lines[index].style.backgroundColor = 'rgb(0, 255, 0)'; // Verde
      } else if (index < 11) {
        lines[index].style.backgroundColor = 'rgb(255, 235, 0)'; // Naranja
      } else if (index < 13) {
        lines[index].style.backgroundColor = 'rgb(255, 115, 0)'; // Naranja
      } else if(index < 14) {
        lines[index].style.backgroundColor = 'rgb(255, 0, 0)'; // Rojo
      }      
      index++;
    } else {
      clearInterval(INTERVALOS.intervaloXLI); 
      changeColorToTransparent();
    }
  }, 57);  
}
function changeColorToGreenII() {
  let index = 0;  
  const lines = document.querySelectorAll('#column_3 .lineas');
  clearInterval(INTERVALOS.intervaloXLII);
  INTERVALOS.intervaloXLII = setInterval(() => {
    if (index < lines.length) {
      if (index < 8) {
        lines[index].style.backgroundColor = 'rgb(0, 255, 0)'; // Verde
      } else if (index < 11) {
        lines[index].style.backgroundColor = 'rgb(255, 235, 0)'; // Naranja
      } else if (index < 13) {
        lines[index].style.backgroundColor = 'rgb(255, 115, 0)'; // Naranja
      } else if(index < 14) {
        lines[index].style.backgroundColor = 'rgb(255, 0, 0)'; // Rojo
      }      
      index++;
    } else {
      clearInterval(INTERVALOS.intervaloXLII); 
      changeColorToTransparentII()
    }
  }, 57);
}
function changeColorToNumbres() {
  let index = 0;  
  clearInterval(INTERVALOS.intervaloXLV);
  const numbers = document.querySelectorAll('#column_2 .column_spans')
  numbers.forEach(line => {
    line.style.backgroundColor = '';
  });
  INTERVALOS.intervaloXLV = setInterval(() => {
    if (index < numbers.length) {
      if (index < 8) {
        numbers[index].style.display = 'flex'
        numbers[index].style.color = 'rgb(0, 255, 0)'; // Verde
      } else if (index < 11) {
        numbers[index].style.display = 'flex'
        numbers[index].style.color = 'rgb(255,235, 0)'; // Naranja
      } else if (index < 13) {
        numbers[index].style.display = 'flex'
        numbers[index].style.color = 'rgb(255, 115, 0)'; // Rojo
      }else if (index < 14) {
        numbers[index].style.display = 'flex'
        numbers[index].style.color = 'rgb(255, 0, 0)'; // Rojo
      }
      index++;
    } else {
      clearInterval(INTERVALOS.intervaloXLV); 
      changeColorTransparent()
    }
  }, 57);
}
function changeColorToTransparent() {
  const lines = document.querySelectorAll('#column_1 .lineas');
  let index = lines.length - 1;  
  INTERVALOS.intervaloXLIII = setInterval(() => {
    if (index >= 0) {
      lines[index].style.backgroundColor = '';
      index--;
    } else {
      clearInterval(INTERVALOS.intervaloXLIII); 
      changeColorToGreen(); 
    }
  }, 50);
}
function changeColorToTransparentII() {
  const lines = document.querySelectorAll('#column_3 .lineas');
  let index = lines.length - 1;  
  INTERVALOS.intervaloXLIV = setInterval(() => {
    if (index >= 0) {
      lines[index].style.backgroundColor = '';
      index--;
    } else {
      clearInterval(INTERVALOS.intervaloXLIV); 
      changeColorToGreenII(); 
    }
  }, 50);
}
function changeColorTransparent() {
  const numbers = document.querySelectorAll('#column_2 .column_spans')
  let index = numbers.length - 1;  
  INTERVALOS.intervaloXLVI = setInterval(() => {
    if (index >= 0) {
      numbers[index].style.color = 'rgb(255,255,255)';
      /* numbers[index].style.display = 'none' */
      index--;
    } else {
      clearInterval(INTERVALOS.intervaloXLVI); 
      changeColorToNumbres()
    }
  }, 50);
}
const INTERVAL = {
  intervalo1: null,
  intervalo2: null,
}
const barras = document.querySelectorAll('.barras');
let timeoutHandles = [];
let trackerStarted = false; 
const screenHeight = window.innerHeight;
function controlHeight(index) {
  if (index >= 0 && index < barras.length) {
    changeHeight(barras[index], 7, screenHeight * 0.12, incrementaAlto);
  }
}
function changeHeight(barra, step, limit, onComplete) {
  if (barra.interval) {
    clearInterval(barra.interval);
  }
  barra.interval = setInterval(() => {
    let alturaActual = parseInt(barra.style.height) || 0;
    barra.style.height = (alturaActual + step) + '%';
    barra.style.transition = 'height 0.03s linear';

    if ((step > 0 && alturaActual >= limit) || (step < 0 && alturaActual <= 0)) {
      clearInterval(barra.interval);
      if (onComplete) {
        onComplete(barra);
      }
    }
  }, 27);
}
function incrementaAlto(barra) {
  changeHeight(barra, -7, 0, reduccionAlto);
}
function reduccionAlto(barra) {
  changeHeight(barra, 7, screenHeight * 0.12, incrementaAlto);
  /* if(screenWidth <= 420){
    changeHeight(barra, 7, screenHeight * 0.1, incrementaAlto);
  } */

}
function detenerAllInterval() {
  barras.forEach(barra => {
    if (barra.interval) {
      clearInterval(barra.interval);
    }
  });
}  
function resetStylesAndIntervals() {
  // Limpiar intervalos
  if (INTERVAL.intervalo1) {
      clearInterval(INTERVAL.intervalo1);
      INTERVAL.intervalo1 = null;
  }
  if (INTERVAL.intervalo2) {
      clearInterval(INTERVAL.intervalo2);
      INTERVAL.intervalo2 = null;
  }

  // Limpiar timeouts pendientes
  timeoutHandles.forEach(handle => clearTimeout(handle));
  timeoutHandles = []; // Vaciar la lista de identificadores de setTimeout

  // Resetear estilos de las barras
  barras.forEach(barra => {
      removeInlineStyles(barra);
      if (barra.interval) {
          clearInterval(barra.interval);
          barra.interval = null; // Asegurarse de que el intervalo se restablezca
      }
      barra.style.height = '0'; // Asegurarse de que la altura se restablezca
  });

  trackerStarted = false; // Reiniciar la bandera
}
function inicioTracker() {
  resetStylesAndIntervals();
  // Iniciar nuevos timeouts
  const delay = 122; // Retraso de 122ms entre cada llamada
  for (let i = 0; i < barras.length; i++) {
      let handle = setTimeout(() => {
          controlHeight(i);
      }, i * delay);
      timeoutHandles.push(handle); // Almacenar el identificador del setTimeout
  }
  trackerStarted = true; // Marcar que inicioTracker ha sido ejecutado
}
let counterI = 0;
const elementsB = document.querySelectorAll('#patern .irisado');
const originalColors = Array.from(elementsB).map(el => el.style.backgroundColor);
const elementsC = ['elem1', 'elem2', 'elem3', 'elem4', 'elem5', 'elem6', 'elem7', 'elem8', 'elem9', 'elem10', 'elem11', 'elem12', 'elem13', 'elem14', 'elem15', 'elem16', 'elem17', 'elem18', 'elem19', 'elem20', 'elem21', 'elem22', 'elem23', 'elem24'];
let index = 0
let lista = 0
let intervaloColors = null
let intervaloColorsI = null
function changeColors() {
  setTimeout(() => {
    intervaloColors = setInterval(() => {
      if (index < elementsC.length) {
        const element = document.getElementById(elementsC[index]);
        if (element) {
          element.style.backgroundColor = 'black';
        }
        index++;
      } else {
        clearInterval(intervaloColors);
        applyColors()
        index=0
      }
    }, 55);    
  }, 500);
}
function applyColors() {
  intervaloColorsI = setInterval(() => {
    if (lista < elementsC.length) {
      const element = document.getElementById(elementsC[lista]);
      if (element) {
        element.style.backgroundColor = ''; // Restablece al valor predeterminado del CSS
      }
      lista++;
    } else {
      clearInterval(intervaloColorsI);
      detenerCicodelia()
      changeColors()
      lista=0
    }
  }, 55);
}
function detenerCicodelia() {
  if (intervaloColors !== null) {
    clearInterval(intervaloColors);
    intervaloColors = null; // Resetea la variable para evitar problemas
  }
  if (intervaloColorsI !== null) {
    clearInterval(intervaloColorsI);
    intervaloColorsI = null; // Resetea la variable para evitar problemas
  }
}
function showMetrics(){
  setTimeout(() => {
    firstMovement()
  }, 7);
  setTimeout(() => {
    secondMovement()
  }, 907);
}   
function firstMovement(){
  stopWidth = false
  var slider1 = document.getElementById('first_half')
  var estilosAplicados = window.getComputedStyle(slider1)
  for (var i = 0; i < estilosAplicados.length; i++) {
    var propiedad = estilosAplicados[i];
    slider1.style[propiedad] = ""; // Establecer el estilo en una cadena vacía
  }

  clearAllIntervals(firstMid) 
  removeInlineStyles(imgWallStreetI); 
  incrementoHeightXI()  
  incrementoHeightXII()
  incrementoHeightXIII()
  incrementoHeightXIV() 
  incrementoHeightXV()
}
function secondMovement(){
  var padre = document.getElementById('nicho_spans');    
  if (padre) {
    padre.style.display = 'none';
      var hijos = padre.children;
    for (var i = 0; i < hijos.length; i++) {
      hijos[i].style.display = 'none';
    }
  }
  var elementosExcluidos = ['def2','general','first_half','second_half','nicho_spans','buscador','conteneMantaut','conti-boton','container01','links-inicialesI','links-iniciales']  
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  clearInterval(INTERVALOS.intervaloI);
  clearInterval(INTERVALOS.intervaloII);
  clearInterval(INTERVALOS.intervaloIII);
  clearInterval(INTERVALOS.intervaloIV);
  clearInterval(INTERVALOS.intervaloV);
  clearInterval(INTERVALOS.intervaloXXXIII);
  removeInlineStyles(imgWallStreet); 

  function makeElementsVisibleSimultaneously(parentId1, parentId2) {
    let parentElement1 = document.getElementById(parentId1);
    let parentElement2 = document.getElementById(parentId2);

    parentElement1.style.display = 'grid';
    parentElement2.style.display = 'grid';

    let childElements1 = parentElement1.children;
    let childElements2 = parentElement2.children;

    let maxLength = Math.max(childElements1.length, childElements2.length);

    let intervaloNichos = null

    for (let i = 0; i < maxLength; i++) {
       intervaloNichos = setInterval(() => {
        if (i < childElements1.length) {
          childElements1[i].style.display = 'inline-block';
          childElements1[i].style.visibility = 'visible';
      }
      if (i < childElements2.length) {
          childElements2[i].style.display = 'inline-block';
          childElements2[i].style.visibility = 'visible';
      }        
      }, 100);
    }
  }

  // Hacer visibles los hijos de 'second_half' y 'nicho_spans' simultáneamente
  makeElementsVisibleSimultaneously('second_half', 'nicho_spans');

  incrementoHeight(barraI, pantallaI,'intervaloI',1);
  incrementoHeight(barraII, pantallaII,'intervaloII',15);
  incrementoHeight(barraIII, pantallaIII,'intervaloIII',25);
  incrementoHeight(barraIV, pantallaIV,'intervaloIV',35);
  incrementoHeight(barraV, pantallaV,'intervaloV',45)  
  incrementoWidthI()
}  
function thirdMovement(){
  var slider1 = document.getElementById('wall_street_II')
  var estilosAplicados = window.getComputedStyle(slider1)
  for (var i = 0; i < estilosAplicados.length; i++) {
    var propiedad = estilosAplicados[i];
    slider1.style[propiedad] = ""; // Establecer el estilo en una cadena vacía
  }

  isAnimatingVII = false;
  document.getElementById('iniciador_7').style.width = '1px'
  for (let key in INTERVALOSHORIZONTALES) {
    if (INTERVALOSHORIZONTALES[key]) {
      clearInterval(INTERVALOSHORIZONTALES[key]);
      INTERVALOSHORIZONTALES[key] = null;
    }
  }    
  contadorII = 0;
  isAnimatingVII = false;
  isAnimatingVIII = false;
  isAnimatingIX = false;
  isAnimatingX = false;
  /* isAnimatingXVI = false; */

  incrementoHeightVII()
}
function fourthMovement(){
var elementosExcluidos = ['def2','general','first_half','second_half','nicho_spans','wall_street_II','equalizer','buscador','cortina','conteneMantaut','conti-boton','container01','links-inicialesI','links-iniciales'];
for (var i = 0; i < allContenedores.length; i++) { 
  var elemento = document.getElementById(allContenedores[i])  
  if (elemento) {
    elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
  }
}
var padre = document.getElementById('equalizer');    
if (padre) {
  padre.style = ''
    var hijos = padre.children;
  for (var i = 0; i < hijos.length; i++) {
    hijos[i].style = ''
  }
}
changeColorToGreen()
}
function fifthMovement(){
  var elementosExcluidos = ['def2','general','first_half','second_half','nicho_spans','wall_street_II','equalizer','padre','buscador','cortina','conteneMantaut','conti-boton','container01','links-inicialesI','links-iniciales'];
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }
  var slider1 = document.getElementById('padre')
  var estilosAplicados = window.getComputedStyle(slider1)
  for (var i = 0; i < estilosAplicados.length; i++) {
    var propiedad = estilosAplicados[i];
    slider1.style[propiedad] = ""; // Establecer el estilo en una cadena vacía
  }
  inicioTracker()
}
function sixthMovement(){
  var elementosExcluidos = ['def2','general','first_half','second_half','nicho_spans','wall_street_II','equalizer','padre','patern','buscador','cortina','conteneMantaut','conti-boton','container01','links-inicialesI','links-iniciales'];
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  }

  var padre = document.getElementById('patern');    
  if (padre) {
    padre.style = ''
      var hijos = padre.children;
    for (var i = 0; i < hijos.length; i++) {
      hijos[i].style = ''
    }
  }
  document.getElementById('patern').style.display = 'grid'
  changeColors()
}
let pos = 0;
let step = 3;
const speed = 1;
const intervals = {
  derecha: null,
  baja: null,
  izquierda: null,
  arriba: null
};
function stopAllIntervals() {
  for (let key in intervals) {
    if (intervals[key] !== null) {
      clearInterval(intervals[key]);
      intervals[key] = null;
    }
  }
}
function moveElement(element, parent) {
  stopAllIntervals();
  let positionParent = parent.clientWidth - element.clientWidth;
  intervals.derecha = setInterval(() => {
      pos += step;
      element.style.left = pos + 'px';
      if (pos >= parent.clientWidth - element.clientWidth) {
          clearInterval(intervals.derecha);
          pos = 0;

          intervals.baja = setInterval(() => {
              pos += step;
              element.style.top = pos + 'px';
              if (pos >= parent.clientHeight - element.clientHeight) {
                  clearInterval(intervals.baja);
                  pos = 0;

                  intervals.izquierda = setInterval(() => {
                      positionParent -= step * 2;
                      element.style.left = positionParent + 'px';
                      if (positionParent <= 0) {
                          clearInterval(intervals.izquierda);
                          positionParent = parent.clientHeight - element.clientHeight;
                          pos = parent.clientHeight - element.clientHeight;

                          intervals.arriba = setInterval(() => {
                              pos -= step;
                              element.style.top = pos + 'px';
                              if (pos <= 0) {
                                  clearInterval(intervals.arriba);
                                  pos = 0;
                                  moveElement(element, parent); // Llama de nuevo a la función para crear un bucle
                              }
                          }, speed * 2);
                      }
                  }, speed * 2);
              }
          }, speed * 2);
      }
  }, speed * 2);
}
document.getElementById('butt-sitio').addEventListener('click', () => {
  var elementosExcluidos = ['buscador','container01','sitema-humedad','links-inicialesI','links-iniciales']
  for (var i = 0; i < allContenedores.length; i++) { 
    var elemento = document.getElementById(allContenedores[i])  
    if (elemento) {
      elemento.style.display = elementosExcluidos.includes(allContenedores[i]) ? 'flex' : 'none'
    }
  } 
  document.getElementById('butt-sitio').style.display='none'
  abrirSeccionContinua()
})




