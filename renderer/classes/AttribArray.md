# Class: AttribArray

Helper class - essentially an implementation of ArrayList from Java, but using
typed JS Arrays so that we can efficiently write our WebGL data without converting.

## Table of contents

### Constructors

- [constructor](AttribArray.md#constructor)

### Properties

- [array](AttribArray.md#array)
- [size](AttribArray.md#size)
- [type](AttribArray.md#type)

### Methods

- [createArray](AttribArray.md#createarray)
- [doubleLen](AttribArray.md#doublelen)
- [set](AttribArray.md#set)

## Constructors

### constructor

• **new AttribArray**(`type`, `startSize?`)

#### Parameters

| Name        | Type         | Default value |
| :---------- | :----------- | :------------ |
| `type`      | `AttribType` | `undefined`   |
| `startSize` | `number`     | `4`           |

## Properties

### array

• **array**: [`GLArray`](../README.md#glarray)

A typed array, representing the data in this array.

---

### size

• `Private` **size**: `number`

The number of bytes per data entry in this array.

---

### type

• `Private` **type**: `AttribType`

The WebGL data type that this array represents.

## Methods

### createArray

▸ `Private` **createArray**(): `void`

Initialize a new blank array of size this.size.

#### Returns

`void`

---

### doubleLen

▸ `Private` **doubleLen**(): `void`

Initialize a new array of 2x the length, and copy in the old data.

#### Returns

`void`

---

### set

▸ **set**(`els`, `idx`): `void`

Copy in an array of data starting at an index. Writing past the maximum
array length will trigger doubleLen().

#### Parameters

| Name  | Type                   | Description                  |
| :---- | :--------------------- | :--------------------------- |
| `els` | `ArrayLike`<`number`\> | The array of data to copy.   |
| `idx` | `number`               | The array index to start at. |

#### Returns

`void`
