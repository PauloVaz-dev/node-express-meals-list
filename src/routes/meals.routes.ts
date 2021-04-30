import { Router } from 'express';

import { ListMealController } from '../useCases/ListMeal/ListMealController';

const mealRouter = Router();

const listMealController = new ListMealController();

mealRouter.get('/', listMealController.handle);

export { mealRouter };
