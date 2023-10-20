const mongoose = require('mongoose');

const url = "mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/mydatabase?retryWrites=true&w=majority";

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});