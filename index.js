'use strict'

const mongoose = require('mongoose');
let model = {};

const NameLogHandle = (name) =>
  (name == null || name == undefined || name.trim() == "") ? "logs" : name;

module.exports = (config) => {

  (
    function Connection() {
      mongoose.Promise = global.Promise;
      mongoose.set('useCreateIndex', true);
      mongoose.set('useNewUrlParser', true);
      mongoose.connect(config.host, { useNewUrlParser: true })
        .catch(err => console.log(err));
    }
  )();

  (
    function LoggerDefinition() {
      const log = mongoose.Schema({
        createdAt: {
          type: Date,
          default: Date.now()
        },
        info: {
          type: Object
        }
      }, { versionKey: false });

      model = mongoose.model(NameLogHandle(config.logname), log);
    }
  )();

  return function logger(data) {
    return model.insertMany({ info: data })
  }
}