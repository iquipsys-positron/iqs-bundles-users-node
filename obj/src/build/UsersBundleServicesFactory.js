"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_services_activities_node_1 = require("pip-services-activities-node");
const pip_services_roles_node_1 = require("pip-services-roles-node");
const pip_services_passwords_node_1 = require("pip-services-passwords-node");
const pip_services_accounts_node_1 = require("pip-services-accounts-node");
const pip_services_sessions_node_1 = require("pip-services-sessions-node");
const pip_services_msgdistribution_node_1 = require("pip-services-msgdistribution-node");
const pip_services_smssettings_node_1 = require("pip-services-smssettings-node");
const pip_services_emailsettings_node_1 = require("pip-services-emailsettings-node");
class UsersBundleServicesFactory extends pip_services3_container_node_1.DefaultContainerFactory {
    constructor() {
        super();
        this.add(new pip_services_activities_node_1.ActivitiesServiceFactory);
        this.add(new pip_services_roles_node_1.RolesServiceFactory);
        this.add(new pip_services_passwords_node_1.PasswordsServiceFactory);
        this.add(new pip_services_accounts_node_1.AccountsServiceFactory);
        this.add(new pip_services_sessions_node_1.SessionsServiceFactory);
        this.add(new pip_services_msgdistribution_node_1.MessageDistributionServiceFactory);
        this.add(new pip_services_smssettings_node_1.SmsSettingsServiceFactory);
        this.add(new pip_services_emailsettings_node_1.EmailSettingsServiceFactory);
    }
}
exports.UsersBundleServicesFactory = UsersBundleServicesFactory;
//# sourceMappingURL=UsersBundleServicesFactory.js.map