var person =function(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}
person.prototype.fullName=function(){
    return this.firstName+" "+this.lastName;
}
var new_1= new person("Hermione","Granger");
console.log(new_1.firstName); 

var new_2 = new person("Ronald","Weasley");
console.log(new_2.fullName());