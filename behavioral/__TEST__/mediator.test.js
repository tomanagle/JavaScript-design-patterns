import { Mediator, Colleague } from '../mediator';

describe('mediator pattern', () => {
  describe('given a valid name', () => {
    const person = new Colleague('Tom');
    const personTwo = new Colleague('Jared');
    const room = new Mediator();

    it('should create a new colleague', () => {
      expect(person.name).toBe('Tom');

      expect(person.chatroom).toBe(null);
    });
    it('should be able to join a room', () => {
      room.join(person);

      expect(Array.isArray(room.colleagues)).toBe(true);

      expect(room.colleagues.filter(col => col.name === 'Tom').length).toBe(1);
    });

    it('should be able to send a message', () => {
      const spy = jest.spyOn(room, 'sendMessage');
      room.join(person);
      room.join(personTwo);

      person.sendMessage('Hello!');

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith('Hello!', 'Tom');
    });
  });
});
