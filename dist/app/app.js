"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApplication = void 0;
const klayr_sdk_1 = require("klayr-sdk");
const modules_1 = require("./modules");
const plugins_1 = require("./plugins");
const getApplication = (config) => {
    const { app } = klayr_sdk_1.Application.defaultApplication(config);
    (0, modules_1.registerModules)(app);
    (0, plugins_1.registerPlugins)(app);
    return app;
};
exports.getApplication = getApplication;
//# sourceMappingURL=app.js.map