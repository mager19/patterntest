// ---------------------------------------------------------
  //MAPA - CALEIDOSCOPIO
// ---------------------------------------------------------

// add all your code to this method, as this will ensure that page is loaded
AmCharts.ready(function() {
  // create AmMap object
  var map = new AmCharts.AmMap();
  // set path to images
  map.pathToImages = "../../images/libre-pensador/";

  /* create data provider object
   mapVar tells the map name of the variable of the map data. You have to
   view source of the map file you included in order to find the name of the
   variable - it's the very first line after commented lines.

   getAreasFromMap indicates that amMap should read all the areas available
   in the map data and treat them as they are included in your data provider.
   in case you don't set it to true, all the areas except listed in data
   provider will be treated as unlisted.
  */

  var icon= "M21.25,8.375V28h6.5V8.375H21.25zM12.25,28h6.5V4.125h-6.5V28zM3.25,28h6.5V12.625h-6.5V28z";
  var urlBase = 'http://librepensador.uexternado.edu.co/l1bRe3-3xT3rNaD0-U3C/wp-content/themes/librepensador/paises/';
  var dataProvider = {
    mapVar: AmCharts.maps.worldLow,
    getAreasFromMap:true,
    areas:[
      {id:"CO",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Colombia&localizacion=ned=es_co&hl=es",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"AU",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Australia&localizacion=ned=au&hl=en",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"AR",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Argentina&localizacion=ned=es_ar&hl=es",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"BE",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Belgique&localizacion=ned=fr_be&hl=fr",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"BW",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Botswana&localizacion=ned=en_bw&hl=en",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"BR",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Brasil&localizacion=ned=pt-BR_br&hl=pt-BR",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"CA",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Canada&localizacion=ned=ca&hl=en",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"CZ",
      color:"#81ba29",
      url: urlBase + "index.php?pais=%C4%8Cesk%C3%A1%20republika&localizacion=ned=cs_cz&hl=cs",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"CL",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Chile&localizacion=ned=es_cl&hl=es",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"CU",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Cuba&localizacion=ned=es_cu&hl=es",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"DE",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Deutschland&localizacion=ned=de&hl=de",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"ES",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Espa%C3%B1a&localizacion=ned=es&hl=es",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"ES",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Espa%C3%B1a&localizacion=ned=es&hl=es",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"US",
      color:"#81ba29",
      url: urlBase + "index.php?pais=United%20States&localizacion=ned=en_us&hl=en",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"FR",
      color:"#81ba29",
      url: urlBase + "index.php?pais=France&localizacion=ned=fr&hl=fr",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"GH",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Ghana&localizacion=ned=en_gh&hl=en",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"IN",
      color:"#81ba29",
      url: urlBase + "index.php?pais=India&localizacion=ned=in&hl=en",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"IE",
      color:"#81ba29",
      url: urlBase + "index.php?pais=ireland&localizacion=ned=en_ie&hl=en",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"IL",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Israel&localizacion=ned=iw_il",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"IT",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Italia&localizacion=ned=it&hl=it",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"KE",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Kenya&localizacion=ned=en_ke&hl=en",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"HU",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Magyarorsz%C3%A1g&localizacion=ned=hu_hu&hl=hu",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"MY",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Malaysia&localizacion=ned=en_my&hl=en",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"MA",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Maroc&localizacion=ned=fr_ma&hl=fr",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"MX",
      color:"#81ba29",
      url: urlBase + "index.php?pais=M%C3%A9xico&localizacion=ned=es_mx&hl=es",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"NA",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Namibia&localizacion=ned=en_na&hl=en",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"NL",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Nederland&localizacion=ned=nl_nl&hl=nl",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"NZ",
      color:"#81ba29",
      url: urlBase + "index.php?pais=New%20Zealand&localizacion=ned=nz&hl=en",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"NG",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Nigeria&localizacion=ned=en_ng&hl=en",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"NO",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Norge&localizacion=ned=no_no&hl=no",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"AT",
      color:"#81ba29",
      url: urlBase + "index.php?pais=%C3%96sterreich&localizacion=ned=de_at&hl=de",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"PK",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Pakistan&localizacion=ned=en_pk&hl=en",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"PE",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Per%C3%BA&localizacion=ned=es_pe&hl=es",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"PE",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Per%C3%BA&localizacion=ned=es_pe&hl=es",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"PH",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Philippines&localizacion=ned=en_ph&hl=en",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"PL",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Polska&localizacion=ned=pl_pl&hl=pl",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"PT",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Portugal&localizacion=ned=pt-PT_pt&hl=pt-PT",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"CH",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Schweiz&localizacion=ned=de_ch&hl=de",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"SN",
      color:"#81ba29",
      url: urlBase + "index.php?pais=S%C3%A9n%C3%A9gal&localizacion=ned=fr_sn&hl=fr",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"SG",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Singapore&localizacion=ned=en_sg&hl=en",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"ZA",
      color:"#81ba29",
      url: urlBase + "index.php?pais=South%20Africa&localizacion=ned=en_za&hl=en",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"SE",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Sverige&localizacion=ned=sv_se&hl=sv",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"TZ",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Tanzania&localizacion=ned=en_tz&hl=en",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"TR",
      color:"#81ba29",
      url: urlBase + "index.php?pais=T%C3%BCrkiye&localizacion=ned=tr_tr&hl=tr",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"GB",
      color:"#81ba29",
      url: urlBase + "index.php?pais=United%20Kigdom&localizacion=ned=uk&hl=en",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"GB",
      color:"#81ba29",
      url: urlBase + "index.php?pais=United%20Kigdom&localizacion=ned=uk&hl=en",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"UG",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Uganda&localizacion=ned=en_ug&hl=en",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"VE",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Venezuela&localizacion=ned=es_ve&hl=e",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"VN",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Vietnam&localizacion=ned=vi_vn&hl=vi",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"ZW",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Zimbabwe&localizacion=ned=en_zw&hl=en",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"GR",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Greece&localizacion=ned=el_gr",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"RU",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Russia&localizacion=ned=ru_ru",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"RS",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Serbia&localizacion=ned=sr_rs",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"UA",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Ukraine&localizacion=ned=ru_ua",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"SA",
      color:"#81ba29",
      url: urlBase + "index.php?pais=KSA&localizacion=ned=ar_sa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"AE",
      color:"#81ba29",
      url: urlBase + "index.php?pais=UAE&localizacion=ned=ar_ae",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"LB",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Lebanon&localizacion=ned=ar_lb",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"EG",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Egypt&localizacion=ned=ar_eg",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"EG",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Egypt&localizacion=ned=ar_eg",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"KR",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Korea&localizacion=ned=kr",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"CN",
      color:"#81ba29",
      url: urlBase + "index.php?pais=China&localizacion=ned=cn&hl=en",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"TW",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Taiwan&localizacion=ned=tw",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"HK",
      color:"#81ba29",
      url: urlBase + "index.php?pais=Hong%20Kong&localizacion=ned=hk",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"IR",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Middle%20East&localizacion=middle-east",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"IQ",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Middle%20East&localizacion=middle-east",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"IQ",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Middle%20East&localizacion=middle-east",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"YE",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Middle%20East&localizacion=middle-east",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"SY",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Middle%20East&localizacion=middle-east",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"JO",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Middle%20East&localizacion=middle-east",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"PS",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Middle%20East&localizacion=middle-east",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"LB",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Middle%20East&localizacion=middle-east",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"OM",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Middle%20East&localizacion=middle-east",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"KW",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Middle%20East&localizacion=middle-east",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"QA",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Middle%20East&localizacion=middle-east",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"CY",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Middle%20East&localizacion=middle-east",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"TN",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"DZ",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"MR",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"GM",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"GW",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"GN",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"SL",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"ML",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"LR",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"CI",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"BF",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"TG",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"BJ",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"NE",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"LY",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"TD",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"CM",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"GQ",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"SD",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"ER",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"ET",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"SS",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"CF",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"GA",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"CG",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"CD",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"DJ",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"SO",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"RW",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"BI",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"AO",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"ZM",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"MZ",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"SZ",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"MW",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"LS",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
      {id:"MG",
      color:"#81ba29",
      url: urlBase + "middle-east.php?pais=Africa&localizacion=africa",
      urlTarget: "tweets",
      rollOverColor:"#ffa969"
      },
    ]
  };


  // pass data provider to the map object
  map.dataProvider = dataProvider;

  /* create areas settings
  * autoZoom set to true means that the map will zoom-in when clicked on the area
  * selectedColor indicates color of the clicked area.
  */
  map.areasSettings = {
    autoZoom: true,
    selectedColor: "#036800",
    selectedOutlineColor:"#036800",
    rollOverColor:"#b1c68d",
    rollOverOutlineColor:"#ffffff",
    color:"#b1c68d"
  };

  map.zoomControl = {
    buttonFillColor:"#10502d",
    buttonRollOverColor:"#e89c49",
    maxZoomLevel:"15"
  };

  map.mapimage = {
    imageURL:"../img/"
  };

  // let's say we want a small map to be displayed, so let's create and add it to the map

  //map.smallMap = new AmCharts.SmallMap();

  // write the map to container div
  map.write("mapdiv");
});