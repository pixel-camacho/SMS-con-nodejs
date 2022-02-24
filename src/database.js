const mongoose = require('mongoose');

mongoose.connect('database',{
    useNewUrlParser: true,
    useUnifiedTopology: true 

}).then(db => console.log('DB is connected'))
  .catch(error => console.log(error));
