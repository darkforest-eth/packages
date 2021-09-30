# Interface: NetworkEvent

Each time a transaction either reverts or confirms we send an event to the webserver with this
diagnostic info about the transaction, so that we can analyze the performance of the network in
aggregate across our player-base.

## Table of contents

### Properties

- [auto_gas_price_setting](NetworkEvent.md#auto_gas_price_setting)
- [error](NetworkEvent.md#error)
- [parsed_error](NetworkEvent.md#parsed_error)
- [rpc_endpoint](NetworkEvent.md#rpc_endpoint)
- [time_exec_called](NetworkEvent.md#time_exec_called)
- [tx_hash](NetworkEvent.md#tx_hash)
- [tx_to](NetworkEvent.md#tx_to)
- [tx_type](NetworkEvent.md#tx_type)
- [user_address](NetworkEvent.md#user_address)
- [wait_confirm](NetworkEvent.md#wait_confirm)
- [wait_error](NetworkEvent.md#wait_error)
- [wait_submit](NetworkEvent.md#wait_submit)

## Properties

### auto_gas_price_setting

• `Optional` **auto_gas_price_setting**: `string` \| [`AutoGasSetting`](../README.md#autogassetting)

If the user has specified that they want to use an auto gas setting (which is the case by
default in our client), then this value contains the string representation of that setting. In
certain cases this can also be a string number.

---

### error

• `Optional` **error**: `string`

If there was an error executing this transaction, contains a stringified version of that error.

---

### parsed_error

• `Optional` **parsed_error**: `string`

If the error was returned as a byte string, contains a parsed version of that error.

---

### rpc_endpoint

• `Optional` **rpc_endpoint**: `string`

The url of the node fleet this transaction was sent to.

---

### time_exec_called

• **time_exec_called**: `number`

Timestamp of when the transaction was first uploaded to the network.

---

### tx_hash

• `Optional` **tx_hash**: `string`

If the transaction was confirmed, this is the transaction hash.

---

### tx_to

• **tx_to**: `string`

Contract address to which the transaction was sent.

---

### tx_type

• **tx_type**: `string`

Function name that the transaction is calling on the contract.

---

### user_address

• `Optional` **user_address**: `string`

The address on behalf of which this transaction was sent.

---

### wait_confirm

• `Optional` **wait_confirm**: `number`

If the transaction confirmed, the amount of time the client had to wait before it became aware
of the confirmation.

---

### wait_error

• `Optional` **wait_error**: `number`

If the transaction confirmed, the amount of time the client had to wait before it became aware
of the confirmation.

---

### wait_submit

• `Optional` **wait_submit**: `number`

The amount of time the client had to wait until the transaction was submitted to the pool.
