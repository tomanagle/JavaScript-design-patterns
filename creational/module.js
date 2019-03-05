const MyModule = (function() {
  // Private methods are not accessable outside of the module
  const _privateMethod = function() {
    console.log("Hello! I'm a private method");
    return _private * 2;
  };

  // locally scoped variable
  let _private = 0;

  return {
    get: function() {
      return private;
    },
    getDouble: function() {
      return _privateMethod();
    },
    set: function(input) {
      private = input;
    }
  };
})();

// Private methods is not available outside the module
// MyModule.privateMethod();

console.log(`The private variable is ${MyModule.get()}`);

MyModule.set(20);

console.log(`The private variable has been set to ${MyModule.get()}`);

console.log(
  `Use the private method with a getter and you'll get back ${MyModule.getDouble()}`
);
