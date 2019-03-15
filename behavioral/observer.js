class Observable {
  constructor() {
    this.subscribers = [];
  }

  subscribe(id) {
    // Add the id to the subscribers list
    return (this.subscribers = [...this.subscribers, id]);
  }

  unsubsccribe(id) {
    // Remove the id from th subscribers list
    return (this.subscribers = [
      ...this.subscribers.filter(item => item !== id)
    ]);
  }

  broadcast() {
    // Send the message to all the subscibers
    for (let i = 0; i < this.subscribers.length; i += 1) {
      console.log(`Broadcast to ${this.subscribers[i]}`);
    }
  }
}

const observer = new Observable();

console.log({ observer });
