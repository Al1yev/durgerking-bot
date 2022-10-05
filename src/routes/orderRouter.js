const router = require("express").Router();
const orderController = require("../controllers/orderController");
const { checkRole } = require("../controllers/adminController");

router
  .route("/")
  .get(checkRole, orderController.getAllOrder)
  .post(checkRole, orderController.createOrder);

router
  .route("/:id")
  .get(checkRole, orderController.getOneOrder)
  .put(checkRole, orderController.updateOrder)
  .delete(checkRole, orderController.deleteOrder);

module.exports = router;
