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
class Admin extends user{
    constructor(name,email){
        super(name. email);
    }
    editdata(){
        data="some new value";
    }
}
