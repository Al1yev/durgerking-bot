const router = require("express").Router();
const userController = require("../controllers/userController");
const { checkRole } = require("../controllers/adminController");

router.route("/getUserOrder").get(userController.getUserOrders);

router
  .route("/")
  .get(checkRole, userController.getAllUser)
  .post(checkRole, userController.createUser);

router
  .route("/:id")
  .get(checkRole, userController.getOneUser)
  .put(checkRole, userController.updateUser)
  .delete(checkRole, userController.deleteUser);

module.exports = router;
