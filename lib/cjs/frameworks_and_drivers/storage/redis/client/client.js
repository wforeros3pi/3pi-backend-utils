"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = exports.state = void 0;
const promisify_1 = __importDefault(require("@fnd/external_interfaces/promisify"));
const redis_1 = __importDefault(require("redis"));
const logger_1 = __importDefault(require("@fnd/external_interfaces/logger"));
(0, promisify_1.default)(redis_1.default.RedisClient.prototype);
(0, promisify_1.default)(redis_1.default.Multi.prototype);
const Logger = (0, logger_1.default)(__filename);
exports.state = {
    clients: new Map()
};
const connect = (clientKey, port, host, redisPassword) => {
    const client = createClient(port, host, clientKey, redisPassword);
    exports.state.clients.set(clientKey, client);
    return client;
};
exports.connect = connect;
/**
 *
 * @param {number} port
 * @param {string} host
 */
const createClient = (port, host, key, redisPassword) => {
    const client = redis_1.default.createClient(port, host, {
        retry_strategy: function (options) {
            if (options.error && options.error.code === 'ECONNREFUSED') {
                // End reconnecting on a specific error and flush all commands with
                // a individual error
                return new Error('The server refused the connection');
            }
            if (options.total_retry_time > 1000 * 60 * 60 * 24) {
                // End reconnecting after a specific timeout and flush all commands
                // with a individual error
                return new Error('Retry time exhausted');
            }
            if (options.attempt > Number.MAX_SAFE_INTEGER) {
                // End reconnecting with built in error
                return new Error('Retry attempts limit reached');
            }
            // reconnect after
            return 5000;
        },
        password: redisPassword
    });
    client.on('connect', () => Logger.debug(`Connected to redis :  ${host}:${port}`));
    client.on('reconnecting', () => Logger.debug('reconnecting to redis server'));
    client.on('error', (err) => Logger.debug(`error redis server ${err.message}`));
    client.on('end', () => Logger.debug('end close connection redis server'));
    client.on('warning', (w) => Logger.debug(`error redis server ${w}`));
    client.on('ready', () => Logger.debug(`client ready ${key}`));
    return client;
};
