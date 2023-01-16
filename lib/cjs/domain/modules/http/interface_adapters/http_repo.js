"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRepository = void 0;
class HttpRepository {
    constructor(impl) {
        this.implementation = impl;
    }
    get(url, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.implementation.get(url, options);
        });
    }
    post(url, body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.implementation.post(url, body, options);
        });
    }
    put(url, body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.implementation.put(url, body, options);
        });
    }
    delete(url, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.implementation.delete(url, options);
        });
    }
}
exports.HttpRepository = HttpRepository;
