const handlerController = require("./handlerController");
const Order = require("../models/orderModel");
const User = require("../models/userModel");
const catchErrorAsync = require("../utility/catchErrorAsync");
const AppError = require("../utility/appError");

class OrderController {
  getAllOrder(req, res, next) {
    handlerController.getAllData(req, res, next, Order);
  }
  getOneOrder(req, res, next) {
    handlerController.getOneData(req, res, next, Order);
  }
  createOrder = catchErrorAsync(async (req, res, next) => {
    const user = await User.findOne({ chat_id: req.headers.chat_id });
    const orders = await Order.findById(user.order_list);
    // console.log(orders);
    const data = {
      foods: req.body.order,
      order_time: Date.now(),
    };
    const newArr = orders.orders_list;
    newArr.push(data);
    // console.log(newArr);
    const newOrder = await Order.findByIdAndUpdate(user.order_list, {
      order_list: newArr,
    });
    res.status(201).json({
      status: "Success",
      message: "Order saved",
      body: newOrder,
    });
  });

  updateOrder(req, res, next) {
    handlerController.updateData(req, res, next, Order);
  }
  deleteOrder(req, res, next) {
    handlerController.deleteData(req, res, next, Order);
  }
}

module.exports = new OrderController();
