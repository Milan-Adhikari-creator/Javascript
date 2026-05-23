modebutton=document.querySelector("#mode");
let currmode="light";
body=document.querySelector("body"); 
// modebutton.addEventListener("click",()=>{
//     if(currmode=="light"){
//         currmode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }
//     else{
//         currmode="light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(currmode);
// })

modebutton.addEventListener("click", () => {
  if (currmode === "light") {
    currmode = "dark";
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    currmode = "light";
    body.classList.remove("dark");
    body.classList.add("light");
  }

  console.log(currmode);
});