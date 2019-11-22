const fakeTasker = {
  store: {
    global: { INTERRUPT: "priority" },
    local: {}
  },
  global: a1 => {
    console.log(`global: ${a1}`);
    return fakeTasker.store.global[a1];
  },
  setGlobal: (key, value) => {
    console.log(`setGlobal: ${key}, ${value}`);
    fakeTasker.store.global[key] = value;
  },
  performTask: (taskName, priority, arg1, arg2) => {
    console.log(`performTask: ${taskName}, ${priority}, ${arg1}, ${arg2}`);
  },
  destroyScene: a1 => {
    console.log(`destroyScene: ${a1}`);
  },
  flash: a1 => {
    alert(a1);
  }
};

export default fakeTasker;
