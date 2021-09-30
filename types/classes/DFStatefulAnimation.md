# Class: DFStatefulAnimation<T\>

## Type parameters

| Name |
| :--- |
| `T`  |

## Hierarchy

- [`DFAnimation`](DFAnimation.md)

  ↳ **`DFStatefulAnimation`**

## Table of contents

### Constructors

- [constructor](DFStatefulAnimation.md#constructor)

### Properties

- [\_state](DFStatefulAnimation.md#_state)

### Methods

- [state](DFStatefulAnimation.md#state)
- [update](DFStatefulAnimation.md#update)
- [value](DFStatefulAnimation.md#value)

## Constructors

### constructor

• **new DFStatefulAnimation**<`T`\>(`state`, `update`)

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name     | Type           |
| :------- | :------------- |
| `state`  | `T`            |
| `update` | () => `number` |

#### Overrides

[DFAnimation](DFAnimation.md).[constructor](DFAnimation.md#constructor)

## Properties

### \_state

• `Private` `Readonly` **\_state**: `T`

## Methods

### state

▸ **state**(): `T`

#### Returns

`T`

---

### update

▸ **update**(): `void`

#### Returns

`void`

#### Inherited from

[DFAnimation](DFAnimation.md).[update](DFAnimation.md#update)

---

### value

▸ **value**(): `number`

#### Returns

`number`

#### Inherited from

[DFAnimation](DFAnimation.md).[value](DFAnimation.md#value)
