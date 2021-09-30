# Interface: DiagnosticUpdater

Various parts of our codebase need to be able to self-report diagnostics. To enable them to do
so, you must provide them with an object that conforms to this interface. Currently, the only
implementation of this function is `GameManager`. However, in the future, we might want to stream
a sample of these diagnostic updates to our backend, so that we can analyze performance, catch
bugs, etc.

## Table of contents

### Methods

- [updateDiagnostics](DiagnosticUpdater.md#updatediagnostics)

## Methods

### updateDiagnostics

▸ **updateDiagnostics**(`updateFn`): `void`

Updates the diagnostics using the provided updater function.

#### Parameters

| Name       | Type                                             |
| :--------- | :----------------------------------------------- |
| `updateFn` | (`d`: [`Diagnostics`](Diagnostics.md)) => `void` |

#### Returns

`void`
