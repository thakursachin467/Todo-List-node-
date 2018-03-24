var Todos = require('../models/todomodels');
var bodyParser = require('body-parser');

 module.exports = function(app) {

   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({ extended: true }));


      app.get('/api/todos/:uname',function(req,res){

        Todos.find({username:req.params.uname},function(err,todos){

          if(err){
              res.send('error');

          }
          else {
            res.send(todos);

          }
        });

      });

        app.get('/api/todo/:id', function(req,res) {

            Todos.findById({_id:req.params.id},function(err,todos){
                if(err) {
                    res.send('error');
                }
                else {
                  res.send(todos)
                }

            });

        });

        app.post('/api/todo',function(req,res){
          res.send('done');
            if(req.body.id) {
              Todos.findByidAndUpdate(req.body.id, {
                todo:req.body.todo,isDone:req.body.isDone,hasAttachment:req.body.hasAttachment
              },function(err,todo){
                if(err) {
                    res.send('error');
                }
                else {
                  res.send('done');
                }
              });
            }
            else {
                var newTodo =Todos ({
                  username:'test',
                  todo :req.body.todo,
                  isDone: req.body.isDone,
                  hasAttachment:req.body.hasAttachment
                });
                newTodo.save(function(err){
                  if(err) {
                    res.send('error');
                  }
                  else {
                    res.send('done');
                  }
                });
            }

        });

        app.delete('/api/todo',function(req,res){

            Todos.findByidAndRemove(req.body.id,function(err) {
              if(err){
                res.send('error');
              }
              else {
                res.send('sucess');
              }
            });

        })

 }
