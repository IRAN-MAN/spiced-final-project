const express = require("express");
const app = express();

const socket = require("socket.io");
const server = require("http").Server(app);

const io = socket(server, {
    allowRequest: (req, callback) =>
        callback(null, req.headers.referer.startsWith("http://localhost:3000")),
});

module.exports = { server, app, io };
