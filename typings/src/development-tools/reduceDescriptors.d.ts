type Reducer = (descriptor: PropertyDescriptor, name: string) => false | PropertyDescriptor | undefined;
export declare const reduceDescriptors: (obj: object, reducer: Reducer) => void;
export {};
