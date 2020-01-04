import { connect, model, Schema } from 'mongoose'
import { IConfig, nameLogHandler } from './helpers'

let loggerModel: any = {}

export default (config: IConfig) => {
  ;(async function Connection() {
    try {
      await connect(config.host, mongooseSettings())
    } catch (err) {
      /* tslint:disable-next-line no-console */
      console.log('Connection [error]: ', err.message)
    }
  })()

  ;(function LoggerDefinition() {
    const log = new Schema(
      {
        createdAt: {
          type: Date,
          default: Date.now()
        },
        info: {
          type: Object
        }
      },
      { versionKey: false }
    )
    loggerModel = model(nameLogHandler(config.logname), log)
  })()

  return function logger(data: any) {
    return loggerModel.insertMany({ info: data })
  }
}

const mongooseSettings = () => {
  const settings = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  }
  return settings
}
