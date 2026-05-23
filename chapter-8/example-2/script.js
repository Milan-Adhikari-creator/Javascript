class toyataCar{

    constructor(brand){
        console.log("creating new object");
        this.brand=brand;
        console.log(brand);
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setbrand(brand){
        this.brand=brand
    }
}
 let Fortuner = new toyataCar("Fortuner"); 
