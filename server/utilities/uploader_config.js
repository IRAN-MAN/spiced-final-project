const multer = require("multer");
const uidSafe = require("uid-safe");
const path = require("path");

const uploadFolder = path.join(__dirname, "../uploads");

const diskStorage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, uploadFolder);
    },
    filename: function (request, file, callback) {
        uidSafe(24).then(function (uid) {
            const extname = path.extname(file.originalname);
            callback(null, uid + extname);
        });
    },
});

const uploader = multer({
    storage: diskStorage,
    limits: {
        fileSize: 2097152,
    },
});

module.exports = { uploader };
