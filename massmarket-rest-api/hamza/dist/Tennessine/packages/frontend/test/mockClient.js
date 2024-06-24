// SPDX-FileCopyrightText: 2024 Mass Labs
//
// SPDX-License-Identifier: GPL-3.0-or-later
import { EventEmitter } from "events";
import { hexToBytes } from "viem";
import testVectorsData from "./testVectors.json" with { type: "json" };
import schema from "@massmarket/schema";
export class MockClient extends EventEmitter {
    vectors;
    constructor() {
        super();
        this.vectors = testVectorsData;
        console.log(`[vectors] events: ${JSON.stringify(this.vectors.events.length)}`);
    }
    async connect() {
        for (let index = 0; index < this.vectors.events.length; index++) {
            const evt = this.vectors.events[index];
            const decodedEvent = schema.ShopEvent.decode(hexToBytes(("0x" + evt.encoded)));
            const pushReq = new schema.EventPushRequest({
                requestId: sequentialReqId(),
                events: [decodedEvent],
            });
            this.emit("event", pushReq);
        }
    }
    createEventStream() {
        const parentInstance = this;
        let enqueueFn;
        const enqueueWrapperFn = (controller) => {
            return (enqueueFn = (events) => {
                for (const event of events) {
                    controller.enqueue(event);
                }
            });
        };
        return new ReadableStream({
            start(controller) {
                try {
                    parentInstance.on("event", enqueueWrapperFn(controller));
                }
                catch (error) {
                    console.log({ error });
                }
            },
            cancel() {
                parentInstance.removeListener("event", enqueueFn);
            },
        }, { highWaterMark: 0 });
    }
}
let reqIdCounter = 1;
function sequentialReqId() {
    const reqIdSize = 16;
    const bytes = new Uint8Array(16);
    let bigint = BigInt(reqIdCounter);
    for (let i = 0; i < reqIdSize; i++) {
        bytes[reqIdSize - 1 - i] = Number(bigint & BigInt(0xff));
        bigint >>= BigInt(reqIdSize);
    }
    reqIdCounter++;
    return bytes;
}
//# sourceMappingURL=mockClient.js.map