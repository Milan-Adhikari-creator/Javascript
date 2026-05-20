// Conditional Statement
let  age=14;
console.log("age=",age);
if(age>=18){
    console.log("You can vote");
}
else{
    console.log("You cannot vote");
}

let mode="dark";
let color;
if(mode=="dark"){
    color="black";
}
else{
    color="white";
}
console.log("backgroundcolor=",color);

let x=11 ;
if(x%2===0){
    console.log(x, "is even number");
}
else{
    console.log(x, "is odd number");
}


mode="dark";
if(mode=="dark"){
    color="black";
}
else if(mode="blue"){
    color="blue";
}
else if(color="pink"){
    color="pink";
}
else{
    color="white";
}
console.log("backgroundcolor=",color);


// Ternary operator

age= 25;
result=age>18 ? "adult":"not adult";//simpler compact if-else statement.
console.log(result);

age>18 ? console.log("adult"):console.log("not adult");

