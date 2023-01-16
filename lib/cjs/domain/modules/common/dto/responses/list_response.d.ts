declare class ListResponse<T = any> {
    items: T[];
    total: number;
    constructor(items: T[], total: number);
}
export { ListResponse };
