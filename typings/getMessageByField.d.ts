export interface ErrorMessages {
    [key: string]: string | string[] | any;
    message?: string[];
}
export declare const getMessageByField: (fieldsToCheck: string | string[], errors: ErrorMessages) => string | undefined | null;
