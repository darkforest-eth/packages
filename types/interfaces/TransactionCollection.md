# Interface: TransactionCollection

## Table of contents

### Methods

- [addTransaction](TransactionCollection.md#addtransaction)
- [getTransactions](TransactionCollection.md#gettransactions)
- [hasTransaction](TransactionCollection.md#hastransaction)
- [removeTransaction](TransactionCollection.md#removetransaction)

## Methods

### addTransaction

▸ **addTransaction**(`tx`): `void`

#### Parameters

| Name | Type                                         |
| :--- | :------------------------------------------- |
| `tx` | [`Transaction`](Transaction.md)<`TxIntent`\> |

#### Returns

`void`

---

### getTransactions

▸ **getTransactions**<`T`\>(`transactionPredicate`): [`Transaction`](Transaction.md)<`T`\>[]

#### Type parameters

| Name | Type               |
| :--- | :----------------- |
| `T`  | extends `TxIntent` |

#### Parameters

| Name                   | Type                                                                        |
| :--------------------- | :-------------------------------------------------------------------------- |
| `transactionPredicate` | (`u`: [`Transaction`](Transaction.md)<`TxIntent`\>) => u is Transaction<T\> |

#### Returns

[`Transaction`](Transaction.md)<`T`\>[]

---

### hasTransaction

▸ **hasTransaction**<`T`\>(`transactionPredicate`): `boolean`

#### Type parameters

| Name | Type               |
| :--- | :----------------- |
| `T`  | extends `TxIntent` |

#### Parameters

| Name                   | Type                                                                        |
| :--------------------- | :-------------------------------------------------------------------------- |
| `transactionPredicate` | (`u`: [`Transaction`](Transaction.md)<`TxIntent`\>) => u is Transaction<T\> |

#### Returns

`boolean`

---

### removeTransaction

▸ **removeTransaction**(`tx`): `void`

#### Parameters

| Name | Type                                         |
| :--- | :------------------------------------------- |
| `tx` | [`Transaction`](Transaction.md)<`TxIntent`\> |

#### Returns

`void`
