const handlerController = require("./handlerController");
const Order = require("../models/orderModel");

class OrderController {
  getAllOrder(req, res, next) {
    handlerController.getAllData(req, res, next, Order);
  }
  getOneOrder(req, res, next) {
    handlerController.getOneData(req, res, next, Order);
  }
  createOrder(req, res, next) {
    handlerController.createData(req, res, next, Order);
  }
  updateOrder(req, res, next) {
    handlerController.updateData(req, res, next, Order);
  }
  deleteOrder(req, res, next) {
    handlerController.deleteData(req, res, next, Order);
  }
}

module.exports = new OrderController();
