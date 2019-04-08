var person = {
    firstName:"Harry",
    lastName:"Potter",
    fullName:function(){
        return this.firstName+" "+this.lastName;
    }
}
console.log(person.fullName());


