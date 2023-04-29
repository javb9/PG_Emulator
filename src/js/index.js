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
let videoAMPS=document.getElementById('videoAMPS');
let video5G=document.getElementById('video5G');
let videoHistoria=document.getElementById('videoHistoria');
let videoPARAMETROS=document.getElementById('videoPARAMETROS');
let videoECUACIONES=document.getElementById('videoECUACIONES');

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
let btnRTGC=document.getElementById('btnRTGC'); 
let btnAMPS=document.getElementById('btnAMPS'); 
let btnCDMA=document.getElementById('btnCDMA'); 
let btnTDMA=document.getElementById('btnTDMA');
let btnCDPD=document.getElementById('btnCDPD'); 
let btnGSM=document.getElementById('btnGSM'); 
let btnGPRS=document.getElementById('btnGPRS'); 
let btnPCS=document.getElementById('btnPCS'); 
let btn4G=document.getElementById('btn4G'); 
let btn5G=document.getElementById('btn5G');
let btnGEO=document.getElementById('btnGEO');
let btnMEO=document.getElementById('btnMEO'); 
let btnLEO=document.getElementById('btnLEO'); 
let btnTERRENA=document.getElementById('btnTERRENA'); 
let btnSUBIDA=document.getElementById('btnSUBIDA'); 
let btnBAJADA=document.getElementById('btnBAJADA'); 
let btnCRUZADO=document.getElementById('btnCRUZADO'); 
let btnTRANSPONDEDOR=document.getElementById('btnTRANSPONDEDOR'); 
let btnPARAMETROS=document.getElementById('btnPARAMETROS'); 
let btnECUACIONES=document.getElementById('btnECUACIONES'); 
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
let divRTGC=document.getElementById('divRTGC');
let divAMPS=document.getElementById('divAMPS');
let divCDMA=document.getElementById('divCDMA');
let divTDMA=document.getElementById('divTDMA');
let divCDPD=document.getElementById('divCDPD');
let divGSM=document.getElementById('divGSM');
let divGPRS=document.getElementById('divGPRS');
let divPCS=document.getElementById('divPCS');
let div4G=document.getElementById('div4G');
let div5G=document.getElementById('div5G');
let divGEO=document.getElementById('divGEO');
let divMEO=document.getElementById('divMEO');
let divLEO=document.getElementById('divLEO');
let divTERRENA=document.getElementById('divTERRENA');
let divSUBIDA=document.getElementById('divSUBIDA');
let divBAJADA=document.getElementById('divBAJADA');
let divCRUZADO=document.getElementById('divCRUZADO');
let divTRANSPONDEDOR=document.getElementById('divTRANSPONDEDOR');
let divPARAMETROS=document.getElementById('divPARAMETROS');
let divECUACIONES=document.getElementById('divECUACIONES');
let titleModalUnidadII=document.getElementById('titleModalUnidadII');
let iconContenido = document.getElementById('icon-Contenido');
let listContent =document.getElementById('listContent');
let divUnit1 = document.getElementById('divUnit1');
let btnUnit1 =document.getElementById('btnUnit1');
let divUnit2 = document.getElementById('divUnit2');
let btnUnit2 =document.getElementById('btnUnit2');
let divUnit3 = document.getElementById('divUnit3');
let divUnit4 = document.getElementById('divUnit4');
let btnUnit3 =document.getElementById('btnUnit3');
let btnUnit4 =document.getElementById('btnUnit4');

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

btnUnit3.addEventListener('click', function(){
  limpiarVista();
  ocultarElemento(divUnit3, false);
});

btnUnit4.addEventListener('click', function(){
  limpiarVista();
  ocultarElemento(divUnit4, false);
});

//btnEmpirico.addEventListener('click', function(){
//  limpiarModalEmpSemp();
//  titleModalUnidadII.innerText="Modelo empirico"
//  ocultarElemento(divContentEmpirico, false);
//});

// btnSemiEmpirico.addEventListener('click', function(){
//   limpiarModalEmpSemp();
//   titleModalUnidadII.innerText="Modelo semi-empirico";
//   ocultarElemento(divContentSemiEmpirico, false);
// });

//btnCaracteristicasMPE.addEventListener('click', function(){
//  limpiarModalEmpSemp();
//  titleModalUnidadII.innerText="Caracteristicas";
//  ocultarElemento(divCaracteristicasMPE, false);
//});

//btnModelsRepreMPE.addEventListener('click', function(){
//  limpiarModalEmpSemp();
//  titleModalUnidadII.innerText="Modelos representativos";
//  ocultarElemento(divModelsRepreMPE, false);
//});

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
  titleModalUnidadII.innerText="Modelo de Friss";
  ocultarElemento(divFriis, false);
});

btnWalfisch.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="Modelo Walfisch - Ikegami";
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
  titleModalUnidadII.innerText="LMDS";
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

btnRTGC.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="RTGC (Radiotelefonia de Grupo Cerrado)";
  ocultarElemento(divRTGC, false);
});

btnAMPS.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="AMPS (Sistremas telefonico Movil Avanzado)";
  ocultarElemento(divAMPS, false);
});

btnCDMA.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="Acceso multiple por Division de Codigo";
  ocultarElemento(divCDMA, false);
});

btnTDMA.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="Acceso Multiple por Division De Tiempo";
  ocultarElemento(divTDMA, false);
});

btnCDPD.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="CDPD (Red celular Digital para Paquetes de Datos)";
  ocultarElemento(divCDPD, false);
});

btnGSM.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="GSM (Group Special Mobil)";
  ocultarElemento(divGSM, false);
});

btnGPRS.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="GPRS (Servicio General de Paquetes via Radio)";
  ocultarElemento(divGPRS, false);
});

btnPCS.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="PCS (Servicio de Comunicacion Personal)";
  ocultarElemento(divPCS, false);
});

btn4G.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="4G - LTE()";
  ocultarElemento(div4G, false);
});

btn5G.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="5G E IoT";
  ocultarElemento(div5G, false);
});

btnGEO.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="GEO";
  ocultarElemento(divGEO, false);
});

btnMEO.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="MEO";
  ocultarElemento(divMEO, false);
});

btnLEO.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="LEO";
  ocultarElemento(divLEO, false);
});

btnTERRENA.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="ESTACION TERRENA";
  ocultarElemento(divTERRENA, false);
});

btnSUBIDA.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="ENLACE DE SUBIDA";
  ocultarElemento(divSUBIDA, false);
});

btnBAJADA.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="ENLACE DE BAJADA";
  ocultarElemento(divBAJADA, false);
});

btnCRUZADO.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="ENLACE CRUZADO";
  ocultarElemento(divCRUZADO, false);
});


btnTRANSPONDEDOR.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="TRANSPONDEDOR";
  ocultarElemento(divTRANSPONDEDOR, false);
});

btnPARAMETROS.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="PARAMETROS DE UN SISTEMA SATELITAL";
  ocultarElemento(divPARAMETROS, false);
});

btnECUACIONES.addEventListener('click', function(){
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText="ECUACIONES DE UN SITEMA SATELITAL";
  ocultarElemento(divECUACIONES, false);
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
  ocultarElemento(divRTGC, true);
  ocultarElemento(divAMPS, true);
  ocultarElemento(divCDMA, true);
  ocultarElemento(divTDMA, true);
  ocultarElemento(divCDPD, true);
  ocultarElemento(divGSM, true);
  ocultarElemento(divGPRS, true);
  ocultarElemento(divPCS, true);
  ocultarElemento(div4G, true);
  ocultarElemento(div5G, true);
  ocultarElemento(divGEO, true);
  ocultarElemento(divMEO, true);
  ocultarElemento(divLEO, true);
  ocultarElemento(divTERRENA, true);
  ocultarElemento(divSUBIDA, true);
  ocultarElemento(divBAJADA, true);
  ocultarElemento(divCRUZADO, true);
  ocultarElemento(divTRANSPONDEDOR, true);
  ocultarElemento(divPARAMETROS, true);
  ocultarElemento(divECUACIONES, true);
}

function limpiarVista(){
  videoUnidad1.pause();
  videoUnidad2.pause();
  videoUnidad1V2.pause();
  ocultarElemento(divUnit1, true);
  ocultarElemento(divUnit2, true);
  ocultarElemento(divUnit3, true);
  ocultarElemento(divUnit4, true);
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
  videoAMPS.pause();
  video5G.pause();
  videoHistoria.pause();
  videoPARAMETROS.pause();
  videoECUACIONES.pause();

}