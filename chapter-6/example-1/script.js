console.dir(document.body);
console.log(document.body);
document.body.childNodes[1].innerText="Milan";

header=document.getElementById("heading");
console.dir(header);
let firstelements=document.querySelector("p");
console.dir(firstelements);
let allelements=document.querySelectorAll("p");
console.dir(allelements);

console.dir(document.body.firstChild);