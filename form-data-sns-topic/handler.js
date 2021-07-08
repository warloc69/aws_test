const { AWS } = require("aws-sdk");
AWS.config.update({region: process.env.REGION});

function getSmsParams(record) {
    const {body} = record;
    try {
        let parsedBody = JSON.parse(body)
        if (!parsedBody.Message) {
            return null;
        }
        let message = JSON.parse(decodeURI(parsedBody.Message))
        return {
            Message: message.message,
            PhoneNumber: message.phone,
        };
    } catch (err) {
        console.error(err, err.stack);
        return null;
    }
}

const consumer = async (event) => {
    event.Records.forEach(record => {
        let params = getSmsParams(record);
        if(params === null) {
            return;
        }
        let publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

        publishTextPromise.then(
            function (data) {
                console.log("MessageID is " + data.MessageId);
            }).catch(
            function (err) {
                console.error(err, err.stack);
            });

    });
    return {};
};

module.exports = {
    consumer,
};
