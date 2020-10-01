class CPU {
  start() {
    console.log('Starting CPU');
  }
  shutdown() {
    console.log('Shutting down CPU');
  }
}

class RAM {
  start() {
    console.log('Starting RAM');
  }
  shutdown() {
    console.log('Shutting down RAM');
  }
}

class PSU {
  start() {
    console.log('Starting PSU');
  }
  shutdown() {
    console.log('Shutting down PSU');
  }
}

export class ComputerFacade {
  constructor() {
    this.cpu = new CPU();
    this.ram = new RAM();
    this.psu = new PSU();
  }

  start() {
    this.cpu.start();
    this.ram.start();
    this.psu.start();
  }

  shutdown() {
    this.cpu.shutdown();
    this.ram.shutdown();
    this.psu.shutdown();
  }
}
