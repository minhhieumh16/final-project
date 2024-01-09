import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  deteteCategoryController,
  oneCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//getAll category
router.get("/get-category", categoryController);

//get 1 category
router.get("/one-category/:slug", oneCategoryController);

//delete cateroy
router.delete(
  "/delete-category/:id",
  deteteCategoryController,
  requireSignIn,
  isAdmin
);

export default router;
