const Person = function(name) {
  this.name = name;

  this.greet = function() {
    return console.log(`Hi! my name is ${this.name}`);
  };
};

// Create a decorator that gives the Persn object some extra functionality
const DecoratedPerson = function(person, email) {
  this.person = person;
  this.email = email;

  this.whatsYourEmail = function() {
    return console.log(`My email address is ${this.email}.`);
  };
};

// Initalise the first instance of the Person object
const peter = new Person('Peter');

peter.greet();

// Create a new object that wrapps the Person in the extra functionality
const decoratedPeter = new DecoratedPerson(peter, 'text@example.com');

decoratedPeter.whatsYourEmail();
