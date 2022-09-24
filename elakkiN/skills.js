let skillList = [{
    skillName: "HTML",
    uniqueNo: 1,
},
{
    skillName: "CSS",
    uniqueNo: 2,
},
{
    skillName: "JavaScript",
    uniqueNo: 3,
}
];
let le=document.getElementById("ulid");
function lab(labid)
{
    let a=document.getElementById("labid");
    a.classList.toggle("selected");
}
function box(skill);
{
    let c="checkbox"+skill.uniqueNo;
    let li="label"+skill.uniqueNo;
    let ab=document.createElement("li");
}
le.appendChild(ab);
let i=document.createElement("input");
i.type="checkbox";
i.id="input";
le.appendChild(i);