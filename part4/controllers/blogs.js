const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const User = require("../models/user");

blogsRouter.get("/", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

blogsRouter.get("/:id", (request, response, next) => {
  Blog.findById(request.params.id)
    .then((blog) => {
      if (blog) {
        response.json(blog);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

blogsRouter.post("/", async (request, response, next) => {
  const body = request.body;

  const user = await User.findById(body.userId);
  const note = new Blog({
    title: body.title,
    url: body.url,
    likes: body.likes,
    user: user.id,
  });

  const savedNote = await note.save();
  user.blogs = user.blogs.concat(savedNote._id);
  await user.save();
  response.json(savedNote);
});

// blogsRouter.delete("/:id", (request, response, next) => {
//   Note.findByIdAndRemove(request.params.id)
//     .then(() => {
//       response.status(204).end();
//     })
//     .catch((error) => next(error));
// });

// blogsRouter.put("/:id", (request, response, next) => {
//   const body = request.body;

//   const note = {
//     content: body.content,
//     important: body.important,
//   };

//   Note.findByIdAndUpdate(request.params.id, note, { new: true })
//     .then((updatedNote) => {
//       response.json(updatedNote);
//     })
//     .catch((error) => next(error));
// });

module.exports = blogsRouter;

// const blogsRouter = require("express").Router();
// const Blog = require("../models/blog");
// const middleware = require("../utils/middleware");

// /*const getTokenFrom = request => {
//   const authorization = request.get('authorization')
//   if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
//     return authorization.substring(7)
//   }
//   return null
// }*/

// blogsRouter.get("/", async (request, response) => {
//   const blogs = await Blog.find({}).populate("author", {
//     username: 1,
//     name: 1,
//   });
//   response.json(blogs);
// });

// blogsRouter.post("/", middleware.userExtractor, async (request, response) => {
//   const body = request.body;

//   if (!body.title || !body.url) {
//     response.status(400).end();
//     return;
//   }

//   const blog = new Blog({
//     title: body.title,
//     author: request.user._id,
//     url: body.url,
//     likes: body.likes || 0,
//   });

//   const savedBlog = await blog.save();
//   request.user.blogs = request.user.blogs.concat(savedBlog._id);
//   await request.user.save();

//   response.status(201).json(savedBlog);
// });

// blogsRouter.delete(
//   "/:id",
//   middleware.userExtractor,
//   async (request, response) => {
//     const blogToDelete = await Blog.findById(request.params.id);

//     if (blogToDelete.author.toString() === request.user._id.toString()) {
//       await Blog.findByIdAndRemove(request.params.id);
//       return response.status(204).end();
//     } else {
//       return response.status(401).json({
//         error: "Invalid token. Only original creator may delete post",
//       });
//     }
//   }
// );

// blogsRouter.put("/:id", async (request, response) => {
//   const blog = { ...request.body };
//   const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, {
//     new: true,
//   });
//   response.json(updatedBlog);
// });

// module.exports = blogsRouter;
