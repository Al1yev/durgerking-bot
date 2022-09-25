const router = require("express").Router();
const userController = require("../controllers/userController");

router
  .route("/")
  .get(userController.getAllUser)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getOneUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
