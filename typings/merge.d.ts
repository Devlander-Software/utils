import { GlobalPayload } from './isGlobalDefined';
import { MergeableInput, MergeableValue } from './types/value.types';
export declare function merge(this: GlobalPayload & {
    caseless?: boolean;
}, ...objs: MergeableInput[]): Record<string, MergeableValue>;
