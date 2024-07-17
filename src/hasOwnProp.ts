export const hasOwnProp = (
  ({ hasOwnProperty }) =>
  (obj: object, prop: string | symbol) =>
    hasOwnProperty.call(obj, prop)
)(Object.prototype);
