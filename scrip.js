const inputBox = document.getElementById("input-box")
const listContainer =document.getElementById("list-container")
function addTask() {

    if (inputBox.value==="") {
        alert("Please write your task")
    }

    else{
    let taskList= document.createElement("li")
    taskList.innerHTML= inputBox.value
    document.getElementById("list-container").appendChild(taskList)
    let span= document.createElement("span")
    span.innerHTML="\u00d7"
    taskList.appendChild(span)
    }
    inputBox.value=""
    saveData()

}


 listContainer.addEventListener("click",function(e){
     if (e.target.tagName=== "LI"){
     e.target.classList.toggle("checked")
     saveData()
    }
     else if(e.target.tagName==="SPAN"){
         e.target.parentElement.remove()
         saveData()
     }
},false);
function saveData() {
    localStorage.setItem("data",listContainer.innerHTML);
    
}
function showData() {
    listContainer.innerHTML=localStorage.getItem("data")
}
showData()

