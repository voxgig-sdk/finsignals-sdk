import { FinsignalsEntityBase } from '../FinsignalsEntityBase';
import type { FinsignalsSDK } from '../FinsignalsSDK';
import type { Control } from '../types';
import type { Health, HealthLoadMatch } from '../FinsignalsTypes';
declare class HealthEntity extends FinsignalsEntityBase<Health> {
    constructor(client: FinsignalsSDK, entopts: any);
    make(this: HealthEntity): HealthEntity;
    load(this: any, reqmatch?: HealthLoadMatch, ctrl?: Control): Promise<HealthEntity>;
}
export { HealthEntity };
