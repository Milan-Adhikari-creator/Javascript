// let promise= new Promise((resolve,reject)=>{
//     console.log("I am promise");
//     // resolve("Sucessfull");
//     reject("errror occured");
// })

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data",dataId);
//         resolve("sucess");
//         if(getNextData){
//             getNextData();
//         }
//     },10000);    
//    });
// }
// const getPromise= () =>{
//     return new Promise((resolve, reject)=>{
//         console.log("Here is promise");
//         // resolve("Sucessfull"); 
//         reject("Network Error")
//     });
// }
 
// let promise=getPromise();
// promise.then((res)=>{
//      console.log("Promise fulfilled",res);
// });

// promise.catch((err) =>{
//     console.log("rejected",err);
// });


// function Asynfuction(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data entered:");
//             resolve("sucess")
//         },3000)
//     })
// }
// console.log("fetching data");
//  let p1=Asynfuction();
//  p1.then((res)=>{
//     console.log(res);
//  })

 function Asynfuction1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("sucess")
        },4000)
    })
}
 function Asynfuction2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("sucess")
        },4000)
    })
}
    console.log("fetching data1");
Asynfuction1().then(()=>{
    console.log("fetching data2");
    Asynfuction2().then(()=>{
    })
})