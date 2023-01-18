const getemail = document.getElementById("emails");
const gettextarea = document.querySelector("textarea");
const getbtn = document.querySelector(".btn");
const getemcontainer = document.querySelector(".email-container");

getemail.focus();

getemail.addEventListener("keyup",function(e){
    createemaillist(this.value);
});

function createemaillist(inputtext){
    // console.log(inputtext);
    // const eitems = inputtext.split(",");
    // console.log(eitems);

    //remove empty,empty(space)
    // const eitems = inputtext.split(",").filter(rmempt => rmempt.trim() !== "" );
    // console.log(eitems);

    const eitems = inputtext.split(",").filter(rmempt => rmempt.trim() !== "").map(rmempt => rmempt.trim());
    // console.log(eitems);

    getemcontainer.innerHTML="";

    eitems.forEach(function(emitem){
        // console.log(emitem);

        const setnewspan = document.createElement("span");
        setnewspan.textContent =emitem;
        setnewspan.classList.add("email-item");
        // console.log(setnewspan);

        getemcontainer.appendChild(setnewspan);
    });
}

getbtn.addEventListener("click",function(e){

    sendEmail();    
    e.preventDefault();
});

function sendEmail(){
    // console.log("I am working.");

    const gettextvalue = gettextarea.value;
    const getaddresses = document.querySelectorAll(".email-item");

    var persons =[];
    // getaddresses.forEach(function(getaddress){
    //     persons.push({
    //         email : getaddress.textContent,
    //         message : gettextvalue
    //     });
    //     console.log(persons);
    // });

    if(getaddresses.length >0 && gettextvalue){
        getaddresses.forEach(function(getaddress){
            persons.push({
                email : getaddress.textContent,
                message : gettextvalue
            });
            
        });
        console.log(persons);
    }else{
        window.alert("Enter Message");
        gettextarea.focus();
    }
}

// 7EB