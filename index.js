const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 4000;
const userRoutes= require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
const homeRoutes = require('./routes/homeRoutes');

app.use(express.urlencoded({ extended: true }));





mongoose.connect('mongodb://127.0.0.1:27017/bloggingApp').then(() => {
console.log("Connected to the database");
}).catch(err => {
    console.error(err);
});



app.use('/user', userRoutes );
app.use('/blog', blogRoutes);
app.use('/home', homeRoutes);


app.listen(port, () => console.log(`App listening on port ${port}!`));
