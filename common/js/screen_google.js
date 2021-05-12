"use strict";

let map;
let poly;
let markers=[];


/* Map Defaults */
var myLattitude     = 40.920639206020970;   // Default Lattitude
var myLongitude     = 29.317491568643565;   // Default Longitude

var defaultZoom     = 18;                   // Default Zoom Rate

var defaultmapType  = "roadmap";            // Default Map Type
var defaultmapStyle = "nightmode";          // Default Map Style


var totalDistance   = 0;                    // Total Distance Traveled by TGRs
var totalRoutes     = 0;                    // Number of Routes available
var totalTGRs       = 0;                    // Number of TGRs on duty

function f_initialize_googlemap() {

      var myLatlng = new google.maps.LatLng(myLattitude, myLongitude);
	var mapOptions = {
      	zoom                : defaultZoom,
      	center              : myLatlng,
      	mapTypeId           : defaultmapType,
      	zoomControl         : true,
      	mapTypeControl      : false,
      	scaleControl        : false,
      	streetViewControl   : false,
      	rotateControl       : false,
      	fullscreenControl   : false,
      	styles              : styles[defaultmapStyle]
	}; 

	var mapDiv = new google.maps.Map(document.getElementById('map'), mapOptions);

      var imgBase    = "http://localhost/MTGS/common/img/";
      var startImg   = imgBase + "map.png";

	const bounds = new google.maps.LatLngBounds(
		new google.maps.LatLng(40.73004400, 29.310350),
		new google.maps.LatLng(40.92730800, 29.49345100)
	);

	function addMarker(coords){
		var marker = new google.maps.Marker({
			position:coords,
			map: mapDiv,
			title: 'İstanbul',
			icon: {
				path: google.maps.SymbolPath.CIRCLE,
				scale: 8.5,
				fillColor: "red",
				fillOpacity: 0.8,
				strokeWeight:0.1
			},
		});

		markers.push(marker);

	}


	function clearMarkers(){

	     setMapOnAll(null);
	}

      
      function deleteMarkers(){
            clearMarkers();
       	markers = [];
      }

      function setMapOnAll(map) {
       	for (let i = 0; i < markers.length; i++) {
       		markers[i].setMap(map);
       	}
      }



      // var map = new google.maps.Map(mapDiv,mapOptions);
      var destinations = new google.maps.MVCArray();

       destinations.push (new google.maps.LatLng({lat : 40.926373648238936, lng : 29.319294515810448}));
       destinations.push (new google.maps.LatLng({lat : 40.926364528770480, lng : 29.319317649863200}));
       destinations.push (new google.maps.LatLng({lat : 40.926365288726224, lng : 29.319346148333985}));
       destinations.push (new google.maps.LatLng({lat : 40.926368075230585, lng : 29.319364923797090}));
       destinations.push (new google.maps.LatLng({lat : 40.926375928105850, lng : 29.319382022879560}));
       destinations.push (new google.maps.LatLng({lat : 40.926232296336490, lng : 29.319490652344662}));
       destinations.push (new google.maps.LatLng({lat : 40.924595834736934, lng : 29.321095847126795}));
       destinations.push (new google.maps.LatLng({lat : 40.923811286858530, lng : 29.321845003480988}));
       destinations.push (new google.maps.LatLng({lat : 40.923803007160650, lng : 29.321873580374998}));
       destinations.push (new google.maps.LatLng({lat : 40.923792620695245, lng : 29.321894367494863}));
       destinations.push (new google.maps.LatLng({lat : 40.923780714257305, lng : 29.321911801853460}));
       destinations.push (new google.maps.LatLng({lat : 40.923767034517400, lng : 29.321924877622408}));
       destinations.push (new google.maps.LatLng({lat : 40.923750821488696, lng : 29.321934265353960}));
       destinations.push (new google.maps.LatLng({lat : 40.923735115113345, lng : 29.321939294495863}));
       destinations.push (new google.maps.LatLng({lat : 40.923717382104430, lng : 29.321939965048117}));
       destinations.push (new google.maps.LatLng({lat : 40.923701595753236, lng : 29.321937282839100}));
       destinations.push (new google.maps.LatLng({lat : 40.923686396023910, lng : 29.321930242040438}));
       destinations.push (new google.maps.LatLng({lat : 40.923672969593380, lng : 29.321919513204378}));
       destinations.push (new google.maps.LatLng({lat : 40.923661823120730, lng : 29.321908113816065}));
       destinations.push (new google.maps.LatLng({lat : 40.923652196620075, lng : 29.321892691114230}));
       destinations.push (new google.maps.LatLng({lat : 40.923644343421160, lng : 29.321875256755632}));
       destinations.push (new google.maps.LatLng({lat : 40.923639530169730, lng : 29.321854469635767}));
       destinations.push (new google.maps.LatLng({lat : 40.923636996879370, lng : 29.321833347239775}));
       destinations.push (new google.maps.LatLng({lat : 40.923638010195520, lng : 29.321811889567655}));
       destinations.push (new google.maps.LatLng({lat : 40.923639783498764, lng : 29.321793114104550}));
       destinations.push (new google.maps.LatLng({lat : 40.923644596750150, lng : 29.321777356126590}));
       destinations.push (new google.maps.LatLng({lat : 40.923425677172610, lng : 29.321500265783360}));
       destinations.push (new google.maps.LatLng({lat : 40.922138749000070, lng : 29.319279396719030}));
       destinations.push (new google.maps.LatLng({lat : 40.922127886915040, lng : 29.319045326867528}));
       destinations.push (new google.maps.LatLng({lat : 40.923694759552895, lng : 29.317495178603014}));
       destinations.push (new google.maps.LatLng({lat : 40.923708469332425, lng : 29.317486178960625}));
       destinations.push (new google.maps.LatLng({lat : 40.923769521537070, lng : 29.317388278331580}));
       destinations.push (new google.maps.LatLng({lat : 40.923833106968246, lng : 29.317254503156963}));
       destinations.push (new google.maps.LatLng({lat : 40.923885155209610, lng : 29.317112253204986}));
       destinations.push (new google.maps.LatLng({lat : 40.923911247997694, lng : 29.317006305948897}));
       destinations.push (new google.maps.LatLng({lat : 40.923922647756250, lng : 29.316892256856207}));
       destinations.push (new google.maps.LatLng({lat : 40.923921887772400, lng : 29.316630406201128}));
       destinations.push (new google.maps.LatLng({lat : 40.923917834525090, lng : 29.315906545043234}));
       destinations.push (new google.maps.LatLng({lat : 40.923915301245430, lng : 29.315336744919390}));
       destinations.push (new google.maps.LatLng({lat : 40.923912514637640, lng : 29.314781862929433}));
       destinations.push (new google.maps.LatLng({lat : 40.923908968045765, lng : 29.314134109452336}));
       destinations.push (new google.maps.LatLng({lat : 40.923909226885130, lng : 29.314091273501830}));
       destinations.push (new google.maps.LatLng({lat : 40.923991811760686, lng : 29.313931011513190}));
       destinations.push (new google.maps.LatLng({lat : 40.924029304246820, lng : 29.313876696780640}));
       destinations.push (new google.maps.LatLng({lat : 40.924073889878336, lng : 29.313835793093162}));
       destinations.push (new google.maps.LatLng({lat : 40.924142794886045, lng : 29.313803606584983}));
       destinations.push (new google.maps.LatLng({lat : 40.924412383538936, lng : 29.313710252697085}));
       destinations.push (new google.maps.LatLng({lat : 40.924556779240376, lng : 29.313743109757517}));
       destinations.push (new google.maps.LatLng({lat : 40.924679895326090, lng : 29.313763226325130}));
       destinations.push (new google.maps.LatLng({lat : 40.924742213257390, lng : 29.313781331235980}));
       destinations.push (new google.maps.LatLng({lat : 40.924824136921780, lng : 29.313838846340218}));
       destinations.push (new google.maps.LatLng({lat : 40.924892027850340, lng : 29.313905901565590}));
       destinations.push (new google.maps.LatLng({lat : 40.925120019264200, lng : 29.314273699476757}));
       destinations.push (new google.maps.LatLng({lat : 40.925327744089840, lng : 29.314678042485752}));
       destinations.push (new google.maps.LatLng({lat : 40.925724446028030, lng : 29.315331830933133}));
       destinations.push (new google.maps.LatLng({lat : 40.926154441816784, lng : 29.316159182473850}));
       destinations.push (new google.maps.LatLng({lat : 40.926245636734610, lng : 29.316435450002384}));
       destinations.push (new google.maps.LatLng({lat : 40.926300353624880, lng : 29.316690259858800}));
       destinations.push (new google.maps.LatLng({lat : 40.926338858076090, lng : 29.316965186282825}));
       destinations.push (new google.maps.LatLng({lat : 40.926369256311176, lng : 29.318054163142870}));
       destinations.push (new google.maps.LatLng({lat : 40.926340884341585, lng : 29.319123298679973}));
       destinations.push (new google.maps.LatLng({lat : 40.926340884341585, lng : 29.319193036114360}));
       destinations.push (new google.maps.LatLng({lat : 40.926367229478660, lng : 29.319281549011850}));

      getElementById()
      var max = destinations.length;
      var index = 0;
      var interval = setInterval(function(){
            deleteMarkers();
       	//console.log(index);
            console.log(destinations);
       	addMarker(destinations.Nb[index].toJSON());
       	index++;
            if (index >= max){

             	index=0;
            }
       	const bc = new BroadcastChannel("dcode");
       	bc.postMessage(destinations.Nb[index].toJSON());
       	console.log(destinations.Nb[index].toJSON());
      }, 3000);
             

      addMarker(myLatlng);






       // var obj = {
       //     waypoints:[]
       // };
       // var polylineOptions = {path:destinations,
       //     strokeColor:"#789523",strokeWeight:4};
       //     var polyline = new google.maps.Polyline (polylineOptions);
       //     polyline.setMap(mapDiv);


       //     google.maps.event.addListener(map,'click',function (e){

       //         var currentPath = polyline.getPath();
       //         currentPath.push(e.latLng);
       //         console.log(e.latLng.toJSON());
       //         console.log(obj.waypoints);



       //         deleteMarkers();

       //         addMarker(obj.waypoints[obj.waypoints.length-1]);
       //         setMapOnAll(map);



       //        // console.log(e.latLng.toJSON());


       //        obj.waypoints.push(e.latLng.toJSON());
       //         //console.log(obj);


       //     })


       
             



      class USGSOverlay extends google.maps.OverlayView {
            constructor(bounds, image) {
             	super();

       		this.bounds_ = bounds;
       		this.image_ = image;

       		this.div_ = null;
            }

       	onAdd() {
       		this.div_ = document.createElement("div");
       		this.div_.style.borderStyle = "none";
       		this.div_.style.borderWidth = "0px";
       		this.div_.style.position = "absolute";

       		const img = document.createElement("img");
       		img.src = this.image_;
       		img.style.width = "7.50%";
       		img.style.height = "7.16%";
       		img.style.position = "absolute";
       		this.div_.appendChild(img);

       		const panes = this.getPanes();
       		panes.overlayLayer.appendChild(this.div_);
       	}
            draw() {

       		const overlayProjection = this.getProjection();
       		const sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
       		const ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());


             		if (this.div_) {
             			this.div_.style.left = sw.x + "px";
             			this.div_.style.top = ne.y + "px";
             			this.div_.style.width = ne.x - sw.x + "px";
             			this.div_.style.height = sw.y - ne.y + "px";
             		}
            }
      }

      const overlay = new USGSOverlay(bounds,startImg);
      overlay.setMap(mapDiv);


}






