"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
const path_1 = __importDefault(require("path"));
const env = process.env.NODE_ENV || 'development';
const LOG_LEVEL = env === 'development' ? 'debug' : 'warn';
const NAMESPACE_ROOT = process.env.NAMESPACE_ROOT !== undefined
    ? process.env.NAMESPACE_ROOT.replace(':*', '')
    : 'src:*'.replace(':*', '');
const init = (absoluteFilePath = '') => {
    if (absoluteFilePath === '') {
        return (0, pino_1.default)({ name: NAMESPACE_ROOT, level: LOG_LEVEL });
    }
    else {
        return (0, pino_1.default)({
            name: `${NAMESPACE_ROOT}:${path_1.default
                .relative(__dirname, absoluteFilePath)
                .replace(/.js/gi, '')
                .replace(/.ts/gi, '')
                .replace(/\//g, ':')
                .replace(/\.\.:/g, '')}`,
            level: LOG_LEVEL
        });
    }
};
exports.default = init;
