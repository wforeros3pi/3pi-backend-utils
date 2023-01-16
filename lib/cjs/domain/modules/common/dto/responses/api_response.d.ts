declare class ApiResponse<T = any> {
    status: number;
    result: T;
    constructor(status: number, result: T);
}
export { ApiResponse };
