"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
exports.dateStringToDate = (dateString) => {
    const splitedDate = dateString
        .split("/")
        .map((value) => {
        return parseInt(value);
    });
    return new Date(splitedDate[2], splitedDate[1] - 1, splitedDate[0]);
};
