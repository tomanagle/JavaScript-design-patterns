const { ComputerFacade } = require('../facade');

describe('facade structural pattern', () => {
  it('should call all the methods', () => {
    global.console = { log: jest.fn() };

    const computer = new ComputerFacade();

    computer.start();

    expect(console.log.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "Starting CPU",
        ],
        Array [
          "Starting RAM",
        ],
        Array [
          "Starting PSU",
        ],
      ]
    `);

    computer.shutdown();

    expect(console.log.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "Starting CPU",
        ],
        Array [
          "Starting RAM",
        ],
        Array [
          "Starting PSU",
        ],
        Array [
          "Shutting down CPU",
        ],
        Array [
          "Shutting down RAM",
        ],
        Array [
          "Shutting down PSU",
        ],
      ]
    `);
  });
});
