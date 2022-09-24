let a=document.getElementById("e1");
let b=document.getElementById("e2");
let c=document.getElementById("e3");
let d=document.getElementById("r1");
let e=document.getElementById("r2");
let f=document.getElementById("r3");

function stop()
{
a.style.backgroundColor="red";
b.style.backgroundColor="grey";
c.style.backgroundColor="grey";
d.style.backgroundColor="red";
e.style.backgroundColor="black";
f.style.backgroundColor="black";
}
function ready()
{
    a.style.backgroundColor="grey";
    b.style.backgroundColor="yellow";
    c.style.backgroundColor="grey";
    e.style.backgroundColor="yellow";
    d.style.backgroundColor="black";
    f.style.backgroundColor="black";
    
}
function go()
{
    a.style.backgroundColor="grey";
    b.style.backgroundColor="grey";
    c.style.backgroundColor="green";
    f.style.backgroundColor="green";
    e.style.backgroundColor="black";
    d.style.backgroundColor="black";
}