# Class: ThrottledConcurrentQueue<U\>

A queue that executes promises with a max throughput, and optionally max
concurrency.

## Type parameters

| Name | Type      |
| :--- | :-------- |
| `U`  | `unknown` |

## Implements

- [`Queue`](../interfaces/Queue.md)

## Table of contents

### Constructors

- [constructor](ThrottledConcurrentQueue.md#constructor)

### Properties

- [concurrency](ThrottledConcurrentQueue.md#concurrency)
- [executionTimeout](ThrottledConcurrentQueue.md#executiontimeout)
- [executionTimestamps](ThrottledConcurrentQueue.md#executiontimestamps)
- [invocationIntervalMs](ThrottledConcurrentQueue.md#invocationintervalms)
- [maxConcurrency](ThrottledConcurrentQueue.md#maxconcurrency)
- [taskQueue](ThrottledConcurrentQueue.md#taskqueue)

### Methods

- [add](ThrottledConcurrentQueue.md#add)
- [concurrencyQuotaRemaining](ThrottledConcurrentQueue.md#concurrencyquotaremaining)
- [deleteOutdatedExecutionTimestamps](ThrottledConcurrentQueue.md#deleteoutdatedexecutiontimestamps)
- [executeNextTasks](ThrottledConcurrentQueue.md#executenexttasks)
- [next](ThrottledConcurrentQueue.md#next)
- [nextPossibleExecution](ThrottledConcurrentQueue.md#nextpossibleexecution)
- [prioritize](ThrottledConcurrentQueue.md#prioritize)
- [remove](ThrottledConcurrentQueue.md#remove)
- [size](ThrottledConcurrentQueue.md#size)
- [throttleQuotaRemaining](ThrottledConcurrentQueue.md#throttlequotaremaining)

## Constructors

### constructor

• **new ThrottledConcurrentQueue**<`U`\>(`config`)

#### Type parameters

| Name | Type      |
| :--- | :-------- |
| `U`  | `unknown` |

#### Parameters

| Name     | Type                                                                            |
| :------- | :------------------------------------------------------------------------------ |
| `config` | [`ConcurrentQueueConfiguration`](../interfaces/ConcurrentQueueConfiguration.md) |

## Properties

### concurrency

• `Private` **concurrency**: `number` = `0`

Amount of tasks being executed right now.

---

### executionTimeout

• `Private` **executionTimeout**: `undefined` \| `Timeout`

When we schedule an attempt at executing another task in the future,
we don't want to schedule it more than once. Therefore, we keep track
of this scheduled attempt.

---

### executionTimestamps

• `Private` **executionTimestamps**: `default`<`number`\>

Each time a task is executed, record the start of its execution time.
Execution timestamps are removed when they become outdated. Used for
keeping the amount of executions under the throttle limit.

---

### invocationIntervalMs

• `Private` `Readonly` **invocationIntervalMs**: `number`

The interval during which we only allow a certain maximum amount of tasks
to be executed.

---

### maxConcurrency

• `Private` `Readonly` **maxConcurrency**: `number`

Maximum amount of tasks that can be executing at the same time.

---

### taskQueue

• `Private` **taskQueue**: `QueuedTask`<`unknown`, `U`\>[] = `[]`

Queue of tasks to execute. Added to the front, popped off the back.

## Methods

### add

▸ **add**<`T`\>(`start`, `metadata?`): `Promise`<`T`\>

Adds a task to be executed at some point in the future. Returns a promise that resolves when
the task finishes successfully, and rejects when there is an error.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                  | Description                                             |
| :---------- | :-------------------- | :------------------------------------------------------ |
| `start`     | () => `Promise`<`T`\> | a function that returns a promise representing the task |
| `metadata?` | `U`                   | optional data to be associated with the task            |

#### Returns

`Promise`<`T`\>

#### Implementation of

[Queue](../interfaces/Queue.md).[add](../interfaces/Queue.md#add)

---

### concurrencyQuotaRemaining

▸ `Private` **concurrencyQuotaRemaining**(): `number`

At this moment, how many more tasks we could execute without exceeding the concurrency quota.

#### Returns

`number`

---

### deleteOutdatedExecutionTimestamps

▸ `Private` **deleteOutdatedExecutionTimestamps**(): `void`

Removes all task execution timestamps that are older than [[this.invocationIntervalMs]],
because those invocations have no bearing on whether or not we can execute another task.

#### Returns

`void`

---

### executeNextTasks

▸ `Private` **executeNextTasks**(): `Promise`<`void`\>

Runs tasks until it's at either the throttle or concurrency limit. If there are more tasks to
be executed after that, schedules itself to execute again at the soonest possible moment.

#### Returns

`Promise`<`void`\>

---

### next

▸ `Private` **next**(): `Promise`<`void`\>

If there is a next task to execute, executes it. Records the time of execution in
[executionTimestamps](ThrottledConcurrentQueue.md#executiontimestamps). Increments and decrements concurrency counter. Neither throttles nor
limits concurrency.

#### Returns

`Promise`<`void`\>

---

### nextPossibleExecution

▸ `Private` **nextPossibleExecution**(): `undefined` \| `number`

Returns the soonest possible time from now we could execute another task without going over the
throttle limit.

#### Returns

`undefined` \| `number`

---

### prioritize

▸ **prioritize**(`predicate`): `QueuedTask`<`unknown`, `U`\>

Prioritize a currently queued task so that it is up next for execution.
For this to work, you have to provide the optional metadata during
queue construction and addition of tasks.

Prioritized tasks are executed in FILO order.

Throws an error if no matching task is found.

#### Parameters

| Name        | Type                                          | Description                                                 |
| :---------- | :-------------------------------------------- | :---------------------------------------------------------- |
| `predicate` | (`metadata`: `undefined` \| `U`) => `boolean` | Should return true for the task you would like prioritized. |

#### Returns

`QueuedTask`<`unknown`, `U`\>

---

### remove

▸ **remove**(`predicate`): `QueuedTask`<`unknown`, `U`\>

Remove one task from the queue. For this to work, you have to provide
the optional metadata during queue construction and addition of tasks.

Throws an error if no matching task is found.

#### Parameters

| Name        | Type                                          | Description                                             |
| :---------- | :-------------------------------------------- | :------------------------------------------------------ |
| `predicate` | (`metadata`: `undefined` \| `U`) => `boolean` | Should return true for the task you would like removed. |

#### Returns

`QueuedTask`<`unknown`, `U`\>

---

### size

▸ **size**(): `number`

Returns the amount of queued items, not including the ones that are being executed at this
moment.

#### Returns

`number`

#### Implementation of

[Queue](../interfaces/Queue.md).[size](../interfaces/Queue.md#size)

---

### throttleQuotaRemaining

▸ `Private` **throttleQuotaRemaining**(): `number`

At this moment, how many more tasks we could execute without exceeding the throttle quota.

#### Returns

`number`
