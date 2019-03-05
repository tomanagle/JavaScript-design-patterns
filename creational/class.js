class Person {
  constructor({ firstName, lastName, email }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.name = this.firstName + ' ' + this.lastName;
  }

  sayHello() {
    return console.log(`Hello my name is ${this.firstName}`);
  }

  // return this; - The constructor pattern returns this implicitly. There is no need to return it explicitly here.
}

class Cyborg extends Person {
  constructor(props) {
    super(props);
  }

  // Extend the functionality of Person without having to add to the Person prototype
  sayEmail() {
    return console.log(`My email address is ${this.email}`);
  }
}

const Jared = new Cyborg({
  firstName: 'Jared',
  lastName: 'Patakian',
  email: 'j.patakian@example.com'
});

Jared.sayHello();
Jared.sayEmail();
