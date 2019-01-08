export interface IConfig {
  host: string,
  logname?: string
}

export const NameLogHandle = (name: any) =>
  (name == null || name == undefined || name.trim() == "") ? "logs" : name;