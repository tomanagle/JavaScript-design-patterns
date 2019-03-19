class Observable {
  constructor() {
    this.subscribers = [];

    this.broadcast = cb => {
      // Send the message to all the subscibers
      for (let i = 0; i < this.subscribers.length; i += 1) {}
    };
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

  notify(cb) {
    this.broadcast(cb);
  }
}
