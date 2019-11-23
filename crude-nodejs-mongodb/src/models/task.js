const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
   titulo: String,
   album: String,
   genero: String,
   duracion:String,
   artista:String,
   año:String,
});

module.exports = mongoose.model('tasks', TaskSchema);