// require express
const express = require("express");
// Router
const router = express.Router();
// Require Controller
const { createUser, getAllUsers } = require("../controllers/user.controller");
// Init Method Request
router.post("/", createUser);

router.get("/all", getAllUsers);
// Export
module.exports = router;
