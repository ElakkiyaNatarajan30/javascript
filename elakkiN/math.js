let s1=document.getElementById("fv");
let s2=document.getElementById("sv");
let i=document.getElementById("inpid");
let r=document.getElementById("gresult");
let bt1=document.getElementById("b1");
let bt2=document.getElementById("b2");
let s=document.getElementById("imgid");


s.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/sum-of-two-numbers-img.png";
s.id="imgid";
s.style.width="300px";



let sm="congratulations";
let trymsg="please try again!";

function start()
{
    let frv=Math.random()*100;
    let srv=Math.random()*100;
    s1.textContent=Math.ceil(frv);
    s2.textContent=Math.ceil(srv);
    i.textContent="";
    r.value="";
}
start();


function checkr(){
    let fri=parseInt(s1.textContent);
    let sri=parseInt(s2.textContent);
    let user=parseInt(i.value);
    

    let sumoftworandomintegers=fri+sri;
    if(user===sumoftworandomintegers){
        r.textContent=sm;
        r.style.backgroundColor="green"
        r.style.color="white";
    }
    else{
        r.textContent=trymsg;
        r.style.backgroundColor="blue"
        r.style.color="white";
}

}