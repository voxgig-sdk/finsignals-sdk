import { FinsignalsEntityBase } from '../FinsignalsEntityBase';
import type { FinsignalsSDK } from '../FinsignalsSDK';
import type { Control } from '../types';
import type { Usage, UsageLoadMatch } from '../FinsignalsTypes';
declare class UsageEntity extends FinsignalsEntityBase<Usage> {
    constructor(client: FinsignalsSDK, entopts: any);
    make(this: UsageEntity): UsageEntity;
    load(this: any, reqmatch?: UsageLoadMatch, ctrl?: Control): Promise<UsageEntity>;
}
export { UsageEntity };
