export default class EventEmitter {
  listeners = [];
  addListener = listener => {
    this.listeners.push(listener);
    // return the removeListener function
  
    return () => {
        const idx = this.listeners.indexOf(listener);
        if (idx > -1) {
            this.listeners.splice(idx, 1); // warning must be called to avoid memory leak
        }
    }
  };
  trigger = message => {
    for (const k in this.listeners) {
      this.listeners[k](message);
    }
  };
}
