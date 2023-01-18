var getprogressbar = document.getElementById("progress-bar");

function scrollpoint(){
    // console.log("I'm working");

    //st
    //ph
    //ch

    //ph-ch

    //st*100 /(ph-ch)

    var getscrolltop = document.documentElement.scrollTop;
    // console.log(getscrolltop);
    var getscrollheight = document.documentElement.scrollHeight;
    // console.log(getscrollheight);
    var getclientheight = document.documentElement.clientHeight;
    // console.log(getclientheight);

    var calcheight = getscrollheight - getclientheight;

    // var getfinal = Math.round((getscrolltop *100) / calcheight);
    // console.log(getfinal);

    var getfinal = Math.round((getscrolltop/calcheight)*100);
    // console.log(getfinal);

    getprogressbar.style.width = `${getfinal}%`;
}

window.onscroll = function(){scrollpoint()};

function printme(){
    window.print();
}