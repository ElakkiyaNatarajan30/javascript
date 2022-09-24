let a=document.getElementById("card");
let profileDetails = 
{
    imgsrc:"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",

    name:"Ravi",

    age:"age:25"
};

let b=document.getElementById("imgid");
b.src=profileDetails.imgsrc;
a.appendChild(b);
  
let g=document.createElement("h1");
g.textContent=profileDetails.name;
a.appendChild(g);


let d=document.createElement("h1");
d.textContent=profileDetails.age;
a.appendChild(d);
a.style.backgroundColor="violet";
a.style.marginRight="300px";
a.style.marginLeft="300px";
a.style.height="800px";
a.style.width="800px";
a.style.textAlign="center";
a.style.marginTop="50px";
a.style.marginBottom="50px";
a.style.color="white";
