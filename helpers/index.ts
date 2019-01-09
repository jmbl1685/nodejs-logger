export interface IConfig {
  host: string;
  logname?: string;
}

export const NameLogHandle = (name: any) =>
  name === undefined || null || name.trim() === "" ? "logs" : name;
