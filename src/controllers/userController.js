const handlerController = require("./handlerController");
const User = require("../models/userModel");

class UserController {
  getAllUser(req, res, next) {
    handlerController.getAllData(req, res, next, User);
  }
  getOneUser(req, res, next) {
    handlerController.getOneData(req, res, next, User);
  }
  createUser(req, res, next) {
    handlerController.createData(req, res, next, User);
  }
  updateUser(req, res, next) {
    handlerController.updateData(req, res, next, User);
  }
  deleteUser(req, res, next) {
    handlerController.deleteData(req, res, next, User);
  }
}

module.exports = new UserController();
