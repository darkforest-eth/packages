# @darkforest_eth/procedural

## Table of contents

### Type aliases

- [PixelCoords](README.md#pixelcoords)
- [QuoteData](README.md#quotedata)

### Variables

- [grayColors](README.md#graycolors)
- [mockCommon](README.md#mockcommon)
- [mockEpic](README.md#mockepic)
- [mockLegendary](README.md#mocklegendary)
- [mockRare](README.md#mockrare)

### Functions

- [artifactName](README.md#artifactname)
- [artifactRandom](README.md#artifactrandom)
- [artifactRandomInt](README.md#artifactrandomint)
- [getBiomeRgbStr](README.md#getbiomergbstr)
- [getHatSizeName](README.md#gethatsizename)
- [getOwnerColor](README.md#getownercolor)
- [getOwnerColorVec](README.md#getownercolorvec)
- [getPlanetBlurb](README.md#getplanetblurb)
- [getPlanetBlurb2](README.md#getplanetblurb2)
- [getPlanetClass](README.md#getplanetclass)
- [getPlanetCosmetic](README.md#getplanetcosmetic)
- [getPlanetName](README.md#getplanetname)
- [getPlanetNameHash](README.md#getplanetnamehash)
- [getPlanetTagline](README.md#getplanettagline)
- [getPlanetTitle](README.md#getplanettitle)
- [getPlayerColor](README.md#getplayercolor)
- [getPlayerColorVec](README.md#getplayercolorvec)
- [getRuinsInfo](README.md#getruinsinfo)
- [hashToHue](README.md#hashtohue)
- [hatTypeFromHash](README.md#hattypefromhash)
- [hslStr](README.md#hslstr)
- [hslToRgb](README.md#hsltorgb)
- [mockArtifact](README.md#mockartifact)
- [mockArtifactWithRarity](README.md#mockartifactwithrarity)
- [planetPerlin](README.md#planetperlin)
- [planetRandom](README.md#planetrandom)
- [planetRandomInt](README.md#planetrandomint)
- [rgbStr](README.md#rgbstr)
- [titleCase](README.md#titlecase)

## Type aliases

### PixelCoords

Ƭ **PixelCoords**: `Object`

#### Type declaration

| Name | Type     |
| :--- | :------- |
| `x`  | `number` |
| `y`  | `number` |

---

### QuoteData

Ƭ **QuoteData**: `Object`

#### Type declaration

| Name     | Type     |
| :------- | :------- |
| `author` | `string` |
| `quote`  | `string` |

## Variables

### grayColors

• `Const` **grayColors**: `PlanetCosmeticInfo`

---

### mockCommon

• `Const` **mockCommon**: `Artifact`

---

### mockEpic

• `Const` **mockEpic**: `Artifact`

---

### mockLegendary

• `Const` **mockLegendary**: `Artifact`

---

### mockRare

• `Const` **mockRare**: `Artifact`

## Functions

### artifactName

▸ **artifactName**(`artifact`): `string`

#### Parameters

| Name       | Type                      |
| :--------- | :------------------------ |
| `artifact` | `undefined` \| `Artifact` |

#### Returns

`string`

---

### artifactRandom

▸ **artifactRandom**(`loc`): () => `number`

#### Parameters

| Name  | Type         |
| :---- | :----------- |
| `loc` | `ArtifactId` |

#### Returns

`fn`

▸ (): `number`

##### Returns

`number`

---

### artifactRandomInt

▸ **artifactRandomInt**(`loc`): () => `number`

#### Parameters

| Name  | Type         |
| :---- | :----------- |
| `loc` | `ArtifactId` |

#### Returns

`fn`

▸ (): `number`

##### Returns

`number`

---

### getBiomeRgbStr

▸ **getBiomeRgbStr**(`biome`): `string`

#### Parameters

| Name    | Type    |
| :------ | :------ |
| `biome` | `Biome` |

#### Returns

`string`

---

### getHatSizeName

▸ **getHatSizeName**(`planet`): `string`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `planet` | `Planet` |

#### Returns

`string`

---

### getOwnerColor

▸ **getOwnerColor**(`planet`): `string`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `planet` | `Planet` |

#### Returns

`string`

---

### getOwnerColorVec

▸ **getOwnerColorVec**(`planet`): `RGBAVec`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `planet` | `Planet` |

#### Returns

`RGBAVec`

---

### getPlanetBlurb

▸ **getPlanetBlurb**(`planet`): `string`

#### Parameters

| Name     | Type                    |
| :------- | :---------------------- |
| `planet` | `undefined` \| `Planet` |

#### Returns

`string`

---

### getPlanetBlurb2

▸ **getPlanetBlurb2**(`planet`): `string`

#### Parameters

| Name     | Type                    |
| :------- | :---------------------- |
| `planet` | `undefined` \| `Planet` |

#### Returns

`string`

---

### getPlanetClass

▸ **getPlanetClass**(`planet`): `UpgradeBranchName`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `planet` | `Planet` |

#### Returns

`UpgradeBranchName`

---

### getPlanetCosmetic

▸ **getPlanetCosmetic**(`planet`): `PlanetCosmeticInfo`

#### Parameters

| Name     | Type                    |
| :------- | :---------------------- |
| `planet` | `undefined` \| `Planet` |

#### Returns

`PlanetCosmeticInfo`

---

### getPlanetName

▸ **getPlanetName**(`planet`): `string`

#### Parameters

| Name     | Type                    |
| :------- | :---------------------- |
| `planet` | `undefined` \| `Planet` |

#### Returns

`string`

---

### getPlanetNameHash

▸ **getPlanetNameHash**(`locId`): `string`

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `locId` | `LocationId` |

#### Returns

`string`

---

### getPlanetTagline

▸ **getPlanetTagline**(`planet`): `string`

#### Parameters

| Name     | Type                    |
| :------- | :---------------------- |
| `planet` | `undefined` \| `Planet` |

#### Returns

`string`

---

### getPlanetTitle

▸ **getPlanetTitle**(`planet`): `string`

#### Parameters

| Name     | Type                    |
| :------- | :---------------------- |
| `planet` | `undefined` \| `Planet` |

#### Returns

`string`

---

### getPlayerColor

▸ **getPlayerColor**(`player`): `string`

#### Parameters

| Name     | Type         |
| :------- | :----------- |
| `player` | `EthAddress` |

#### Returns

`string`

---

### getPlayerColorVec

▸ **getPlayerColorVec**(`player`): `RGBAVec`

#### Parameters

| Name     | Type         |
| :------- | :----------- |
| `player` | `EthAddress` |

#### Returns

`RGBAVec`

---

### getRuinsInfo

▸ **getRuinsInfo**(`loc`): `RuinsInfo`

#### Parameters

| Name  | Type         |
| :---- | :----------- |
| `loc` | `LocationId` |

#### Returns

`RuinsInfo`

---

### hashToHue

▸ **hashToHue**(`hash`): `number`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `hash` | `string` |

#### Returns

`number`

---

### hatTypeFromHash

▸ **hatTypeFromHash**(`hash`): `HatType`

#### Parameters

| Name   | Type         |
| :----- | :----------- |
| `hash` | `LocationId` |

#### Returns

`HatType`

---

### hslStr

▸ **hslStr**(`h`, `s`, `l`): `string`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `h`  | `number` |
| `s`  | `number` |
| `l`  | `number` |

#### Returns

`string`

---

### hslToRgb

▸ **hslToRgb**(`__namedParameters`): `RGBVec`

#### Parameters

| Name                | Type     |
| :------------------ | :------- |
| `__namedParameters` | `HSLVec` |

#### Returns

`RGBVec`

---

### mockArtifact

▸ **mockArtifact**(`rarity`, `artifactType?`, `planetBiome?`): `Artifact`

#### Parameters

| Name           | Type             | Default value            |
| :------------- | :--------------- | :----------------------- |
| `rarity`       | `ArtifactRarity` | `undefined`              |
| `artifactType` | `ArtifactType`   | `ArtifactType.Spaceship` |
| `planetBiome`  | `Biome`          | `Biome.WASTELAND`        |

#### Returns

`Artifact`

---

### mockArtifactWithRarity

▸ **mockArtifactWithRarity**(`rarity`, `artifactType?`, `planetBiome?`): `Artifact`

#### Parameters

| Name           | Type             | Default value            |
| :------------- | :--------------- | :----------------------- |
| `rarity`       | `ArtifactRarity` | `undefined`              |
| `artifactType` | `ArtifactType`   | `ArtifactType.Spaceship` |
| `planetBiome`  | `Biome`          | `Biome.WASTELAND`        |

#### Returns

`Artifact`

---

### planetPerlin

▸ **planetPerlin**(`loc`): (`coords`: [`PixelCoords`](README.md#pixelcoords)) => `number`

#### Parameters

| Name  | Type         |
| :---- | :----------- |
| `loc` | `LocationId` |

#### Returns

`fn`

▸ (`coords`): `number`

##### Parameters

| Name     | Type                                   |
| :------- | :------------------------------------- |
| `coords` | [`PixelCoords`](README.md#pixelcoords) |

##### Returns

`number`

---

### planetRandom

▸ **planetRandom**(`loc`): () => `number`

#### Parameters

| Name  | Type         |
| :---- | :----------- |
| `loc` | `LocationId` |

#### Returns

`fn`

▸ (): `number`

##### Returns

`number`

---

### planetRandomInt

▸ **planetRandomInt**(`loc`): () => `number`

#### Parameters

| Name  | Type         |
| :---- | :----------- |
| `loc` | `LocationId` |

#### Returns

`fn`

▸ (): `number`

##### Returns

`number`

---

### rgbStr

▸ **rgbStr**(`rgb`): `string`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `rgb` | `RGBVec` |

#### Returns

`string`

---

### titleCase

▸ **titleCase**(`title`): `string`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `title` | `string` |

#### Returns

`string`
