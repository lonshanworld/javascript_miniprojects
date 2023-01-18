const getimgboxes = document.querySelectorAll(".imgbox");
// console.log(getimgboxes);

getimgboxes.forEach(function(getimgbox, idx){
    // console.log(getimgboxes);
    //  console.log(idx);

    getimgbox.addEventListener("click",function(){
        // console.log(idx);
        showbox(idx);
    });
});

function showbox(idx){
    // console.log(idx);
    getimgboxes.forEach(function(imgbox,curidx){
        // console.log("form parameter :" , idx);
        // console.log("from current :" ,curidx);

        if(idx === curidx){
            imgbox.classList.add("show");
            
            imgbox.addEventListener("click",function(e){
                // console.log(e.target);
                // console.log(e.target.className);

                if(e.target.className === "btn-close"){
                    imgbox.classList.remove("show");
                }

                if(e.target.className === "btn"){
                    const subbtn = imgbox.querySelector(".btn");
                    // const subbtn = getimgboxes[idx].querySelector(".btn");
                    subbtn.textContent = "Subscribed";
                }
            });
        }else{
            imgbox.classList.remove("show");
        }
    });
}

// const btns = document.querySelectorAll(".btn");
// console.log(btns[0]);;

// const subbtn = getimgboxes[0].querySelector(".btn");
// console.log(subbtn);

// 12IB