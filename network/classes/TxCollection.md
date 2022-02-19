# Class: TxCollection

Default implementation of a transaction collection - provides a simple api for adding, removing,
and querying by type of transaction.

## Implements

- `TransactionCollection`

## Table of contents

### Constructors

- [constructor](TxCollection.md#constructor)

### Properties

- [transactions](TxCollection.md#transactions)

### Methods

- [addTransaction](TxCollection.md#addtransaction)
- [getTransactions](TxCollection.md#gettransactions)
- [hasTransaction](TxCollection.md#hastransaction)
- [removeTransaction](TxCollection.md#removetransaction)

## Constructors

### constructor

• **new TxCollection**()

## Properties

### transactions

• `Private` **transactions**: `Transaction`<`TxIntent`\>[] = `[]`

## Methods

### addTransaction

▸ **addTransaction**(`tx`): `void`

Internally records the given transaction.

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

`void`

#### Implementation of

TransactionCollection.addTransaction

---

### getTransactions

▸ **getTransactions**<`T`\>(`transactionPredicate`): `Transaction`<`T`\>[]

Gets all transactions which are filtered to a particular type given a predicate.

#### Type parameters

| Name | Type               |
| :--- | :----------------- |
| `T`  | extends `TxIntent` |

#### Parameters

| Name                   | Type                                                      |
| :--------------------- | :-------------------------------------------------------- |
| `transactionPredicate` | (`u`: `Transaction`<`TxIntent`\>) => u is Transaction<T\> |

#### Returns

`Transaction`<`T`\>[]

#### Implementation of

TransactionCollection.getTransactions

---

### hasTransaction

▸ **hasTransaction**<`T`\>(`transactionPredicate`): `boolean`

Returns whether or not there is at least one transaction which is filtered to by the given
predicate.

#### Type parameters

| Name | Type               |
| :--- | :----------------- |
| `T`  | extends `TxIntent` |

#### Parameters

| Name                   | Type                                                      |
| :--------------------- | :-------------------------------------------------------- |
| `transactionPredicate` | (`u`: `Transaction`<`TxIntent`\>) => u is Transaction<T\> |

#### Returns

`boolean`

#### Implementation of

TransactionCollection.hasTransaction

---

### removeTransaction

▸ **removeTransaction**(`tx`): `void`

Removes the internal record of the given transaction.

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

`void`

#### Implementation of

TransactionCollection.removeTransaction
