export interface IConfig {
  host: string
  logname?: string
}

export const nameLogHandler = (name: any) =>
  name === undefined || null || name.trim() === '' ? 'logs' : name
