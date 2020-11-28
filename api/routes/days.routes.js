const express = require("express");

const daysController = require("../days/days.controllers");
const userController = require("../users/users.controllers");

const daysRouter = express.Router();

daysRouter.delete("/",
  userController.authorize,
  daysController.removeDayProducts,
);

daysRouter.post("/",
  daysController.validateProduct, 
  userController.authorize,
  daysController.addProductToDay,
);

module.exports = daysRouter;