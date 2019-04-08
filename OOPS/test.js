var Person = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  Person.prototype.fullName = function() {
    return this.firstName + " " + this.lastName
  }
  
  var grayson = new Person("Grayson", "Arthur");
  console.log(grayson.firstName);
  // => "Grayson"
  
  var warner  = new Person("Warner", "Constable");
  console.log(warner.fullName());
  // => "Warner Constable"


  