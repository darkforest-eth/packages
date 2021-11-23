# @darkforest_eth/serde

This package contains serializers and deserializers for converting between
various representations of Dark Forest data, for example between raw data
received from blockchain calls to Dark Forest contracts and the typescript
types used across the client.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @darkforest_eth/serde
```

```bash
yarn add @darkforest_eth/serde
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as serde from 'http://cdn.skypack.dev/@darkforest_eth/serde';
```

## Table of contents

### Type aliases

- [RawArrival](README.md#rawarrival)
- [RawArtifactPointValues](README.md#rawartifactpointvalues)
- [RawArtifactWithMetadata](README.md#rawartifactwithmetadata)
- [RawPlanet](README.md#rawplanet)
- [RawPlanetExtendedInfo](README.md#rawplanetextendedinfo)
- [RawPlayer](README.md#rawplayer)
- [RawRevealedCoords](README.md#rawrevealedcoords)
- [RawUpgrade](README.md#rawupgrade)
- [RawUpgradesBranches](README.md#rawupgradesbranches)

### Functions

- [address](README.md#address)
- [artifactIdFromDecStr](README.md#artifactidfromdecstr)
- [artifactIdFromEthersBN](README.md#artifactidfromethersbn)
- [artifactIdFromHexStr](README.md#artifactidfromhexstr)
- [artifactIdToDecStr](README.md#artifactidtodecstr)
- [decodeArrival](README.md#decodearrival)
- [decodeArtifact](README.md#decodeartifact)
- [decodeArtifactPointValues](README.md#decodeartifactpointvalues)
- [decodePlanet](README.md#decodeplanet)
- [decodePlanetDefaults](README.md#decodeplanetdefaults)
- [decodePlayer](README.md#decodeplayer)
- [decodeRevealedCoords](README.md#decoderevealedcoords)
- [decodeUpgrade](README.md#decodeupgrade)
- [decodeUpgradeBranches](README.md#decodeupgradebranches)
- [isNetworkEvent](README.md#isnetworkevent)
- [locationIdFromBigInt](README.md#locationidfrombigint)
- [locationIdFromDecStr](README.md#locationidfromdecstr)
- [locationIdFromEthersBN](README.md#locationidfromethersbn)
- [locationIdFromHexStr](README.md#locationidfromhexstr)
- [locationIdToDecStr](README.md#locationidtodecstr)

## Type aliases

### RawArrival

Ƭ **RawArrival**: `Awaited`<`ReturnType`<`DarkForestCore`[``"getPlanetArrival"``]\>\>

---

### RawArtifactPointValues

Ƭ **RawArtifactPointValues**: `Awaited`<`ReturnType`<`DarkForestCore`[``"getArtifactPointValues"``]\>\>

---

### RawArtifactWithMetadata

Ƭ **RawArtifactWithMetadata**: `Awaited`<`ReturnType`<`DarkForestGetters`[``"getArtifactById"``]\>\>

---

### RawPlanet

Ƭ **RawPlanet**: `Awaited`<`ReturnType`<`DarkForestCore`[``"planets"``]\>\>

---

### RawPlanetExtendedInfo

Ƭ **RawPlanetExtendedInfo**: `Awaited`<`ReturnType`<`DarkForestCore`[``"planetsExtendedInfo"``]\>\>

---

### RawPlayer

Ƭ **RawPlayer**: `Awaited`<`ReturnType`<`DarkForestCore`[``"players"``]\>\>

---

### RawRevealedCoords

Ƭ **RawRevealedCoords**: `Awaited`<`ReturnType`<`DarkForestCore`[``"revealedCoords"``]\>\>

---

### RawUpgrade

Ƭ **RawUpgrade**: `Awaited`<`ReturnType`<`DarkForestGetters`[``"getArtifactById"``]\>\>[``"upgrade"``]

---

### RawUpgradesBranches

Ƭ **RawUpgradesBranches**: `Awaited`<`ReturnType`<`DarkForestCore`[``"getUpgrades"``]\>\>

## Functions

### address

▸ **address**(`str`): `EthAddress`

Converts a string to an `EthAddress`: a 0x-prefixed all lowercase hex string
of 40 hex characters. An object of the `EthAddress` type should only ever be
initialized through this constructor-like method. Throws if the provided
string cannot be parsed as an Ethereum address.

#### Parameters

| Name  | Type     | Description              |
| :---- | :------- | :----------------------- |
| `str` | `string` | An address-like `string` |

#### Returns

`EthAddress`

---

### artifactIdFromDecStr

▸ **artifactIdFromDecStr**(`artifactId`): `ArtifactId`

Converts a string representing a decimal number into an ArtifactID: a
non-0x-prefixed all lowercase hex string of exactly 64 hex characters
(0-padded if necessary). ArtifactIDs should only be instantiated through
`artifactIdFromHexStr`, `artifactIdFromDecStr`, and `artifactIdFromEthersBN`.

#### Parameters

| Name         | Type     | Description                                                               |
| :----------- | :------- | :------------------------------------------------------------------------ |
| `artifactId` | `string` | `string` of decimal digits, the base 10 representation of an artifact ID. |

#### Returns

`ArtifactId`

---

### artifactIdFromEthersBN

▸ **artifactIdFromEthersBN**(`artifactId`): `ArtifactId`

Converts a ethers.js BigNumber (type aliased here as EthersBN) representing a
decimal number into an ArtifactID: a non-0x-prefixed all lowercase hex string
of exactly 64 hex characters (0-padded if necessary). ArtifactIDs should only
be instantiated through `artifactIdFromHexStr`, `artifactIdFromDecStr`, and
`artifactIdFromEthersBN`.

#### Parameters

| Name         | Type        | Description                                     |
| :----------- | :---------- | :---------------------------------------------- |
| `artifactId` | `BigNumber` | ether.js `BigNumber` representing artifact's ID |

#### Returns

`ArtifactId`

---

### artifactIdFromHexStr

▸ **artifactIdFromHexStr**(`artifactId`): `ArtifactId`

Converts a possibly 0x-prefixed string of hex digits to an `ArtifactId`: a
non-0x-prefixed all lowercase hex string of exactly 64 hex characters
(0-padded if necessary). ArtifactIDs should only be instantiated through
`artifactIdFromHexStr`, `artifactIdFromDecStr`, and `artifactIdFromEthersBN`.

#### Parameters

| Name         | Type     | Description                                                                              |
| :----------- | :------- | :--------------------------------------------------------------------------------------- |
| `artifactId` | `string` | Possibly 0x-prefixed, possibly unpadded hex `string` representation of an artifact's ID. |

#### Returns

`ArtifactId`

---

### artifactIdToDecStr

▸ **artifactIdToDecStr**(`artifactId`): `string`

Converts an ArtifactID to a decimal string with equivalent numerical value;
can be used if you need to pass an artifact ID into a web3 call.

#### Parameters

| Name         | Type         | Description                                                                               |
| :----------- | :----------- | :---------------------------------------------------------------------------------------- |
| `artifactId` | `ArtifactId` | non-0x-prefixed lowercase hex `string` of 64 hex characters representing an artifact's ID |

#### Returns

`string`

---

### decodeArrival

▸ **decodeArrival**(`rawArrival`): `QueuedArrival`

Converts the raw typechain result of `DarkForestTypes.ArrivalData` struct to
to a `QueuedArrival` typescript typed object (see @darkforest_eth/types)

#### Parameters

| Name         | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Description                                                                                                               |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| `rawArrival` | [`BigNumber`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `number`, `BigNumber`, `BigNumber`] & { `arrivalTime`: `BigNumber` ; `arrivalType`: `number` ; `carriedArtifactId`: `BigNumber` ; `departureTime`: `BigNumber` ; `distance`: `BigNumber` ; `fromPlanet`: `BigNumber` ; `id`: `BigNumber` ; `player`: `string` ; `popArriving`: `BigNumber` ; `silverMoved`: `BigNumber` ; `toPlanet`: `BigNumber` } | Raw data of a `DarkForestTypes.ArrivalData` struct, returned from a blockchain call (assumed to be typed with typechain). |

#### Returns

`QueuedArrival`

---

### decodeArtifact

▸ **decodeArtifact**(`rawArtifactWithMetadata`): `Artifact`

Converts the raw typechain result of `DarkForestTypes.ArtifactWithMetadata`
struct to an `Artifact` typescript typed object (see @darkforest_eth/types).

#### Parameters

| Name                      | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Description                                                                                                         |
| :------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------ |
| `rawArtifactWithMetadata` | [[`boolean`, `BigNumber`, `BigNumber`, `number`, `number`, `BigNumber`, `string`, `number`, `BigNumber`, `BigNumber`, `BigNumber`] & { `artifactType`: `number` ; `discoverer`: `string` ; `id`: `BigNumber` ; `isInitialized`: `boolean` ; `lastActivated`: `BigNumber` ; `lastDeactivated`: `BigNumber` ; `mintedAtTimestamp`: `BigNumber` ; `planetBiome`: `number` ; `planetDiscoveredOn`: `BigNumber` ; `rarity`: `number` ; `wormholeTo`: `BigNumber` }, [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber` }, [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber` }] & { `artifact`: [`boolean`, `BigNumber`, `BigNumber`, `number`, `number`, `BigNumber`, `string`, `number`, `BigNumber`, `BigNumber`, `BigNumber`] & { `artifactType`: `number` ; `discoverer`: `string` ; `id`: `BigNumber` ; `isInitialized`: `boolean` ; `lastActivated`: `BigNumber` ; `lastDeactivated`: `BigNumber` ; `mintedAtTimestamp`: `BigNumber` ; `planetBiome`: `number` ; `planetDiscoveredOn`: `BigNumber` ; `rarity`: `number` ; `wormholeTo`: `BigNumber` } ; `locationId`: `BigNumber` ; `owner`: `string` ; `timeDelayedUpgrade`: [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber` } ; `upgrade`: [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber` } ; `voyageId`: `BigNumber` } | Raw data of an `ArtifactWithMetadata` struct, returned from a blockchain call (assumed to be typed with typechain). |

#### Returns

`Artifact`

---

### decodeArtifactPointValues

▸ **decodeArtifactPointValues**(`rawPointValues`): `ArtifactPointValues`

Converts the raw typechain result of a call to
`DarkForestCore.getArtifactPointValues` to an `ArtifactPointValues`
typescript typed object (see @darkforest_eth/types).

#### Parameters

| Name             | Type                                                                           |
| :--------------- | :----------------------------------------------------------------------------- |
| `rawPointValues` | [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] |

#### Returns

`ArtifactPointValues`

---

### decodePlanet

▸ **decodePlanet**(`rawLocationId`, `rawPlanet`, `rawPlanetExtendedInfo`): `Planet`

Converts data obtained from a contract call (typed with Typechain) into a
`Planet` that can be used by the client (see @darkforest_eth/types). Note
that some `Planet` fields (1) store client data that the blockchain is not
aware of, such as `unconfirmedDepartures`, (2) store derived data that is
calculated later by the client, such as `silverSpent` and `bonus`, or (3)
store data which must be added later from the results of additional contract
calls, such as `coordsRevealed` and `heldArtifactIds`. Therefore this
function may not be very useful to you outside of the specific context of the
provided Dark Forest web client.

#### Parameters

| Name                    | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Description                                                                       |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| `rawLocationId`         | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | string of decimal digits representing a number equal to a planet's ID             |
| `rawPlanet`             | [`string`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defense`: `BigNumber` ; `isHomePlanet`: `boolean` ; `owner`: `string` ; `planetLevel`: `BigNumber` ; `planetType`: `number` ; `population`: `BigNumber` ; `populationCap`: `BigNumber` ; `populationGrowth`: `BigNumber` ; `range`: `BigNumber` ; `silver`: `BigNumber` ; `silverCap`: `BigNumber` ; `silverGrowth`: `BigNumber` ; `speed`: `BigNumber` }                             | typechain-typed result of a call returning a `DarkForestTypes.Planet`             |
| `rawPlanetExtendedInfo` | [`boolean`, `BigNumber`, `BigNumber`, `BigNumber`, `number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `boolean`, `BigNumber`, `boolean`] & { `createdAt`: `BigNumber` ; `destroyed`: `boolean` ; `hasTriedFindingArtifact`: `boolean` ; `hatLevel`: `BigNumber` ; `isInitialized`: `boolean` ; `lastUpdated`: `BigNumber` ; `perlin`: `BigNumber` ; `prospectedBlockNumber`: `BigNumber` ; `spaceType`: `number` ; `upgradeState0`: `BigNumber` ; `upgradeState1`: `BigNumber` ; `upgradeState2`: `BigNumber` } | typechain-typed result of a call returning a `DarkForestTypes.PlanetExtendedInfo` |

#### Returns

`Planet`

---

### decodePlanetDefaults

▸ **decodePlanetDefaults**(`rawDefaults`): `PlanetDefaults`

Converts the raw typechain result of a call which fetches a
`DarkForestTypes.PlanetDefaultStats[]` array of structs, and converts it into
an object with type `PlanetDefaults` (see @darkforest_eth/types).

#### Parameters

| Name          | Type                                                                                                                                                                                                                                                                                                                                                                               | Description                                                                                                                |
| :------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------- |
| `rawDefaults` | [`string`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `barbarianPercentage`: `BigNumber` ; `defense`: `BigNumber` ; `label`: `string` ; `populationCap`: `BigNumber` ; `populationGrowth`: `BigNumber` ; `range`: `BigNumber` ; `silverCap`: `BigNumber` ; `silverGrowth`: `BigNumber` ; `speed`: `BigNumber` }[] | result of a ethers.js contract call which returns a raw `DarkForestTypes.PlanetDefaultStats` struct, typed with typechain. |

#### Returns

`PlanetDefaults`

---

### decodePlayer

▸ **decodePlayer**(`rawPlayer`): `Player`

Converts the raw typechain result of a call which fetches a
`DarkForestTypes.Player` struct, and converts it into an object
with type `Player` (see @darkforest_eth/types) that can be used by a client.

#### Parameters

| Name        | Type                                                                                                                                                                                                                                                     | Description                                                                                                     |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| `rawPlayer` | [`boolean`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `homePlanetId`: `BigNumber` ; `initTimestamp`: `BigNumber` ; `isInitialized`: `boolean` ; `lastRevealTimestamp`: `BigNumber` ; `player`: `string` ; `score`: `BigNumber` } | result of an ethers.js contract call which returns a raw `DarkForestTypes.Player` struct, typed with typechain. |

#### Returns

`Player`

---

### decodeRevealedCoords

▸ **decodeRevealedCoords**(`rawRevealedCoords`): `RevealedCoords`

Converts the result of a typechain-typed ethers.js contract call returning a
`DarkForestTypes.RevealedCoords` struct into a `RevealedCoords` object (see

**`darkforest_eth/types)`**

#### Parameters

| Name                | Type                                                                                                                                           | Description                                                                                                |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| `rawRevealedCoords` | [`BigNumber`, `BigNumber`, `BigNumber`, `string`] & { `locationId`: `BigNumber` ; `revealer`: `string` ; `x`: `BigNumber` ; `y`: `BigNumber` } | the result of a typechain-typed ethers.js contract call returning a DarkForestTypes.RevealedCoords` struct |

#### Returns

`RevealedCoords`

---

### decodeUpgrade

▸ **decodeUpgrade**(`rawUpgrade`): `Upgrade`

Converts raw data received from a typechain-typed ethers.js contract call
returning a `DarkForestTypes.Upgrade` into an `Upgrade` object (see

**`darkforest_eth/types)`**

#### Parameters

| Name         | Type                                                                                                                                                                                                                                       | Description                                                                                            |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| `rawUpgrade` | [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber` } | raw data received from a typechain-typed ethers.js contract call returning a `DarkForestTypes.Upgrade` |

#### Returns

`Upgrade`

---

### decodeUpgradeBranches

▸ **decodeUpgradeBranches**(`rawUpgradeBranches`): `UpgradeBranches`

Converts the raw return value of an ether.js contract call to
`DarkForestCore.getUpgrades` to a 2D array of `Upgrade`s.

#### Parameters

| Name                 | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Description                                                                |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------- |
| `rawUpgradeBranches` | [[[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }, [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }, [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }, [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }], [[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }, [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }, [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }, [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }], [[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }, [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }, [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }, [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }]] | raw return value of ether.js contract call to `DarkForestCore.getUpgrades` |

#### Returns

`UpgradeBranches`

---

### isNetworkEvent

▸ **isNetworkEvent**(`event`): event is NetworkEvent

Returns whether or not the given event is an instance of {@link NetworkEvent}. Not super
stringent but works for now.

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `event` | `any` |

#### Returns

event is NetworkEvent

---

### locationIdFromBigInt

▸ **locationIdFromBigInt**(`location`): `LocationId`

Converts a BigInteger representation of location ID into a LocationID: a
non-0x-prefixed all lowercase hex string of exactly 64 hex characters
(0-padded). LocationIDs should only be instantiated through
`locationIdFromHexStr`, `locationIdFromDecStr`, `locationIdFromBigInt`, and
`locationIdFromEthersBN`.

#### Parameters

| Name       | Type         | Description                                   |
| :--------- | :----------- | :-------------------------------------------- |
| `location` | `BigInteger` | `BigInteger` representation of a location ID. |

#### Returns

`LocationId`

---

### locationIdFromDecStr

▸ **locationIdFromDecStr**(`location`): `LocationId`

Converts a string representing a decimal number into a LocationID: a
non-0x-prefixed all lowercase hex string of exactly 64 hex characters
(0-padded if necessary). LocationIDs should only be instantiated through
`locationIdFromHexStr`, `locationIdFromDecStr`, `locationIdFromBigInt`, and
`locationIdFromEthersBN`.

#### Parameters

| Name       | Type     | Description                                                              |
| :--------- | :------- | :----------------------------------------------------------------------- |
| `location` | `string` | `string` of decimal digits, the base 10 representation of a location ID. |

#### Returns

`LocationId`

---

### locationIdFromEthersBN

▸ **locationIdFromEthersBN**(`location`): `LocationId`

Converts an ethers.js BigNumber (type aliased here as `EthersBN`)
representation of a location ID into a LocationID: a non-0x-prefixed all
lowercase hex string of exactly 64 hex characters (0-padded). LocationIDs
should only be instantiated through `locationIdFromHexStr`,
`locationIdFromDecStr`, `locationIdFromBigInt`, and `locationIdFromEthersBN`.

#### Parameters

| Name       | Type        | Description                                           |
| :--------- | :---------- | :---------------------------------------------------- |
| `location` | `BigNumber` | ethers.js `BigNumber` representation of a locationID. |

#### Returns

`LocationId`

---

### locationIdFromHexStr

▸ **locationIdFromHexStr**(`location`): `LocationId`

Converts a possibly 0x-prefixed string of hex digits to a `LocationId`: a
non-0x-prefixed all lowercase hex string of exactly 64 hex characters
(0-padded if necessary). LocationIDs should only be instantiated through
`locationIdFromHexStr`, `locationIdFromDecStr`, `locationIdFromBigInt`, and
`locationIdFromEthersBN`.

#### Parameters

| Name       | Type     | Description                                                               |
| :--------- | :------- | :------------------------------------------------------------------------ |
| `location` | `string` | A possibly 0x-prefixed `string` of hex digits representing a location ID. |

#### Returns

`LocationId`

---

### locationIdToDecStr

▸ **locationIdToDecStr**(`locationId`): `string`

Converts a LocationID to a decimal string with the same numerical value; can
be used if you need to pass an artifact ID into a web3 call.

#### Parameters

| Name         | Type         | Description                                             |
| :----------- | :----------- | :------------------------------------------------------ |
| `locationId` | `LocationId` | LocationID to convert into a `string` of decimal digits |

#### Returns

`string`
