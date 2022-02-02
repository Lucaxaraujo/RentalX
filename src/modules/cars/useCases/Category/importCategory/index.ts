import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const importCategoryUseCase = new ImportCategoryUseCase();

const importCategoryContoller = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryContoller };
