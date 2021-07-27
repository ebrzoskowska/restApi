const { Router } = require("express");
const {createUser} = require("../controllers/user.controllers");
const userRouter = Router();

userRouter.post("/users", createUser);
userRouter.get("/user", getOneUser); //http://localhost:5000/users/Emcia

module.exports = userRouter;