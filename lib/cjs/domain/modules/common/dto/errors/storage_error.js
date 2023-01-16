"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageError = void 0;
const errors_enums_1 = require("../enums/errors_enums");
const base_error_1 = require("./base_error");
class StorageError extends base_error_1.BaseError {
    constructor(metatada) {
        super('Storage error', errors_enums_1.ErrorsEnum.STORAGE_EXCEPTION, errors_enums_1.HTTPCodesEnum.BAD_REQUEST, metatada);
    }
}
exports.StorageError = StorageError;
