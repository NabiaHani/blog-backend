// models/Blog.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    user: {
        type: String,
        required: true,
        unique: true
    }
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;


