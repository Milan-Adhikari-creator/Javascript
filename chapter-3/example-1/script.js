// calcuate to sum of 0 to 5 
// let sum=0;
// for(let i=1;i<=5;i++){
//     sum=sum+i;
// }
// console.log("Sum of 0 to 5 is",sum);


// let i=1;
// while(i<=5){
//     console.log("i=",i);
//     i++;
// }

// let i=20;
// do{
//     console.log("Milan Adhikari");
//     i++; 
// }
// while(i<=10);
let size=0;
let str="Javascript";
for(let val of str){
    console.log("i=",val);
    size++;
}
console.log("size of string is",size);


let student={
    name:"Rahul Kumar",
    age:24,
    CGPA:7.5,
    isPass:true
};
for(let key in student){
    console.log("key=",key,"value=",student[key]);
}