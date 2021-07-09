import {
    SQSEvent, SQSRecord
} from "aws-lambda";

import {SmsConfig} from "./types/types"
import {SNS} from 'aws-sdk'

function getSmsParams(record: SQSRecord): SmsConfig | null {
    const {body} = record;
    try {
        const parsedBody = JSON.parse(body)
        if (!parsedBody.Message) {
            return null;
        }
        const message = JSON.parse(decodeURI(parsedBody.Message))
        return {
            Message: message.message,
            PhoneNumber: message.phone,
        };
    } catch (err) {
        console.error(err, err.stack);
        return null;
    }
}


export const consumer = async (event: SQSEvent) => {
    event.Records.forEach(record => {
        const params = getSmsParams(record);
        if (params === null) {
            return;
        }
        const publishTextPromise = new SNS({apiVersion: '2010-03-31'}).publish(params).promise();

        publishTextPromise.then(
            (data: any) => {
                console.log("MessageID is " + data.MessageId);
            }
        ).catch((err: Error) => {
            console.error(err, err.stack);
        });
    });
    return {};
};
