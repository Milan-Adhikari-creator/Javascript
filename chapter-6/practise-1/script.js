let h2 =document.querySelector("h2");
h2.innerText=h2.innerHTML+" from  Milan Adhikari";
console.dir(h2.innerText);  

divs= document.querySelectorAll(".box");
let idx=1;
for(let div of divs){
    console.log(`value from ${idx}`);
    div.innerText=`value from ${idx}`;
    idx++
}