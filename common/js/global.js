"use strict";

let arr_nodes;
let arr_content;
let sys_start = new Date();  // Timestamp on boot up


window.onload = function(){
    arr_nodes = document.getElementById("sidebar-menu").childNodes;
    arr_content = document.getElementById("content-wrapper").childNodes;
    for (var each in arr_nodes){
        f_add_event(arr_nodes[each], "mouseover mouseout"   , f_mouse_on);
        f_add_event(arr_nodes[each], "click"                , f_mouse_click);
    }
    arr_nodes[0].click();
    f_initialize_googlemap();
    f_global_time();
}

function f_add_event(element, event_name, func) {
    if (element.addEventListener) {
        var arr_en = event_name.split(" ");
        for(var each in arr_en){
            element.addEventListener(arr_en[each], func, false);
        }
    }
}

function f_mouse_on(){
    this.classList.toggle("hover");
}

function f_mouse_click(){

    for (var i = 0; i < arr_nodes.length; i++) {
        arr_nodes[i].classList.remove("selected");
        console.log(arr_content);
        arr_content[i].style.display = "none";
    }
    this.classList.toggle("selected");
    //this.style.visibility = "visible";
    f_update_contents(this.classList[1]); 


}

function f_update_contents(section){
    document.getElementById("title").innerHTML=section;
    document.getElementById(section).style.display = "block";
    
    switch (section) {
        case "home"     :
        break;
        case "routes"   :
        break;
        case "events"   :
        break;
        case "apps"     :
        break;
    }
}

function f_global_time() {

    var days    = new Array ("PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA", "CUMARTESİ", "PAZAR");
    var months  = new Array ("OCAK", "ŞUBAT", "MART", "NİSAN", "MAYIS", "HAZİRAN", "TEMMUZ", "AĞUSTOS", "EYLÜL", "EKİM", "KASIM", "ARALIK");

    var millis,sec,min,hour,day,month,year;

    var now     = new Date();

    year    = 1900 + now.getYear();
    month   = now.getMonth();
    day     = now.getDate();
    hour    = f_check_time(now.getHours(),1);
    min     = f_check_time(now.getMinutes(),1);
    sec     = f_check_time(now.getSeconds(),1);
    millis  = f_check_time(now.getMilliseconds(),2);
    
    document.getElementById('dash-date').innerHTML      = day + " " + months[month] + " " + year + " / " + days[now.getDay()-1];
    document.getElementById('dash-time').innerHTML      = hour + ":" + min + ":" + sec;
    document.getElementById('dash-millis').innerHTML    = "." + millis;
    
    var t = setTimeout(f_global_time, 1);
}


function f_check_time(i,m) {
    var limit=10;
    for(var t=0;t<m;t++){
        if (i < limit) { i = "0" + i;}
        limit = limit*10;
    };
    return i;
}