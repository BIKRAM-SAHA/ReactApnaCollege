import Computer from './Computer.js'       //default import

export class Macbook extends Computer{      //named export
    constructor(name, company){
        super(name)
        this.company=company
    }
    logIn(){
        console.log("You are logged into a Macbook "+ this.name)
    }
}