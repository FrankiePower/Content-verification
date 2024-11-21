"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommand = void 0;
const klayr_commander_1 = require("klayr-commander");
const app_1 = require("../../app/app");
class CreateCommand extends klayr_commander_1.TransactionCreateCommand {
    getApplication(config) {
        const app = (0, app_1.getApplication)(config);
        return app;
    }
}
CreateCommand.flags = {
    ...klayr_commander_1.TransactionCreateCommand.flags,
};
CreateCommand.args = [...klayr_commander_1.TransactionCreateCommand.args];
exports.CreateCommand = CreateCommand;
//# sourceMappingURL=create.js.map