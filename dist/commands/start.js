"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartCommand = void 0;
const core_1 = require("@oclif/core");
const klayr_commander_1 = require("klayr-commander");
const generator_plugin_1 = require("@klayr/generator-plugin");
const monitor_plugin_1 = require("@klayr/monitor-plugin");
const report_misbehavior_plugin_1 = require("@klayr/report-misbehavior-plugin");
const dashboard_plugin_1 = require("@klayr/dashboard-plugin");
const faucet_plugin_1 = require("@klayr/faucet-plugin");
const chain_connector_plugin_1 = require("@klayr/chain-connector-plugin");
const path_1 = require("path");
const app_1 = require("../app/app");
const setPluginConfig = (config, flags) => {
    var _a, _b, _c, _d;
    if (flags['monitor-plugin-port'] !== undefined) {
        config.plugins[monitor_plugin_1.MonitorPlugin.name] = (_a = config.plugins[monitor_plugin_1.MonitorPlugin.name]) !== null && _a !== void 0 ? _a : {};
        config.plugins[monitor_plugin_1.MonitorPlugin.name].port = flags['monitor-plugin-port'];
    }
    if (flags['monitor-plugin-whitelist'] !== undefined &&
        typeof flags['monitor-plugin-whitelist'] === 'string') {
        config.plugins[monitor_plugin_1.MonitorPlugin.name] = (_b = config.plugins[monitor_plugin_1.MonitorPlugin.name]) !== null && _b !== void 0 ? _b : {};
        config.plugins[monitor_plugin_1.MonitorPlugin.name].whiteList = flags['monitor-plugin-whitelist']
            .split(',')
            .filter(Boolean);
    }
    if (flags['faucet-plugin-port'] !== undefined) {
        config.plugins[faucet_plugin_1.FaucetPlugin.name] = (_c = config.plugins[faucet_plugin_1.FaucetPlugin.name]) !== null && _c !== void 0 ? _c : {};
        config.plugins[faucet_plugin_1.FaucetPlugin.name].port = flags['faucet-plugin-port'];
    }
    if (flags['dashboard-plugin-port'] !== undefined) {
        config.plugins[dashboard_plugin_1.DashboardPlugin.name] = (_d = config.plugins[dashboard_plugin_1.DashboardPlugin.name]) !== null && _d !== void 0 ? _d : {};
        config.plugins[dashboard_plugin_1.DashboardPlugin.name].port = flags['dashboard-plugin-port'];
    }
};
class StartCommand extends klayr_commander_1.BaseStartCommand {
    async getApplication(config) {
        const { flags } = await this.parse(StartCommand);
        setPluginConfig(config, flags);
        const app = (0, app_1.getApplication)(config);
        if (flags['enable-forger-plugin']) {
            app.registerPlugin(new generator_plugin_1.ForgerPlugin(), { loadAsChildProcess: true });
        }
        if (flags['enable-monitor-plugin']) {
            app.registerPlugin(new monitor_plugin_1.MonitorPlugin(), { loadAsChildProcess: true });
        }
        if (flags['enable-report-misbehavior-plugin']) {
            app.registerPlugin(new report_misbehavior_plugin_1.ReportMisbehaviorPlugin(), { loadAsChildProcess: true });
        }
        if (flags['enable-faucet-plugin']) {
            app.registerPlugin(new faucet_plugin_1.FaucetPlugin(), { loadAsChildProcess: true });
        }
        if (flags['enable-dashboard-plugin']) {
            app.registerPlugin(new dashboard_plugin_1.DashboardPlugin(), { loadAsChildProcess: true });
        }
        if (flags['enable-chain-connector-plugin']) {
            app.registerPlugin(new chain_connector_plugin_1.ChainConnectorPlugin(), { loadAsChildProcess: true });
        }
        return app;
    }
    getApplicationConfigDir() {
        return (0, path_1.join)(__dirname, '../../config');
    }
}
StartCommand.flags = {
    ...klayr_commander_1.BaseStartCommand.flags,
    'enable-forger-plugin': core_1.Flags.boolean({
        description: 'Enable Forger Plugin. Environment variable "KLAYR_ENABLE_FORGER_PLUGIN" can also be used.',
        env: 'KLAYR_ENABLE_FORGER_PLUGIN',
        default: false,
    }),
    'enable-monitor-plugin': core_1.Flags.boolean({
        description: 'Enable Monitor Plugin. Environment variable "KLAYR_ENABLE_MONITOR_PLUGIN" can also be used.',
        env: 'KLAYR_ENABLE_MONITOR_PLUGIN',
        default: false,
    }),
    'monitor-plugin-port': core_1.Flags.integer({
        description: 'Port to be used for Monitor Plugin. Environment variable "KLAYR_MONITOR_PLUGIN_PORT" can also be used.',
        env: 'KLAYR_MONITOR_PLUGIN_PORT',
        dependsOn: ['enable-monitor-plugin'],
    }),
    'monitor-plugin-whitelist': core_1.Flags.string({
        description: 'List of IPs in comma separated value to allow the connection. Environment variable "KLAYR_MONITOR_PLUGIN_WHITELIST" can also be used.',
        env: 'KLAYR_MONITOR_PLUGIN_WHITELIST',
        dependsOn: ['enable-monitor-plugin'],
    }),
    'enable-report-misbehavior-plugin': core_1.Flags.boolean({
        description: 'Enable ReportMisbehavior Plugin. Environment variable "KLAYR_ENABLE_REPORT_MISBEHAVIOR_PLUGIN" can also be used.',
        env: 'KLAYR_ENABLE_MISBEHAVIOR_PLUGIN',
        default: false,
    }),
    'enable-faucet-plugin': core_1.Flags.boolean({
        description: 'Enable Faucet Plugin. Environment variable "KLAYR_ENABLE_FAUCET_PLUGIN" can also be used.',
        env: 'KLAYR_ENABLE_FAUCET_PLUGIN',
        default: false,
    }),
    'faucet-plugin-port': core_1.Flags.integer({
        description: 'Port to be used for Faucet Plugin. Environment variable "KLAYR_FAUCET_PLUGIN_PORT" can also be used.',
        env: 'KLAYR_FAUCET_PLUGIN_PORT',
        dependsOn: ['enable-faucet-plugin'],
    }),
    'enable-dashboard-plugin': core_1.Flags.boolean({
        description: 'Enable Dashboard Plugin. Environment variable "KLAYR_ENABLE_DASHBOARD_PLUGIN" can also be used.',
        env: 'KLAYR_ENABLE_DASHBOARD_PLUGIN',
        default: false,
    }),
    'dashboard-plugin-port': core_1.Flags.integer({
        description: 'Port to be used for Dashboard Plugin. Environment variable "KLAYR_DASHBOARD_PLUGIN_PORT" can also be used.',
        env: 'KLAYR_DASHBOARD_PLUGIN_PORT',
        dependsOn: ['enable-dashboard-plugin'],
    }),
    'enable-chain-connector-plugin': core_1.Flags.boolean({
        description: 'Enable ChainConnector Plugin. Environment variable "KLAYR_ENABLE_CHAIN_CONNECTOR_PLUGIN" can also be used.',
        env: 'KLAYR_ENABLE_CONNECTOR_PLUGIN',
        default: false,
    }),
};
exports.StartCommand = StartCommand;
//# sourceMappingURL=start.js.map