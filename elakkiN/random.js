let md=document.getElementById("card");
let btn=document.getElementById("b1");
let con=document.getElementById("const");
let a=document.getElementById("h2");

a.style.height="250px";
a.style.width="300px";
a.style.marginLeft="500px";
a.style.marginTop="300px";
a.style.textAlign="center";

md.style.height="50px";
md.style.marginTop="-100px";



function start()
{
    
}
btn.style.borderRadius="50px";
btn.style.paddingRight="10px";
btn.style.paddingLeft="10px";
btn.style.marginLeft="600px";
btn.style.backgroundColor="skyblue";
btn.style.marginBottom="180px";



con.style.height="250px";
con.style.width="350px";
con.style.marginLeft="485px";
con.style.borderRadius="10px";
con.style.marginTop="-150px";
md.appendChild(con);

function color()
{
    let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
    con.style.backgroundColor=bgColorsArray[Math.floor(Math.random() * bgColorsArray.length)];

}



