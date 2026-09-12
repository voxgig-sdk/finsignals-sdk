import { FinsignalsEntityBase } from '../FinsignalsEntityBase';
import type { FinsignalsSDK } from '../FinsignalsSDK';
import type { Control } from '../types';
import type { Internal, InternalCreateData } from '../FinsignalsTypes';
declare class InternalEntity extends FinsignalsEntityBase<Internal> {
    constructor(client: FinsignalsSDK, entopts: any);
    make(this: InternalEntity): InternalEntity;
    create(this: any, reqdata?: InternalCreateData, ctrl?: Control): Promise<InternalEntity>;
}
export { InternalEntity };
