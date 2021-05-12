/*
** Updates TGR Platform Positions, Speed
** and any other available data from the sensors installed.
*/

function UpdateAll(){
    UpTime();
    GPSUpdates();

    var t = setTimeout(UpdateAll, 1000);
}


function GPSUpdates() {

  	var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
  		if (this.readyState == 4 && this.status == 200) {
  			//console.log(this.responseText);
        //setTGRMapPosition(this.responseText);
  		}
  	};

    /*
    ** to prevent caching and memory growth
    ** add date variable in timevalue 
    ** like new Date().valueOf() to querystring
    */ 
    xhttp.open("GET", "http://localhost/data/tgr-1.json");

  	//xhttp.open("GET", "http://localhost/data/tgr-1.json?date=" + new Date().valueOf(), true);
  	xhttp.send();

    //xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xhttp.open("POST", "http://localhost/data/tgr-1.json?date=" + new Date().valueOf(), true);
    //xhttp.send("run=" + get_timediff());

    /*
    ** to prevent caching and memory growth
    ** set all variables created in any functions to NULL
    */ 
    xhttp       = null;
    loadTime    = null;

}

function UpTime(){

    var currentTime = new Date();
    var date_diff   = new Date(currentTime-sys_start);
    var days        = Math.floor(date_diff/1000/60/(60*24));
    var hours       = days/24;
    document.getElementById("system-uptime").innerHTML = "Kesintisiz Çalışma Süresi : " + days + " gün " + hours + " saat " + date_diff.getMinutes() + " dk " + date_diff.getSeconds() + " sn" ;

}

function setTGRMapPosition(job){
    document.getElementById("map-pos").innerHTML = job.lat;
}