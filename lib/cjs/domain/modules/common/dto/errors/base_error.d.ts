export declare class BaseError extends Error {
    code: number;
    status: number;
    _stack: any;
    error: string;
    metadata: any;
    constructor(message: string, code: number, status?: number, metadata?: any);
}
