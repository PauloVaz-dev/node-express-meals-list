"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const meals_routes_1 = require("./meals.routes");
const router = express_1.Router();
router.use('/meals', meals_routes_1.mealRouter);
exports.default = router;
