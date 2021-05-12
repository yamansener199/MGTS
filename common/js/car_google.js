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
                strokeWeight:0.5
            },
        });

        markers.push(marker);

    }


    function clearMarkers(){

        setMapOnAll(null);
    }

    // clearMarkers();
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


    var max = destinations.length;
    var interval = setInterval(function(){
        deleteMarkers();
        // console.log(destinations.Fb[index].toJSON());
        const bc = new BroadcastChannel("dcode");
        bc.addEventListener("message", e=>{
            addMarker(e.data);
        });
    }, 3000);
     


    


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



    //       // console.log(e.latLng.toJSON());


    //        obj.waypoints.push(e.latLng.toJSON());
    //        //console.log(obj);


    //     })



           
             

    class USGSOverlay extends google.maps.OverlayView{

        constructor(bounds, image){
            super();
            this.bounds_ = bounds;
            this.image_ = image;
            this.div_ = null;
        }

        onAdd(){

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

        draw(){

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