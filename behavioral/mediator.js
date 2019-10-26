export class Mediator {
  constructor() {
    this.colleagues = [];
  }

  join(colleague) {
    this.colleagues = [...this.colleagues, colleague];
    colleague.chatroom = this;
  }

  sendMessage(message, from) {
    for (let i = 0; i < this.colleagues.length; i += 1) {
      this.colleagues[i].receiveMessage(message, from);
    }
  }
}

export class Colleague {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }
  sendMessage(message) {
    this.chatroom.sendMessage(message, this.name);
  }

  receiveMessage(message, from) {
    console.log(`${from}: ${message}`);
  }
}

const chatRoom = new Mediator();

const tom = new Colleague('Tom');
const jared = new Colleague('Jared');

chatRoom.join(tom);
chatRoom.join(jared);

tom.sendMessage('Hello!');
jared.sendMessage(`I'm a Cyborg!`);
