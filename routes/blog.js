const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

router.post('/addBlogs', async (req, res) => {
    console.log('Received request body:', req.body); // Log request body

    const { title, description, time, user } = req.body;

    const blog = new Blog({
        title,
        description,
        time,
        user
    });

    try {
        const savedBlog = await blog.save();
        console.log('Blog saved:', savedBlog); // Log saved blog
        res.status(201).json(savedBlog);
    } catch (err) {
        console.error('Error saving blog:', err); // Log error
        res.status(400).json({ message: err.message });
    }
});

router.get('/getAllBlogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    res.send('All blog');
});

module.exports = router;



