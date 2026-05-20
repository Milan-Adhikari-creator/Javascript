// let arr=[76,98,46,87,97,91,69]
// let newArray=arr.filter((char)=>{
//     return (char>90);
// })
// console.log(newArray);


let n = prompt("Enter any number:");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

newArray=arr.reduce((res,cur)=>{
    return res+cur;
})
console.log(newArray);

factorial=arr.reduce((res,cur)=>{
    return res*cur;
})
console.log(factorial);