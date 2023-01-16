"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPCodesEnum = exports.ErrorsEnum = void 0;
/* eslint-disable no-unused-vars */
var ErrorsEnum;
(function (ErrorsEnum) {
    ErrorsEnum[ErrorsEnum["UNDEFINED"] = 1] = "UNDEFINED";
    ErrorsEnum[ErrorsEnum["UNHANDLED"] = 100] = "UNHANDLED";
    ErrorsEnum[ErrorsEnum["HTTP_REQUEST"] = 200] = "HTTP_REQUEST";
    ErrorsEnum[ErrorsEnum["DOMAIN_ENTITY_VALIDATION"] = 300] = "DOMAIN_ENTITY_VALIDATION";
    ErrorsEnum[ErrorsEnum["DOMAIN_RULE_EXCEPTION"] = 400] = "DOMAIN_RULE_EXCEPTION";
    ErrorsEnum[ErrorsEnum["STORAGE_EXCEPTION"] = 500] = "STORAGE_EXCEPTION";
    ErrorsEnum[ErrorsEnum["DOMAIN_EVENTS_VALIDATION_EXCEPTION"] = 600] = "DOMAIN_EVENTS_VALIDATION_EXCEPTION";
})(ErrorsEnum = exports.ErrorsEnum || (exports.ErrorsEnum = {}));
var HTTPCodesEnum;
(function (HTTPCodesEnum) {
    HTTPCodesEnum[HTTPCodesEnum["SUCCESSFUL"] = 200] = "SUCCESSFUL";
    HTTPCodesEnum[HTTPCodesEnum["CREATED"] = 201] = "CREATED";
    HTTPCodesEnum[HTTPCodesEnum["NOT_CONTENT"] = 204] = "NOT_CONTENT";
    HTTPCodesEnum[HTTPCodesEnum["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HTTPCodesEnum[HTTPCodesEnum["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HTTPCodesEnum[HTTPCodesEnum["UNAUTHORIZED"] = 403] = "UNAUTHORIZED";
    HTTPCodesEnum[HTTPCodesEnum["RESOURCE_NOT_FOUND"] = 404] = "RESOURCE_NOT_FOUND";
    HTTPCodesEnum[HTTPCodesEnum["FORBIDDEN"] = 401] = "FORBIDDEN";
})(HTTPCodesEnum = exports.HTTPCodesEnum || (exports.HTTPCodesEnum = {}));
