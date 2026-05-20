// let sum=0;
// let marks=[85,97,44,37,76,60];
// for(let val of marks){
//     sum=sum+val;
// }
// average=sum/marks.length;
// console.log("sum=",sum);
// console.log("average=",average);


let items=[250,645,300,900,50];
for(let val of items){
    val=val-val/10;
    console.log(val);
}
console.log(items);
items.push(100);
console.log(items.toString());

console.log(items.slice(1,4));

let arr=[1,2,3,4,5,6,7,8];
// console.log(arr.splice(2,3,9,10,));

//slice
console.log(arr.unshift(1))