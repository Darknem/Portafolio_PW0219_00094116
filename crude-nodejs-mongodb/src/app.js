const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const debug = require('debug')('crude-nodejs-mongodb:database');
const app = express();

//Conect to database
mongoose.connect('mongodb+srv://moza:evanescence97@cluster0-htsku.mongodb.net/test?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true 
    })
    .then(() => {
      debug("success Connected to database")
    })
    .catch((err) => {
      debug(err);
      process.exit(1);
    });

//importing routes
const indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})) 

//routes
app.use('/', indexRoutes);

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
  });