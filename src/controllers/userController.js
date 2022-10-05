const handlerController = require("./handlerController");
const User = require("../models/userModel");
const Order = require("../models/orderModel");
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
    let user = await User.findOne({ chat_id: req.headers.chat_id });
    if (user) return next("User already registered!");

    user = await User.create(req.body);
    if (!user) return next(new AppError(`User is not created !`));

    const order_list = await Order.create({
      user_id: user._id,
      order_list: [],
    });

    if (!order_list)
      return next(new AppError(`User's order_list is not created !`));

    user = await User.findByIdAndUpdate(
      { _id: user._id },
      { order_list: order_list._id }
    );
    console.log(user);

    res.status(201).json({
      status: "Success",
      message: "User created",
      body: user,
    });
  });

  updateUser(req, res, next) {
    handlerController.updateData(req, res, next, User);
  }

  deleteUser(req, res, next) {
    handlerController.deleteData(req, res, next, User);
  }

  getUserOrders = catchErrorAsync(async (req, res, next) => {
    const user = await User.findOne({ chat_id: req.headers.chat_id });
    if (!user) return next(new AppError("User not found!", 404));

    const orderList = await Order.findById(user.order_list);
    if (!orderList)
      return next(new AppError("This user's order list not found ", 404));

    res.status(200).json({
      status: "Success",
      body: orderList,
    });
  });
}

module.exports = new UserController();
