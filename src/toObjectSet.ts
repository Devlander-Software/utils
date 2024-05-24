export const toObjectSet = (
  arrayOrString: unknown[] | string,
  delimiter?: string,
): { [key: string]: boolean } => {
  const obj: { [key: string]: boolean } = {};

  const define = (arr: unknown[]) => {
    arr.forEach((value) => {
      obj[value as string] = true;
    });
  };

  if (Array.isArray(arrayOrString)) {
    define(arrayOrString);
  } else if (typeof arrayOrString === "string" && delimiter !== undefined) {
    define(String(arrayOrString).split(delimiter));
  }

  console.log(obj, "obj");

  Object.keys(obj).forEach((key) => {
    if (!key) {
      delete obj[key];
    }
  });

  return obj;
};
