import type { Any } from 'ts-toolbelt';

/**
 * An abstract type used to differentiate between common types, like `number` or `string`.
 * The `Id` type parameter is the key to vary upon and should be unique unless being used to subtype.
 */
export type Abstract<T, Id extends Any.Key> = Any.Type<T, Id>;

/**
 * Unwraps a Promise type into the type it contains. Useful when working with Promise-returning functions.
 */
export type Awaited<T> = Any.Await<T>;
