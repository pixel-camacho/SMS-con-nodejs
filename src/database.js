const mongoose = require('mongoose');

mongoose.connect('mongoose://localhost/smsdb',{
    useNewUrlParser: true

}).then(db => console.log('DB is connected'))
  .catch(error => console.log(error));
