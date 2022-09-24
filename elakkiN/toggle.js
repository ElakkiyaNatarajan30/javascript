let a=document.getElementById("card");
a.classList.add("text-center","bg-info","p-5");
let b=document.createElement("input");
b.type="checkbox";
b.id="inpid";
a.appendChild(b);
let l=document.createElement("label");
l.setAttribute("for","label");
l.textContent="I am a label";
l.style.color="black";
l.id="lid";
a.appendChild(l);
let i=0;
b.onclick=function(){
    if(i%2==0)
    {
        lid.style.textDecoration="line-through";
    }
    else{
        lid.style.textDecoration="none";
    }
    i=i+1;

};
