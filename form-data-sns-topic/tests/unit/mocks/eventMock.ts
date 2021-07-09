import {
    SQSRecord
} from "aws-lambda";
import {SQSMessageAttributes, SQSRecordAttributes} from "aws-lambda/trigger/sqs";

export const evenRecordtMock =
    {
        "messageId": "19dd0b57-b21e-4ac1-bd88-01bbb068cb78",
        "receiptHandle": "MessageReceiptHandle",
        "body": "{\"Type\":\"Notification\",\"MessageId\":\"6fc25ca6-5f0a-5716-a4f3-05c45b53164b\",\"TopicArn\":\"arn:aws:sns:us-east-1:520255698599:SmsTopic\",\"Message\":\"{\\\"phone\\\":\\\"+380951545884\\\", \\\"message\\\":\\\"Test Message\\\"}\",\"Timestamp\":\"2021-07-09T08:00:25.154Z\",\"SignatureVersion\":\"1\",\"Signature\":\"\",\"SigningCertURL\":\"\",\"UnsubscribeURL\":\"\"}",
        "attributes": {
            "ApproximateReceiveCount": "1",
            "SentTimestamp": "1523232000000",
            "SenderId": "123456789012",
            "ApproximateFirstReceiveTimestamp": "1523232000001"
        },
        "messageAttributes": {},
        "md5OfBody": "{{{md5_of_body}}}",
        "eventSource": "aws:sqs",
        "eventSourceARN": "arn:aws:sqs:us-east-1:123456789012:MyQueue",
        "awsRegion": "us-east-1"
    } as SQSRecord;