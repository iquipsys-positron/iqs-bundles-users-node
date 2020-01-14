import { CompositeFactory } from 'pip-services3-components-node';
import { DefaultContainerFactory } from 'pip-services3-container-node';

import { ActivitiesServiceFactory } from 'pip-services-activities-node';
import { RolesServiceFactory } from 'pip-services-roles-node';
import { PasswordsServiceFactory } from 'pip-services-passwords-node';
import { AccountsServiceFactory } from 'pip-services-accounts-node';
import { SessionsServiceFactory } from 'pip-services-sessions-node';
import { MessageDistributionServiceFactory } from 'pip-services-msgdistribution-node';
import { SmsSettingsServiceFactory } from 'pip-services-smssettings-node';
import { EmailSettingsServiceFactory } from 'pip-services-emailsettings-node';


export class UsersBundleServicesFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new ActivitiesServiceFactory);
        this.add(new RolesServiceFactory);
        this.add(new PasswordsServiceFactory);
        this.add(new AccountsServiceFactory);
        this.add(new SessionsServiceFactory);
        this.add(new MessageDistributionServiceFactory);
        this.add(new SmsSettingsServiceFactory);
        this.add(new EmailSettingsServiceFactory);

    }

}
