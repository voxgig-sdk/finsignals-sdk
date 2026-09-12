import { FinsignalsEntityBase } from '../FinsignalsEntityBase';
import type { FinsignalsSDK } from '../FinsignalsSDK';
import type { Control } from '../types';
import type { Classify, ClassifyCreateData } from '../FinsignalsTypes';
declare class ClassifyEntity extends FinsignalsEntityBase<Classify> {
    constructor(client: FinsignalsSDK, entopts: any);
    make(this: ClassifyEntity): ClassifyEntity;
    create(this: any, reqdata?: ClassifyCreateData, ctrl?: Control): Promise<ClassifyEntity>;
}
export { ClassifyEntity };
