function getData(dataId ,getNextData)
{ //2s
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData()){
            getNextData();
        }
    },2000);
}
//callback hell  
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4)

        });
    });
});