// const jwt = require('jsonwebtoken')

// const Blog = require('../models/blog')

// const createBlog = async (blogData) => {
//     try {
//         const data = new Blog(data);
//         await blog.save();
//         console.log('Blog added:', blog);
//         res.send({msg: 'blog created', blog: blog})
//     } catch (e) {
//         res.send({msg: 'could not create blog', error: e})
//     }
// };



// controllers/blog.js

const Blog = require('../models/blog');
const createBlog = async (req, res) => {
    const { title, description, user } = req.body;

    // if (!title || !description || !user) {
    //     return res.status(400).json({ message: 'All fields are required' });
    // }

    try {
        const newBlog = new Blog({
            title,
            description,
            user
        });

        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);
    } catch (error) {
        res.status(500).json({ message: 'Error creating blog', error });
    }
};

module.exports = { createBlog };
