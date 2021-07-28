const express = require("express");
const cookBooksRoutes = express.Router();

const {
    cookBookInfo,
    createCookBook,
    updateCookBookInfo,
} = require("../middlewares/cookBooksHandler");

cookBooksRoutes.get("/:user_id", cookBookInfo);

cookBooksRoutes.post("/create_cookbook", createCookBook);

cookBooksRoutes.put("/update_info", updateCookBookInfo);

module.exports = { cookBooksRoutes };
