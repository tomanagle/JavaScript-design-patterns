// A fctory returns an object without using the new keyword
export const myFactory = ({ firstName, lastName, email }) => {
  return {
    name: `${firstName} ${lastName}`,
    introduction: `Hello! My name is ${firstName} and my email address is ${email}`
  };
};

// Person === the object literal returned by the factory
const person = myFactory({
  firstName: 'Jared',
  lastName: 'Patakian',
  email: 'j.patakian@example.com'
});

// Return the properties that were created inside the factory
console.log(person.name);
console.log(person.introduction);
