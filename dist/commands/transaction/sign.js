"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignCommand = void 0;
const klayr_commander_1 = require("klayr-commander");
const app_1 = require("../../app/app");
class SignCommand extends klayr_commander_1.TransactionSignCommand {
    getApplication(config) {
        const app = (0, app_1.getApplication)(config);
        return app;
    }
}
SignCommand.flags = {
    ...klayr_commander_1.TransactionSignCommand.flags,
};
SignCommand.args = [...klayr_commander_1.TransactionSignCommand.args];
exports.SignCommand = SignCommand;
//# sourceMappingURL=sign.js.map