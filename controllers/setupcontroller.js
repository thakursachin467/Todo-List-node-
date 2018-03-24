var Todos =require('../models/todomodels');


module.exports = function(app) {

     app.get('/api/setupTodos',function(req, res) {

          var starterTodos = [
              {
                username :'test',
                todo :'buy something',
                isDone :false,
                hasAttachment:false,




              },
              {
                username :'test',
                todo :'buy something 1',
                isDone :false,
                hasAttachment:false,

              },
              {
                username :'test',
                todo :'buy something 2',
                isDone :false,
                hasAttachment:false,

              }

            ];
            console.log(starterTodos);

            Todos.create(starterTodos,function(err,result){
              res.send(result);
            });

     });


}
