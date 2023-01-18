var getdownloadbtn = document.querySelector(".download-btn");
var getprogressbar = document.querySelector(".progress-bar");
var seturl = "https://linkedin.com";

getdownloadbtn.addEventListener("click",function(){
    // console.log("hi");

    getdownloadbtn.setAttribute("disabled",true);

    var setwidth = 0;

    var setinv = setInterval(progressinc,100);

    function progressinc(){
        if(setwidth <100){
            setwidth++;

            getprogressbar.style.width = `${setwidth}%`;
            getprogressbar.setAttribute("data-inc", `${setwidth}%`);
        }else{
            clearInterval(setinv);
            window.location.href = seturl;
        }
    }

});

// 10PG

// 09422042242