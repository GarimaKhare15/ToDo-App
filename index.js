const PORT = 4000;
const express = require('express');
const app = express();
const Task = require('./models/taskList');
const database = require('./config/mongoose');
//setting ejs as view engine
app.set('view engine', 'ejs');
app.set('views','./views');

//middleware

/*tasks = [
    {
        description:"abcd",
        dueDate: '2017',
        category: 'personal'
    },
    {
        description:"abcdefg",
        dueDate: '2019',
        category: 'personal'
    }
]
*/

app.use(express.urlencoded({ extended:true}));
app.use(express.static('public'));
app.get('/', function(req, res){
    Task.find({}, function(err,task){
                 if(err){
                     console.log("Error tasks")
                    return;
                }
                 return res.render('app',{Tasks : task})
             })
});

app.post('/addTask',function(req,res){
    Task.create({
        description: req.body.description,
        dueDate: req.body.dueDate,
        category: req.body.category
    },function(err,newTask){
        if(err){
            console.log('Error in adding task: ' + err.message);
            return;
        }
        console.log(req.body);
        return res.redirect('back');
    })
})

app.listen(PORT, function(err) {
    if(err){
        console.log(err);
        return;
    }
    console.log('listening on port', PORT);
})