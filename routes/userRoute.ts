const router = require("express").Router();
const userController = require("../controllers/userController");
const { checkAuth } = require("../middlewares/checkAuth");

router.get("/users", userController.getUsers);
router.get("/user/:id", userController.getUser);
router.post("/user", userController.createUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;
