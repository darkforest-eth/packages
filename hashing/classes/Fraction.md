# Class: Fraction

## Table of contents

### Constructors

- [constructor](Fraction.md#constructor)

### Properties

- [add](Fraction.md#add)
- [d](Fraction.md#d)
- [div](Fraction.md#div)
- [gcd](Fraction.md#gcd)
- [lcm](Fraction.md#lcm)
- [mul](Fraction.md#mul)
- [n](Fraction.md#n)
- [pow](Fraction.md#pow)
- [s](Fraction.md#s)
- [sub](Fraction.md#sub)

### Methods

- [abs](Fraction.md#abs)
- [ceil](Fraction.md#ceil)
- [clone](Fraction.md#clone)
- [compare](Fraction.md#compare)
- [divisible](Fraction.md#divisible)
- [equals](Fraction.md#equals)
- [floor](Fraction.md#floor)
- [inverse](Fraction.md#inverse)
- [mod](Fraction.md#mod)
- [neg](Fraction.md#neg)
- [round](Fraction.md#round)
- [simplify](Fraction.md#simplify)
- [toContinued](Fraction.md#tocontinued)
- [toFraction](Fraction.md#tofraction)
- [toLatex](Fraction.md#tolatex)
- [toString](Fraction.md#tostring)
- [valueOf](Fraction.md#valueof)

## Constructors

### constructor

• **new Fraction**(`fraction`)

#### Parameters

| Name       | Type                      |
| :--------- | :------------------------ |
| `fraction` | [`Fraction`](Fraction.md) |

• **new Fraction**(`num`)

#### Parameters

| Name  | Type                 |
| :---- | :------------------- |
| `num` | `string` \| `number` |

• **new Fraction**(`numerator`, `denominator`)

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `numerator`   | `number` |
| `denominator` | `number` |

• **new Fraction**(`numbers`)

#### Parameters

| Name      | Type                     |
| :-------- | :----------------------- |
| `numbers` | (`string` \| `number`)[] |

• **new Fraction**(`fraction`)

#### Parameters

| Name       | Type                   |
| :--------- | :--------------------- |
| `fraction` | `NumeratorDenominator` |

## Properties

### add

• **add**: `FractionConstructor`

---

### d

• **d**: `BigInteger`

---

### div

• **div**: `FractionConstructor`

---

### gcd

• **gcd**: `FractionConstructor`

---

### lcm

• **lcm**: `FractionConstructor`

---

### mul

• **mul**: `FractionConstructor`

---

### n

• **n**: `BigInteger`

---

### pow

• **pow**: `FractionConstructor`

---

### s

• **s**: `BigInteger`

---

### sub

• **sub**: `FractionConstructor`

## Methods

### abs

▸ **abs**(): [`Fraction`](Fraction.md)

#### Returns

[`Fraction`](Fraction.md)

---

### ceil

▸ **ceil**(`places?`): [`Fraction`](Fraction.md)

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `places?` | `number` |

#### Returns

[`Fraction`](Fraction.md)

---

### clone

▸ **clone**(): [`Fraction`](Fraction.md)

#### Returns

[`Fraction`](Fraction.md)

---

### compare

▸ **compare**(`n`): `number`

#### Parameters

| Name | Type                                              |
| :--- | :------------------------------------------------ |
| `n`  | `string` \| `number` \| [`Fraction`](Fraction.md) |

#### Returns

`number`

---

### divisible

▸ **divisible**(`n`): `boolean`

#### Parameters

| Name | Type                                              |
| :--- | :------------------------------------------------ |
| `n`  | `string` \| `number` \| [`Fraction`](Fraction.md) |

#### Returns

`boolean`

---

### equals

▸ **equals**(`n`): `boolean`

#### Parameters

| Name | Type                                              |
| :--- | :------------------------------------------------ |
| `n`  | `string` \| `number` \| [`Fraction`](Fraction.md) |

#### Returns

`boolean`

---

### floor

▸ **floor**(`places?`): [`Fraction`](Fraction.md)

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `places?` | `number` |

#### Returns

[`Fraction`](Fraction.md)

---

### inverse

▸ **inverse**(): [`Fraction`](Fraction.md)

#### Returns

[`Fraction`](Fraction.md)

---

### mod

▸ **mod**(`n?`): [`Fraction`](Fraction.md)

#### Parameters

| Name | Type                                              |
| :--- | :------------------------------------------------ |
| `n?` | `string` \| `number` \| [`Fraction`](Fraction.md) |

#### Returns

[`Fraction`](Fraction.md)

---

### neg

▸ **neg**(): [`Fraction`](Fraction.md)

#### Returns

[`Fraction`](Fraction.md)

---

### round

▸ **round**(`places?`): [`Fraction`](Fraction.md)

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `places?` | `number` |

#### Returns

[`Fraction`](Fraction.md)

---

### simplify

▸ **simplify**(`eps?`): [`Fraction`](Fraction.md)

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `eps?` | `number` |

#### Returns

[`Fraction`](Fraction.md)

---

### toContinued

▸ **toContinued**(): `number`[]

#### Returns

`number`[]

---

### toFraction

▸ **toFraction**(`excludeWhole?`): `string`

#### Parameters

| Name            | Type      |
| :-------------- | :-------- |
| `excludeWhole?` | `boolean` |

#### Returns

`string`

---

### toLatex

▸ **toLatex**(`excludeWhole?`): `string`

#### Parameters

| Name            | Type      |
| :-------------- | :-------- |
| `excludeWhole?` | `boolean` |

#### Returns

`string`

---

### toString

▸ **toString**(`decimalPlaces?`): `string`

#### Parameters

| Name             | Type     |
| :--------------- | :------- |
| `decimalPlaces?` | `number` |

#### Returns

`string`

---

### valueOf

▸ **valueOf**(): `number`

#### Returns

`number`
