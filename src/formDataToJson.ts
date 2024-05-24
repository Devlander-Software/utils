import { forEachEntry } from "./forEachEntry";
import { hasOwnProp } from "./hasOwnProp";
import { isFormData } from "./isFormData";
import { isFunction } from "./isFunction";
import { parsePropPath } from "./parsePropPath";
import { isObject } from "./typeToTest";

type FormDataValue = string | Blob | File;

type NestedObject = {
  [key: string]:
    | number
    | string
    | FormDataValue
    | NestedObject
    | FormDataValue[];
};

function formDataToJSON(formData: FormData): NestedObject | null {
  function arrayToObject(arr: FormDataValue[]): NestedObject {
    const obj: NestedObject = {};
    for (let i = 0; i < arr.length; i++) {
      obj[i.toString()] = arr[i];
    }
    return obj;
  }

  function buildPath(
    path: string[],
    value: FormDataValue,
    target: NestedObject,
    index: number,
  ): boolean {
    let name = path[index++];

    if (name === "__proto__") return true;

    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && Array.isArray(target) ? target.length.toString() : name;

    if (isLast) {
      if (hasOwnProp(target, name)) {
        if (Array.isArray(target[name])) {
          (target[name] as FormDataValue[]).push(value);
        } else {
          target[name] = [target[name] as FormDataValue, value];
        }
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !isObject(target[name])) {
      target[name] = isNumericKey ? [] : {};
    }

    const result = buildPath(path, value, target[name] as NestedObject, index);

    if (result && Array.isArray(target[name])) {
      target[name] = arrayToObject(target[name] as FormDataValue[]);
    }

    return !isNumericKey;
  }

  if (isFormData(formData) && isFunction(formData.entries)) {
    const obj: NestedObject = {};

    forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value as FormDataValue, obj, 0);
    });

    return obj;
  }

  return null;
}

export default formDataToJSON;
