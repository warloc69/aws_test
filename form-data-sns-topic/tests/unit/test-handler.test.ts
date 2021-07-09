import { getSmsParams } from "../../handler";

import { evenRecordtMock } from "./mocks/eventMock";

describe('get configuration from event', () => {
    it('should response with correct config object', async () => {
        const result = getSmsParams(evenRecordtMock)
        expect(result?.Message).toEqual("Test Message");
        expect(result?.PhoneNumber).toEqual("+380951545884");
    });
});