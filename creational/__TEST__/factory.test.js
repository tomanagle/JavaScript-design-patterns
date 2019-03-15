import { myFactory } from '../factory';

describe('Factory creational pattern', () => {
  it('should concatenate the name', () => {
    expect.assertions(1);
    const firstName = 'Jared';
    const lastName = 'Patakian';
    const email = 'j.patakian@example.com';
    const person = myFactory({
      firstName,
      lastName,
      email
    });

    expect(person.name).toBe(firstName + ' ' + lastName);
  });
});
