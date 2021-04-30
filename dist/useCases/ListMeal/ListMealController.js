"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListMealController = void 0;
const axios_1 = __importDefault(require("axios"));
function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}
class ListMealController {
    async handle(request, response) {
        const { page = 1, per_page = 9, filter = '' } = request.query;
        const api = axios_1.default.create();
        const { data } = await api.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const mealsFiltred = data.meals.filter((meal) => {
            if (filter) {
                return (meal.strMeal.toLowerCase().indexOf(String(filter).toLowerCase()) > -1);
            }
            return meal;
        });
        const meals = paginate(mealsFiltred, Number(per_page), Number(page));
        const total = mealsFiltred.length;
        return response.status(201).send({
            total,
            meals,
        });
    }
}
exports.ListMealController = ListMealController;
