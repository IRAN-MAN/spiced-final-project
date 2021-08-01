const express = require("express");
const cookBooksRoutes = express.Router();

const errorHandler = require("../middlewares/errorHandler");
const { s3Upload } = require("../utilities/S3_config");
const { uploader } = require("../utilities/uploader_config");

const {
    cookBookInfo,
    createNewCookBook,
    cookBookInfoById,
    updateCookBookInfo,
    updateCookBookCover,
} = require("../middlewares/cookBooksHandler");

cookBooksRoutes.get("/:user_id", cookBookInfo, errorHandler);
cookBooksRoutes.get("/by_id/:cookbook_id", cookBookInfoById, errorHandler);

cookBooksRoutes.post("/create_cookbook", createNewCookBook, errorHandler);

cookBooksRoutes.put(
    "/update_info/:cookbook_id",
    updateCookBookInfo,
    errorHandler
);
cookBooksRoutes.put(
    "/update_cover/:cookbook_id",
    uploader.single("file"),
    s3Upload,
    updateCookBookCover,
    errorHandler
);

module.exports = { cookBooksRoutes };
