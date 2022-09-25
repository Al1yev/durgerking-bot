const router = require("express").Router();
const orderController = require("../controllers/orderController");

router
  .route("/")
  .get(orderController.getAllOrder)
  .post(orderController.createOrder);

router
  .route("/:id")
  .get(orderController.getOneOrder)
  .put(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = router;
