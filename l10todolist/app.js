var getfomr= document.getElementById("form");
var gettextbox = document.getElementById("textbox");
var getul = document.getElementById("list-group");

getfomr.addEventListener("submit",function(e){
    // console.log("I am working");
    addnew();
    e.preventDefault();
});

function addnew(todo){
    var todotext = gettextbox.value;

    if(todo){
        todotext = todo.text;
    }

    // console.log(todotext);
    if(todotext){
        const li = document.createElement("li");
        // console.log(todo.done);

        if(todo && todo.done){
            li.classList.add("done");
        }

        li.appendChild(document.createTextNode(todotext));

        // console.log(li);
        getul.appendChild(li);
        gettextbox.value="";

        updatelocalstorage();

        li.addEventListener("click",function(){
            li.classList.toggle("done");
            updatelocalstorage();
        });

        li.addEventListener("contextmenu",function(){
            li.remove();
            updatelocalstorage();
        });
    }
}

function updatelocalstorage(){
    var getalllis = document.querySelectorAll("li");
    // console.log(getalllis); 
    const todos = [];

    getalllis.forEach(function(getallli){
        todos.push({
            text:getallli.textContent,
            done: getallli.classList.contains("done"),
        });
    });
    // console.log(todos);
    localStorage.setItem("todos",JSON.stringify(todos));
}

var getalltodosfromls = JSON.parse(localStorage.getItem("todos"));
// console.log(getalltodosfromls);

if(getalltodosfromls){
    getalltodosfromls.forEach(function(getallfromls){
        // console.log(getallfromls);
        // console.log(getallfromls.text);

        addnew(getallfromls);
    });
}

// 31TD