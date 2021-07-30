const express = require("express");
const coAuthorsRoutes = express.Router();

const {
    cookBookCoAuthorsInfo,
    addCoAuthor,
    deleteCoAuthor,
} = require("../middlewares/coAuthorsHandler");

coAuthorsRoutes.get("/:cookbook_id", cookBookCoAuthorsInfo);

coAuthorsRoutes.post("/add_couauthor/:cookbook_id", addCoAuthor);

coAuthorsRoutes.delete("/remove_coauthor/:cookbook_id", deleteCoAuthor);

module.exports = { coAuthorsRoutes };
