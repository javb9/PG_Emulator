let sidebar = document.getElementById("sidebar");
let openSlide = document.getElementById("openSlide");
let contenedor = document.getElementById("contenedor");
let closeSidebar = document.getElementById("closeSidebar");

let btnContenido = document.getElementById("btnContenido");
//let btnCalcular=document.getElementById('btnCalcular');
//let btnGuia = document.getElementById("btnGuia");

let videoUnidad1 = document.getElementById("videoUnidad1");
let videoUnidad2 = document.getElementById("videoUnidad2");
let videoUnidad1V2 = document.getElementById("videoUnidad1V2");
let videoLDSM = document.getElementById("videoLDSM");
let videoDosRayos = document.getElementById("videoDosRayos");
let videoWalfisch = document.getElementById("videoWalfisch");
let videoFriis = document.getElementById("videoFriis");
let videoTETRA = document.getElementById("videoTETRA");
let videoDECT = document.getElementById("videoDECT");
let videoRadioMensa = document.getElementById("videoRadioMensa");
let videoAMPS = document.getElementById("videoAMPS");
let video5G = document.getElementById("video5G");
let videoHistoria = document.getElementById("videoHistoria");
let videoPARAMETROS = document.getElementById("videoPARAMETROS");
let videoECUACIONES = document.getElementById("videoECUACIONES");
let videoModeloI = document.getElementById("videoModeloI");
let videoModeloII = document.getElementById("videoModeloII");
let videoModeloIII = document.getElementById("videoModeloIII");
let videoModeloIV = document.getElementById("videoModeloIV");
let videoModeloV = document.getElementById("videoModeloV");
let videoModeloVI = document.getElementById("videoModeloVI");

let btnEmpirico = document.getElementById("btnEmpirico");
let btnSemiEmpirico = document.getElementById("btnSemiEmpirico");
let btnCaracteristicasMPE = document.getElementById("btnCaracteristicasMPE");
let btnModelsRepreMPE = document.getElementById("btnModelsRepreMPE");
let btnEmpir = document.getElementById("btnEmpir");
let btnSemiEmpir = document.getElementById("btnSemiEmpir");
let btnDeterm = document.getElementById("btnDeterm");
let btnEstadis = document.getElementById("btnEstadis");
let btnIndoor = document.getElementById("btnIndoor");
let btnOutdoor = document.getElementById("btnOutdoor");
let btnDosRayos = document.getElementById("btnDosRayos");
let btnFriss = document.getElementById("btnFriis");
let btnWalfisch = document.getElementById("btnWalfisch");
let btnPmr = document.getElementById("btnPmr");
let btnWifi = document.getElementById("btnWifi");
let btnWimax = document.getElementById("btnWimax");
let btnLds = document.getElementById("btnLds");
let btnTetra = document.getElementById("btnTetra");
let btnDectec = document.getElementById("btnDectec");
let btnRadioMensajeria = document.getElementById("btnRadioMensajeria");
let btnRTGC = document.getElementById("btnRTGC");
let btnAMPS = document.getElementById("btnAMPS");
let btnCDMA = document.getElementById("btnCDMA");
let btnTDMA = document.getElementById("btnTDMA");
let btnCDPD = document.getElementById("btnCDPD");
let btnGSM = document.getElementById("btnGSM");
let btnGPRS = document.getElementById("btnGPRS");
let btnPCS = document.getElementById("btnPCS");
let btn4G = document.getElementById("btn4G");
let btn5G = document.getElementById("btn5G");
let btnGEO = document.getElementById("btnGEO");
let btnMEO = document.getElementById("btnMEO");
let btnLEO = document.getElementById("btnLEO");
let btnTERRENA = document.getElementById("btnTERRENA");
let btnSUBIDA = document.getElementById("btnSUBIDA");
let btnBAJADA = document.getElementById("btnBAJADA");
let btnCRUZADO = document.getElementById("btnCRUZADO");
let btnTRANSPONDEDOR = document.getElementById("btnTRANSPONDEDOR");
let btnPARAMETROS = document.getElementById("btnPARAMETROS");
let btnECUACIONES = document.getElementById("btnECUACIONES");
let btnWalfischIk = document.getElementById("btnWalfischIk");
let btnCost = document.getElementById("btnCost");
let btnITU = document.getElementById("btnITU");
let btnSUI = document.getElementById("btnSUI");
let btnHata = document.getElementById("btnHata");
let btnUMI = document.getElementById("btnUMI");
let btnEvalu1 = document.getElementById("btnEvalu1");
let btnEvalu2 = document.getElementById("btnEvalu2");
let btnEvalu3 = document.getElementById("btnEvalu3");
let btnEvalu4 = document.getElementById("btnEvalu4");
let btnModeloI = document.getElementById("btnModeloI");
let btnModeloII = document.getElementById("btnModeloII");
let btnModeloIII = document.getElementById("btnModeloIII");
let btnModeloIV = document.getElementById("btnModeloIV");
let btnModeloV = document.getElementById("btnModeloV");
let btnModeloVI = document.getElementById("btnModeloVI");
let divContentEmpirico = document.getElementById("divContentEmpirico");
// let divContentSemiEmpirico=document.getElementById('divContentSemiEmpirico');
let divCaracteristicasMPE = document.getElementById("divCaracteristicasMPE");
let divModelsRepreMPE = document.getElementById("divModelsRepreMPE");
let divEmpir = document.getElementById("divEmpir");
let divSemiEmpir = document.getElementById("divSemiEmpir");
let divDeterm = document.getElementById("divDeterm");
let divEstadis = document.getElementById("divEstadis");
let divIndoor = document.getElementById("divIndoor");
let divOutdoor = document.getElementById("divOutdoor");
let divDosRayos = document.getElementById("divDosRayos");
let divFriis = document.getElementById("divFriis");
let divWalfisch = document.getElementById("divWalfisch");
let divPmr = document.getElementById("divPmr");
let divWifi = document.getElementById("divWifi");
let divWiMax = document.getElementById("divWiMax");
let divLds = document.getElementById("divLds");
let divTetra = document.getElementById("divTetra");
let divDectec = document.getElementById("divDectec");
let divRadioMensaje = document.getElementById("divRadioMensaje");
let divRTGC = document.getElementById("divRTGC");
let divAMPS = document.getElementById("divAMPS");
let divCDMA = document.getElementById("divCDMA");
let divTDMA = document.getElementById("divTDMA");
let divCDPD = document.getElementById("divCDPD");
let divGSM = document.getElementById("divGSM");
let divGPRS = document.getElementById("divGPRS");
let divPCS = document.getElementById("divPCS");
let div4G = document.getElementById("div4G");
let div5G = document.getElementById("div5G");
let divGEO = document.getElementById("divGEO");
let divMEO = document.getElementById("divMEO");
let divLEO = document.getElementById("divLEO");
let divTERRENA = document.getElementById("divTERRENA");
let divSUBIDA = document.getElementById("divSUBIDA");
let divBAJADA = document.getElementById("divBAJADA");
let divCRUZADO = document.getElementById("divCRUZADO");
let divTRANSPONDEDOR = document.getElementById("divTRANSPONDEDOR");
let divPARAMETROS = document.getElementById("divPARAMETROS");
let divECUACIONES = document.getElementById("divECUACIONES");
let divCost = document.getElementById("divCost");
let divITU = document.getElementById("divITU");
let divSUI = document.getElementById("divSUI");
let divHata = document.getElementById("divHata");
let divUMI = document.getElementById("divUMI");
let divEvalu1 = document.getElementById("divEvalu1");
let divEvalu2 = document.getElementById("divEvalu2");
let divEvalu3 = document.getElementById("divEvalu3");
let divEvalu4 = document.getElementById("divEvalu4");
let divModeloI = document.getElementById("divModeloI");
let divModeloII = document.getElementById("divModeloII");
let divModeloIII = document.getElementById("divModeloIII");
let divModeloIV = document.getElementById("divModeloIV");
let divModeloV = document.getElementById("divModeloV");
let divModeloVI = document.getElementById("divModeloVI");
let titleModalUnidadII = document.getElementById("titleModalUnidadII");
let iconContenido = document.getElementById("icon-Contenido");
let listContent = document.getElementById("listContent");
let divUnit1 = document.getElementById("divUnit1");
let btnUnit1 = document.getElementById("btnUnit1");
let divUnit2 = document.getElementById("divUnit2");
let btnUnit2 = document.getElementById("btnUnit2");
let divUnit3 = document.getElementById("divUnit3");
let divUnit4 = document.getElementById("divUnit4");
let btnUnit3 = document.getElementById("btnUnit3");
let btnUnit4 = document.getElementById("btnUnit4");
let btnCalcular = document.getElementById("btnCalcular");
let divCalcular = document.getElementById("divCalcular");
let btnEvaluacion = document.getElementById("btnEvaluacion");
let divEvaluacion = document.getElementById("divEvaluacion");
let btnGuia = document.getElementById("btnGuia");
let divGuia = document.getElementById("divGuia");

let flexSwitchCheckDefault1 = document.getElementById(
  "flexSwitchCheckDefault1"
);
let flexSwitchCheckDefault2 = document.getElementById(
  "flexSwitchCheckDefault2"
);
let flexSwitchCheckDefault3 = document.getElementById(
  "flexSwitchCheckDefault3"
);
let flexSwitchCheckDefault4 = document.getElementById(
  "flexSwitchCheckDefault4"
);
let flexSwitchCheckDefault5 = document.getElementById(
  "flexSwitchCheckDefault5"
);
let flexSwitchCheckDefault6 = document.getElementById(
  "flexSwitchCheckDefault6"
);
let flexSwitchCheckDefault7 = document.getElementById(
  "flexSwitchCheckDefault7"
);
let flexSwitchCheckDefault8 = document.getElementById(
  "flexSwitchCheckDefault8"
);
let flexSwitchCheckDefault9 = document.getElementById(
  "flexSwitchCheckDefault9"
);
let flexSwitchCheckDefault10 = document.getElementById(
  "flexSwitchCheckDefault10"
);
let flexSwitchCheckDefault11 = document.getElementById(
  "flexSwitchCheckDefault11"
);
let flexSwitchCheckDefault12 = document.getElementById(
  "flexSwitchCheckDefault12"
);
let flexSwitchCheckDefault13 = document.getElementById(
  "flexSwitchCheckDefault13"
);
let txtFrecuencia = document.getElementById("txtFrecuencia");
let txtDistancia = document.getElementById("txtDistancia");
let txtResultadoLOS = document.getElementById("txtResultadoLOS");
let txtFrecuenciaNLOS = document.getElementById("txtFrecuenciaNLOS");
let txtDistanciaNLOS = document.getElementById("txtDistanciaNLOS");
let txtAnchoCalleSub = document.getElementById("txtAnchoCalleSub");
let txtAlturaEdificioSub = document.getElementById("txtAlturaEdificioSub");
let txtAlturaMovilSub = document.getElementById("txtAlturaMovilSub");
let txtAnguloSub = document.getElementById("txtAnguloSub");
let txtAlturaBaseSub = document.getElementById("txtAlturaBaseSub");
let txtDistanciaEdificios = document.getElementById("txtDistanciaEdificios");
let txtResultadoNLOSSub = document.getElementById("txtResultadoNLOSSub");
let txtFrecuenciaUrb = document.getElementById("txtFrecuenciaUrb");
let txtDistanciaUrb = document.getElementById("txtDistanciaUrb");
let txtCalleUrb = document.getElementById("txtCalleUrb");
let txtEdificioUrb = document.getElementById("txtEdificioUrb");
let txtMovilUrb = document.getElementById("txtMovilUrb");
let txtGradosUrb = document.getElementById("txtGradosUrb");
let txtAlturaBaseUrb = document.getElementById("txtAlturaBaseUrb");
let txtDistanciaEdifUrb = document.getElementById("txtDistanciaEdifUrb");
let txtFrecuanciaMedSub = document.getElementById("txtFrecuanciaMedSub");
let txtAlturaBaseMedSub = document.getElementById("txtAlturaBaseMedSub");
let txtAlturaMovilMedSub = document.getElementById("txtAlturaMovilMedSub");
let txtDistanciaTransmisorMedSub = document.getElementById("txtDistanciaTransmisorMedSub");
let txtFactorCorreccionMedSub = document.getElementById("txtFactorCorreccionMedSub");
let txtFrecuanciaMedAbi = document.getElementById("txtFrecuanciaMedAbi");
let txtAlturaBaseMedAbi = document.getElementById("txtAlturaBaseMedAbi");
let txtAlturaMovilMedAbi = document.getElementById("txtAlturaMovilMedAbi");
let txtDistanciaTransmisorMedAbi = document.getElementById("txtDistanciaTransmisorMedAbi");
let txtFactorCorreccionMedAbi = document.getElementById("txtFactorCorreccionMedAbi");
let txtFrecuanciaGranSub = document.getElementById("txtFrecuanciaGranSub");
let txtAlturaBaseGranSub = document.getElementById("txtAlturaBaseGranSub");
let txtAlturaMovilGranSub = document.getElementById("txtAlturaMovilGranSub");
let txtDistanciaTransmisorGranSub = document.getElementById("txtDistanciaTransmisorGranSub");
let txtFactorCorreccionGranSub = document.getElementById("txtFactorCorreccionGranSub");
let txtFrecuanciaGranAbi = document.getElementById("txtFrecuanciaGranAbi");
let txtAlturaBaseGranAbi = document.getElementById("txtAlturaBaseGranAbi");
let txtAlturaMovilGranAbi = document.getElementById("txtAlturaMovilGranAbi");
let txtDistanciaTransmisorGranAbi = document.getElementById("txtDistanciaTransmisorGranAbi");
let txtFactorCorreccionGranAbi = document.getElementById("txtFactorCorreccionGranAbi");
let txtFrecuenciaITU = document.getElementById("txtFrecuenciaITU");
let txtDistanciaITU = document.getElementById("txtDistanciaITU");
let txtAlturaAntenaITU = document.getElementById("txtAlturaAntenaITU");
let txtAlturaReceptorITU = document.getElementById("txtAlturaReceptorITU");
let txtFrecuenciaTipoA = document.getElementById("txtFrecuenciaTipoA");
let txtAntenaBaseTipoA = document.getElementById("txtAntenaBaseTipoA");
let txtAntenaReceptorTipoA = document.getElementById("txtAntenaReceptorTipoA");
let txtDistanciaTipoA = document.getElementById("txtDistanciaTipoA");
let txtFrecuenciaHataMedSub = document.getElementById("txtFrecuenciaHataMedSub");
let txtAntenaBaseHataMedSub = document.getElementById("txtAntenaBaseHataMedSub");
let txtDistanciaHataMedSub = document.getElementById("txtDistanciaHataMedSub");
let txtAntenaReceptorHataMedSub = document.getElementById("txtAntenaReceptorHataMedSub");
let txtFrecuenciaHataMedAbi = document.getElementById("txtFrecuenciaHataMedAbi");
let txtAntenaBaseHataMedAbi = document.getElementById("txtAntenaBaseHataMedAbi");
let txtAntenaReceptorHataMedAbi = document.getElementById("txtAntenaReceptorHataMedAbi");
let txtDistanciaHataMedAbi = document.getElementById("txtDistanciaHataMedAbi");
let txtFrecuenciaGraHataSub = document.getElementById("txtFrecuenciaGraHataSub");
let txtAntenaBaseGraHataSub = document.getElementById("txtAntenaBaseGraHataSub");
let txtAntenaReceptorGraHataSub = document.getElementById("txtAntenaReceptorGraHataSub");
let txtDistanciaGraHataSub = document.getElementById("txtDistanciaGraHataSub");
let txtFrecuenciaGraHataAbi = document.getElementById("txtFrecuenciaGraHataAbi");
let txtAntenaBaseGraHataAbi = document.getElementById("txtAntenaBaseGraHataAbi");
let txtAntenaReceptorGraHataAbi = document.getElementById("txtAntenaReceptorGraHataAbi");
let txtDistanciaGraHataAbi = document.getElementById("txtDistanciaGraHataAbi");
let txtFrecuenciaUMILos = document.getElementById("txtFrecuenciaUMILos");
let txtAlturaTrasLos = document.getElementById("txtAlturaTrasLos");
let txtAlturaRecepLos = document.getElementById("txtAlturaRecepLos");
let txtDistanciaBaseReceptoraLos = document.getElementById("txtDistanciaBaseReceptoraLos");
let txtDistanciaTransReceLos = document.getElementById("txtDistanciaTransReceLos");
let txtFrecuenciaUMINLos = document.getElementById("txtFrecuenciaUMINLos");
let txtAlturaTrasNLos = document.getElementById("txtAlturaTrasNLos");
let txtAlturaRecepNLos = document.getElementById("txtAlturaRecepNLos");
let txtDistanciaBaseReceptoraNLos = document.getElementById("txtDistanciaBaseReceptoraNLos");
let txtDistanciaTransReceNLos = document.getElementById("txtDistanciaTransReceNLos");


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

btnContenido.addEventListener("click", function () {
  if ($(iconContenido).hasClass("fas fa-sort-up")) {
    $(iconContenido).removeClass("fas fa-sort-up");
    $(iconContenido).addClass("fas fa-sort-down");
  } else {
    $(iconContenido).removeClass("fas fa-sort-down");
    $(iconContenido).addClass("fas fa-sort-up");
  }
});

btnUnit1.addEventListener("click", function () {
  limpiarVista();
  ocultarElemento(divUnit1, false);
});

btnUnit2.addEventListener("click", function () {
  limpiarVista();
  ocultarElemento(divUnit2, false);
});

btnUnit3.addEventListener("click", function () {
  limpiarVista();
  ocultarElemento(divUnit3, false);
});

btnUnit4.addEventListener("click", function () {
  limpiarVista();
  ocultarElemento(divUnit4, false);
});

btnCalcular.addEventListener("click", function () {
  console.log("entro");
  limpiarVista();
  ocultarElemento(divCalcular, false);
});

btnEvaluacion.addEventListener("click", function () {
  console.log("entro");
  limpiarVista();
  ocultarElemento(divEvaluacion, false);
});

btnGuia.addEventListener("click", function () {
  console.log("entro");
  limpiarVista();
  ocultarElemento(divGuia, false);
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

btnWifi.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "Wifi familia IEEE";
  ocultarElemento(divWifi, false);
});

btnEmpir.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "EMPIRICO";
  ocultarElemento(divEmpir, false);
});

btnSemiEmpir.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "SEMI EMPIRICO";
  ocultarElemento(divSemiEmpir, false);
});

btnDeterm.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "DETERMINISTAS";
  ocultarElemento(divDeterm, false);
});

btnEstadis.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "ESTADISTICO";
  ocultarElemento(divEstadis, false);
});

btnIndoor.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "Modelo Indoor - Interiores:";
  ocultarElemento(divIndoor, false);
});

btnOutdoor.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "Modelo Indoor - Interiores:";
  ocultarElemento(divOutdoor, false);
});

btnDosRayos.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "Modelos Dos Rayos";
  ocultarElemento(divDosRayos, false);
});

btnFriss.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "Modelo de Friss";
  ocultarElemento(divFriis, false);
});

btnWalfisch.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "Modelo Walfisch - Ikegami";
  ocultarElemento(divWalfisch, false);
});

btnPmr.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "PMR";
  ocultarElemento(divPmr, false);
});

btnWimax.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "WiMax";
  ocultarElemento(divWiMax, false);
});
btnLds.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "LMDS";
  ocultarElemento(divLds, false);
});

btnTetra.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "TETRA (Terrestrial Trunked Radio)";
  ocultarElemento(divTetra, false);
});

btnDectec.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "DECTEC";
  ocultarElemento(divDectec, false);
});

btnRadioMensajeria.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "Radio mensajeria";
  ocultarElemento(divRadioMensaje, false);
});

btnRTGC.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "RTGC (Radiotelefonia de Grupo Cerrado)";
  ocultarElemento(divRTGC, false);
});

btnAMPS.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "AMPS (Sistremas telefonico Movil Avanzado)";
  ocultarElemento(divAMPS, false);
});

btnCDMA.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "Acceso multiple por Division de Codigo";
  ocultarElemento(divCDMA, false);
});

btnTDMA.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "Acceso Multiple por Division De Tiempo";
  ocultarElemento(divTDMA, false);
});

btnCDPD.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText =
    "CDPD (Red celular Digital para Paquetes de Datos)";
  ocultarElemento(divCDPD, false);
});

btnGSM.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "GSM (Group Special Mobil)";
  ocultarElemento(divGSM, false);
});

btnGPRS.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText =
    "GPRS (Servicio General de Paquetes via Radio)";
  ocultarElemento(divGPRS, false);
});

btnPCS.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "PCS (Servicio de Comunicacion Personal)";
  ocultarElemento(divPCS, false);
});

btn4G.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "4G - LTE()";
  ocultarElemento(div4G, false);
});

btn5G.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "5G E IoT";
  ocultarElemento(div5G, false);
});

btnGEO.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "GEO";
  ocultarElemento(divGEO, false);
});

btnMEO.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "MEO";
  ocultarElemento(divMEO, false);
});

btnLEO.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "LEO";
  ocultarElemento(divLEO, false);
});

btnTERRENA.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "ESTACION TERRENA";
  ocultarElemento(divTERRENA, false);
});

btnSUBIDA.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "ENLACE DE SUBIDA";
  ocultarElemento(divSUBIDA, false);
});

btnBAJADA.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "ENLACE DE BAJADA";
  ocultarElemento(divBAJADA, false);
});

btnCRUZADO.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "ENLACE CRUZADO";
  ocultarElemento(divCRUZADO, false);
});

btnTRANSPONDEDOR.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "TRANSPONDEDOR";
  ocultarElemento(divTRANSPONDEDOR, false);
});

btnPARAMETROS.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "PARAMETROS DE UN SISTEMA SATELITAL";
  ocultarElemento(divPARAMETROS, false);
});

btnECUACIONES.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "ECUACIONES DE UN SITEMA SATELITAL";
  ocultarElemento(divECUACIONES, false);
});

btnWalfischIk.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "Walfisch - Ikegami";
  ocultarElemento(divWalfischIk, false);
});

btnCost.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "COST 231 - Hata";
  ocultarElemento(divCost, false);
});

btnCalculo.addEventListener("click", function () {
  var logDistacia = Math.log10(parseFloat(txtDistancia.value));
  var logFrecuencia = Math.log10(parseFloat(txtFrecuencia.value));
  var total = 42.6 + 26 * logDistacia + 20 * logFrecuencia;
  txtResultadoLOS.value = total;
});

btnBorrarDato.addEventListener("click", function () {
  var logDistacia = Math.log10(parseFloat((txtDistancia.value = 0)));
  var logFrecuencia = Math.log10(parseFloat((txtFrecuencia.value = 0)));
});

btnCalcularNLOS.addEventListener("click", function () {
  var logDistacia = Math.log10(parseFloat(txtDistanciaNLOS.value));
  var logFrecuencia = Math.log10(parseFloat(txtFrecuenciaNLOS.value));
  var valFrecuencia = parseFloat(txtFrecuenciaNLOS.value);
  var LogdistanEdificios = Math.log10(parseFloat(txtDistanciaEdificios.value));
  var PerdidasLo = 32.4 + 20 * logDistacia + 20 * logFrecuencia;
  console.log(PerdidasLo);
  var logAnchoCalleSub = Math.log10(parseFloat(txtAnchoCalleSub.value));
  var logDiferenciaAlturas = Math.log10(parseFloat(txtAlturaEdificioSub.value) - parseFloat(txtAlturaMovilSub.value));
  var PerdidasLrts = -16.9 - 10 * logAnchoCalleSub + 10 * logFrecuencia + 20 * logDiferenciaAlturas + CalcularAngulo();
  console.log(PerdidasLrts);
  var DependenciaPerdidasSub = - 4 + (0.7 * ((valFrecuencia / 925) - 1));
  var PerdidasLmsd = PerdidasEstacionSub() + IncrementoPerdidasSub() + ControlDependencia() * logDistacia + DependenciaPerdidasSub * logFrecuencia - 9 * LogdistanEdificios;
  console.log(PerdidasLmsd);
  var perdida1 = PerdidasEstacionSub();
  var perdida2 = IncrementoPerdidasSub();
  var perdida3 = ControlDependencia();
  var total = PerdidasLo + PerdidasLmsd + PerdidasLrts;

  txtResultadoNLOSSub.value = total;

});

btnBorrarDatoSub.addEventListener("click", function () {
  var logDistacia = Math.log10(parseFloat((txtDistanciaNLOS.value = 0)));
  var logFrecuencia = Math.log10(parseFloat((txtFrecuenciaNLOS.value = 0)));
  var anchoCalle = Math.log10(parseFloat((txtAnchoCalleSub.value = 0)));
  var AlturaEdificio = Math.log10(parseFloat((txtAlturaEdificioSub.value = 0)));
  var alturaMovil = Math.log10(parseFloat((txtAlturaMovilSub.value = 0)));
  var grados = Math.log10(parseFloat((txtAnguloSub.value = 0)));
  var alturaBase = Math.log10(parseFloat((txtAlturaBaseSub.value = 0)));
  var disanciaEdificios = Math.log10(parseFloat((txtDistanciaEdificios.value = 0)));
});

btnCalcularUrb.addEventListener("click", function () {
  var logDistacia = Math.log10(parseFloat(txtDistanciaUrb.value));
  var logFrecuencia = Math.log10(parseFloat(txtFrecuenciaUrb.value));
  var valFrecuencia = parseFloat(txtFrecuenciaUrb.value);
  var LogdistanEdificios = Math.log10(parseFloat(txtDistanciaEdifUrb.value));
  var PerdidasLo = 32.4 + 20 * logDistacia + 20 * logFrecuencia;
  var logAnchoCalleUrb = Math.log10(parseFloat(txtCalleUrb.value));
  var logDiferenciaAlturas = Math.log10(parseFloat(txtEdificioUrb.value) - parseFloat(txtMovilUrb.value));
  var PerdidasLrts = -16.9 - 10 * logAnchoCalleUrb + 10 * logFrecuencia + 20 * logDiferenciaAlturas + CalcularAnguloUrb();
  var DependenciaPerdidasSub = - 4 + (1.5 * ((valFrecuencia / 925) - 1));
  var PerdidasLmsd = PerdidasEstacionUrb() + IncrementoPerdidasUrb() + ControlDependenciaUrb() * logDistacia + DependenciaPerdidasSub * logFrecuencia - 9 * LogdistanEdificios;
  var total = PerdidasLo + PerdidasLmsd + PerdidasLrts;

  txtResultadoNLOSUrb.value = total;

});

btnBorrarUrb.addEventListener("click", function () {
  var logDistacia = Math.log10(parseFloat((txtDistanciaUrb.value = 0)));
  var logFrecuencia = Math.log10(parseFloat((txtFrecuenciaUrb.value = 0)));
  var anchoCalle = Math.log10(parseFloat((txtCalleUrb.value = 0)));
  var AlturaEdificio = Math.log10(parseFloat((txtEdificioUrb.value = 0)));
  var alturaMovil = Math.log10(parseFloat((txtMovilUrb.value = 0)));
  var grados = Math.log10(parseFloat((txtGradosUrb.value = 0)));
  var alturaBase = Math.log10(parseFloat((txtAlturaBaseUrb.value = 0)));
  var disanciaEdificios = Math.log10(parseFloat((txtDistanciaEdifUrb.value = 0)));
});

btnCalcularMedSub.addEventListener("click", function () {
  var logFrecuencia = Math.log10(parseFloat(txtFrecuanciaMedSub.value));
  var AlturaMovil = parseFloat(txtAlturaMovilMedSub.value);
  var FactorAhm = (1.1 * logFrecuencia - 0.7) * AlturaMovil - (1.56 * logFrecuencia - 0.8);
  var LogAluraBase = Math.log10(parseFloat(txtAlturaBaseMedSub.value));
  var LogDistanciaTransmisor = Math.log10(parseFloat(txtDistanciaTransmisorMedSub.value));
  var FactorCf = parseFloat(txtFactorCorreccionMedSub.value);
  var PerdidasPlo = 46.3 + 33.9 * logFrecuencia - 13.82 * LogAluraBase - FactorAhm - (44.9 - 6.55 * LogAluraBase) * LogDistanciaTransmisor + FactorCf;
  var logFrecuenciaDiv = Math.log10(parseFloat(txtFrecuanciaMedSub.value) / 28);
  var PerdidasMedUrb = PerdidasPlo - 2 * Math.pow(logFrecuenciaDiv, 2) - 5.4;

  txtResultadoMed.value = PerdidasPlo;
  txtResultadoMedSub.value = PerdidasMedUrb;

});

btnBorrarMedSub.addEventListener("click", function () {
  var frecuencia = Math.log10(parseFloat((txtFrecuanciaMedSub.value = 0)));
  var base = Math.log10(parseFloat((txtAlturaBaseMedSub.value = 0)));
  var movil = Math.log10(parseFloat((txtAlturaMovilMedSub.value = 0)));
  var distancia = Math.log10(parseFloat((txtDistanciaTransmisorMedSub.value = 0)));
  var factor = Math.log10(parseFloat((txtFactorCorreccionMedSub.value = 0)));
  var PerdidasPlo = Math.log10(parseFloat((txtResultadoMed.value = 0)));
  var Perdidas = Math.log10(parseFloat((txtResultadoMedSub.value = 0)));
});

btnCalcularMedAbi.addEventListener("click", function () {
  var logFrecuencia = Math.log10(parseFloat(txtFrecuanciaMedAbi.value));
  var AlturaMovil = parseFloat(txtAlturaMovilMedAbi.value);
  var FactorAhm = (1.1 * logFrecuencia - 0.7) * AlturaMovil - (1.56 * logFrecuencia - 0.8);
  var LogAluraBase = Math.log10(parseFloat(txtAlturaBaseMedAbi.value));
  var LogDistanciaTransmisor = Math.log10(parseFloat(txtDistanciaTransmisorMedAbi.value));
  var FactorCf = parseFloat(txtFactorCorreccionMedAbi.value);
  var PerdidasPlo = 46.3 + 33.9 * logFrecuencia - 13.82 * LogAluraBase - FactorAhm - (44.9 - 6.55 * LogAluraBase) * LogDistanciaTransmisor + FactorCf;
  var logFrecuenciaDiv = Math.log10(parseFloat(txtFrecuanciaMedAbi.value) / 28);
  var PerdidasMedUrb = PerdidasPlo - 4.78 * Math.pow(logFrecuenciaDiv, 2) + 18.33 * logFrecuencia - 40.94;

  txtResultadoMediana.value = PerdidasPlo;
  txtResultadoMedAbi.value = PerdidasMedUrb;

});

btnBorrarMedAbi.addEventListener("click", function () {
  var frecuencia = Math.log10(parseFloat((txtFrecuanciaMedAbi.value = 0)));
  var base = Math.log10(parseFloat((txtAlturaBaseMedAbi.value = 0)));
  var movil = Math.log10(parseFloat((txtAlturaMovilMedAbi.value = 0)));
  var distancia = Math.log10(parseFloat((txtDistanciaTransmisorMedAbi.value = 0)));
  var factor = Math.log10(parseFloat((txtFactorCorreccionMedAbi.value = 0)));
  var PerdidasPlo = Math.log10(parseFloat((txtResultadoMediana.value = 0)));
  var Perdidas = Math.log10(parseFloat((txtResultadoMedAbi.value = 0)));
});

btnCalcularGranSub.addEventListener("click", function () {
  var logFrecuencia = Math.log10(parseFloat(txtFrecuanciaGranSub.value));
  var AlturaMovil = parseFloat(txtAlturaMovilGranSub.value);
  var logAhm = Math.log10(11.75 * parseFloat(txtFrecuanciaGranSub.value));
  var FactorAhm = 3.2 * Math.pow(logAhm, 2) - 4.97;
  var LogAluraBase = Math.log10(parseFloat(txtAlturaMovilGranSub.value));
  var LogDistanciaTransmisor = Math.log10(parseFloat(txtDistanciaTransmisorGranSub.value));
  var FactorCf = parseFloat(txtFactorCorreccionGranSub.value);
  var PerdidasPlo = 46.3 + 33.9 * logFrecuencia - 13.82 * LogAluraBase - FactorAhm - (44.9 - 6.55 * LogAluraBase) * LogDistanciaTransmisor + FactorCf;
  var logFrecuenciaDiv = Math.log10(parseFloat(txtFrecuanciaGranSub.value) / 28);
  var PerdidasMedUrb = PerdidasPlo - 2 * Math.pow(logFrecuenciaDiv, 2) - 5.4;

  txtResultadoGrande.value = PerdidasPlo;
  txtResultadoGraSub.value = PerdidasMedUrb;

});

btnBorrarGranSub.addEventListener("click", function () {
  var frecuencia = Math.log10(parseFloat((txtFrecuanciaGranSub.value = 0)));
  var base = Math.log10(parseFloat((txtAlturaBaseGranSub.value = 0)));
  var movil = Math.log10(parseFloat((txtAlturaMovilGranSub.value = 0)));
  var distancia = Math.log10(parseFloat((txtDistanciaTransmisorGranSub.value = 0)));
  var factor = Math.log10(parseFloat((txtFactorCorreccionGranSub.value = 0)));
  var PerdidasPlo = Math.log10(parseFloat((txtResultadoGrande.value = 0)));
  var Perdidas = Math.log10(parseFloat((txtResultadoGraSub.value = 0)));
});

btnCalcularGranAbi.addEventListener("click", function () {
  var logFrecuencia = Math.log10(parseFloat(txtFrecuanciaGranAbi.value));
  var AlturaMovil = parseFloat(txtAlturaMovilGranAbi.value);
  var logAhm = Math.log10(11.75 * parseFloat(txtFrecuanciaGranAbi.value));
  var FactorAhm = 3.2 * Math.pow(logAhm, 2) - 4.97;
  var LogAluraBase = Math.log10(parseFloat(txtAlturaBaseGranAbi.value));
  var LogDistanciaTransmisor = Math.log10(parseFloat(txtDistanciaTransmisorGranAbi.value));
  var FactorCf = parseFloat(txtFactorCorreccionGranAbi.value);
  var PerdidasPlo = 46.3 + 33.9 * logFrecuencia - 13.82 * LogAluraBase - FactorAhm - (44.9 - 6.55 * LogAluraBase) * LogDistanciaTransmisor + FactorCf;
  var logFrecuenciaDiv = Math.log10(parseFloat(txtFrecuanciaGranAbi.value) / 28);
  var PerdidasMedUrb = PerdidasPlo - 4.78 * Math.pow(logFrecuencia, 2) + 18.33 * logFrecuencia - 40.94;

  txtResultadoGra.value = PerdidasPlo;
  txtResultadoGraAbi.value = PerdidasMedUrb;

});

btnBorrarGranAbi.addEventListener("click", function () {
  var frecuencia = Math.log10(parseFloat((txtFrecuanciaGranAbi.value = 0)));
  var base = Math.log10(parseFloat((txtAlturaBaseGranAbi.value = 0)));
  var movil = Math.log10(parseFloat((txtAlturaMovilGranAbi.value = 0)));
  var distancia = Math.log10(parseFloat((txtDistanciaTransmisorGranAbi.value = 0)));
  var factor = Math.log10(parseFloat((txtFactorCorreccionGranAbi.value = 0)));
  var PerdidasPlo = Math.log10(parseFloat((txtResultadoGra.value = 0)));
  var Perdidas = Math.log10(parseFloat((txtResultadoGraAbi.value = 0)));
});

btnITU.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "ITU - Recomendacion P.1546-5";
  ocultarElemento(divITU, false);
});

btnCalcularITU.addEventListener("click", function () {
  var logFrecuencia = Math.log10(parseFloat(txtFrecuenciaITU.value));
  var cuadradoDistancia = Math.pow(parseFloat(txtDistanciaITU.value), 2);
  var DiferenciaAlturas = (parseFloat(txtAlturaAntenaITU.value) - parseFloat(txtAlturaReceptorITU.value));
  var alt = parseFloat(txtAlturaAntenaITU.value);
  var rec = parseFloat(txtAlturaReceptorITU.value);
  var cuadradoAlturas = Math.pow(DiferenciaAlturas, 2);
  var Dslope = Math.sqrt(cuadradoDistancia + 0.000001 * cuadradoAlturas);
  var logDslope = Math.log10(Dslope);
  var CampoElectrico = 106.9 - 20 * logDslope;
  console.log(CampoElectrico)
  var PerdidasTrayecto = 139.3 - CampoElectrico + 20 * logFrecuencia;

  txtResultadoITU.value = PerdidasTrayecto;

});

btnBorrarITU.addEventListener("click", function () {
  var frecuencia = Math.log10(parseFloat((txtFrecuenciaITU.value = 0)));
  var distancia = Math.log10(parseFloat((txtDistanciaITU.value = 0)));
  var transmisor = Math.log10(parseFloat((txtAlturaAntenaITU.value = 0)));
  var receptor = Math.log10(parseFloat((txtAlturaReceptorITU.value = 0)));
  var perdidas = Math.log10(parseFloat((txtResultadoITU.value = 0)));

});

btnSUI.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "Erceg C o SUI";
  ocultarElemento(divSUI, false);
});

btnCalcularTipoA.addEventListener("click", function () {
  var logFrecuencia = parseFloat(txtFrecuenciaTipoA.value);
  var antenaReceptora = parseFloat(txtAntenaReceptorTipoA.value);
  console.log(logFrecuencia)
  var velLuz = 299792458;
  var DivisionA = Math.log((4 * 3.1416 * 100 * parseFloat(txtFrecuenciaTipoA.value)) / velLuz);
  console.log(DivisionA)
  var PerdidasEspacioLibre = 20 * DivisionA;
  console.log(PerdidasEspacioLibre)
  var exponPerdidasY = 4.6 - 0.0075 * parseFloat(txtAntenaBaseTipoA.value) * (12.6 / parseFloat(txtAntenaBaseTipoA.value));
  console.log(exponPerdidasY)
  var logDivFrecuencia = Math.log(logFrecuencia / 2000);
  console.log(logDivFrecuencia)
  var logDivhr = Math.log(antenaReceptora / 2000);
  var Xf = 6 * logDivFrecuencia;
  var Xh = 10.8 * logDivhr;
  var PerdidasTrayecto = PerdidasEspacioLibre + 10 * exponPerdidasY * Math.log10(parseFloat(txtDistanciaTipoA.value) / 100) + Xf + Xh + 10.6;

  txtResultadoTipoA.value = PerdidasTrayecto;

});

btnBorrarTipoA.addEventListener("click", function () {
  var frecuencia = Math.log10(parseFloat((txtFrecuenciaTipoA.value = 0)));
  var base = Math.log10(parseFloat((txtAntenaBaseTipoA.value = 0)));
  var receptor = Math.log10(parseFloat((txtAntenaReceptorTipoA.value = 0)));
  var distancia = Math.log10(parseFloat((txtDistanciaTipoA.value = 0)));
  var perdidas = Math.log10(parseFloat((txtResultadoTipoA.value = 0)));

});

btnCalcularTipoB.addEventListener("click", function () {
  var logFrecuencia = parseFloat(txtFrecuenciaTipoB.value);
  var antenaReceptora = parseFloat(txtAntenaReceptorTipoB.value);
  var velLuz = 299792458;
  var DivisionA = Math.log10((4 * 3.1416 * 100 * logFrecuencia) / velLuz);
  console.log(DivisionA)
  var PerdidasEspacioLibre = 20 * DivisionA;
  console.log(PerdidasEspacioLibre)
  var exponPerdidasY = 4 - 0.0065 * parseFloat(txtAntenaBaseTipoB.value) * (17.1 / parseFloat(txtAntenaBaseTipoB.value));
  console.log(exponPerdidasY)
  var logDivFrecuencia = Math.log(logFrecuencia / 2000);
  var logDivhr = Math.log10(antenaReceptora / 2000);
  console.log(logDivFrecuencia)
  var Xf = 6 * logDivFrecuencia;
  console.log(Xf)
  var Xh = 10.8 * logDivhr;
  console.log(Xh)
  var PerdidasTrayecto = PerdidasEspacioLibre + 10 * exponPerdidasY * Math.log10(parseFloat(txtDistanciaTipoB.value) / 100) + Xf + Xh + 9.6;

  txtResultadoTipoB.value = PerdidasTrayecto;

});

btnBorrarTipoB.addEventListener("click", function () {
  var frecuencia = Math.log10(parseFloat((txtFrecuenciaTipoB.value = 0)));
  var base = Math.log10(parseFloat((txtAntenaBaseTipoB.value = 0)));
  var receptor = Math.log10(parseFloat((txtAntenaReceptorTipoB.value = 0)));
  var distancia = Math.log10(parseFloat((txtDistanciaTipoB.value = 0)));
  var perdidas = Math.log10(parseFloat((txtResultadoTipoB.value = 0)));

});

btnCalcularTipoC.addEventListener("click", function () {
  var logFrecuencia = parseFloat(txtFrecuenciaTipoC.value);
  var antenaReceptora = parseFloat(txtAntenaReceptorTipoC.value);
  var velLuz = 299792458;
  var DivisionA = Math.log((4 * 3.1416 * 100 * parseFloat(txtFrecuenciaTipoC.value)) / velLuz);
  var PerdidasEspacioLibre = 20 * DivisionA;
  var exponPerdidasY = 3.6 - 0.005 * parseFloat(txtAntenaBaseTipoC.value) * (20 / parseFloat(txtAntenaBaseTipoC.value));
  var logDivFrecuencia = Math.log(logFrecuencia / 2000);
  var logDivhr = Math.log(antenaReceptora / 2000);
  var Xf = 6 * logDivFrecuencia;
  var Xh = 20 * logDivhr;
  var PerdidasTrayecto = PerdidasEspacioLibre + 10 * Math.log10(parseFloat(txtDistanciaTipoC.value) / 100) + Xf + Xh + 8.2;

  txtResultadoTipoC.value = PerdidasTrayecto;

});

btnBorrarTipoC.addEventListener("click", function () {
  var frecuencia = Math.log10(parseFloat((txtFrecuenciaTipoC.value = 0)));
  var base = Math.log10(parseFloat((txtAntenaBaseTipoC.value = 0)));
  var receptor = Math.log10(parseFloat((txtAntenaReceptorTipoC.value = 0)));
  var distancia = Math.log10(parseFloat((txtDistanciaTipoC.value = 0)));
  var perdidas = Math.log10(parseFloat((txtResultadoTipoC.value = 0)));

});

btnHata.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "Okumura - Hata";
  ocultarElemento(divHata, false);
});

btnCalcularHataMedSub.addEventListener("click", function () {
  var logFrecuencia = Math.log10(parseFloat(txtFrecuenciaHataMedSub.value));
  console.log(logFrecuencia)
  var AntenaReceptora = parseFloat(txtAntenaReceptorHataMedSub.value);
  console.log(AntenaReceptora)
  var FactorAh2 = (1.1 * logFrecuencia - 0.7) * AntenaReceptora - 1.52 * logFrecuencia - 0.8;
  console.log(FactorAh2)
  var logDistacia = Math.log10(parseFloat(txtDistanciaHataMedSub.value));
  var logAntenaTransmisora = Math.log10(parseFloat(txtAntenaBaseHataMedSub.value));
  var Perdidas = 69.55 + 26.16 * logFrecuencia - 13.82 * logAntenaTransmisora - FactorAh2 + (44.9 - 6.55 * logAntenaTransmisora) * logDistacia;
  var logFrecuenciaDiv = Math.log10(parseFloat(txtFrecuenciaHataMedSub.value) / 28);
  var PerdidasTrayecto = Perdidas - 2 * Math.pow(logFrecuenciaDiv, 2) - 5.4;

  txtResultadoHataMedSub.value = PerdidasTrayecto;

});

btnBorrarHataMedSub.addEventListener("click", function () {
  var frecuencia = Math.log10(parseFloat((txtFrecuenciaHataMedSub.value = 0)));
  var base = Math.log10(parseFloat((txtAntenaBaseHataMedSub.value = 0)));
  var receptor = Math.log10(parseFloat((txtAntenaReceptorHataMedSub.value = 0)));
  var distancia = Math.log10(parseFloat((txtDistanciaHataMedSub.value = 0)));
  var perdidas = Math.log10(parseFloat((txtResultadoHataMedSub.value = 0)));

});

btnCalcularHataMedAbi.addEventListener("click", function () {
  var logFrecuencia = Math.log10(parseFloat(txtFrecuenciaHataMedAbi.value));
  console.log(logFrecuencia)
  var AntenaReceptora = parseFloat(txtAntenaReceptorHataMedAbi.value);
  console.log(AntenaReceptora)
  var FactorAh2 = (1.1 * logFrecuencia) * AntenaReceptora - 1.52 * logFrecuencia - 0.8;
  var logDistacia = Math.log10(parseFloat(txtDistanciaHataMedAbi.value));
  var logAntenaTransmisora = Math.log10(parseFloat(txtAntenaBaseHataMedAbi.value));
  var Perdidas = 69.55 + 26.16 * logFrecuencia - 13.82 * logAntenaTransmisora - FactorAh2 + (44.9 - 6.55 * logAntenaTransmisora) * logDistacia;

  var PerdidasTrayecto = Perdidas - 4.78 * Math.pow(logFrecuencia, 2) + 18.33 * logFrecuencia - 40.94;

  txtResultadoHataMedAbi.value = PerdidasTrayecto;

});

btnBorrarHataMedAbi.addEventListener("click", function () {
  var frecuencia = Math.log10(parseFloat((txtFrecuenciaHataMedAbi.value = 0)));
  var base = Math.log10(parseFloat((txtAntenaBaseHataMedAbi.value = 0)));
  var receptor = Math.log10(parseFloat((txtAntenaReceptorHataMedAbi.value = 0)));
  var distancia = Math.log10(parseFloat((txtDistanciaHataMedAbi.value = 0)));
  var perdidas = Math.log10(parseFloat((txtResultadoHataMedAbi.value = 0)));

});

btnCalcularGraHataSub.addEventListener("click", function () {
  var logFrecuencia = Math.log10(parseFloat(txtFrecuenciaGraHataSub.value));
  var AntenaReceptora = parseFloat(txtAntenaReceptorGraHataSub.value);
  var FactorAh2 = (1.1 * logFrecuencia) * AntenaReceptora - 1.52 * logFrecuencia - 0.8;
  var logDistacia = Math.log10(parseFloat(txtDistanciaGraHataSub.value));
  var logAntenaTransmisora = Math.log10(parseFloat(txtAntenaBaseGraHataSub.value));
  var factores = FactAh2();
  var Perdidas = 69.55 + 26.16 * logFrecuencia - 13.82 * logAntenaTransmisora - FactAh2() + (44.9 - 6.55 * logAntenaTransmisora) * logDistacia;
  var logFrecuenciaDiv = Math.log10(parseFloat(txtFrecuenciaHataMedSub.value) / 28);
  var PerdidasTrayecto = Perdidas - 2 * Math.pow(logFrecuenciaDiv, 2) - 5.4;

  txtResultadoGraHataSub.value = PerdidasTrayecto;

});

btnBorrarGraHataSub.addEventListener("click", function () {
  var frecuencia = Math.log10(parseFloat((txtFrecuenciaGraHataSub.value = 0)));
  var base = Math.log10(parseFloat((txtAntenaBaseGraHataSub.value = 0)));
  var receptor = Math.log10(parseFloat((txtAntenaReceptorGraHataSub.value = 0)));
  var distancia = Math.log10(parseFloat((txtDistanciaGraHataSub.value = 0)));
  var perdidas = Math.log10(parseFloat((txtResultadoGraHataSub.value = 0)));

});

btnCalcularGraHataAbi.addEventListener("click", function () {
  var logFrecuencia = Math.log10(parseFloat(txtFrecuenciaGraHataAbi.value));
  console.log(logFrecuencia)
  var AntenaReceptora = parseFloat(txtAntenaReceptorGraHataAbi.value);
  console.log(AntenaReceptora)
  var FactorAh2 = (1.1 * logFrecuencia) * AntenaReceptora - 1.52 * logFrecuencia - 0.8;
  var logDistacia = Math.log10(parseFloat(txtDistanciaGraHataAbi.value));
  console.log(logDistacia)
  var logAntenaTransmisora = Math.log10(parseFloat(txtAntenaBaseGraHataAbi.value));
  var Perdidas = 69.55 + 26.16 * logFrecuencia - 13.82 * logAntenaTransmisora - FactAh2Abi() + (44.9 - 6.55 * logAntenaTransmisora) * logDistacia;
  var PerdidasTrayecto = Perdidas - 4.78 * Math.pow(logFrecuencia, 2) + 18.33 * logFrecuencia - 40.94;

  txtResultadoGraHataAbi.value = PerdidasTrayecto;

});

btnBorrarGraHataAbi.addEventListener("click", function () {
  var frecuencia = Math.log10(parseFloat((txtFrecuenciaGraHataAbi.value = 0)));
  var base = Math.log10(parseFloat((txtAntenaBaseGraHataAbi.value = 0)));
  var receptor = Math.log10(parseFloat((txtAntenaReceptorGraHataAbi.value = 0)));
  var distancia = Math.log10(parseFloat((txtDistanciaGraHataAbi.value = 0)));
  var perdidas = Math.log10(parseFloat((txtResultadoGraHataAbi.value = 0)));

});

btnUMI.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "3D-UMI LOS y 3D-UMI NLOS";
  ocultarElemento(divUMI, false);
});

btnCalcularUMILos.addEventListener("click", function () {
  var logFrecuencia = Math.log10(parseFloat(txtFrecuenciaUMILos.value));
  console.log(logFrecuencia)
  var logDistanciaPuntaPunta = Math.log10(parseFloat(txtDistanciaTransReceLos.value));
  console.log(logDistanciaPuntaPunta)
  var PerdidasTrayecto = 22 * logDistanciaPuntaPunta + 28 + 20 * logFrecuencia;

  txtResultadoUMILos.value = PerdidasTrayecto;

});

btnBorrarUMILos.addEventListener("click", function () {
  var frecuencia = Math.log10(parseFloat((txtFrecuenciaUMILos.value = 0)));
  var transmisor = Math.log10(parseFloat((txtAlturaTrasLos.value = 0)));
  var receptor = Math.log10(parseFloat((txtAlturaRecepLos.value = 0)));
  var baseReceptor = Math.log10(parseFloat((txtDistanciaBaseReceptoraLos.value = 0)));
  var baseReceptorpuntaPunta = Math.log10(parseFloat((txtDistanciaTransReceLos.value = 0)));
  var resultado = Math.log10(parseFloat((txtResultadoUMILos.value = 0)));

});

btnCalcularUMINLos.addEventListener("click", function () {
  var logFrecuencia = Math.log10(parseFloat(txtFrecuenciaUMINLos.value));
  console.log(logFrecuencia)
  var logDistanciaPuntaPunta = Math.log10(parseFloat(txtDistanciaTransReceNLos.value));
  console.log(logDistanciaPuntaPunta)
  var PerdidasTrayecto = 36.7 * logDistanciaPuntaPunta + 22.7 + 26 * logFrecuencia - 0.3 * (parseFloat(txtAlturaRecepNLos.value) - 1.5);

  txtResultadoUMINLos.value = PerdidasTrayecto;

});

btnBorrarUMINLos.addEventListener("click", function () {
  var frecuencia = Math.log10(parseFloat((txtFrecuenciaUMINLos.value = 0)));
  var transmisor = Math.log10(parseFloat((txtAlturaTrasNLos.value = 0)));
  var receptor = Math.log10(parseFloat((txtAlturaRecepNLos.value = 0)));
  var baseReceptor = Math.log10(parseFloat((txtDistanciaBaseReceptoraNLos.value = 0)));
  var baseReceptorpuntaPunta = Math.log10(parseFloat((txtDistanciaTransReceNLos.value = 0)));
  var resultado = Math.log10(parseFloat((txtResultadoUMINLos.value = 0)));

});

btnEvalu1.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "Unidad 1 - Evaluacion";
  ocultarElemento(divEvalu1, false);
});

btnEvalu2.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "Unidad 2 - Evaluacion";
  ocultarElemento(divEvalu2, false);
});

btnEvalu3.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "Unidad 3 - Evaluacion";
  ocultarElemento(divEvalu3, false);
});

btnEvalu4.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "Unidad 4 - Evaluacion";
  ocultarElemento(divEvalu4, false);
});

btnModeloI.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "MODELO I";
  ocultarElemento(divModeloI, false);
});

btnModeloII.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "MODELO II";
  ocultarElemento(divModeloII, false);
});

btnModeloIII.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "MODELO III";
  ocultarElemento(divModeloIII, false);
});

btnModeloIV.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "MODELO IV";
  ocultarElemento(divModeloIV, false);
});

btnModeloV.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "MODELO V";
  ocultarElemento(divModeloV, false);
});

btnModeloVI.addEventListener("click", function () {
  limpiarModalEmpSemp();
  titleModalUnidadII.innerText = "MODELO VI";
  ocultarElemento(divModeloVI, false);
});

function limpiarModalEmpSemp() {
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
  ocultarElemento(divWalfischIk, true);
  ocultarElemento(divCost, true);
  ocultarElemento(divITU, true);
  ocultarElemento(divSUI, true);
  ocultarElemento(divHata, true);
  ocultarElemento(divUMI, true);
  ocultarElemento(divEvalu1, true);
  ocultarElemento(divEvalu2, true);
  ocultarElemento(divEvalu3, true);
  ocultarElemento(divEvalu4, true);
  ocultarElemento(divModeloI, true);
  ocultarElemento(divModeloII, true);
  ocultarElemento(divModeloIII, true);
  ocultarElemento(divModeloIV, true);
  ocultarElemento(divModeloV, true);
  ocultarElemento(divModeloVI, true);
}

function limpiarVista() {
  videoUnidad1.pause();
  videoUnidad2.pause();
  videoUnidad1V2.pause();
  ocultarElemento(divUnit1, true);
  ocultarElemento(divUnit2, true);
  ocultarElemento(divUnit3, true);
  ocultarElemento(divUnit4, true);
  ocultarElemento(divCalcular, true);
  ocultarElemento(divEvaluacion, true);
  ocultarElemento(divGuia, true);

}

function ocultarElemento(elemento, validar) {
  if (validar) {
    if (!$(elemento).hasClass("d-none")) {
      $(elemento).addClass("d-none");
    }
  } else {
    if ($(elemento).hasClass("d-none")) {
      $(elemento).removeClass("d-none");
    }
  }
}

function MostrarDiv() {
  if (flexSwitchCheckDefault1.checked) {
    flexSwitchCheckDefault2.checked = false;
    ocultarElemento(document.getElementById("prueba"), false);
    ocultarElemento(document.getElementById("prueba1"), true);
    return;
  }
  ocultarElemento(document.getElementById("prueba"), true);
}

function MostrarDiv2() {
  if (flexSwitchCheckDefault2.checked) {
    flexSwitchCheckDefault1.checked = false;
    ocultarElemento(document.getElementById("prueba1"), false);
    ocultarElemento(document.getElementById("prueba"), true);
    return;
  }
  ocultarElemento(document.getElementById("prueba1"), true);
}

function MostrarDiv3() {
  if (flexSwitchCheckDefault3.checked) {
    flexSwitchCheckDefault4.checked = false;
    ocultarElemento(document.getElementById("Zona"), false);
    ocultarElemento(document.getElementById("Zona1"), true);
    return;
  }
  ocultarElemento(document.getElementById("Zona"), true);
}

function MostrarDiv4() {
  if (flexSwitchCheckDefault4.checked) {
    flexSwitchCheckDefault3.checked = false;
    ocultarElemento(document.getElementById("Zona1"), false);
    ocultarElemento(document.getElementById("Zona"), true);
    return;
  }
  ocultarElemento(document.getElementById("Zona1"), true);
}

function MostrarDiv5() {
  if (flexSwitchCheckDefault5.checked) {
    flexSwitchCheckDefault6.checked = false;
    ocultarElemento(document.getElementById("divMediano"), false);
    ocultarElemento(document.getElementById("divGrande"), true);
    return;
  }
  ocultarElemento(document.getElementById("divMediano"), true);
}

function MostrarDiv6() {
  if (flexSwitchCheckDefault6.checked) {
    flexSwitchCheckDefault5.checked = false;
    ocultarElemento(document.getElementById("divGrande"), false);
    ocultarElemento(document.getElementById("divMediano"), true);
    ocultarElemento(document.getElementById("divMedAbierto"), true);
    return;
  }
  ocultarElemento(document.getElementById("divGrande"), true);
}

function MostrarDiv7() {
  if (flexSwitchCheckDefault7.checked) {
    flexSwitchCheckDefault8.checked = false;
    ocultarElemento(document.getElementById("divMedianoSub"), false);
    ocultarElemento(document.getElementById("divMedAbierto"), true);
    return;
  }
  ocultarElemento(document.getElementById("divMedianoSub"), true);
}

function MostrarDiv8() {
  if (flexSwitchCheckDefault8.checked) {
    flexSwitchCheckDefault7.checked = false;
    ocultarElemento(document.getElementById("divMedAbierto"), false);
    ocultarElemento(document.getElementById("divMedianoSub"), true);
    return;
  }
  ocultarElemento(document.getElementById("divMedAbierto"), true);
}

function MostrarDiv9() {
  if (flexSwitchCheckDefault9.checked) {
    flexSwitchCheckDefault10.checked = false;
    ocultarElemento(document.getElementById("divGranSub"), false);
    ocultarElemento(document.getElementById("divGranAbi"), true);
    return;
  }
  ocultarElemento(document.getElementById("divGranSub"), true);
}

function MostrarDiv10() {
  if (flexSwitchCheckDefault10.checked) {
    flexSwitchCheckDefault9.checked = false;
    ocultarElemento(document.getElementById("divGranAbi"), false);
    ocultarElemento(document.getElementById("divGranSub"), true);
    return;
  }
  ocultarElemento(document.getElementById("divGranAbi"), true);
}

function MostrarDiv11() {
  if (flexSwitchCheckDefault11.checked) {
    flexSwitchCheckDefault12.checked = false;
    flexSwitchCheckDefault13.checked = false;
    ocultarElemento(document.getElementById("divTipoA"), false);
    ocultarElemento(document.getElementById("divTipoB"), true);
    ocultarElemento(document.getElementById("divTipoC"), true);
    return;
  }
  ocultarElemento(document.getElementById("divTipoA"), true);
}

function MostrarDiv12() {
  if (flexSwitchCheckDefault12.checked) {
    flexSwitchCheckDefault11.checked = false;
    flexSwitchCheckDefault13.checked = false;
    ocultarElemento(document.getElementById("divTipoB"), false);
    ocultarElemento(document.getElementById("divTipoA"), true);
    ocultarElemento(document.getElementById("divTipoC"), true);
    return;
  }
  ocultarElemento(document.getElementById("divTipoB"), true);
}

function MostrarDiv13() {
  if (flexSwitchCheckDefault13.checked) {
    flexSwitchCheckDefault11.checked = false;
    flexSwitchCheckDefault12.checked = false;
    ocultarElemento(document.getElementById("divTipoC"), false);
    ocultarElemento(document.getElementById("divTipoA"), true);
    ocultarElemento(document.getElementById("divTipoB"), true);
    return;
  }
  ocultarElemento(document.getElementById("divTipoC"), true);
}

function MostrarDiv14() {
  if (flexSwitchCheckDefault14.checked) {
    flexSwitchCheckDefault15.checked = false;
    ocultarElemento(document.getElementById("divMedianoHata"), false);
    ocultarElemento(document.getElementById("divGrandeHata"), true);
    return;
  }
  ocultarElemento(document.getElementById("divMedianoHata"), true);
}

function MostrarDiv15() {
  if (flexSwitchCheckDefault15.checked) {
    flexSwitchCheckDefault14.checked = false;
    ocultarElemento(document.getElementById("divGrandeHata"), false);
    ocultarElemento(document.getElementById("divMedianoHata"), true);
    return;
  }
  ocultarElemento(document.getElementById("divGrandeHata"), true);
}

function MostrarDiv16() {
  if (flexSwitchCheckDefault16.checked) {
    flexSwitchCheckDefault17.checked = false;
    ocultarElemento(document.getElementById("MedianoHataSub"), false);
    ocultarElemento(document.getElementById("MedianoHataAbi"), true);
    return;
  }
  ocultarElemento(document.getElementById("MedianoHataSub"), true);
}

function MostrarDiv17() {
  if (flexSwitchCheckDefault17.checked) {
    flexSwitchCheckDefault16.checked = false;
    ocultarElemento(document.getElementById("MedianoHataAbi"), false);
    ocultarElemento(document.getElementById("MedianoHataSub"), true);
    return;
  }
  ocultarElemento(document.getElementById("MedianoHataAbi"), true);
}

function MostrarDiv18() {
  if (flexSwitchCheckDefault18.checked) {
    flexSwitchCheckDefault19.checked = false;
    ocultarElemento(document.getElementById("GrandeHataSub"), false);
    ocultarElemento(document.getElementById("GrandeHataAbi"), true);
    return;
  }
  ocultarElemento(document.getElementById("GrandeHataSub"), true);
}

function MostrarDiv19() {
  if (flexSwitchCheckDefault19.checked) {
    flexSwitchCheckDefault18.checked = false;
    ocultarElemento(document.getElementById("GrandeHataAbi"), false);
    ocultarElemento(document.getElementById("GrandeHataSub"), true);
    return;
  }
  ocultarElemento(document.getElementById("GrandeHataAbi"), true);
}

function MostrarDiv20() {
  if (flexSwitchCheckDefault20.checked) {
    flexSwitchCheckDefault21.checked = false;
    ocultarElemento(document.getElementById("divUMILos"), false);
    ocultarElemento(document.getElementById("divUMINLos"), true);
    return;
  }
  ocultarElemento(document.getElementById("divUMILos"), true);
}

function MostrarDiv21() {
  if (flexSwitchCheckDefault21.checked) {
    flexSwitchCheckDefault20.checked = false;
    ocultarElemento(document.getElementById("divUMINLos"), false);
    ocultarElemento(document.getElementById("divUMILos"), true);
    return;
  }
  ocultarElemento(document.getElementById("divUMINLos"), true);
}



function CalcularAngulo() {
  var angulo = parseFloat(txtAnguloSub.value);
  if (angulo <= 35) {
    var ValorAngulo = -10 + (0.354 * angulo);
    return (ValorAngulo);
  }
  else if (angulo <= 55) {
    var ValorAngulo = 2.3 + (0.075 * (angulo - 35));
    return (ValorAngulo);
  }
  else {
    var ValorAngulo = 4 - (0.114 * (angulo - 55));
    return (ValorAngulo);
  }
}

function CalcularAnguloUrb() {
  var angulo = parseFloat(txtGradosUrb.value);
  if (angulo <= 35) {
    var ValorAngulo = -10 + (0.354 * angulo);
    return (ValorAngulo);
  }
  else if (angulo <= 55) {
    var ValorAngulo = 2.3 + (0.075 * (angulo - 35));
    return (ValorAngulo);
  }
  else {
    var ValorAngulo = 4 - (0.114 * (angulo - 55));
    return (ValorAngulo);
  }
}

function PerdidasEstacionSub() {
  var alturaEstacion = parseFloat(txtAlturaBaseSub.value);
  var AlturaEdificio = parseFloat(txtAlturaEdificioSub.value);
  if (alturaEstacion > AlturaEdificio) {
    var diferencia = alturaEstacion - AlturaEdificio;
    var PerdidasSub = -18 * Math.log10(1 + diferencia);
    return (PerdidasSub);
  }
  else {
    var PerdidasSub = 0;
    return (PerdidasSub);
  }

}

function PerdidasEstacionUrb() {
  var alturaEstacion = parseFloat(txtAlturaBaseUrb.value);
  var AlturaEdificio = parseFloat(txtEdificioUrb.value);
  if (alturaEstacion > AlturaEdificio) {
    var diferencia = alturaEstacion - AlturaEdificio;
    var PerdidasSub = -18 * Math.log10(1 + diferencia);
    return (PerdidasSub);
  }
  else {
    var PerdidasSub = 0;
    return (PerdidasSub);
  }

}

function IncrementoPerdidasSub() {
  var alturaEstacion = parseFloat(txtAlturaBaseSub.value);
  var Distancia = parseFloat(txtDistanciaNLOS.value);
  var AlturaEdificio = parseFloat(txtAlturaEdificioSub.value);
  if (alturaEstacion > AlturaEdificio) {
    var KaSub = 54;
    return (KaSub);
  }
  else if (Distancia >= 0.5 && alturaEstacion <= AlturaEdificio) {
    var KaSub = 5 - (0.8 * alturaEstacion);
    return (KaSub);
  }
  else if (Distancia < 0.5 && alturaEstacion <= AlturaEdificio) {
    var KaSub = 54 - (1.6 * alturaEstacion);
    return (KaSub);
  }

}

function IncrementoPerdidasUrb() {
  var alturaEstacion = parseFloat(txtAlturaBaseUrb.value);
  var Distancia = parseFloat(txtDistanciaUrb.value);
  var AlturaEdificio = parseFloat(txtEdificioUrb.value);
  if (alturaEstacion > AlturaEdificio) {
    var KaSub = 54;
    return (KaSub);
  }
  else if (Distancia >= 0.5 && alturaEstacion <= AlturaEdificio) {
    var KaSub = 5 - (0.8 * alturaEstacion);
    return (KaSub);
  }
  else if (Distancia < 0.5 && alturaEstacion <= AlturaEdificio) {
    var KaSub = 54 - (1.6 * alturaEstacion);
    return (KaSub);
  }

}

function ControlDependencia() {
  var alturaEstacion = parseFloat(txtAlturaBaseSub.value);
  var AlturaEdificio = parseFloat(txtAlturaEdificioSub.value);
  if (alturaEstacion > AlturaEdificio) {
    var KdSub = 18;
    return (KdSub);
  }
  else if (alturaEstacion <= AlturaEdificio) {
    var KdSub = 18 - ((15 * alturaEstacion) / AlturaEdificio)
    return (KdSub);
  }
}

function ControlDependenciaUrb() {
  var alturaEstacion = parseFloat(txtAlturaBaseUrb.value);
  var AlturaEdificio = parseFloat(txtEdificioUrb.value);
  if (alturaEstacion > AlturaEdificio) {
    var KdSub = 18;
    return (KdSub);
  }
  else if (alturaEstacion <= AlturaEdificio) {
    var KdSub = 18 - ((15 * alturaEstacion) / AlturaEdificio)
    return (KdSub);
  }
}

function FactAh2() {
  var frecuencia = parseFloat(txtFrecuenciaGraHataSub.value);
  var receptor = parseFloat(txtAntenaReceptorGraHataSub.value);
  if (frecuencia < 300) {
    var logfrecuencia = Math.log(1.54 * receptor);
    var cuadradoFrecuencia = Math.pow(logfrecuencia, 2);
    var facAh2 = 18.29 * cuadradoFrecuencia - 1.1;
    return (facAh2);
  }
  else if (frecuencia >= 300) {
    var logfrecuencia = Math.log(11.75 * receptor);
    var cuadradoFrecuencia = Math.pow(logfrecuencia, 2);
    var facAh2 = 3.2 * cuadradoFrecuencia - 4.97;
    return (facAh2);
  }
}

function FactAh2Abi() {
  var frecuencia = parseFloat(txtFrecuenciaGraHataAbi.value);
  var receptor = parseFloat(txtAntenaReceptorGraHataAbi.value);
  if (frecuencia < 300) {
    var logfrecuencia = Math.log(1.54 * receptor);
    var cuadradoFrecuencia = Math.pow(logfrecuencia, 2);
    var facAh2 = 18.29 * cuadradoFrecuencia - 1.1;
    return (facAh2);
  }
  else if (frecuencia >= 300) {
    var logfrecuencia = Math.log(11.75 * receptor);
    var cuadradoFrecuencia = Math.pow(logfrecuencia, 2);
    var facAh2 = 3.2 * cuadradoFrecuencia - 4.97;
    return (facAh2);
  }
}

// EVALUCION 1

btnFinalizar1.addEventListener("click", function () {
  pregunta1 = Preg1();
  pregunta2 = Preg2();
  pregunta3 = Preg3();
  pregunta4 = Preg4();
  pregunta5 = Preg5();
  pregunta6 = Preg6();
  pregunta7 = Preg7();
  pregunta8 = Preg8();
  pregunta9 = Preg9();
  pregunta10 = Preg10();
  pregunta11 = Preg11();
  pregunta12 = Preg12();
  pregunta13 = Preg13();
  console.log(pregunta13);
  pregunta14 = Preg14();
  pregunta15 = Preg15();
  pregunta16 = Preg16();
  pregunta17 = Preg17();
  pregunta18 = Preg18();
  pregunta19 = Preg19();
  pregunta20 = Preg20();
  pregunta21 = Preg21();
  pregunta22 = Preg22();
  pregunta23 = Preg23();
  pregunta24 = Preg24();
  pregunta25 = Preg25();
  pregunta26 = Preg26();
  pregunta27 = Preg27();
  pregunta28 = Preg28();

  var resultadoEvaluacion1 = pregunta1 + pregunta2 + pregunta3 + pregunta4 + pregunta5 + pregunta6 + pregunta7 + pregunta8 +
  pregunta9 + pregunta10 + pregunta11 + pregunta12 + pregunta13 + pregunta14 + pregunta15 + pregunta16 + pregunta17 + pregunta18 
  + pregunta19 + pregunta20 + pregunta21 +  pregunta22 + pregunta23 + pregunta24 + pregunta25 + pregunta26 + pregunta27 + pregunta28;

  console.log(resultadoEvaluacion1)

  txtResultadoEva1.value = resultadoEvaluacion1;

});

// EVALUCION 2

btnFinalizar2.addEventListener("click", function () {

  pregunta1 = Preg2_1();
  pregunta2 = Preg2_2_a();
  pregunta2 = Preg2_2_b();
  pregunta2 = Preg2_2_c();
  pregunta3 = Preg2_3();
  pregunta4 = Preg2_4();
  pregunta5 = Preg2_5();
  pregunta6 = Preg2_6();
  pregunta7 = Preg2_7();
  pregunta8 = Preg2_8();
  pregunta9 = Preg2_9();
  pregunta10 = Preg2_10();
  pregunta11 = Preg2_11();
  pregunta12 = Preg2_12();
  pregunta13 = Preg2_13();
  pregunta14 = Preg2_14();
  pregunta15 = Preg2_15();
  pregunta16 = Preg2_16();
  pregunta17 = Preg2_17();
  pregunta18 = Preg2_18();
  pregunta19 = Preg2_19();
  pregunta20 = Preg2_20();

  var resultadoEvaluacion2 = pregunta1 + pregunta2 + pregunta3 + pregunta4 + pregunta5 + pregunta6 + pregunta7 + pregunta8 +
  pregunta9 + pregunta10 + pregunta11 + pregunta12 + pregunta13 + pregunta14 + pregunta15 + pregunta16 + pregunta17 + pregunta18 
  + pregunta19 + pregunta20;

  txtResultadoEva2.value = resultadoEvaluacion2;

});

// EVALUCION 3

btnFinalizar3.addEventListener("click", function () {

  pregunta1 = Preg3_1();
  pregunta2 = Preg3_2();
  pregunta3 = Preg3_3();
  pregunta4 = Preg3_4();
  pregunta5 = Preg3_5();
  pregunta6 = Preg3_6();
  pregunta7 = Preg3_7();
  pregunta8 = Preg3_8();
  pregunta9 = Preg3_9();
  pregunta10 = Preg3_10();
  pregunta11 = Preg3_11();
  pregunta12 = Preg3_12();
  pregunta13 = Preg3_13();
  pregunta14 = Preg3_14();
  pregunta15 = Preg3_15();
  pregunta16 = Preg3_16();
  pregunta17 = Preg3_17();
  pregunta18 = Preg3_18();
  pregunta19 = Preg3_19();
  pregunta20 = Preg3_20();

  var resultadoEvaluacion3 = pregunta1 + pregunta2 + pregunta3 + pregunta4 + pregunta5 + pregunta6 + pregunta7 + pregunta8 +
  pregunta9 + pregunta10 + pregunta11 + pregunta12 + pregunta13 + pregunta14 + pregunta15 + pregunta16 + pregunta17 + pregunta18 
  + pregunta19 + pregunta20;

  txtResultadoEva3.value = resultadoEvaluacion3;

});

// EVALUCION 4

btnFinalizar4.addEventListener("click", function () {

  pregunta1 = Preg4_1();
  pregunta2 = Preg4_2();
  pregunta3 = Preg4_3();
  pregunta4 = Preg4_4();
  pregunta5 = Preg4_5();
  pregunta6 = Preg4_6();
  pregunta7 = Preg4_7();
  pregunta8 = Preg4_8();
  pregunta9 = Preg4_9();
  pregunta10 = Preg4_10();
  pregunta11 = Preg4_11();
  pregunta12 = Preg4_12();
  pregunta13 = Preg4_13();
  pregunta14 = Preg4_14();
  pregunta15 = Preg4_15();
  pregunta17 = Preg4_17();
  pregunta18 = Preg4_18();
  pregunta19 = Preg4_19();
  pregunta20 = Preg4_20();
  pregunta21 = Preg4_21();
  pregunta22 = Preg4_22();
  pregunta23 = Preg4_24();

  var resultadoEvaluacion4 = pregunta1 + pregunta2 + pregunta3 + pregunta4 + pregunta5 + pregunta6 + pregunta7 + pregunta8 +
  pregunta9 + pregunta10 + pregunta11 + pregunta12 + pregunta13 + pregunta14 + pregunta15 + pregunta17 + pregunta18 
  + pregunta19 + pregunta20 + pregunta21 + pregunta22 + pregunta23;

  txtResultadoEva4.value = resultadoEvaluacion4;

});

// FUNCIONES EVALUACION 1

function Preg1() {
  var respuesta = txtPregunta1_1.value;
  var valor = 0;
  if (respuesta == "propagacion") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg2() {
  var respuesta = txtPregunta1_2.value;
  var valor = 0;
  if (respuesta == "trayectoria") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg3() {
  var respuesta = txtPregunta1_3.value;
  var valor = 0;
  if (respuesta == "empirico") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg4() {
  var respuesta = txtPregunta1_4.value;
  var valor = 0;
  if (respuesta == "deterministico") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg5() {
  var respuesta = txtPregunta1_5.value;
  var valor = 0;
  if (respuesta == "muestras") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg6() {
  var respuesta = txtPregunta1_6.value;
  var valor = 0;
  if (respuesta == "difraccion") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg7() {
  var respuesta = txtPregunta1_7.value;
  var valor = 0;
  if (respuesta == "indoor") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg8() {
  var respuesta = txtPregunta1_8.value;
  var valor = 0;
  if (respuesta == "outdoor") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg9() {
  var respuesta = txtPregunta1_9.value;
  var valor = 0;
  if (respuesta == "Walfisch Ikegami") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg10() {
  var respuesta = txtPregunta1_10.value;
  var valor = 0;
  if (respuesta == "tres") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg11() {
  var p11 = 0;
  if (document.getElementById('Radios2').checked == true) {
    p11 = 1;
    return (p11);
  }
  else {
    return (p11);
  }
}

function Preg12() {
  var p12 = 0;
  if (document.getElementById('Radios4').checked == true) {
    p12 = 1;
    return (p12);
  }
  else {
    return (p12);
  }
}

function Preg13() {
  var respuesta = txtPregunta1_13.value;
  var valor = 0;
  if (respuesta == "COST 231 – Hata") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg14() {
  var respuesta = txtPregunta1_14.value;
  var valor = 0;
  if (respuesta == "veinte") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg15() {
  var respuesta = txtPregunta1_15.value;
  var valor = 0;
  if (respuesta == "movil") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg16() {
  var p16 = 0;
  if (document.getElementById('Radios9').checked == true) {
    p16 = 1;
    return (p16);
  }
  else {
    return (p16);
  }
}

function Preg17() {
  var p17 = 0;
  if (document.getElementById('Radios11').checked == true) {
    p17 = 1;
    return (p17);
  }
  else {
    return (p17);
  }
}

function Preg18() {
  var respuesta = txtPregunta1_18.value;
  var valor = 0;
  if (respuesta == "Recomendacion P.1546-5") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg19() {
  var respuesta = txtPregunta1_19.value;
  var valor = 0;
  if (respuesta == "De los 30 a 300MHz") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg20() {
  var p20 = 0;
  if (document.getElementById('Radios13').checked == true) {
    p20 = 1;
    return (p20);
  }
  else {
    return (p20);
  }
}

function Preg21() {
  var respuesta = txtPregunta1_21.value;
  var valor = 0;
  if (respuesta == "40 metros") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg22() {
  var respuesta = txtPregunta1_22.value;
  var valor = 0;
  if (respuesta == "-269.4722") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg23() {
  var p20 = 0;
  if (document.getElementById('Radios17').checked == true) {
    p20 = 1;
    return (p20);
  }
  else {
    return (p20);
  }
}

function Preg24() {
  var p20 = 0;
  if (document.getElementById('Radios20').checked == true) {
    p20 = 1;
    return (p20);
  }
  else {
    return (p20);
  }
}

function Preg25() {
  var respuesta = txtPregunta1_25.value;
  var valor = 0;
  if (respuesta == "154.6313") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg26() {
  var respuesta = txtPregunta1_26.value;
  var valor = 0;
  if (respuesta == "LOS y NLOS") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg27() {
  var p27 = 0;
  if (document.getElementById('Radios24').checked == true) {
    p27 = 1;
    return (p27);
  }
  else {
    return (p27);
  }
}

function Preg28() {
  var p28 = 0;
  if (document.getElementById('Radios25').checked == true) {
    p28 = 1;
    return (p28);
  }
  else {
    return (p28);
  }
}

// FUNCIONES EVALUACION 2

function Preg2_1() {
  var respuesta = txtResultado2_1.value;
  var valor = 0;
  if (respuesta == "las señales de humo, las palomas mensajeras, mensajes en piedras") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg2_2_a() {
  var respuesta = txtResultado2_2.value;
  var valor = 0;
  if (respuesta == "Propagacion Inalambrica") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg2_2_b() {
  var respuesta = txtResultado2_3.value;
  var valor = 0;
  if (respuesta == "telefono") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg2_2_c() {
  var respuesta = txtResultado2_4.value;
  var valor = 0;
  if (respuesta == "diodo") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg2_3() {
  var respuesta = txtResultado2_3_1.value;
  var valor = 0;
  if (respuesta == "ondas de radio") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
} 

function Preg2_4() {
  var p4 = 0;
  if (document.getElementById('Radios29').checked == true) {
    p4 = 1;
    return (p4);
  }
  else {
    return (p4);
  }
}

function Preg2_5() {
  var respuesta = txtResultado2_5.value;
  var valor = 0;
  if (respuesta == "redes pmr") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg2_6() {
  var respuesta = txtResultado2_6.value;
  var valor = 0;
  if (respuesta == "estandares") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg2_7() {
  var respuesta = txtResultado2_7.value;
  var valor = 0;
  if (respuesta == "Seguridad, bomberos, taxis, policia") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg2_8() {
  var p8 = 0;
  if (document.getElementById('Radios31').checked == true) {
    p8 = 1;
    return (p8);
  }
  else {
    return (p8);
  }
}

function Preg2_9() {
  var p9 = 0;
  if (document.getElementById('Radios32').checked == true) {
    p9 = 1;
    return (p9);
  }
  else {
    return (p9);
  }
}

function Preg2_10() {
  var p10 = 0;
  if (document.getElementById('Radios34').checked == true) {
    p10 = 1;
    return (p10);
  }
  else {
    return (p10);
  }
}

function Preg2_11() {
  var respuesta = txtResultado2_11.value;
  var valor = 0;
  if (respuesta == "lmds") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg2_12() {
  var p12 = 0;
  if (document.getElementById('Radios36').checked == true) {
    p12 = 1;
    return (p12);
  }
  else {
    return (p12);
  }
}

function Preg2_13() {
  var p13 = 0;
  if (document.getElementById('Radios41').checked == true) {
    p13 = 1;
    return (p13);
  }
  else {
    return (p13);
  }
}

function Preg2_14() {
  var respuesta = txtResultado2_14.value;
  var valor = 0;
  if (respuesta == "Dos, una estacion base fija y la otra es un telefono fijo o portatil") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg2_15() {
  var p15 = 0;
  if (document.getElementById('Radios44').checked == true) {
    p15 = 1;
    return (p15);
  }
  else {
    return (p15);
  }
}

function Preg2_16() {
  var p16 = 0;
  if (document.getElementById('Radios45').checked == true) {
    p16 = 1;
    return (p16);
  }
  else {
    return (p16);
  }
}

function Preg2_17() {
  var p17 = 0;
  if (document.getElementById('Radios49').checked == true) {
    p17 = 1;
    return (p17);
  }
  else {
    return (p17);
  }
}

function Preg2_18() {
  var respuesta = txtResultado2_18.value;
  var valor = 0;
  if (respuesta == "primera generacion") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg2_19() {
  var p19 = 0;
  if (document.getElementById('Radios52').checked == true) {
    p19 = 1;
    return (p19);
  }
  else {
    return (p19);
  }
}

function Preg2_20() {
  var p20 = 0;
  if (document.getElementById('Radios53').checked == true) {
    p20 = 1;
    return (p20);
  }
  else {
    return (p20);
  }
}

// FUNCIONES EVALUACION 3

function Preg3_1() {
  var respuesta = txtResultado3_1.value;
  var valor = 0;
  if (respuesta == "cdma") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg3_2() {
  var p2 = 0;
  if (document.getElementById('Radios56').checked == true) {
    p2 = 1;
    return (p2);
  }
  else {
    return (p2);
  }
}

function Preg3_3() {
  var p3 = 0;
  if (document.getElementById('Radios59').checked == true) {
    p3 = 1;
    return (p3);
  }
  else {
    return (p3);
  }
}

function Preg3_4() {
  var p4 = 0;
  if (document.getElementById('Radios62').checked == true) {
    p4 = 1;
    return (p4);
  }
  else {
    return (p4);
  }
}

function Preg3_5() {
  var p5 = 0;
  if (document.getElementById('Radios65').checked == true) {
    p5 = 1;
    return (p5);
  }
  else {
    return (p5);
  }
}

function Preg3_6() {
  var respuesta = txtResultado3_6.value;
  var valor = 0;
  if (respuesta == "segunda generacion") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg3_7() {
  var p7 = 0;
  if (document.getElementById('Radios68').checked == true) {
    p7 = 1;
    return (p7);
  }
  else {
    return (p7);
  }
}

function Preg3_8() {
  var p8 = 0;
  if (document.getElementById('Radios69').checked == true) {
    p8 = 1;
    return (p8);
  }
  else {
    return (p8);
  }
}

function Preg3_9() {
  var respuesta = txtResultado3_9.value;
  var valor = 0;
  if (respuesta == "2.5 g") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg3_10() {
  var p10 = 0;
  if (document.getElementById('Radios71').checked == true) {
    p10 = 1;
    return (p10);
  }
  else {
    return (p10);
  }
}

function Preg3_11() {
  var p11 = 0;
  if (document.getElementById('Radios75').checked == true) {
    p11 = 1;
    return (p11);
  }
  else {
    return (p11);
  }
}

function Preg3_12() {
  var p12 = 0;
  if (document.getElementById('Radios78').checked == true) {
    p12 = 1;
    return (p12);
  }
  else {
    return (p12);
  }
}

function Preg3_13() {
  var p13 = 0;
  if (document.getElementById('Radios81').checked == true) {
    p13 = 1;
    return (p13);
  }
  else {
    return (p13);
  }
}

function Preg3_14() {
  var p14 = 0;
  if (document.getElementById('Radios83').checked == true) {
    p14 = 1;
    return (p14);
  }
  else {
    return (p14);
  }
}

function Preg3_15() {
  var p15 = 0;
  if (document.getElementById('Radios87').checked == true) {
    p15 = 1;
    return (p15);
  }
  else {
    return (p15);
  }
}

function Preg3_16() {
  var respuesta = txtResultado3_16.value;
  var valor = 0;
  if (respuesta == "5g e iot") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg3_17() {
  var respuesta = txtResultado3_17.value;
  var valor = 0;
  if (respuesta == "iot") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg3_18() {
  var p18 = 0;
  if (document.getElementById('Radios91').checked == true) {
    p18 = 1;
    return (p18);
  }
  else {
    return (p18);
  }
}

function Preg3_19() {
  var respuesta = txtResultado3_19.value;
  var valor = 0;
  if (respuesta == "ofdm") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg3_20() {
  var p20 = 0;
  if (document.getElementById('Radios92').checked == true) {
    p20 = 1;
    return (p20);
  }
  else {
    return (p20);
  }
}

// FUNCIONES EVALUACION 4

function Preg4_1() {
  var p1 = 0;
  if (document.getElementById('Radios96').checked == true) {
    p1 = 1;
    return (p1);
  }
  else {
    return (p1);
  }
}

function Preg4_2() {
  var p2 = 0;
  if (document.getElementById('Radios97').checked == true) {
    p2 = 1;
    return (p2);
  }
  else {
    return (p2);
  }
}

function Preg4_3() {
  var p3 = 0;
  if (document.getElementById('Radios100').checked == true) {
    p3 = 1;
    return (p3);
  }
  else {
    return (p3);
  }
}

function Preg4_4() {
  var p4 = 0;
  if (document.getElementById('Radios103').checked == true) {
    p4 = 1;
    return (p4);
  }
  else {
    return (p4);
  }
}

function Preg4_5() {
  var p5 = 0;
  if (document.getElementById('Radios106').checked == true) {
    p5 = 1;
    return (p5);
  }
  else {
    return (p5);
  }
}

function Preg4_6() {
  var p6 = 0;
  if (document.getElementById('Radios107').checked == true) {
    p6 = 1;
    return (p6);
  }
  else {
    return (p6);
  }
}

function Preg4_7() {
  var respuesta = txtResultado4_7.value;
  var valor = 0;
  if (respuesta == "geoestacionaria") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg4_8() {
  var p8 = 0;
  if (document.getElementById('Radios111').checked == true) {
    p8 = 1;
    return (p8);
  }
  else {
    return (p8);
  }
}

function Preg4_9() {
  var respuesta = txtResultado4_9.value;
  var valor = 0;
  if (respuesta == "minimo: 3 años y maximo: 7 años") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg4_10() {
  var p10 = 0;
  if (document.getElementById('Radios112').checked == true) {
    p10 = 1;
    return (p10);
  }
  else {
    return (p10);
  }
}

function Preg4_11() {
  var respuesta = txtResultado4_11.value;
  var valor = 0;
  if (respuesta == "minimo: 10 años y maximo: 15 años") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg4_12() {
  var p12 = 0;
  if (document.getElementById('Radios116').checked == true) {
    p12 = 1;
    return (p12);
  }
  else {
    return (p12);
  }
}

function Preg4_13() {
  var p13 = 0;
  if (document.getElementById('Radios118').checked == true) {
    p13 = 1;
    return (p13);
  }
  else {
    return (p13);
  }
}

function Preg4_14() {
  var p14 = 0;
  if (document.getElementById('Radios121').checked == true) {
    p14 = 1;
    return (p14);
  }
  else {
    return (p14);
  }
}

function Preg4_15() {
  var p15 = 0;
  if (document.getElementById('Radios123').checked == true) {
    p15 = 1;
    return (p15);
  }
  else {
    return (p15);
  }
}

function Preg4_17() {
  var p17 = 0;
  if (document.getElementById('Radios126').checked == true) {
    p17 = 1;
    return (p17);
  }
  else {
    return (p17);
  }
}

function Preg4_18() {
  var p18 = 0;
  if (document.getElementById('Radios129').checked == true) {
    p18 = 1;
    return (p18);
  }
  else {
    return (p18);
  }
}

function Preg4_19() {
  var p19 = 0;
  if (document.getElementById('Radios133').checked == true) {
    p19 = 1;
    return (p19);
  }
  else {
    return (p19);
  }
}

function Preg4_20() {
  var p20 = 0;
  if (document.getElementById('Radios134').checked == true) {
    p20 = 1;
    return (p20);
  }
  else {
    return (p20);
  }
}

function Preg4_21() {
  var p21 = 0;
  if (document.getElementById('Radios136').checked == true) {
    p21 = 1;
    return (p21);
  }
  else {
    return (p21);
  }
}

function Preg4_22() {
  var p22 = 0;
  if (document.getElementById('Radios142').checked == true) {
    p22 = 1;
    return (p22);
  }
  else {
    return (p22);
  }
}

function Preg4_23() {
  var respuesta = txtResultado4_23.value;
  var valor = 0;
  if (respuesta == "ofdm") {
    valor = 1;
    return (valor);
  }
  else {
    return (valor);
  }
}

function Preg4_24() {
  var p24 = 0;
  if (document.getElementById('Radios143').checked == true) {
    p24 = 1;
    return (p24);
  }
  else {
    return (p24);
  }
}

function cerrarModal() {
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
  videoModeloI.pause();
  videoModeloII.pause();
  videoModeloIII.pause();
  videoModeloIV.pause();
  videoModeloV.pause();
  videoModeloVI.pause();
}
