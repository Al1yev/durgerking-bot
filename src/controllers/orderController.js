const handlerController = require("./handlerController");
const Order = require("../models/orderModel");
const User = require("../models/userModel");
const catchErrorAsync = require("../utility/catchErrorAsync");

class OrderController {
  getAllOrder(req, res, next) {
    handlerController.getAllData(req, res, next, Order);
  }
  getOneOrder(req, res, next) {
    handlerController.getOneData(req, res, next, Order);
  }
  createOrder = catchErrorAsync(async (req, res, next) => {
    const user = await User.findOne({ chat_id: req.body.chat_id });
    const data = {
      from: user._id,
    };
  });

  updateOrder(req, res, next) {
    handlerController.updateData(req, res, next, Order);
  }
  deleteOrder(req, res, next) {
    handlerController.deleteData(req, res, next, Order);
  }
}

module.exports = new OrderController();
