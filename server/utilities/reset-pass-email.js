const SES = require("./SES-config");

const resetPassEmail = ({ sendTo, emailBody, emailSubject }) => {
    SES.sendEmail({
        Source: "Community CookBook Support <support.community_cookbook@gmail.com>",
        Destination: {
            ToAddresses: [sendTo],
        },
        Message: {
            Body: {
                Html: {
                    Data: emailBody,
                    Charset: "UTF-8",
                },
            },
            Subject: {
                Data: emailSubject,
            },
        },
    })
        .promise()
        .then(() => console.log("[resetPassEmail: Success!]"))
        .catch((error) => console.log("[resetPassEmail: Error]", error));
};

module.exports = resetPassEmail;
