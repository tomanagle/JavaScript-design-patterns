import { Observerable } from '../observer';

describe('Observable design patters', () => {
  it('should be able to create a new instance of the observable', () => {
    expect.assertions(1);
    const observer = new Observerable();

    expect(observer).toBeInstanceOf(Observerable);
  });

  it('should add a function to the subscribers', () => {
    expect.assertions(1);
    const fn = () => {
      console.log(`Received data from the observer ${data}`);
    };
    const observer = new Observerable();

    observer.subscribe(fn);

    expect(observer.subscribers).toEqual(expect.arrayContaining([fn]));
  });

  it('should call the broadcast function', () => {
    expect.assertions(1);
    const fn = data => {
      console.log(`Received data from the observer ${data}`);
    };

    // Create a mock of the function so we can spy on it
    const mockFn = jest.fn(fn);
    const observer = new Observerable();

    observer.subscribe(mockFn);

    observer.broadcast('Broadcast message');

    // It should get called when we broadcast a message to the function
    expect(mockFn).toHaveBeenCalled();
  });
});
