class Person{
    constructor(){
        console.log("Enter parent constructor");
        this.species="homo sapiens";
        console.log("Exit parent constructor");
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}
class Doctor extends Person{
    works(){
        console.log("treat the patient");
    }
}
class Engineer extends Person{
    constructor(branch){
        console.log("Enter child constructor");
        super(); // to invoke parent class constructor
        this.branch=branch
        console.log("Exit child constructor");
    }
    
    works(){
        super.eat();
        console.log("Solve the problems.");
    }
}
// let Prabesh=new Doctor();
let Binaya= new Engineer("Civil");