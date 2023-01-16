"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResourceNotFound = void 0;
const base_error_1 = require("./base_error");
const errors_enums_1 = require("../enums/errors_enums");
class ErrorResourceNotFound extends base_error_1.BaseError {
    constructor(message, metadata) {
        super(message, errors_enums_1.ErrorsEnum.HTTP_REQUEST, errors_enums_1.HTTPCodesEnum.RESOURCE_NOT_FOUND, metadata);
    }
}
exports.ErrorResourceNotFound = ErrorResourceNotFound;
