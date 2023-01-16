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
const errors = __importStar(require("@common/dto/enums/errors_enums"));
const httpUtils = __importStar(require("@http/interface_adapters/http_repo"));
// import * as mongo from '@fnd/storage/mongo/client';
const axios_implementation_1 = require("@fnd/storage/axios/axios_implementation");
const createInstance = () => {
    const common = {
        errors
    };
    const http = {
        AxiosImplementation: axios_implementation_1.AxiosImplementation,
        utils: httpUtils
    };
    const externalInterfaces = {
        http
        // mongo
    };
    return { common, externalInterfaces, http };
};
const trespiUtils = createInstance();
// const axios = new trespiUtils.http.AxiosImplementation('');
exports.default = trespiUtils;
