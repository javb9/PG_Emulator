let sidebar = document.getElementById("sidebar");
let openSlide = document.getElementById("openSlide");
let contenedor = document.getElementById("contenedor");
let closeSidebar = document.getElementById("closeSidebar");

let btnContenido = document.getElementById("btnContenido");
//let btnCalcular=document.getElementById('btnCalcular');
let btnGuia = document.getElementById("btnGuia");

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
  var LogdistanEdificios = Math.log10(parseFloat(txtDistanciaEdificios.value));
  var PerdidasLo = 32.4 + 20 * logDistacia + 20 * logFrecuencia;
  var logAnchoCalleSub = Math.log10(parseFloat(txtAnchoCalleSub.value));
  var logDiferenciaAlturas = Math.log10(parseFloat(txtAlturaEdificioSub.value) - parseFloat(txtAlturaMovilSub.value));
  var PerdidasLrts = -16.9 - 10 * logAnchoCalleSub + 10 * logFrecuencia + 20 * logDiferenciaAlturas + CalcularAngulo();
  var DependenciaPerdidasSub = - 4 + (0.7 * ((logFrecuencia/925) - 1));
  var PerdidasLmsd = PerdidasEstacionSub() + IncrementoPerdidasSub() + ControlDependencia() * logDistacia + DependenciaPerdidasSub * logFrecuencia - 9 * LogdistanEdificios; 
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
  var LogdistanEdificios = Math.log10(parseFloat(txtDistanciaEdifUrb.value));
  var PerdidasLo = 32.4 + 20 * logDistacia + 20 * logFrecuencia;
  var logAnchoCalleUrb = Math.log10(parseFloat(txtCalleUrb.value));
  var logDiferenciaAlturas = Math.log10(parseFloat(txtEdificioUrb.value) - parseFloat(txtMovilUrb.value));
  var PerdidasLrts = -16.9 - 10 * logAnchoCalleUrb + 10 * logFrecuencia + 20 * logDiferenciaAlturas + CalcularAnguloUrb();
  var DependenciaPerdidasSub = - 4 + (1.5 * ((logFrecuencia/925) - 1));
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
  var PerdidasPlo = 46.3 + 33.9 * logFrecuencia - 13.82 * LogAluraBase - FactorAhm - (44.9 -6.55 * LogAluraBase) * LogDistanciaTransmisor + FactorCf;
  var logFrecuenciaDiv = Math.log10(parseFloat(txtFrecuanciaMedSub.value)/28);
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
  var PerdidasPlo = 46.3 + 33.9 * logFrecuencia - 13.82 * LogAluraBase - FactorAhm - (44.9 -6.55 * LogAluraBase) * LogDistanciaTransmisor + FactorCf;
  var logFrecuenciaDiv = Math.log10(parseFloat(txtFrecuanciaMedAbi.value)/28);
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
  var PerdidasPlo = 46.3 + 33.9 * logFrecuencia - 13.82 * LogAluraBase - FactorAhm - (44.9 -6.55 * LogAluraBase) * LogDistanciaTransmisor + FactorCf;
  var logFrecuenciaDiv = Math.log10(parseFloat(txtFrecuanciaGranSub.value)/28);
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
  var PerdidasPlo = 46.3 + 33.9 * logFrecuencia - 13.82 * LogAluraBase - FactorAhm - (44.9 -6.55 * LogAluraBase) * LogDistanciaTransmisor + FactorCf;
  var logFrecuenciaDiv = Math.log10(parseFloat(txtFrecuanciaGranAbi.value)/28);
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
  var logFrecuenciaDiv = Math.log10(parseFloat(txtFrecuenciaHataMedSub.value)  / 28);
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
  var logFrecuenciaDiv = Math.log10(parseFloat(txtFrecuenciaHataMedSub.value)  / 28);
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
  titleModalUnidadII.innerText = "Unidad 1";
  ocultarElemento(divEvalu1, false);
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



function CalcularAngulo(){
  var angulo = parseFloat(txtAnguloSub.value);
  if ( angulo <= 35 ){
    var ValorAngulo = -10 + (0.354 * angulo);
    return (ValorAngulo);
  }
  else if (angulo <= 55){
    var ValorAngulo = 2.3 + (0.075 * (angulo-35));
    return (ValorAngulo);
  }
  else {
    var ValorAngulo = 4 - (0.114 * (angulo-55));
    return (ValorAngulo);
  }
}

function CalcularAnguloUrb(){
  var angulo = parseFloat(txtGradosUrb.value);
  if ( angulo <= 35 ){
    var ValorAngulo = -10 + (0.354 * angulo);
    return (ValorAngulo);
  }
  else if (angulo <= 55){
    var ValorAngulo = 2.3 + (0.075 * (angulo-35));
    return (ValorAngulo);
  }
  else {
    var ValorAngulo = 4 - (0.114 * (angulo-55));
    return (ValorAngulo);
  }
}

function PerdidasEstacionSub(){
  var alturaEstacion = parseFloat(txtAlturaBaseSub.value);
  var AlturaEdificio = parseFloat(txtAlturaEdificioSub.value);
  if (alturaEstacion > AlturaEdificio ){
    var PerdidasSub = -18 * Math.log10(1 + alturaEstacion);
    return(PerdidasSub);
  }
  else {
    var PerdidasSub = 0;
    return(PerdidasSub);
  }

}

function PerdidasEstacionUrb(){
  var alturaEstacion = parseFloat(txtAlturaBaseUrb.value);
  var AlturaEdificio = parseFloat(txtEdificioUrb.value);
  if (alturaEstacion > AlturaEdificio ){
    var PerdidasSub = -18 * Math.log10(1 + alturaEstacion);
    return(PerdidasSub);
  }
  else {
    var PerdidasSub = 0;
    return(PerdidasSub);
  }

}

function IncrementoPerdidasSub(){
  var alturaEstacion = parseFloat(txtAlturaBaseSub.value);
  var Distancia = parseFloat(txtDistanciaNLOS.value);
  var AlturaEdificio = parseFloat(txtAlturaEdificioSub.value);
  if (alturaEstacion > AlturaEdificio){
    var KaSub= 54;
    return(KaSub);
  }
  else if(Distancia >= 0.5 && alturaEstacion <= AlturaEdificio){
      var KaSub = 5 - (0.8 * alturaEstacion);
      return(KaSub);
    }
  else if(Distancia < 0.5 && alturaEstacion <= AlturaEdificio){
        var KaSub = 54 - (1.6 * alturaEstacion);
        return(KaSub);
    }
      
}

function IncrementoPerdidasUrb(){
  var alturaEstacion = parseFloat(txtAlturaBaseUrb.value);
  var Distancia = parseFloat(txtDistanciaUrb.value);
  var AlturaEdificio = parseFloat(txtEdificioUrb.value);
  if (alturaEstacion > AlturaEdificio){
    var KaSub= 54;
    return(KaSub);
  }
  else if(Distancia >= 0.5 && alturaEstacion <= AlturaEdificio){
      var KaSub = 5 - (0.8 * alturaEstacion);
      return(KaSub);
    }
  else if(Distancia < 0.5 && alturaEstacion <= AlturaEdificio){
        var KaSub = 54 - (1.6 * alturaEstacion);
        return(KaSub);
    }
      
}

function ControlDependencia(){
  var alturaEstacion = parseFloat(txtAlturaBaseSub.value);
  var AlturaEdificio = parseFloat(txtAlturaEdificioSub.value);
  if(alturaEstacion > AlturaEdificio) {
    var KdSub = 18;
    return(KdSub);
  }
  else if (alturaEstacion <= AlturaEdificio){
    var KdSub = 18 - ((15 * alturaEstacion) / AlturaEdificio )
    return(KdSub);
  }
}

function ControlDependenciaUrb(){
  var alturaEstacion = parseFloat(txtAlturaBaseUrb.value);
  var AlturaEdificio = parseFloat(txtEdificioUrb.value);
  if(alturaEstacion > AlturaEdificio) {
    var KdSub = 18;
    return(KdSub);
  }
  else if (alturaEstacion <= AlturaEdificio){
    var KdSub = 18 - ((15 * alturaEstacion) / AlturaEdificio )
    return(KdSub);
  }
}

function FactAh2(){
  var frecuencia = parseFloat(txtFrecuenciaGraHataSub.value);
  var receptor = parseFloat(txtAntenaReceptorGraHataSub.value);
  if(frecuencia < 300) {
    var logfrecuencia = Math.log(1.54 * receptor);
    var cuadradoFrecuencia = Math.pow(logfrecuencia, 2);
    var facAh2 = 18.29 * cuadradoFrecuencia - 1.1;
    return(facAh2);
  }
  else if (frecuencia >= 300){
    var logfrecuencia = Math.log(11.75 * receptor);
    var cuadradoFrecuencia = Math.pow(logfrecuencia, 2);
    var facAh2 = 3.2 * cuadradoFrecuencia - 4.97;
    return(facAh2);
  }
}

function FactAh2Abi(){
  var frecuencia = parseFloat(txtFrecuenciaGraHataAbi.value);
  var receptor = parseFloat(txtAntenaReceptorGraHataAbi.value);
  if(frecuencia < 300) {
    var logfrecuencia = Math.log(1.54 * receptor);
    var cuadradoFrecuencia = Math.pow(logfrecuencia, 2);
    var facAh2 = 18.29 * cuadradoFrecuencia - 1.1;
    return(facAh2);
  }
  else if (frecuencia >= 300){
    var logfrecuencia = Math.log(11.75 * receptor);
    var cuadradoFrecuencia = Math.pow(logfrecuencia, 2);
    var facAh2 = 3.2 * cuadradoFrecuencia - 4.97;
    return(facAh2);
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
}
