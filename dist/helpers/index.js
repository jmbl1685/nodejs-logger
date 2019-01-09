"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameLogHandle = function (name) {
    return name === undefined || null || name.trim() === "" ? "logs" : name;
};
