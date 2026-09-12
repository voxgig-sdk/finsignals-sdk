import { FinsignalsEntityBase } from '../FinsignalsEntityBase';
import type { FinsignalsSDK } from '../FinsignalsSDK';
import type { Control } from '../types';
import type { Rotation, RotationLoadMatch } from '../FinsignalsTypes';
declare class RotationEntity extends FinsignalsEntityBase<Rotation> {
    constructor(client: FinsignalsSDK, entopts: any);
    make(this: RotationEntity): RotationEntity;
    load(this: any, reqmatch?: RotationLoadMatch, ctrl?: Control): Promise<RotationEntity>;
}
export { RotationEntity };
