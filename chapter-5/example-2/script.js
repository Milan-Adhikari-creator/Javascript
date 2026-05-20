arr=[11,16,87,45,67,34];
newarray=arr.map((value)=>{
    return value*2;
})
console.log(newarray);

newArray=arr.filter((value)=>{
    return value%2===0;
})

const output=arr.reduce((res,cur)=>{
    return res+cur;     
});
console.log(output);

const secondOutput=arr.reduce((res,cur)=>{
    return res>cur?res:cur     
});
console.log(secondOutput);
