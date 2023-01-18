const getmap = document.querySelector(".map-container");
var getsmallcolor = document.getElementById("smallcolor"),
getmediumcolor = document.getElementById("mediumcolor"),
getlargecolor = document.getElementById("largecolor");

var circleId = 0;

getmap.addEventListener("click",function(e){
    circleId++;
    // console.log("I am working");
    if(e.target.classList.contains("map-container")){
        const cx = e.clientX;
        const cy = e.clientY;

        const maptop = e.target.offsetTop;
        const mapleft = e.target.offsetLeft;    
        // console.log(maptop);

        const curx = cx-mapleft;
        const cury = cy-maptop;
        // console.log(curx,cury);

        const circle = document.createElement("span");
        circle.id = circleId;
        circle.classList.add("circle");
        // console.log(circle);
        circle.style.left = `${curx}px`;
        circle.style.top = `${cury}px`;

        // circle.style.backgroundColor = "red";
        // circle.style.setProperty("--small-color","darkblue");
        // circle.style.setProperty("--medium-color","skyblue");
        // circle.style.setProperty("--large-color","steelblue");

        if(getsmallcolor.selectedIndex > 0 && getmediumcolor.selectedIndex > 0 && getlargecolor.selectedIndex > 0)
        {
            circle.style.setProperty("--small-color",getsmallcolor.value);
            circle.style.setProperty("--medium-color",getmediumcolor.value);
            circle.style.setProperty("--large-color",getlargecolor.value);
        }

        // e.target.appendChild(circle);
        this.appendChild(circle);
    }
    removePointer(e);
});

function removePointer(e){
    if(e.target.id === 0 ){
        e.target.remove();
    }
}

// 13MP