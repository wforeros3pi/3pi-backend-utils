declare class ApiError {
    code: number;
    message: string;
    metadata: any;
    constructor(code: number, message: string, metadata?: any);
}
export { ApiError };
