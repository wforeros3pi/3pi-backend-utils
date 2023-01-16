"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
const errors_enums_1 = require("../enums/errors_enums");
class ApiError {
    constructor(code, message, metadata) {
        this.code = code || errors_enums_1.ErrorsEnum.UNDEFINED;
        this.message = message || 'Internal server error';
        this.metadata = metadata;
    }
}
exports.ApiError = ApiError;
