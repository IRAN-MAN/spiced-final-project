const express = require("express");
const cookBooksRoutes = express.Router();

const {
    cookBookInfo,
    createCookBook,
    updateCookBookInfo,
} = require("../middlewares/cookBooksRoutesHandler");

cookBooksRoutes.get("/:user_id", cookBookInfo);

cookBooksRoutes.post("/create_cookbook", createCookBook);

cookBooksRoutes.put("/update_info", updateCookBookInfo);

module.exports = { cookBooksRoutes };
