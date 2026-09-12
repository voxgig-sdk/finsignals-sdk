import { ClassifyEntity } from './entity/ClassifyEntity';
import { HealthEntity } from './entity/HealthEntity';
import { InternalEntity } from './entity/InternalEntity';
import { RotationEntity } from './entity/RotationEntity';
import { UsageEntity } from './entity/UsageEntity';
export type * from './FinsignalsTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { FinsignalsEntityBase } from './FinsignalsEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class FinsignalsSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Classify(entopts?: Record<string, any>): ClassifyEntity;
    Health(entopts?: Record<string, any>): HealthEntity;
    Internal(entopts?: Record<string, any>): InternalEntity;
    Rotation(entopts?: Record<string, any>): RotationEntity;
    Usage(entopts?: Record<string, any>): UsageEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): FinsignalsSDK;
    tester(testopts?: any, sdkopts?: any): FinsignalsSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof FinsignalsSDK;
export { stdutil, config, BaseFeature, FinsignalsEntityBase, FinsignalsSDK, SDK, };
