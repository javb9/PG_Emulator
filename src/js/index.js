let sidebar = document.getElementById("sidebar");
let openSlide = document.getElementById("openSlide");
let contenedor = document.getElementById("contenedor");
let closeSidebar = document.getElementById("closeSidebar");

let btnContenido=document.getElementById('btnContenido');
let btnCalcular=document.getElementById('btnCalcular');
let btnGuia=document.getElementById('btnGuia');

let videoUnidad1=document.getElementById('videoUnidad1');
let videoUnidad2=document.getElementById('videoUnidad2');
let videoUnidad1V2=document.getElementById('videoUnidad1V2');
let videoLDSM=document.getElementById('videoLDSM');
let videoDosRayos=document.getElementById('videoDosRayos');
let videoWalfisch=document.getElementById('videoWalfisch');
let videoFriis=document.getElementById('videoFriis');
let videoTETRA=document.getElementById('videoTETRA');
let videoDECT=document.getElementById('videoDECT');
let videoRadioMensa=document.getElementById('videoRadioMensa');

let btnEmpirico=document.getElementById('btnEmpirico');
let btnSemiEmpirico=document.getElementById('btnSemiEmpirico');
let btnCaracteristicasMPE=document.getElementById('btnCaracteristicasMPE');
let btnModelsRepreMPE=document.getElementById('btnModelsRepreMPE');
let btnEmpir=document.getElementById('btnEmpir');
let btnSemiEmpir=document.getElementById('btnSemiEmpir');
let btnDeterm=document.getElementById('btnDeterm');
let btnEstadis=document.getElementById('btnEstadis');
let btnIndoor=document.getElementById('btnIndoor');
let btnOutdoor=document.getElementById('btnOutdoor');
let btnDosRayos=document.getElementById('btnDosRayos');
let btnFriss=document.getElementById('btnFriis');
let btnWalfisch=document.getElementById('btnWalfisch');
let btnPmr=document.getElementById('btnPmr');
let btnWifi=document.getElementById('btnWifi');
let btnWimax=document.getElementById('btnWimax');
let btnLds=document.getElementById('btnLds');
let btnTetra = document.getElementById('btnTetra');
let btnDectec=document.getElementById('btnDectec');
let btnRadioMensajeria=document.getElementById('btnRadioMensajeria'); 
let divContentEmpirico=document.getElementById('divContentEmpirico');
// let divContentSemiEmpirico=document.getElementById('divContentSemiEmpirico');
let divCaracteristicasMPE=document.getElementById('divCaracteristicasMPE');
let divModelsRepreMPE =document.getElementById('divModelsRepreMPE');
let divEmpir=document.getElementById('divEmpir');
let divSemiEmpir=document.getElementById('divSemiEmpir');
let divDeterm=document.getElementById('divDeterm');
let divEstadis=document.getElementById('divEstadis');
let divIndoor=document.getElementById('divIndoor');
let divOutdoor=document.getElementById('divOutdoor');
let divDosRayos=document.getElementById('divDosRayos');
let divFriis=document.getElementById('divFriis');
let divWalfisch=document.getElementById('divWalfisch');
let divPmr=document.getElementById('divPmr');
let divWifi=document.getElementById('divWifi');
let divWiMax=document.getElementById('divWiMax');
let divLds=document.getElementById('divLds');
let divTetra=document.getElementById('divTetra');
let divDectec=document.getElementById('divDectec');
let divRadioMensaje=document.getElementById('divRadioMensaje');
let titleModalUnidadII=document.getElementById('titleModalUnidadII');
let iconContenido = document.getElementById('icon-Contenido');
let listContent =document.getElementById('listContent');
let divUnit1 = document.getElementById('divUnit1');
let btnUnit1 =document.getElementById('btnUnit1');
let divUnit2 = document.getElementById('divUnit2');
let btnUnit2 =document.getElementById('btnUnit2');

openSlide.addEventListener("click", function () {
  sidebar.classList.add("active");
  contenedor.style.marginLeft = "0";
  contenedor.style.width = "75%";
  openSlide.classList.add("d-none");
});

closeSidebar.addEventListener("click", function () {
  sidebar.classList.remove("active");
  contenedor.style.marginLeft = "-25%";
  contenedor.style.width = "100%";
  openSlide.classList.remove("d-none");
});

btnContenido.addEventListener('click', function(){
  if($(iconContenido).hasClass('fas fa-sort-up')){
    $(iconContenido).removeClass('fas fa-sort-up');
    $(iconContenido).addClass('fas fa-sort-down');
  }else{
    $(iconContenido).removeClass('fas fa-sort-down');
    $(iconContenido).addClass('fas fa-sort-up');
  }
});

btnUnit1.addEventListener('click', function(){
  limpiarVista();
  ocultarElemento(divUnit1, false);
});

btnUnit2.addEventListener('click', function(){
  limpiarVista();
  ocultarElemento(divUnit2, false);
});

btnEmpirico.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="Modelo empirico"
  ocultarElemento(divContentEmpirico, false);
});

// btnSemiEmpirico.addEventListener('click', function(){
//   limpiarModalEmpSemp();
//   titleModalUnidadII.innerText="Modelo semi-empirico";
//   ocultarElemento(divContentSemiEmpirico, false);
// });

btnCaracteristicasMPE.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="Caracteristicas";
  ocultarElemento(divCaracteristicasMPE, false);
});

btnModelsRepreMPE.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="Modelos representativos";
  ocultarElemento(divModelsRepreMPE, false);
});

btnWifi.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="Wifi familia IEEE";
  ocultarElemento(divWifi, false);
});

btnEmpir.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="EMPIRICO";
  ocultarElemento(divEmpir, false);
});

btnSemiEmpir.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="SEMI EMPIRICO";
  ocultarElemento(divSemiEmpir, false);
});

btnDeterm.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="DETERMINISTAS";
  ocultarElemento(divDeterm, false);
});

btnEstadis.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="ESTADISTICO";
  ocultarElemento(divEstadis, false);
});

btnIndoor.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="Modelo Indoor - Interiores:";
  ocultarElemento(divIndoor, false);
});

btnOutdoor.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="Modelo Indoor - Interiores:";
  ocultarElemento(divOutdoor, false);
});

btnDosRayos.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="Modelos Dos Rayos";
  ocultarElemento(divDosRayos, false);
});

btnFriss.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="Modelos Dos Rayos";
  ocultarElemento(divFriis, false);
});

btnWalfisch.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="Modelos Dos Rayos";
  ocultarElemento(divWalfisch, false);
});

btnPmr.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="PMR";
  ocultarElemento(divPmr, false);
});

btnWimax.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="WiMax";
  ocultarElemento(divWiMax, false);
});
btnLds.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="LDSM";
  ocultarElemento(divLds, false);
});

btnTetra.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="TETRA (Terrestrial Trunked Radio)";
  ocultarElemento(divTetra, false);
});

btnDectec.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="DECTEC";
  ocultarElemento(divDectec, false);
});

btnRadioMensajeria.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="Radio mensajeria";
  ocultarElemento(divRadioMensaje, false);
});

function limpiarModalEmpSemp(){
  ocultarElemento(divContentEmpirico, true);
  // ocultarElemento(divContentSemiEmpirico, true);
  ocultarElemento(divCaracteristicasMPE, true);
  ocultarElemento(divModelsRepreMPE, true);
  ocultarElemento(divEmpir, true);
  ocultarElemento(divSemiEmpir, true);
  ocultarElemento(divDeterm, true);
  ocultarElemento(divEstadis, true);
  ocultarElemento(divIndoor, true);
  ocultarElemento(divOutdoor, true);
  ocultarElemento(divDosRayos, true);
  ocultarElemento(divFriis, true);
  ocultarElemento(divPmr, true);
  ocultarElemento(divWifi, true);
  ocultarElemento(divWiMax, true);
  ocultarElemento(divLds, true);
  ocultarElemento(divTetra, true);
  ocultarElemento(divDectec, true);
  ocultarElemento(divRadioMensaje, true);
}

function limpiarVista(){
  videoUnidad1.pause();
  videoUnidad2.pause();
  videoUnidad1V2.pause();
  ocultarElemento(divUnit1, true);
  ocultarElemento(divUnit2, true);
}

function ocultarElemento(elemento, validar){
  if(validar){
    if(!$(elemento).hasClass('d-none')){
      $(elemento).addClass('d-none');
    }
  }else{
    if($(elemento).hasClass('d-none')){
      $(elemento).removeClass('d-none');
    }
  }
}

function cerrarModal(){
  videoLDSM.pause();
  videoDosRayos.pause();
  videoFriss.pause();
  videoWalfisch.pause();
  videoTETRA.pause();
  videoDECT.pause();
  videoRadioMensa.pause();

}