const express = require("express");
const chaptersRoutes = express.Router();

const { chapterInfo } = require("../middlewares/chapterInfoHandler");

chaptersRoutes.get("/", chapterInfo);

module.exports = { chaptersRoutes };
