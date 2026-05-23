//asychrounous function
async function hello(){
    console.log("hello");
}

function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
           console.log("weather data"); 
           resolve(200);
        }, 2000);
    })
}
async function getdata(){
    await api();
    await api();
}
function getData(dataId){
    
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data=",dataId);
         resolve(200);
         },2000);   
    });
}
async function getAllData() {
    console.log("geting data 1...");
    await getData(1);
    console.log("geting data 2...");
    await getData(2);
    console.log("geting data 3...");
    await getData(3);
    
}


(async function getAllData() {
    console.log("geting data 1...");
    await getData(1);
    console.log("geting data 2...");
    await getData(2);
    console.log("geting data 3...");
    await getData(3);
    
})()





//Promise-chain
console.log("geting data 1...");
getData(1).
    then((res)=>{
        console.log("geting data 2...");
        return getData(2);
    })
    then((res)=>{
        console.log("geting data 3...");
        return getData(3);
    })
    then((res)=>{
        console.log(res);
    })


// callback hell
getData(1,()=>{
    console.log("geting data 2...");
    getData(2,()=>{
        console.log("geting data 3...");
        getData(3,()=>{
            console.log("geting data 4...");
            getData(4);
        });
    });
});

