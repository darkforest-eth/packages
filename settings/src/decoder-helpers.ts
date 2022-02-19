import * as decoders from 'decoders';

// Decoder helpers that will probably be refactored into a package
export function withDefault<A>(decoder: decoders.Decoder<A>, def: A) {
  return decoders.map(decoders.optional(decoder), (val) => {
    if (val === undefined) {
      return def;
    } else {
      return val;
    }
  });
}

export function between(decoder: decoders.Decoder<number>, min: number, max: number) {
  return decoders.compose(
    decoder,
    decoders.predicate((val) => val >= min && val <= max, `Must be between ${min} and ${max}`)
  );
}

export type ExactArray4<A> = [A, A, A, A];

export function exactArray4<A>(decoder: decoders.Decoder<A>) {
  return decoders.map(
    decoders.compose(
      decoders.array(decoder),
      decoders.predicate((arr) => arr.length === 4, `Must be exactly 4-length`)
    ),
    (value) => [value[0], value[1], value[2], value[3]] as ExactArray4<A>
  );
}

export type ExactArray5<A> = [A, A, A, A, A];

export function exactArray5<A>(decoder: decoders.Decoder<A>) {
  return decoders.map(
    decoders.compose(
      decoders.array(decoder),
      decoders.predicate((arr) => arr.length === 5, `Must be exactly 5-length`)
    ),
    (value) => [value[0], value[1], value[2], value[3], value[4]] as ExactArray5<A>
  );
}

export type Tuple6<A> = [A, A, A, A, A, A];

export function array6<A>(decoder: decoders.Decoder<A>) {
  return decoders.map(
    decoders.compose(
      decoders.array(decoder),
      decoders.predicate((arr) => arr.length === 6, `Must be exactly 6-length`)
    ),
    (value) => [value[0], value[1], value[2], value[3], value[4], value[5]] as Tuple6<A>
  );
}

export type ExactArray10<A> = [A, A, A, A, A, A, A, A, A, A];

export function exactArray10<A>(decoder: decoders.Decoder<A>) {
  return decoders.map(
    decoders.compose(
      decoders.array(decoder),
      decoders.predicate((arr) => arr.length === 10, `Must be exactly 10-length`)
    ),
    (value) =>
      [
        value[0],
        value[1],
        value[2],
        value[3],
        value[4],
        value[5],
        value[6],
        value[7],
        value[8],
        value[9],
      ] as ExactArray10<A>
  );
}
