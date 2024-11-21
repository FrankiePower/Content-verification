"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerModules = void 0;
const module_1 = require("./modules/content_verifier/module");
const registerModules = (app) => {
    app.registerModule(new module_1.ContentVerifierModule());
};
exports.registerModules = registerModules;
//# sourceMappingURL=modules.js.map