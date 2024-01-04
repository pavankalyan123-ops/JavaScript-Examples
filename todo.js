let input=document.getElementById("input");
let addbtn=document.getElementById("addbtn");
let todo=document.getElementById("todo");

addbtn.addEventListener("click",function(){
    todo.innerHTML+=`<div>${input.value} <button class="del">Delete</button></div>`;
    let del=document.querySelectorAll(".del");
    for(let i=0;i<del.length;i++)
    {
        del[i].onclick=function(){
            this.parentNode.remove();
        }
    }
    input.value=""
})