module.exports={
    name:"Harry Potter",
    sayHi(){
        console.log(`Hi ${this.name}`);
    }
}
console.log(this.name);