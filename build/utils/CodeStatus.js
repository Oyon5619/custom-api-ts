"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CodeStatus;
(function (CodeStatus) {
    CodeStatus[CodeStatus["OK"] = 200] = "OK";
    CodeStatus[CodeStatus["FAILED"] = 300] = "FAILED";
    CodeStatus[CodeStatus["TOKEN_INVALID"] = 400] = "TOKEN_INVALID";
    CodeStatus[CodeStatus["CUSTOM_ERROR"] = 500] = "CUSTOM_ERROR";
})(CodeStatus || (CodeStatus = {}));
exports.default = CodeStatus;
