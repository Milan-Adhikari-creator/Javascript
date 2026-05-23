let here = document.querySelector("#here");
here.onclick =()=>{
     
     a=1;
     console.log(`button was clicked `);
     
}
// here.onclick =(evt)=>{
//      console.log(evt); 
//      console.log(evt.type); 
//      console.log(evt.target); 
//      console.log(evt.clientX ,evt.clientY); 
// }

here.addEventListener("click" , ()=>{
    console.log("button1 is clicked");
})
here.addEventListener("click" , ()=>{
    console.log("button1 is clicked-handler");
})