console.log("one");
console.log("two");

setTimeout(()=>{
    console.log("Hi");
});
console.log("three");
console.log("four");

//callback function

function sum(a,b){
    console.log("Sum=",a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(5,2,sum);

const hello=()=>{
    console.log("hello");
};
setTimeout(hello,3000);