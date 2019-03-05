/* The singleton is the only instance of this object in the application */
const ConfigDetails = (function() {
  const _username = 'test@example.com';
  const _password = 'password123';

  return {
    get: function() {
      return { username: _username, password: _password };
    }
  };
})();

const details = ConfigDetails.get();

console.log(
  `The configuration details for the application are ${JSON.stringify(details)}`
);
