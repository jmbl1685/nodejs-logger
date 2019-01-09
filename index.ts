import * as mongoose from "mongoose";
import { IConfig, NameLogHandle } from "./helpers";

let _model: any = {};

export default (config: IConfig) => {
  (function Connection() {
    mongoose.set("useCreateIndex", true);
    mongoose.set("useNewUrlParser", true);
    mongoose
      .connect(
        config.host,
        { useNewUrlParser: true }
      )
      .catch(err => console.log(err));
  })();

  (function LoggerDefinition() {
    const log = new mongoose.Schema(
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
    );
    _model = mongoose.model(NameLogHandle(config.logname), log);
  })();

  return function logger(data: any) {
    return _model.insertMany({ info: data });
  };
};
