
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("User name=" + this.name);
        console.log("Email=" + this.email);
    }
}
let student1= new user("Ramesh","ramesh@123");
let student2= new user("Ram","ram@123");
