type FormDataValue = string | Blob | File;
type NestedObject = {
    [key: string]: number | string | FormDataValue | NestedObject | FormDataValue[];
};
declare function formDataToJSON(formData: FormData): NestedObject | null;
export default formDataToJSON;
