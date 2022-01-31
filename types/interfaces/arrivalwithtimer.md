# Interface: ArrivalWithTimer

Convenience type for storing a voyage and a reference to a timeout that is triggered on voyage
arrival (in case the timeout needs to be cancelled).

## Table of contents

### Properties

- [arrivalData](ArrivalWithTimer.md#arrivaldata)
- [timer](ArrivalWithTimer.md#timer)

## Properties

### arrivalData

• **arrivalData**: [`QueuedArrival`](QueuedArrival.md)

TODO: rename to `arrival` or 'voyage'.

---

### timer

• **timer**: `Timeout`
