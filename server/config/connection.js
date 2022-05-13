const { connect, connection } = require('mongoose');

connect(
  process.env.MONGODB_URI || 'mongodb+srv://clinicauniversalis:cuDBconnection@cucluster01.5qwoq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = connection;
