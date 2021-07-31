const aws = require("aws-sdk");
const fs = require("fs");

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.ENV;
} else {
    secrets = require("../../secrets");
}

const s3 = new aws.S3({
    accessKeyId: secrets.AWS_KEY,
    secretAccessKey: secrets.AWS_SECRET,
});

const s3Upload = (request, response, next) => {
    if (!request.file) {
        console.log("[S3 Upload]", "No File!");
        return response
            .status(500)
            .json({ message: "No File recieved by server!" });
    }
    const { filename, mimetype, size, path } = request.file;

    s3.putObject({
        Bucket: "community-cookbook",
        ACL: "public-read",
        Key: filename,
        Body: fs.createReadStream(path),
        ContentType: mimetype,
        ContentLength: size,
    })
        .promise()
        .then(() => {
            console.log("[s3Upload] successfully uploaded to S3");
            fs.unlink(path, () => {});
            next();
        })
        .catch((error) => {
            console.log("[Error on S3 Upload]", error);
            response.sendStatus(500);
        });
};

module.exports = { s3Upload };
