"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
class ApiResponse {
    constructor(status, result) {
        this.result = result;
        this.status = status || 200;
    }
}
exports.ApiResponse = ApiResponse;
