interface IConfig {
    host: string;
    logname?: string;
}
declare const _default: (config: IConfig) => (data: any) => any;
export default _default;
