const express = require("express");
const { signup, login, logout } = require("../controllers/UserAuthController");
const { addUser, changePassword } = require("../controllers/addUserController");
const UserAuthRouter = express.Router();

UserAuthRouter.post("/signup", signup);
UserAuthRouter.post("/login", login);
UserAuthRouter.post("/logout", logout);
UserAuthRouter.post("/adduser",addUser )
UserAuthRouter.post("/changePassword",changePassword)

module.exports = UserAuthRouter;
