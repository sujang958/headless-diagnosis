"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __importDefault(require("./browser"));
var diagnosis_1 = __importDefault(require("./diagnosis"));
var putStudentInfo_1 = __importDefault(require("./putStudentInfo"));
var selectSchool_1 = __importDefault(require("./selectSchool"));
exports.default = {
    createBrowser: browser_1.default,
    diagnosis: diagnosis_1.default,
    putSutdentInfo: putStudentInfo_1.default,
    selectSchool: selectSchool_1.default,
};
