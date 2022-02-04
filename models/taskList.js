const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
 
    description:{
        type: 'string',
       // required: true
    },
    dueDate:{
        type:'string',
        required: true
    },
    category: {
        type:'string',
        required: true
    }
});

const Task = mongoose.model('Task',taskSchema);

module.exports = Task;
