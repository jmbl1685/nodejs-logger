"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const helpers_1 = require("./helpers");
let loggerModel = {};
exports.default = (config) => {
    ;
    (function Connection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield mongoose_1.connect(config.host, mongooseSettings());
            }
            catch (err) {
                /* tslint:disable-next-line no-console */
                console.log('Connection [error]: ', err.message);
            }
        });
    })();
    (function LoggerDefinition() {
        const log = new mongoose_1.Schema({
            createdAt: {
                type: Date,
                default: Date.now()
            },
            info: {
                type: Object
            }
        }, { versionKey: false });
        loggerModel = mongoose_1.model(helpers_1.nameLogHandler(config.logname), log);
    })();
    return function logger(data) {
        return loggerModel.insertMany({ info: data });
    };
};
const mongooseSettings = () => {
    const settings = {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    };
    return settings;
};
//# sourceMappingURL=index.js.map