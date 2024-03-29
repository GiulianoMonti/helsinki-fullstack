const bcrypt = require("bcryptjs");
const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.post("/", async (request, response) => {
  const body = request.body;

  const saltRounds = 10;
  const passwordHash =
    !body.password || body.password.length < 3
      ? false
      : await bcrypt.hash(body.password, saltRounds);

  if (!passwordHash)
    return response.status(401).json({ error: "Invalid password" }).end();

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  });

  const savedUser = await user.save();

  response.json(savedUser);
});
usersRouter.get("/", async (request, response) => {
  const users = await User.find({}).populate("blogs", {
    url: 1,
    title: 1,
    author: 1,
  });
  response.json(users);
});

module.exports = usersRouter;

// const bcrypt = require("bcryptjs");
// const usersRouter = require("express").Router();
// const User = require("../models/users");

// usersRouter.get("/", async (request, response) => {
//   const users = await User.find({}).populate("blogs", { author: 0 });
//   response.json(users);
// });

// usersRouter.post("/", async (request, response) => {
//   const body = request.body;

//   const saltRounds = 10;
//   const passwordHash = await bcrypt.hash(body.password, saltRounds);

//   const user = new User({
//     username: body.username,
//     name: body.name,
//     passwordHash,
//     // password: body.password,
//   });

//   const savedUser = await user.save();

//   response.json(savedUser);
// });

// module.exports = usersRouter;
