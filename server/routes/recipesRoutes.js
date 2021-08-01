const express = require("express");
const recipesRoutes = express.Router();

const errorHandler = require("../middlewares/errorHandler");
const { s3Upload } = require("../utilities/S3_config");
const { uploader } = require("../utilities/uploader_config");

const {
    recipeInfo,
    recipesInCookBook,
    addRecipeInCookBook,
    addRecipePhoto,
    editRecipeInCookBook,
    recipePhotos,
} = require("../middlewares/recipesHandler");

recipesRoutes.get("/:recipe_id", recipeInfo, errorHandler);
recipesRoutes.get("/photos/:recipe_id", recipePhotos, errorHandler);
recipesRoutes.get("/by_cookbook/:cookbook_id", recipesInCookBook, errorHandler);

recipesRoutes.post("/add_recipe", addRecipeInCookBook, errorHandler);

recipesRoutes.post(
    "/edit_recipe/:recipe_id",
    editRecipeInCookBook,
    errorHandler
);
recipesRoutes.post(
    "/photos/add_photo/:recipe_id",
    uploader.single("file"),
    s3Upload,
    addRecipePhoto,
    errorHandler
);

module.exports = { recipesRoutes };
