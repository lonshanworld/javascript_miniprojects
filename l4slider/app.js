var slides=document.getElementsByClassName("carousel-item");
// console.log(slides);  // HTML collection

var dots = document.querySelectorAll(".dot");
// console.log(dots);   // Nodelist

var currslide =1;

// Previous btn
document.getElementById("prev").addEventListener("click",function(){
    carousel(currslide -=1);
});

document.getElementById("next").addEventListener("click",function(){
    carousel(currslide +=1);
});

function carousel(slidenum){

    var x,y;
    for(x=0; x<slides.length; x++){
        slides[x].style.display = "none";
    }

    for(y=0; y < dots.length; y++){
        // dots[y].classList.remove("active");
        // dots[y].className="dot";
        dots[y].className = dots[y].className.replace("active","");
    
    }

    if(slidenum > slides.length){
        currslide =1;
    }else if(slidenum < 1){
        currslide = slides.length;
    }
    // console.log(currslide);

    slides[currslide-1].style.display = "block";

    // dots[currslide-1].className ="dot active";
    dots[currslide-1].className +=" active";
    // dots[currslide-1].classList.add("active");
}

carousel(currslide);


for(var q=0; q < dots.length; q++){
    // console.log(q);

    dots[q].addEventListener("click",function(){
       
        currslide = this.getAttribute("data-bs-slide-to");
        // console.log(currslide);
        carousel(currslide);
    });
}

// 15DT