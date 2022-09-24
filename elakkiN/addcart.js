let a=document.getElementById("aa");
let b=document.getElementById("ulid");
let c=document.getElementById("btn");
c.classList.add("bg-primary");
function addcart()
{
    
    let list=document.createElement("li");
    list.textContent=a.value;
    a.value="";
    b.appendChild(list);
    
}