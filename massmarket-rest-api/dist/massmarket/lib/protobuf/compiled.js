"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.market = void 0;
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
const $protobuf = __importStar(require("protobufjs/minimal"));
// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
// Exported root namespace
const $root = $protobuf.roots["market.mass"] || ($protobuf.roots["market.mass"] = {});
exports.default = $root;
exports.market = ($root.market = (() => {
    /**
     * Namespace market.
     * @exports market
     * @namespace
     */
    const market = {};
    market.mass = (function () {
        /**
         * Namespace mass.
         * @memberof market
         * @namespace
         */
        const mass = {};
        mass.StoreManifest = (function () {
            /**
             * Properties of a StoreManifest.
             * @memberof market.mass
             * @interface IStoreManifest
             * @property {Uint8Array|null} [eventId] StoreManifest eventId
             * @property {Uint8Array|null} [storeTokenId] StoreManifest storeTokenId
             * @property {string|null} [domain] StoreManifest domain
             * @property {Uint8Array|null} [publishedTagId] StoreManifest publishedTagId
             */
            /**
             * Constructs a new StoreManifest.
             * @memberof market.mass
             * @classdesc Represents a StoreManifest.
             * @implements IStoreManifest
             * @constructor
             * @param {market.mass.IStoreManifest=} [properties] Properties to set
             */
            function StoreManifest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * StoreManifest eventId.
             * @member {Uint8Array} eventId
             * @memberof market.mass.StoreManifest
             * @instance
             */
            StoreManifest.prototype.eventId = $util.newBuffer([]);
            /**
             * StoreManifest storeTokenId.
             * @member {Uint8Array} storeTokenId
             * @memberof market.mass.StoreManifest
             * @instance
             */
            StoreManifest.prototype.storeTokenId = $util.newBuffer([]);
            /**
             * StoreManifest domain.
             * @member {string} domain
             * @memberof market.mass.StoreManifest
             * @instance
             */
            StoreManifest.prototype.domain = "";
            /**
             * StoreManifest publishedTagId.
             * @member {Uint8Array} publishedTagId
             * @memberof market.mass.StoreManifest
             * @instance
             */
            StoreManifest.prototype.publishedTagId = $util.newBuffer([]);
            /**
             * Creates a new StoreManifest instance using the specified properties.
             * @function create
             * @memberof market.mass.StoreManifest
             * @static
             * @param {market.mass.IStoreManifest=} [properties] Properties to set
             * @returns {market.mass.StoreManifest} StoreManifest instance
             */
            StoreManifest.create = function create(properties) {
                return new StoreManifest(properties);
            };
            /**
             * Encodes the specified StoreManifest message. Does not implicitly {@link market.mass.StoreManifest.verify|verify} messages.
             * @function encode
             * @memberof market.mass.StoreManifest
             * @static
             * @param {market.mass.IStoreManifest} message StoreManifest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StoreManifest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.eventId != null &&
                    Object.hasOwnProperty.call(message, "eventId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.eventId);
                if (message.storeTokenId != null &&
                    Object.hasOwnProperty.call(message, "storeTokenId"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.storeTokenId);
                if (message.domain != null &&
                    Object.hasOwnProperty.call(message, "domain"))
                    writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.domain);
                if (message.publishedTagId != null &&
                    Object.hasOwnProperty.call(message, "publishedTagId"))
                    writer
                        .uint32(/* id 4, wireType 2 =*/ 34)
                        .bytes(message.publishedTagId);
                return writer;
            };
            /**
             * Encodes the specified StoreManifest message, length delimited. Does not implicitly {@link market.mass.StoreManifest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.StoreManifest
             * @static
             * @param {market.mass.IStoreManifest} message StoreManifest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StoreManifest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a StoreManifest message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.StoreManifest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.StoreManifest} StoreManifest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StoreManifest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.StoreManifest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.eventId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.storeTokenId = reader.bytes();
                            break;
                        }
                        case 3: {
                            message.domain = reader.string();
                            break;
                        }
                        case 4: {
                            message.publishedTagId = reader.bytes();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a StoreManifest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.StoreManifest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.StoreManifest} StoreManifest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StoreManifest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a StoreManifest message.
             * @function verify
             * @memberof market.mass.StoreManifest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StoreManifest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    if (!((message.eventId && typeof message.eventId.length === "number") ||
                        $util.isString(message.eventId)))
                        return "eventId: buffer expected";
                if (message.storeTokenId != null &&
                    message.hasOwnProperty("storeTokenId"))
                    if (!((message.storeTokenId &&
                        typeof message.storeTokenId.length === "number") ||
                        $util.isString(message.storeTokenId)))
                        return "storeTokenId: buffer expected";
                if (message.domain != null && message.hasOwnProperty("domain"))
                    if (!$util.isString(message.domain))
                        return "domain: string expected";
                if (message.publishedTagId != null &&
                    message.hasOwnProperty("publishedTagId"))
                    if (!((message.publishedTagId &&
                        typeof message.publishedTagId.length === "number") ||
                        $util.isString(message.publishedTagId)))
                        return "publishedTagId: buffer expected";
                return null;
            };
            /**
             * Creates a StoreManifest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.StoreManifest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.StoreManifest} StoreManifest
             */
            StoreManifest.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.StoreManifest)
                    return object;
                let message = new $root.market.mass.StoreManifest();
                if (object.eventId != null)
                    if (typeof object.eventId === "string")
                        $util.base64.decode(object.eventId, (message.eventId = $util.newBuffer($util.base64.length(object.eventId))), 0);
                    else if (object.eventId.length >= 0)
                        message.eventId = object.eventId;
                if (object.storeTokenId != null)
                    if (typeof object.storeTokenId === "string")
                        $util.base64.decode(object.storeTokenId, (message.storeTokenId = $util.newBuffer($util.base64.length(object.storeTokenId))), 0);
                    else if (object.storeTokenId.length >= 0)
                        message.storeTokenId = object.storeTokenId;
                if (object.domain != null)
                    message.domain = String(object.domain);
                if (object.publishedTagId != null)
                    if (typeof object.publishedTagId === "string")
                        $util.base64.decode(object.publishedTagId, (message.publishedTagId = $util.newBuffer($util.base64.length(object.publishedTagId))), 0);
                    else if (object.publishedTagId.length >= 0)
                        message.publishedTagId = object.publishedTagId;
                return message;
            };
            /**
             * Creates a plain object from a StoreManifest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.StoreManifest
             * @static
             * @param {market.mass.StoreManifest} message StoreManifest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StoreManifest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.eventId = "";
                    else {
                        object.eventId = [];
                        if (options.bytes !== Array)
                            object.eventId = $util.newBuffer(object.eventId);
                    }
                    if (options.bytes === String)
                        object.storeTokenId = "";
                    else {
                        object.storeTokenId = [];
                        if (options.bytes !== Array)
                            object.storeTokenId = $util.newBuffer(object.storeTokenId);
                    }
                    object.domain = "";
                    if (options.bytes === String)
                        object.publishedTagId = "";
                    else {
                        object.publishedTagId = [];
                        if (options.bytes !== Array)
                            object.publishedTagId = $util.newBuffer(object.publishedTagId);
                    }
                }
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    object.eventId =
                        options.bytes === String
                            ? $util.base64.encode(message.eventId, 0, message.eventId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.eventId)
                                : message.eventId;
                if (message.storeTokenId != null &&
                    message.hasOwnProperty("storeTokenId"))
                    object.storeTokenId =
                        options.bytes === String
                            ? $util.base64.encode(message.storeTokenId, 0, message.storeTokenId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.storeTokenId)
                                : message.storeTokenId;
                if (message.domain != null && message.hasOwnProperty("domain"))
                    object.domain = message.domain;
                if (message.publishedTagId != null &&
                    message.hasOwnProperty("publishedTagId"))
                    object.publishedTagId =
                        options.bytes === String
                            ? $util.base64.encode(message.publishedTagId, 0, message.publishedTagId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.publishedTagId)
                                : message.publishedTagId;
                return object;
            };
            /**
             * Converts this StoreManifest to JSON.
             * @function toJSON
             * @memberof market.mass.StoreManifest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StoreManifest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for StoreManifest
             * @function getTypeUrl
             * @memberof market.mass.StoreManifest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StoreManifest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.StoreManifest";
            };
            return StoreManifest;
        })();
        mass.UpdateManifest = (function () {
            /**
             * Properties of an UpdateManifest.
             * @memberof market.mass
             * @interface IUpdateManifest
             * @property {Uint8Array|null} [eventId] UpdateManifest eventId
             * @property {market.mass.UpdateManifest.ManifestField|null} [field] UpdateManifest field
             * @property {string|null} [string] UpdateManifest string
             * @property {Uint8Array|null} [tagId] UpdateManifest tagId
             * @property {Uint8Array|null} [erc20Addr] UpdateManifest erc20Addr
             */
            /**
             * Constructs a new UpdateManifest.
             * @memberof market.mass
             * @classdesc Represents an UpdateManifest.
             * @implements IUpdateManifest
             * @constructor
             * @param {market.mass.IUpdateManifest=} [properties] Properties to set
             */
            function UpdateManifest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * UpdateManifest eventId.
             * @member {Uint8Array} eventId
             * @memberof market.mass.UpdateManifest
             * @instance
             */
            UpdateManifest.prototype.eventId = $util.newBuffer([]);
            /**
             * UpdateManifest field.
             * @member {market.mass.UpdateManifest.ManifestField} field
             * @memberof market.mass.UpdateManifest
             * @instance
             */
            UpdateManifest.prototype.field = 0;
            /**
             * UpdateManifest string.
             * @member {string|null|undefined} string
             * @memberof market.mass.UpdateManifest
             * @instance
             */
            UpdateManifest.prototype.string = null;
            /**
             * UpdateManifest tagId.
             * @member {Uint8Array|null|undefined} tagId
             * @memberof market.mass.UpdateManifest
             * @instance
             */
            UpdateManifest.prototype.tagId = null;
            /**
             * UpdateManifest erc20Addr.
             * @member {Uint8Array|null|undefined} erc20Addr
             * @memberof market.mass.UpdateManifest
             * @instance
             */
            UpdateManifest.prototype.erc20Addr = null;
            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;
            /**
             * UpdateManifest value.
             * @member {"string"|"tagId"|"erc20Addr"|undefined} value
             * @memberof market.mass.UpdateManifest
             * @instance
             */
            Object.defineProperty(UpdateManifest.prototype, "value", {
                get: $util.oneOfGetter(($oneOfFields = ["string", "tagId", "erc20Addr"])),
                set: $util.oneOfSetter($oneOfFields),
            });
            /**
             * Creates a new UpdateManifest instance using the specified properties.
             * @function create
             * @memberof market.mass.UpdateManifest
             * @static
             * @param {market.mass.IUpdateManifest=} [properties] Properties to set
             * @returns {market.mass.UpdateManifest} UpdateManifest instance
             */
            UpdateManifest.create = function create(properties) {
                return new UpdateManifest(properties);
            };
            /**
             * Encodes the specified UpdateManifest message. Does not implicitly {@link market.mass.UpdateManifest.verify|verify} messages.
             * @function encode
             * @memberof market.mass.UpdateManifest
             * @static
             * @param {market.mass.IUpdateManifest} message UpdateManifest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateManifest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.eventId != null &&
                    Object.hasOwnProperty.call(message, "eventId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.eventId);
                if (message.field != null &&
                    Object.hasOwnProperty.call(message, "field"))
                    writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.field);
                if (message.string != null &&
                    Object.hasOwnProperty.call(message, "string"))
                    writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.string);
                if (message.tagId != null &&
                    Object.hasOwnProperty.call(message, "tagId"))
                    writer.uint32(/* id 4, wireType 2 =*/ 34).bytes(message.tagId);
                if (message.erc20Addr != null &&
                    Object.hasOwnProperty.call(message, "erc20Addr"))
                    writer.uint32(/* id 5, wireType 2 =*/ 42).bytes(message.erc20Addr);
                return writer;
            };
            /**
             * Encodes the specified UpdateManifest message, length delimited. Does not implicitly {@link market.mass.UpdateManifest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.UpdateManifest
             * @static
             * @param {market.mass.IUpdateManifest} message UpdateManifest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateManifest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes an UpdateManifest message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.UpdateManifest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.UpdateManifest} UpdateManifest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateManifest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.UpdateManifest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.eventId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.field = reader.int32();
                            break;
                        }
                        case 3: {
                            message.string = reader.string();
                            break;
                        }
                        case 4: {
                            message.tagId = reader.bytes();
                            break;
                        }
                        case 5: {
                            message.erc20Addr = reader.bytes();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes an UpdateManifest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.UpdateManifest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.UpdateManifest} UpdateManifest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateManifest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies an UpdateManifest message.
             * @function verify
             * @memberof market.mass.UpdateManifest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateManifest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    if (!((message.eventId && typeof message.eventId.length === "number") ||
                        $util.isString(message.eventId)))
                        return "eventId: buffer expected";
                if (message.field != null && message.hasOwnProperty("field"))
                    switch (message.field) {
                        default:
                            return "field: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            break;
                    }
                if (message.string != null && message.hasOwnProperty("string")) {
                    properties.value = 1;
                    if (!$util.isString(message.string))
                        return "string: string expected";
                }
                if (message.tagId != null && message.hasOwnProperty("tagId")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (!((message.tagId && typeof message.tagId.length === "number") ||
                        $util.isString(message.tagId)))
                        return "tagId: buffer expected";
                }
                if (message.erc20Addr != null && message.hasOwnProperty("erc20Addr")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (!((message.erc20Addr &&
                        typeof message.erc20Addr.length === "number") ||
                        $util.isString(message.erc20Addr)))
                        return "erc20Addr: buffer expected";
                }
                return null;
            };
            /**
             * Creates an UpdateManifest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.UpdateManifest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.UpdateManifest} UpdateManifest
             */
            UpdateManifest.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.UpdateManifest)
                    return object;
                let message = new $root.market.mass.UpdateManifest();
                if (object.eventId != null)
                    if (typeof object.eventId === "string")
                        $util.base64.decode(object.eventId, (message.eventId = $util.newBuffer($util.base64.length(object.eventId))), 0);
                    else if (object.eventId.length >= 0)
                        message.eventId = object.eventId;
                switch (object.field) {
                    default:
                        if (typeof object.field === "number") {
                            message.field = object.field;
                            break;
                        }
                        break;
                    case "MANIFEST_FIELD_UNSPECIFIED":
                    case 0:
                        message.field = 0;
                        break;
                    case "MANIFEST_FIELD_DOMAIN":
                    case 1:
                        message.field = 1;
                        break;
                    case "MANIFEST_FIELD_PUBLISHED_TAG":
                    case 2:
                        message.field = 2;
                        break;
                    case "MANIFEST_FIELD_ADD_ERC20":
                    case 3:
                        message.field = 3;
                        break;
                    case "MANIFEST_FIELD_REMOVE_ERC20":
                    case 4:
                        message.field = 4;
                        break;
                }
                if (object.string != null)
                    message.string = String(object.string);
                if (object.tagId != null)
                    if (typeof object.tagId === "string")
                        $util.base64.decode(object.tagId, (message.tagId = $util.newBuffer($util.base64.length(object.tagId))), 0);
                    else if (object.tagId.length >= 0)
                        message.tagId = object.tagId;
                if (object.erc20Addr != null)
                    if (typeof object.erc20Addr === "string")
                        $util.base64.decode(object.erc20Addr, (message.erc20Addr = $util.newBuffer($util.base64.length(object.erc20Addr))), 0);
                    else if (object.erc20Addr.length >= 0)
                        message.erc20Addr = object.erc20Addr;
                return message;
            };
            /**
             * Creates a plain object from an UpdateManifest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.UpdateManifest
             * @static
             * @param {market.mass.UpdateManifest} message UpdateManifest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateManifest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.eventId = "";
                    else {
                        object.eventId = [];
                        if (options.bytes !== Array)
                            object.eventId = $util.newBuffer(object.eventId);
                    }
                    object.field =
                        options.enums === String ? "MANIFEST_FIELD_UNSPECIFIED" : 0;
                }
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    object.eventId =
                        options.bytes === String
                            ? $util.base64.encode(message.eventId, 0, message.eventId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.eventId)
                                : message.eventId;
                if (message.field != null && message.hasOwnProperty("field"))
                    object.field =
                        options.enums === String
                            ? $root.market.mass.UpdateManifest.ManifestField[message.field] === undefined
                                ? message.field
                                : $root.market.mass.UpdateManifest.ManifestField[message.field]
                            : message.field;
                if (message.string != null && message.hasOwnProperty("string")) {
                    object.string = message.string;
                    if (options.oneofs)
                        object.value = "string";
                }
                if (message.tagId != null && message.hasOwnProperty("tagId")) {
                    object.tagId =
                        options.bytes === String
                            ? $util.base64.encode(message.tagId, 0, message.tagId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.tagId)
                                : message.tagId;
                    if (options.oneofs)
                        object.value = "tagId";
                }
                if (message.erc20Addr != null && message.hasOwnProperty("erc20Addr")) {
                    object.erc20Addr =
                        options.bytes === String
                            ? $util.base64.encode(message.erc20Addr, 0, message.erc20Addr.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.erc20Addr)
                                : message.erc20Addr;
                    if (options.oneofs)
                        object.value = "erc20Addr";
                }
                return object;
            };
            /**
             * Converts this UpdateManifest to JSON.
             * @function toJSON
             * @memberof market.mass.UpdateManifest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateManifest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for UpdateManifest
             * @function getTypeUrl
             * @memberof market.mass.UpdateManifest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UpdateManifest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.UpdateManifest";
            };
            /**
             * ManifestField enum.
             * @name market.mass.UpdateManifest.ManifestField
             * @enum {number}
             * @property {number} MANIFEST_FIELD_UNSPECIFIED=0 MANIFEST_FIELD_UNSPECIFIED value
             * @property {number} MANIFEST_FIELD_DOMAIN=1 MANIFEST_FIELD_DOMAIN value
             * @property {number} MANIFEST_FIELD_PUBLISHED_TAG=2 MANIFEST_FIELD_PUBLISHED_TAG value
             * @property {number} MANIFEST_FIELD_ADD_ERC20=3 MANIFEST_FIELD_ADD_ERC20 value
             * @property {number} MANIFEST_FIELD_REMOVE_ERC20=4 MANIFEST_FIELD_REMOVE_ERC20 value
             */
            UpdateManifest.ManifestField = (function () {
                const valuesById = {}, values = Object.create(valuesById);
                values[(valuesById[0] = "MANIFEST_FIELD_UNSPECIFIED")] = 0;
                values[(valuesById[1] = "MANIFEST_FIELD_DOMAIN")] = 1;
                values[(valuesById[2] = "MANIFEST_FIELD_PUBLISHED_TAG")] = 2;
                values[(valuesById[3] = "MANIFEST_FIELD_ADD_ERC20")] = 3;
                values[(valuesById[4] = "MANIFEST_FIELD_REMOVE_ERC20")] = 4;
                return values;
            })();
            return UpdateManifest;
        })();
        mass.CreateItem = (function () {
            /**
             * Properties of a CreateItem.
             * @memberof market.mass
             * @interface ICreateItem
             * @property {Uint8Array|null} [eventId] CreateItem eventId
             * @property {string|null} [price] CreateItem price
             * @property {Uint8Array|null} [metadata] CreateItem metadata
             */
            /**
             * Constructs a new CreateItem.
             * @memberof market.mass
             * @classdesc Represents a CreateItem.
             * @implements ICreateItem
             * @constructor
             * @param {market.mass.ICreateItem=} [properties] Properties to set
             */
            function CreateItem(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CreateItem eventId.
             * @member {Uint8Array} eventId
             * @memberof market.mass.CreateItem
             * @instance
             */
            CreateItem.prototype.eventId = $util.newBuffer([]);
            /**
             * CreateItem price.
             * @member {string} price
             * @memberof market.mass.CreateItem
             * @instance
             */
            CreateItem.prototype.price = "";
            /**
             * CreateItem metadata.
             * @member {Uint8Array} metadata
             * @memberof market.mass.CreateItem
             * @instance
             */
            CreateItem.prototype.metadata = $util.newBuffer([]);
            /**
             * Creates a new CreateItem instance using the specified properties.
             * @function create
             * @memberof market.mass.CreateItem
             * @static
             * @param {market.mass.ICreateItem=} [properties] Properties to set
             * @returns {market.mass.CreateItem} CreateItem instance
             */
            CreateItem.create = function create(properties) {
                return new CreateItem(properties);
            };
            /**
             * Encodes the specified CreateItem message. Does not implicitly {@link market.mass.CreateItem.verify|verify} messages.
             * @function encode
             * @memberof market.mass.CreateItem
             * @static
             * @param {market.mass.ICreateItem} message CreateItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.eventId != null &&
                    Object.hasOwnProperty.call(message, "eventId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.eventId);
                if (message.price != null &&
                    Object.hasOwnProperty.call(message, "price"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.price);
                if (message.metadata != null &&
                    Object.hasOwnProperty.call(message, "metadata"))
                    writer.uint32(/* id 3, wireType 2 =*/ 26).bytes(message.metadata);
                return writer;
            };
            /**
             * Encodes the specified CreateItem message, length delimited. Does not implicitly {@link market.mass.CreateItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.CreateItem
             * @static
             * @param {market.mass.ICreateItem} message CreateItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateItem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CreateItem message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.CreateItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.CreateItem} CreateItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.CreateItem();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.eventId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.price = reader.string();
                            break;
                        }
                        case 3: {
                            message.metadata = reader.bytes();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CreateItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.CreateItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.CreateItem} CreateItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateItem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CreateItem message.
             * @function verify
             * @memberof market.mass.CreateItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    if (!((message.eventId && typeof message.eventId.length === "number") ||
                        $util.isString(message.eventId)))
                        return "eventId: buffer expected";
                if (message.price != null && message.hasOwnProperty("price"))
                    if (!$util.isString(message.price))
                        return "price: string expected";
                if (message.metadata != null && message.hasOwnProperty("metadata"))
                    if (!((message.metadata &&
                        typeof message.metadata.length === "number") ||
                        $util.isString(message.metadata)))
                        return "metadata: buffer expected";
                return null;
            };
            /**
             * Creates a CreateItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.CreateItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.CreateItem} CreateItem
             */
            CreateItem.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.CreateItem)
                    return object;
                let message = new $root.market.mass.CreateItem();
                if (object.eventId != null)
                    if (typeof object.eventId === "string")
                        $util.base64.decode(object.eventId, (message.eventId = $util.newBuffer($util.base64.length(object.eventId))), 0);
                    else if (object.eventId.length >= 0)
                        message.eventId = object.eventId;
                if (object.price != null)
                    message.price = String(object.price);
                if (object.metadata != null)
                    if (typeof object.metadata === "string")
                        $util.base64.decode(object.metadata, (message.metadata = $util.newBuffer($util.base64.length(object.metadata))), 0);
                    else if (object.metadata.length >= 0)
                        message.metadata = object.metadata;
                return message;
            };
            /**
             * Creates a plain object from a CreateItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.CreateItem
             * @static
             * @param {market.mass.CreateItem} message CreateItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.eventId = "";
                    else {
                        object.eventId = [];
                        if (options.bytes !== Array)
                            object.eventId = $util.newBuffer(object.eventId);
                    }
                    object.price = "";
                    if (options.bytes === String)
                        object.metadata = "";
                    else {
                        object.metadata = [];
                        if (options.bytes !== Array)
                            object.metadata = $util.newBuffer(object.metadata);
                    }
                }
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    object.eventId =
                        options.bytes === String
                            ? $util.base64.encode(message.eventId, 0, message.eventId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.eventId)
                                : message.eventId;
                if (message.price != null && message.hasOwnProperty("price"))
                    object.price = message.price;
                if (message.metadata != null && message.hasOwnProperty("metadata"))
                    object.metadata =
                        options.bytes === String
                            ? $util.base64.encode(message.metadata, 0, message.metadata.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.metadata)
                                : message.metadata;
                return object;
            };
            /**
             * Converts this CreateItem to JSON.
             * @function toJSON
             * @memberof market.mass.CreateItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for CreateItem
             * @function getTypeUrl
             * @memberof market.mass.CreateItem
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CreateItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.CreateItem";
            };
            return CreateItem;
        })();
        mass.UpdateItem = (function () {
            /**
             * Properties of an UpdateItem.
             * @memberof market.mass
             * @interface IUpdateItem
             * @property {Uint8Array|null} [eventId] UpdateItem eventId
             * @property {Uint8Array|null} [itemId] UpdateItem itemId
             * @property {market.mass.UpdateItem.ItemField|null} [field] UpdateItem field
             * @property {string|null} [price] UpdateItem price
             * @property {Uint8Array|null} [metadata] UpdateItem metadata
             */
            /**
             * Constructs a new UpdateItem.
             * @memberof market.mass
             * @classdesc Represents an UpdateItem.
             * @implements IUpdateItem
             * @constructor
             * @param {market.mass.IUpdateItem=} [properties] Properties to set
             */
            function UpdateItem(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * UpdateItem eventId.
             * @member {Uint8Array} eventId
             * @memberof market.mass.UpdateItem
             * @instance
             */
            UpdateItem.prototype.eventId = $util.newBuffer([]);
            /**
             * UpdateItem itemId.
             * @member {Uint8Array} itemId
             * @memberof market.mass.UpdateItem
             * @instance
             */
            UpdateItem.prototype.itemId = $util.newBuffer([]);
            /**
             * UpdateItem field.
             * @member {market.mass.UpdateItem.ItemField} field
             * @memberof market.mass.UpdateItem
             * @instance
             */
            UpdateItem.prototype.field = 0;
            /**
             * UpdateItem price.
             * @member {string|null|undefined} price
             * @memberof market.mass.UpdateItem
             * @instance
             */
            UpdateItem.prototype.price = null;
            /**
             * UpdateItem metadata.
             * @member {Uint8Array|null|undefined} metadata
             * @memberof market.mass.UpdateItem
             * @instance
             */
            UpdateItem.prototype.metadata = null;
            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;
            /**
             * UpdateItem value.
             * @member {"price"|"metadata"|undefined} value
             * @memberof market.mass.UpdateItem
             * @instance
             */
            Object.defineProperty(UpdateItem.prototype, "value", {
                get: $util.oneOfGetter(($oneOfFields = ["price", "metadata"])),
                set: $util.oneOfSetter($oneOfFields),
            });
            /**
             * Creates a new UpdateItem instance using the specified properties.
             * @function create
             * @memberof market.mass.UpdateItem
             * @static
             * @param {market.mass.IUpdateItem=} [properties] Properties to set
             * @returns {market.mass.UpdateItem} UpdateItem instance
             */
            UpdateItem.create = function create(properties) {
                return new UpdateItem(properties);
            };
            /**
             * Encodes the specified UpdateItem message. Does not implicitly {@link market.mass.UpdateItem.verify|verify} messages.
             * @function encode
             * @memberof market.mass.UpdateItem
             * @static
             * @param {market.mass.IUpdateItem} message UpdateItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.eventId != null &&
                    Object.hasOwnProperty.call(message, "eventId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.eventId);
                if (message.itemId != null &&
                    Object.hasOwnProperty.call(message, "itemId"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.itemId);
                if (message.field != null &&
                    Object.hasOwnProperty.call(message, "field"))
                    writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.field);
                if (message.price != null &&
                    Object.hasOwnProperty.call(message, "price"))
                    writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.price);
                if (message.metadata != null &&
                    Object.hasOwnProperty.call(message, "metadata"))
                    writer.uint32(/* id 5, wireType 2 =*/ 42).bytes(message.metadata);
                return writer;
            };
            /**
             * Encodes the specified UpdateItem message, length delimited. Does not implicitly {@link market.mass.UpdateItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.UpdateItem
             * @static
             * @param {market.mass.IUpdateItem} message UpdateItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateItem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes an UpdateItem message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.UpdateItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.UpdateItem} UpdateItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.UpdateItem();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.eventId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.itemId = reader.bytes();
                            break;
                        }
                        case 3: {
                            message.field = reader.int32();
                            break;
                        }
                        case 4: {
                            message.price = reader.string();
                            break;
                        }
                        case 5: {
                            message.metadata = reader.bytes();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes an UpdateItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.UpdateItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.UpdateItem} UpdateItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateItem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies an UpdateItem message.
             * @function verify
             * @memberof market.mass.UpdateItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    if (!((message.eventId && typeof message.eventId.length === "number") ||
                        $util.isString(message.eventId)))
                        return "eventId: buffer expected";
                if (message.itemId != null && message.hasOwnProperty("itemId"))
                    if (!((message.itemId && typeof message.itemId.length === "number") ||
                        $util.isString(message.itemId)))
                        return "itemId: buffer expected";
                if (message.field != null && message.hasOwnProperty("field"))
                    switch (message.field) {
                        default:
                            return "field: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                    }
                if (message.price != null && message.hasOwnProperty("price")) {
                    properties.value = 1;
                    if (!$util.isString(message.price))
                        return "price: string expected";
                }
                if (message.metadata != null && message.hasOwnProperty("metadata")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (!((message.metadata &&
                        typeof message.metadata.length === "number") ||
                        $util.isString(message.metadata)))
                        return "metadata: buffer expected";
                }
                return null;
            };
            /**
             * Creates an UpdateItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.UpdateItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.UpdateItem} UpdateItem
             */
            UpdateItem.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.UpdateItem)
                    return object;
                let message = new $root.market.mass.UpdateItem();
                if (object.eventId != null)
                    if (typeof object.eventId === "string")
                        $util.base64.decode(object.eventId, (message.eventId = $util.newBuffer($util.base64.length(object.eventId))), 0);
                    else if (object.eventId.length >= 0)
                        message.eventId = object.eventId;
                if (object.itemId != null)
                    if (typeof object.itemId === "string")
                        $util.base64.decode(object.itemId, (message.itemId = $util.newBuffer($util.base64.length(object.itemId))), 0);
                    else if (object.itemId.length >= 0)
                        message.itemId = object.itemId;
                switch (object.field) {
                    default:
                        if (typeof object.field === "number") {
                            message.field = object.field;
                            break;
                        }
                        break;
                    case "ITEM_FIELD_UNSPECIFIED":
                    case 0:
                        message.field = 0;
                        break;
                    case "ITEM_FIELD_PRICE":
                    case 1:
                        message.field = 1;
                        break;
                    case "ITEM_FIELD_METADATA":
                    case 2:
                        message.field = 2;
                        break;
                }
                if (object.price != null)
                    message.price = String(object.price);
                if (object.metadata != null)
                    if (typeof object.metadata === "string")
                        $util.base64.decode(object.metadata, (message.metadata = $util.newBuffer($util.base64.length(object.metadata))), 0);
                    else if (object.metadata.length >= 0)
                        message.metadata = object.metadata;
                return message;
            };
            /**
             * Creates a plain object from an UpdateItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.UpdateItem
             * @static
             * @param {market.mass.UpdateItem} message UpdateItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.eventId = "";
                    else {
                        object.eventId = [];
                        if (options.bytes !== Array)
                            object.eventId = $util.newBuffer(object.eventId);
                    }
                    if (options.bytes === String)
                        object.itemId = "";
                    else {
                        object.itemId = [];
                        if (options.bytes !== Array)
                            object.itemId = $util.newBuffer(object.itemId);
                    }
                    object.field =
                        options.enums === String ? "ITEM_FIELD_UNSPECIFIED" : 0;
                }
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    object.eventId =
                        options.bytes === String
                            ? $util.base64.encode(message.eventId, 0, message.eventId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.eventId)
                                : message.eventId;
                if (message.itemId != null && message.hasOwnProperty("itemId"))
                    object.itemId =
                        options.bytes === String
                            ? $util.base64.encode(message.itemId, 0, message.itemId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.itemId)
                                : message.itemId;
                if (message.field != null && message.hasOwnProperty("field"))
                    object.field =
                        options.enums === String
                            ? $root.market.mass.UpdateItem.ItemField[message.field] ===
                                undefined
                                ? message.field
                                : $root.market.mass.UpdateItem.ItemField[message.field]
                            : message.field;
                if (message.price != null && message.hasOwnProperty("price")) {
                    object.price = message.price;
                    if (options.oneofs)
                        object.value = "price";
                }
                if (message.metadata != null && message.hasOwnProperty("metadata")) {
                    object.metadata =
                        options.bytes === String
                            ? $util.base64.encode(message.metadata, 0, message.metadata.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.metadata)
                                : message.metadata;
                    if (options.oneofs)
                        object.value = "metadata";
                }
                return object;
            };
            /**
             * Converts this UpdateItem to JSON.
             * @function toJSON
             * @memberof market.mass.UpdateItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for UpdateItem
             * @function getTypeUrl
             * @memberof market.mass.UpdateItem
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UpdateItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.UpdateItem";
            };
            /**
             * ItemField enum.
             * @name market.mass.UpdateItem.ItemField
             * @enum {number}
             * @property {number} ITEM_FIELD_UNSPECIFIED=0 ITEM_FIELD_UNSPECIFIED value
             * @property {number} ITEM_FIELD_PRICE=1 ITEM_FIELD_PRICE value
             * @property {number} ITEM_FIELD_METADATA=2 ITEM_FIELD_METADATA value
             */
            UpdateItem.ItemField = (function () {
                const valuesById = {}, values = Object.create(valuesById);
                values[(valuesById[0] = "ITEM_FIELD_UNSPECIFIED")] = 0;
                values[(valuesById[1] = "ITEM_FIELD_PRICE")] = 1;
                values[(valuesById[2] = "ITEM_FIELD_METADATA")] = 2;
                return values;
            })();
            return UpdateItem;
        })();
        mass.CreateTag = (function () {
            /**
             * Properties of a CreateTag.
             * @memberof market.mass
             * @interface ICreateTag
             * @property {Uint8Array|null} [eventId] CreateTag eventId
             * @property {string|null} [name] CreateTag name
             */
            /**
             * Constructs a new CreateTag.
             * @memberof market.mass
             * @classdesc Represents a CreateTag.
             * @implements ICreateTag
             * @constructor
             * @param {market.mass.ICreateTag=} [properties] Properties to set
             */
            function CreateTag(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CreateTag eventId.
             * @member {Uint8Array} eventId
             * @memberof market.mass.CreateTag
             * @instance
             */
            CreateTag.prototype.eventId = $util.newBuffer([]);
            /**
             * CreateTag name.
             * @member {string} name
             * @memberof market.mass.CreateTag
             * @instance
             */
            CreateTag.prototype.name = "";
            /**
             * Creates a new CreateTag instance using the specified properties.
             * @function create
             * @memberof market.mass.CreateTag
             * @static
             * @param {market.mass.ICreateTag=} [properties] Properties to set
             * @returns {market.mass.CreateTag} CreateTag instance
             */
            CreateTag.create = function create(properties) {
                return new CreateTag(properties);
            };
            /**
             * Encodes the specified CreateTag message. Does not implicitly {@link market.mass.CreateTag.verify|verify} messages.
             * @function encode
             * @memberof market.mass.CreateTag
             * @static
             * @param {market.mass.ICreateTag} message CreateTag message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateTag.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.eventId != null &&
                    Object.hasOwnProperty.call(message, "eventId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.eventId);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.name);
                return writer;
            };
            /**
             * Encodes the specified CreateTag message, length delimited. Does not implicitly {@link market.mass.CreateTag.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.CreateTag
             * @static
             * @param {market.mass.ICreateTag} message CreateTag message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateTag.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CreateTag message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.CreateTag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.CreateTag} CreateTag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateTag.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.CreateTag();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.eventId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.name = reader.string();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CreateTag message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.CreateTag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.CreateTag} CreateTag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateTag.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CreateTag message.
             * @function verify
             * @memberof market.mass.CreateTag
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateTag.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    if (!((message.eventId && typeof message.eventId.length === "number") ||
                        $util.isString(message.eventId)))
                        return "eventId: buffer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                return null;
            };
            /**
             * Creates a CreateTag message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.CreateTag
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.CreateTag} CreateTag
             */
            CreateTag.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.CreateTag)
                    return object;
                let message = new $root.market.mass.CreateTag();
                if (object.eventId != null)
                    if (typeof object.eventId === "string")
                        $util.base64.decode(object.eventId, (message.eventId = $util.newBuffer($util.base64.length(object.eventId))), 0);
                    else if (object.eventId.length >= 0)
                        message.eventId = object.eventId;
                if (object.name != null)
                    message.name = String(object.name);
                return message;
            };
            /**
             * Creates a plain object from a CreateTag message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.CreateTag
             * @static
             * @param {market.mass.CreateTag} message CreateTag
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateTag.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.eventId = "";
                    else {
                        object.eventId = [];
                        if (options.bytes !== Array)
                            object.eventId = $util.newBuffer(object.eventId);
                    }
                    object.name = "";
                }
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    object.eventId =
                        options.bytes === String
                            ? $util.base64.encode(message.eventId, 0, message.eventId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.eventId)
                                : message.eventId;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                return object;
            };
            /**
             * Converts this CreateTag to JSON.
             * @function toJSON
             * @memberof market.mass.CreateTag
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateTag.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for CreateTag
             * @function getTypeUrl
             * @memberof market.mass.CreateTag
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CreateTag.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.CreateTag";
            };
            return CreateTag;
        })();
        mass.AddToTag = (function () {
            /**
             * Properties of an AddToTag.
             * @memberof market.mass
             * @interface IAddToTag
             * @property {Uint8Array|null} [eventId] AddToTag eventId
             * @property {Uint8Array|null} [tagId] AddToTag tagId
             * @property {Uint8Array|null} [itemId] AddToTag itemId
             */
            /**
             * Constructs a new AddToTag.
             * @memberof market.mass
             * @classdesc Represents an AddToTag.
             * @implements IAddToTag
             * @constructor
             * @param {market.mass.IAddToTag=} [properties] Properties to set
             */
            function AddToTag(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * AddToTag eventId.
             * @member {Uint8Array} eventId
             * @memberof market.mass.AddToTag
             * @instance
             */
            AddToTag.prototype.eventId = $util.newBuffer([]);
            /**
             * AddToTag tagId.
             * @member {Uint8Array} tagId
             * @memberof market.mass.AddToTag
             * @instance
             */
            AddToTag.prototype.tagId = $util.newBuffer([]);
            /**
             * AddToTag itemId.
             * @member {Uint8Array} itemId
             * @memberof market.mass.AddToTag
             * @instance
             */
            AddToTag.prototype.itemId = $util.newBuffer([]);
            /**
             * Creates a new AddToTag instance using the specified properties.
             * @function create
             * @memberof market.mass.AddToTag
             * @static
             * @param {market.mass.IAddToTag=} [properties] Properties to set
             * @returns {market.mass.AddToTag} AddToTag instance
             */
            AddToTag.create = function create(properties) {
                return new AddToTag(properties);
            };
            /**
             * Encodes the specified AddToTag message. Does not implicitly {@link market.mass.AddToTag.verify|verify} messages.
             * @function encode
             * @memberof market.mass.AddToTag
             * @static
             * @param {market.mass.IAddToTag} message AddToTag message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AddToTag.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.eventId != null &&
                    Object.hasOwnProperty.call(message, "eventId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.eventId);
                if (message.tagId != null &&
                    Object.hasOwnProperty.call(message, "tagId"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.tagId);
                if (message.itemId != null &&
                    Object.hasOwnProperty.call(message, "itemId"))
                    writer.uint32(/* id 3, wireType 2 =*/ 26).bytes(message.itemId);
                return writer;
            };
            /**
             * Encodes the specified AddToTag message, length delimited. Does not implicitly {@link market.mass.AddToTag.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.AddToTag
             * @static
             * @param {market.mass.IAddToTag} message AddToTag message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AddToTag.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes an AddToTag message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.AddToTag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.AddToTag} AddToTag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AddToTag.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.AddToTag();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.eventId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.tagId = reader.bytes();
                            break;
                        }
                        case 3: {
                            message.itemId = reader.bytes();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes an AddToTag message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.AddToTag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.AddToTag} AddToTag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AddToTag.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies an AddToTag message.
             * @function verify
             * @memberof market.mass.AddToTag
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AddToTag.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    if (!((message.eventId && typeof message.eventId.length === "number") ||
                        $util.isString(message.eventId)))
                        return "eventId: buffer expected";
                if (message.tagId != null && message.hasOwnProperty("tagId"))
                    if (!((message.tagId && typeof message.tagId.length === "number") ||
                        $util.isString(message.tagId)))
                        return "tagId: buffer expected";
                if (message.itemId != null && message.hasOwnProperty("itemId"))
                    if (!((message.itemId && typeof message.itemId.length === "number") ||
                        $util.isString(message.itemId)))
                        return "itemId: buffer expected";
                return null;
            };
            /**
             * Creates an AddToTag message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.AddToTag
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.AddToTag} AddToTag
             */
            AddToTag.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.AddToTag)
                    return object;
                let message = new $root.market.mass.AddToTag();
                if (object.eventId != null)
                    if (typeof object.eventId === "string")
                        $util.base64.decode(object.eventId, (message.eventId = $util.newBuffer($util.base64.length(object.eventId))), 0);
                    else if (object.eventId.length >= 0)
                        message.eventId = object.eventId;
                if (object.tagId != null)
                    if (typeof object.tagId === "string")
                        $util.base64.decode(object.tagId, (message.tagId = $util.newBuffer($util.base64.length(object.tagId))), 0);
                    else if (object.tagId.length >= 0)
                        message.tagId = object.tagId;
                if (object.itemId != null)
                    if (typeof object.itemId === "string")
                        $util.base64.decode(object.itemId, (message.itemId = $util.newBuffer($util.base64.length(object.itemId))), 0);
                    else if (object.itemId.length >= 0)
                        message.itemId = object.itemId;
                return message;
            };
            /**
             * Creates a plain object from an AddToTag message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.AddToTag
             * @static
             * @param {market.mass.AddToTag} message AddToTag
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AddToTag.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.eventId = "";
                    else {
                        object.eventId = [];
                        if (options.bytes !== Array)
                            object.eventId = $util.newBuffer(object.eventId);
                    }
                    if (options.bytes === String)
                        object.tagId = "";
                    else {
                        object.tagId = [];
                        if (options.bytes !== Array)
                            object.tagId = $util.newBuffer(object.tagId);
                    }
                    if (options.bytes === String)
                        object.itemId = "";
                    else {
                        object.itemId = [];
                        if (options.bytes !== Array)
                            object.itemId = $util.newBuffer(object.itemId);
                    }
                }
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    object.eventId =
                        options.bytes === String
                            ? $util.base64.encode(message.eventId, 0, message.eventId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.eventId)
                                : message.eventId;
                if (message.tagId != null && message.hasOwnProperty("tagId"))
                    object.tagId =
                        options.bytes === String
                            ? $util.base64.encode(message.tagId, 0, message.tagId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.tagId)
                                : message.tagId;
                if (message.itemId != null && message.hasOwnProperty("itemId"))
                    object.itemId =
                        options.bytes === String
                            ? $util.base64.encode(message.itemId, 0, message.itemId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.itemId)
                                : message.itemId;
                return object;
            };
            /**
             * Converts this AddToTag to JSON.
             * @function toJSON
             * @memberof market.mass.AddToTag
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AddToTag.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for AddToTag
             * @function getTypeUrl
             * @memberof market.mass.AddToTag
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AddToTag.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.AddToTag";
            };
            return AddToTag;
        })();
        mass.RemoveFromTag = (function () {
            /**
             * Properties of a RemoveFromTag.
             * @memberof market.mass
             * @interface IRemoveFromTag
             * @property {Uint8Array|null} [eventId] RemoveFromTag eventId
             * @property {Uint8Array|null} [tagId] RemoveFromTag tagId
             * @property {Uint8Array|null} [itemId] RemoveFromTag itemId
             */
            /**
             * Constructs a new RemoveFromTag.
             * @memberof market.mass
             * @classdesc Represents a RemoveFromTag.
             * @implements IRemoveFromTag
             * @constructor
             * @param {market.mass.IRemoveFromTag=} [properties] Properties to set
             */
            function RemoveFromTag(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * RemoveFromTag eventId.
             * @member {Uint8Array} eventId
             * @memberof market.mass.RemoveFromTag
             * @instance
             */
            RemoveFromTag.prototype.eventId = $util.newBuffer([]);
            /**
             * RemoveFromTag tagId.
             * @member {Uint8Array} tagId
             * @memberof market.mass.RemoveFromTag
             * @instance
             */
            RemoveFromTag.prototype.tagId = $util.newBuffer([]);
            /**
             * RemoveFromTag itemId.
             * @member {Uint8Array} itemId
             * @memberof market.mass.RemoveFromTag
             * @instance
             */
            RemoveFromTag.prototype.itemId = $util.newBuffer([]);
            /**
             * Creates a new RemoveFromTag instance using the specified properties.
             * @function create
             * @memberof market.mass.RemoveFromTag
             * @static
             * @param {market.mass.IRemoveFromTag=} [properties] Properties to set
             * @returns {market.mass.RemoveFromTag} RemoveFromTag instance
             */
            RemoveFromTag.create = function create(properties) {
                return new RemoveFromTag(properties);
            };
            /**
             * Encodes the specified RemoveFromTag message. Does not implicitly {@link market.mass.RemoveFromTag.verify|verify} messages.
             * @function encode
             * @memberof market.mass.RemoveFromTag
             * @static
             * @param {market.mass.IRemoveFromTag} message RemoveFromTag message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RemoveFromTag.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.eventId != null &&
                    Object.hasOwnProperty.call(message, "eventId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.eventId);
                if (message.tagId != null &&
                    Object.hasOwnProperty.call(message, "tagId"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.tagId);
                if (message.itemId != null &&
                    Object.hasOwnProperty.call(message, "itemId"))
                    writer.uint32(/* id 3, wireType 2 =*/ 26).bytes(message.itemId);
                return writer;
            };
            /**
             * Encodes the specified RemoveFromTag message, length delimited. Does not implicitly {@link market.mass.RemoveFromTag.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.RemoveFromTag
             * @static
             * @param {market.mass.IRemoveFromTag} message RemoveFromTag message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RemoveFromTag.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a RemoveFromTag message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.RemoveFromTag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.RemoveFromTag} RemoveFromTag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RemoveFromTag.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.RemoveFromTag();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.eventId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.tagId = reader.bytes();
                            break;
                        }
                        case 3: {
                            message.itemId = reader.bytes();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a RemoveFromTag message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.RemoveFromTag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.RemoveFromTag} RemoveFromTag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RemoveFromTag.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a RemoveFromTag message.
             * @function verify
             * @memberof market.mass.RemoveFromTag
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RemoveFromTag.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    if (!((message.eventId && typeof message.eventId.length === "number") ||
                        $util.isString(message.eventId)))
                        return "eventId: buffer expected";
                if (message.tagId != null && message.hasOwnProperty("tagId"))
                    if (!((message.tagId && typeof message.tagId.length === "number") ||
                        $util.isString(message.tagId)))
                        return "tagId: buffer expected";
                if (message.itemId != null && message.hasOwnProperty("itemId"))
                    if (!((message.itemId && typeof message.itemId.length === "number") ||
                        $util.isString(message.itemId)))
                        return "itemId: buffer expected";
                return null;
            };
            /**
             * Creates a RemoveFromTag message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.RemoveFromTag
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.RemoveFromTag} RemoveFromTag
             */
            RemoveFromTag.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.RemoveFromTag)
                    return object;
                let message = new $root.market.mass.RemoveFromTag();
                if (object.eventId != null)
                    if (typeof object.eventId === "string")
                        $util.base64.decode(object.eventId, (message.eventId = $util.newBuffer($util.base64.length(object.eventId))), 0);
                    else if (object.eventId.length >= 0)
                        message.eventId = object.eventId;
                if (object.tagId != null)
                    if (typeof object.tagId === "string")
                        $util.base64.decode(object.tagId, (message.tagId = $util.newBuffer($util.base64.length(object.tagId))), 0);
                    else if (object.tagId.length >= 0)
                        message.tagId = object.tagId;
                if (object.itemId != null)
                    if (typeof object.itemId === "string")
                        $util.base64.decode(object.itemId, (message.itemId = $util.newBuffer($util.base64.length(object.itemId))), 0);
                    else if (object.itemId.length >= 0)
                        message.itemId = object.itemId;
                return message;
            };
            /**
             * Creates a plain object from a RemoveFromTag message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.RemoveFromTag
             * @static
             * @param {market.mass.RemoveFromTag} message RemoveFromTag
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RemoveFromTag.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.eventId = "";
                    else {
                        object.eventId = [];
                        if (options.bytes !== Array)
                            object.eventId = $util.newBuffer(object.eventId);
                    }
                    if (options.bytes === String)
                        object.tagId = "";
                    else {
                        object.tagId = [];
                        if (options.bytes !== Array)
                            object.tagId = $util.newBuffer(object.tagId);
                    }
                    if (options.bytes === String)
                        object.itemId = "";
                    else {
                        object.itemId = [];
                        if (options.bytes !== Array)
                            object.itemId = $util.newBuffer(object.itemId);
                    }
                }
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    object.eventId =
                        options.bytes === String
                            ? $util.base64.encode(message.eventId, 0, message.eventId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.eventId)
                                : message.eventId;
                if (message.tagId != null && message.hasOwnProperty("tagId"))
                    object.tagId =
                        options.bytes === String
                            ? $util.base64.encode(message.tagId, 0, message.tagId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.tagId)
                                : message.tagId;
                if (message.itemId != null && message.hasOwnProperty("itemId"))
                    object.itemId =
                        options.bytes === String
                            ? $util.base64.encode(message.itemId, 0, message.itemId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.itemId)
                                : message.itemId;
                return object;
            };
            /**
             * Converts this RemoveFromTag to JSON.
             * @function toJSON
             * @memberof market.mass.RemoveFromTag
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RemoveFromTag.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for RemoveFromTag
             * @function getTypeUrl
             * @memberof market.mass.RemoveFromTag
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RemoveFromTag.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.RemoveFromTag";
            };
            return RemoveFromTag;
        })();
        mass.RenameTag = (function () {
            /**
             * Properties of a RenameTag.
             * @memberof market.mass
             * @interface IRenameTag
             * @property {Uint8Array|null} [eventId] RenameTag eventId
             * @property {Uint8Array|null} [tagId] RenameTag tagId
             * @property {string|null} [name] RenameTag name
             */
            /**
             * Constructs a new RenameTag.
             * @memberof market.mass
             * @classdesc Represents a RenameTag.
             * @implements IRenameTag
             * @constructor
             * @param {market.mass.IRenameTag=} [properties] Properties to set
             */
            function RenameTag(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * RenameTag eventId.
             * @member {Uint8Array} eventId
             * @memberof market.mass.RenameTag
             * @instance
             */
            RenameTag.prototype.eventId = $util.newBuffer([]);
            /**
             * RenameTag tagId.
             * @member {Uint8Array} tagId
             * @memberof market.mass.RenameTag
             * @instance
             */
            RenameTag.prototype.tagId = $util.newBuffer([]);
            /**
             * RenameTag name.
             * @member {string} name
             * @memberof market.mass.RenameTag
             * @instance
             */
            RenameTag.prototype.name = "";
            /**
             * Creates a new RenameTag instance using the specified properties.
             * @function create
             * @memberof market.mass.RenameTag
             * @static
             * @param {market.mass.IRenameTag=} [properties] Properties to set
             * @returns {market.mass.RenameTag} RenameTag instance
             */
            RenameTag.create = function create(properties) {
                return new RenameTag(properties);
            };
            /**
             * Encodes the specified RenameTag message. Does not implicitly {@link market.mass.RenameTag.verify|verify} messages.
             * @function encode
             * @memberof market.mass.RenameTag
             * @static
             * @param {market.mass.IRenameTag} message RenameTag message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenameTag.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.eventId != null &&
                    Object.hasOwnProperty.call(message, "eventId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.eventId);
                if (message.tagId != null &&
                    Object.hasOwnProperty.call(message, "tagId"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.tagId);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.name);
                return writer;
            };
            /**
             * Encodes the specified RenameTag message, length delimited. Does not implicitly {@link market.mass.RenameTag.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.RenameTag
             * @static
             * @param {market.mass.IRenameTag} message RenameTag message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenameTag.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a RenameTag message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.RenameTag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.RenameTag} RenameTag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenameTag.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.RenameTag();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.eventId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.tagId = reader.bytes();
                            break;
                        }
                        case 3: {
                            message.name = reader.string();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a RenameTag message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.RenameTag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.RenameTag} RenameTag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenameTag.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a RenameTag message.
             * @function verify
             * @memberof market.mass.RenameTag
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RenameTag.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    if (!((message.eventId && typeof message.eventId.length === "number") ||
                        $util.isString(message.eventId)))
                        return "eventId: buffer expected";
                if (message.tagId != null && message.hasOwnProperty("tagId"))
                    if (!((message.tagId && typeof message.tagId.length === "number") ||
                        $util.isString(message.tagId)))
                        return "tagId: buffer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                return null;
            };
            /**
             * Creates a RenameTag message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.RenameTag
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.RenameTag} RenameTag
             */
            RenameTag.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.RenameTag)
                    return object;
                let message = new $root.market.mass.RenameTag();
                if (object.eventId != null)
                    if (typeof object.eventId === "string")
                        $util.base64.decode(object.eventId, (message.eventId = $util.newBuffer($util.base64.length(object.eventId))), 0);
                    else if (object.eventId.length >= 0)
                        message.eventId = object.eventId;
                if (object.tagId != null)
                    if (typeof object.tagId === "string")
                        $util.base64.decode(object.tagId, (message.tagId = $util.newBuffer($util.base64.length(object.tagId))), 0);
                    else if (object.tagId.length >= 0)
                        message.tagId = object.tagId;
                if (object.name != null)
                    message.name = String(object.name);
                return message;
            };
            /**
             * Creates a plain object from a RenameTag message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.RenameTag
             * @static
             * @param {market.mass.RenameTag} message RenameTag
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RenameTag.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.eventId = "";
                    else {
                        object.eventId = [];
                        if (options.bytes !== Array)
                            object.eventId = $util.newBuffer(object.eventId);
                    }
                    if (options.bytes === String)
                        object.tagId = "";
                    else {
                        object.tagId = [];
                        if (options.bytes !== Array)
                            object.tagId = $util.newBuffer(object.tagId);
                    }
                    object.name = "";
                }
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    object.eventId =
                        options.bytes === String
                            ? $util.base64.encode(message.eventId, 0, message.eventId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.eventId)
                                : message.eventId;
                if (message.tagId != null && message.hasOwnProperty("tagId"))
                    object.tagId =
                        options.bytes === String
                            ? $util.base64.encode(message.tagId, 0, message.tagId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.tagId)
                                : message.tagId;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                return object;
            };
            /**
             * Converts this RenameTag to JSON.
             * @function toJSON
             * @memberof market.mass.RenameTag
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RenameTag.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for RenameTag
             * @function getTypeUrl
             * @memberof market.mass.RenameTag
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RenameTag.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.RenameTag";
            };
            return RenameTag;
        })();
        mass.DeleteTag = (function () {
            /**
             * Properties of a DeleteTag.
             * @memberof market.mass
             * @interface IDeleteTag
             * @property {Uint8Array|null} [eventId] DeleteTag eventId
             * @property {Uint8Array|null} [tagId] DeleteTag tagId
             */
            /**
             * Constructs a new DeleteTag.
             * @memberof market.mass
             * @classdesc Represents a DeleteTag.
             * @implements IDeleteTag
             * @constructor
             * @param {market.mass.IDeleteTag=} [properties] Properties to set
             */
            function DeleteTag(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * DeleteTag eventId.
             * @member {Uint8Array} eventId
             * @memberof market.mass.DeleteTag
             * @instance
             */
            DeleteTag.prototype.eventId = $util.newBuffer([]);
            /**
             * DeleteTag tagId.
             * @member {Uint8Array} tagId
             * @memberof market.mass.DeleteTag
             * @instance
             */
            DeleteTag.prototype.tagId = $util.newBuffer([]);
            /**
             * Creates a new DeleteTag instance using the specified properties.
             * @function create
             * @memberof market.mass.DeleteTag
             * @static
             * @param {market.mass.IDeleteTag=} [properties] Properties to set
             * @returns {market.mass.DeleteTag} DeleteTag instance
             */
            DeleteTag.create = function create(properties) {
                return new DeleteTag(properties);
            };
            /**
             * Encodes the specified DeleteTag message. Does not implicitly {@link market.mass.DeleteTag.verify|verify} messages.
             * @function encode
             * @memberof market.mass.DeleteTag
             * @static
             * @param {market.mass.IDeleteTag} message DeleteTag message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteTag.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.eventId != null &&
                    Object.hasOwnProperty.call(message, "eventId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.eventId);
                if (message.tagId != null &&
                    Object.hasOwnProperty.call(message, "tagId"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.tagId);
                return writer;
            };
            /**
             * Encodes the specified DeleteTag message, length delimited. Does not implicitly {@link market.mass.DeleteTag.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.DeleteTag
             * @static
             * @param {market.mass.IDeleteTag} message DeleteTag message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteTag.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a DeleteTag message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.DeleteTag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.DeleteTag} DeleteTag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteTag.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.DeleteTag();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.eventId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.tagId = reader.bytes();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a DeleteTag message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.DeleteTag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.DeleteTag} DeleteTag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteTag.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a DeleteTag message.
             * @function verify
             * @memberof market.mass.DeleteTag
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeleteTag.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    if (!((message.eventId && typeof message.eventId.length === "number") ||
                        $util.isString(message.eventId)))
                        return "eventId: buffer expected";
                if (message.tagId != null && message.hasOwnProperty("tagId"))
                    if (!((message.tagId && typeof message.tagId.length === "number") ||
                        $util.isString(message.tagId)))
                        return "tagId: buffer expected";
                return null;
            };
            /**
             * Creates a DeleteTag message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.DeleteTag
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.DeleteTag} DeleteTag
             */
            DeleteTag.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.DeleteTag)
                    return object;
                let message = new $root.market.mass.DeleteTag();
                if (object.eventId != null)
                    if (typeof object.eventId === "string")
                        $util.base64.decode(object.eventId, (message.eventId = $util.newBuffer($util.base64.length(object.eventId))), 0);
                    else if (object.eventId.length >= 0)
                        message.eventId = object.eventId;
                if (object.tagId != null)
                    if (typeof object.tagId === "string")
                        $util.base64.decode(object.tagId, (message.tagId = $util.newBuffer($util.base64.length(object.tagId))), 0);
                    else if (object.tagId.length >= 0)
                        message.tagId = object.tagId;
                return message;
            };
            /**
             * Creates a plain object from a DeleteTag message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.DeleteTag
             * @static
             * @param {market.mass.DeleteTag} message DeleteTag
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteTag.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.eventId = "";
                    else {
                        object.eventId = [];
                        if (options.bytes !== Array)
                            object.eventId = $util.newBuffer(object.eventId);
                    }
                    if (options.bytes === String)
                        object.tagId = "";
                    else {
                        object.tagId = [];
                        if (options.bytes !== Array)
                            object.tagId = $util.newBuffer(object.tagId);
                    }
                }
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    object.eventId =
                        options.bytes === String
                            ? $util.base64.encode(message.eventId, 0, message.eventId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.eventId)
                                : message.eventId;
                if (message.tagId != null && message.hasOwnProperty("tagId"))
                    object.tagId =
                        options.bytes === String
                            ? $util.base64.encode(message.tagId, 0, message.tagId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.tagId)
                                : message.tagId;
                return object;
            };
            /**
             * Converts this DeleteTag to JSON.
             * @function toJSON
             * @memberof market.mass.DeleteTag
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeleteTag.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for DeleteTag
             * @function getTypeUrl
             * @memberof market.mass.DeleteTag
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DeleteTag.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.DeleteTag";
            };
            return DeleteTag;
        })();
        mass.ChangeStock = (function () {
            /**
             * Properties of a ChangeStock.
             * @memberof market.mass
             * @interface IChangeStock
             * @property {Uint8Array|null} [eventId] ChangeStock eventId
             * @property {Array.<Uint8Array>|null} [itemIds] ChangeStock itemIds
             * @property {Array.<number>|null} [diffs] ChangeStock diffs
             * @property {Uint8Array|null} [cartId] ChangeStock cartId
             * @property {Uint8Array|null} [txHash] ChangeStock txHash
             */
            /**
             * Constructs a new ChangeStock.
             * @memberof market.mass
             * @classdesc Represents a ChangeStock.
             * @implements IChangeStock
             * @constructor
             * @param {market.mass.IChangeStock=} [properties] Properties to set
             */
            function ChangeStock(properties) {
                this.itemIds = [];
                this.diffs = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * ChangeStock eventId.
             * @member {Uint8Array} eventId
             * @memberof market.mass.ChangeStock
             * @instance
             */
            ChangeStock.prototype.eventId = $util.newBuffer([]);
            /**
             * ChangeStock itemIds.
             * @member {Array.<Uint8Array>} itemIds
             * @memberof market.mass.ChangeStock
             * @instance
             */
            ChangeStock.prototype.itemIds = $util.emptyArray;
            /**
             * ChangeStock diffs.
             * @member {Array.<number>} diffs
             * @memberof market.mass.ChangeStock
             * @instance
             */
            ChangeStock.prototype.diffs = $util.emptyArray;
            /**
             * ChangeStock cartId.
             * @member {Uint8Array} cartId
             * @memberof market.mass.ChangeStock
             * @instance
             */
            ChangeStock.prototype.cartId = $util.newBuffer([]);
            /**
             * ChangeStock txHash.
             * @member {Uint8Array} txHash
             * @memberof market.mass.ChangeStock
             * @instance
             */
            ChangeStock.prototype.txHash = $util.newBuffer([]);
            /**
             * Creates a new ChangeStock instance using the specified properties.
             * @function create
             * @memberof market.mass.ChangeStock
             * @static
             * @param {market.mass.IChangeStock=} [properties] Properties to set
             * @returns {market.mass.ChangeStock} ChangeStock instance
             */
            ChangeStock.create = function create(properties) {
                return new ChangeStock(properties);
            };
            /**
             * Encodes the specified ChangeStock message. Does not implicitly {@link market.mass.ChangeStock.verify|verify} messages.
             * @function encode
             * @memberof market.mass.ChangeStock
             * @static
             * @param {market.mass.IChangeStock} message ChangeStock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChangeStock.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.eventId != null &&
                    Object.hasOwnProperty.call(message, "eventId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.eventId);
                if (message.itemIds != null && message.itemIds.length)
                    for (let i = 0; i < message.itemIds.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.itemIds[i]);
                if (message.diffs != null && message.diffs.length) {
                    writer.uint32(/* id 3, wireType 2 =*/ 26).fork();
                    for (let i = 0; i < message.diffs.length; ++i)
                        writer.sint32(message.diffs[i]);
                    writer.ldelim();
                }
                if (message.cartId != null &&
                    Object.hasOwnProperty.call(message, "cartId"))
                    writer.uint32(/* id 4, wireType 2 =*/ 34).bytes(message.cartId);
                if (message.txHash != null &&
                    Object.hasOwnProperty.call(message, "txHash"))
                    writer.uint32(/* id 5, wireType 2 =*/ 42).bytes(message.txHash);
                return writer;
            };
            /**
             * Encodes the specified ChangeStock message, length delimited. Does not implicitly {@link market.mass.ChangeStock.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.ChangeStock
             * @static
             * @param {market.mass.IChangeStock} message ChangeStock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChangeStock.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a ChangeStock message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.ChangeStock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.ChangeStock} ChangeStock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChangeStock.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.ChangeStock();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.eventId = reader.bytes();
                            break;
                        }
                        case 2: {
                            if (!(message.itemIds && message.itemIds.length))
                                message.itemIds = [];
                            message.itemIds.push(reader.bytes());
                            break;
                        }
                        case 3: {
                            if (!(message.diffs && message.diffs.length))
                                message.diffs = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.diffs.push(reader.sint32());
                            }
                            else
                                message.diffs.push(reader.sint32());
                            break;
                        }
                        case 4: {
                            message.cartId = reader.bytes();
                            break;
                        }
                        case 5: {
                            message.txHash = reader.bytes();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a ChangeStock message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.ChangeStock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.ChangeStock} ChangeStock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChangeStock.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a ChangeStock message.
             * @function verify
             * @memberof market.mass.ChangeStock
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChangeStock.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    if (!((message.eventId && typeof message.eventId.length === "number") ||
                        $util.isString(message.eventId)))
                        return "eventId: buffer expected";
                if (message.itemIds != null && message.hasOwnProperty("itemIds")) {
                    if (!Array.isArray(message.itemIds))
                        return "itemIds: array expected";
                    for (let i = 0; i < message.itemIds.length; ++i)
                        if (!((message.itemIds[i] &&
                            typeof message.itemIds[i].length === "number") ||
                            $util.isString(message.itemIds[i])))
                            return "itemIds: buffer[] expected";
                }
                if (message.diffs != null && message.hasOwnProperty("diffs")) {
                    if (!Array.isArray(message.diffs))
                        return "diffs: array expected";
                    for (let i = 0; i < message.diffs.length; ++i)
                        if (!$util.isInteger(message.diffs[i]))
                            return "diffs: integer[] expected";
                }
                if (message.cartId != null && message.hasOwnProperty("cartId"))
                    if (!((message.cartId && typeof message.cartId.length === "number") ||
                        $util.isString(message.cartId)))
                        return "cartId: buffer expected";
                if (message.txHash != null && message.hasOwnProperty("txHash"))
                    if (!((message.txHash && typeof message.txHash.length === "number") ||
                        $util.isString(message.txHash)))
                        return "txHash: buffer expected";
                return null;
            };
            /**
             * Creates a ChangeStock message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.ChangeStock
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.ChangeStock} ChangeStock
             */
            ChangeStock.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.ChangeStock)
                    return object;
                let message = new $root.market.mass.ChangeStock();
                if (object.eventId != null)
                    if (typeof object.eventId === "string")
                        $util.base64.decode(object.eventId, (message.eventId = $util.newBuffer($util.base64.length(object.eventId))), 0);
                    else if (object.eventId.length >= 0)
                        message.eventId = object.eventId;
                if (object.itemIds) {
                    if (!Array.isArray(object.itemIds))
                        throw TypeError(".market.mass.ChangeStock.itemIds: array expected");
                    message.itemIds = [];
                    for (let i = 0; i < object.itemIds.length; ++i)
                        if (typeof object.itemIds[i] === "string")
                            $util.base64.decode(object.itemIds[i], (message.itemIds[i] = $util.newBuffer($util.base64.length(object.itemIds[i]))), 0);
                        else if (object.itemIds[i].length >= 0)
                            message.itemIds[i] = object.itemIds[i];
                }
                if (object.diffs) {
                    if (!Array.isArray(object.diffs))
                        throw TypeError(".market.mass.ChangeStock.diffs: array expected");
                    message.diffs = [];
                    for (let i = 0; i < object.diffs.length; ++i)
                        message.diffs[i] = object.diffs[i] | 0;
                }
                if (object.cartId != null)
                    if (typeof object.cartId === "string")
                        $util.base64.decode(object.cartId, (message.cartId = $util.newBuffer($util.base64.length(object.cartId))), 0);
                    else if (object.cartId.length >= 0)
                        message.cartId = object.cartId;
                if (object.txHash != null)
                    if (typeof object.txHash === "string")
                        $util.base64.decode(object.txHash, (message.txHash = $util.newBuffer($util.base64.length(object.txHash))), 0);
                    else if (object.txHash.length >= 0)
                        message.txHash = object.txHash;
                return message;
            };
            /**
             * Creates a plain object from a ChangeStock message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.ChangeStock
             * @static
             * @param {market.mass.ChangeStock} message ChangeStock
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChangeStock.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.itemIds = [];
                    object.diffs = [];
                }
                if (options.defaults) {
                    if (options.bytes === String)
                        object.eventId = "";
                    else {
                        object.eventId = [];
                        if (options.bytes !== Array)
                            object.eventId = $util.newBuffer(object.eventId);
                    }
                    if (options.bytes === String)
                        object.cartId = "";
                    else {
                        object.cartId = [];
                        if (options.bytes !== Array)
                            object.cartId = $util.newBuffer(object.cartId);
                    }
                    if (options.bytes === String)
                        object.txHash = "";
                    else {
                        object.txHash = [];
                        if (options.bytes !== Array)
                            object.txHash = $util.newBuffer(object.txHash);
                    }
                }
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    object.eventId =
                        options.bytes === String
                            ? $util.base64.encode(message.eventId, 0, message.eventId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.eventId)
                                : message.eventId;
                if (message.itemIds && message.itemIds.length) {
                    object.itemIds = [];
                    for (let j = 0; j < message.itemIds.length; ++j)
                        object.itemIds[j] =
                            options.bytes === String
                                ? $util.base64.encode(message.itemIds[j], 0, message.itemIds[j].length)
                                : options.bytes === Array
                                    ? Array.prototype.slice.call(message.itemIds[j])
                                    : message.itemIds[j];
                }
                if (message.diffs && message.diffs.length) {
                    object.diffs = [];
                    for (let j = 0; j < message.diffs.length; ++j)
                        object.diffs[j] = message.diffs[j];
                }
                if (message.cartId != null && message.hasOwnProperty("cartId"))
                    object.cartId =
                        options.bytes === String
                            ? $util.base64.encode(message.cartId, 0, message.cartId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.cartId)
                                : message.cartId;
                if (message.txHash != null && message.hasOwnProperty("txHash"))
                    object.txHash =
                        options.bytes === String
                            ? $util.base64.encode(message.txHash, 0, message.txHash.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.txHash)
                                : message.txHash;
                return object;
            };
            /**
             * Converts this ChangeStock to JSON.
             * @function toJSON
             * @memberof market.mass.ChangeStock
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChangeStock.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for ChangeStock
             * @function getTypeUrl
             * @memberof market.mass.ChangeStock
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ChangeStock.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.ChangeStock";
            };
            return ChangeStock;
        })();
        mass.NewKeyCard = (function () {
            /**
             * Properties of a NewKeyCard.
             * @memberof market.mass
             * @interface INewKeyCard
             * @property {Uint8Array|null} [eventId] NewKeyCard eventId
             * @property {Uint8Array|null} [userWalletAddr] NewKeyCard userWalletAddr
             * @property {Uint8Array|null} [cardPublicKey] NewKeyCard cardPublicKey
             */
            /**
             * Constructs a new NewKeyCard.
             * @memberof market.mass
             * @classdesc Represents a NewKeyCard.
             * @implements INewKeyCard
             * @constructor
             * @param {market.mass.INewKeyCard=} [properties] Properties to set
             */
            function NewKeyCard(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * NewKeyCard eventId.
             * @member {Uint8Array} eventId
             * @memberof market.mass.NewKeyCard
             * @instance
             */
            NewKeyCard.prototype.eventId = $util.newBuffer([]);
            /**
             * NewKeyCard userWalletAddr.
             * @member {Uint8Array} userWalletAddr
             * @memberof market.mass.NewKeyCard
             * @instance
             */
            NewKeyCard.prototype.userWalletAddr = $util.newBuffer([]);
            /**
             * NewKeyCard cardPublicKey.
             * @member {Uint8Array} cardPublicKey
             * @memberof market.mass.NewKeyCard
             * @instance
             */
            NewKeyCard.prototype.cardPublicKey = $util.newBuffer([]);
            /**
             * Creates a new NewKeyCard instance using the specified properties.
             * @function create
             * @memberof market.mass.NewKeyCard
             * @static
             * @param {market.mass.INewKeyCard=} [properties] Properties to set
             * @returns {market.mass.NewKeyCard} NewKeyCard instance
             */
            NewKeyCard.create = function create(properties) {
                return new NewKeyCard(properties);
            };
            /**
             * Encodes the specified NewKeyCard message. Does not implicitly {@link market.mass.NewKeyCard.verify|verify} messages.
             * @function encode
             * @memberof market.mass.NewKeyCard
             * @static
             * @param {market.mass.INewKeyCard} message NewKeyCard message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NewKeyCard.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.eventId != null &&
                    Object.hasOwnProperty.call(message, "eventId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.eventId);
                if (message.userWalletAddr != null &&
                    Object.hasOwnProperty.call(message, "userWalletAddr"))
                    writer
                        .uint32(/* id 2, wireType 2 =*/ 18)
                        .bytes(message.userWalletAddr);
                if (message.cardPublicKey != null &&
                    Object.hasOwnProperty.call(message, "cardPublicKey"))
                    writer
                        .uint32(/* id 3, wireType 2 =*/ 26)
                        .bytes(message.cardPublicKey);
                return writer;
            };
            /**
             * Encodes the specified NewKeyCard message, length delimited. Does not implicitly {@link market.mass.NewKeyCard.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.NewKeyCard
             * @static
             * @param {market.mass.INewKeyCard} message NewKeyCard message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NewKeyCard.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a NewKeyCard message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.NewKeyCard
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.NewKeyCard} NewKeyCard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NewKeyCard.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.NewKeyCard();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.eventId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.userWalletAddr = reader.bytes();
                            break;
                        }
                        case 3: {
                            message.cardPublicKey = reader.bytes();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a NewKeyCard message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.NewKeyCard
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.NewKeyCard} NewKeyCard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NewKeyCard.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a NewKeyCard message.
             * @function verify
             * @memberof market.mass.NewKeyCard
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NewKeyCard.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    if (!((message.eventId && typeof message.eventId.length === "number") ||
                        $util.isString(message.eventId)))
                        return "eventId: buffer expected";
                if (message.userWalletAddr != null &&
                    message.hasOwnProperty("userWalletAddr"))
                    if (!((message.userWalletAddr &&
                        typeof message.userWalletAddr.length === "number") ||
                        $util.isString(message.userWalletAddr)))
                        return "userWalletAddr: buffer expected";
                if (message.cardPublicKey != null &&
                    message.hasOwnProperty("cardPublicKey"))
                    if (!((message.cardPublicKey &&
                        typeof message.cardPublicKey.length === "number") ||
                        $util.isString(message.cardPublicKey)))
                        return "cardPublicKey: buffer expected";
                return null;
            };
            /**
             * Creates a NewKeyCard message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.NewKeyCard
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.NewKeyCard} NewKeyCard
             */
            NewKeyCard.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.NewKeyCard)
                    return object;
                let message = new $root.market.mass.NewKeyCard();
                if (object.eventId != null)
                    if (typeof object.eventId === "string")
                        $util.base64.decode(object.eventId, (message.eventId = $util.newBuffer($util.base64.length(object.eventId))), 0);
                    else if (object.eventId.length >= 0)
                        message.eventId = object.eventId;
                if (object.userWalletAddr != null)
                    if (typeof object.userWalletAddr === "string")
                        $util.base64.decode(object.userWalletAddr, (message.userWalletAddr = $util.newBuffer($util.base64.length(object.userWalletAddr))), 0);
                    else if (object.userWalletAddr.length >= 0)
                        message.userWalletAddr = object.userWalletAddr;
                if (object.cardPublicKey != null)
                    if (typeof object.cardPublicKey === "string")
                        $util.base64.decode(object.cardPublicKey, (message.cardPublicKey = $util.newBuffer($util.base64.length(object.cardPublicKey))), 0);
                    else if (object.cardPublicKey.length >= 0)
                        message.cardPublicKey = object.cardPublicKey;
                return message;
            };
            /**
             * Creates a plain object from a NewKeyCard message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.NewKeyCard
             * @static
             * @param {market.mass.NewKeyCard} message NewKeyCard
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NewKeyCard.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.eventId = "";
                    else {
                        object.eventId = [];
                        if (options.bytes !== Array)
                            object.eventId = $util.newBuffer(object.eventId);
                    }
                    if (options.bytes === String)
                        object.userWalletAddr = "";
                    else {
                        object.userWalletAddr = [];
                        if (options.bytes !== Array)
                            object.userWalletAddr = $util.newBuffer(object.userWalletAddr);
                    }
                    if (options.bytes === String)
                        object.cardPublicKey = "";
                    else {
                        object.cardPublicKey = [];
                        if (options.bytes !== Array)
                            object.cardPublicKey = $util.newBuffer(object.cardPublicKey);
                    }
                }
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    object.eventId =
                        options.bytes === String
                            ? $util.base64.encode(message.eventId, 0, message.eventId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.eventId)
                                : message.eventId;
                if (message.userWalletAddr != null &&
                    message.hasOwnProperty("userWalletAddr"))
                    object.userWalletAddr =
                        options.bytes === String
                            ? $util.base64.encode(message.userWalletAddr, 0, message.userWalletAddr.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.userWalletAddr)
                                : message.userWalletAddr;
                if (message.cardPublicKey != null &&
                    message.hasOwnProperty("cardPublicKey"))
                    object.cardPublicKey =
                        options.bytes === String
                            ? $util.base64.encode(message.cardPublicKey, 0, message.cardPublicKey.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.cardPublicKey)
                                : message.cardPublicKey;
                return object;
            };
            /**
             * Converts this NewKeyCard to JSON.
             * @function toJSON
             * @memberof market.mass.NewKeyCard
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NewKeyCard.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for NewKeyCard
             * @function getTypeUrl
             * @memberof market.mass.NewKeyCard
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            NewKeyCard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.NewKeyCard";
            };
            return NewKeyCard;
        })();
        mass.CreateCart = (function () {
            /**
             * Properties of a CreateCart.
             * @memberof market.mass
             * @interface ICreateCart
             * @property {Uint8Array|null} [eventId] CreateCart eventId
             */
            /**
             * Constructs a new CreateCart.
             * @memberof market.mass
             * @classdesc Represents a CreateCart.
             * @implements ICreateCart
             * @constructor
             * @param {market.mass.ICreateCart=} [properties] Properties to set
             */
            function CreateCart(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CreateCart eventId.
             * @member {Uint8Array} eventId
             * @memberof market.mass.CreateCart
             * @instance
             */
            CreateCart.prototype.eventId = $util.newBuffer([]);
            /**
             * Creates a new CreateCart instance using the specified properties.
             * @function create
             * @memberof market.mass.CreateCart
             * @static
             * @param {market.mass.ICreateCart=} [properties] Properties to set
             * @returns {market.mass.CreateCart} CreateCart instance
             */
            CreateCart.create = function create(properties) {
                return new CreateCart(properties);
            };
            /**
             * Encodes the specified CreateCart message. Does not implicitly {@link market.mass.CreateCart.verify|verify} messages.
             * @function encode
             * @memberof market.mass.CreateCart
             * @static
             * @param {market.mass.ICreateCart} message CreateCart message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateCart.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.eventId != null &&
                    Object.hasOwnProperty.call(message, "eventId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.eventId);
                return writer;
            };
            /**
             * Encodes the specified CreateCart message, length delimited. Does not implicitly {@link market.mass.CreateCart.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.CreateCart
             * @static
             * @param {market.mass.ICreateCart} message CreateCart message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateCart.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CreateCart message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.CreateCart
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.CreateCart} CreateCart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateCart.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.CreateCart();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.eventId = reader.bytes();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CreateCart message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.CreateCart
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.CreateCart} CreateCart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateCart.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CreateCart message.
             * @function verify
             * @memberof market.mass.CreateCart
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateCart.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    if (!((message.eventId && typeof message.eventId.length === "number") ||
                        $util.isString(message.eventId)))
                        return "eventId: buffer expected";
                return null;
            };
            /**
             * Creates a CreateCart message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.CreateCart
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.CreateCart} CreateCart
             */
            CreateCart.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.CreateCart)
                    return object;
                let message = new $root.market.mass.CreateCart();
                if (object.eventId != null)
                    if (typeof object.eventId === "string")
                        $util.base64.decode(object.eventId, (message.eventId = $util.newBuffer($util.base64.length(object.eventId))), 0);
                    else if (object.eventId.length >= 0)
                        message.eventId = object.eventId;
                return message;
            };
            /**
             * Creates a plain object from a CreateCart message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.CreateCart
             * @static
             * @param {market.mass.CreateCart} message CreateCart
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateCart.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.eventId = "";
                    else {
                        object.eventId = [];
                        if (options.bytes !== Array)
                            object.eventId = $util.newBuffer(object.eventId);
                    }
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    object.eventId =
                        options.bytes === String
                            ? $util.base64.encode(message.eventId, 0, message.eventId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.eventId)
                                : message.eventId;
                return object;
            };
            /**
             * Converts this CreateCart to JSON.
             * @function toJSON
             * @memberof market.mass.CreateCart
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateCart.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for CreateCart
             * @function getTypeUrl
             * @memberof market.mass.CreateCart
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CreateCart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.CreateCart";
            };
            return CreateCart;
        })();
        mass.ChangeCart = (function () {
            /**
             * Properties of a ChangeCart.
             * @memberof market.mass
             * @interface IChangeCart
             * @property {Uint8Array|null} [eventId] ChangeCart eventId
             * @property {Uint8Array|null} [cartId] ChangeCart cartId
             * @property {Uint8Array|null} [itemId] ChangeCart itemId
             * @property {number|null} [quantity] ChangeCart quantity
             */
            /**
             * Constructs a new ChangeCart.
             * @memberof market.mass
             * @classdesc Represents a ChangeCart.
             * @implements IChangeCart
             * @constructor
             * @param {market.mass.IChangeCart=} [properties] Properties to set
             */
            function ChangeCart(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * ChangeCart eventId.
             * @member {Uint8Array} eventId
             * @memberof market.mass.ChangeCart
             * @instance
             */
            ChangeCart.prototype.eventId = $util.newBuffer([]);
            /**
             * ChangeCart cartId.
             * @member {Uint8Array} cartId
             * @memberof market.mass.ChangeCart
             * @instance
             */
            ChangeCart.prototype.cartId = $util.newBuffer([]);
            /**
             * ChangeCart itemId.
             * @member {Uint8Array} itemId
             * @memberof market.mass.ChangeCart
             * @instance
             */
            ChangeCart.prototype.itemId = $util.newBuffer([]);
            /**
             * ChangeCart quantity.
             * @member {number} quantity
             * @memberof market.mass.ChangeCart
             * @instance
             */
            ChangeCart.prototype.quantity = 0;
            /**
             * Creates a new ChangeCart instance using the specified properties.
             * @function create
             * @memberof market.mass.ChangeCart
             * @static
             * @param {market.mass.IChangeCart=} [properties] Properties to set
             * @returns {market.mass.ChangeCart} ChangeCart instance
             */
            ChangeCart.create = function create(properties) {
                return new ChangeCart(properties);
            };
            /**
             * Encodes the specified ChangeCart message. Does not implicitly {@link market.mass.ChangeCart.verify|verify} messages.
             * @function encode
             * @memberof market.mass.ChangeCart
             * @static
             * @param {market.mass.IChangeCart} message ChangeCart message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChangeCart.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.eventId != null &&
                    Object.hasOwnProperty.call(message, "eventId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.eventId);
                if (message.cartId != null &&
                    Object.hasOwnProperty.call(message, "cartId"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.cartId);
                if (message.itemId != null &&
                    Object.hasOwnProperty.call(message, "itemId"))
                    writer.uint32(/* id 3, wireType 2 =*/ 26).bytes(message.itemId);
                if (message.quantity != null &&
                    Object.hasOwnProperty.call(message, "quantity"))
                    writer.uint32(/* id 4, wireType 0 =*/ 32).sint32(message.quantity);
                return writer;
            };
            /**
             * Encodes the specified ChangeCart message, length delimited. Does not implicitly {@link market.mass.ChangeCart.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.ChangeCart
             * @static
             * @param {market.mass.IChangeCart} message ChangeCart message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChangeCart.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a ChangeCart message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.ChangeCart
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.ChangeCart} ChangeCart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChangeCart.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.ChangeCart();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.eventId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.cartId = reader.bytes();
                            break;
                        }
                        case 3: {
                            message.itemId = reader.bytes();
                            break;
                        }
                        case 4: {
                            message.quantity = reader.sint32();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a ChangeCart message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.ChangeCart
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.ChangeCart} ChangeCart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChangeCart.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a ChangeCart message.
             * @function verify
             * @memberof market.mass.ChangeCart
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChangeCart.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    if (!((message.eventId && typeof message.eventId.length === "number") ||
                        $util.isString(message.eventId)))
                        return "eventId: buffer expected";
                if (message.cartId != null && message.hasOwnProperty("cartId"))
                    if (!((message.cartId && typeof message.cartId.length === "number") ||
                        $util.isString(message.cartId)))
                        return "cartId: buffer expected";
                if (message.itemId != null && message.hasOwnProperty("itemId"))
                    if (!((message.itemId && typeof message.itemId.length === "number") ||
                        $util.isString(message.itemId)))
                        return "itemId: buffer expected";
                if (message.quantity != null && message.hasOwnProperty("quantity"))
                    if (!$util.isInteger(message.quantity))
                        return "quantity: integer expected";
                return null;
            };
            /**
             * Creates a ChangeCart message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.ChangeCart
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.ChangeCart} ChangeCart
             */
            ChangeCart.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.ChangeCart)
                    return object;
                let message = new $root.market.mass.ChangeCart();
                if (object.eventId != null)
                    if (typeof object.eventId === "string")
                        $util.base64.decode(object.eventId, (message.eventId = $util.newBuffer($util.base64.length(object.eventId))), 0);
                    else if (object.eventId.length >= 0)
                        message.eventId = object.eventId;
                if (object.cartId != null)
                    if (typeof object.cartId === "string")
                        $util.base64.decode(object.cartId, (message.cartId = $util.newBuffer($util.base64.length(object.cartId))), 0);
                    else if (object.cartId.length >= 0)
                        message.cartId = object.cartId;
                if (object.itemId != null)
                    if (typeof object.itemId === "string")
                        $util.base64.decode(object.itemId, (message.itemId = $util.newBuffer($util.base64.length(object.itemId))), 0);
                    else if (object.itemId.length >= 0)
                        message.itemId = object.itemId;
                if (object.quantity != null)
                    message.quantity = object.quantity | 0;
                return message;
            };
            /**
             * Creates a plain object from a ChangeCart message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.ChangeCart
             * @static
             * @param {market.mass.ChangeCart} message ChangeCart
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChangeCart.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.eventId = "";
                    else {
                        object.eventId = [];
                        if (options.bytes !== Array)
                            object.eventId = $util.newBuffer(object.eventId);
                    }
                    if (options.bytes === String)
                        object.cartId = "";
                    else {
                        object.cartId = [];
                        if (options.bytes !== Array)
                            object.cartId = $util.newBuffer(object.cartId);
                    }
                    if (options.bytes === String)
                        object.itemId = "";
                    else {
                        object.itemId = [];
                        if (options.bytes !== Array)
                            object.itemId = $util.newBuffer(object.itemId);
                    }
                    object.quantity = 0;
                }
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    object.eventId =
                        options.bytes === String
                            ? $util.base64.encode(message.eventId, 0, message.eventId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.eventId)
                                : message.eventId;
                if (message.cartId != null && message.hasOwnProperty("cartId"))
                    object.cartId =
                        options.bytes === String
                            ? $util.base64.encode(message.cartId, 0, message.cartId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.cartId)
                                : message.cartId;
                if (message.itemId != null && message.hasOwnProperty("itemId"))
                    object.itemId =
                        options.bytes === String
                            ? $util.base64.encode(message.itemId, 0, message.itemId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.itemId)
                                : message.itemId;
                if (message.quantity != null && message.hasOwnProperty("quantity"))
                    object.quantity = message.quantity;
                return object;
            };
            /**
             * Converts this ChangeCart to JSON.
             * @function toJSON
             * @memberof market.mass.ChangeCart
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChangeCart.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for ChangeCart
             * @function getTypeUrl
             * @memberof market.mass.ChangeCart
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ChangeCart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.ChangeCart";
            };
            return ChangeCart;
        })();
        mass.CartFinalized = (function () {
            /**
             * Properties of a CartFinalized.
             * @memberof market.mass
             * @interface ICartFinalized
             * @property {Uint8Array|null} [eventId] CartFinalized eventId
             * @property {Uint8Array|null} [cartId] CartFinalized cartId
             * @property {Uint8Array|null} [purchaseAddr] CartFinalized purchaseAddr
             * @property {Uint8Array|null} [erc20Addr] CartFinalized erc20Addr
             * @property {string|null} [subTotal] CartFinalized subTotal
             * @property {string|null} [salesTax] CartFinalized salesTax
             * @property {string|null} [total] CartFinalized total
             * @property {string|null} [totalInCrypto] CartFinalized totalInCrypto
             * @property {Uint8Array|null} [paymentId] CartFinalized paymentId
             * @property {string|null} [paymentTtl] CartFinalized paymentTtl
             */
            /**
             * Constructs a new CartFinalized.
             * @memberof market.mass
             * @classdesc Represents a CartFinalized.
             * @implements ICartFinalized
             * @constructor
             * @param {market.mass.ICartFinalized=} [properties] Properties to set
             */
            function CartFinalized(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CartFinalized eventId.
             * @member {Uint8Array} eventId
             * @memberof market.mass.CartFinalized
             * @instance
             */
            CartFinalized.prototype.eventId = $util.newBuffer([]);
            /**
             * CartFinalized cartId.
             * @member {Uint8Array} cartId
             * @memberof market.mass.CartFinalized
             * @instance
             */
            CartFinalized.prototype.cartId = $util.newBuffer([]);
            /**
             * CartFinalized purchaseAddr.
             * @member {Uint8Array} purchaseAddr
             * @memberof market.mass.CartFinalized
             * @instance
             */
            CartFinalized.prototype.purchaseAddr = $util.newBuffer([]);
            /**
             * CartFinalized erc20Addr.
             * @member {Uint8Array} erc20Addr
             * @memberof market.mass.CartFinalized
             * @instance
             */
            CartFinalized.prototype.erc20Addr = $util.newBuffer([]);
            /**
             * CartFinalized subTotal.
             * @member {string} subTotal
             * @memberof market.mass.CartFinalized
             * @instance
             */
            CartFinalized.prototype.subTotal = "";
            /**
             * CartFinalized salesTax.
             * @member {string} salesTax
             * @memberof market.mass.CartFinalized
             * @instance
             */
            CartFinalized.prototype.salesTax = "";
            /**
             * CartFinalized total.
             * @member {string} total
             * @memberof market.mass.CartFinalized
             * @instance
             */
            CartFinalized.prototype.total = "";
            /**
             * CartFinalized totalInCrypto.
             * @member {string} totalInCrypto
             * @memberof market.mass.CartFinalized
             * @instance
             */
            CartFinalized.prototype.totalInCrypto = "";
            /**
             * CartFinalized paymentId.
             * @member {Uint8Array} paymentId
             * @memberof market.mass.CartFinalized
             * @instance
             */
            CartFinalized.prototype.paymentId = $util.newBuffer([]);
            /**
             * CartFinalized paymentTtl.
             * @member {string} paymentTtl
             * @memberof market.mass.CartFinalized
             * @instance
             */
            CartFinalized.prototype.paymentTtl = "";
            /**
             * Creates a new CartFinalized instance using the specified properties.
             * @function create
             * @memberof market.mass.CartFinalized
             * @static
             * @param {market.mass.ICartFinalized=} [properties] Properties to set
             * @returns {market.mass.CartFinalized} CartFinalized instance
             */
            CartFinalized.create = function create(properties) {
                return new CartFinalized(properties);
            };
            /**
             * Encodes the specified CartFinalized message. Does not implicitly {@link market.mass.CartFinalized.verify|verify} messages.
             * @function encode
             * @memberof market.mass.CartFinalized
             * @static
             * @param {market.mass.ICartFinalized} message CartFinalized message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CartFinalized.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.eventId != null &&
                    Object.hasOwnProperty.call(message, "eventId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.eventId);
                if (message.cartId != null &&
                    Object.hasOwnProperty.call(message, "cartId"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.cartId);
                if (message.purchaseAddr != null &&
                    Object.hasOwnProperty.call(message, "purchaseAddr"))
                    writer.uint32(/* id 3, wireType 2 =*/ 26).bytes(message.purchaseAddr);
                if (message.subTotal != null &&
                    Object.hasOwnProperty.call(message, "subTotal"))
                    writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.subTotal);
                if (message.salesTax != null &&
                    Object.hasOwnProperty.call(message, "salesTax"))
                    writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.salesTax);
                if (message.total != null &&
                    Object.hasOwnProperty.call(message, "total"))
                    writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.total);
                if (message.totalInCrypto != null &&
                    Object.hasOwnProperty.call(message, "totalInCrypto"))
                    writer
                        .uint32(/* id 7, wireType 2 =*/ 58)
                        .string(message.totalInCrypto);
                if (message.erc20Addr != null &&
                    Object.hasOwnProperty.call(message, "erc20Addr"))
                    writer.uint32(/* id 8, wireType 2 =*/ 66).bytes(message.erc20Addr);
                if (message.paymentId != null &&
                    Object.hasOwnProperty.call(message, "paymentId"))
                    writer.uint32(/* id 9, wireType 2 =*/ 74).bytes(message.paymentId);
                if (message.paymentTtl != null &&
                    Object.hasOwnProperty.call(message, "paymentTtl"))
                    writer.uint32(/* id 10, wireType 2 =*/ 82).string(message.paymentTtl);
                return writer;
            };
            /**
             * Encodes the specified CartFinalized message, length delimited. Does not implicitly {@link market.mass.CartFinalized.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.CartFinalized
             * @static
             * @param {market.mass.ICartFinalized} message CartFinalized message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CartFinalized.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CartFinalized message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.CartFinalized
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.CartFinalized} CartFinalized
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CartFinalized.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.CartFinalized();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.eventId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.cartId = reader.bytes();
                            break;
                        }
                        case 3: {
                            message.purchaseAddr = reader.bytes();
                            break;
                        }
                        case 8: {
                            message.erc20Addr = reader.bytes();
                            break;
                        }
                        case 4: {
                            message.subTotal = reader.string();
                            break;
                        }
                        case 5: {
                            message.salesTax = reader.string();
                            break;
                        }
                        case 6: {
                            message.total = reader.string();
                            break;
                        }
                        case 7: {
                            message.totalInCrypto = reader.string();
                            break;
                        }
                        case 9: {
                            message.paymentId = reader.bytes();
                            break;
                        }
                        case 10: {
                            message.paymentTtl = reader.string();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CartFinalized message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.CartFinalized
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.CartFinalized} CartFinalized
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CartFinalized.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CartFinalized message.
             * @function verify
             * @memberof market.mass.CartFinalized
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CartFinalized.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    if (!((message.eventId && typeof message.eventId.length === "number") ||
                        $util.isString(message.eventId)))
                        return "eventId: buffer expected";
                if (message.cartId != null && message.hasOwnProperty("cartId"))
                    if (!((message.cartId && typeof message.cartId.length === "number") ||
                        $util.isString(message.cartId)))
                        return "cartId: buffer expected";
                if (message.purchaseAddr != null &&
                    message.hasOwnProperty("purchaseAddr"))
                    if (!((message.purchaseAddr &&
                        typeof message.purchaseAddr.length === "number") ||
                        $util.isString(message.purchaseAddr)))
                        return "purchaseAddr: buffer expected";
                if (message.erc20Addr != null && message.hasOwnProperty("erc20Addr"))
                    if (!((message.erc20Addr &&
                        typeof message.erc20Addr.length === "number") ||
                        $util.isString(message.erc20Addr)))
                        return "erc20Addr: buffer expected";
                if (message.subTotal != null && message.hasOwnProperty("subTotal"))
                    if (!$util.isString(message.subTotal))
                        return "subTotal: string expected";
                if (message.salesTax != null && message.hasOwnProperty("salesTax"))
                    if (!$util.isString(message.salesTax))
                        return "salesTax: string expected";
                if (message.total != null && message.hasOwnProperty("total"))
                    if (!$util.isString(message.total))
                        return "total: string expected";
                if (message.totalInCrypto != null &&
                    message.hasOwnProperty("totalInCrypto"))
                    if (!$util.isString(message.totalInCrypto))
                        return "totalInCrypto: string expected";
                if (message.paymentId != null && message.hasOwnProperty("paymentId"))
                    if (!((message.paymentId &&
                        typeof message.paymentId.length === "number") ||
                        $util.isString(message.paymentId)))
                        return "paymentId: buffer expected";
                if (message.paymentTtl != null && message.hasOwnProperty("paymentTtl"))
                    if (!$util.isString(message.paymentTtl))
                        return "paymentTtl: string expected";
                return null;
            };
            /**
             * Creates a CartFinalized message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.CartFinalized
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.CartFinalized} CartFinalized
             */
            CartFinalized.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.CartFinalized)
                    return object;
                let message = new $root.market.mass.CartFinalized();
                if (object.eventId != null)
                    if (typeof object.eventId === "string")
                        $util.base64.decode(object.eventId, (message.eventId = $util.newBuffer($util.base64.length(object.eventId))), 0);
                    else if (object.eventId.length >= 0)
                        message.eventId = object.eventId;
                if (object.cartId != null)
                    if (typeof object.cartId === "string")
                        $util.base64.decode(object.cartId, (message.cartId = $util.newBuffer($util.base64.length(object.cartId))), 0);
                    else if (object.cartId.length >= 0)
                        message.cartId = object.cartId;
                if (object.purchaseAddr != null)
                    if (typeof object.purchaseAddr === "string")
                        $util.base64.decode(object.purchaseAddr, (message.purchaseAddr = $util.newBuffer($util.base64.length(object.purchaseAddr))), 0);
                    else if (object.purchaseAddr.length >= 0)
                        message.purchaseAddr = object.purchaseAddr;
                if (object.erc20Addr != null)
                    if (typeof object.erc20Addr === "string")
                        $util.base64.decode(object.erc20Addr, (message.erc20Addr = $util.newBuffer($util.base64.length(object.erc20Addr))), 0);
                    else if (object.erc20Addr.length >= 0)
                        message.erc20Addr = object.erc20Addr;
                if (object.subTotal != null)
                    message.subTotal = String(object.subTotal);
                if (object.salesTax != null)
                    message.salesTax = String(object.salesTax);
                if (object.total != null)
                    message.total = String(object.total);
                if (object.totalInCrypto != null)
                    message.totalInCrypto = String(object.totalInCrypto);
                if (object.paymentId != null)
                    if (typeof object.paymentId === "string")
                        $util.base64.decode(object.paymentId, (message.paymentId = $util.newBuffer($util.base64.length(object.paymentId))), 0);
                    else if (object.paymentId.length >= 0)
                        message.paymentId = object.paymentId;
                if (object.paymentTtl != null)
                    message.paymentTtl = String(object.paymentTtl);
                return message;
            };
            /**
             * Creates a plain object from a CartFinalized message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.CartFinalized
             * @static
             * @param {market.mass.CartFinalized} message CartFinalized
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CartFinalized.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.eventId = "";
                    else {
                        object.eventId = [];
                        if (options.bytes !== Array)
                            object.eventId = $util.newBuffer(object.eventId);
                    }
                    if (options.bytes === String)
                        object.cartId = "";
                    else {
                        object.cartId = [];
                        if (options.bytes !== Array)
                            object.cartId = $util.newBuffer(object.cartId);
                    }
                    if (options.bytes === String)
                        object.purchaseAddr = "";
                    else {
                        object.purchaseAddr = [];
                        if (options.bytes !== Array)
                            object.purchaseAddr = $util.newBuffer(object.purchaseAddr);
                    }
                    object.subTotal = "";
                    object.salesTax = "";
                    object.total = "";
                    object.totalInCrypto = "";
                    if (options.bytes === String)
                        object.erc20Addr = "";
                    else {
                        object.erc20Addr = [];
                        if (options.bytes !== Array)
                            object.erc20Addr = $util.newBuffer(object.erc20Addr);
                    }
                    if (options.bytes === String)
                        object.paymentId = "";
                    else {
                        object.paymentId = [];
                        if (options.bytes !== Array)
                            object.paymentId = $util.newBuffer(object.paymentId);
                    }
                    object.paymentTtl = "";
                }
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    object.eventId =
                        options.bytes === String
                            ? $util.base64.encode(message.eventId, 0, message.eventId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.eventId)
                                : message.eventId;
                if (message.cartId != null && message.hasOwnProperty("cartId"))
                    object.cartId =
                        options.bytes === String
                            ? $util.base64.encode(message.cartId, 0, message.cartId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.cartId)
                                : message.cartId;
                if (message.purchaseAddr != null &&
                    message.hasOwnProperty("purchaseAddr"))
                    object.purchaseAddr =
                        options.bytes === String
                            ? $util.base64.encode(message.purchaseAddr, 0, message.purchaseAddr.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.purchaseAddr)
                                : message.purchaseAddr;
                if (message.subTotal != null && message.hasOwnProperty("subTotal"))
                    object.subTotal = message.subTotal;
                if (message.salesTax != null && message.hasOwnProperty("salesTax"))
                    object.salesTax = message.salesTax;
                if (message.total != null && message.hasOwnProperty("total"))
                    object.total = message.total;
                if (message.totalInCrypto != null &&
                    message.hasOwnProperty("totalInCrypto"))
                    object.totalInCrypto = message.totalInCrypto;
                if (message.erc20Addr != null && message.hasOwnProperty("erc20Addr"))
                    object.erc20Addr =
                        options.bytes === String
                            ? $util.base64.encode(message.erc20Addr, 0, message.erc20Addr.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.erc20Addr)
                                : message.erc20Addr;
                if (message.paymentId != null && message.hasOwnProperty("paymentId"))
                    object.paymentId =
                        options.bytes === String
                            ? $util.base64.encode(message.paymentId, 0, message.paymentId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.paymentId)
                                : message.paymentId;
                if (message.paymentTtl != null && message.hasOwnProperty("paymentTtl"))
                    object.paymentTtl = message.paymentTtl;
                return object;
            };
            /**
             * Converts this CartFinalized to JSON.
             * @function toJSON
             * @memberof market.mass.CartFinalized
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CartFinalized.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for CartFinalized
             * @function getTypeUrl
             * @memberof market.mass.CartFinalized
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CartFinalized.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.CartFinalized";
            };
            return CartFinalized;
        })();
        mass.CartAbandoned = (function () {
            /**
             * Properties of a CartAbandoned.
             * @memberof market.mass
             * @interface ICartAbandoned
             * @property {Uint8Array|null} [eventId] CartAbandoned eventId
             * @property {Uint8Array|null} [cartId] CartAbandoned cartId
             */
            /**
             * Constructs a new CartAbandoned.
             * @memberof market.mass
             * @classdesc Represents a CartAbandoned.
             * @implements ICartAbandoned
             * @constructor
             * @param {market.mass.ICartAbandoned=} [properties] Properties to set
             */
            function CartAbandoned(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CartAbandoned eventId.
             * @member {Uint8Array} eventId
             * @memberof market.mass.CartAbandoned
             * @instance
             */
            CartAbandoned.prototype.eventId = $util.newBuffer([]);
            /**
             * CartAbandoned cartId.
             * @member {Uint8Array} cartId
             * @memberof market.mass.CartAbandoned
             * @instance
             */
            CartAbandoned.prototype.cartId = $util.newBuffer([]);
            /**
             * Creates a new CartAbandoned instance using the specified properties.
             * @function create
             * @memberof market.mass.CartAbandoned
             * @static
             * @param {market.mass.ICartAbandoned=} [properties] Properties to set
             * @returns {market.mass.CartAbandoned} CartAbandoned instance
             */
            CartAbandoned.create = function create(properties) {
                return new CartAbandoned(properties);
            };
            /**
             * Encodes the specified CartAbandoned message. Does not implicitly {@link market.mass.CartAbandoned.verify|verify} messages.
             * @function encode
             * @memberof market.mass.CartAbandoned
             * @static
             * @param {market.mass.ICartAbandoned} message CartAbandoned message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CartAbandoned.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.eventId != null &&
                    Object.hasOwnProperty.call(message, "eventId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.eventId);
                if (message.cartId != null &&
                    Object.hasOwnProperty.call(message, "cartId"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.cartId);
                return writer;
            };
            /**
             * Encodes the specified CartAbandoned message, length delimited. Does not implicitly {@link market.mass.CartAbandoned.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.CartAbandoned
             * @static
             * @param {market.mass.ICartAbandoned} message CartAbandoned message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CartAbandoned.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CartAbandoned message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.CartAbandoned
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.CartAbandoned} CartAbandoned
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CartAbandoned.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.CartAbandoned();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.eventId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.cartId = reader.bytes();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CartAbandoned message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.CartAbandoned
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.CartAbandoned} CartAbandoned
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CartAbandoned.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CartAbandoned message.
             * @function verify
             * @memberof market.mass.CartAbandoned
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CartAbandoned.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    if (!((message.eventId && typeof message.eventId.length === "number") ||
                        $util.isString(message.eventId)))
                        return "eventId: buffer expected";
                if (message.cartId != null && message.hasOwnProperty("cartId"))
                    if (!((message.cartId && typeof message.cartId.length === "number") ||
                        $util.isString(message.cartId)))
                        return "cartId: buffer expected";
                return null;
            };
            /**
             * Creates a CartAbandoned message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.CartAbandoned
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.CartAbandoned} CartAbandoned
             */
            CartAbandoned.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.CartAbandoned)
                    return object;
                let message = new $root.market.mass.CartAbandoned();
                if (object.eventId != null)
                    if (typeof object.eventId === "string")
                        $util.base64.decode(object.eventId, (message.eventId = $util.newBuffer($util.base64.length(object.eventId))), 0);
                    else if (object.eventId.length >= 0)
                        message.eventId = object.eventId;
                if (object.cartId != null)
                    if (typeof object.cartId === "string")
                        $util.base64.decode(object.cartId, (message.cartId = $util.newBuffer($util.base64.length(object.cartId))), 0);
                    else if (object.cartId.length >= 0)
                        message.cartId = object.cartId;
                return message;
            };
            /**
             * Creates a plain object from a CartAbandoned message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.CartAbandoned
             * @static
             * @param {market.mass.CartAbandoned} message CartAbandoned
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CartAbandoned.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.eventId = "";
                    else {
                        object.eventId = [];
                        if (options.bytes !== Array)
                            object.eventId = $util.newBuffer(object.eventId);
                    }
                    if (options.bytes === String)
                        object.cartId = "";
                    else {
                        object.cartId = [];
                        if (options.bytes !== Array)
                            object.cartId = $util.newBuffer(object.cartId);
                    }
                }
                if (message.eventId != null && message.hasOwnProperty("eventId"))
                    object.eventId =
                        options.bytes === String
                            ? $util.base64.encode(message.eventId, 0, message.eventId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.eventId)
                                : message.eventId;
                if (message.cartId != null && message.hasOwnProperty("cartId"))
                    object.cartId =
                        options.bytes === String
                            ? $util.base64.encode(message.cartId, 0, message.cartId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.cartId)
                                : message.cartId;
                return object;
            };
            /**
             * Converts this CartAbandoned to JSON.
             * @function toJSON
             * @memberof market.mass.CartAbandoned
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CartAbandoned.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for CartAbandoned
             * @function getTypeUrl
             * @memberof market.mass.CartAbandoned
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CartAbandoned.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.CartAbandoned";
            };
            return CartAbandoned;
        })();
        mass.Event = (function () {
            /**
             * Properties of an Event.
             * @memberof market.mass
             * @interface IEvent
             * @property {Uint8Array|null} [signature] Event signature
             * @property {market.mass.IStoreManifest|null} [storeManifest] Event storeManifest
             * @property {market.mass.IUpdateManifest|null} [updateManifest] Event updateManifest
             * @property {market.mass.ICreateItem|null} [createItem] Event createItem
             * @property {market.mass.IUpdateItem|null} [updateItem] Event updateItem
             * @property {market.mass.ICreateTag|null} [createTag] Event createTag
             * @property {market.mass.IAddToTag|null} [addToTag] Event addToTag
             * @property {market.mass.IRemoveFromTag|null} [removeFromTag] Event removeFromTag
             * @property {market.mass.IRenameTag|null} [renameTag] Event renameTag
             * @property {market.mass.IDeleteTag|null} [deleteTag] Event deleteTag
             * @property {market.mass.ICreateCart|null} [createCart] Event createCart
             * @property {market.mass.IChangeCart|null} [changeCart] Event changeCart
             * @property {market.mass.ICartFinalized|null} [cartFinalized] Event cartFinalized
             * @property {market.mass.ICartAbandoned|null} [cartAbandoned] Event cartAbandoned
             * @property {market.mass.IChangeStock|null} [changeStock] Event changeStock
             * @property {market.mass.INewKeyCard|null} [newKeyCard] Event newKeyCard
             */
            /**
             * Constructs a new Event.
             * @memberof market.mass
             * @classdesc Represents an Event.
             * @implements IEvent
             * @constructor
             * @param {market.mass.IEvent=} [properties] Properties to set
             */
            function Event(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * Event signature.
             * @member {Uint8Array} signature
             * @memberof market.mass.Event
             * @instance
             */
            Event.prototype.signature = $util.newBuffer([]);
            /**
             * Event storeManifest.
             * @member {market.mass.IStoreManifest|null|undefined} storeManifest
             * @memberof market.mass.Event
             * @instance
             */
            Event.prototype.storeManifest = null;
            /**
             * Event updateManifest.
             * @member {market.mass.IUpdateManifest|null|undefined} updateManifest
             * @memberof market.mass.Event
             * @instance
             */
            Event.prototype.updateManifest = null;
            /**
             * Event createItem.
             * @member {market.mass.ICreateItem|null|undefined} createItem
             * @memberof market.mass.Event
             * @instance
             */
            Event.prototype.createItem = null;
            /**
             * Event updateItem.
             * @member {market.mass.IUpdateItem|null|undefined} updateItem
             * @memberof market.mass.Event
             * @instance
             */
            Event.prototype.updateItem = null;
            /**
             * Event createTag.
             * @member {market.mass.ICreateTag|null|undefined} createTag
             * @memberof market.mass.Event
             * @instance
             */
            Event.prototype.createTag = null;
            /**
             * Event addToTag.
             * @member {market.mass.IAddToTag|null|undefined} addToTag
             * @memberof market.mass.Event
             * @instance
             */
            Event.prototype.addToTag = null;
            /**
             * Event removeFromTag.
             * @member {market.mass.IRemoveFromTag|null|undefined} removeFromTag
             * @memberof market.mass.Event
             * @instance
             */
            Event.prototype.removeFromTag = null;
            /**
             * Event renameTag.
             * @member {market.mass.IRenameTag|null|undefined} renameTag
             * @memberof market.mass.Event
             * @instance
             */
            Event.prototype.renameTag = null;
            /**
             * Event deleteTag.
             * @member {market.mass.IDeleteTag|null|undefined} deleteTag
             * @memberof market.mass.Event
             * @instance
             */
            Event.prototype.deleteTag = null;
            /**
             * Event createCart.
             * @member {market.mass.ICreateCart|null|undefined} createCart
             * @memberof market.mass.Event
             * @instance
             */
            Event.prototype.createCart = null;
            /**
             * Event changeCart.
             * @member {market.mass.IChangeCart|null|undefined} changeCart
             * @memberof market.mass.Event
             * @instance
             */
            Event.prototype.changeCart = null;
            /**
             * Event cartFinalized.
             * @member {market.mass.ICartFinalized|null|undefined} cartFinalized
             * @memberof market.mass.Event
             * @instance
             */
            Event.prototype.cartFinalized = null;
            /**
             * Event cartAbandoned.
             * @member {market.mass.ICartAbandoned|null|undefined} cartAbandoned
             * @memberof market.mass.Event
             * @instance
             */
            Event.prototype.cartAbandoned = null;
            /**
             * Event changeStock.
             * @member {market.mass.IChangeStock|null|undefined} changeStock
             * @memberof market.mass.Event
             * @instance
             */
            Event.prototype.changeStock = null;
            /**
             * Event newKeyCard.
             * @member {market.mass.INewKeyCard|null|undefined} newKeyCard
             * @memberof market.mass.Event
             * @instance
             */
            Event.prototype.newKeyCard = null;
            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;
            /**
             * Event union.
             * @member {"storeManifest"|"updateManifest"|"createItem"|"updateItem"|"createTag"|"addToTag"|"removeFromTag"|"renameTag"|"deleteTag"|"createCart"|"changeCart"|"cartFinalized"|"cartAbandoned"|"changeStock"|"newKeyCard"|undefined} union
             * @memberof market.mass.Event
             * @instance
             */
            Object.defineProperty(Event.prototype, "union", {
                get: $util.oneOfGetter(($oneOfFields = [
                    "storeManifest",
                    "updateManifest",
                    "createItem",
                    "updateItem",
                    "createTag",
                    "addToTag",
                    "removeFromTag",
                    "renameTag",
                    "deleteTag",
                    "createCart",
                    "changeCart",
                    "cartFinalized",
                    "cartAbandoned",
                    "changeStock",
                    "newKeyCard",
                ])),
                set: $util.oneOfSetter($oneOfFields),
            });
            /**
             * Creates a new Event instance using the specified properties.
             * @function create
             * @memberof market.mass.Event
             * @static
             * @param {market.mass.IEvent=} [properties] Properties to set
             * @returns {market.mass.Event} Event instance
             */
            Event.create = function create(properties) {
                return new Event(properties);
            };
            /**
             * Encodes the specified Event message. Does not implicitly {@link market.mass.Event.verify|verify} messages.
             * @function encode
             * @memberof market.mass.Event
             * @static
             * @param {market.mass.IEvent} message Event message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Event.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.signature != null &&
                    Object.hasOwnProperty.call(message, "signature"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.signature);
                if (message.storeManifest != null &&
                    Object.hasOwnProperty.call(message, "storeManifest"))
                    $root.market.mass.StoreManifest.encode(message.storeManifest, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
                if (message.updateManifest != null &&
                    Object.hasOwnProperty.call(message, "updateManifest"))
                    $root.market.mass.UpdateManifest.encode(message.updateManifest, writer.uint32(/* id 3, wireType 2 =*/ 26).fork()).ldelim();
                if (message.createItem != null &&
                    Object.hasOwnProperty.call(message, "createItem"))
                    $root.market.mass.CreateItem.encode(message.createItem, writer.uint32(/* id 4, wireType 2 =*/ 34).fork()).ldelim();
                if (message.updateItem != null &&
                    Object.hasOwnProperty.call(message, "updateItem"))
                    $root.market.mass.UpdateItem.encode(message.updateItem, writer.uint32(/* id 5, wireType 2 =*/ 42).fork()).ldelim();
                if (message.createTag != null &&
                    Object.hasOwnProperty.call(message, "createTag"))
                    $root.market.mass.CreateTag.encode(message.createTag, writer.uint32(/* id 6, wireType 2 =*/ 50).fork()).ldelim();
                if (message.addToTag != null &&
                    Object.hasOwnProperty.call(message, "addToTag"))
                    $root.market.mass.AddToTag.encode(message.addToTag, writer.uint32(/* id 7, wireType 2 =*/ 58).fork()).ldelim();
                if (message.removeFromTag != null &&
                    Object.hasOwnProperty.call(message, "removeFromTag"))
                    $root.market.mass.RemoveFromTag.encode(message.removeFromTag, writer.uint32(/* id 8, wireType 2 =*/ 66).fork()).ldelim();
                if (message.renameTag != null &&
                    Object.hasOwnProperty.call(message, "renameTag"))
                    $root.market.mass.RenameTag.encode(message.renameTag, writer.uint32(/* id 9, wireType 2 =*/ 74).fork()).ldelim();
                if (message.deleteTag != null &&
                    Object.hasOwnProperty.call(message, "deleteTag"))
                    $root.market.mass.DeleteTag.encode(message.deleteTag, writer.uint32(/* id 10, wireType 2 =*/ 82).fork()).ldelim();
                if (message.createCart != null &&
                    Object.hasOwnProperty.call(message, "createCart"))
                    $root.market.mass.CreateCart.encode(message.createCart, writer.uint32(/* id 11, wireType 2 =*/ 90).fork()).ldelim();
                if (message.changeCart != null &&
                    Object.hasOwnProperty.call(message, "changeCart"))
                    $root.market.mass.ChangeCart.encode(message.changeCart, writer.uint32(/* id 12, wireType 2 =*/ 98).fork()).ldelim();
                if (message.changeStock != null &&
                    Object.hasOwnProperty.call(message, "changeStock"))
                    $root.market.mass.ChangeStock.encode(message.changeStock, writer.uint32(/* id 13, wireType 2 =*/ 106).fork()).ldelim();
                if (message.newKeyCard != null &&
                    Object.hasOwnProperty.call(message, "newKeyCard"))
                    $root.market.mass.NewKeyCard.encode(message.newKeyCard, writer.uint32(/* id 14, wireType 2 =*/ 114).fork()).ldelim();
                if (message.cartFinalized != null &&
                    Object.hasOwnProperty.call(message, "cartFinalized"))
                    $root.market.mass.CartFinalized.encode(message.cartFinalized, writer.uint32(/* id 15, wireType 2 =*/ 122).fork()).ldelim();
                if (message.cartAbandoned != null &&
                    Object.hasOwnProperty.call(message, "cartAbandoned"))
                    $root.market.mass.CartAbandoned.encode(message.cartAbandoned, writer.uint32(/* id 16, wireType 2 =*/ 130).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified Event message, length delimited. Does not implicitly {@link market.mass.Event.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.Event
             * @static
             * @param {market.mass.IEvent} message Event message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Event.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes an Event message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.Event
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.Event} Event
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Event.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.Event();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.signature = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.storeManifest = $root.market.mass.StoreManifest.decode(reader, reader.uint32());
                            break;
                        }
                        case 3: {
                            message.updateManifest = $root.market.mass.UpdateManifest.decode(reader, reader.uint32());
                            break;
                        }
                        case 4: {
                            message.createItem = $root.market.mass.CreateItem.decode(reader, reader.uint32());
                            break;
                        }
                        case 5: {
                            message.updateItem = $root.market.mass.UpdateItem.decode(reader, reader.uint32());
                            break;
                        }
                        case 6: {
                            message.createTag = $root.market.mass.CreateTag.decode(reader, reader.uint32());
                            break;
                        }
                        case 7: {
                            message.addToTag = $root.market.mass.AddToTag.decode(reader, reader.uint32());
                            break;
                        }
                        case 8: {
                            message.removeFromTag = $root.market.mass.RemoveFromTag.decode(reader, reader.uint32());
                            break;
                        }
                        case 9: {
                            message.renameTag = $root.market.mass.RenameTag.decode(reader, reader.uint32());
                            break;
                        }
                        case 10: {
                            message.deleteTag = $root.market.mass.DeleteTag.decode(reader, reader.uint32());
                            break;
                        }
                        case 11: {
                            message.createCart = $root.market.mass.CreateCart.decode(reader, reader.uint32());
                            break;
                        }
                        case 12: {
                            message.changeCart = $root.market.mass.ChangeCart.decode(reader, reader.uint32());
                            break;
                        }
                        case 15: {
                            message.cartFinalized = $root.market.mass.CartFinalized.decode(reader, reader.uint32());
                            break;
                        }
                        case 16: {
                            message.cartAbandoned = $root.market.mass.CartAbandoned.decode(reader, reader.uint32());
                            break;
                        }
                        case 13: {
                            message.changeStock = $root.market.mass.ChangeStock.decode(reader, reader.uint32());
                            break;
                        }
                        case 14: {
                            message.newKeyCard = $root.market.mass.NewKeyCard.decode(reader, reader.uint32());
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes an Event message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.Event
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.Event} Event
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Event.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies an Event message.
             * @function verify
             * @memberof market.mass.Event
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Event.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.signature != null && message.hasOwnProperty("signature"))
                    if (!((message.signature &&
                        typeof message.signature.length === "number") ||
                        $util.isString(message.signature)))
                        return "signature: buffer expected";
                if (message.storeManifest != null &&
                    message.hasOwnProperty("storeManifest")) {
                    properties.union = 1;
                    {
                        let error = $root.market.mass.StoreManifest.verify(message.storeManifest);
                        if (error)
                            return "storeManifest." + error;
                    }
                }
                if (message.updateManifest != null &&
                    message.hasOwnProperty("updateManifest")) {
                    if (properties.union === 1)
                        return "union: multiple values";
                    properties.union = 1;
                    {
                        let error = $root.market.mass.UpdateManifest.verify(message.updateManifest);
                        if (error)
                            return "updateManifest." + error;
                    }
                }
                if (message.createItem != null &&
                    message.hasOwnProperty("createItem")) {
                    if (properties.union === 1)
                        return "union: multiple values";
                    properties.union = 1;
                    {
                        let error = $root.market.mass.CreateItem.verify(message.createItem);
                        if (error)
                            return "createItem." + error;
                    }
                }
                if (message.updateItem != null &&
                    message.hasOwnProperty("updateItem")) {
                    if (properties.union === 1)
                        return "union: multiple values";
                    properties.union = 1;
                    {
                        let error = $root.market.mass.UpdateItem.verify(message.updateItem);
                        if (error)
                            return "updateItem." + error;
                    }
                }
                if (message.createTag != null && message.hasOwnProperty("createTag")) {
                    if (properties.union === 1)
                        return "union: multiple values";
                    properties.union = 1;
                    {
                        let error = $root.market.mass.CreateTag.verify(message.createTag);
                        if (error)
                            return "createTag." + error;
                    }
                }
                if (message.addToTag != null && message.hasOwnProperty("addToTag")) {
                    if (properties.union === 1)
                        return "union: multiple values";
                    properties.union = 1;
                    {
                        let error = $root.market.mass.AddToTag.verify(message.addToTag);
                        if (error)
                            return "addToTag." + error;
                    }
                }
                if (message.removeFromTag != null &&
                    message.hasOwnProperty("removeFromTag")) {
                    if (properties.union === 1)
                        return "union: multiple values";
                    properties.union = 1;
                    {
                        let error = $root.market.mass.RemoveFromTag.verify(message.removeFromTag);
                        if (error)
                            return "removeFromTag." + error;
                    }
                }
                if (message.renameTag != null && message.hasOwnProperty("renameTag")) {
                    if (properties.union === 1)
                        return "union: multiple values";
                    properties.union = 1;
                    {
                        let error = $root.market.mass.RenameTag.verify(message.renameTag);
                        if (error)
                            return "renameTag." + error;
                    }
                }
                if (message.deleteTag != null && message.hasOwnProperty("deleteTag")) {
                    if (properties.union === 1)
                        return "union: multiple values";
                    properties.union = 1;
                    {
                        let error = $root.market.mass.DeleteTag.verify(message.deleteTag);
                        if (error)
                            return "deleteTag." + error;
                    }
                }
                if (message.createCart != null &&
                    message.hasOwnProperty("createCart")) {
                    if (properties.union === 1)
                        return "union: multiple values";
                    properties.union = 1;
                    {
                        let error = $root.market.mass.CreateCart.verify(message.createCart);
                        if (error)
                            return "createCart." + error;
                    }
                }
                if (message.changeCart != null &&
                    message.hasOwnProperty("changeCart")) {
                    if (properties.union === 1)
                        return "union: multiple values";
                    properties.union = 1;
                    {
                        let error = $root.market.mass.ChangeCart.verify(message.changeCart);
                        if (error)
                            return "changeCart." + error;
                    }
                }
                if (message.cartFinalized != null &&
                    message.hasOwnProperty("cartFinalized")) {
                    if (properties.union === 1)
                        return "union: multiple values";
                    properties.union = 1;
                    {
                        let error = $root.market.mass.CartFinalized.verify(message.cartFinalized);
                        if (error)
                            return "cartFinalized." + error;
                    }
                }
                if (message.cartAbandoned != null &&
                    message.hasOwnProperty("cartAbandoned")) {
                    if (properties.union === 1)
                        return "union: multiple values";
                    properties.union = 1;
                    {
                        let error = $root.market.mass.CartAbandoned.verify(message.cartAbandoned);
                        if (error)
                            return "cartAbandoned." + error;
                    }
                }
                if (message.changeStock != null &&
                    message.hasOwnProperty("changeStock")) {
                    if (properties.union === 1)
                        return "union: multiple values";
                    properties.union = 1;
                    {
                        let error = $root.market.mass.ChangeStock.verify(message.changeStock);
                        if (error)
                            return "changeStock." + error;
                    }
                }
                if (message.newKeyCard != null &&
                    message.hasOwnProperty("newKeyCard")) {
                    if (properties.union === 1)
                        return "union: multiple values";
                    properties.union = 1;
                    {
                        let error = $root.market.mass.NewKeyCard.verify(message.newKeyCard);
                        if (error)
                            return "newKeyCard." + error;
                    }
                }
                return null;
            };
            /**
             * Creates an Event message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.Event
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.Event} Event
             */
            Event.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.Event)
                    return object;
                let message = new $root.market.mass.Event();
                if (object.signature != null)
                    if (typeof object.signature === "string")
                        $util.base64.decode(object.signature, (message.signature = $util.newBuffer($util.base64.length(object.signature))), 0);
                    else if (object.signature.length >= 0)
                        message.signature = object.signature;
                if (object.storeManifest != null) {
                    if (typeof object.storeManifest !== "object")
                        throw TypeError(".market.mass.Event.storeManifest: object expected");
                    message.storeManifest = $root.market.mass.StoreManifest.fromObject(object.storeManifest);
                }
                if (object.updateManifest != null) {
                    if (typeof object.updateManifest !== "object")
                        throw TypeError(".market.mass.Event.updateManifest: object expected");
                    message.updateManifest = $root.market.mass.UpdateManifest.fromObject(object.updateManifest);
                }
                if (object.createItem != null) {
                    if (typeof object.createItem !== "object")
                        throw TypeError(".market.mass.Event.createItem: object expected");
                    message.createItem = $root.market.mass.CreateItem.fromObject(object.createItem);
                }
                if (object.updateItem != null) {
                    if (typeof object.updateItem !== "object")
                        throw TypeError(".market.mass.Event.updateItem: object expected");
                    message.updateItem = $root.market.mass.UpdateItem.fromObject(object.updateItem);
                }
                if (object.createTag != null) {
                    if (typeof object.createTag !== "object")
                        throw TypeError(".market.mass.Event.createTag: object expected");
                    message.createTag = $root.market.mass.CreateTag.fromObject(object.createTag);
                }
                if (object.addToTag != null) {
                    if (typeof object.addToTag !== "object")
                        throw TypeError(".market.mass.Event.addToTag: object expected");
                    message.addToTag = $root.market.mass.AddToTag.fromObject(object.addToTag);
                }
                if (object.removeFromTag != null) {
                    if (typeof object.removeFromTag !== "object")
                        throw TypeError(".market.mass.Event.removeFromTag: object expected");
                    message.removeFromTag = $root.market.mass.RemoveFromTag.fromObject(object.removeFromTag);
                }
                if (object.renameTag != null) {
                    if (typeof object.renameTag !== "object")
                        throw TypeError(".market.mass.Event.renameTag: object expected");
                    message.renameTag = $root.market.mass.RenameTag.fromObject(object.renameTag);
                }
                if (object.deleteTag != null) {
                    if (typeof object.deleteTag !== "object")
                        throw TypeError(".market.mass.Event.deleteTag: object expected");
                    message.deleteTag = $root.market.mass.DeleteTag.fromObject(object.deleteTag);
                }
                if (object.createCart != null) {
                    if (typeof object.createCart !== "object")
                        throw TypeError(".market.mass.Event.createCart: object expected");
                    message.createCart = $root.market.mass.CreateCart.fromObject(object.createCart);
                }
                if (object.changeCart != null) {
                    if (typeof object.changeCart !== "object")
                        throw TypeError(".market.mass.Event.changeCart: object expected");
                    message.changeCart = $root.market.mass.ChangeCart.fromObject(object.changeCart);
                }
                if (object.cartFinalized != null) {
                    if (typeof object.cartFinalized !== "object")
                        throw TypeError(".market.mass.Event.cartFinalized: object expected");
                    message.cartFinalized = $root.market.mass.CartFinalized.fromObject(object.cartFinalized);
                }
                if (object.cartAbandoned != null) {
                    if (typeof object.cartAbandoned !== "object")
                        throw TypeError(".market.mass.Event.cartAbandoned: object expected");
                    message.cartAbandoned = $root.market.mass.CartAbandoned.fromObject(object.cartAbandoned);
                }
                if (object.changeStock != null) {
                    if (typeof object.changeStock !== "object")
                        throw TypeError(".market.mass.Event.changeStock: object expected");
                    message.changeStock = $root.market.mass.ChangeStock.fromObject(object.changeStock);
                }
                if (object.newKeyCard != null) {
                    if (typeof object.newKeyCard !== "object")
                        throw TypeError(".market.mass.Event.newKeyCard: object expected");
                    message.newKeyCard = $root.market.mass.NewKeyCard.fromObject(object.newKeyCard);
                }
                return message;
            };
            /**
             * Creates a plain object from an Event message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.Event
             * @static
             * @param {market.mass.Event} message Event
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Event.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.signature = "";
                    else {
                        object.signature = [];
                        if (options.bytes !== Array)
                            object.signature = $util.newBuffer(object.signature);
                    }
                if (message.signature != null && message.hasOwnProperty("signature"))
                    object.signature =
                        options.bytes === String
                            ? $util.base64.encode(message.signature, 0, message.signature.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.signature)
                                : message.signature;
                if (message.storeManifest != null &&
                    message.hasOwnProperty("storeManifest")) {
                    object.storeManifest = $root.market.mass.StoreManifest.toObject(message.storeManifest, options);
                    if (options.oneofs)
                        object.union = "storeManifest";
                }
                if (message.updateManifest != null &&
                    message.hasOwnProperty("updateManifest")) {
                    object.updateManifest = $root.market.mass.UpdateManifest.toObject(message.updateManifest, options);
                    if (options.oneofs)
                        object.union = "updateManifest";
                }
                if (message.createItem != null &&
                    message.hasOwnProperty("createItem")) {
                    object.createItem = $root.market.mass.CreateItem.toObject(message.createItem, options);
                    if (options.oneofs)
                        object.union = "createItem";
                }
                if (message.updateItem != null &&
                    message.hasOwnProperty("updateItem")) {
                    object.updateItem = $root.market.mass.UpdateItem.toObject(message.updateItem, options);
                    if (options.oneofs)
                        object.union = "updateItem";
                }
                if (message.createTag != null && message.hasOwnProperty("createTag")) {
                    object.createTag = $root.market.mass.CreateTag.toObject(message.createTag, options);
                    if (options.oneofs)
                        object.union = "createTag";
                }
                if (message.addToTag != null && message.hasOwnProperty("addToTag")) {
                    object.addToTag = $root.market.mass.AddToTag.toObject(message.addToTag, options);
                    if (options.oneofs)
                        object.union = "addToTag";
                }
                if (message.removeFromTag != null &&
                    message.hasOwnProperty("removeFromTag")) {
                    object.removeFromTag = $root.market.mass.RemoveFromTag.toObject(message.removeFromTag, options);
                    if (options.oneofs)
                        object.union = "removeFromTag";
                }
                if (message.renameTag != null && message.hasOwnProperty("renameTag")) {
                    object.renameTag = $root.market.mass.RenameTag.toObject(message.renameTag, options);
                    if (options.oneofs)
                        object.union = "renameTag";
                }
                if (message.deleteTag != null && message.hasOwnProperty("deleteTag")) {
                    object.deleteTag = $root.market.mass.DeleteTag.toObject(message.deleteTag, options);
                    if (options.oneofs)
                        object.union = "deleteTag";
                }
                if (message.createCart != null &&
                    message.hasOwnProperty("createCart")) {
                    object.createCart = $root.market.mass.CreateCart.toObject(message.createCart, options);
                    if (options.oneofs)
                        object.union = "createCart";
                }
                if (message.changeCart != null &&
                    message.hasOwnProperty("changeCart")) {
                    object.changeCart = $root.market.mass.ChangeCart.toObject(message.changeCart, options);
                    if (options.oneofs)
                        object.union = "changeCart";
                }
                if (message.changeStock != null &&
                    message.hasOwnProperty("changeStock")) {
                    object.changeStock = $root.market.mass.ChangeStock.toObject(message.changeStock, options);
                    if (options.oneofs)
                        object.union = "changeStock";
                }
                if (message.newKeyCard != null &&
                    message.hasOwnProperty("newKeyCard")) {
                    object.newKeyCard = $root.market.mass.NewKeyCard.toObject(message.newKeyCard, options);
                    if (options.oneofs)
                        object.union = "newKeyCard";
                }
                if (message.cartFinalized != null &&
                    message.hasOwnProperty("cartFinalized")) {
                    object.cartFinalized = $root.market.mass.CartFinalized.toObject(message.cartFinalized, options);
                    if (options.oneofs)
                        object.union = "cartFinalized";
                }
                if (message.cartAbandoned != null &&
                    message.hasOwnProperty("cartAbandoned")) {
                    object.cartAbandoned = $root.market.mass.CartAbandoned.toObject(message.cartAbandoned, options);
                    if (options.oneofs)
                        object.union = "cartAbandoned";
                }
                return object;
            };
            /**
             * Converts this Event to JSON.
             * @function toJSON
             * @memberof market.mass.Event
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Event.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for Event
             * @function getTypeUrl
             * @memberof market.mass.Event
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Event.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.Event";
            };
            return Event;
        })();
        mass.AuthenticateRequest = (function () {
            /**
             * Properties of an AuthenticateRequest.
             * @memberof market.mass
             * @interface IAuthenticateRequest
             * @property {Uint8Array|null} [requestId] AuthenticateRequest requestId
             * @property {Uint8Array|null} [publicKey] AuthenticateRequest publicKey
             */
            /**
             * Constructs a new AuthenticateRequest.
             * @memberof market.mass
             * @classdesc Represents an AuthenticateRequest.
             * @implements IAuthenticateRequest
             * @constructor
             * @param {market.mass.IAuthenticateRequest=} [properties] Properties to set
             */
            function AuthenticateRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * AuthenticateRequest requestId.
             * @member {Uint8Array} requestId
             * @memberof market.mass.AuthenticateRequest
             * @instance
             */
            AuthenticateRequest.prototype.requestId = $util.newBuffer([]);
            /**
             * AuthenticateRequest publicKey.
             * @member {Uint8Array} publicKey
             * @memberof market.mass.AuthenticateRequest
             * @instance
             */
            AuthenticateRequest.prototype.publicKey = $util.newBuffer([]);
            /**
             * Creates a new AuthenticateRequest instance using the specified properties.
             * @function create
             * @memberof market.mass.AuthenticateRequest
             * @static
             * @param {market.mass.IAuthenticateRequest=} [properties] Properties to set
             * @returns {market.mass.AuthenticateRequest} AuthenticateRequest instance
             */
            AuthenticateRequest.create = function create(properties) {
                return new AuthenticateRequest(properties);
            };
            /**
             * Encodes the specified AuthenticateRequest message. Does not implicitly {@link market.mass.AuthenticateRequest.verify|verify} messages.
             * @function encode
             * @memberof market.mass.AuthenticateRequest
             * @static
             * @param {market.mass.IAuthenticateRequest} message AuthenticateRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AuthenticateRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null &&
                    Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.requestId);
                if (message.publicKey != null &&
                    Object.hasOwnProperty.call(message, "publicKey"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.publicKey);
                return writer;
            };
            /**
             * Encodes the specified AuthenticateRequest message, length delimited. Does not implicitly {@link market.mass.AuthenticateRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.AuthenticateRequest
             * @static
             * @param {market.mass.IAuthenticateRequest} message AuthenticateRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AuthenticateRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes an AuthenticateRequest message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.AuthenticateRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.AuthenticateRequest} AuthenticateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AuthenticateRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.AuthenticateRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.requestId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.publicKey = reader.bytes();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes an AuthenticateRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.AuthenticateRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.AuthenticateRequest} AuthenticateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AuthenticateRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies an AuthenticateRequest message.
             * @function verify
             * @memberof market.mass.AuthenticateRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AuthenticateRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!((message.requestId &&
                        typeof message.requestId.length === "number") ||
                        $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                    if (!((message.publicKey &&
                        typeof message.publicKey.length === "number") ||
                        $util.isString(message.publicKey)))
                        return "publicKey: buffer expected";
                return null;
            };
            /**
             * Creates an AuthenticateRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.AuthenticateRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.AuthenticateRequest} AuthenticateRequest
             */
            AuthenticateRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.AuthenticateRequest)
                    return object;
                let message = new $root.market.mass.AuthenticateRequest();
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, (message.requestId = $util.newBuffer($util.base64.length(object.requestId))), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                if (object.publicKey != null)
                    if (typeof object.publicKey === "string")
                        $util.base64.decode(object.publicKey, (message.publicKey = $util.newBuffer($util.base64.length(object.publicKey))), 0);
                    else if (object.publicKey.length >= 0)
                        message.publicKey = object.publicKey;
                return message;
            };
            /**
             * Creates a plain object from an AuthenticateRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.AuthenticateRequest
             * @static
             * @param {market.mass.AuthenticateRequest} message AuthenticateRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AuthenticateRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.requestId = "";
                    else {
                        object.requestId = [];
                        if (options.bytes !== Array)
                            object.requestId = $util.newBuffer(object.requestId);
                    }
                    if (options.bytes === String)
                        object.publicKey = "";
                    else {
                        object.publicKey = [];
                        if (options.bytes !== Array)
                            object.publicKey = $util.newBuffer(object.publicKey);
                    }
                }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId =
                        options.bytes === String
                            ? $util.base64.encode(message.requestId, 0, message.requestId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.requestId)
                                : message.requestId;
                if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                    object.publicKey =
                        options.bytes === String
                            ? $util.base64.encode(message.publicKey, 0, message.publicKey.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.publicKey)
                                : message.publicKey;
                return object;
            };
            /**
             * Converts this AuthenticateRequest to JSON.
             * @function toJSON
             * @memberof market.mass.AuthenticateRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AuthenticateRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for AuthenticateRequest
             * @function getTypeUrl
             * @memberof market.mass.AuthenticateRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AuthenticateRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.AuthenticateRequest";
            };
            return AuthenticateRequest;
        })();
        mass.AuthenticateResponse = (function () {
            /**
             * Properties of an AuthenticateResponse.
             * @memberof market.mass
             * @interface IAuthenticateResponse
             * @property {Uint8Array|null} [requestId] AuthenticateResponse requestId
             * @property {market.mass.IError|null} [error] AuthenticateResponse error
             * @property {Uint8Array|null} [challenge] AuthenticateResponse challenge
             */
            /**
             * Constructs a new AuthenticateResponse.
             * @memberof market.mass
             * @classdesc Represents an AuthenticateResponse.
             * @implements IAuthenticateResponse
             * @constructor
             * @param {market.mass.IAuthenticateResponse=} [properties] Properties to set
             */
            function AuthenticateResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * AuthenticateResponse requestId.
             * @member {Uint8Array} requestId
             * @memberof market.mass.AuthenticateResponse
             * @instance
             */
            AuthenticateResponse.prototype.requestId = $util.newBuffer([]);
            /**
             * AuthenticateResponse error.
             * @member {market.mass.IError|null|undefined} error
             * @memberof market.mass.AuthenticateResponse
             * @instance
             */
            AuthenticateResponse.prototype.error = null;
            /**
             * AuthenticateResponse challenge.
             * @member {Uint8Array} challenge
             * @memberof market.mass.AuthenticateResponse
             * @instance
             */
            AuthenticateResponse.prototype.challenge = $util.newBuffer([]);
            /**
             * Creates a new AuthenticateResponse instance using the specified properties.
             * @function create
             * @memberof market.mass.AuthenticateResponse
             * @static
             * @param {market.mass.IAuthenticateResponse=} [properties] Properties to set
             * @returns {market.mass.AuthenticateResponse} AuthenticateResponse instance
             */
            AuthenticateResponse.create = function create(properties) {
                return new AuthenticateResponse(properties);
            };
            /**
             * Encodes the specified AuthenticateResponse message. Does not implicitly {@link market.mass.AuthenticateResponse.verify|verify} messages.
             * @function encode
             * @memberof market.mass.AuthenticateResponse
             * @static
             * @param {market.mass.IAuthenticateResponse} message AuthenticateResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AuthenticateResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null &&
                    Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.requestId);
                if (message.error != null &&
                    Object.hasOwnProperty.call(message, "error"))
                    $root.market.mass.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
                if (message.challenge != null &&
                    Object.hasOwnProperty.call(message, "challenge"))
                    writer.uint32(/* id 3, wireType 2 =*/ 26).bytes(message.challenge);
                return writer;
            };
            /**
             * Encodes the specified AuthenticateResponse message, length delimited. Does not implicitly {@link market.mass.AuthenticateResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.AuthenticateResponse
             * @static
             * @param {market.mass.IAuthenticateResponse} message AuthenticateResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AuthenticateResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes an AuthenticateResponse message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.AuthenticateResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.AuthenticateResponse} AuthenticateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AuthenticateResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.AuthenticateResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.requestId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.error = $root.market.mass.Error.decode(reader, reader.uint32());
                            break;
                        }
                        case 3: {
                            message.challenge = reader.bytes();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes an AuthenticateResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.AuthenticateResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.AuthenticateResponse} AuthenticateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AuthenticateResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies an AuthenticateResponse message.
             * @function verify
             * @memberof market.mass.AuthenticateResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AuthenticateResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!((message.requestId &&
                        typeof message.requestId.length === "number") ||
                        $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    let error = $root.market.mass.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.challenge != null && message.hasOwnProperty("challenge"))
                    if (!((message.challenge &&
                        typeof message.challenge.length === "number") ||
                        $util.isString(message.challenge)))
                        return "challenge: buffer expected";
                return null;
            };
            /**
             * Creates an AuthenticateResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.AuthenticateResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.AuthenticateResponse} AuthenticateResponse
             */
            AuthenticateResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.AuthenticateResponse)
                    return object;
                let message = new $root.market.mass.AuthenticateResponse();
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, (message.requestId = $util.newBuffer($util.base64.length(object.requestId))), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".market.mass.AuthenticateResponse.error: object expected");
                    message.error = $root.market.mass.Error.fromObject(object.error);
                }
                if (object.challenge != null)
                    if (typeof object.challenge === "string")
                        $util.base64.decode(object.challenge, (message.challenge = $util.newBuffer($util.base64.length(object.challenge))), 0);
                    else if (object.challenge.length >= 0)
                        message.challenge = object.challenge;
                return message;
            };
            /**
             * Creates a plain object from an AuthenticateResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.AuthenticateResponse
             * @static
             * @param {market.mass.AuthenticateResponse} message AuthenticateResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AuthenticateResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.requestId = "";
                    else {
                        object.requestId = [];
                        if (options.bytes !== Array)
                            object.requestId = $util.newBuffer(object.requestId);
                    }
                    object.error = null;
                    if (options.bytes === String)
                        object.challenge = "";
                    else {
                        object.challenge = [];
                        if (options.bytes !== Array)
                            object.challenge = $util.newBuffer(object.challenge);
                    }
                }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId =
                        options.bytes === String
                            ? $util.base64.encode(message.requestId, 0, message.requestId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.requestId)
                                : message.requestId;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.market.mass.Error.toObject(message.error, options);
                if (message.challenge != null && message.hasOwnProperty("challenge"))
                    object.challenge =
                        options.bytes === String
                            ? $util.base64.encode(message.challenge, 0, message.challenge.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.challenge)
                                : message.challenge;
                return object;
            };
            /**
             * Converts this AuthenticateResponse to JSON.
             * @function toJSON
             * @memberof market.mass.AuthenticateResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AuthenticateResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for AuthenticateResponse
             * @function getTypeUrl
             * @memberof market.mass.AuthenticateResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AuthenticateResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.AuthenticateResponse";
            };
            return AuthenticateResponse;
        })();
        mass.ChallengeSolvedRequest = (function () {
            /**
             * Properties of a ChallengeSolvedRequest.
             * @memberof market.mass
             * @interface IChallengeSolvedRequest
             * @property {Uint8Array|null} [requestId] ChallengeSolvedRequest requestId
             * @property {Uint8Array|null} [signature] ChallengeSolvedRequest signature
             */
            /**
             * Constructs a new ChallengeSolvedRequest.
             * @memberof market.mass
             * @classdesc Represents a ChallengeSolvedRequest.
             * @implements IChallengeSolvedRequest
             * @constructor
             * @param {market.mass.IChallengeSolvedRequest=} [properties] Properties to set
             */
            function ChallengeSolvedRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * ChallengeSolvedRequest requestId.
             * @member {Uint8Array} requestId
             * @memberof market.mass.ChallengeSolvedRequest
             * @instance
             */
            ChallengeSolvedRequest.prototype.requestId = $util.newBuffer([]);
            /**
             * ChallengeSolvedRequest signature.
             * @member {Uint8Array} signature
             * @memberof market.mass.ChallengeSolvedRequest
             * @instance
             */
            ChallengeSolvedRequest.prototype.signature = $util.newBuffer([]);
            /**
             * Creates a new ChallengeSolvedRequest instance using the specified properties.
             * @function create
             * @memberof market.mass.ChallengeSolvedRequest
             * @static
             * @param {market.mass.IChallengeSolvedRequest=} [properties] Properties to set
             * @returns {market.mass.ChallengeSolvedRequest} ChallengeSolvedRequest instance
             */
            ChallengeSolvedRequest.create = function create(properties) {
                return new ChallengeSolvedRequest(properties);
            };
            /**
             * Encodes the specified ChallengeSolvedRequest message. Does not implicitly {@link market.mass.ChallengeSolvedRequest.verify|verify} messages.
             * @function encode
             * @memberof market.mass.ChallengeSolvedRequest
             * @static
             * @param {market.mass.IChallengeSolvedRequest} message ChallengeSolvedRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChallengeSolvedRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null &&
                    Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.requestId);
                if (message.signature != null &&
                    Object.hasOwnProperty.call(message, "signature"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.signature);
                return writer;
            };
            /**
             * Encodes the specified ChallengeSolvedRequest message, length delimited. Does not implicitly {@link market.mass.ChallengeSolvedRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.ChallengeSolvedRequest
             * @static
             * @param {market.mass.IChallengeSolvedRequest} message ChallengeSolvedRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChallengeSolvedRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a ChallengeSolvedRequest message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.ChallengeSolvedRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.ChallengeSolvedRequest} ChallengeSolvedRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChallengeSolvedRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.ChallengeSolvedRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.requestId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.signature = reader.bytes();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a ChallengeSolvedRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.ChallengeSolvedRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.ChallengeSolvedRequest} ChallengeSolvedRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChallengeSolvedRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a ChallengeSolvedRequest message.
             * @function verify
             * @memberof market.mass.ChallengeSolvedRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChallengeSolvedRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!((message.requestId &&
                        typeof message.requestId.length === "number") ||
                        $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                if (message.signature != null && message.hasOwnProperty("signature"))
                    if (!((message.signature &&
                        typeof message.signature.length === "number") ||
                        $util.isString(message.signature)))
                        return "signature: buffer expected";
                return null;
            };
            /**
             * Creates a ChallengeSolvedRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.ChallengeSolvedRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.ChallengeSolvedRequest} ChallengeSolvedRequest
             */
            ChallengeSolvedRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.ChallengeSolvedRequest)
                    return object;
                let message = new $root.market.mass.ChallengeSolvedRequest();
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, (message.requestId = $util.newBuffer($util.base64.length(object.requestId))), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                if (object.signature != null)
                    if (typeof object.signature === "string")
                        $util.base64.decode(object.signature, (message.signature = $util.newBuffer($util.base64.length(object.signature))), 0);
                    else if (object.signature.length >= 0)
                        message.signature = object.signature;
                return message;
            };
            /**
             * Creates a plain object from a ChallengeSolvedRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.ChallengeSolvedRequest
             * @static
             * @param {market.mass.ChallengeSolvedRequest} message ChallengeSolvedRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChallengeSolvedRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.requestId = "";
                    else {
                        object.requestId = [];
                        if (options.bytes !== Array)
                            object.requestId = $util.newBuffer(object.requestId);
                    }
                    if (options.bytes === String)
                        object.signature = "";
                    else {
                        object.signature = [];
                        if (options.bytes !== Array)
                            object.signature = $util.newBuffer(object.signature);
                    }
                }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId =
                        options.bytes === String
                            ? $util.base64.encode(message.requestId, 0, message.requestId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.requestId)
                                : message.requestId;
                if (message.signature != null && message.hasOwnProperty("signature"))
                    object.signature =
                        options.bytes === String
                            ? $util.base64.encode(message.signature, 0, message.signature.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.signature)
                                : message.signature;
                return object;
            };
            /**
             * Converts this ChallengeSolvedRequest to JSON.
             * @function toJSON
             * @memberof market.mass.ChallengeSolvedRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChallengeSolvedRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for ChallengeSolvedRequest
             * @function getTypeUrl
             * @memberof market.mass.ChallengeSolvedRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ChallengeSolvedRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.ChallengeSolvedRequest";
            };
            return ChallengeSolvedRequest;
        })();
        mass.ChallengeSolvedResponse = (function () {
            /**
             * Properties of a ChallengeSolvedResponse.
             * @memberof market.mass
             * @interface IChallengeSolvedResponse
             * @property {Uint8Array|null} [requestId] ChallengeSolvedResponse requestId
             * @property {market.mass.IError|null} [error] ChallengeSolvedResponse error
             */
            /**
             * Constructs a new ChallengeSolvedResponse.
             * @memberof market.mass
             * @classdesc Represents a ChallengeSolvedResponse.
             * @implements IChallengeSolvedResponse
             * @constructor
             * @param {market.mass.IChallengeSolvedResponse=} [properties] Properties to set
             */
            function ChallengeSolvedResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * ChallengeSolvedResponse requestId.
             * @member {Uint8Array} requestId
             * @memberof market.mass.ChallengeSolvedResponse
             * @instance
             */
            ChallengeSolvedResponse.prototype.requestId = $util.newBuffer([]);
            /**
             * ChallengeSolvedResponse error.
             * @member {market.mass.IError|null|undefined} error
             * @memberof market.mass.ChallengeSolvedResponse
             * @instance
             */
            ChallengeSolvedResponse.prototype.error = null;
            /**
             * Creates a new ChallengeSolvedResponse instance using the specified properties.
             * @function create
             * @memberof market.mass.ChallengeSolvedResponse
             * @static
             * @param {market.mass.IChallengeSolvedResponse=} [properties] Properties to set
             * @returns {market.mass.ChallengeSolvedResponse} ChallengeSolvedResponse instance
             */
            ChallengeSolvedResponse.create = function create(properties) {
                return new ChallengeSolvedResponse(properties);
            };
            /**
             * Encodes the specified ChallengeSolvedResponse message. Does not implicitly {@link market.mass.ChallengeSolvedResponse.verify|verify} messages.
             * @function encode
             * @memberof market.mass.ChallengeSolvedResponse
             * @static
             * @param {market.mass.IChallengeSolvedResponse} message ChallengeSolvedResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChallengeSolvedResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null &&
                    Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.requestId);
                if (message.error != null &&
                    Object.hasOwnProperty.call(message, "error"))
                    $root.market.mass.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified ChallengeSolvedResponse message, length delimited. Does not implicitly {@link market.mass.ChallengeSolvedResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.ChallengeSolvedResponse
             * @static
             * @param {market.mass.IChallengeSolvedResponse} message ChallengeSolvedResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChallengeSolvedResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a ChallengeSolvedResponse message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.ChallengeSolvedResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.ChallengeSolvedResponse} ChallengeSolvedResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChallengeSolvedResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.ChallengeSolvedResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.requestId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.error = $root.market.mass.Error.decode(reader, reader.uint32());
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a ChallengeSolvedResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.ChallengeSolvedResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.ChallengeSolvedResponse} ChallengeSolvedResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChallengeSolvedResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a ChallengeSolvedResponse message.
             * @function verify
             * @memberof market.mass.ChallengeSolvedResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChallengeSolvedResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!((message.requestId &&
                        typeof message.requestId.length === "number") ||
                        $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    let error = $root.market.mass.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                return null;
            };
            /**
             * Creates a ChallengeSolvedResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.ChallengeSolvedResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.ChallengeSolvedResponse} ChallengeSolvedResponse
             */
            ChallengeSolvedResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.ChallengeSolvedResponse)
                    return object;
                let message = new $root.market.mass.ChallengeSolvedResponse();
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, (message.requestId = $util.newBuffer($util.base64.length(object.requestId))), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".market.mass.ChallengeSolvedResponse.error: object expected");
                    message.error = $root.market.mass.Error.fromObject(object.error);
                }
                return message;
            };
            /**
             * Creates a plain object from a ChallengeSolvedResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.ChallengeSolvedResponse
             * @static
             * @param {market.mass.ChallengeSolvedResponse} message ChallengeSolvedResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChallengeSolvedResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.requestId = "";
                    else {
                        object.requestId = [];
                        if (options.bytes !== Array)
                            object.requestId = $util.newBuffer(object.requestId);
                    }
                    object.error = null;
                }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId =
                        options.bytes === String
                            ? $util.base64.encode(message.requestId, 0, message.requestId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.requestId)
                                : message.requestId;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.market.mass.Error.toObject(message.error, options);
                return object;
            };
            /**
             * Converts this ChallengeSolvedResponse to JSON.
             * @function toJSON
             * @memberof market.mass.ChallengeSolvedResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChallengeSolvedResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for ChallengeSolvedResponse
             * @function getTypeUrl
             * @memberof market.mass.ChallengeSolvedResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ChallengeSolvedResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.ChallengeSolvedResponse";
            };
            return ChallengeSolvedResponse;
        })();
        mass.CommitCartRequest = (function () {
            /**
             * Properties of a CommitCartRequest.
             * @memberof market.mass
             * @interface ICommitCartRequest
             * @property {Uint8Array|null} [requestId] CommitCartRequest requestId
             * @property {Uint8Array|null} [cartId] CommitCartRequest cartId
             * @property {Uint8Array|null} [erc20Addr] CommitCartRequest erc20Addr
             * @property {Uint8Array|null} [escrowAddr] CommitCartRequest escrowAddr
             */
            /**
             * Constructs a new CommitCartRequest.
             * @memberof market.mass
             * @classdesc Represents a CommitCartRequest.
             * @implements ICommitCartRequest
             * @constructor
             * @param {market.mass.ICommitCartRequest=} [properties] Properties to set
             */
            function CommitCartRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CommitCartRequest requestId.
             * @member {Uint8Array} requestId
             * @memberof market.mass.CommitCartRequest
             * @instance
             */
            CommitCartRequest.prototype.requestId = $util.newBuffer([]);
            /**
             * CommitCartRequest cartId.
             * @member {Uint8Array} cartId
             * @memberof market.mass.CommitCartRequest
             * @instance
             */
            CommitCartRequest.prototype.cartId = $util.newBuffer([]);
            /**
             * CommitCartRequest erc20Addr.
             * @member {Uint8Array} erc20Addr
             * @memberof market.mass.CommitCartRequest
             * @instance
             */
            CommitCartRequest.prototype.erc20Addr = $util.newBuffer([]);
            /**
             * CommitCartRequest escrowAddr.
             * @member {Uint8Array} escrowAddr
             * @memberof market.mass.CommitCartRequest
             * @instance
             */
            CommitCartRequest.prototype.escrowAddr = $util.newBuffer([]);
            /**
             * Creates a new CommitCartRequest instance using the specified properties.
             * @function create
             * @memberof market.mass.CommitCartRequest
             * @static
             * @param {market.mass.ICommitCartRequest=} [properties] Properties to set
             * @returns {market.mass.CommitCartRequest} CommitCartRequest instance
             */
            CommitCartRequest.create = function create(properties) {
                return new CommitCartRequest(properties);
            };
            /**
             * Encodes the specified CommitCartRequest message. Does not implicitly {@link market.mass.CommitCartRequest.verify|verify} messages.
             * @function encode
             * @memberof market.mass.CommitCartRequest
             * @static
             * @param {market.mass.ICommitCartRequest} message CommitCartRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CommitCartRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null &&
                    Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.requestId);
                if (message.cartId != null &&
                    Object.hasOwnProperty.call(message, "cartId"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.cartId);
                if (message.erc20Addr != null &&
                    Object.hasOwnProperty.call(message, "erc20Addr"))
                    writer.uint32(/* id 3, wireType 2 =*/ 26).bytes(message.erc20Addr);
                if (message.escrowAddr != null &&
                    Object.hasOwnProperty.call(message, "escrowAddr"))
                    writer.uint32(/* id 4, wireType 2 =*/ 34).bytes(message.escrowAddr);
                return writer;
            };
            /**
             * Encodes the specified CommitCartRequest message, length delimited. Does not implicitly {@link market.mass.CommitCartRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.CommitCartRequest
             * @static
             * @param {market.mass.ICommitCartRequest} message CommitCartRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CommitCartRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CommitCartRequest message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.CommitCartRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.CommitCartRequest} CommitCartRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CommitCartRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.CommitCartRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.requestId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.cartId = reader.bytes();
                            break;
                        }
                        case 3: {
                            message.erc20Addr = reader.bytes();
                            break;
                        }
                        case 4: {
                            message.escrowAddr = reader.bytes();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CommitCartRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.CommitCartRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.CommitCartRequest} CommitCartRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CommitCartRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CommitCartRequest message.
             * @function verify
             * @memberof market.mass.CommitCartRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CommitCartRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!((message.requestId &&
                        typeof message.requestId.length === "number") ||
                        $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                if (message.cartId != null && message.hasOwnProperty("cartId"))
                    if (!((message.cartId && typeof message.cartId.length === "number") ||
                        $util.isString(message.cartId)))
                        return "cartId: buffer expected";
                if (message.erc20Addr != null && message.hasOwnProperty("erc20Addr"))
                    if (!((message.erc20Addr &&
                        typeof message.erc20Addr.length === "number") ||
                        $util.isString(message.erc20Addr)))
                        return "erc20Addr: buffer expected";
                if (message.escrowAddr != null && message.hasOwnProperty("escrowAddr"))
                    if (!((message.escrowAddr &&
                        typeof message.escrowAddr.length === "number") ||
                        $util.isString(message.escrowAddr)))
                        return "escrowAddr: buffer expected";
                return null;
            };
            /**
             * Creates a CommitCartRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.CommitCartRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.CommitCartRequest} CommitCartRequest
             */
            CommitCartRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.CommitCartRequest)
                    return object;
                let message = new $root.market.mass.CommitCartRequest();
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, (message.requestId = $util.newBuffer($util.base64.length(object.requestId))), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                if (object.cartId != null)
                    if (typeof object.cartId === "string")
                        $util.base64.decode(object.cartId, (message.cartId = $util.newBuffer($util.base64.length(object.cartId))), 0);
                    else if (object.cartId.length >= 0)
                        message.cartId = object.cartId;
                if (object.erc20Addr != null)
                    if (typeof object.erc20Addr === "string")
                        $util.base64.decode(object.erc20Addr, (message.erc20Addr = $util.newBuffer($util.base64.length(object.erc20Addr))), 0);
                    else if (object.erc20Addr.length >= 0)
                        message.erc20Addr = object.erc20Addr;
                if (object.escrowAddr != null)
                    if (typeof object.escrowAddr === "string")
                        $util.base64.decode(object.escrowAddr, (message.escrowAddr = $util.newBuffer($util.base64.length(object.escrowAddr))), 0);
                    else if (object.escrowAddr.length >= 0)
                        message.escrowAddr = object.escrowAddr;
                return message;
            };
            /**
             * Creates a plain object from a CommitCartRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.CommitCartRequest
             * @static
             * @param {market.mass.CommitCartRequest} message CommitCartRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CommitCartRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.requestId = "";
                    else {
                        object.requestId = [];
                        if (options.bytes !== Array)
                            object.requestId = $util.newBuffer(object.requestId);
                    }
                    if (options.bytes === String)
                        object.cartId = "";
                    else {
                        object.cartId = [];
                        if (options.bytes !== Array)
                            object.cartId = $util.newBuffer(object.cartId);
                    }
                    if (options.bytes === String)
                        object.erc20Addr = "";
                    else {
                        object.erc20Addr = [];
                        if (options.bytes !== Array)
                            object.erc20Addr = $util.newBuffer(object.erc20Addr);
                    }
                    if (options.bytes === String)
                        object.escrowAddr = "";
                    else {
                        object.escrowAddr = [];
                        if (options.bytes !== Array)
                            object.escrowAddr = $util.newBuffer(object.escrowAddr);
                    }
                }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId =
                        options.bytes === String
                            ? $util.base64.encode(message.requestId, 0, message.requestId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.requestId)
                                : message.requestId;
                if (message.cartId != null && message.hasOwnProperty("cartId"))
                    object.cartId =
                        options.bytes === String
                            ? $util.base64.encode(message.cartId, 0, message.cartId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.cartId)
                                : message.cartId;
                if (message.erc20Addr != null && message.hasOwnProperty("erc20Addr"))
                    object.erc20Addr =
                        options.bytes === String
                            ? $util.base64.encode(message.erc20Addr, 0, message.erc20Addr.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.erc20Addr)
                                : message.erc20Addr;
                if (message.escrowAddr != null && message.hasOwnProperty("escrowAddr"))
                    object.escrowAddr =
                        options.bytes === String
                            ? $util.base64.encode(message.escrowAddr, 0, message.escrowAddr.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.escrowAddr)
                                : message.escrowAddr;
                return object;
            };
            /**
             * Converts this CommitCartRequest to JSON.
             * @function toJSON
             * @memberof market.mass.CommitCartRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CommitCartRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for CommitCartRequest
             * @function getTypeUrl
             * @memberof market.mass.CommitCartRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CommitCartRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.CommitCartRequest";
            };
            return CommitCartRequest;
        })();
        mass.CommitCartResponse = (function () {
            /**
             * Properties of a CommitCartResponse.
             * @memberof market.mass
             * @interface ICommitCartResponse
             * @property {Uint8Array|null} [requestId] CommitCartResponse requestId
             * @property {market.mass.IError|null} [error] CommitCartResponse error
             * @property {Uint8Array|null} [cartFinalizedId] CommitCartResponse cartFinalizedId
             */
            /**
             * Constructs a new CommitCartResponse.
             * @memberof market.mass
             * @classdesc Represents a CommitCartResponse.
             * @implements ICommitCartResponse
             * @constructor
             * @param {market.mass.ICommitCartResponse=} [properties] Properties to set
             */
            function CommitCartResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CommitCartResponse requestId.
             * @member {Uint8Array} requestId
             * @memberof market.mass.CommitCartResponse
             * @instance
             */
            CommitCartResponse.prototype.requestId = $util.newBuffer([]);
            /**
             * CommitCartResponse error.
             * @member {market.mass.IError|null|undefined} error
             * @memberof market.mass.CommitCartResponse
             * @instance
             */
            CommitCartResponse.prototype.error = null;
            /**
             * CommitCartResponse cartFinalizedId.
             * @member {Uint8Array} cartFinalizedId
             * @memberof market.mass.CommitCartResponse
             * @instance
             */
            CommitCartResponse.prototype.cartFinalizedId = $util.newBuffer([]);
            /**
             * Creates a new CommitCartResponse instance using the specified properties.
             * @function create
             * @memberof market.mass.CommitCartResponse
             * @static
             * @param {market.mass.ICommitCartResponse=} [properties] Properties to set
             * @returns {market.mass.CommitCartResponse} CommitCartResponse instance
             */
            CommitCartResponse.create = function create(properties) {
                return new CommitCartResponse(properties);
            };
            /**
             * Encodes the specified CommitCartResponse message. Does not implicitly {@link market.mass.CommitCartResponse.verify|verify} messages.
             * @function encode
             * @memberof market.mass.CommitCartResponse
             * @static
             * @param {market.mass.ICommitCartResponse} message CommitCartResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CommitCartResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null &&
                    Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.requestId);
                if (message.error != null &&
                    Object.hasOwnProperty.call(message, "error"))
                    $root.market.mass.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
                if (message.cartFinalizedId != null &&
                    Object.hasOwnProperty.call(message, "cartFinalizedId"))
                    writer
                        .uint32(/* id 3, wireType 2 =*/ 26)
                        .bytes(message.cartFinalizedId);
                return writer;
            };
            /**
             * Encodes the specified CommitCartResponse message, length delimited. Does not implicitly {@link market.mass.CommitCartResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.CommitCartResponse
             * @static
             * @param {market.mass.ICommitCartResponse} message CommitCartResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CommitCartResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CommitCartResponse message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.CommitCartResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.CommitCartResponse} CommitCartResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CommitCartResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.CommitCartResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.requestId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.error = $root.market.mass.Error.decode(reader, reader.uint32());
                            break;
                        }
                        case 3: {
                            message.cartFinalizedId = reader.bytes();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CommitCartResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.CommitCartResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.CommitCartResponse} CommitCartResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CommitCartResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CommitCartResponse message.
             * @function verify
             * @memberof market.mass.CommitCartResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CommitCartResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!((message.requestId &&
                        typeof message.requestId.length === "number") ||
                        $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    let error = $root.market.mass.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.cartFinalizedId != null &&
                    message.hasOwnProperty("cartFinalizedId"))
                    if (!((message.cartFinalizedId &&
                        typeof message.cartFinalizedId.length === "number") ||
                        $util.isString(message.cartFinalizedId)))
                        return "cartFinalizedId: buffer expected";
                return null;
            };
            /**
             * Creates a CommitCartResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.CommitCartResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.CommitCartResponse} CommitCartResponse
             */
            CommitCartResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.CommitCartResponse)
                    return object;
                let message = new $root.market.mass.CommitCartResponse();
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, (message.requestId = $util.newBuffer($util.base64.length(object.requestId))), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".market.mass.CommitCartResponse.error: object expected");
                    message.error = $root.market.mass.Error.fromObject(object.error);
                }
                if (object.cartFinalizedId != null)
                    if (typeof object.cartFinalizedId === "string")
                        $util.base64.decode(object.cartFinalizedId, (message.cartFinalizedId = $util.newBuffer($util.base64.length(object.cartFinalizedId))), 0);
                    else if (object.cartFinalizedId.length >= 0)
                        message.cartFinalizedId = object.cartFinalizedId;
                return message;
            };
            /**
             * Creates a plain object from a CommitCartResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.CommitCartResponse
             * @static
             * @param {market.mass.CommitCartResponse} message CommitCartResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CommitCartResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.requestId = "";
                    else {
                        object.requestId = [];
                        if (options.bytes !== Array)
                            object.requestId = $util.newBuffer(object.requestId);
                    }
                    object.error = null;
                    if (options.bytes === String)
                        object.cartFinalizedId = "";
                    else {
                        object.cartFinalizedId = [];
                        if (options.bytes !== Array)
                            object.cartFinalizedId = $util.newBuffer(object.cartFinalizedId);
                    }
                }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId =
                        options.bytes === String
                            ? $util.base64.encode(message.requestId, 0, message.requestId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.requestId)
                                : message.requestId;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.market.mass.Error.toObject(message.error, options);
                if (message.cartFinalizedId != null &&
                    message.hasOwnProperty("cartFinalizedId"))
                    object.cartFinalizedId =
                        options.bytes === String
                            ? $util.base64.encode(message.cartFinalizedId, 0, message.cartFinalizedId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.cartFinalizedId)
                                : message.cartFinalizedId;
                return object;
            };
            /**
             * Converts this CommitCartResponse to JSON.
             * @function toJSON
             * @memberof market.mass.CommitCartResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CommitCartResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for CommitCartResponse
             * @function getTypeUrl
             * @memberof market.mass.CommitCartResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CommitCartResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.CommitCartResponse";
            };
            return CommitCartResponse;
        })();
        mass.GetBlobUploadURLRequest = (function () {
            /**
             * Properties of a GetBlobUploadURLRequest.
             * @memberof market.mass
             * @interface IGetBlobUploadURLRequest
             * @property {Uint8Array|null} [requestId] GetBlobUploadURLRequest requestId
             */
            /**
             * Constructs a new GetBlobUploadURLRequest.
             * @memberof market.mass
             * @classdesc Represents a GetBlobUploadURLRequest.
             * @implements IGetBlobUploadURLRequest
             * @constructor
             * @param {market.mass.IGetBlobUploadURLRequest=} [properties] Properties to set
             */
            function GetBlobUploadURLRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * GetBlobUploadURLRequest requestId.
             * @member {Uint8Array} requestId
             * @memberof market.mass.GetBlobUploadURLRequest
             * @instance
             */
            GetBlobUploadURLRequest.prototype.requestId = $util.newBuffer([]);
            /**
             * Creates a new GetBlobUploadURLRequest instance using the specified properties.
             * @function create
             * @memberof market.mass.GetBlobUploadURLRequest
             * @static
             * @param {market.mass.IGetBlobUploadURLRequest=} [properties] Properties to set
             * @returns {market.mass.GetBlobUploadURLRequest} GetBlobUploadURLRequest instance
             */
            GetBlobUploadURLRequest.create = function create(properties) {
                return new GetBlobUploadURLRequest(properties);
            };
            /**
             * Encodes the specified GetBlobUploadURLRequest message. Does not implicitly {@link market.mass.GetBlobUploadURLRequest.verify|verify} messages.
             * @function encode
             * @memberof market.mass.GetBlobUploadURLRequest
             * @static
             * @param {market.mass.IGetBlobUploadURLRequest} message GetBlobUploadURLRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetBlobUploadURLRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null &&
                    Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.requestId);
                return writer;
            };
            /**
             * Encodes the specified GetBlobUploadURLRequest message, length delimited. Does not implicitly {@link market.mass.GetBlobUploadURLRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.GetBlobUploadURLRequest
             * @static
             * @param {market.mass.IGetBlobUploadURLRequest} message GetBlobUploadURLRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetBlobUploadURLRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a GetBlobUploadURLRequest message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.GetBlobUploadURLRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.GetBlobUploadURLRequest} GetBlobUploadURLRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetBlobUploadURLRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.GetBlobUploadURLRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.requestId = reader.bytes();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a GetBlobUploadURLRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.GetBlobUploadURLRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.GetBlobUploadURLRequest} GetBlobUploadURLRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetBlobUploadURLRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a GetBlobUploadURLRequest message.
             * @function verify
             * @memberof market.mass.GetBlobUploadURLRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetBlobUploadURLRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!((message.requestId &&
                        typeof message.requestId.length === "number") ||
                        $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                return null;
            };
            /**
             * Creates a GetBlobUploadURLRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.GetBlobUploadURLRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.GetBlobUploadURLRequest} GetBlobUploadURLRequest
             */
            GetBlobUploadURLRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.GetBlobUploadURLRequest)
                    return object;
                let message = new $root.market.mass.GetBlobUploadURLRequest();
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, (message.requestId = $util.newBuffer($util.base64.length(object.requestId))), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                return message;
            };
            /**
             * Creates a plain object from a GetBlobUploadURLRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.GetBlobUploadURLRequest
             * @static
             * @param {market.mass.GetBlobUploadURLRequest} message GetBlobUploadURLRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetBlobUploadURLRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.requestId = "";
                    else {
                        object.requestId = [];
                        if (options.bytes !== Array)
                            object.requestId = $util.newBuffer(object.requestId);
                    }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId =
                        options.bytes === String
                            ? $util.base64.encode(message.requestId, 0, message.requestId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.requestId)
                                : message.requestId;
                return object;
            };
            /**
             * Converts this GetBlobUploadURLRequest to JSON.
             * @function toJSON
             * @memberof market.mass.GetBlobUploadURLRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetBlobUploadURLRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for GetBlobUploadURLRequest
             * @function getTypeUrl
             * @memberof market.mass.GetBlobUploadURLRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetBlobUploadURLRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.GetBlobUploadURLRequest";
            };
            return GetBlobUploadURLRequest;
        })();
        mass.GetBlobUploadURLResponse = (function () {
            /**
             * Properties of a GetBlobUploadURLResponse.
             * @memberof market.mass
             * @interface IGetBlobUploadURLResponse
             * @property {Uint8Array|null} [requestId] GetBlobUploadURLResponse requestId
             * @property {market.mass.IError|null} [error] GetBlobUploadURLResponse error
             * @property {string|null} [url] GetBlobUploadURLResponse url
             */
            /**
             * Constructs a new GetBlobUploadURLResponse.
             * @memberof market.mass
             * @classdesc Represents a GetBlobUploadURLResponse.
             * @implements IGetBlobUploadURLResponse
             * @constructor
             * @param {market.mass.IGetBlobUploadURLResponse=} [properties] Properties to set
             */
            function GetBlobUploadURLResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * GetBlobUploadURLResponse requestId.
             * @member {Uint8Array} requestId
             * @memberof market.mass.GetBlobUploadURLResponse
             * @instance
             */
            GetBlobUploadURLResponse.prototype.requestId = $util.newBuffer([]);
            /**
             * GetBlobUploadURLResponse error.
             * @member {market.mass.IError|null|undefined} error
             * @memberof market.mass.GetBlobUploadURLResponse
             * @instance
             */
            GetBlobUploadURLResponse.prototype.error = null;
            /**
             * GetBlobUploadURLResponse url.
             * @member {string} url
             * @memberof market.mass.GetBlobUploadURLResponse
             * @instance
             */
            GetBlobUploadURLResponse.prototype.url = "";
            /**
             * Creates a new GetBlobUploadURLResponse instance using the specified properties.
             * @function create
             * @memberof market.mass.GetBlobUploadURLResponse
             * @static
             * @param {market.mass.IGetBlobUploadURLResponse=} [properties] Properties to set
             * @returns {market.mass.GetBlobUploadURLResponse} GetBlobUploadURLResponse instance
             */
            GetBlobUploadURLResponse.create = function create(properties) {
                return new GetBlobUploadURLResponse(properties);
            };
            /**
             * Encodes the specified GetBlobUploadURLResponse message. Does not implicitly {@link market.mass.GetBlobUploadURLResponse.verify|verify} messages.
             * @function encode
             * @memberof market.mass.GetBlobUploadURLResponse
             * @static
             * @param {market.mass.IGetBlobUploadURLResponse} message GetBlobUploadURLResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetBlobUploadURLResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null &&
                    Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.requestId);
                if (message.error != null &&
                    Object.hasOwnProperty.call(message, "error"))
                    $root.market.mass.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
                if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                    writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.url);
                return writer;
            };
            /**
             * Encodes the specified GetBlobUploadURLResponse message, length delimited. Does not implicitly {@link market.mass.GetBlobUploadURLResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.GetBlobUploadURLResponse
             * @static
             * @param {market.mass.IGetBlobUploadURLResponse} message GetBlobUploadURLResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetBlobUploadURLResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a GetBlobUploadURLResponse message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.GetBlobUploadURLResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.GetBlobUploadURLResponse} GetBlobUploadURLResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetBlobUploadURLResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.GetBlobUploadURLResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.requestId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.error = $root.market.mass.Error.decode(reader, reader.uint32());
                            break;
                        }
                        case 3: {
                            message.url = reader.string();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a GetBlobUploadURLResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.GetBlobUploadURLResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.GetBlobUploadURLResponse} GetBlobUploadURLResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetBlobUploadURLResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a GetBlobUploadURLResponse message.
             * @function verify
             * @memberof market.mass.GetBlobUploadURLResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetBlobUploadURLResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!((message.requestId &&
                        typeof message.requestId.length === "number") ||
                        $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    let error = $root.market.mass.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.url != null && message.hasOwnProperty("url"))
                    if (!$util.isString(message.url))
                        return "url: string expected";
                return null;
            };
            /**
             * Creates a GetBlobUploadURLResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.GetBlobUploadURLResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.GetBlobUploadURLResponse} GetBlobUploadURLResponse
             */
            GetBlobUploadURLResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.GetBlobUploadURLResponse)
                    return object;
                let message = new $root.market.mass.GetBlobUploadURLResponse();
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, (message.requestId = $util.newBuffer($util.base64.length(object.requestId))), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".market.mass.GetBlobUploadURLResponse.error: object expected");
                    message.error = $root.market.mass.Error.fromObject(object.error);
                }
                if (object.url != null)
                    message.url = String(object.url);
                return message;
            };
            /**
             * Creates a plain object from a GetBlobUploadURLResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.GetBlobUploadURLResponse
             * @static
             * @param {market.mass.GetBlobUploadURLResponse} message GetBlobUploadURLResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetBlobUploadURLResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.requestId = "";
                    else {
                        object.requestId = [];
                        if (options.bytes !== Array)
                            object.requestId = $util.newBuffer(object.requestId);
                    }
                    object.error = null;
                    object.url = "";
                }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId =
                        options.bytes === String
                            ? $util.base64.encode(message.requestId, 0, message.requestId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.requestId)
                                : message.requestId;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.market.mass.Error.toObject(message.error, options);
                if (message.url != null && message.hasOwnProperty("url"))
                    object.url = message.url;
                return object;
            };
            /**
             * Converts this GetBlobUploadURLResponse to JSON.
             * @function toJSON
             * @memberof market.mass.GetBlobUploadURLResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetBlobUploadURLResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for GetBlobUploadURLResponse
             * @function getTypeUrl
             * @memberof market.mass.GetBlobUploadURLResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetBlobUploadURLResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.GetBlobUploadURLResponse";
            };
            return GetBlobUploadURLResponse;
        })();
        mass.EventWriteRequest = (function () {
            /**
             * Properties of an EventWriteRequest.
             * @memberof market.mass
             * @interface IEventWriteRequest
             * @property {Uint8Array|null} [requestId] EventWriteRequest requestId
             * @property {market.mass.IEvent|null} [event] EventWriteRequest event
             */
            /**
             * Constructs a new EventWriteRequest.
             * @memberof market.mass
             * @classdesc Represents an EventWriteRequest.
             * @implements IEventWriteRequest
             * @constructor
             * @param {market.mass.IEventWriteRequest=} [properties] Properties to set
             */
            function EventWriteRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * EventWriteRequest requestId.
             * @member {Uint8Array} requestId
             * @memberof market.mass.EventWriteRequest
             * @instance
             */
            EventWriteRequest.prototype.requestId = $util.newBuffer([]);
            /**
             * EventWriteRequest event.
             * @member {market.mass.IEvent|null|undefined} event
             * @memberof market.mass.EventWriteRequest
             * @instance
             */
            EventWriteRequest.prototype.event = null;
            /**
             * Creates a new EventWriteRequest instance using the specified properties.
             * @function create
             * @memberof market.mass.EventWriteRequest
             * @static
             * @param {market.mass.IEventWriteRequest=} [properties] Properties to set
             * @returns {market.mass.EventWriteRequest} EventWriteRequest instance
             */
            EventWriteRequest.create = function create(properties) {
                return new EventWriteRequest(properties);
            };
            /**
             * Encodes the specified EventWriteRequest message. Does not implicitly {@link market.mass.EventWriteRequest.verify|verify} messages.
             * @function encode
             * @memberof market.mass.EventWriteRequest
             * @static
             * @param {market.mass.IEventWriteRequest} message EventWriteRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventWriteRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null &&
                    Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.requestId);
                if (message.event != null &&
                    Object.hasOwnProperty.call(message, "event"))
                    $root.market.mass.Event.encode(message.event, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified EventWriteRequest message, length delimited. Does not implicitly {@link market.mass.EventWriteRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.EventWriteRequest
             * @static
             * @param {market.mass.IEventWriteRequest} message EventWriteRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventWriteRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes an EventWriteRequest message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.EventWriteRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.EventWriteRequest} EventWriteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventWriteRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.EventWriteRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.requestId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.event = $root.market.mass.Event.decode(reader, reader.uint32());
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes an EventWriteRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.EventWriteRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.EventWriteRequest} EventWriteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventWriteRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies an EventWriteRequest message.
             * @function verify
             * @memberof market.mass.EventWriteRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EventWriteRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!((message.requestId &&
                        typeof message.requestId.length === "number") ||
                        $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                if (message.event != null && message.hasOwnProperty("event")) {
                    let error = $root.market.mass.Event.verify(message.event);
                    if (error)
                        return "event." + error;
                }
                return null;
            };
            /**
             * Creates an EventWriteRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.EventWriteRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.EventWriteRequest} EventWriteRequest
             */
            EventWriteRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.EventWriteRequest)
                    return object;
                let message = new $root.market.mass.EventWriteRequest();
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, (message.requestId = $util.newBuffer($util.base64.length(object.requestId))), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                if (object.event != null) {
                    if (typeof object.event !== "object")
                        throw TypeError(".market.mass.EventWriteRequest.event: object expected");
                    message.event = $root.market.mass.Event.fromObject(object.event);
                }
                return message;
            };
            /**
             * Creates a plain object from an EventWriteRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.EventWriteRequest
             * @static
             * @param {market.mass.EventWriteRequest} message EventWriteRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EventWriteRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.requestId = "";
                    else {
                        object.requestId = [];
                        if (options.bytes !== Array)
                            object.requestId = $util.newBuffer(object.requestId);
                    }
                    object.event = null;
                }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId =
                        options.bytes === String
                            ? $util.base64.encode(message.requestId, 0, message.requestId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.requestId)
                                : message.requestId;
                if (message.event != null && message.hasOwnProperty("event"))
                    object.event = $root.market.mass.Event.toObject(message.event, options);
                return object;
            };
            /**
             * Converts this EventWriteRequest to JSON.
             * @function toJSON
             * @memberof market.mass.EventWriteRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EventWriteRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for EventWriteRequest
             * @function getTypeUrl
             * @memberof market.mass.EventWriteRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EventWriteRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.EventWriteRequest";
            };
            return EventWriteRequest;
        })();
        mass.EventWriteResponse = (function () {
            /**
             * Properties of an EventWriteResponse.
             * @memberof market.mass
             * @interface IEventWriteResponse
             * @property {Uint8Array|null} [requestId] EventWriteResponse requestId
             * @property {market.mass.IError|null} [error] EventWriteResponse error
             * @property {Uint8Array|null} [newStoreHash] EventWriteResponse newStoreHash
             * @property {number|Long|null} [eventSequenceNo] EventWriteResponse eventSequenceNo
             */
            /**
             * Constructs a new EventWriteResponse.
             * @memberof market.mass
             * @classdesc Represents an EventWriteResponse.
             * @implements IEventWriteResponse
             * @constructor
             * @param {market.mass.IEventWriteResponse=} [properties] Properties to set
             */
            function EventWriteResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * EventWriteResponse requestId.
             * @member {Uint8Array} requestId
             * @memberof market.mass.EventWriteResponse
             * @instance
             */
            EventWriteResponse.prototype.requestId = $util.newBuffer([]);
            /**
             * EventWriteResponse error.
             * @member {market.mass.IError|null|undefined} error
             * @memberof market.mass.EventWriteResponse
             * @instance
             */
            EventWriteResponse.prototype.error = null;
            /**
             * EventWriteResponse newStoreHash.
             * @member {Uint8Array} newStoreHash
             * @memberof market.mass.EventWriteResponse
             * @instance
             */
            EventWriteResponse.prototype.newStoreHash = $util.newBuffer([]);
            /**
             * EventWriteResponse eventSequenceNo.
             * @member {number|Long} eventSequenceNo
             * @memberof market.mass.EventWriteResponse
             * @instance
             */
            EventWriteResponse.prototype.eventSequenceNo = $util.Long
                ? $util.Long.fromBits(0, 0, true)
                : 0;
            /**
             * Creates a new EventWriteResponse instance using the specified properties.
             * @function create
             * @memberof market.mass.EventWriteResponse
             * @static
             * @param {market.mass.IEventWriteResponse=} [properties] Properties to set
             * @returns {market.mass.EventWriteResponse} EventWriteResponse instance
             */
            EventWriteResponse.create = function create(properties) {
                return new EventWriteResponse(properties);
            };
            /**
             * Encodes the specified EventWriteResponse message. Does not implicitly {@link market.mass.EventWriteResponse.verify|verify} messages.
             * @function encode
             * @memberof market.mass.EventWriteResponse
             * @static
             * @param {market.mass.IEventWriteResponse} message EventWriteResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventWriteResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null &&
                    Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.requestId);
                if (message.error != null &&
                    Object.hasOwnProperty.call(message, "error"))
                    $root.market.mass.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
                if (message.newStoreHash != null &&
                    Object.hasOwnProperty.call(message, "newStoreHash"))
                    writer.uint32(/* id 3, wireType 2 =*/ 26).bytes(message.newStoreHash);
                if (message.eventSequenceNo != null &&
                    Object.hasOwnProperty.call(message, "eventSequenceNo"))
                    writer
                        .uint32(/* id 4, wireType 0 =*/ 32)
                        .uint64(message.eventSequenceNo);
                return writer;
            };
            /**
             * Encodes the specified EventWriteResponse message, length delimited. Does not implicitly {@link market.mass.EventWriteResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.EventWriteResponse
             * @static
             * @param {market.mass.IEventWriteResponse} message EventWriteResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventWriteResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes an EventWriteResponse message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.EventWriteResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.EventWriteResponse} EventWriteResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventWriteResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.EventWriteResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.requestId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.error = $root.market.mass.Error.decode(reader, reader.uint32());
                            break;
                        }
                        case 3: {
                            message.newStoreHash = reader.bytes();
                            break;
                        }
                        case 4: {
                            message.eventSequenceNo = reader.uint64();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes an EventWriteResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.EventWriteResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.EventWriteResponse} EventWriteResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventWriteResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies an EventWriteResponse message.
             * @function verify
             * @memberof market.mass.EventWriteResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EventWriteResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!((message.requestId &&
                        typeof message.requestId.length === "number") ||
                        $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    let error = $root.market.mass.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.newStoreHash != null &&
                    message.hasOwnProperty("newStoreHash"))
                    if (!((message.newStoreHash &&
                        typeof message.newStoreHash.length === "number") ||
                        $util.isString(message.newStoreHash)))
                        return "newStoreHash: buffer expected";
                if (message.eventSequenceNo != null &&
                    message.hasOwnProperty("eventSequenceNo"))
                    if (!$util.isInteger(message.eventSequenceNo) &&
                        !(message.eventSequenceNo &&
                            $util.isInteger(message.eventSequenceNo.low) &&
                            $util.isInteger(message.eventSequenceNo.high)))
                        return "eventSequenceNo: integer|Long expected";
                return null;
            };
            /**
             * Creates an EventWriteResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.EventWriteResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.EventWriteResponse} EventWriteResponse
             */
            EventWriteResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.EventWriteResponse)
                    return object;
                let message = new $root.market.mass.EventWriteResponse();
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, (message.requestId = $util.newBuffer($util.base64.length(object.requestId))), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".market.mass.EventWriteResponse.error: object expected");
                    message.error = $root.market.mass.Error.fromObject(object.error);
                }
                if (object.newStoreHash != null)
                    if (typeof object.newStoreHash === "string")
                        $util.base64.decode(object.newStoreHash, (message.newStoreHash = $util.newBuffer($util.base64.length(object.newStoreHash))), 0);
                    else if (object.newStoreHash.length >= 0)
                        message.newStoreHash = object.newStoreHash;
                if (object.eventSequenceNo != null)
                    if ($util.Long)
                        (message.eventSequenceNo = $util.Long.fromValue(object.eventSequenceNo)).unsigned = true;
                    else if (typeof object.eventSequenceNo === "string")
                        message.eventSequenceNo = parseInt(object.eventSequenceNo, 10);
                    else if (typeof object.eventSequenceNo === "number")
                        message.eventSequenceNo = object.eventSequenceNo;
                    else if (typeof object.eventSequenceNo === "object")
                        message.eventSequenceNo = new $util.LongBits(object.eventSequenceNo.low >>> 0, object.eventSequenceNo.high >>> 0).toNumber(true);
                return message;
            };
            /**
             * Creates a plain object from an EventWriteResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.EventWriteResponse
             * @static
             * @param {market.mass.EventWriteResponse} message EventWriteResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EventWriteResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.requestId = "";
                    else {
                        object.requestId = [];
                        if (options.bytes !== Array)
                            object.requestId = $util.newBuffer(object.requestId);
                    }
                    object.error = null;
                    if (options.bytes === String)
                        object.newStoreHash = "";
                    else {
                        object.newStoreHash = [];
                        if (options.bytes !== Array)
                            object.newStoreHash = $util.newBuffer(object.newStoreHash);
                    }
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.eventSequenceNo =
                            options.longs === String
                                ? long.toString()
                                : options.longs === Number
                                    ? long.toNumber()
                                    : long;
                    }
                    else
                        object.eventSequenceNo = options.longs === String ? "0" : 0;
                }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId =
                        options.bytes === String
                            ? $util.base64.encode(message.requestId, 0, message.requestId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.requestId)
                                : message.requestId;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.market.mass.Error.toObject(message.error, options);
                if (message.newStoreHash != null &&
                    message.hasOwnProperty("newStoreHash"))
                    object.newStoreHash =
                        options.bytes === String
                            ? $util.base64.encode(message.newStoreHash, 0, message.newStoreHash.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.newStoreHash)
                                : message.newStoreHash;
                if (message.eventSequenceNo != null &&
                    message.hasOwnProperty("eventSequenceNo"))
                    if (typeof message.eventSequenceNo === "number")
                        object.eventSequenceNo =
                            options.longs === String
                                ? String(message.eventSequenceNo)
                                : message.eventSequenceNo;
                    else
                        object.eventSequenceNo =
                            options.longs === String
                                ? $util.Long.prototype.toString.call(message.eventSequenceNo)
                                : options.longs === Number
                                    ? new $util.LongBits(message.eventSequenceNo.low >>> 0, message.eventSequenceNo.high >>> 0).toNumber(true)
                                    : message.eventSequenceNo;
                return object;
            };
            /**
             * Converts this EventWriteResponse to JSON.
             * @function toJSON
             * @memberof market.mass.EventWriteResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EventWriteResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for EventWriteResponse
             * @function getTypeUrl
             * @memberof market.mass.EventWriteResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EventWriteResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.EventWriteResponse";
            };
            return EventWriteResponse;
        })();
        mass.SyncStatusRequest = (function () {
            /**
             * Properties of a SyncStatusRequest.
             * @memberof market.mass
             * @interface ISyncStatusRequest
             * @property {Uint8Array|null} [requestId] SyncStatusRequest requestId
             * @property {number|Long|null} [unpushedEvents] SyncStatusRequest unpushedEvents
             */
            /**
             * Constructs a new SyncStatusRequest.
             * @memberof market.mass
             * @classdesc Represents a SyncStatusRequest.
             * @implements ISyncStatusRequest
             * @constructor
             * @param {market.mass.ISyncStatusRequest=} [properties] Properties to set
             */
            function SyncStatusRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * SyncStatusRequest requestId.
             * @member {Uint8Array} requestId
             * @memberof market.mass.SyncStatusRequest
             * @instance
             */
            SyncStatusRequest.prototype.requestId = $util.newBuffer([]);
            /**
             * SyncStatusRequest unpushedEvents.
             * @member {number|Long} unpushedEvents
             * @memberof market.mass.SyncStatusRequest
             * @instance
             */
            SyncStatusRequest.prototype.unpushedEvents = $util.Long
                ? $util.Long.fromBits(0, 0, true)
                : 0;
            /**
             * Creates a new SyncStatusRequest instance using the specified properties.
             * @function create
             * @memberof market.mass.SyncStatusRequest
             * @static
             * @param {market.mass.ISyncStatusRequest=} [properties] Properties to set
             * @returns {market.mass.SyncStatusRequest} SyncStatusRequest instance
             */
            SyncStatusRequest.create = function create(properties) {
                return new SyncStatusRequest(properties);
            };
            /**
             * Encodes the specified SyncStatusRequest message. Does not implicitly {@link market.mass.SyncStatusRequest.verify|verify} messages.
             * @function encode
             * @memberof market.mass.SyncStatusRequest
             * @static
             * @param {market.mass.ISyncStatusRequest} message SyncStatusRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SyncStatusRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null &&
                    Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.requestId);
                if (message.unpushedEvents != null &&
                    Object.hasOwnProperty.call(message, "unpushedEvents"))
                    writer
                        .uint32(/* id 2, wireType 0 =*/ 16)
                        .uint64(message.unpushedEvents);
                return writer;
            };
            /**
             * Encodes the specified SyncStatusRequest message, length delimited. Does not implicitly {@link market.mass.SyncStatusRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.SyncStatusRequest
             * @static
             * @param {market.mass.ISyncStatusRequest} message SyncStatusRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SyncStatusRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a SyncStatusRequest message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.SyncStatusRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.SyncStatusRequest} SyncStatusRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SyncStatusRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.SyncStatusRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.requestId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.unpushedEvents = reader.uint64();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a SyncStatusRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.SyncStatusRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.SyncStatusRequest} SyncStatusRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SyncStatusRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a SyncStatusRequest message.
             * @function verify
             * @memberof market.mass.SyncStatusRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SyncStatusRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!((message.requestId &&
                        typeof message.requestId.length === "number") ||
                        $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                if (message.unpushedEvents != null &&
                    message.hasOwnProperty("unpushedEvents"))
                    if (!$util.isInteger(message.unpushedEvents) &&
                        !(message.unpushedEvents &&
                            $util.isInteger(message.unpushedEvents.low) &&
                            $util.isInteger(message.unpushedEvents.high)))
                        return "unpushedEvents: integer|Long expected";
                return null;
            };
            /**
             * Creates a SyncStatusRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.SyncStatusRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.SyncStatusRequest} SyncStatusRequest
             */
            SyncStatusRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.SyncStatusRequest)
                    return object;
                let message = new $root.market.mass.SyncStatusRequest();
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, (message.requestId = $util.newBuffer($util.base64.length(object.requestId))), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                if (object.unpushedEvents != null)
                    if ($util.Long)
                        (message.unpushedEvents = $util.Long.fromValue(object.unpushedEvents)).unsigned = true;
                    else if (typeof object.unpushedEvents === "string")
                        message.unpushedEvents = parseInt(object.unpushedEvents, 10);
                    else if (typeof object.unpushedEvents === "number")
                        message.unpushedEvents = object.unpushedEvents;
                    else if (typeof object.unpushedEvents === "object")
                        message.unpushedEvents = new $util.LongBits(object.unpushedEvents.low >>> 0, object.unpushedEvents.high >>> 0).toNumber(true);
                return message;
            };
            /**
             * Creates a plain object from a SyncStatusRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.SyncStatusRequest
             * @static
             * @param {market.mass.SyncStatusRequest} message SyncStatusRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SyncStatusRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.requestId = "";
                    else {
                        object.requestId = [];
                        if (options.bytes !== Array)
                            object.requestId = $util.newBuffer(object.requestId);
                    }
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.unpushedEvents =
                            options.longs === String
                                ? long.toString()
                                : options.longs === Number
                                    ? long.toNumber()
                                    : long;
                    }
                    else
                        object.unpushedEvents = options.longs === String ? "0" : 0;
                }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId =
                        options.bytes === String
                            ? $util.base64.encode(message.requestId, 0, message.requestId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.requestId)
                                : message.requestId;
                if (message.unpushedEvents != null &&
                    message.hasOwnProperty("unpushedEvents"))
                    if (typeof message.unpushedEvents === "number")
                        object.unpushedEvents =
                            options.longs === String
                                ? String(message.unpushedEvents)
                                : message.unpushedEvents;
                    else
                        object.unpushedEvents =
                            options.longs === String
                                ? $util.Long.prototype.toString.call(message.unpushedEvents)
                                : options.longs === Number
                                    ? new $util.LongBits(message.unpushedEvents.low >>> 0, message.unpushedEvents.high >>> 0).toNumber(true)
                                    : message.unpushedEvents;
                return object;
            };
            /**
             * Converts this SyncStatusRequest to JSON.
             * @function toJSON
             * @memberof market.mass.SyncStatusRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SyncStatusRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for SyncStatusRequest
             * @function getTypeUrl
             * @memberof market.mass.SyncStatusRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SyncStatusRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.SyncStatusRequest";
            };
            return SyncStatusRequest;
        })();
        mass.SyncStatusResponse = (function () {
            /**
             * Properties of a SyncStatusResponse.
             * @memberof market.mass
             * @interface ISyncStatusResponse
             * @property {Uint8Array|null} [requestId] SyncStatusResponse requestId
             * @property {market.mass.IError|null} [error] SyncStatusResponse error
             */
            /**
             * Constructs a new SyncStatusResponse.
             * @memberof market.mass
             * @classdesc Represents a SyncStatusResponse.
             * @implements ISyncStatusResponse
             * @constructor
             * @param {market.mass.ISyncStatusResponse=} [properties] Properties to set
             */
            function SyncStatusResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * SyncStatusResponse requestId.
             * @member {Uint8Array} requestId
             * @memberof market.mass.SyncStatusResponse
             * @instance
             */
            SyncStatusResponse.prototype.requestId = $util.newBuffer([]);
            /**
             * SyncStatusResponse error.
             * @member {market.mass.IError|null|undefined} error
             * @memberof market.mass.SyncStatusResponse
             * @instance
             */
            SyncStatusResponse.prototype.error = null;
            /**
             * Creates a new SyncStatusResponse instance using the specified properties.
             * @function create
             * @memberof market.mass.SyncStatusResponse
             * @static
             * @param {market.mass.ISyncStatusResponse=} [properties] Properties to set
             * @returns {market.mass.SyncStatusResponse} SyncStatusResponse instance
             */
            SyncStatusResponse.create = function create(properties) {
                return new SyncStatusResponse(properties);
            };
            /**
             * Encodes the specified SyncStatusResponse message. Does not implicitly {@link market.mass.SyncStatusResponse.verify|verify} messages.
             * @function encode
             * @memberof market.mass.SyncStatusResponse
             * @static
             * @param {market.mass.ISyncStatusResponse} message SyncStatusResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SyncStatusResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null &&
                    Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.requestId);
                if (message.error != null &&
                    Object.hasOwnProperty.call(message, "error"))
                    $root.market.mass.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified SyncStatusResponse message, length delimited. Does not implicitly {@link market.mass.SyncStatusResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.SyncStatusResponse
             * @static
             * @param {market.mass.ISyncStatusResponse} message SyncStatusResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SyncStatusResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a SyncStatusResponse message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.SyncStatusResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.SyncStatusResponse} SyncStatusResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SyncStatusResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.SyncStatusResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.requestId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.error = $root.market.mass.Error.decode(reader, reader.uint32());
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a SyncStatusResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.SyncStatusResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.SyncStatusResponse} SyncStatusResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SyncStatusResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a SyncStatusResponse message.
             * @function verify
             * @memberof market.mass.SyncStatusResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SyncStatusResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!((message.requestId &&
                        typeof message.requestId.length === "number") ||
                        $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    let error = $root.market.mass.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                return null;
            };
            /**
             * Creates a SyncStatusResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.SyncStatusResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.SyncStatusResponse} SyncStatusResponse
             */
            SyncStatusResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.SyncStatusResponse)
                    return object;
                let message = new $root.market.mass.SyncStatusResponse();
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, (message.requestId = $util.newBuffer($util.base64.length(object.requestId))), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".market.mass.SyncStatusResponse.error: object expected");
                    message.error = $root.market.mass.Error.fromObject(object.error);
                }
                return message;
            };
            /**
             * Creates a plain object from a SyncStatusResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.SyncStatusResponse
             * @static
             * @param {market.mass.SyncStatusResponse} message SyncStatusResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SyncStatusResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.requestId = "";
                    else {
                        object.requestId = [];
                        if (options.bytes !== Array)
                            object.requestId = $util.newBuffer(object.requestId);
                    }
                    object.error = null;
                }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId =
                        options.bytes === String
                            ? $util.base64.encode(message.requestId, 0, message.requestId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.requestId)
                                : message.requestId;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.market.mass.Error.toObject(message.error, options);
                return object;
            };
            /**
             * Converts this SyncStatusResponse to JSON.
             * @function toJSON
             * @memberof market.mass.SyncStatusResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SyncStatusResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for SyncStatusResponse
             * @function getTypeUrl
             * @memberof market.mass.SyncStatusResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SyncStatusResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.SyncStatusResponse";
            };
            return SyncStatusResponse;
        })();
        mass.EventPushRequest = (function () {
            /**
             * Properties of an EventPushRequest.
             * @memberof market.mass
             * @interface IEventPushRequest
             * @property {Uint8Array|null} [requestId] EventPushRequest requestId
             * @property {Array.<market.mass.IEvent>|null} [events] EventPushRequest events
             */
            /**
             * Constructs a new EventPushRequest.
             * @memberof market.mass
             * @classdesc Represents an EventPushRequest.
             * @implements IEventPushRequest
             * @constructor
             * @param {market.mass.IEventPushRequest=} [properties] Properties to set
             */
            function EventPushRequest(properties) {
                this.events = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * EventPushRequest requestId.
             * @member {Uint8Array} requestId
             * @memberof market.mass.EventPushRequest
             * @instance
             */
            EventPushRequest.prototype.requestId = $util.newBuffer([]);
            /**
             * EventPushRequest events.
             * @member {Array.<market.mass.IEvent>} events
             * @memberof market.mass.EventPushRequest
             * @instance
             */
            EventPushRequest.prototype.events = $util.emptyArray;
            /**
             * Creates a new EventPushRequest instance using the specified properties.
             * @function create
             * @memberof market.mass.EventPushRequest
             * @static
             * @param {market.mass.IEventPushRequest=} [properties] Properties to set
             * @returns {market.mass.EventPushRequest} EventPushRequest instance
             */
            EventPushRequest.create = function create(properties) {
                return new EventPushRequest(properties);
            };
            /**
             * Encodes the specified EventPushRequest message. Does not implicitly {@link market.mass.EventPushRequest.verify|verify} messages.
             * @function encode
             * @memberof market.mass.EventPushRequest
             * @static
             * @param {market.mass.IEventPushRequest} message EventPushRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventPushRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null &&
                    Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.requestId);
                if (message.events != null && message.events.length)
                    for (let i = 0; i < message.events.length; ++i)
                        $root.market.mass.Event.encode(message.events[i], writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified EventPushRequest message, length delimited. Does not implicitly {@link market.mass.EventPushRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.EventPushRequest
             * @static
             * @param {market.mass.IEventPushRequest} message EventPushRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventPushRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes an EventPushRequest message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.EventPushRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.EventPushRequest} EventPushRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventPushRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.EventPushRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.requestId = reader.bytes();
                            break;
                        }
                        case 2: {
                            if (!(message.events && message.events.length))
                                message.events = [];
                            message.events.push($root.market.mass.Event.decode(reader, reader.uint32()));
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes an EventPushRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.EventPushRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.EventPushRequest} EventPushRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventPushRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies an EventPushRequest message.
             * @function verify
             * @memberof market.mass.EventPushRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EventPushRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!((message.requestId &&
                        typeof message.requestId.length === "number") ||
                        $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                if (message.events != null && message.hasOwnProperty("events")) {
                    if (!Array.isArray(message.events))
                        return "events: array expected";
                    for (let i = 0; i < message.events.length; ++i) {
                        let error = $root.market.mass.Event.verify(message.events[i]);
                        if (error)
                            return "events." + error;
                    }
                }
                return null;
            };
            /**
             * Creates an EventPushRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.EventPushRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.EventPushRequest} EventPushRequest
             */
            EventPushRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.EventPushRequest)
                    return object;
                let message = new $root.market.mass.EventPushRequest();
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, (message.requestId = $util.newBuffer($util.base64.length(object.requestId))), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                if (object.events) {
                    if (!Array.isArray(object.events))
                        throw TypeError(".market.mass.EventPushRequest.events: array expected");
                    message.events = [];
                    for (let i = 0; i < object.events.length; ++i) {
                        if (typeof object.events[i] !== "object")
                            throw TypeError(".market.mass.EventPushRequest.events: object expected");
                        message.events[i] = $root.market.mass.Event.fromObject(object.events[i]);
                    }
                }
                return message;
            };
            /**
             * Creates a plain object from an EventPushRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.EventPushRequest
             * @static
             * @param {market.mass.EventPushRequest} message EventPushRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EventPushRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.events = [];
                if (options.defaults)
                    if (options.bytes === String)
                        object.requestId = "";
                    else {
                        object.requestId = [];
                        if (options.bytes !== Array)
                            object.requestId = $util.newBuffer(object.requestId);
                    }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId =
                        options.bytes === String
                            ? $util.base64.encode(message.requestId, 0, message.requestId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.requestId)
                                : message.requestId;
                if (message.events && message.events.length) {
                    object.events = [];
                    for (let j = 0; j < message.events.length; ++j)
                        object.events[j] = $root.market.mass.Event.toObject(message.events[j], options);
                }
                return object;
            };
            /**
             * Converts this EventPushRequest to JSON.
             * @function toJSON
             * @memberof market.mass.EventPushRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EventPushRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for EventPushRequest
             * @function getTypeUrl
             * @memberof market.mass.EventPushRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EventPushRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.EventPushRequest";
            };
            return EventPushRequest;
        })();
        mass.EventPushResponse = (function () {
            /**
             * Properties of an EventPushResponse.
             * @memberof market.mass
             * @interface IEventPushResponse
             * @property {Uint8Array|null} [requestId] EventPushResponse requestId
             * @property {market.mass.IError|null} [error] EventPushResponse error
             */
            /**
             * Constructs a new EventPushResponse.
             * @memberof market.mass
             * @classdesc Represents an EventPushResponse.
             * @implements IEventPushResponse
             * @constructor
             * @param {market.mass.IEventPushResponse=} [properties] Properties to set
             */
            function EventPushResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * EventPushResponse requestId.
             * @member {Uint8Array} requestId
             * @memberof market.mass.EventPushResponse
             * @instance
             */
            EventPushResponse.prototype.requestId = $util.newBuffer([]);
            /**
             * EventPushResponse error.
             * @member {market.mass.IError|null|undefined} error
             * @memberof market.mass.EventPushResponse
             * @instance
             */
            EventPushResponse.prototype.error = null;
            /**
             * Creates a new EventPushResponse instance using the specified properties.
             * @function create
             * @memberof market.mass.EventPushResponse
             * @static
             * @param {market.mass.IEventPushResponse=} [properties] Properties to set
             * @returns {market.mass.EventPushResponse} EventPushResponse instance
             */
            EventPushResponse.create = function create(properties) {
                return new EventPushResponse(properties);
            };
            /**
             * Encodes the specified EventPushResponse message. Does not implicitly {@link market.mass.EventPushResponse.verify|verify} messages.
             * @function encode
             * @memberof market.mass.EventPushResponse
             * @static
             * @param {market.mass.IEventPushResponse} message EventPushResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventPushResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null &&
                    Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.requestId);
                if (message.error != null &&
                    Object.hasOwnProperty.call(message, "error"))
                    $root.market.mass.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified EventPushResponse message, length delimited. Does not implicitly {@link market.mass.EventPushResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.EventPushResponse
             * @static
             * @param {market.mass.IEventPushResponse} message EventPushResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventPushResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes an EventPushResponse message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.EventPushResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.EventPushResponse} EventPushResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventPushResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.EventPushResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.requestId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.error = $root.market.mass.Error.decode(reader, reader.uint32());
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes an EventPushResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.EventPushResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.EventPushResponse} EventPushResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventPushResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies an EventPushResponse message.
             * @function verify
             * @memberof market.mass.EventPushResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EventPushResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!((message.requestId &&
                        typeof message.requestId.length === "number") ||
                        $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    let error = $root.market.mass.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                return null;
            };
            /**
             * Creates an EventPushResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.EventPushResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.EventPushResponse} EventPushResponse
             */
            EventPushResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.EventPushResponse)
                    return object;
                let message = new $root.market.mass.EventPushResponse();
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, (message.requestId = $util.newBuffer($util.base64.length(object.requestId))), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".market.mass.EventPushResponse.error: object expected");
                    message.error = $root.market.mass.Error.fromObject(object.error);
                }
                return message;
            };
            /**
             * Creates a plain object from an EventPushResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.EventPushResponse
             * @static
             * @param {market.mass.EventPushResponse} message EventPushResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EventPushResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.requestId = "";
                    else {
                        object.requestId = [];
                        if (options.bytes !== Array)
                            object.requestId = $util.newBuffer(object.requestId);
                    }
                    object.error = null;
                }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId =
                        options.bytes === String
                            ? $util.base64.encode(message.requestId, 0, message.requestId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.requestId)
                                : message.requestId;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.market.mass.Error.toObject(message.error, options);
                return object;
            };
            /**
             * Converts this EventPushResponse to JSON.
             * @function toJSON
             * @memberof market.mass.EventPushResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EventPushResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for EventPushResponse
             * @function getTypeUrl
             * @memberof market.mass.EventPushResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EventPushResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.EventPushResponse";
            };
            return EventPushResponse;
        })();
        mass.PingRequest = (function () {
            /**
             * Properties of a PingRequest.
             * @memberof market.mass
             * @interface IPingRequest
             * @property {Uint8Array|null} [requestId] PingRequest requestId
             */
            /**
             * Constructs a new PingRequest.
             * @memberof market.mass
             * @classdesc Represents a PingRequest.
             * @implements IPingRequest
             * @constructor
             * @param {market.mass.IPingRequest=} [properties] Properties to set
             */
            function PingRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * PingRequest requestId.
             * @member {Uint8Array} requestId
             * @memberof market.mass.PingRequest
             * @instance
             */
            PingRequest.prototype.requestId = $util.newBuffer([]);
            /**
             * Creates a new PingRequest instance using the specified properties.
             * @function create
             * @memberof market.mass.PingRequest
             * @static
             * @param {market.mass.IPingRequest=} [properties] Properties to set
             * @returns {market.mass.PingRequest} PingRequest instance
             */
            PingRequest.create = function create(properties) {
                return new PingRequest(properties);
            };
            /**
             * Encodes the specified PingRequest message. Does not implicitly {@link market.mass.PingRequest.verify|verify} messages.
             * @function encode
             * @memberof market.mass.PingRequest
             * @static
             * @param {market.mass.IPingRequest} message PingRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PingRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null &&
                    Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.requestId);
                return writer;
            };
            /**
             * Encodes the specified PingRequest message, length delimited. Does not implicitly {@link market.mass.PingRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.PingRequest
             * @static
             * @param {market.mass.IPingRequest} message PingRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PingRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a PingRequest message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.PingRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.PingRequest} PingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PingRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.PingRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.requestId = reader.bytes();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a PingRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.PingRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.PingRequest} PingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PingRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a PingRequest message.
             * @function verify
             * @memberof market.mass.PingRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PingRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!((message.requestId &&
                        typeof message.requestId.length === "number") ||
                        $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                return null;
            };
            /**
             * Creates a PingRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.PingRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.PingRequest} PingRequest
             */
            PingRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.PingRequest)
                    return object;
                let message = new $root.market.mass.PingRequest();
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, (message.requestId = $util.newBuffer($util.base64.length(object.requestId))), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                return message;
            };
            /**
             * Creates a plain object from a PingRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.PingRequest
             * @static
             * @param {market.mass.PingRequest} message PingRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PingRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.requestId = "";
                    else {
                        object.requestId = [];
                        if (options.bytes !== Array)
                            object.requestId = $util.newBuffer(object.requestId);
                    }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId =
                        options.bytes === String
                            ? $util.base64.encode(message.requestId, 0, message.requestId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.requestId)
                                : message.requestId;
                return object;
            };
            /**
             * Converts this PingRequest to JSON.
             * @function toJSON
             * @memberof market.mass.PingRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PingRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for PingRequest
             * @function getTypeUrl
             * @memberof market.mass.PingRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PingRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.PingRequest";
            };
            return PingRequest;
        })();
        mass.PingResponse = (function () {
            /**
             * Properties of a PingResponse.
             * @memberof market.mass
             * @interface IPingResponse
             * @property {Uint8Array|null} [requestId] PingResponse requestId
             * @property {market.mass.IError|null} [error] PingResponse error
             */
            /**
             * Constructs a new PingResponse.
             * @memberof market.mass
             * @classdesc Represents a PingResponse.
             * @implements IPingResponse
             * @constructor
             * @param {market.mass.IPingResponse=} [properties] Properties to set
             */
            function PingResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * PingResponse requestId.
             * @member {Uint8Array} requestId
             * @memberof market.mass.PingResponse
             * @instance
             */
            PingResponse.prototype.requestId = $util.newBuffer([]);
            /**
             * PingResponse error.
             * @member {market.mass.IError|null|undefined} error
             * @memberof market.mass.PingResponse
             * @instance
             */
            PingResponse.prototype.error = null;
            /**
             * Creates a new PingResponse instance using the specified properties.
             * @function create
             * @memberof market.mass.PingResponse
             * @static
             * @param {market.mass.IPingResponse=} [properties] Properties to set
             * @returns {market.mass.PingResponse} PingResponse instance
             */
            PingResponse.create = function create(properties) {
                return new PingResponse(properties);
            };
            /**
             * Encodes the specified PingResponse message. Does not implicitly {@link market.mass.PingResponse.verify|verify} messages.
             * @function encode
             * @memberof market.mass.PingResponse
             * @static
             * @param {market.mass.IPingResponse} message PingResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PingResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null &&
                    Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.requestId);
                if (message.error != null &&
                    Object.hasOwnProperty.call(message, "error"))
                    $root.market.mass.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link market.mass.PingResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.PingResponse
             * @static
             * @param {market.mass.IPingResponse} message PingResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PingResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a PingResponse message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.PingResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.PingResponse} PingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PingResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.PingResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.requestId = reader.bytes();
                            break;
                        }
                        case 2: {
                            message.error = $root.market.mass.Error.decode(reader, reader.uint32());
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a PingResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.PingResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.PingResponse} PingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PingResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a PingResponse message.
             * @function verify
             * @memberof market.mass.PingResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PingResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!((message.requestId &&
                        typeof message.requestId.length === "number") ||
                        $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    let error = $root.market.mass.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                return null;
            };
            /**
             * Creates a PingResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.PingResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.PingResponse} PingResponse
             */
            PingResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.PingResponse)
                    return object;
                let message = new $root.market.mass.PingResponse();
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, (message.requestId = $util.newBuffer($util.base64.length(object.requestId))), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".market.mass.PingResponse.error: object expected");
                    message.error = $root.market.mass.Error.fromObject(object.error);
                }
                return message;
            };
            /**
             * Creates a plain object from a PingResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.PingResponse
             * @static
             * @param {market.mass.PingResponse} message PingResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PingResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.requestId = "";
                    else {
                        object.requestId = [];
                        if (options.bytes !== Array)
                            object.requestId = $util.newBuffer(object.requestId);
                    }
                    object.error = null;
                }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId =
                        options.bytes === String
                            ? $util.base64.encode(message.requestId, 0, message.requestId.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.requestId)
                                : message.requestId;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.market.mass.Error.toObject(message.error, options);
                return object;
            };
            /**
             * Converts this PingResponse to JSON.
             * @function toJSON
             * @memberof market.mass.PingResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PingResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for PingResponse
             * @function getTypeUrl
             * @memberof market.mass.PingResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PingResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.PingResponse";
            };
            return PingResponse;
        })();
        mass.Error = (function () {
            /**
             * Properties of an Error.
             * @memberof market.mass
             * @interface IError
             * @property {string|null} [code] Error code
             * @property {string|null} [message] Error message
             */
            /**
             * Constructs a new Error.
             * @memberof market.mass
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {market.mass.IError=} [properties] Properties to set
             */
            function Error(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * Error code.
             * @member {string} code
             * @memberof market.mass.Error
             * @instance
             */
            Error.prototype.code = "";
            /**
             * Error message.
             * @member {string} message
             * @memberof market.mass.Error
             * @instance
             */
            Error.prototype.message = "";
            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof market.mass.Error
             * @static
             * @param {market.mass.IError=} [properties] Properties to set
             * @returns {market.mass.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };
            /**
             * Encodes the specified Error message. Does not implicitly {@link market.mass.Error.verify|verify} messages.
             * @function encode
             * @memberof market.mass.Error
             * @static
             * @param {market.mass.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.code);
                if (message.message != null &&
                    Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.message);
                return writer;
            };
            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link market.mass.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof market.mass.Error
             * @static
             * @param {market.mass.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof market.mass.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {market.mass.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.market.mass.Error();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1: {
                            message.code = reader.string();
                            break;
                        }
                        case 2: {
                            message.message = reader.string();
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof market.mass.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {market.mass.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies an Error message.
             * @function verify
             * @memberof market.mass.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isString(message.code))
                        return "code: string expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };
            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof market.mass.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {market.mass.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.market.mass.Error)
                    return object;
                let message = new $root.market.mass.Error();
                if (object.code != null)
                    message.code = String(object.code);
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };
            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @function toObject
             * @memberof market.mass.Error
             * @static
             * @param {market.mass.Error} message Error
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Error.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.code = "";
                    object.message = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };
            /**
             * Converts this Error to JSON.
             * @function toJSON
             * @memberof market.mass.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * Gets the default type url for Error
             * @function getTypeUrl
             * @memberof market.mass.Error
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Error.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/market.mass.Error";
            };
            return Error;
        })();
        return mass;
    })();
    return market;
})());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbWFzc21hcmsvbGliL3Byb3RvYnVmL2NvbXBpbGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUpBQXFKO0FBQ3JKLDhEQUFnRDtBQUVoRCxpQkFBaUI7QUFDakIsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFDOUIsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQzFCLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO0FBRXpCLDBCQUEwQjtBQUMxQixNQUFNLEtBQUssR0FDVCxTQUFTLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQXVsV3hELHdCQUFPO0FBcmxXWixRQUFBLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUU7SUFDMUM7Ozs7T0FJRztJQUNILE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUVsQixNQUFNLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDYjs7OztXQUlHO1FBQ0gsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRWhCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQztZQUNwQjs7Ozs7Ozs7ZUFRRztZQUVIOzs7Ozs7O2VBT0c7WUFDSCxTQUFTLGFBQWEsQ0FBQyxVQUFVO2dCQUMvQixJQUFJLFVBQVU7b0JBQ1osS0FBSyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO3dCQUNsRSxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJOzRCQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUM7WUFFRDs7Ozs7ZUFLRztZQUNILGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFdEQ7Ozs7O2VBS0c7WUFDSCxhQUFhLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRTNEOzs7OztlQUtHO1lBQ0gsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBRXBDOzs7OztlQUtHO1lBQ0gsYUFBYSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUU3RDs7Ozs7OztlQU9HO1lBQ0gsYUFBYSxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxVQUFVO2dCQUMvQyxPQUFPLElBQUksYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQztZQUVGOzs7Ozs7OztlQVFHO1lBQ0gsYUFBYSxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTTtnQkFDcEQsSUFBSSxDQUFDLE1BQU07b0JBQUUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDdkMsSUFDRSxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUk7b0JBQ3ZCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7b0JBRTlDLE1BQU0sQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbkUsSUFDRSxPQUFPLENBQUMsWUFBWSxJQUFJLElBQUk7b0JBQzVCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUM7b0JBRW5ELE1BQU0sQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDeEUsSUFDRSxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUk7b0JBQ3RCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7b0JBRTdDLE1BQU0sQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkUsSUFDRSxPQUFPLENBQUMsY0FBYyxJQUFJLElBQUk7b0JBQzlCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQztvQkFFckQsTUFBTTt5QkFDSCxNQUFNLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDO3lCQUNsQyxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNuQyxPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7ZUFRRztZQUNILGFBQWEsQ0FBQyxlQUFlLEdBQUcsU0FBUyxlQUFlLENBQ3RELE9BQU8sRUFDUCxNQUFNO2dCQUVOLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDL0MsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7Ozs7ZUFVRztZQUNILGFBQWEsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU07Z0JBQ25ELElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxPQUFPLENBQUM7b0JBQUUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xFLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxFQUMvRCxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDbEQsT0FBTyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO29CQUN4QixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzFCLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO3dCQUNsQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ2pDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ3RDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7NEJBQ2pDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ3hDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRDs0QkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDekIsTUFBTTtvQkFDVixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7OztlQVNHO1lBQ0gsYUFBYSxDQUFDLGVBQWUsR0FBRyxTQUFTLGVBQWUsQ0FBQyxNQUFNO2dCQUM3RCxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksT0FBTyxDQUFDO29CQUFFLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUM7WUFFRjs7Ozs7OztlQU9HO1lBQ0gsYUFBYSxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxPQUFPO2dCQUM1QyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLEtBQUssSUFBSTtvQkFDakQsT0FBTyxpQkFBaUIsQ0FBQztnQkFDM0IsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztvQkFDOUQsSUFDRSxDQUFDLENBQ0MsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDO3dCQUMvRCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FDaEM7d0JBRUQsT0FBTywwQkFBMEIsQ0FBQztnQkFDdEMsSUFDRSxPQUFPLENBQUMsWUFBWSxJQUFJLElBQUk7b0JBQzVCLE9BQU8sQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDO29CQUV0QyxJQUNFLENBQUMsQ0FDQyxDQUFDLE9BQU8sQ0FBQyxZQUFZO3dCQUNuQixPQUFPLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQzt3QkFDbEQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQ3JDO3dCQUVELE9BQU8sK0JBQStCLENBQUM7Z0JBQzNDLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7b0JBQzVELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7d0JBQUUsT0FBTyx5QkFBeUIsQ0FBQztnQkFDeEUsSUFDRSxPQUFPLENBQUMsY0FBYyxJQUFJLElBQUk7b0JBQzlCLE9BQU8sQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7b0JBRXhDLElBQ0UsQ0FBQyxDQUNDLENBQUMsT0FBTyxDQUFDLGNBQWM7d0JBQ3JCLE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDO3dCQUNwRCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FDdkM7d0JBRUQsT0FBTyxpQ0FBaUMsQ0FBQztnQkFDN0MsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDLENBQUM7WUFFRjs7Ozs7OztlQU9HO1lBQ0gsYUFBYSxDQUFDLFVBQVUsR0FBRyxTQUFTLFVBQVUsQ0FBQyxNQUFNO2dCQUNuRCxJQUFJLE1BQU0sWUFBWSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhO29CQUFFLE9BQU8sTUFBTSxDQUFDO2dCQUNyRSxJQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNwRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSTtvQkFDeEIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLEtBQUssUUFBUTt3QkFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2pCLE1BQU0sQ0FBQyxPQUFPLEVBQ2QsQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQ2hDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDcEMsQ0FBQyxFQUNGLENBQUMsQ0FDRixDQUFDO3lCQUNDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQzt3QkFBRSxPQUFPLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ3hFLElBQUksTUFBTSxDQUFDLFlBQVksSUFBSSxJQUFJO29CQUM3QixJQUFJLE9BQU8sTUFBTSxDQUFDLFlBQVksS0FBSyxRQUFRO3dCQUN6QyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDakIsTUFBTSxDQUFDLFlBQVksRUFDbkIsQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQ3JDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FDekMsQ0FBQyxFQUNGLENBQUMsQ0FDRixDQUFDO3lCQUNDLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksQ0FBQzt3QkFDdEMsT0FBTyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO2dCQUMvQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSTtvQkFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xFLElBQUksTUFBTSxDQUFDLGNBQWMsSUFBSSxJQUFJO29CQUMvQixJQUFJLE9BQU8sTUFBTSxDQUFDLGNBQWMsS0FBSyxRQUFRO3dCQUMzQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDakIsTUFBTSxDQUFDLGNBQWMsRUFDckIsQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQ3ZDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FDM0MsQ0FBQyxFQUNGLENBQUMsQ0FDRixDQUFDO3lCQUNDLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLElBQUksQ0FBQzt3QkFDeEMsT0FBTyxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO2dCQUNuRCxPQUFPLE9BQU8sQ0FBQztZQUNqQixDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7ZUFRRztZQUNILGFBQWEsQ0FBQyxRQUFRLEdBQUcsU0FBUyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU87Z0JBQ3pELElBQUksQ0FBQyxPQUFPO29CQUFFLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQzNCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDaEIsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3JCLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNO3dCQUFFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO3lCQUM3QyxDQUFDO3dCQUNKLE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO3dCQUNwQixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSzs0QkFDekIsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDckQsQ0FBQztvQkFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTt3QkFBRSxNQUFNLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQzt5QkFDbEQsQ0FBQzt3QkFDSixNQUFNLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQzt3QkFDekIsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7NEJBQ3pCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQy9ELENBQUM7b0JBQ0QsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7b0JBQ25CLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNO3dCQUFFLE1BQU0sQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO3lCQUNwRCxDQUFDO3dCQUNKLE1BQU0sQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO3dCQUMzQixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSzs0QkFDekIsTUFBTSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDbkUsQ0FBQztnQkFDSCxDQUFDO2dCQUNELElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7b0JBQzlELE1BQU0sQ0FBQyxPQUFPO3dCQUNaLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTs0QkFDdEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOzRCQUNqRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLO2dDQUN2QixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0NBQzdDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUMxQixJQUNFLE9BQU8sQ0FBQyxZQUFZLElBQUksSUFBSTtvQkFDNUIsT0FBTyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUM7b0JBRXRDLE1BQU0sQ0FBQyxZQUFZO3dCQUNqQixPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07NEJBQ3RCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDakIsT0FBTyxDQUFDLFlBQVksRUFDcEIsQ0FBQyxFQUNELE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUM1Qjs0QkFDSCxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLO2dDQUN2QixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7Z0NBQ2xELENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO2dCQUMvQixJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO29CQUM1RCxNQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQ2pDLElBQ0UsT0FBTyxDQUFDLGNBQWMsSUFBSSxJQUFJO29CQUM5QixPQUFPLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDO29CQUV4QyxNQUFNLENBQUMsY0FBYzt3QkFDbkIsT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNOzRCQUN0QixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2pCLE9BQU8sQ0FBQyxjQUFjLEVBQ3RCLENBQUMsRUFDRCxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FDOUI7NEJBQ0gsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSztnQ0FDdkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO2dDQUNwRCxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztnQkFDakMsT0FBTyxNQUFNLENBQUM7WUFDaEIsQ0FBQyxDQUFDO1lBRUY7Ozs7OztlQU1HO1lBQ0gsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNO2dCQUM5QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3ZFLENBQUMsQ0FBQztZQUVGOzs7Ozs7O2VBT0c7WUFDSCxhQUFhLENBQUMsVUFBVSxHQUFHLFNBQVMsVUFBVSxDQUFDLGFBQWE7Z0JBQzFELElBQUksYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO29CQUNoQyxhQUFhLEdBQUcscUJBQXFCLENBQUM7Z0JBQ3hDLENBQUM7Z0JBQ0QsT0FBTyxhQUFhLEdBQUcsNEJBQTRCLENBQUM7WUFDdEQsQ0FBQyxDQUFDO1lBRUYsT0FBTyxhQUFhLENBQUM7UUFDdkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQztZQUNyQjs7Ozs7Ozs7O2VBU0c7WUFFSDs7Ozs7OztlQU9HO1lBQ0gsU0FBUyxjQUFjLENBQUMsVUFBVTtnQkFDaEMsSUFBSSxVQUFVO29CQUNaLEtBQUssSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzt3QkFDbEUsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSTs0QkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDO1lBRUQ7Ozs7O2VBS0c7WUFDSCxjQUFjLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXZEOzs7OztlQUtHO1lBQ0gsY0FBYyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBRW5DOzs7OztlQUtHO1lBQ0gsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBRXZDOzs7OztlQUtHO1lBQ0gsY0FBYyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBRXRDOzs7OztlQUtHO1lBQ0gsY0FBYyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBRTFDLHlEQUF5RDtZQUN6RCxJQUFJLFlBQVksQ0FBQztZQUVqQjs7Ozs7ZUFLRztZQUNILE1BQU0sQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUU7Z0JBQ3ZELEdBQUcsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUNwQixDQUFDLFlBQVksR0FBRyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FDbEQ7Z0JBQ0QsR0FBRyxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO2FBQ3JDLENBQUMsQ0FBQztZQUVIOzs7Ozs7O2VBT0c7WUFDSCxjQUFjLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLFVBQVU7Z0JBQ2hELE9BQU8sSUFBSSxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7O2VBUUc7WUFDSCxjQUFjLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNyRCxJQUFJLENBQUMsTUFBTTtvQkFBRSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN2QyxJQUNFLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSTtvQkFDdkIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztvQkFFOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuRSxJQUNFLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSTtvQkFDckIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztvQkFFNUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqRSxJQUNFLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSTtvQkFDdEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztvQkFFN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNuRSxJQUNFLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSTtvQkFDckIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztvQkFFNUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqRSxJQUNFLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSTtvQkFDekIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztvQkFFaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNyRSxPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7ZUFRRztZQUNILGNBQWMsQ0FBQyxlQUFlLEdBQUcsU0FBUyxlQUFlLENBQ3ZELE9BQU8sRUFDUCxNQUFNO2dCQUVOLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDL0MsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7Ozs7ZUFVRztZQUNILGNBQWMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU07Z0JBQ3BELElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxPQUFPLENBQUM7b0JBQUUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xFLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxFQUMvRCxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDbkQsT0FBTyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO29CQUN4QixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzFCLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO3dCQUNsQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ2pDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQy9CLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7NEJBQ2pDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQy9CLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ25DLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRDs0QkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDekIsTUFBTTtvQkFDVixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7OztlQVNHO1lBQ0gsY0FBYyxDQUFDLGVBQWUsR0FBRyxTQUFTLGVBQWUsQ0FBQyxNQUFNO2dCQUM5RCxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksT0FBTyxDQUFDO29CQUFFLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUM7WUFFRjs7Ozs7OztlQU9HO1lBQ0gsY0FBYyxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxPQUFPO2dCQUM3QyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLEtBQUssSUFBSTtvQkFDakQsT0FBTyxpQkFBaUIsQ0FBQztnQkFDM0IsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO2dCQUNwQixJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO29CQUM5RCxJQUNFLENBQUMsQ0FDQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUM7d0JBQy9ELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUNoQzt3QkFFRCxPQUFPLDBCQUEwQixDQUFDO2dCQUN0QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO29CQUMxRCxRQUFRLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDdEI7NEJBQ0UsT0FBTyw0QkFBNEIsQ0FBQzt3QkFDdEMsS0FBSyxDQUFDLENBQUM7d0JBQ1AsS0FBSyxDQUFDLENBQUM7d0JBQ1AsS0FBSyxDQUFDLENBQUM7d0JBQ1AsS0FBSyxDQUFDLENBQUM7d0JBQ1AsS0FBSyxDQUFDOzRCQUNKLE1BQU07b0JBQ1YsQ0FBQztnQkFDSCxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztvQkFDL0QsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7d0JBQUUsT0FBTyx5QkFBeUIsQ0FBQztnQkFDeEUsQ0FBQztnQkFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztvQkFDN0QsSUFBSSxVQUFVLENBQUMsS0FBSyxLQUFLLENBQUM7d0JBQUUsT0FBTyx3QkFBd0IsQ0FBQztvQkFDNUQsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ3JCLElBQ0UsQ0FBQyxDQUNDLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQzt3QkFDM0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQzlCO3dCQUVELE9BQU8sd0JBQXdCLENBQUM7Z0JBQ3BDLENBQUM7Z0JBQ0QsSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7b0JBQ3JFLElBQUksVUFBVSxDQUFDLEtBQUssS0FBSyxDQUFDO3dCQUFFLE9BQU8sd0JBQXdCLENBQUM7b0JBQzVELFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixJQUNFLENBQUMsQ0FDQyxDQUFDLE9BQU8sQ0FBQyxTQUFTO3dCQUNoQixPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQzt3QkFDL0MsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQ2xDO3dCQUVELE9BQU8sNEJBQTRCLENBQUM7Z0JBQ3hDLENBQUM7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDLENBQUM7WUFFRjs7Ozs7OztlQU9HO1lBQ0gsY0FBYyxDQUFDLFVBQVUsR0FBRyxTQUFTLFVBQVUsQ0FBQyxNQUFNO2dCQUNwRCxJQUFJLE1BQU0sWUFBWSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjO29CQUFFLE9BQU8sTUFBTSxDQUFDO2dCQUN0RSxJQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNyRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSTtvQkFDeEIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLEtBQUssUUFBUTt3QkFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2pCLE1BQU0sQ0FBQyxPQUFPLEVBQ2QsQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQ2hDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDcEMsQ0FBQyxFQUNGLENBQUMsQ0FDRixDQUFDO3lCQUNDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQzt3QkFBRSxPQUFPLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ3hFLFFBQVEsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNyQjt3QkFDRSxJQUFJLE9BQU8sTUFBTSxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUUsQ0FBQzs0QkFDckMsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDOzRCQUM3QixNQUFNO3dCQUNSLENBQUM7d0JBQ0QsTUFBTTtvQkFDUixLQUFLLDRCQUE0QixDQUFDO29CQUNsQyxLQUFLLENBQUM7d0JBQ0osT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7d0JBQ2xCLE1BQU07b0JBQ1IsS0FBSyx1QkFBdUIsQ0FBQztvQkFDN0IsS0FBSyxDQUFDO3dCQUNKLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO3dCQUNsQixNQUFNO29CQUNSLEtBQUssOEJBQThCLENBQUM7b0JBQ3BDLEtBQUssQ0FBQzt3QkFDSixPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzt3QkFDbEIsTUFBTTtvQkFDUixLQUFLLDBCQUEwQixDQUFDO29CQUNoQyxLQUFLLENBQUM7d0JBQ0osT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7d0JBQ2xCLE1BQU07b0JBQ1IsS0FBSyw2QkFBNkIsQ0FBQztvQkFDbkMsS0FBSyxDQUFDO3dCQUNKLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO3dCQUNsQixNQUFNO2dCQUNWLENBQUM7Z0JBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUk7b0JBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSTtvQkFDdEIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxLQUFLLEtBQUssUUFBUTt3QkFDbEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2pCLE1BQU0sQ0FBQyxLQUFLLEVBQ1osQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQzlCLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FDbEMsQ0FBQyxFQUNGLENBQUMsQ0FDRixDQUFDO3lCQUNDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQzt3QkFBRSxPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2xFLElBQUksTUFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJO29CQUMxQixJQUFJLE9BQU8sTUFBTSxDQUFDLFNBQVMsS0FBSyxRQUFRO3dCQUN0QyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDakIsTUFBTSxDQUFDLFNBQVMsRUFDaEIsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQ2xDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FDdEMsQ0FBQyxFQUNGLENBQUMsQ0FDRixDQUFDO3lCQUNDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQzt3QkFDbkMsT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUN6QyxPQUFPLE9BQU8sQ0FBQztZQUNqQixDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7ZUFRRztZQUNILGNBQWMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU87Z0JBQzFELElBQUksQ0FBQyxPQUFPO29CQUFFLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQzNCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDaEIsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3JCLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNO3dCQUFFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO3lCQUM3QyxDQUFDO3dCQUNKLE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO3dCQUNwQixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSzs0QkFDekIsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDckQsQ0FBQztvQkFDRCxNQUFNLENBQUMsS0FBSzt3QkFDVixPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEUsQ0FBQztnQkFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO29CQUM5RCxNQUFNLENBQUMsT0FBTzt3QkFDWixPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07NEJBQ3RCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzs0QkFDakUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSztnQ0FDdkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2dDQUM3QyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDMUIsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztvQkFDMUQsTUFBTSxDQUFDLEtBQUs7d0JBQ1YsT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNOzRCQUN0QixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FDNUMsT0FBTyxDQUFDLEtBQUssQ0FDZCxLQUFLLFNBQVM7Z0NBQ2YsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLO2dDQUNmLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7NEJBQ2pFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUN0QixJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztvQkFDL0QsTUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUMvQixJQUFJLE9BQU8sQ0FBQyxNQUFNO3dCQUFFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO2dCQUM5QyxDQUFDO2dCQUNELElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO29CQUM3RCxNQUFNLENBQUMsS0FBSzt3QkFDVixPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07NEJBQ3RCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzs0QkFDN0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSztnQ0FDdkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2dDQUMzQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDdEIsSUFBSSxPQUFPLENBQUMsTUFBTTt3QkFBRSxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztnQkFDN0MsQ0FBQztnQkFDRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztvQkFDckUsTUFBTSxDQUFDLFNBQVM7d0JBQ2QsT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNOzRCQUN0QixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2pCLE9BQU8sQ0FBQyxTQUFTLEVBQ2pCLENBQUMsRUFDRCxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FDekI7NEJBQ0gsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSztnQ0FDdkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO2dDQUMvQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztvQkFDMUIsSUFBSSxPQUFPLENBQUMsTUFBTTt3QkFBRSxNQUFNLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztnQkFDakQsQ0FBQztnQkFDRCxPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDLENBQUM7WUFFRjs7Ozs7O2VBTUc7WUFDSCxjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU07Z0JBQy9DLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkUsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7ZUFPRztZQUNILGNBQWMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxVQUFVLENBQUMsYUFBYTtnQkFDM0QsSUFBSSxhQUFhLEtBQUssU0FBUyxFQUFFLENBQUM7b0JBQ2hDLGFBQWEsR0FBRyxxQkFBcUIsQ0FBQztnQkFDeEMsQ0FBQztnQkFDRCxPQUFPLGFBQWEsR0FBRyw2QkFBNkIsQ0FBQztZQUN2RCxDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7O2VBU0c7WUFDSCxjQUFjLENBQUMsYUFBYSxHQUFHLENBQUM7Z0JBQzlCLE1BQU0sVUFBVSxHQUFHLEVBQUUsRUFDbkIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3JDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyw0QkFBNEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzRCxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsdUJBQXVCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEQsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLDhCQUE4QixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdELE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRywwQkFBMEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6RCxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsNkJBQTZCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDNUQsT0FBTyxNQUFNLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVMLE9BQU8sY0FBYyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUM7WUFDakI7Ozs7Ozs7ZUFPRztZQUVIOzs7Ozs7O2VBT0c7WUFDSCxTQUFTLFVBQVUsQ0FBQyxVQUFVO2dCQUM1QixJQUFJLFVBQVU7b0JBQ1osS0FBSyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO3dCQUNsRSxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJOzRCQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUM7WUFFRDs7Ozs7ZUFLRztZQUNILFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFbkQ7Ozs7O2VBS0c7WUFDSCxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFFaEM7Ozs7O2VBS0c7WUFDSCxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXBEOzs7Ozs7O2VBT0c7WUFDSCxVQUFVLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLFVBQVU7Z0JBQzVDLE9BQU8sSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEMsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7O2VBUUc7WUFDSCxVQUFVLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNqRCxJQUFJLENBQUMsTUFBTTtvQkFBRSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN2QyxJQUNFLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSTtvQkFDdkIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztvQkFFOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuRSxJQUNFLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSTtvQkFDckIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztvQkFFNUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsRSxJQUNFLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSTtvQkFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztvQkFFL0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNwRSxPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7ZUFRRztZQUNILFVBQVUsQ0FBQyxlQUFlLEdBQUcsU0FBUyxlQUFlLENBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ25FLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDL0MsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7Ozs7ZUFVRztZQUNILFVBQVUsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU07Z0JBQ2hELElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxPQUFPLENBQUM7b0JBQUUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xFLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxFQUMvRCxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDL0MsT0FBTyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO29CQUN4QixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzFCLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO3dCQUNsQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ2pDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7NEJBQ2hDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ2xDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRDs0QkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDekIsTUFBTTtvQkFDVixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7OztlQVNHO1lBQ0gsVUFBVSxDQUFDLGVBQWUsR0FBRyxTQUFTLGVBQWUsQ0FBQyxNQUFNO2dCQUMxRCxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksT0FBTyxDQUFDO29CQUFFLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUM7WUFFRjs7Ozs7OztlQU9HO1lBQ0gsVUFBVSxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxPQUFPO2dCQUN6QyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLEtBQUssSUFBSTtvQkFDakQsT0FBTyxpQkFBaUIsQ0FBQztnQkFDM0IsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztvQkFDOUQsSUFDRSxDQUFDLENBQ0MsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDO3dCQUMvRCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FDaEM7d0JBRUQsT0FBTywwQkFBMEIsQ0FBQztnQkFDdEMsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztvQkFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzt3QkFBRSxPQUFPLHdCQUF3QixDQUFDO2dCQUN0RSxJQUFJLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDO29CQUNoRSxJQUNFLENBQUMsQ0FDQyxDQUFDLE9BQU8sQ0FBQyxRQUFRO3dCQUNmLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDO3dCQUM5QyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FDakM7d0JBRUQsT0FBTywyQkFBMkIsQ0FBQztnQkFDdkMsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDLENBQUM7WUFFRjs7Ozs7OztlQU9HO1lBQ0gsVUFBVSxDQUFDLFVBQVUsR0FBRyxTQUFTLFVBQVUsQ0FBQyxNQUFNO2dCQUNoRCxJQUFJLE1BQU0sWUFBWSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVO29CQUFFLE9BQU8sTUFBTSxDQUFDO2dCQUNsRSxJQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNqRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSTtvQkFDeEIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLEtBQUssUUFBUTt3QkFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2pCLE1BQU0sQ0FBQyxPQUFPLEVBQ2QsQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQ2hDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDcEMsQ0FBQyxFQUNGLENBQUMsQ0FDRixDQUFDO3lCQUNDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQzt3QkFBRSxPQUFPLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ3hFLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJO29CQUFFLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUk7b0JBQ3pCLElBQUksT0FBTyxNQUFNLENBQUMsUUFBUSxLQUFLLFFBQVE7d0JBQ3JDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUNqQixNQUFNLENBQUMsUUFBUSxFQUNmLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUNqQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQ3JDLENBQUMsRUFDRixDQUFDLENBQ0YsQ0FBQzt5QkFDQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUM7d0JBQ2xDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDdkMsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7O2VBUUc7WUFDSCxVQUFVLENBQUMsUUFBUSxHQUFHLFNBQVMsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPO2dCQUN0RCxJQUFJLENBQUMsT0FBTztvQkFBRSxPQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUMzQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ2hCLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNyQixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTt3QkFBRSxNQUFNLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzt5QkFDN0MsQ0FBQzt3QkFDSixNQUFNLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzt3QkFDcEIsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7NEJBQ3pCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JELENBQUM7b0JBQ0QsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBQ2xCLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNO3dCQUFFLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO3lCQUM5QyxDQUFDO3dCQUNKLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO3dCQUNyQixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSzs0QkFDekIsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdkQsQ0FBQztnQkFDSCxDQUFDO2dCQUNELElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7b0JBQzlELE1BQU0sQ0FBQyxPQUFPO3dCQUNaLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTs0QkFDdEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOzRCQUNqRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLO2dDQUN2QixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0NBQzdDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUMxQixJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO29CQUMxRCxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQy9CLElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7b0JBQ2hFLE1BQU0sQ0FBQyxRQUFRO3dCQUNiLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTs0QkFDdEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUNqQixPQUFPLENBQUMsUUFBUSxFQUNoQixDQUFDLEVBQ0QsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQ3hCOzRCQUNILENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7Z0NBQ3ZCLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQ0FDOUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBQzNCLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUMsQ0FBQztZQUVGOzs7Ozs7ZUFNRztZQUNILFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTTtnQkFDM0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN2RSxDQUFDLENBQUM7WUFFRjs7Ozs7OztlQU9HO1lBQ0gsVUFBVSxDQUFDLFVBQVUsR0FBRyxTQUFTLFVBQVUsQ0FBQyxhQUFhO2dCQUN2RCxJQUFJLGFBQWEsS0FBSyxTQUFTLEVBQUUsQ0FBQztvQkFDaEMsYUFBYSxHQUFHLHFCQUFxQixDQUFDO2dCQUN4QyxDQUFDO2dCQUNELE9BQU8sYUFBYSxHQUFHLHlCQUF5QixDQUFDO1lBQ25ELENBQUMsQ0FBQztZQUVGLE9BQU8sVUFBVSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUM7WUFDakI7Ozs7Ozs7OztlQVNHO1lBRUg7Ozs7Ozs7ZUFPRztZQUNILFNBQVMsVUFBVSxDQUFDLFVBQVU7Z0JBQzVCLElBQUksVUFBVTtvQkFDWixLQUFLLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7d0JBQ2xFLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUk7NEJBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQztZQUVEOzs7OztlQUtHO1lBQ0gsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVuRDs7Ozs7ZUFLRztZQUNILFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFbEQ7Ozs7O2VBS0c7WUFDSCxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFFL0I7Ozs7O2VBS0c7WUFDSCxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFFbEM7Ozs7O2VBS0c7WUFDSCxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFFckMseURBQXlEO1lBQ3pELElBQUksWUFBWSxDQUFDO1lBRWpCOzs7OztlQUtHO1lBQ0gsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRTtnQkFDbkQsR0FBRyxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDOUQsR0FBRyxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO2FBQ3JDLENBQUMsQ0FBQztZQUVIOzs7Ozs7O2VBT0c7WUFDSCxVQUFVLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLFVBQVU7Z0JBQzVDLE9BQU8sSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEMsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7O2VBUUc7WUFDSCxVQUFVLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNqRCxJQUFJLENBQUMsTUFBTTtvQkFBRSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN2QyxJQUNFLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSTtvQkFDdkIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztvQkFFOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuRSxJQUNFLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSTtvQkFDdEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztvQkFFN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsRSxJQUNFLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSTtvQkFDckIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztvQkFFNUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqRSxJQUNFLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSTtvQkFDckIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztvQkFFNUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsRSxJQUNFLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSTtvQkFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztvQkFFL0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNwRSxPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7ZUFRRztZQUNILFVBQVUsQ0FBQyxlQUFlLEdBQUcsU0FBUyxlQUFlLENBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ25FLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDL0MsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7Ozs7ZUFVRztZQUNILFVBQVUsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU07Z0JBQ2hELElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxPQUFPLENBQUM7b0JBQUUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xFLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxFQUMvRCxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDL0MsT0FBTyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO29CQUN4QixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzFCLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO3dCQUNsQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ2pDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ2hDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQy9CLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7NEJBQ2hDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ2xDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRDs0QkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDekIsTUFBTTtvQkFDVixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7OztlQVNHO1lBQ0gsVUFBVSxDQUFDLGVBQWUsR0FBRyxTQUFTLGVBQWUsQ0FBQyxNQUFNO2dCQUMxRCxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksT0FBTyxDQUFDO29CQUFFLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUM7WUFFRjs7Ozs7OztlQU9HO1lBQ0gsVUFBVSxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxPQUFPO2dCQUN6QyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLEtBQUssSUFBSTtvQkFDakQsT0FBTyxpQkFBaUIsQ0FBQztnQkFDM0IsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO2dCQUNwQixJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO29CQUM5RCxJQUNFLENBQUMsQ0FDQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUM7d0JBQy9ELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUNoQzt3QkFFRCxPQUFPLDBCQUEwQixDQUFDO2dCQUN0QyxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO29CQUM1RCxJQUNFLENBQUMsQ0FDQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUM7d0JBQzdELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUMvQjt3QkFFRCxPQUFPLHlCQUF5QixDQUFDO2dCQUNyQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO29CQUMxRCxRQUFRLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDdEI7NEJBQ0UsT0FBTyw0QkFBNEIsQ0FBQzt3QkFDdEMsS0FBSyxDQUFDLENBQUM7d0JBQ1AsS0FBSyxDQUFDLENBQUM7d0JBQ1AsS0FBSyxDQUFDOzRCQUNKLE1BQU07b0JBQ1YsQ0FBQztnQkFDSCxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztvQkFDN0QsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7d0JBQUUsT0FBTyx3QkFBd0IsQ0FBQztnQkFDdEUsQ0FBQztnQkFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztvQkFDbkUsSUFBSSxVQUFVLENBQUMsS0FBSyxLQUFLLENBQUM7d0JBQUUsT0FBTyx3QkFBd0IsQ0FBQztvQkFDNUQsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ3JCLElBQ0UsQ0FBQyxDQUNDLENBQUMsT0FBTyxDQUFDLFFBQVE7d0JBQ2YsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUM7d0JBQzlDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUNqQzt3QkFFRCxPQUFPLDJCQUEyQixDQUFDO2dCQUN2QyxDQUFDO2dCQUNELE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7ZUFPRztZQUNILFVBQVUsQ0FBQyxVQUFVLEdBQUcsU0FBUyxVQUFVLENBQUMsTUFBTTtnQkFDaEQsSUFBSSxNQUFNLFlBQVksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVTtvQkFBRSxPQUFPLE1BQU0sQ0FBQztnQkFDbEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDakQsSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUk7b0JBQ3hCLElBQUksT0FBTyxNQUFNLENBQUMsT0FBTyxLQUFLLFFBQVE7d0JBQ3BDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUNqQixNQUFNLENBQUMsT0FBTyxFQUNkLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUNoQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ3BDLENBQUMsRUFDRixDQUFDLENBQ0YsQ0FBQzt5QkFDQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUM7d0JBQUUsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUN4RSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSTtvQkFDdkIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxNQUFNLEtBQUssUUFBUTt3QkFDbkMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2pCLE1BQU0sQ0FBQyxNQUFNLEVBQ2IsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQy9CLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FDbkMsQ0FBQyxFQUNGLENBQUMsQ0FDRixDQUFDO3lCQUNDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQzt3QkFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ3JFLFFBQVEsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNyQjt3QkFDRSxJQUFJLE9BQU8sTUFBTSxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUUsQ0FBQzs0QkFDckMsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDOzRCQUM3QixNQUFNO3dCQUNSLENBQUM7d0JBQ0QsTUFBTTtvQkFDUixLQUFLLHdCQUF3QixDQUFDO29CQUM5QixLQUFLLENBQUM7d0JBQ0osT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7d0JBQ2xCLE1BQU07b0JBQ1IsS0FBSyxrQkFBa0IsQ0FBQztvQkFDeEIsS0FBSyxDQUFDO3dCQUNKLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO3dCQUNsQixNQUFNO29CQUNSLEtBQUsscUJBQXFCLENBQUM7b0JBQzNCLEtBQUssQ0FBQzt3QkFDSixPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzt3QkFDbEIsTUFBTTtnQkFDVixDQUFDO2dCQUNELElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJO29CQUFFLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUk7b0JBQ3pCLElBQUksT0FBTyxNQUFNLENBQUMsUUFBUSxLQUFLLFFBQVE7d0JBQ3JDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUNqQixNQUFNLENBQUMsUUFBUSxFQUNmLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUNqQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQ3JDLENBQUMsRUFDRixDQUFDLENBQ0YsQ0FBQzt5QkFDQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUM7d0JBQ2xDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDdkMsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7O2VBUUc7WUFDSCxVQUFVLENBQUMsUUFBUSxHQUFHLFNBQVMsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPO2dCQUN0RCxJQUFJLENBQUMsT0FBTztvQkFBRSxPQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUMzQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ2hCLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNyQixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTt3QkFBRSxNQUFNLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzt5QkFDN0MsQ0FBQzt3QkFDSixNQUFNLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzt3QkFDcEIsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7NEJBQ3pCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JELENBQUM7b0JBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07d0JBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7eUJBQzVDLENBQUM7d0JBQ0osTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7d0JBQ25CLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLOzRCQUN6QixNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNuRCxDQUFDO29CQUNELE1BQU0sQ0FBQyxLQUFLO3dCQUNWLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO2dCQUNELElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7b0JBQzlELE1BQU0sQ0FBQyxPQUFPO3dCQUNaLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTs0QkFDdEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOzRCQUNqRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLO2dDQUN2QixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0NBQzdDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUMxQixJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO29CQUM1RCxNQUFNLENBQUMsTUFBTTt3QkFDWCxPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07NEJBQ3RCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzs0QkFDL0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSztnQ0FDdkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2dDQUM1QyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDekIsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztvQkFDMUQsTUFBTSxDQUFDLEtBQUs7d0JBQ1YsT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNOzRCQUN0QixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2dDQUNyRCxTQUFTO2dDQUNULENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSztnQ0FDZixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDOzRCQUN6RCxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDdEIsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7b0JBQzdELE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDN0IsSUFBSSxPQUFPLENBQUMsTUFBTTt3QkFBRSxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztnQkFDN0MsQ0FBQztnQkFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztvQkFDbkUsTUFBTSxDQUFDLFFBQVE7d0JBQ2IsT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNOzRCQUN0QixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2pCLE9BQU8sQ0FBQyxRQUFRLEVBQ2hCLENBQUMsRUFDRCxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDeEI7NEJBQ0gsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSztnQ0FDdkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO2dDQUM5QyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxPQUFPLENBQUMsTUFBTTt3QkFBRSxNQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztnQkFDaEQsQ0FBQztnQkFDRCxPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDLENBQUM7WUFFRjs7Ozs7O2VBTUc7WUFDSCxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU07Z0JBQzNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkUsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7ZUFPRztZQUNILFVBQVUsQ0FBQyxVQUFVLEdBQUcsU0FBUyxVQUFVLENBQUMsYUFBYTtnQkFDdkQsSUFBSSxhQUFhLEtBQUssU0FBUyxFQUFFLENBQUM7b0JBQ2hDLGFBQWEsR0FBRyxxQkFBcUIsQ0FBQztnQkFDeEMsQ0FBQztnQkFDRCxPQUFPLGFBQWEsR0FBRyx5QkFBeUIsQ0FBQztZQUNuRCxDQUFDLENBQUM7WUFFRjs7Ozs7OztlQU9HO1lBQ0gsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDO2dCQUN0QixNQUFNLFVBQVUsR0FBRyxFQUFFLEVBQ25CLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNyQyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsd0JBQXdCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pELE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwRCxPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDLENBQUMsRUFBRSxDQUFDO1lBRUwsT0FBTyxVQUFVLENBQUM7UUFDcEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQztZQUNoQjs7Ozs7O2VBTUc7WUFFSDs7Ozs7OztlQU9HO1lBQ0gsU0FBUyxTQUFTLENBQUMsVUFBVTtnQkFDM0IsSUFBSSxVQUFVO29CQUNaLEtBQUssSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzt3QkFDbEUsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSTs0QkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDO1lBRUQ7Ozs7O2VBS0c7WUFDSCxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRWxEOzs7OztlQUtHO1lBQ0gsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBRTlCOzs7Ozs7O2VBT0c7WUFDSCxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLFVBQVU7Z0JBQzNDLE9BQU8sSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7O2VBUUc7WUFDSCxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNoRCxJQUFJLENBQUMsTUFBTTtvQkFBRSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN2QyxJQUNFLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSTtvQkFDdkIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztvQkFFOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuRSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7b0JBQ3JFLE1BQU0sQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakUsT0FBTyxNQUFNLENBQUM7WUFDaEIsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7O2VBUUc7WUFDSCxTQUFTLENBQUMsZUFBZSxHQUFHLFNBQVMsZUFBZSxDQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNsRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQy9DLENBQUMsQ0FBQztZQUVGOzs7Ozs7Ozs7O2VBVUc7WUFDSCxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNO2dCQUMvQyxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksT0FBTyxDQUFDO29CQUFFLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLEdBQUcsR0FBRyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sRUFDL0QsT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzlDLE9BQU8sTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUMxQixRQUFRLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQzt3QkFDbEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNQLE9BQU8sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDOzRCQUNqQyxNQUFNO3dCQUNSLENBQUM7d0JBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNQLE9BQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDOzRCQUMvQixNQUFNO3dCQUNSLENBQUM7d0JBQ0Q7NEJBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLE1BQU07b0JBQ1YsQ0FBQztnQkFDSCxDQUFDO2dCQUNELE9BQU8sT0FBTyxDQUFDO1lBQ2pCLENBQUMsQ0FBQztZQUVGOzs7Ozs7Ozs7ZUFTRztZQUNILFNBQVMsQ0FBQyxlQUFlLEdBQUcsU0FBUyxlQUFlLENBQUMsTUFBTTtnQkFDekQsSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLE9BQU8sQ0FBQztvQkFBRSxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQy9ELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7ZUFPRztZQUNILFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsT0FBTztnQkFDeEMsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxLQUFLLElBQUk7b0JBQ2pELE9BQU8saUJBQWlCLENBQUM7Z0JBQzNCLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7b0JBQzlELElBQ0UsQ0FBQyxDQUNDLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQzt3QkFDL0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQ2hDO3dCQUVELE9BQU8sMEJBQTBCLENBQUM7Z0JBQ3RDLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7b0JBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7d0JBQUUsT0FBTyx1QkFBdUIsQ0FBQztnQkFDcEUsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDLENBQUM7WUFFRjs7Ozs7OztlQU9HO1lBQ0gsU0FBUyxDQUFDLFVBQVUsR0FBRyxTQUFTLFVBQVUsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLE1BQU0sWUFBWSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTO29CQUFFLE9BQU8sTUFBTSxDQUFDO2dCQUNqRSxJQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNoRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSTtvQkFDeEIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLEtBQUssUUFBUTt3QkFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2pCLE1BQU0sQ0FBQyxPQUFPLEVBQ2QsQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQ2hDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDcEMsQ0FBQyxFQUNGLENBQUMsQ0FDRixDQUFDO3lCQUNDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQzt3QkFBRSxPQUFPLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ3hFLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJO29CQUFFLE9BQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUQsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7O2VBUUc7WUFDSCxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPO2dCQUNyRCxJQUFJLENBQUMsT0FBTztvQkFBRSxPQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUMzQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ2hCLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNyQixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTt3QkFBRSxNQUFNLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzt5QkFDN0MsQ0FBQzt3QkFDSixNQUFNLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzt3QkFDcEIsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7NEJBQ3pCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JELENBQUM7b0JBQ0QsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ25CLENBQUM7Z0JBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztvQkFDOUQsTUFBTSxDQUFDLE9BQU87d0JBQ1osT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNOzRCQUN0QixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7NEJBQ2pFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7Z0NBQ3ZCLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQ0FDN0MsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQzFCLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7b0JBQ3hELE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDN0IsT0FBTyxNQUFNLENBQUM7WUFDaEIsQ0FBQyxDQUFDO1lBRUY7Ozs7OztlQU1HO1lBQ0gsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNO2dCQUMxQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3ZFLENBQUMsQ0FBQztZQUVGOzs7Ozs7O2VBT0c7WUFDSCxTQUFTLENBQUMsVUFBVSxHQUFHLFNBQVMsVUFBVSxDQUFDLGFBQWE7Z0JBQ3RELElBQUksYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO29CQUNoQyxhQUFhLEdBQUcscUJBQXFCLENBQUM7Z0JBQ3hDLENBQUM7Z0JBQ0QsT0FBTyxhQUFhLEdBQUcsd0JBQXdCLENBQUM7WUFDbEQsQ0FBQyxDQUFDO1lBRUYsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztZQUNmOzs7Ozs7O2VBT0c7WUFFSDs7Ozs7OztlQU9HO1lBQ0gsU0FBUyxRQUFRLENBQUMsVUFBVTtnQkFDMUIsSUFBSSxVQUFVO29CQUNaLEtBQUssSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzt3QkFDbEUsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSTs0QkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDO1lBRUQ7Ozs7O2VBS0c7WUFDSCxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRWpEOzs7OztlQUtHO1lBQ0gsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUUvQzs7Ozs7ZUFLRztZQUNILFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFaEQ7Ozs7Ozs7ZUFPRztZQUNILFFBQVEsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsVUFBVTtnQkFDMUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7ZUFRRztZQUNILFFBQVEsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQy9DLElBQUksQ0FBQyxNQUFNO29CQUFFLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3ZDLElBQ0UsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJO29CQUN2QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO29CQUU5QyxNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25FLElBQ0UsT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJO29CQUNyQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO29CQUU1QyxNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pFLElBQ0UsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJO29CQUN0QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO29CQUU3QyxNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xFLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUMsQ0FBQztZQUVGOzs7Ozs7OztlQVFHO1lBQ0gsUUFBUSxDQUFDLGVBQWUsR0FBRyxTQUFTLGVBQWUsQ0FBQyxPQUFPLEVBQUUsTUFBTTtnQkFDakUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMvQyxDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7OztlQVVHO1lBQ0gsUUFBUSxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTTtnQkFDOUMsSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLE9BQU8sQ0FBQztvQkFBRSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEUsSUFBSSxHQUFHLEdBQUcsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLEVBQy9ELE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM3QyxPQUFPLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7b0JBQ3hCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDMUIsUUFBUSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7d0JBQ2xCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDUCxPQUFPLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDakMsTUFBTTt3QkFDUixDQUFDO3dCQUNELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDUCxPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDL0IsTUFBTTt3QkFDUixDQUFDO3dCQUNELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDUCxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDaEMsTUFBTTt3QkFDUixDQUFDO3dCQUNEOzRCQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUN6QixNQUFNO29CQUNWLENBQUM7Z0JBQ0gsQ0FBQztnQkFDRCxPQUFPLE9BQU8sQ0FBQztZQUNqQixDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7O2VBU0c7WUFDSCxRQUFRLENBQUMsZUFBZSxHQUFHLFNBQVMsZUFBZSxDQUFDLE1BQU07Z0JBQ3hELElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxPQUFPLENBQUM7b0JBQUUsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMvRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQztZQUVGOzs7Ozs7O2VBT0c7WUFDSCxRQUFRLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLE9BQU87Z0JBQ3ZDLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxJQUFJLE9BQU8sS0FBSyxJQUFJO29CQUNqRCxPQUFPLGlCQUFpQixDQUFDO2dCQUMzQixJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO29CQUM5RCxJQUNFLENBQUMsQ0FDQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUM7d0JBQy9ELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUNoQzt3QkFFRCxPQUFPLDBCQUEwQixDQUFDO2dCQUN0QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO29CQUMxRCxJQUNFLENBQUMsQ0FDQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUM7d0JBQzNELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUM5Qjt3QkFFRCxPQUFPLHdCQUF3QixDQUFDO2dCQUNwQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO29CQUM1RCxJQUNFLENBQUMsQ0FDQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUM7d0JBQzdELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUMvQjt3QkFFRCxPQUFPLHlCQUF5QixDQUFDO2dCQUNyQyxPQUFPLElBQUksQ0FBQztZQUNkLENBQUMsQ0FBQztZQUVGOzs7Ozs7O2VBT0c7WUFDSCxRQUFRLENBQUMsVUFBVSxHQUFHLFNBQVMsVUFBVSxDQUFDLE1BQU07Z0JBQzlDLElBQUksTUFBTSxZQUFZLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVE7b0JBQUUsT0FBTyxNQUFNLENBQUM7Z0JBQ2hFLElBQUksT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQy9DLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJO29CQUN4QixJQUFJLE9BQU8sTUFBTSxDQUFDLE9BQU8sS0FBSyxRQUFRO3dCQUNwQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDakIsTUFBTSxDQUFDLE9BQU8sRUFDZCxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FDaEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNwQyxDQUFDLEVBQ0YsQ0FBQyxDQUNGLENBQUM7eUJBQ0MsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDO3dCQUFFLE9BQU8sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDeEUsSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUk7b0JBQ3RCLElBQUksT0FBTyxNQUFNLENBQUMsS0FBSyxLQUFLLFFBQVE7d0JBQ2xDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUNqQixNQUFNLENBQUMsS0FBSyxFQUNaLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUM5QixLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQ2xDLENBQUMsRUFDRixDQUFDLENBQ0YsQ0FBQzt5QkFDQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUM7d0JBQUUsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNsRSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSTtvQkFDdkIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxNQUFNLEtBQUssUUFBUTt3QkFDbkMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2pCLE1BQU0sQ0FBQyxNQUFNLEVBQ2IsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQy9CLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FDbkMsQ0FBQyxFQUNGLENBQUMsQ0FDRixDQUFDO3lCQUNDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQzt3QkFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ3JFLE9BQU8sT0FBTyxDQUFDO1lBQ2pCLENBQUMsQ0FBQztZQUVGOzs7Ozs7OztlQVFHO1lBQ0gsUUFBUSxDQUFDLFFBQVEsR0FBRyxTQUFTLFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTztnQkFDcEQsSUFBSSxDQUFDLE9BQU87b0JBQUUsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNoQixJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDckIsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07d0JBQUUsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7eUJBQzdDLENBQUM7d0JBQ0osTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7d0JBQ3BCLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLOzRCQUN6QixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyRCxDQUFDO29CQUNELElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNO3dCQUFFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO3lCQUMzQyxDQUFDO3dCQUNKLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO3dCQUNsQixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSzs0QkFDekIsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDakQsQ0FBQztvQkFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTt3QkFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzt5QkFDNUMsQ0FBQzt3QkFDSixNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzt3QkFDbkIsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7NEJBQ3pCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ25ELENBQUM7Z0JBQ0gsQ0FBQztnQkFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO29CQUM5RCxNQUFNLENBQUMsT0FBTzt3QkFDWixPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07NEJBQ3RCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzs0QkFDakUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSztnQ0FDdkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2dDQUM3QyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDMUIsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztvQkFDMUQsTUFBTSxDQUFDLEtBQUs7d0JBQ1YsT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNOzRCQUN0QixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7NEJBQzdELENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7Z0NBQ3ZCLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztnQ0FDM0MsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7b0JBQzVELE1BQU0sQ0FBQyxNQUFNO3dCQUNYLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTs0QkFDdEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDOzRCQUMvRCxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLO2dDQUN2QixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0NBQzVDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUN6QixPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDLENBQUM7WUFFRjs7Ozs7O2VBTUc7WUFDSCxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU07Z0JBQ3pDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkUsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7ZUFPRztZQUNILFFBQVEsQ0FBQyxVQUFVLEdBQUcsU0FBUyxVQUFVLENBQUMsYUFBYTtnQkFDckQsSUFBSSxhQUFhLEtBQUssU0FBUyxFQUFFLENBQUM7b0JBQ2hDLGFBQWEsR0FBRyxxQkFBcUIsQ0FBQztnQkFDeEMsQ0FBQztnQkFDRCxPQUFPLGFBQWEsR0FBRyx1QkFBdUIsQ0FBQztZQUNqRCxDQUFDLENBQUM7WUFFRixPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDO1lBQ3BCOzs7Ozs7O2VBT0c7WUFFSDs7Ozs7OztlQU9HO1lBQ0gsU0FBUyxhQUFhLENBQUMsVUFBVTtnQkFDL0IsSUFBSSxVQUFVO29CQUNaLEtBQUssSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzt3QkFDbEUsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSTs0QkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDO1lBRUQ7Ozs7O2VBS0c7WUFDSCxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXREOzs7OztlQUtHO1lBQ0gsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVwRDs7Ozs7ZUFLRztZQUNILGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFckQ7Ozs7Ozs7ZUFPRztZQUNILGFBQWEsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsVUFBVTtnQkFDL0MsT0FBTyxJQUFJLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7ZUFRRztZQUNILGFBQWEsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ3BELElBQUksQ0FBQyxNQUFNO29CQUFFLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3ZDLElBQ0UsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJO29CQUN2QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO29CQUU5QyxNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25FLElBQ0UsT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJO29CQUNyQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO29CQUU1QyxNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pFLElBQ0UsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJO29CQUN0QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO29CQUU3QyxNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xFLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUMsQ0FBQztZQUVGOzs7Ozs7OztlQVFHO1lBQ0gsYUFBYSxDQUFDLGVBQWUsR0FBRyxTQUFTLGVBQWUsQ0FDdEQsT0FBTyxFQUNQLE1BQU07Z0JBRU4sT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMvQyxDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7OztlQVVHO1lBQ0gsYUFBYSxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTTtnQkFDbkQsSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLE9BQU8sQ0FBQztvQkFBRSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEUsSUFBSSxHQUFHLEdBQUcsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLEVBQy9ELE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNsRCxPQUFPLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7b0JBQ3hCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDMUIsUUFBUSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7d0JBQ2xCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDUCxPQUFPLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDakMsTUFBTTt3QkFDUixDQUFDO3dCQUNELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDUCxPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDL0IsTUFBTTt3QkFDUixDQUFDO3dCQUNELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDUCxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDaEMsTUFBTTt3QkFDUixDQUFDO3dCQUNEOzRCQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUN6QixNQUFNO29CQUNWLENBQUM7Z0JBQ0gsQ0FBQztnQkFDRCxPQUFPLE9BQU8sQ0FBQztZQUNqQixDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7O2VBU0c7WUFDSCxhQUFhLENBQUMsZUFBZSxHQUFHLFNBQVMsZUFBZSxDQUFDLE1BQU07Z0JBQzdELElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxPQUFPLENBQUM7b0JBQUUsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMvRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQztZQUVGOzs7Ozs7O2VBT0c7WUFDSCxhQUFhLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLE9BQU87Z0JBQzVDLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxJQUFJLE9BQU8sS0FBSyxJQUFJO29CQUNqRCxPQUFPLGlCQUFpQixDQUFDO2dCQUMzQixJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO29CQUM5RCxJQUNFLENBQUMsQ0FDQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUM7d0JBQy9ELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUNoQzt3QkFFRCxPQUFPLDBCQUEwQixDQUFDO2dCQUN0QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO29CQUMxRCxJQUNFLENBQUMsQ0FDQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUM7d0JBQzNELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUM5Qjt3QkFFRCxPQUFPLHdCQUF3QixDQUFDO2dCQUNwQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO29CQUM1RCxJQUNFLENBQUMsQ0FDQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUM7d0JBQzdELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUMvQjt3QkFFRCxPQUFPLHlCQUF5QixDQUFDO2dCQUNyQyxPQUFPLElBQUksQ0FBQztZQUNkLENBQUMsQ0FBQztZQUVGOzs7Ozs7O2VBT0c7WUFDSCxhQUFhLENBQUMsVUFBVSxHQUFHLFNBQVMsVUFBVSxDQUFDLE1BQU07Z0JBQ25ELElBQUksTUFBTSxZQUFZLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWE7b0JBQUUsT0FBTyxNQUFNLENBQUM7Z0JBQ3JFLElBQUksT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3BELElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJO29CQUN4QixJQUFJLE9BQU8sTUFBTSxDQUFDLE9BQU8sS0FBSyxRQUFRO3dCQUNwQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDakIsTUFBTSxDQUFDLE9BQU8sRUFDZCxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FDaEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNwQyxDQUFDLEVBQ0YsQ0FBQyxDQUNGLENBQUM7eUJBQ0MsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDO3dCQUFFLE9BQU8sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDeEUsSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUk7b0JBQ3RCLElBQUksT0FBTyxNQUFNLENBQUMsS0FBSyxLQUFLLFFBQVE7d0JBQ2xDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUNqQixNQUFNLENBQUMsS0FBSyxFQUNaLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUM5QixLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQ2xDLENBQUMsRUFDRixDQUFDLENBQ0YsQ0FBQzt5QkFDQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUM7d0JBQUUsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNsRSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSTtvQkFDdkIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxNQUFNLEtBQUssUUFBUTt3QkFDbkMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2pCLE1BQU0sQ0FBQyxNQUFNLEVBQ2IsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQy9CLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FDbkMsQ0FBQyxFQUNGLENBQUMsQ0FDRixDQUFDO3lCQUNDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQzt3QkFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ3JFLE9BQU8sT0FBTyxDQUFDO1lBQ2pCLENBQUMsQ0FBQztZQUVGOzs7Ozs7OztlQVFHO1lBQ0gsYUFBYSxDQUFDLFFBQVEsR0FBRyxTQUFTLFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTztnQkFDekQsSUFBSSxDQUFDLE9BQU87b0JBQUUsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNoQixJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDckIsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07d0JBQUUsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7eUJBQzdDLENBQUM7d0JBQ0osTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7d0JBQ3BCLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLOzRCQUN6QixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyRCxDQUFDO29CQUNELElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNO3dCQUFFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO3lCQUMzQyxDQUFDO3dCQUNKLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO3dCQUNsQixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSzs0QkFDekIsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDakQsQ0FBQztvQkFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTt3QkFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzt5QkFDNUMsQ0FBQzt3QkFDSixNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzt3QkFDbkIsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7NEJBQ3pCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ25ELENBQUM7Z0JBQ0gsQ0FBQztnQkFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO29CQUM5RCxNQUFNLENBQUMsT0FBTzt3QkFDWixPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07NEJBQ3RCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzs0QkFDakUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSztnQ0FDdkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2dDQUM3QyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDMUIsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztvQkFDMUQsTUFBTSxDQUFDLEtBQUs7d0JBQ1YsT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNOzRCQUN0QixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7NEJBQzdELENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7Z0NBQ3ZCLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztnQ0FDM0MsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7b0JBQzVELE1BQU0sQ0FBQyxNQUFNO3dCQUNYLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTs0QkFDdEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDOzRCQUMvRCxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLO2dDQUN2QixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0NBQzVDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUN6QixPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDLENBQUM7WUFFRjs7Ozs7O2VBTUc7WUFDSCxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU07Z0JBQzlDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkUsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7ZUFPRztZQUNILGFBQWEsQ0FBQyxVQUFVLEdBQUcsU0FBUyxVQUFVLENBQUMsYUFBYTtnQkFDMUQsSUFBSSxhQUFhLEtBQUssU0FBUyxFQUFFLENBQUM7b0JBQ2hDLGFBQWEsR0FBRyxxQkFBcUIsQ0FBQztnQkFDeEMsQ0FBQztnQkFDRCxPQUFPLGFBQWEsR0FBRyw0QkFBNEIsQ0FBQztZQUN0RCxDQUFDLENBQUM7WUFFRixPQUFPLGFBQWEsQ0FBQztRQUN2QixDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDO1lBQ2hCOzs7Ozs7O2VBT0c7WUFFSDs7Ozs7OztlQU9HO1lBQ0gsU0FBUyxTQUFTLENBQUMsVUFBVTtnQkFDM0IsSUFBSSxVQUFVO29CQUNaLEtBQUssSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzt3QkFDbEUsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSTs0QkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDO1lBRUQ7Ozs7O2VBS0c7WUFDSCxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRWxEOzs7OztlQUtHO1lBQ0gsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVoRDs7Ozs7ZUFLRztZQUNILFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUU5Qjs7Ozs7OztlQU9HO1lBQ0gsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxVQUFVO2dCQUMzQyxPQUFPLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQztZQUVGOzs7Ozs7OztlQVFHO1lBQ0gsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTTtnQkFDaEQsSUFBSSxDQUFDLE1BQU07b0JBQUUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDdkMsSUFDRSxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUk7b0JBQ3ZCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7b0JBRTlDLE1BQU0sQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbkUsSUFDRSxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUk7b0JBQ3JCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7b0JBRTVDLE1BQU0sQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakUsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO29CQUNyRSxNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pFLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUMsQ0FBQztZQUVGOzs7Ozs7OztlQVFHO1lBQ0gsU0FBUyxDQUFDLGVBQWUsR0FBRyxTQUFTLGVBQWUsQ0FBQyxPQUFPLEVBQUUsTUFBTTtnQkFDbEUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMvQyxDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7OztlQVVHO1lBQ0gsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTTtnQkFDL0MsSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLE9BQU8sQ0FBQztvQkFBRSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEUsSUFBSSxHQUFHLEdBQUcsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLEVBQy9ELE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUM5QyxPQUFPLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7b0JBQ3hCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDMUIsUUFBUSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7d0JBQ2xCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDUCxPQUFPLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDakMsTUFBTTt3QkFDUixDQUFDO3dCQUNELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDUCxPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDL0IsTUFBTTt3QkFDUixDQUFDO3dCQUNELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDUCxPQUFPLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQzs0QkFDL0IsTUFBTTt3QkFDUixDQUFDO3dCQUNEOzRCQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUN6QixNQUFNO29CQUNWLENBQUM7Z0JBQ0gsQ0FBQztnQkFDRCxPQUFPLE9BQU8sQ0FBQztZQUNqQixDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7O2VBU0c7WUFDSCxTQUFTLENBQUMsZUFBZSxHQUFHLFNBQVMsZUFBZSxDQUFDLE1BQU07Z0JBQ3pELElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxPQUFPLENBQUM7b0JBQUUsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMvRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQztZQUVGOzs7Ozs7O2VBT0c7WUFDSCxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLE9BQU87Z0JBQ3hDLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxJQUFJLE9BQU8sS0FBSyxJQUFJO29CQUNqRCxPQUFPLGlCQUFpQixDQUFDO2dCQUMzQixJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO29CQUM5RCxJQUNFLENBQUMsQ0FDQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUM7d0JBQy9ELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUNoQzt3QkFFRCxPQUFPLDBCQUEwQixDQUFDO2dCQUN0QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO29CQUMxRCxJQUNFLENBQUMsQ0FDQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUM7d0JBQzNELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUM5Qjt3QkFFRCxPQUFPLHdCQUF3QixDQUFDO2dCQUNwQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO29CQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO3dCQUFFLE9BQU8sdUJBQXVCLENBQUM7Z0JBQ3BFLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7ZUFPRztZQUNILFNBQVMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxVQUFVLENBQUMsTUFBTTtnQkFDL0MsSUFBSSxNQUFNLFlBQVksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUztvQkFBRSxPQUFPLE1BQU0sQ0FBQztnQkFDakUsSUFBSSxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDaEQsSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUk7b0JBQ3hCLElBQUksT0FBTyxNQUFNLENBQUMsT0FBTyxLQUFLLFFBQVE7d0JBQ3BDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUNqQixNQUFNLENBQUMsT0FBTyxFQUNkLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUNoQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ3BDLENBQUMsRUFDRixDQUFDLENBQ0YsQ0FBQzt5QkFDQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUM7d0JBQUUsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUN4RSxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSTtvQkFDdEIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxLQUFLLEtBQUssUUFBUTt3QkFDbEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2pCLE1BQU0sQ0FBQyxLQUFLLEVBQ1osQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQzlCLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FDbEMsQ0FBQyxFQUNGLENBQUMsQ0FDRixDQUFDO3lCQUNDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQzt3QkFBRSxPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2xFLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJO29CQUFFLE9BQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUQsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7O2VBUUc7WUFDSCxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPO2dCQUNyRCxJQUFJLENBQUMsT0FBTztvQkFBRSxPQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUMzQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ2hCLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNyQixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTt3QkFBRSxNQUFNLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzt5QkFDN0MsQ0FBQzt3QkFDSixNQUFNLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzt3QkFDcEIsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7NEJBQ3pCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JELENBQUM7b0JBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07d0JBQUUsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7eUJBQzNDLENBQUM7d0JBQ0osTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7d0JBQ2xCLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLOzRCQUN6QixNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNqRCxDQUFDO29CQUNELE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNuQixDQUFDO2dCQUNELElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7b0JBQzlELE1BQU0sQ0FBQyxPQUFPO3dCQUNaLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTs0QkFDdEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOzRCQUNqRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLO2dDQUN2QixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0NBQzdDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUMxQixJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO29CQUMxRCxNQUFNLENBQUMsS0FBSzt3QkFDVixPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07NEJBQ3RCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzs0QkFDN0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSztnQ0FDdkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2dDQUMzQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztvQkFDeEQsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUM3QixPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDLENBQUM7WUFFRjs7Ozs7O2VBTUc7WUFDSCxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU07Z0JBQzFDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkUsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7ZUFPRztZQUNILFNBQVMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxVQUFVLENBQUMsYUFBYTtnQkFDdEQsSUFBSSxhQUFhLEtBQUssU0FBUyxFQUFFLENBQUM7b0JBQ2hDLGFBQWEsR0FBRyxxQkFBcUIsQ0FBQztnQkFDeEMsQ0FBQztnQkFDRCxPQUFPLGFBQWEsR0FBRyx3QkFBd0IsQ0FBQztZQUNsRCxDQUFDLENBQUM7WUFFRixPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDO1lBQ2hCOzs7Ozs7ZUFNRztZQUVIOzs7Ozs7O2VBT0c7WUFDSCxTQUFTLFNBQVMsQ0FBQyxVQUFVO2dCQUMzQixJQUFJLFVBQVU7b0JBQ1osS0FBSyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO3dCQUNsRSxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJOzRCQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUM7WUFFRDs7Ozs7ZUFLRztZQUNILFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFbEQ7Ozs7O2VBS0c7WUFDSCxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRWhEOzs7Ozs7O2VBT0c7WUFDSCxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLFVBQVU7Z0JBQzNDLE9BQU8sSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7O2VBUUc7WUFDSCxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNoRCxJQUFJLENBQUMsTUFBTTtvQkFBRSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN2QyxJQUNFLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSTtvQkFDdkIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztvQkFFOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuRSxJQUNFLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSTtvQkFDckIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztvQkFFNUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqRSxPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7ZUFRRztZQUNILFNBQVMsQ0FBQyxlQUFlLEdBQUcsU0FBUyxlQUFlLENBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ2xFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDL0MsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7Ozs7ZUFVRztZQUNILFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU07Z0JBQy9DLElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxPQUFPLENBQUM7b0JBQUUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xFLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxFQUMvRCxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDOUMsT0FBTyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO29CQUN4QixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzFCLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO3dCQUNsQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ2pDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQy9CLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRDs0QkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDekIsTUFBTTtvQkFDVixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7OztlQVNHO1lBQ0gsU0FBUyxDQUFDLGVBQWUsR0FBRyxTQUFTLGVBQWUsQ0FBQyxNQUFNO2dCQUN6RCxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksT0FBTyxDQUFDO29CQUFFLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUM7WUFFRjs7Ozs7OztlQU9HO1lBQ0gsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxPQUFPO2dCQUN4QyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLEtBQUssSUFBSTtvQkFDakQsT0FBTyxpQkFBaUIsQ0FBQztnQkFDM0IsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztvQkFDOUQsSUFDRSxDQUFDLENBQ0MsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDO3dCQUMvRCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FDaEM7d0JBRUQsT0FBTywwQkFBMEIsQ0FBQztnQkFDdEMsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztvQkFDMUQsSUFDRSxDQUFDLENBQ0MsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDO3dCQUMzRCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FDOUI7d0JBRUQsT0FBTyx3QkFBd0IsQ0FBQztnQkFDcEMsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDLENBQUM7WUFFRjs7Ozs7OztlQU9HO1lBQ0gsU0FBUyxDQUFDLFVBQVUsR0FBRyxTQUFTLFVBQVUsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLE1BQU0sWUFBWSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTO29CQUFFLE9BQU8sTUFBTSxDQUFDO2dCQUNqRSxJQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNoRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSTtvQkFDeEIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLEtBQUssUUFBUTt3QkFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2pCLE1BQU0sQ0FBQyxPQUFPLEVBQ2QsQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQ2hDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDcEMsQ0FBQyxFQUNGLENBQUMsQ0FDRixDQUFDO3lCQUNDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQzt3QkFBRSxPQUFPLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ3hFLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJO29CQUN0QixJQUFJLE9BQU8sTUFBTSxDQUFDLEtBQUssS0FBSyxRQUFRO3dCQUNsQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDakIsTUFBTSxDQUFDLEtBQUssRUFDWixDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FDOUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUNsQyxDQUFDLEVBQ0YsQ0FBQyxDQUNGLENBQUM7eUJBQ0MsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDO3dCQUFFLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDbEUsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7O2VBUUc7WUFDSCxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPO2dCQUNyRCxJQUFJLENBQUMsT0FBTztvQkFBRSxPQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUMzQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ2hCLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNyQixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTt3QkFBRSxNQUFNLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzt5QkFDN0MsQ0FBQzt3QkFDSixNQUFNLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzt3QkFDcEIsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7NEJBQ3pCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JELENBQUM7b0JBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07d0JBQUUsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7eUJBQzNDLENBQUM7d0JBQ0osTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7d0JBQ2xCLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLOzRCQUN6QixNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNqRCxDQUFDO2dCQUNILENBQUM7Z0JBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztvQkFDOUQsTUFBTSxDQUFDLE9BQU87d0JBQ1osT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNOzRCQUN0QixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7NEJBQ2pFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7Z0NBQ3ZCLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQ0FDN0MsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQzFCLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7b0JBQzFELE1BQU0sQ0FBQyxLQUFLO3dCQUNWLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTs0QkFDdEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDOzRCQUM3RCxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLO2dDQUN2QixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0NBQzNDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUN4QixPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDLENBQUM7WUFFRjs7Ozs7O2VBTUc7WUFDSCxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU07Z0JBQzFDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkUsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7ZUFPRztZQUNILFNBQVMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxVQUFVLENBQUMsYUFBYTtnQkFDdEQsSUFBSSxhQUFhLEtBQUssU0FBUyxFQUFFLENBQUM7b0JBQ2hDLGFBQWEsR0FBRyxxQkFBcUIsQ0FBQztnQkFDeEMsQ0FBQztnQkFDRCxPQUFPLGFBQWEsR0FBRyx3QkFBd0IsQ0FBQztZQUNsRCxDQUFDLENBQUM7WUFFRixPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDO1lBQ2xCOzs7Ozs7Ozs7ZUFTRztZQUVIOzs7Ozs7O2VBT0c7WUFDSCxTQUFTLFdBQVcsQ0FBQyxVQUFVO2dCQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ2hCLElBQUksVUFBVTtvQkFDWixLQUFLLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7d0JBQ2xFLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUk7NEJBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQztZQUVEOzs7OztlQUtHO1lBQ0gsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVwRDs7Ozs7ZUFLRztZQUNILFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFFakQ7Ozs7O2VBS0c7WUFDSCxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBRS9DOzs7OztlQUtHO1lBQ0gsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVuRDs7Ozs7ZUFLRztZQUNILFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFbkQ7Ozs7Ozs7ZUFPRztZQUNILFdBQVcsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsVUFBVTtnQkFDN0MsT0FBTyxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyQyxDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7ZUFRRztZQUNILFdBQVcsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ2xELElBQUksQ0FBQyxNQUFNO29CQUFFLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3ZDLElBQ0UsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJO29CQUN2QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO29CQUU5QyxNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25FLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNO29CQUNuRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO3dCQUM3QyxNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hFLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDbEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzt3QkFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDbEIsQ0FBQztnQkFDRCxJQUNFLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSTtvQkFDdEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztvQkFFN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsRSxJQUNFLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSTtvQkFDdEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztvQkFFN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsRSxPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7ZUFRRztZQUNILFdBQVcsQ0FBQyxlQUFlLEdBQUcsU0FBUyxlQUFlLENBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ3BFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDL0MsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7Ozs7ZUFVRztZQUNILFdBQVcsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU07Z0JBQ2pELElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxPQUFPLENBQUM7b0JBQUUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xFLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxFQUMvRCxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDaEQsT0FBTyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO29CQUN4QixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzFCLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO3dCQUNsQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ2pDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQ0FDOUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7NEJBQ3ZCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDOzRCQUNyQyxNQUFNO3dCQUNSLENBQUM7d0JBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNQLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0NBQUUsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7NEJBQ2pFLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0NBQ3BCLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO2dDQUN4QyxPQUFPLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSTtvQ0FBRSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQzs0QkFDaEUsQ0FBQzs7Z0NBQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7NEJBQzNDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ2hDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ2hDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRDs0QkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDekIsTUFBTTtvQkFDVixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7OztlQVNHO1lBQ0gsV0FBVyxDQUFDLGVBQWUsR0FBRyxTQUFTLGVBQWUsQ0FBQyxNQUFNO2dCQUMzRCxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksT0FBTyxDQUFDO29CQUFFLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUM7WUFFRjs7Ozs7OztlQU9HO1lBQ0gsV0FBVyxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxPQUFPO2dCQUMxQyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLEtBQUssSUFBSTtvQkFDakQsT0FBTyxpQkFBaUIsQ0FBQztnQkFDM0IsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztvQkFDOUQsSUFDRSxDQUFDLENBQ0MsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDO3dCQUMvRCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FDaEM7d0JBRUQsT0FBTywwQkFBMEIsQ0FBQztnQkFDdEMsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7b0JBQ2pFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7d0JBQUUsT0FBTyx5QkFBeUIsQ0FBQztvQkFDdEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzt3QkFDN0MsSUFDRSxDQUFDLENBQ0MsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDakIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUM7NEJBQ2hELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNuQzs0QkFFRCxPQUFPLDRCQUE0QixDQUFDO2dCQUMxQyxDQUFDO2dCQUNELElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO29CQUM3RCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO3dCQUFFLE9BQU8sdUJBQXVCLENBQUM7b0JBQ2xFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7d0JBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3BDLE9BQU8sMkJBQTJCLENBQUM7Z0JBQ3pDLENBQUM7Z0JBQ0QsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztvQkFDNUQsSUFDRSxDQUFDLENBQ0MsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDO3dCQUM3RCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FDL0I7d0JBRUQsT0FBTyx5QkFBeUIsQ0FBQztnQkFDckMsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztvQkFDNUQsSUFDRSxDQUFDLENBQ0MsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDO3dCQUM3RCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FDL0I7d0JBRUQsT0FBTyx5QkFBeUIsQ0FBQztnQkFDckMsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDLENBQUM7WUFFRjs7Ozs7OztlQU9HO1lBQ0gsV0FBVyxDQUFDLFVBQVUsR0FBRyxTQUFTLFVBQVUsQ0FBQyxNQUFNO2dCQUNqRCxJQUFJLE1BQU0sWUFBWSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXO29CQUFFLE9BQU8sTUFBTSxDQUFDO2dCQUNuRSxJQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNsRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSTtvQkFDeEIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLEtBQUssUUFBUTt3QkFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2pCLE1BQU0sQ0FBQyxPQUFPLEVBQ2QsQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQ2hDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDcEMsQ0FBQyxFQUNGLENBQUMsQ0FDRixDQUFDO3lCQUNDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQzt3QkFBRSxPQUFPLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ3hFLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO3dCQUNoQyxNQUFNLFNBQVMsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO29CQUN0RSxPQUFPLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztvQkFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzt3QkFDNUMsSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUTs0QkFDdkMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQ2pCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUNuQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3ZDLENBQUMsRUFDRixDQUFDLENBQ0YsQ0FBQzs2QkFDQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUM7NEJBQ3BDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0MsQ0FBQztnQkFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQzt3QkFDOUIsTUFBTSxTQUFTLENBQUMsZ0RBQWdELENBQUMsQ0FBQztvQkFDcEUsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7d0JBQzFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUk7b0JBQ3ZCLElBQUksT0FBTyxNQUFNLENBQUMsTUFBTSxLQUFLLFFBQVE7d0JBQ25DLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUNqQixNQUFNLENBQUMsTUFBTSxFQUNiLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUMvQixLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQ25DLENBQUMsRUFDRixDQUFDLENBQ0YsQ0FBQzt5QkFDQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUM7d0JBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNyRSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSTtvQkFDdkIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxNQUFNLEtBQUssUUFBUTt3QkFDbkMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2pCLE1BQU0sQ0FBQyxNQUFNLEVBQ2IsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQy9CLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FDbkMsQ0FBQyxFQUNGLENBQUMsQ0FDRixDQUFDO3lCQUNDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQzt3QkFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ3JFLE9BQU8sT0FBTyxDQUFDO1lBQ2pCLENBQUMsQ0FBQztZQUVGOzs7Ozs7OztlQVFHO1lBQ0gsV0FBVyxDQUFDLFFBQVEsR0FBRyxTQUFTLFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTztnQkFDdkQsSUFBSSxDQUFDLE9BQU87b0JBQUUsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNoQixJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN2QyxNQUFNLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztvQkFDcEIsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ3BCLENBQUM7Z0JBQ0QsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3JCLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNO3dCQUFFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO3lCQUM3QyxDQUFDO3dCQUNKLE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO3dCQUNwQixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSzs0QkFDekIsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDckQsQ0FBQztvQkFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTt3QkFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzt5QkFDNUMsQ0FBQzt3QkFDSixNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzt3QkFDbkIsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7NEJBQ3pCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ25ELENBQUM7b0JBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07d0JBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7eUJBQzVDLENBQUM7d0JBQ0osTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7d0JBQ25CLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLOzRCQUN6QixNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNuRCxDQUFDO2dCQUNILENBQUM7Z0JBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztvQkFDOUQsTUFBTSxDQUFDLE9BQU87d0JBQ1osT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNOzRCQUN0QixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7NEJBQ2pFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7Z0NBQ3ZCLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQ0FDN0MsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQzFCLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUM5QyxNQUFNLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztvQkFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzt3QkFDN0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQ2YsT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNO2dDQUN0QixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2pCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQ2xCLENBQUMsRUFDRCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FDMUI7Z0NBQ0gsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSztvQ0FDdkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO29DQUNoRCxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDMUMsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7d0JBQzNDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsQ0FBQztnQkFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO29CQUM1RCxNQUFNLENBQUMsTUFBTTt3QkFDWCxPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07NEJBQ3RCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzs0QkFDL0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSztnQ0FDdkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2dDQUM1QyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDekIsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztvQkFDNUQsTUFBTSxDQUFDLE1BQU07d0JBQ1gsT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNOzRCQUN0QixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7NEJBQy9ELENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7Z0NBQ3ZCLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQ0FDNUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQ3pCLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUMsQ0FBQztZQUVGOzs7Ozs7ZUFNRztZQUNILFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTTtnQkFDNUMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN2RSxDQUFDLENBQUM7WUFFRjs7Ozs7OztlQU9HO1lBQ0gsV0FBVyxDQUFDLFVBQVUsR0FBRyxTQUFTLFVBQVUsQ0FBQyxhQUFhO2dCQUN4RCxJQUFJLGFBQWEsS0FBSyxTQUFTLEVBQUUsQ0FBQztvQkFDaEMsYUFBYSxHQUFHLHFCQUFxQixDQUFDO2dCQUN4QyxDQUFDO2dCQUNELE9BQU8sYUFBYSxHQUFHLDBCQUEwQixDQUFDO1lBQ3BELENBQUMsQ0FBQztZQUVGLE9BQU8sV0FBVyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUM7WUFDakI7Ozs7Ozs7ZUFPRztZQUVIOzs7Ozs7O2VBT0c7WUFDSCxTQUFTLFVBQVUsQ0FBQyxVQUFVO2dCQUM1QixJQUFJLFVBQVU7b0JBQ1osS0FBSyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO3dCQUNsRSxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJOzRCQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUM7WUFFRDs7Ozs7ZUFLRztZQUNILFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFbkQ7Ozs7O2VBS0c7WUFDSCxVQUFVLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRTFEOzs7OztlQUtHO1lBQ0gsVUFBVSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUV6RDs7Ozs7OztlQU9HO1lBQ0gsVUFBVSxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxVQUFVO2dCQUM1QyxPQUFPLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQztZQUVGOzs7Ozs7OztlQVFHO1lBQ0gsVUFBVSxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTTtnQkFDakQsSUFBSSxDQUFDLE1BQU07b0JBQUUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDdkMsSUFDRSxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUk7b0JBQ3ZCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7b0JBRTlDLE1BQU0sQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbkUsSUFDRSxPQUFPLENBQUMsY0FBYyxJQUFJLElBQUk7b0JBQzlCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQztvQkFFckQsTUFBTTt5QkFDSCxNQUFNLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDO3lCQUNsQyxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNuQyxJQUNFLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSTtvQkFDN0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQztvQkFFcEQsTUFBTTt5QkFDSCxNQUFNLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDO3lCQUNsQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNsQyxPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7ZUFRRztZQUNILFVBQVUsQ0FBQyxlQUFlLEdBQUcsU0FBUyxlQUFlLENBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ25FLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDL0MsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7Ozs7ZUFVRztZQUNILFVBQVUsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU07Z0JBQ2hELElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxPQUFPLENBQUM7b0JBQUUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xFLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxFQUMvRCxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDL0MsT0FBTyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO29CQUN4QixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzFCLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO3dCQUNsQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ2pDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ3hDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ3ZDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRDs0QkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDekIsTUFBTTtvQkFDVixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7OztlQVNHO1lBQ0gsVUFBVSxDQUFDLGVBQWUsR0FBRyxTQUFTLGVBQWUsQ0FBQyxNQUFNO2dCQUMxRCxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksT0FBTyxDQUFDO29CQUFFLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUM7WUFFRjs7Ozs7OztlQU9HO1lBQ0gsVUFBVSxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxPQUFPO2dCQUN6QyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLEtBQUssSUFBSTtvQkFDakQsT0FBTyxpQkFBaUIsQ0FBQztnQkFDM0IsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztvQkFDOUQsSUFDRSxDQUFDLENBQ0MsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDO3dCQUMvRCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FDaEM7d0JBRUQsT0FBTywwQkFBMEIsQ0FBQztnQkFDdEMsSUFDRSxPQUFPLENBQUMsY0FBYyxJQUFJLElBQUk7b0JBQzlCLE9BQU8sQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7b0JBRXhDLElBQ0UsQ0FBQyxDQUNDLENBQUMsT0FBTyxDQUFDLGNBQWM7d0JBQ3JCLE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDO3dCQUNwRCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FDdkM7d0JBRUQsT0FBTyxpQ0FBaUMsQ0FBQztnQkFDN0MsSUFDRSxPQUFPLENBQUMsYUFBYSxJQUFJLElBQUk7b0JBQzdCLE9BQU8sQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDO29CQUV2QyxJQUNFLENBQUMsQ0FDQyxDQUFDLE9BQU8sQ0FBQyxhQUFhO3dCQUNwQixPQUFPLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQzt3QkFDbkQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQ3RDO3dCQUVELE9BQU8sZ0NBQWdDLENBQUM7Z0JBQzVDLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7ZUFPRztZQUNILFVBQVUsQ0FBQyxVQUFVLEdBQUcsU0FBUyxVQUFVLENBQUMsTUFBTTtnQkFDaEQsSUFBSSxNQUFNLFlBQVksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVTtvQkFBRSxPQUFPLE1BQU0sQ0FBQztnQkFDbEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDakQsSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUk7b0JBQ3hCLElBQUksT0FBTyxNQUFNLENBQUMsT0FBTyxLQUFLLFFBQVE7d0JBQ3BDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUNqQixNQUFNLENBQUMsT0FBTyxFQUNkLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUNoQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ3BDLENBQUMsRUFDRixDQUFDLENBQ0YsQ0FBQzt5QkFDQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUM7d0JBQUUsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUN4RSxJQUFJLE1BQU0sQ0FBQyxjQUFjLElBQUksSUFBSTtvQkFDL0IsSUFBSSxPQUFPLE1BQU0sQ0FBQyxjQUFjLEtBQUssUUFBUTt3QkFDM0MsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2pCLE1BQU0sQ0FBQyxjQUFjLEVBQ3JCLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUN2QyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQzNDLENBQUMsRUFDRixDQUFDLENBQ0YsQ0FBQzt5QkFDQyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxJQUFJLENBQUM7d0JBQ3hDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztnQkFDbkQsSUFBSSxNQUFNLENBQUMsYUFBYSxJQUFJLElBQUk7b0JBQzlCLElBQUksT0FBTyxNQUFNLENBQUMsYUFBYSxLQUFLLFFBQVE7d0JBQzFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUNqQixNQUFNLENBQUMsYUFBYSxFQUNwQixDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FDdEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUMxQyxDQUFDLEVBQ0YsQ0FBQyxDQUNGLENBQUM7eUJBQ0MsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sSUFBSSxDQUFDO3dCQUN2QyxPQUFPLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7Z0JBQ2pELE9BQU8sT0FBTyxDQUFDO1lBQ2pCLENBQUMsQ0FBQztZQUVGOzs7Ozs7OztlQVFHO1lBQ0gsVUFBVSxDQUFDLFFBQVEsR0FBRyxTQUFTLFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTztnQkFDdEQsSUFBSSxDQUFDLE9BQU87b0JBQUUsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNoQixJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDckIsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07d0JBQUUsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7eUJBQzdDLENBQUM7d0JBQ0osTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7d0JBQ3BCLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLOzRCQUN6QixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyRCxDQUFDO29CQUNELElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNO3dCQUFFLE1BQU0sQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO3lCQUNwRCxDQUFDO3dCQUNKLE1BQU0sQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO3dCQUMzQixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSzs0QkFDekIsTUFBTSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDbkUsQ0FBQztvQkFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTt3QkFBRSxNQUFNLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQzt5QkFDbkQsQ0FBQzt3QkFDSixNQUFNLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQzt3QkFDMUIsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7NEJBQ3pCLE1BQU0sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ2pFLENBQUM7Z0JBQ0gsQ0FBQztnQkFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO29CQUM5RCxNQUFNLENBQUMsT0FBTzt3QkFDWixPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07NEJBQ3RCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzs0QkFDakUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSztnQ0FDdkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2dDQUM3QyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDMUIsSUFDRSxPQUFPLENBQUMsY0FBYyxJQUFJLElBQUk7b0JBQzlCLE9BQU8sQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7b0JBRXhDLE1BQU0sQ0FBQyxjQUFjO3dCQUNuQixPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07NEJBQ3RCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDakIsT0FBTyxDQUFDLGNBQWMsRUFDdEIsQ0FBQyxFQUNELE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUM5Qjs0QkFDSCxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLO2dDQUN2QixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7Z0NBQ3BELENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO2dCQUNqQyxJQUNFLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSTtvQkFDN0IsT0FBTyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUM7b0JBRXZDLE1BQU0sQ0FBQyxhQUFhO3dCQUNsQixPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07NEJBQ3RCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDakIsT0FBTyxDQUFDLGFBQWEsRUFDckIsQ0FBQyxFQUNELE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUM3Qjs0QkFDSCxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLO2dDQUN2QixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7Z0NBQ25ELENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO2dCQUNoQyxPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDLENBQUM7WUFFRjs7Ozs7O2VBTUc7WUFDSCxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU07Z0JBQzNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkUsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7ZUFPRztZQUNILFVBQVUsQ0FBQyxVQUFVLEdBQUcsU0FBUyxVQUFVLENBQUMsYUFBYTtnQkFDdkQsSUFBSSxhQUFhLEtBQUssU0FBUyxFQUFFLENBQUM7b0JBQ2hDLGFBQWEsR0FBRyxxQkFBcUIsQ0FBQztnQkFDeEMsQ0FBQztnQkFDRCxPQUFPLGFBQWEsR0FBRyx5QkFBeUIsQ0FBQztZQUNuRCxDQUFDLENBQUM7WUFFRixPQUFPLFVBQVUsQ0FBQztRQUNwQixDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDO1lBQ2pCOzs7OztlQUtHO1lBRUg7Ozs7Ozs7ZUFPRztZQUNILFNBQVMsVUFBVSxDQUFDLFVBQVU7Z0JBQzVCLElBQUksVUFBVTtvQkFDWixLQUFLLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7d0JBQ2xFLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUk7NEJBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQztZQUVEOzs7OztlQUtHO1lBQ0gsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVuRDs7Ozs7OztlQU9HO1lBQ0gsVUFBVSxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxVQUFVO2dCQUM1QyxPQUFPLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQztZQUVGOzs7Ozs7OztlQVFHO1lBQ0gsVUFBVSxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTTtnQkFDakQsSUFBSSxDQUFDLE1BQU07b0JBQUUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDdkMsSUFDRSxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUk7b0JBQ3ZCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7b0JBRTlDLE1BQU0sQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbkUsT0FBTyxNQUFNLENBQUM7WUFDaEIsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7O2VBUUc7WUFDSCxVQUFVLENBQUMsZUFBZSxHQUFHLFNBQVMsZUFBZSxDQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNuRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQy9DLENBQUMsQ0FBQztZQUVGOzs7Ozs7Ozs7O2VBVUc7WUFDSCxVQUFVLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNO2dCQUNoRCxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksT0FBTyxDQUFDO29CQUFFLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLEdBQUcsR0FBRyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sRUFDL0QsT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQy9DLE9BQU8sTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUMxQixRQUFRLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQzt3QkFDbEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNQLE9BQU8sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDOzRCQUNqQyxNQUFNO3dCQUNSLENBQUM7d0JBQ0Q7NEJBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLE1BQU07b0JBQ1YsQ0FBQztnQkFDSCxDQUFDO2dCQUNELE9BQU8sT0FBTyxDQUFDO1lBQ2pCLENBQUMsQ0FBQztZQUVGOzs7Ozs7Ozs7ZUFTRztZQUNILFVBQVUsQ0FBQyxlQUFlLEdBQUcsU0FBUyxlQUFlLENBQUMsTUFBTTtnQkFDMUQsSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLE9BQU8sQ0FBQztvQkFBRSxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQy9ELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7ZUFPRztZQUNILFVBQVUsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsT0FBTztnQkFDekMsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxLQUFLLElBQUk7b0JBQ2pELE9BQU8saUJBQWlCLENBQUM7Z0JBQzNCLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7b0JBQzlELElBQ0UsQ0FBQyxDQUNDLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQzt3QkFDL0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQ2hDO3dCQUVELE9BQU8sMEJBQTBCLENBQUM7Z0JBQ3RDLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7ZUFPRztZQUNILFVBQVUsQ0FBQyxVQUFVLEdBQUcsU0FBUyxVQUFVLENBQUMsTUFBTTtnQkFDaEQsSUFBSSxNQUFNLFlBQVksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVTtvQkFBRSxPQUFPLE1BQU0sQ0FBQztnQkFDbEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDakQsSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUk7b0JBQ3hCLElBQUksT0FBTyxNQUFNLENBQUMsT0FBTyxLQUFLLFFBQVE7d0JBQ3BDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUNqQixNQUFNLENBQUMsT0FBTyxFQUNkLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUNoQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ3BDLENBQUMsRUFDRixDQUFDLENBQ0YsQ0FBQzt5QkFDQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUM7d0JBQUUsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUN4RSxPQUFPLE9BQU8sQ0FBQztZQUNqQixDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7ZUFRRztZQUNILFVBQVUsQ0FBQyxRQUFRLEdBQUcsU0FBUyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU87Z0JBQ3RELElBQUksQ0FBQyxPQUFPO29CQUFFLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQzNCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDaEIsSUFBSSxPQUFPLENBQUMsUUFBUTtvQkFDbEIsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07d0JBQUUsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7eUJBQzdDLENBQUM7d0JBQ0osTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7d0JBQ3BCLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLOzRCQUN6QixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyRCxDQUFDO2dCQUNILElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7b0JBQzlELE1BQU0sQ0FBQyxPQUFPO3dCQUNaLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTs0QkFDdEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOzRCQUNqRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLO2dDQUN2QixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0NBQzdDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUMxQixPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDLENBQUM7WUFFRjs7Ozs7O2VBTUc7WUFDSCxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU07Z0JBQzNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkUsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7ZUFPRztZQUNILFVBQVUsQ0FBQyxVQUFVLEdBQUcsU0FBUyxVQUFVLENBQUMsYUFBYTtnQkFDdkQsSUFBSSxhQUFhLEtBQUssU0FBUyxFQUFFLENBQUM7b0JBQ2hDLGFBQWEsR0FBRyxxQkFBcUIsQ0FBQztnQkFDeEMsQ0FBQztnQkFDRCxPQUFPLGFBQWEsR0FBRyx5QkFBeUIsQ0FBQztZQUNuRCxDQUFDLENBQUM7WUFFRixPQUFPLFVBQVUsQ0FBQztRQUNwQixDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDO1lBQ2pCOzs7Ozs7OztlQVFHO1lBRUg7Ozs7Ozs7ZUFPRztZQUNILFNBQVMsVUFBVSxDQUFDLFVBQVU7Z0JBQzVCLElBQUksVUFBVTtvQkFDWixLQUFLLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7d0JBQ2xFLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUk7NEJBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQztZQUVEOzs7OztlQUtHO1lBQ0gsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVuRDs7Ozs7ZUFLRztZQUNILFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFbEQ7Ozs7O2VBS0c7WUFDSCxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRWxEOzs7OztlQUtHO1lBQ0gsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBRWxDOzs7Ozs7O2VBT0c7WUFDSCxVQUFVLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLFVBQVU7Z0JBQzVDLE9BQU8sSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEMsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7O2VBUUc7WUFDSCxVQUFVLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNqRCxJQUFJLENBQUMsTUFBTTtvQkFBRSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN2QyxJQUNFLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSTtvQkFDdkIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztvQkFFOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuRSxJQUNFLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSTtvQkFDdEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztvQkFFN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsRSxJQUNFLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSTtvQkFDdEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztvQkFFN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsRSxJQUNFLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSTtvQkFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztvQkFFL0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNyRSxPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7ZUFRRztZQUNILFVBQVUsQ0FBQyxlQUFlLEdBQUcsU0FBUyxlQUFlLENBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ25FLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDL0MsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7Ozs7ZUFVRztZQUNILFVBQVUsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU07Z0JBQ2hELElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxPQUFPLENBQUM7b0JBQUUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xFLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxFQUMvRCxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDL0MsT0FBTyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO29CQUN4QixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzFCLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO3dCQUNsQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ2pDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ2hDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ2hDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7NEJBQ25DLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRDs0QkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDekIsTUFBTTtvQkFDVixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7OztlQVNHO1lBQ0gsVUFBVSxDQUFDLGVBQWUsR0FBRyxTQUFTLGVBQWUsQ0FBQyxNQUFNO2dCQUMxRCxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksT0FBTyxDQUFDO29CQUFFLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUM7WUFFRjs7Ozs7OztlQU9HO1lBQ0gsVUFBVSxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxPQUFPO2dCQUN6QyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLEtBQUssSUFBSTtvQkFDakQsT0FBTyxpQkFBaUIsQ0FBQztnQkFDM0IsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztvQkFDOUQsSUFDRSxDQUFDLENBQ0MsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDO3dCQUMvRCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FDaEM7d0JBRUQsT0FBTywwQkFBMEIsQ0FBQztnQkFDdEMsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztvQkFDNUQsSUFDRSxDQUFDLENBQ0MsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDO3dCQUM3RCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FDL0I7d0JBRUQsT0FBTyx5QkFBeUIsQ0FBQztnQkFDckMsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztvQkFDNUQsSUFDRSxDQUFDLENBQ0MsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDO3dCQUM3RCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FDL0I7d0JBRUQsT0FBTyx5QkFBeUIsQ0FBQztnQkFDckMsSUFBSSxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQztvQkFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQzt3QkFDcEMsT0FBTyw0QkFBNEIsQ0FBQztnQkFDeEMsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDLENBQUM7WUFFRjs7Ozs7OztlQU9HO1lBQ0gsVUFBVSxDQUFDLFVBQVUsR0FBRyxTQUFTLFVBQVUsQ0FBQyxNQUFNO2dCQUNoRCxJQUFJLE1BQU0sWUFBWSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVO29CQUFFLE9BQU8sTUFBTSxDQUFDO2dCQUNsRSxJQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNqRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSTtvQkFDeEIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLEtBQUssUUFBUTt3QkFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2pCLE1BQU0sQ0FBQyxPQUFPLEVBQ2QsQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQ2hDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDcEMsQ0FBQyxFQUNGLENBQUMsQ0FDRixDQUFDO3lCQUNDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQzt3QkFBRSxPQUFPLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ3hFLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJO29CQUN2QixJQUFJLE9BQU8sTUFBTSxDQUFDLE1BQU0sS0FBSyxRQUFRO3dCQUNuQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDakIsTUFBTSxDQUFDLE1BQU0sRUFDYixDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FDL0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUNuQyxDQUFDLEVBQ0YsQ0FBQyxDQUNGLENBQUM7eUJBQ0MsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDO3dCQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDckUsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUk7b0JBQ3ZCLElBQUksT0FBTyxNQUFNLENBQUMsTUFBTSxLQUFLLFFBQVE7d0JBQ25DLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUNqQixNQUFNLENBQUMsTUFBTSxFQUNiLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUMvQixLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQ25DLENBQUMsRUFDRixDQUFDLENBQ0YsQ0FBQzt5QkFDQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUM7d0JBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNyRSxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSTtvQkFBRSxPQUFPLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUNwRSxPQUFPLE9BQU8sQ0FBQztZQUNqQixDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7ZUFRRztZQUNILFVBQVUsQ0FBQyxRQUFRLEdBQUcsU0FBUyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU87Z0JBQ3RELElBQUksQ0FBQyxPQUFPO29CQUFFLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQzNCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDaEIsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3JCLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNO3dCQUFFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO3lCQUM3QyxDQUFDO3dCQUNKLE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO3dCQUNwQixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSzs0QkFDekIsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDckQsQ0FBQztvQkFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTt3QkFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzt5QkFDNUMsQ0FBQzt3QkFDSixNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzt3QkFDbkIsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7NEJBQ3pCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ25ELENBQUM7b0JBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07d0JBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7eUJBQzVDLENBQUM7d0JBQ0osTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7d0JBQ25CLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLOzRCQUN6QixNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNuRCxDQUFDO29CQUNELE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixDQUFDO2dCQUNELElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7b0JBQzlELE1BQU0sQ0FBQyxPQUFPO3dCQUNaLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTs0QkFDdEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOzRCQUNqRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLO2dDQUN2QixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0NBQzdDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUMxQixJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO29CQUM1RCxNQUFNLENBQUMsTUFBTTt3QkFDWCxPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07NEJBQ3RCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzs0QkFDL0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSztnQ0FDdkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2dDQUM1QyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDekIsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztvQkFDNUQsTUFBTSxDQUFDLE1BQU07d0JBQ1gsT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNOzRCQUN0QixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7NEJBQy9ELENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7Z0NBQ3ZCLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQ0FDNUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQ3pCLElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7b0JBQ2hFLE1BQU0sQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFDckMsT0FBTyxNQUFNLENBQUM7WUFDaEIsQ0FBQyxDQUFDO1lBRUY7Ozs7OztlQU1HO1lBQ0gsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNO2dCQUMzQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3ZFLENBQUMsQ0FBQztZQUVGOzs7Ozs7O2VBT0c7WUFDSCxVQUFVLENBQUMsVUFBVSxHQUFHLFNBQVMsVUFBVSxDQUFDLGFBQWE7Z0JBQ3ZELElBQUksYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO29CQUNoQyxhQUFhLEdBQUcscUJBQXFCLENBQUM7Z0JBQ3hDLENBQUM7Z0JBQ0QsT0FBTyxhQUFhLEdBQUcseUJBQXlCLENBQUM7WUFDbkQsQ0FBQyxDQUFDO1lBRUYsT0FBTyxVQUFVLENBQUM7UUFDcEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQztZQUNwQjs7Ozs7Ozs7Ozs7Ozs7ZUFjRztZQUVIOzs7Ozs7O2VBT0c7WUFDSCxTQUFTLGFBQWEsQ0FBQyxVQUFVO2dCQUMvQixJQUFJLFVBQVU7b0JBQ1osS0FBSyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO3dCQUNsRSxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJOzRCQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUM7WUFFRDs7Ozs7ZUFLRztZQUNILGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFdEQ7Ozs7O2VBS0c7WUFDSCxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXJEOzs7OztlQUtHO1lBQ0gsYUFBYSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUUzRDs7Ozs7ZUFLRztZQUNILGFBQWEsQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFeEQ7Ozs7O2VBS0c7WUFDSCxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFFdEM7Ozs7O2VBS0c7WUFDSCxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFFdEM7Ozs7O2VBS0c7WUFDSCxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFFbkM7Ozs7O2VBS0c7WUFDSCxhQUFhLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7WUFFM0M7Ozs7O2VBS0c7WUFDSCxhQUFhLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXhEOzs7OztlQUtHO1lBQ0gsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBRXhDOzs7Ozs7O2VBT0c7WUFDSCxhQUFhLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLFVBQVU7Z0JBQy9DLE9BQU8sSUFBSSxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7O2VBUUc7WUFDSCxhQUFhLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNwRCxJQUFJLENBQUMsTUFBTTtvQkFBRSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN2QyxJQUNFLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSTtvQkFDdkIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztvQkFFOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuRSxJQUNFLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSTtvQkFDdEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztvQkFFN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsRSxJQUNFLE9BQU8sQ0FBQyxZQUFZLElBQUksSUFBSTtvQkFDNUIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQztvQkFFbkQsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN4RSxJQUNFLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSTtvQkFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztvQkFFL0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNyRSxJQUNFLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSTtvQkFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztvQkFFL0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNyRSxJQUNFLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSTtvQkFDckIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztvQkFFNUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsRSxJQUNFLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSTtvQkFDN0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQztvQkFFcEQsTUFBTTt5QkFDSCxNQUFNLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDO3lCQUNsQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNuQyxJQUNFLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSTtvQkFDekIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztvQkFFaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNyRSxJQUNFLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSTtvQkFDekIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztvQkFFaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNyRSxJQUNFLE9BQU8sQ0FBQyxVQUFVLElBQUksSUFBSTtvQkFDMUIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQztvQkFFakQsTUFBTSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN4RSxPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7ZUFRRztZQUNILGFBQWEsQ0FBQyxlQUFlLEdBQUcsU0FBUyxlQUFlLENBQ3RELE9BQU8sRUFDUCxNQUFNO2dCQUVOLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDL0MsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7Ozs7ZUFVRztZQUNILGFBQWEsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU07Z0JBQ25ELElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxPQUFPLENBQUM7b0JBQUUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xFLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxFQUMvRCxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDbEQsT0FBTyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO29CQUN4QixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzFCLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO3dCQUNsQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ2pDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ2hDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ3RDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ25DLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7NEJBQ25DLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7NEJBQ25DLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7NEJBQ2hDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7NEJBQ3hDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ25DLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRCxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ1IsT0FBTyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7NEJBQ3JDLE1BQU07d0JBQ1IsQ0FBQzt3QkFDRDs0QkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDekIsTUFBTTtvQkFDVixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7OztlQVNHO1lBQ0gsYUFBYSxDQUFDLGVBQWUsR0FBRyxTQUFTLGVBQWUsQ0FBQyxNQUFNO2dCQUM3RCxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksT0FBTyxDQUFDO29CQUFFLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUM7WUFFRjs7Ozs7OztlQU9HO1lBQ0gsYUFBYSxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxPQUFPO2dCQUM1QyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLEtBQUssSUFBSTtvQkFDakQsT0FBTyxpQkFBaUIsQ0FBQztnQkFDM0IsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztvQkFDOUQsSUFDRSxDQUFDLENBQ0MsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDO3dCQUMvRCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FDaEM7d0JBRUQsT0FBTywwQkFBMEIsQ0FBQztnQkFDdEMsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztvQkFDNUQsSUFDRSxDQUFDLENBQ0MsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDO3dCQUM3RCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FDL0I7d0JBRUQsT0FBTyx5QkFBeUIsQ0FBQztnQkFDckMsSUFDRSxPQUFPLENBQUMsWUFBWSxJQUFJLElBQUk7b0JBQzVCLE9BQU8sQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDO29CQUV0QyxJQUNFLENBQUMsQ0FDQyxDQUFDLE9BQU8sQ0FBQyxZQUFZO3dCQUNuQixPQUFPLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQzt3QkFDbEQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQ3JDO3dCQUVELE9BQU8sK0JBQStCLENBQUM7Z0JBQzNDLElBQUksT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7b0JBQ2xFLElBQ0UsQ0FBQyxDQUNDLENBQUMsT0FBTyxDQUFDLFNBQVM7d0JBQ2hCLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDO3dCQUMvQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FDbEM7d0JBRUQsT0FBTyw0QkFBNEIsQ0FBQztnQkFDeEMsSUFBSSxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQztvQkFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQzt3QkFDbkMsT0FBTywyQkFBMkIsQ0FBQztnQkFDdkMsSUFBSSxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQztvQkFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQzt3QkFDbkMsT0FBTywyQkFBMkIsQ0FBQztnQkFDdkMsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztvQkFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzt3QkFBRSxPQUFPLHdCQUF3QixDQUFDO2dCQUN0RSxJQUNFLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSTtvQkFDN0IsT0FBTyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUM7b0JBRXZDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7d0JBQ3hDLE9BQU8sZ0NBQWdDLENBQUM7Z0JBQzVDLElBQUksT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7b0JBQ2xFLElBQ0UsQ0FBQyxDQUNDLENBQUMsT0FBTyxDQUFDLFNBQVM7d0JBQ2hCLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDO3dCQUMvQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FDbEM7d0JBRUQsT0FBTyw0QkFBNEIsQ0FBQztnQkFDeEMsSUFBSSxPQUFPLENBQUMsVUFBVSxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQztvQkFDcEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQzt3QkFDckMsT0FBTyw2QkFBNkIsQ0FBQztnQkFDekMsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDLENBQUM7WUFFRjs7Ozs7OztlQU9HO1lBQ0gsYUFBYSxDQUFDLFVBQVUsR0FBRyxTQUFTLFVBQVUsQ0FBQyxNQUFNO2dCQUNuRCxJQUFJLE1BQU0sWUFBWSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhO29CQUFFLE9BQU8sTUFBTSxDQUFDO2dCQUNyRSxJQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNwRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSTtvQkFDeEIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLEtBQUssUUFBUTt3QkFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2pCLE1BQU0sQ0FBQyxPQUFPLEVBQ2QsQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQ2hDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDcEMsQ0FBQyxFQUNGLENBQUMsQ0FDRixDQUFDO3lCQUNDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQzt3QkFBRSxPQUFPLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ3hFLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJO29CQUN2QixJQUFJLE9BQU8sTUFBTSxDQUFDLE1BQU0sS0FBSyxRQUFRO3dCQUNuQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDakIsTUFBTSxDQUFDLE1BQU0sRUFDYixDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FDL0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUNuQyxDQUFDLEVBQ0YsQ0FBQyxDQUNGLENBQUM7eUJBQ0MsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDO3dCQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDckUsSUFBSSxNQUFNLENBQUMsWUFBWSxJQUFJLElBQUk7b0JBQzdCLElBQUksT0FBTyxNQUFNLENBQUMsWUFBWSxLQUFLLFFBQVE7d0JBQ3pDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUNqQixNQUFNLENBQUMsWUFBWSxFQUNuQixDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FDckMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUN6QyxDQUFDLEVBQ0YsQ0FBQyxDQUNGLENBQUM7eUJBQ0MsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxDQUFDO3dCQUN0QyxPQUFPLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7Z0JBQy9DLElBQUksTUFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJO29CQUMxQixJQUFJLE9BQU8sTUFBTSxDQUFDLFNBQVMsS0FBSyxRQUFRO3dCQUN0QyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDakIsTUFBTSxDQUFDLFNBQVMsRUFDaEIsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQ2xDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FDdEMsQ0FBQyxFQUNGLENBQUMsQ0FDRixDQUFDO3lCQUNDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQzt3QkFDbkMsT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUN6QyxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSTtvQkFBRSxPQUFPLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hFLElBQUksTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJO29CQUFFLE9BQU8sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEUsSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUk7b0JBQUUsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLE1BQU0sQ0FBQyxhQUFhLElBQUksSUFBSTtvQkFDOUIsT0FBTyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUN2RCxJQUFJLE1BQU0sQ0FBQyxTQUFTLElBQUksSUFBSTtvQkFDMUIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxTQUFTLEtBQUssUUFBUTt3QkFDdEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2pCLE1BQU0sQ0FBQyxTQUFTLEVBQ2hCLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUNsQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQ3RDLENBQUMsRUFDRixDQUFDLENBQ0YsQ0FBQzt5QkFDQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUM7d0JBQ25DLE9BQU8sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztnQkFDekMsSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUk7b0JBQzNCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDakQsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7O2VBUUc7WUFDSCxhQUFhLENBQUMsUUFBUSxHQUFHLFNBQVMsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPO2dCQUN6RCxJQUFJLENBQUMsT0FBTztvQkFBRSxPQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUMzQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ2hCLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNyQixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTt3QkFBRSxNQUFNLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzt5QkFDN0MsQ0FBQzt3QkFDSixNQUFNLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzt3QkFDcEIsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7NEJBQ3pCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JELENBQUM7b0JBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07d0JBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7eUJBQzVDLENBQUM7d0JBQ0osTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7d0JBQ25CLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLOzRCQUN6QixNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNuRCxDQUFDO29CQUNELElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNO3dCQUFFLE1BQU0sQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO3lCQUNsRCxDQUFDO3dCQUNKLE1BQU0sQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO3dCQUN6QixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSzs0QkFDekIsTUFBTSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDL0QsQ0FBQztvQkFDRCxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztvQkFDckIsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUNsQixNQUFNLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztvQkFDMUIsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07d0JBQUUsTUFBTSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7eUJBQy9DLENBQUM7d0JBQ0osTUFBTSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7d0JBQ3RCLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLOzRCQUN6QixNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN6RCxDQUFDO29CQUNELElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNO3dCQUFFLE1BQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO3lCQUMvQyxDQUFDO3dCQUNKLE1BQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO3dCQUN0QixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSzs0QkFDekIsTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDekQsQ0FBQztvQkFDRCxNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztnQkFDekIsQ0FBQztnQkFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO29CQUM5RCxNQUFNLENBQUMsT0FBTzt3QkFDWixPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07NEJBQ3RCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzs0QkFDakUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSztnQ0FDdkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2dDQUM3QyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDMUIsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztvQkFDNUQsTUFBTSxDQUFDLE1BQU07d0JBQ1gsT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNOzRCQUN0QixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7NEJBQy9ELENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7Z0NBQ3ZCLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQ0FDNUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQ3pCLElBQ0UsT0FBTyxDQUFDLFlBQVksSUFBSSxJQUFJO29CQUM1QixPQUFPLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQztvQkFFdEMsTUFBTSxDQUFDLFlBQVk7d0JBQ2pCLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTs0QkFDdEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUNqQixPQUFPLENBQUMsWUFBWSxFQUNwQixDQUFDLEVBQ0QsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQzVCOzRCQUNILENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7Z0NBQ3ZCLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztnQ0FDbEQsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7Z0JBQy9CLElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7b0JBQ2hFLE1BQU0sQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFDckMsSUFBSSxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQztvQkFDaEUsTUFBTSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO2dCQUNyQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO29CQUMxRCxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQy9CLElBQ0UsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJO29CQUM3QixPQUFPLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQztvQkFFdkMsTUFBTSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO2dCQUMvQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO29CQUNsRSxNQUFNLENBQUMsU0FBUzt3QkFDZCxPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07NEJBQ3RCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDakIsT0FBTyxDQUFDLFNBQVMsRUFDakIsQ0FBQyxFQUNELE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUN6Qjs0QkFDSCxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLO2dDQUN2QixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7Z0NBQy9DLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO2dCQUM1QixJQUFJLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO29CQUNsRSxNQUFNLENBQUMsU0FBUzt3QkFDZCxPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07NEJBQ3RCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDakIsT0FBTyxDQUFDLFNBQVMsRUFDakIsQ0FBQyxFQUNELE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUN6Qjs0QkFDSCxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLO2dDQUN2QixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7Z0NBQy9DLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO2dCQUM1QixJQUFJLE9BQU8sQ0FBQyxVQUFVLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO29CQUNwRSxNQUFNLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7Z0JBQ3pDLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUMsQ0FBQztZQUVGOzs7Ozs7ZUFNRztZQUNILGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTTtnQkFDOUMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN2RSxDQUFDLENBQUM7WUFFRjs7Ozs7OztlQU9HO1lBQ0gsYUFBYSxDQUFDLFVBQVUsR0FBRyxTQUFTLFVBQVUsQ0FBQyxhQUFhO2dCQUMxRCxJQUFJLGFBQWEsS0FBSyxTQUFTLEVBQUUsQ0FBQztvQkFDaEMsYUFBYSxHQUFHLHFCQUFxQixDQUFDO2dCQUN4QyxDQUFDO2dCQUNELE9BQU8sYUFBYSxHQUFHLDRCQUE0QixDQUFDO1lBQ3RELENBQUMsQ0FBQztZQUVGLE9BQU8sYUFBYSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUM7WUFDcEI7Ozs7OztlQU1HO1lBRUg7Ozs7Ozs7ZUFPRztZQUNILFNBQVMsYUFBYSxDQUFDLFVBQVU7Z0JBQy9CLElBQUksVUFBVTtvQkFDWixLQUFLLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7d0JBQ2xFLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUk7NEJBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQztZQUVEOzs7OztlQUtHO1lBQ0gsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUV0RDs7Ozs7ZUFLRztZQUNILGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFckQ7Ozs7Ozs7ZUFPRztZQUNILGFBQWEsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsVUFBVTtnQkFDL0MsT0FBTyxJQUFJLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7ZUFRRztZQUNILGFBQWEsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ3BELElBQUksQ0FBQyxNQUFNO29CQUFFLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3ZDLElBQ0UsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJO29CQUN2QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO29CQUU5QyxNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25FLElBQ0UsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJO29CQUN0QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO29CQUU3QyxNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xFLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUMsQ0FBQztZQUVGOzs7Ozs7OztlQVFHO1lBQ0gsYUFBYSxDQUFDLGVBQWUsR0FBRyxTQUFTLGVBQWUsQ0FDdEQsT0FBTyxFQUNQLE1BQU07Z0JBRU4sT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMvQyxDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7OztlQVVHO1lBQ0gsYUFBYSxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTTtnQkFDbkQsSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLE9BQU8sQ0FBQztvQkFBRSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEUsSUFBSSxHQUFHLEdBQUcsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLEVBQy9ELE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNsRCxPQUFPLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7b0JBQ3hCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDMUIsUUFBUSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7d0JBQ2xCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDUCxPQUFPLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDakMsTUFBTTt3QkFDUixDQUFDO3dCQUNELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDUCxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDaEMsTUFBTTt3QkFDUixDQUFDO3dCQUNEOzRCQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUN6QixNQUFNO29CQUNWLENBQUM7Z0JBQ0gsQ0FBQztnQkFDRCxPQUFPLE9BQU8sQ0FBQztZQUNqQixDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7O2VBU0c7WUFDSCxhQUFhLENBQUMsZUFBZSxHQUFHLFNBQVMsZUFBZSxDQUFDLE1BQU07Z0JBQzdELElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxPQUFPLENBQUM7b0JBQUUsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMvRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQztZQUVGOzs7Ozs7O2VBT0c7WUFDSCxhQUFhLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLE9BQU87Z0JBQzVDLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxJQUFJLE9BQU8sS0FBSyxJQUFJO29CQUNqRCxPQUFPLGlCQUFpQixDQUFDO2dCQUMzQixJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO29CQUM5RCxJQUNFLENBQUMsQ0FDQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUM7d0JBQy9ELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUNoQzt3QkFFRCxPQUFPLDBCQUEwQixDQUFDO2dCQUN0QyxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO29CQUM1RCxJQUNFLENBQUMsQ0FDQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUM7d0JBQzdELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUMvQjt3QkFFRCxPQUFPLHlCQUF5QixDQUFDO2dCQUNyQyxPQUFPLElBQUksQ0FBQztZQUNkLENBQUMsQ0FBQztZQUVGOzs7Ozs7O2VBT0c7WUFDSCxhQUFhLENBQUMsVUFBVSxHQUFHLFNBQVMsVUFBVSxDQUFDLE1BQU07Z0JBQ25ELElBQUksTUFBTSxZQUFZLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWE7b0JBQUUsT0FBTyxNQUFNLENBQUM7Z0JBQ3JFLElBQUksT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3BELElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJO29CQUN4QixJQUFJLE9BQU8sTUFBTSxDQUFDLE9BQU8sS0FBSyxRQUFRO3dCQUNwQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDakIsTUFBTSxDQUFDLE9BQU8sRUFDZCxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FDaEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNwQyxDQUFDLEVBQ0YsQ0FBQyxDQUNGLENBQUM7eUJBQ0MsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDO3dCQUFFLE9BQU8sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDeEUsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUk7b0JBQ3ZCLElBQUksT0FBTyxNQUFNLENBQUMsTUFBTSxLQUFLLFFBQVE7d0JBQ25DLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUNqQixNQUFNLENBQUMsTUFBTSxFQUNiLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUMvQixLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQ25DLENBQUMsRUFDRixDQUFDLENBQ0YsQ0FBQzt5QkFDQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUM7d0JBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNyRSxPQUFPLE9BQU8sQ0FBQztZQUNqQixDQUFDLENBQUM7WUFFRjs7Ozs7Ozs7ZUFRRztZQUNILGFBQWEsQ0FBQyxRQUFRLEdBQUcsU0FBUyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU87Z0JBQ3pELElBQUksQ0FBQyxPQUFPO29CQUFFLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQzNCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDaEIsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3JCLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNO3dCQUFFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO3lCQUM3QyxDQUFDO3dCQUNKLE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO3dCQUNwQixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSzs0QkFDekIsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDckQsQ0FBQztvQkFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTTt3QkFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzt5QkFDNUMsQ0FBQzt3QkFDSixNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzt3QkFDbkIsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7NEJBQ3pCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ25ELENBQUM7Z0JBQ0gsQ0FBQztnQkFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO29CQUM5RCxNQUFNLENBQUMsT0FBTzt3QkFDWixPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU07NEJBQ3RCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzs0QkFDakUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSztnQ0FDdkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2dDQUM3QyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDMUIsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztvQkFDNUQsTUFBTSxDQUFDLE1BQU07d0JBQ1gsT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNOzRCQUN0QixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7NEJBQy9ELENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7Z0NBQ3ZCLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQ0FDNUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQ3pCLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUMsQ0FBQztZQUVGOzs7Ozs7ZUFNRztZQUNILGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTTtnQkFDOUMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN2RSxDQUFDLENBQUM7WUFFRjs7Ozs7OztlQU9HO1lBQ0gsYUFBYSxDQUFDLFVBQVUsR0FBRyxTQUFTLFVBQVUsQ0FBQyxhQUFhO2dCQUMxRCxJQUFJLGFBQWEsS0FBSyxTQUFTLEVBQUUsQ0FBQztvQkFDaEMsYUFBYSxHQUFHLHFCQUFxQixDQUFDO2dCQUN4QyxDQUFDO2dCQUNELE9BQU8sYUFBYSxHQUFHLDRCQUE0QixDQUFDO1lBQ3RELENBQUMsQ0FBQztZQUVGLE9BQU8sYUFBYSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7WUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFvQkc7WUFFSDs7Ozs7OztlQU9HO1lBQ0gsU0FBUyxLQUFLLENBQUMsVUFBVTtnQkFDdkIsSUFBSSxVQUFVO29CQUNaLEtBQUssSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzt3QkFDbEUsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSTs0QkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDO1lBRUQ7Ozs7O2VBS0c7WUFDSCxLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRWhEOzs7OztlQUtHO1lBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBRXJDOzs7OztlQUtHO1lBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBRXRDOzs7OztlQUtHO1lBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBRWxDOzs7OztlQUtHO1lBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBRWxDOzs7OztlQUtHO1lBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBRWpDOzs7OztlQUtHO1lBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBRWhDOzs7OztlQUtHO1lBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBRXJDOzs7OztlQUtHO1lBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBRWpDOzs7OztlQUtHO1lBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBRWpDOzs7OztlQUtHO1lBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBRWxDOzs7OztlQUtHO1lBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBRWxDOzs7OztlQUtHO1lBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBRXJDOzs7OztlQUtHO1lBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBRXJDOzs7OztlQUtHO1lBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBRW5DOzs7OztlQUtHO1lBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBRWxDLHlEQUF5RDtZQUN6RCxJQUFJLFlBQVksQ0FBQztZQUVqQjs7Ozs7ZUFLRztZQUNILE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUU7Z0JBQzlDLEdBQUcsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUNwQixDQUFDLFlBQVksR0FBRztvQkFDZCxlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsWUFBWTtvQkFDWixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsVUFBVTtvQkFDVixlQUFlO29CQUNmLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsWUFBWTtpQkFDYixDQUFDLENBQ0g7Z0JBQ0QsR0FBRyxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO2FBQ3JDLENBQUMsQ0FBQztZQUVIOzs7Ozs7O2VBT0c7WUFDSCxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLFVBQVU7Z0JBQ3ZDLE9BQU8sSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDO1lBRUY7Ozs7Ozs7O2VBUUc7WUFDSCxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUM1QyxJQUFJLENBQUMsTUFBTTtvQkFBRSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN2QyxJQUNFLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSTtvQkFDekIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztvQkFFaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNyRSxJQUNFLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSTtvQkFDN0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQztvQkFFcEQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FDcEMsT0FBTyxDQUFDLGFBQWEsRUFDckIsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FDakQsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDYixJQUNFLE9BQU8sQ0FBQyxjQUFjLElBQUksSUFBSTtvQkFDOUIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDO29CQUVyRCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUNyQyxPQUFPLENBQUMsY0FBYyxFQUN0QixNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUNqRCxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNiLElBQ0UsT0FBTyxDQUFDLFVBQVUsSUFBSSxJQUFJO29CQUMxQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO29CQUVqRCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUNqQyxPQUFPLENBQUMsVUFBVSxFQUNsQixNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUNqRCxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNiLElBQ0UsT0FBTyxDQUFDLFVBQVUsSUFBSSxJQUFJO29CQUMxQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO29CQUVqRCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUNqQyxPQUFPLENBQUMsVUFBVSxFQUNsQixNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUNqRCxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNiLElBQ0UsT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJO29CQUN6QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO29CQUVoRCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUNoQyxPQUFPLENBQUMsU0FBUyxFQUNqQixNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUNqRCxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNiLElBQ0UsT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJO29CQUN4QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO29CQUUvQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUMvQixPQUFPLENBQUMsUUFBUSxFQUNoQixNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUNqRCxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNiLElBQ0UsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJO29CQUM3QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDO29CQUVwRCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUNwQyxPQUFPLENBQUMsYUFBYSxFQUNyQixNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUNqRCxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNiLElBQ0UsT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJO29CQUN6QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO29CQUVoRCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUNoQyxPQUFPLENBQUMsU0FBUyxFQUNqQixNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUNqRCxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNiLElBQ0UsT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJO29CQUN6QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO29CQUVoRCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUNoQyxPQUFPLENBQUMsU0FBUyxFQUNqQixNQUFNLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUNsRCxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNiLElBQ0UsT0FBTyxDQUFDLFVBQVUsSUFBSSxJQUFJO29CQUMxQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO29CQUVqRCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUNqQyxPQUFPLENBQUMsVUFBVSxFQUNsQixNQUFNLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUNsRCxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNiLElBQ0UsT0FBTyxDQUFDLFVBQVUsSUFBSSxJQUFJO29CQUMxQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO29CQUVqRCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUNqQyxPQUFPLENBQUMsVUFBVSxFQUNsQixNQUFNLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUNsRCxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNiLElBQ0UsT0FBTyxDQUFDLFdBQVcsSUFBSSxJQUFJO29CQUMzQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDO29CQUVsRCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUNsQyxPQUFPLENBQUMsV0FBVyxFQUNuQixNQUFNLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUNuRCxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNiLElBQ0UsT0FBTyxDQUFDLFVBQVUsSUFBSSxJQUFJO29CQUMxQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO29CQUVqRCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUNqQyxPQUFPLENBQUMsVUFBVSxFQUNsQixNQUFNLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUNuRCxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNiLElBQ0UsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJ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QUFPLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQ3RELE1BQU0sRUFDTixNQUFNLENBQUMsTUFBTSxFQUFFLENBQ2hCLENBQUM7NEJBQ0YsTUFBTTt3QkFDUixDQUFDO3dCQUNELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDUCxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQ3BELE1BQU0sRUFDTixNQUFNLENBQUMsTUFBTSxFQUFFLENBQ2hCLENBQUM7NEJBQ0YsTUFBTTt3QkFDUixDQUFDO3dCQUNELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDUCxPQUFPLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQ2xELE1BQU0sRUFDTixNQUFNLENBQUMsTUFBTSxFQUFFLENBQ2hCLENBQUM7NEJBQ0YsTUFBTTt3QkFDUixDQUFDO3dCQUNELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDUCxPQUFPLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQzVELE1BQU0sRUFDTixNQUFNLENBQUMsTUFBTSxFQUFFLENBQ2hCLENBQUM7NEJBQ0YsTUFBTTt3QkFDUixDQUFDO3dCQUNELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDUCxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQ3BELE1BQU0sRUFDTixNQUFNLENBQUMsTUFBTSxFQUFFLENBQ2hCLENBQUM7NEJBQ0YsTUFBTTt3QkFDUixDQUFDO3dCQUNELEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDUixPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQ3BELE1BQU0sRUFDTixNQUFNLENBQUMsTUFBTSxFQUFFLENBQ2hCLENBQUM7NEJBQ0YsTUFBTTt3QkFDUixDQUFDO3dCQUNELEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDUixPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQ3RELE1BQU0sRUFDTixNQUFNLENBQUMsTUFBTSxFQUFFLENBQ2hCLENBQUM7NEJBQ0YsTUFBTTt3QkFDUixDQUFDO3dCQUNELEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDUixPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQ3RELE1BQU0sRUFDTixNQUFNLENBQUMsTUFBTSxFQUFFLENBQ2hCLENBQUM7NEJBQ0YsTUFBTTt3QkFDUixDQUFDO3dCQUNELEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDUixPQUFPLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQzVELE1BQU0sRUFDTixNQUFNLENBQUMsTUFBTSxFQUFFLENBQ2hCLENBQUM7NEJBQ0YsTUFBTTt3QkFDUixDQUFDO3dCQUNELEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDUixPQUFPLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQzVELE1BQU0sRUFDTixNQUFNLENBQUMsTUFBTSxFQUFFLENBQ2hCLENBQUM7NEJBQ0YsTUFBTTt3QkFDUixDQUFDO3dCQUNELEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDUixPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQ3hELE1BQU0sRUFDTixNQUFNLENBQUMs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