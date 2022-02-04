import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/Category/createCategory";
import { importCategoryContoller } from "../modules/cars/useCases/Category/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/Category/listCategories";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
  console.log("Reload funcionando");
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryContoller.handle(request, response);
});

export { categoriesRoutes };
