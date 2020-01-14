"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
const UsersBundleServicesFactory_1 = require("../build/UsersBundleServicesFactory");
const UsersBundleClientsFactory_1 = require("../build/UsersBundleClientsFactory");
class UsersBundleProcess extends pip_services3_container_node_1.ProcessContainer {
    constructor() {
        super("usersbundle", "Users bundle for iQuipsys Positron");
        this._factories.add(new UsersBundleServicesFactory_1.UsersBundleServicesFactory);
        this._factories.add(new UsersBundleClientsFactory_1.UsersBundleClientsFactory);
        this._factories.add(new pip_services3_rpc_node_1.DefaultRpcFactory);
        this._factories.add(new pip_services3_aws_node_1.DefaultAwsFactory);
    }
}
exports.UsersBundleProcess = UsersBundleProcess;
//# sourceMappingURL=UsersBundleProcess.js.map