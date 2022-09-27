const handlerController = require("./handlerController");
const User = require("../models/userModel");
const catchErrorAsync = require("../utility/catchErrorAsync");
const AppError = require("../utility/appError");

class UserController {
  getAllUser(req, res, next) {
    handlerController.getAllData(req, res, next, User);
  }
  getOneUser(req, res, next) {
    handlerController.getOneData(req, res, next, User);
  }
  createUser = catchErrorAsync(async (req, res, next) => {
    const user = await User.findOne({ chat_id: req.body.chat_id });
    if (user) return next("User already registered!");
    console.log(user);
    handlerController.createData(req, res, next, User);
  });
  updateUser(req, res, next) {
    handlerController.updateData(req, res, next, User);
  }
  deleteUser(req, res, next) {
    handlerController.deleteData(req, res, next, User);
  }
}

module.exports = new UserController();
