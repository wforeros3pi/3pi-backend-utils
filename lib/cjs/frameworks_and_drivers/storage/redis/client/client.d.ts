import redis from 'redis';
export declare const state: {
    clients: Map<any, any>;
};
export declare const connect: (clientKey: string, port: number, host: string, redisPassword?: string) => redis.RedisClient;
