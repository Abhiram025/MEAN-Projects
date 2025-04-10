const Add=document.getElementById("add")
const tasks=document.getElementById("list-container")
const errors=document.getElementById("err")
const copyright=document.getElementById("copyright")
const date=new Date()
Add.addEventListener("click", ()=> {
    const content=document.getElementById("task").value
    if(content) {        
        errors.textContent=""
        let task=document.createElement("li")
        task.innerText=content
        tasks.appendChild(task)
        document.getElementById("task").value=""

        let span=document.createElement("span")
        span.innerText="\u00d7"
        task.appendChild(span)
    } 
    else {
        errors.textContent=new Error("enter the data")
    }
    saveData()
})

tasks.addEventListener("click", e=>{
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData
    }
},false)

function saveData() {
    localStorage.setItem("task", listContainer.innerHTML)
}
function showData() {
    listContainer.innerHTML=localStorage.getItem("task")
}

copyright.innerText=`Copyright © ${date.getFullYear()} All rights reserved`