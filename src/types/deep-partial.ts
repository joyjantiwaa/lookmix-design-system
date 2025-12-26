/**
 * DeepPartial
 * Makes all properties of T optional recursively.
 *
 * - Works with nested objects
 * - Preserves functions
 * - Supports readonly arrays
 *
 * Example:
 * type A = { a: { b: string } }
 * DeepPartial<A> => { a?: { b?: string } }
 */
export type DeepPartial<T> =
  // Leave functions as-is
  T extends (...args: any[]) => any
    ? T
    // Handle readonly arrays
    : T extends readonly (infer U)[]
      ? readonly DeepPartial<U>[]
      // Handle arrays
      : T extends Array<infer U>
        ? Array<DeepPartial<U>>
        // Handle objects
        : T extends object
          ? {
              [P in keyof T]?: DeepPartial<T[P]>;
            }
          // Primitives
          : T;
