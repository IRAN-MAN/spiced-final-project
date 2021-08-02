const express = require("express");
const coAuthorsRoutes = express.Router();

const errorHandler = require("../middlewares/errorHandler");

const {
    cookBookCoAuthorsInfo,
    addCoAuthor,
    deleteFromCoAuthor,
    cookBookinvite,
    cookBookInviteLogin,
} = require("../middlewares/coAuthorsHandler");

coAuthorsRoutes.get("/:cookbook_id", cookBookCoAuthorsInfo, errorHandler);
coAuthorsRoutes.get(
    "/community/invite/:cookbook_id",
    cookBookinvite,
    errorHandler
);
coAuthorsRoutes.post(
    "/invite/login/:cookbook_id",
    cookBookInviteLogin,
    errorHandler
);

coAuthorsRoutes.post("/add_couauthor/:cookbook_id", addCoAuthor, errorHandler);

coAuthorsRoutes.delete(
    "/remove_coauthor/:cookbook_id",
    deleteFromCoAuthor,
    errorHandler
);

module.exports = { coAuthorsRoutes };
