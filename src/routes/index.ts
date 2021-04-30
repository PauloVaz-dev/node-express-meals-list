import { Router } from 'express';

import { mealRouter } from './meals.routes';

const router = Router();
router.use('/meals', mealRouter);

export default router;
