var obj={
    firstName:"Harry",
    sayHi:function(){
        setTimeout(()=>{
            console.log(`Hi iam ${this.firstName}`);
        },1000);
    }
}
console.log(obj);