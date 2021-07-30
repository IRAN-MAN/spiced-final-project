const express = require("express");
const chaptersRoutes = express.Router();

const { chapterInfo } = require("../middlewares/chapterHandler");

chaptersRoutes.get("/", chapterInfo);

module.exports = { chaptersRoutes };
