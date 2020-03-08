const express= require('express');
const app = express();
const mongoose =require('mongoose');
const bodyParser= require('body-parser');
var multer = require('multer');
var uploads = multer({ dest: 'uploads/' })
const postsRoute = require('./routes/posts');

require('dotenv/config');
app.use(bodyParser.json());


//Import Routes
app.use('/posts',postsRoute);
app.post('/upload', uploads.any(), function(req,res){
    res.send(req.files);
});

//Routes
app.get('/',(req,res)=>{
res.send('We are on home'); 
});

mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true},()=>
    console.log('Connected to DB!!')
);

app.listen(3001);
