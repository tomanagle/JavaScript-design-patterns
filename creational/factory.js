// A fctory returns an object without using the new keyword
export const myFactory = ({ firstName, lastName, email }) => {
  return {
    name: `${firstName} ${lastName}`,
    introduction: `Hello! My name is ${firstName} and my email address is ${email}`
  };
};
