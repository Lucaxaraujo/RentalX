import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesContoller } from "./ListCategoriesContoller";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesContoller(
  listCategoriesUseCase
);

export { listCategoriesController };
