import axios from 'axios';
import { Request, Response } from 'express';

interface IMeal {
  idMeal: number;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
  strInstructions: string;
}

function paginate(array: any, page_size: number, page_number: number) {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

class ListMealController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { page = 1, per_page = 9, filter = '' } = request.query;

    const api = axios.create();
    const { data } = await api.get(
      'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    );

    const mealsFiltred = data.meals.filter((meal: IMeal) => {
      if (filter) {
        return (
          meal.strMeal.toLowerCase().indexOf(String(filter).toLowerCase()) > -1
        );
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

export { ListMealController };
