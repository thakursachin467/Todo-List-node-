var mongoose = require('mongoose');


var schema = mongoose.Schema;

var todos = new schema ({

      username :String,
      todo:String,
      isDone :Boolean,
      hasAttachment :Boolean

    },
    {
    autoIndexId: true
  }
  );

    var Todos= mongoose.model('Todos',todos);

    module.exports =Todos;
