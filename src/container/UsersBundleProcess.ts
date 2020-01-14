import { IReferences } from 'pip-services3-commons-node';
import { ProcessContainer } from 'pip-services3-container-node';
import { DefaultRpcFactory } from 'pip-services3-rpc-node';
import { DefaultAwsFactory } from 'pip-services3-aws-node';

import { UsersBundleServicesFactory } from '../build/UsersBundleServicesFactory';
import { UsersBundleClientsFactory } from '../build/UsersBundleClientsFactory';

export class UsersBundleProcess extends ProcessContainer {

    public constructor() {
        super("usersbundle", "Users bundle for iQuipsys Positron");
        this._factories.add(new UsersBundleServicesFactory);
        this._factories.add(new UsersBundleClientsFactory);
        this._factories.add(new DefaultRpcFactory);
        this._factories.add(new DefaultAwsFactory);
    }

}
