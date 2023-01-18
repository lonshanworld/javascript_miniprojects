const database = [
    {
        question: "Choose Traffic Light?",
        a: "./img/traffic.jpg",
        b: "./img/mountain.jpg",
        c: "./img/ambulance.jpg",
        d: "./img/airport.jpg",
        correctanswer:"a"
    },
    {
        question: "Choose Mountain?",
        a: "./img/traffic.jpg",
        b: "./img/mountain.jpg",
        c: "./img/ambulance.jpg",
        d: "./img/airport.jpg",
        correctanswer:"b"
    },
    {
        question: "Choose Ambulance Truck?",
        a: "./img/traffic.jpg",
        b: "./img/mountain.jpg",
        c: "./img/ambulance.jpg",
        d: "./img/airport.jpg",
        correctanswer:"c"
    },
    {
        question: "Choose Airport?",
        a: "./img/traffic.jpg",
        b: "./img/mountain.jpg",
        c: "./img/ambulance.jpg",
        d: "./img/airport.jpg",
        correctanswer:"d"
    }
];

// console.log(database);

const getcontainer = document.querySelector(".container");
const getquestion = document.querySelector(".question");
const getanswers = document.querySelectorAll(".answer")

const geta_img = document.getElementById("a_img");
const getb_img = document.getElementById("b_img");
const getc_img = document.getElementById("c_img");
const getd_img = document.getElementById("d_img");

const getbtn = document.querySelector(".btn");

let currentidx = 0;
let score = 0;

startquestion();

function startquestion(){

    removeSelects();

    const currentqes = database[currentidx];

    // console.log(currentqes);

    getquestion.textContent = currentqes.question;
    geta_img.src = currentqes.a;
    getb_img.src = currentqes.b;
    getc_img.src = currentqes.c;
    getd_img.src = currentqes.d;
}

// 19BT

function getsingleAnswer(){

    let answer;
  
    // console.log(getanswers);
    getanswers.forEach(function(getANS){
        // console.log(getANS);
        if(getANS.checked){
            // console.log(getANS.id);
            answer = getANS.id;
        }
    });

    // console.log(answer);
    return answer; 
}

// getsingleAnswer();

getbtn.addEventListener("click",function(){
    // console.log("I am working");
    const ANS = getsingleAnswer();

    if (ANS){
        // console.log(ANS);

        if(ANS === database[currentidx].correctanswer){
            score++;
        }

        currentidx++;
        // console.log(currentidx);

        if(currentidx < database.length){
            startquestion();
        }else{
            // console.log(score);

            getcontainer.innerHTML = `
                <h3>Total Score: ${score*25}</h3>
                <h4>You answered correctly at ${score}/${database.length} questions.</h4>
                <!-- <button type="button" class="btn" ondblclick="location.reload()">Double Click To Reload</button> -->
                <button type="button" class="btn" onclick="doubleclick()">Double Click To Reload</button>
            `;
        }
    }else{
        window.alert("Choose One Answer");
    }
});


function removeSelects(){
    getanswers.forEach(function(getanswer){
        return getanswer.checked = false;
    });
}


let clicktimes = 0;
function doubleclick(){

    console.log(clicktimes);
    if(clicktimes === 0){
        // 
        clicktimes = Date.now();
        console.log(clicktimes);
    }else{
        if((Date.now() - clicktimes) < 1000){
            location.reload();
            clicktimes = 0;
        }else{
            // clicktimes = new Date().getTime();
            clicktimes = Date.now();
        }
    }
}

// 20DT


