"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var _model = {};
var NameLogHandle = function (name) {
    return (name == null || name == undefined || name.trim() == "") ? "logs" : name;
};
exports.default = (function (config) {
    (function Connection() {
        mongoose.set('useCreateIndex', true);
        mongoose.set('useNewUrlParser', true);
        mongoose.connect(config.host, { useNewUrlParser: true })
            .catch(function (err) { return console.log(err); });
    })();
    (function LoggerDefinition() {
        var log = new mongoose.Schema({
            createdAt: {
                type: Date,
                default: Date.now()
            },
            info: {
                type: Object
            }
        }, { versionKey: false });
        _model = mongoose.model(NameLogHandle(config.logname), log);
    })();
    return function logger(data) {
        return _model.insertMany({ info: data });
    };
});
