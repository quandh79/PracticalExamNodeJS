const express = require("express");
let router = express.Router();
let userController = require("../controllers/user.controller");
router.get("/",userController.get);
// router.get("/create-student",userController.createForm);
// router.post("/create-student",userController.save);
// router.get("/edit-student/:id",userController.editForm);
// router.post("/edit-student/:id",userController.update);
// router.post("/delete-student/:id",userController.delete);

module.exports = router;