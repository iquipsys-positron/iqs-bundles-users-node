import { CompositeFactory } from 'pip-services3-components-node';
import { DefaultContainerFactory } from 'pip-services3-container-node';

import { ActivitiesClientFactory } from 'pip-clients-activities-node';
import { RolesClientFactory } from 'pip-clients-roles-node';
import { PasswordsClientFactory } from 'pip-clients-passwords-node';
import { AccountsClientFactory } from 'pip-clients-accounts-node';
import { SessionsClientFactory } from 'pip-clients-sessions-node';
import { MessageDistributionClientFactory } from 'pip-clients-msgdistribution-node';
import { SmsSettingsClientFactory } from 'pip-clients-smssettings-node';
import { EmailSettingsClientFactory } from 'pip-clients-emailsettings-node';

import { MessageTemplatesClientFactory } from 'pip-clients-msgtemplates-node';

import { EmailClientFactory } from 'pip-clients-email-node';
import { SmsClientFactory } from 'pip-clients-sms-node';


export class UsersBundleClientsFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new ActivitiesClientFactory);
        this.add(new RolesClientFactory);
        this.add(new PasswordsClientFactory);
        this.add(new AccountsClientFactory);
        this.add(new SessionsClientFactory);
        this.add(new MessageDistributionClientFactory);
        this.add(new SmsSettingsClientFactory);
        this.add(new EmailSettingsClientFactory);

        this.add(new MessageTemplatesClientFactory);

        this.add(new EmailClientFactory);
        this.add(new SmsClientFactory);

    }

}
