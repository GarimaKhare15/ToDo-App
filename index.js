const PORT = 4000;
const express = require('express');
const app = express();

//setting ejs as view engine
app.set('view engine', 'ejs');
app.set('views','./views');

//middleware

tasks = [
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


app.use(express.urlencoded({ extended:true}));
app.use(express.static('public'));
app.get('/', function(req, res){
    return res.render('app',{tasks:tasks});
});

app.listen(PORT, function(err) {
    if(err){
        console.log(err);
        return;
    }
    console.log('listening on port', PORT);
})