/**
 * Flattens the properties of a source object into a destination object, traversing up its prototype chain.
 *
 * @param sourceObj - The source object to flatten.
 * @param destObj - The destination object where properties will be added.
 * @param filter - Optional filter function to include/exclude objects during traversal.
 * @param propFilter - Optional filter function to include/exclude specific properties.
 * @returns The destination object with flattened properties.
 */
export const toFlatObject = (
  sourceObj: object | null,
  destObj: Record<string, unknown> = {},
  filter?: (obj: object) => boolean,
  propFilter?: (
    prop: string,
    obj: object,
    destObj: Record<string, unknown>,
  ) => boolean,
): Record<string, unknown> => {
  console.log("Starting toFlatObject");
  console.log("Initial sourceObj:", sourceObj);
  console.log("Initial destObj:", destObj);

  // Handle case where sourceObj is null or undefined
  if (!sourceObj) {
    console.log(
      "Source object is null or undefined, returning destObj:",
      destObj,
    );
    return destObj;
  }

  let currentObj: object | null = sourceObj;
  const merged = new Set<string>(); // Track merged properties to avoid duplicates

  do {
    console.log("Current object:", currentObj);

    // Apply object-level filter if provided
    if (!filter || filter(currentObj)) {
      console.log("Object passed filter:", currentObj);

      // Retrieve all own property names of the current object
      const props = Object.getOwnPropertyNames(currentObj);
      console.log("Properties of current object:", props);

      for (const prop of props) {
        const alreadyMerged = merged.has(prop);
        const inDestObj = Object.prototype.hasOwnProperty.call(destObj, prop);
        const isObjectPrototypeProp = Object.prototype.hasOwnProperty.call(
          Object.prototype,
          prop,
        );

        console.log(
          `Checking property '${prop}' - alreadyMerged: ${alreadyMerged}, inDestObj: ${inDestObj}, isObjectPrototypeProp: ${isObjectPrototypeProp}`,
        );

        // Apply property-level filter if provided and ensure the property hasn't been merged already
        if (
          (!propFilter || propFilter(prop, currentObj, destObj)) &&
          !alreadyMerged &&
          !inDestObj &&
          !isObjectPrototypeProp
        ) {
          destObj[prop] = (currentObj as Record<string, unknown>)[prop]; // Merge property
          merged.add(prop); // Mark property as merged
          console.log(`Property '${prop}' added to destObj`);
        } else {
          console.log(`Property '${prop}' skipped`);
        }
      }
    } else {
      console.log("Object did not pass filter, skipping:", currentObj);
    }

    // Move up the prototype chain, stop before reaching Object.prototype
    currentObj = Object.getPrototypeOf(currentObj);
    console.log("Moved to prototype object:", currentObj);
  } while (currentObj && currentObj !== Object.prototype);

  console.log("Final destObj:", destObj);
  return destObj;
};
