"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_clients_activities_node_1 = require("pip-clients-activities-node");
const pip_clients_roles_node_1 = require("pip-clients-roles-node");
const pip_clients_passwords_node_1 = require("pip-clients-passwords-node");
const pip_clients_accounts_node_1 = require("pip-clients-accounts-node");
const pip_clients_sessions_node_1 = require("pip-clients-sessions-node");
const pip_clients_msgdistribution_node_1 = require("pip-clients-msgdistribution-node");
const pip_clients_smssettings_node_1 = require("pip-clients-smssettings-node");
const pip_clients_emailsettings_node_1 = require("pip-clients-emailsettings-node");
const pip_clients_msgtemplates_node_1 = require("pip-clients-msgtemplates-node");
const pip_clients_email_node_1 = require("pip-clients-email-node");
const pip_clients_sms_node_1 = require("pip-clients-sms-node");
class UsersBundleClientsFactory extends pip_services3_container_node_1.DefaultContainerFactory {
    constructor() {
        super();
        this.add(new pip_clients_activities_node_1.ActivitiesClientFactory);
        this.add(new pip_clients_roles_node_1.RolesClientFactory);
        this.add(new pip_clients_passwords_node_1.PasswordsClientFactory);
        this.add(new pip_clients_accounts_node_1.AccountsClientFactory);
        this.add(new pip_clients_sessions_node_1.SessionsClientFactory);
        this.add(new pip_clients_msgdistribution_node_1.MessageDistributionClientFactory);
        this.add(new pip_clients_smssettings_node_1.SmsSettingsClientFactory);
        this.add(new pip_clients_emailsettings_node_1.EmailSettingsClientFactory);
        this.add(new pip_clients_msgtemplates_node_1.MessageTemplatesClientFactory);
        this.add(new pip_clients_email_node_1.EmailClientFactory);
        this.add(new pip_clients_sms_node_1.SmsClientFactory);
    }
}
exports.UsersBundleClientsFactory = UsersBundleClientsFactory;
//# sourceMappingURL=UsersBundleClientsFactory.js.map