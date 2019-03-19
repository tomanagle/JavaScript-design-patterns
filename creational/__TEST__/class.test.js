import { Cyborg } from '../class';

describe('Class creational pattern', () => {
  it('should be able to use a method from the abstract class', () => {
    expect.assertions(2);
    const firstName = 'Jared';
    const lastName = 'Patakian';
    const email = 'j.patakian@example.com';

    const Jared = new Cyborg({
      firstName,
      lastName,
      email
    });

    expect(Jared.sayHello).toBeDefined();
    expect(Jared.sayHello()).toBe(`Hello my name is ${firstName}`);

    Jared.sayHello();
    Jared.sayEmail();
  });

  it('should be able to use a method from the extended class', () => {
    expect.assertions(2);
    const firstName = 'Jared';
    const lastName = 'Patakian';
    const email = 'j.patakian@example.com';

    const Jared = new Cyborg({
      firstName,
      lastName,
      email
    });
    expect(Jared.sayEmail).toBeDefined();
    expect(Jared.sayEmail()).toBe(`My email address is ${email}`);
  });
});
