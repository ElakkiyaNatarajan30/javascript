let recipeObj = {

    title: "Tomato Pasta",

    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",

    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let a=document.getElementById("card");
let t=document.getElementById("const");

let d=document.getElementById("ulid");

let h=document.createElement("h1");
h.textContent=recipeObj.title;
a.appendChild(h);

let im=document.createElement("img");
im.src=recipeObj.imgSrc;
im.style.width="30%";
a.appendChild(im);

let st=recipeObj.ingredients;
for (let i of st){

let ing=document.createElement("li");
ing.textContent=i;
d.appendChild(ing);
}
a.style.color="red";
d.style.backgroundColor="skyblue";
d.style.width="270px";
t.style.marginLeft="400px";
d.style.marginTop="10px";





