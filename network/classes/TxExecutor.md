# Class: TxExecutor

## Table of contents

### Constructors

- [constructor](TxExecutor.md#constructor)

### Properties

- [afterTransaction](TxExecutor.md#aftertransaction)
- [beforeQueued](TxExecutor.md#beforequeued)
- [beforeTransaction](TxExecutor.md#beforetransaction)
- [defaultTxOptions](TxExecutor.md#defaulttxoptions)
- [diagnosticsUpdater](TxExecutor.md#diagnosticsupdater)
- [ethConnection](TxExecutor.md#ethconnection)
- [gasSettingProvider](TxExecutor.md#gassettingprovider)
- [idSequence](TxExecutor.md#idsequence)
- [lastTransactionTimestamp](TxExecutor.md#lasttransactiontimestamp)
- [nonce](TxExecutor.md#nonce)
- [nonceMutex](TxExecutor.md#noncemutex)
- [queue](TxExecutor.md#queue)
- [supportMultipleWallets](TxExecutor.md#supportmultiplewallets)
- [NONCE_STALE_AFTER_MS](TxExecutor.md#nonce_stale_after_ms)
- [TX_SUBMIT_TIMEOUT](TxExecutor.md#tx_submit_timeout)

### Methods

- [dequeueTransction](TxExecutor.md#dequeuetransction)
- [execute](TxExecutor.md#execute)
- [getNonce](TxExecutor.md#getnonce)
- [nextId](TxExecutor.md#nextid)
- [prioritizeTransaction](TxExecutor.md#prioritizetransaction)
- [queueTransaction](TxExecutor.md#queuetransaction)
- [resetNonce](TxExecutor.md#resetnonce)
- [setDiagnosticUpdater](TxExecutor.md#setdiagnosticupdater)
- [waitForTransaction](TxExecutor.md#waitfortransaction)

## Constructors

### constructor

• **new TxExecutor**(`ethConnection`, `gasSettingProvider`, `beforeQueued?`, `beforeTransaction?`, `afterTransaction?`, `queueConfiguration?`, `supportMultipleWallets?`)

#### Parameters

| Name                     | Type                                                                            | Default value |
| :----------------------- | :------------------------------------------------------------------------------ | :------------ |
| `ethConnection`          | [`EthConnection`](EthConnection.md)                                             | `undefined`   |
| `gasSettingProvider`     | [`GasPriceSettingProvider`](../README.md#gaspricesettingprovider)               | `undefined`   |
| `beforeQueued?`          | [`BeforeQueued`](../README.md#beforequeued)                                     | `undefined`   |
| `beforeTransaction?`     | [`BeforeTransaction`](../README.md#beforetransaction)                           | `undefined`   |
| `afterTransaction?`      | [`AfterTransaction`](../README.md#aftertransaction)                             | `undefined`   |
| `queueConfiguration?`    | [`ConcurrentQueueConfiguration`](../interfaces/ConcurrentQueueConfiguration.md) | `undefined`   |
| `supportMultipleWallets` | `boolean`                                                                       | `true`        |

## Properties

### afterTransaction

• `Private` `Optional` `Readonly` **afterTransaction**: [`AfterTransaction`](../README.md#aftertransaction)

If present, called after every transaction with the transaction info as well as its performance
metrics.

---

### beforeQueued

• `Private` `Optional` `Readonly` **beforeQueued**: [`BeforeQueued`](../README.md#beforequeued)

If present, called before any transaction is queued, to give the user of [TxExecutor](TxExecutor.md) the
opportunity to cancel the event by rejecting. Useful for interstitials.

---

### beforeTransaction

• `Private` `Optional` `Readonly` **beforeTransaction**: [`BeforeTransaction`](../README.md#beforetransaction)

If present, called before every transaction, to give the user of [TxExecutor](TxExecutor.md) the
opportunity to cancel the event by throwing an exception. Useful for interstitials.

---

### defaultTxOptions

• `Private` **defaultTxOptions**: `TransactionRequest`

Unless overridden, these are the default transaction options each blockchain transaction will
be sent with.

---

### diagnosticsUpdater

• `Private` `Optional` **diagnosticsUpdater**: `DiagnosticUpdater`

Allows us to record some diagnostics that appear in the DiagnosticsPane of the Dark Forest client.

---

### ethConnection

• `Private` `Readonly` **ethConnection**: [`EthConnection`](EthConnection.md)

Our interface to the blockchain.

---

### gasSettingProvider

• `Private` `Readonly` **gasSettingProvider**: [`GasPriceSettingProvider`](../README.md#gaspricesettingprovider)

Communicates to the [TxExecutor](TxExecutor.md) the gas price we should be paying for each transaction,
if there is not a manual gas price specified for that transaction.

---

### idSequence

• `Private` **idSequence**: `number` = `0`

Increments every time a new transaction is created. This is separate from the nonce because
it is used solely for ordering transactions client-side.

---

### lastTransactionTimestamp

• `Private` **lastTransactionTimestamp**: `number`

We record the last transaction timestamp so that we know when it's a good time to refresh the
nonce.

---

### nonce

• `Private` **nonce**: `undefined` \| `number`

All Ethereum transactions have a nonce. The nonce should strictly increase with each
transaction.

---

### nonceMutex

• `Private` **nonceMutex**: `Mutex`

Mutex that ensures only one transaction is modifying the nonce
at a time.

---

### queue

• `Private` `Readonly` **queue**: [`ThrottledConcurrentQueue`](ThrottledConcurrentQueue.md)<`Transaction`<`TxIntent`\>\>

Task queue which executes transactions in a controlled manner.

---

### supportMultipleWallets

• `Private` **supportMultipleWallets**: `boolean`

Turning this on refreshes the nonce if there has not been
a transaction after [NONCE_STALE_AFTER_MS](TxExecutor.md#nonce_stale_after_ms). This is so that
we can get the most up to date nonce even if other
wallets/applications are sending transactions as the same
address.

---

### NONCE_STALE_AFTER_MS

▪ `Static` `Private` `Readonly` **NONCE_STALE_AFTER_MS**: `5000`

If [supportMultipleWallets](TxExecutor.md#supportmultiplewallets) is true, refresh the nonce if a
transaction has not been sent in this amount of time.

---

### TX_SUBMIT_TIMEOUT

▪ `Static` `Private` `Readonly` **TX_SUBMIT_TIMEOUT**: `30000`

A transaction is considered to have errored if haven't successfully submitted to mempool within
this amount of time.

## Methods

### dequeueTransction

▸ **dequeueTransction**(`tx`): `void`

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

`void`

---

### execute

▸ `Private` **execute**(`tx`): `Promise`<`void`\>

Executes the given queued transaction. This is a field rather than a method declaration on
purpose for `this` purposes.

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

`Promise`<`void`\>

---

### getNonce

▸ `Private` **getNonce**(): `Promise`<`undefined` \| `number`\>

Returns the current nonce and increments it in memory for the next transaction.
If nonce is undefined, or there has been a big gap between transactions,
refresh the nonce from the blockchain. This only replaces the nonce if the
blockchain nonce is found to be higher than the local calculation.
The stale timer is to support multiple wallets/applications interacting
with the game at the same time.

#### Returns

`Promise`<`undefined` \| `number`\>

---

### nextId

▸ `Private` **nextId**(): `number`

Return current counter and increment.

#### Returns

`number`

---

### prioritizeTransaction

▸ **prioritizeTransaction**(`tx`): `void`

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

`void`

---

### queueTransaction

▸ **queueTransaction**<`T`\>(`intent`, `overrides?`): `Promise`<`Transaction`<`T`\>\>

Schedules this transaction for execution.

#### Type parameters

| Name | Type               |
| :--- | :----------------- |
| `T`  | extends `TxIntent` |

#### Parameters

| Name         | Type                 |
| :----------- | :------------------- |
| `intent`     | `T`                  |
| `overrides?` | `TransactionRequest` |

#### Returns

`Promise`<`Transaction`<`T`\>\>

---

### resetNonce

▸ `Private` **resetNonce**(): `Promise`<`undefined`\>

Reset nonce.
This will trigger a refresh from the blockchain the next time
execution starts.

#### Returns

`Promise`<`undefined`\>

---

### setDiagnosticUpdater

▸ **setDiagnosticUpdater**(`diagnosticUpdater?`): `void`

#### Parameters

| Name                 | Type                |
| :------------------- | :------------------ |
| `diagnosticUpdater?` | `DiagnosticUpdater` |

#### Returns

`void`

---

### waitForTransaction

▸ **waitForTransaction**<`T`\>(`ser`): `Transaction`<`T`\>

Given a transaction that has been persisted (and therefore submitted), we return a transaction
whose confirmationPromise resolves once the transaction was verified to have been confirmed.
Useful for plugging these persisted transactions into our transaction system.

#### Type parameters

| Name | Type               |
| :--- | :----------------- |
| `T`  | extends `TxIntent` |

#### Parameters

| Name  | Type                         |
| :---- | :--------------------------- |
| `ser` | `PersistedTransaction`<`T`\> |

#### Returns

`Transaction`<`T`\>
