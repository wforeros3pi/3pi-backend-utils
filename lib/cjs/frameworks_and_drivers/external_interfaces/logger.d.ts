import { Logger } from 'pino';
export type LoggerFn = (absoluteFilePath?: string) => Logger;
declare const init: LoggerFn;
export default init;
