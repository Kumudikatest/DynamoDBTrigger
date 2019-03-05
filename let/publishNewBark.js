var AWS = require("aws-sdk");
var sns = new AWS.SNS();

exports.handler = (event, context, callback) => {

    event.Records.forEach((record) => {
        console.log('Stream record: ', JSON.stringify(record, null, 2));
 if (record.eventName == 'INSERT') {
        sns.publish({
            Message: 'Testing',
            Subject: 'Test',
            MessageAttributes: {},
            MessageStructure: 'String',
            TopicArn: 'arn:aws:sns:us-east-1:318300609668:dynamodb'
        }).promise()
            .then(data => {
                // your code goes here
            })
            .catch(err => {
                // error handling goes here
            });
        }
    });
    callback(null, `Successfully processed ${event.Records.length} records.`);
};