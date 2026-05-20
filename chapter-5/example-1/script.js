function sum(a,b){
    return a+b;
}
x=sum(1,2);
console.log(x);

const arrowSum = (a,b) =>{
    return a+b;
};

printHello=() => {console.log("printHello");
};


// function vowelno(msg){
//     count=0;
//     for(const char of msg){
//         if(char==="a" ||
//            char==="e" ||
//            char==="i" ||
//            char==="o" ||
//            char==="u" 
//         )
//         count++;
    
//     };
//         console.log(`The number of vowel is ${count}`);

// }
// vowelno("aeiou");

vowelno=(msg)=>{
    count=0;
    for(const char of msg){
        if(char==="a" ||
           char==="e" ||
           char==="i" ||
           char==="o" ||
           char==="u" 
        )
        count++;

    }
    return count;
}


arr=[1,2,3,4,5,6];
// arr.forEach(val => {
//     console.log(val);
// });


arr.forEach(function printVal(val , idx, arr){
    console.log(val,idx,arr)
});

// to calculate the square of given array using the forEach
array=[1,2,3,4,5,6,7];
array.forEach( char=> {
    console.log(char*char);
});
let calcsquare=(num)=>{
    console.log(num*num) ;
}
array.forEach(calcsquare);

