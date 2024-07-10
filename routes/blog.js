// // const express = require('express');
// // const router = express.Router();
// // const createBlog = require('../controller/blog')
// // const jwt = require('jsonwebtoken')

// // router.post('/createBlog', (req, res) => {
// //     res.send('Create Blog...')
// // })

// // router.get('/getAllBlogs', (req, res) => {
// //     res.send('All blog')
// })

// router.post('/addblogs', (req,res) =>{
//     res.send("blogs added");
// })




// const createToken = (user) => {
//     return jwt.blog({ title: blog._title, description: blog._description, time: blog._time, user: blog._user }, 'your_jwt_secret', {
//         expiresIn: 'none',
//     });
// };

// module.exports = router;



// routes/blog.js
// const express = require('express');
// const router = express.Router();
// const { createBlog } = require('../controllers/blog');
// const jwt = require('jsonwebtoken');

// router.get('/createBlog', (req, res) => {
//     res.send('Create Blog...');
// });

// router.get('/getAllBlogs', (req, res) => {
//     res.send('All blog');
// });

// router.post('/addblogs', createBlog);

// const createToken = (blog) => {
//     return jwt.sign({ title: blog.title, description: blog.description, time: blog.time, user: blog.user }, 'your_jwt_secret', {
//         expiresIn: 'none',
//             });
//         };

//         module.exports = router;






// const express = require('express');
// const router = express.Router();
// const Blog = require('../models/blog');
// const { createBlog } = require('../controller/blog');
// const jwt = require('jsonwebtoken');


// router.get('/getAllBlogs', (req, res) => {
//     try {
//         const blogs = await Blog.find();
//         res.json(blogs);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
//     res.send('All blog');
// });

// router.post('/addblogs', async (req, res) => {
//     console.log('Received request body:', req.body); // Log request body

//     const { title, description, time, user } = req.body;

//     const blog = new Blog({
//         title,
//         description,
//         time,
//         user
//     });

//     try {
//         const savedBlog = await blog.save();
//         console.log('Blog saved:', savedBlog); // Log saved blog
//         res.status(201).json(savedBlog);
//     } catch (err) {
//         console.error('Error saving blog:', err); // Log error
//         res.status(400).json({ message: err.message });
//     }
// });

// module.exports = router;




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



