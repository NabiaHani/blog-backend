require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blog');

const app = express();

// BodyParser
app.use(bodyParser.json());

app.get('/', (req ,res) =>{
    console.log('Hello World');
})

// MongoDb Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

// Middleware to parse json bodies
app.use(express.json());
app.use('/blog', blogRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
module.exports = app;