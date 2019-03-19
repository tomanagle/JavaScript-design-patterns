import { myFactory } from '../factory';

describe('Factory creational pattern', () => {
  it('should concatenate the name', () => {
    expect.assertions(1);
    const firstName = 'Jared';
    const lastName = 'Patakian';
    const email = 'j.patakian@example.com';

    // Person === the object literal returned by the factory
    const person = myFactory({
      firstName,
      lastName,
      email
    });

    expect(person.name).toBe(firstName + ' ' + lastName);
  });

  it('should return an introduction statement', () => {
    expect.assertions(1);
    const firstName = 'Jared';
    const lastName = 'Patakian';
    const email = 'j.patakian@example.com';

    // Person === the object literal returned by the factory
    const person = myFactory({
      firstName,
      lastName,
      email
    });

    expect(person.introduction).toBe(
      `Hello! My name is ${firstName} and my email address is ${email}`
    );
  });
});
