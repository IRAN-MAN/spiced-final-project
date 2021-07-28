const express = require("express");
const coAuthorsRoutes = express.Router();

const {
    cookBookCoAuthorsInfo,
    addCoAuthor,
    deleteCoAuthor,
} = require("../middlewares/coAuthorsHandler");

coAuthorsRoutes.get("/:cookbook_id", cookBookCoAuthorsInfo);

coAuthorsRoutes.post("/:cookbook_id", addCoAuthor);

coAuthorsRoutes.delete("/:cookbook_id", deleteCoAuthor);

module.exports = { coAuthorsRoutes };
