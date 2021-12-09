const bcrypt = require("bcryptjs");
const usersRouter = require("express").Router();
const User1 = require("../models/user1");

usersRouter.post("/", async (request, response) => {
  const body = request.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const user = new User1({
    username: body.username,
    name: body.name,
    passwordHash,
  });

  const savedUser = await user.save();

  response.json(savedUser);
});

usersRouter.get("/", async (request, response) => {
  const users = await User1.find({}).populate("notes", { content: 1, date: 1 });

  response.json(users.map((u) => u.toJSON()));
});

module.exports = usersRouter;
