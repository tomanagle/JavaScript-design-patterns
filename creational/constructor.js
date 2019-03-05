function Person({ firstName, lastName, email }) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.name = this.firstName + ' ' + this.lastName;

  this.sayHello = function() {
    return console.log(`Hello my name is ${this.firstName}`);
  };

  // return this; The constructor pattern returns this implicitly. There is no need to return it explicitly here.
}

const Bob = new Person({
  firstName: 'Bob',
  lastName: 'doe',
  email: 'test@example.com'
});

console.log(`Bob's full name is ${Bob.name}`);

Bob.sayHello();

// Extend Bob's functionality with JavaScript's prototype-based inheritance
Bob.__proto__.sayEmail = function() {
  return console.log(`My email address is ${this.email}`);
};

Bob.sayEmail();
