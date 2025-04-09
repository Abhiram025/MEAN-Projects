const Add=document.getElementById("add")
const tasks=document.getElementById("list-container")
const errors=document.getElementById("err")
const content=document.getElementById("task").value
Add.addEventListener("click", ()=> {
    if(content) {
        tasks.innerHTML+=`<li> ${content}</li>`
    } 
    else {
        errors.textContent=new Error("enter the data")
    }
})