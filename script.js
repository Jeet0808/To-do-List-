const inputbox = document.getElementById("input-box");
const listcont = document.getElementById("list-cont");

function addtask(){
    if(inputbox.value === ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);


    }
    inputbox.value = "";
    saveData();
}

listcont.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("cheaked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData(){
    localStorage.setItem("data",listcont.innerHTML);
}

function showTask(){
    listcont.innerHTML = localStorage.getItem("data");
}

showTask(); 