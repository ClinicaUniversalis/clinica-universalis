const { connect, connection } = require('mongoose');

connect('mongodb://localhost/clinicauniversalis', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
