const express = require("express");
const chaptersRoutes = express.Router();

const errorHandler = require("../middlewares/errorHandler");

const { chapterInfo } = require("../middlewares/chapterHandler");

chaptersRoutes.get("/", chapterInfo, errorHandler);

module.exports = { chaptersRoutes };
