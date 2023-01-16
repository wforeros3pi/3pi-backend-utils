"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseError = void 0;
const errors_enums_1 = require("../enums/errors_enums");
class BaseError extends Error {
    constructor(message, code, status, metadata) {
        super(message || 'Default error');
        this.error = this.message;
        this.code = code || errors_enums_1.ErrorsEnum.UNDEFINED;
        this.status = status || errors_enums_1.HTTPCodesEnum.INTERNAL_SERVER_ERROR;
        this._stack = this.stack;
        this.metadata = metadata;
    }
}
exports.BaseError = BaseError;
