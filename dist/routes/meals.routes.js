"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mealRouter = void 0;
const express_1 = require("express");
const ListMealController_1 = require("../useCases/ListMeal/ListMealController");
const mealRouter = express_1.Router();
exports.mealRouter = mealRouter;
const listMealController = new ListMealController_1.ListMealController();
mealRouter.get('/', listMealController.handle);
