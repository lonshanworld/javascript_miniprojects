var getmodal = document.getElementById("signupmodal");
var getbtnsignup = document.getElementById("btn-signup");
var getbtnclose = document.querySelector(".btn-close");
var getbtnfullscreen = document.getElementById("btn-fullscreen");
var getbtnclosescreen = document.getElementById("btn-closescreen");

getbtnsignup.addEventListener("click",function(){
    getmodal.style.display = "block";
});

getbtnclose.addEventListener("click",function(){
    getmodal.style.display = "none";
});

window.onclick = function(e){
    // console.log(e.target);

    if(e.target === getmodal){
        getmodal.style.display="none";
    }
}

// localStorage.setItem("fullscreen","null");

var getde = document.documentElement;


getbtnfullscreen.addEventListener("click",function(){
    // getde.requestFullscreen();

    if(getde.requestFullscreen){
        getde.requestFullscreen();
    }else if(getde.msRequestFullscreen){
        getde.msRequestFullscreen();
    }else if(getde.webkitRequestFullscreen){
        getde.webkitRequestFullscreen();
    }

    localStorage.setItem("fullscreen","true");

    getbtnclosescreen.style.display = "inline-block";
    console.log(localStorage.getItem("fullscreen"));
});

getbtnclosescreen.addEventListener("click",function(){
    // document.exitFullscreen();

    if(document.exitFullscreen){
        document.exitFullscreen();
    }else if(document.msExitFullscreen){
        document.msExitFullscreen();
    }else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen();
    }

    localStorage.setItem("fullscreen","false");

    getbtnclosescreen.style.display = "none";
    console.log(localStorage.getItem("fullscreen"));
});


var value = localStorage.getItem("fullscreen");
console.log(value);

// if(value === "true"){
//     fs = getde.requestFullscreen;
//     if(fs){
//         getde.requestFullscreen();
//     }
// }else if(value === "false"){
//     fs = document.exitFullscreen;
//     if(fs){
//         document.exitFullscreen();
//     }
// }

// if(value === "true"){
//     var text = "Want to view in Full Screen ?";
//     if(confirm(text)==true){
//         if(document.fullscreenEnabled){
//             getde.requestFullscreen;
//         }
//     }
// }

// document.onclick = function () {
//     var conf = confirm("Want to view in Full Screen ??");
//     var docelem = document.documentElement;

//     if (conf == true) {
//         if (docelem.requestFullscreen) {
//             docelem.requestFullscreen();
//         }
//         else if (docelem.mozRequestFullScreen) {
//             docelem.mozRequestFullScreen();
//         }
//         else if (docelem.webkitRequestFullScreen) {
//             docelem.webkitRequestFullScreen();
//         }
//         else if (docelem.msRequestFullscreen) {
//             docelem.msRequestFullscreen();
//         }
//     }
// }

// var conf = confirm("Fullscreen mode?");
// var docelem = document.documentElement;

// if (conf == true) {
//     if (docelem.requestFullscreen) {
//         docelem.requestFullscreen();
//     }
//     else if (docelem.mozRequestFullScreen) {
//         docelem.mozRequestFullScreen();
//     }
//     else if (docelem.webkitRequestFullscreen) {
//         docelem.webkitRequestFullscreen();
//     }
//     else if (docelem.msRequestFullscreen) {
//         docelem.msRequestFullscreen();
//     }
// }

var getyesbtn = document.getElementById("yesbtn");
var getnobtn = document.getElementById("nobtn");
var getfs = document.getElementById("fullscreendialog");

if(value === "true"){
    getfs.style.display = "block";
}else if(value === "false"){
    getfs.style.display = "none";
}

getyesbtn.addEventListener("click",function(){
    // getde.requestFullscreen();

    if(getde.requestFullscreen){
        getde.requestFullscreen();
    }else if(getde.msRequestFullscreen){
        getde.msRequestFullscreen();
    }else if(getde.webkitRequestFullscreen){
        getde.webkitRequestFullscreen();
    }

    localStorage.setItem("fullscreen","true");

    getbtnclosescreen.style.display = "inline-block";
    getfs.style.display = "none";
    console.log(localStorage.getItem("fullscreen"));
});

getnobtn.addEventListener("click",function(){
    // document.exitFullscreen();

    // if(document.exitFullscreen){
    //     document.exitFullscreen();
    // }else if(document.msExitFullscreen){
    //     document.msExitFullscreen();
    // }else if(document.webkitExitFullscreen){
    //     document.webkitExitFullscreen();
    // }

    localStorage.setItem("fullscreen","false");

    // getbtnclosescreen.style.display = "none";
    getfs.style.display = "none";
    console.log(localStorage.getItem("fullscreen"));
});

// 16DONE