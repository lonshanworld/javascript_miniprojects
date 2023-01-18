var getacctitles = document.getElementsByClassName("acctitle");
// console.log(getacctitles); //HTML collection , Array pyit mha loop pat lo ya

var getacccontents = document.querySelectorAll(".acccontent");
// console.log(getacccontents); //NodeList

for(var x = 0; x< getacctitles.length; x++){
    // console.log(x);

    getacctitles[x].addEventListener("click",function(e){
        // console.log(e.target);
        // console.log(this);

        this.classList.toggle("active");
        var getcontents = this.nextElementSibling;
        // console.log(getcontents);

        if(getcontents.style.height){
            // getcontents.style.height = 0; //beware can't set
            getcontents.style.height = null;
        }else{
            // console.log(getcontents.scrollHeight);
            getcontents.style.height= getcontents.scrollHeight + "px";
        }
    });

    // getacccontents[0].style.height = getacccontents[0].scrollHeight + "px";
    if(getacctitles[x].classList.contains("active")){
        getacccontents[x].style.height = getacccontents[x].scrollHeight + "px";
    }
}

