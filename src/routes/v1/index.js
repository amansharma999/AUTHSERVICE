const express = require("express");
const router = express.Router();

const UserController = require("../../controllers/user-controller");
const { AuthRequestValidatorsMiddleware } = require("../../middlewares");

router.post(
  "/signup",
  AuthRequestValidatorsMiddleware.validateUserAuth,
  UserController.create
);
router.post(
  "/signin",
  AuthRequestValidatorsMiddleware.validateUserAuth,
  UserController.signIn
);

module.exports = router;
