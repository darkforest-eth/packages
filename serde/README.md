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
- [RawPlanetExtendedInfo2](README.md#rawplanetextendedinfo2)
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
- [hashToInt](README.md#hashtoint)
- [isNetworkEvent](README.md#isnetworkevent)
- [isUnconfirmedActivateArtifact](README.md#isunconfirmedactivateartifact)
- [isUnconfirmedActivateArtifactTx](README.md#isunconfirmedactivateartifacttx)
- [isUnconfirmedBuyHat](README.md#isunconfirmedbuyhat)
- [isUnconfirmedBuyHatTx](README.md#isunconfirmedbuyhattx)
- [isUnconfirmedCapturePlanet](README.md#isunconfirmedcaptureplanet)
- [isUnconfirmedCapturePlanetTx](README.md#isunconfirmedcaptureplanettx)
- [isUnconfirmedDeactivateArtifact](README.md#isunconfirmeddeactivateartifact)
- [isUnconfirmedDeactivateArtifactTx](README.md#isunconfirmeddeactivateartifacttx)
- [isUnconfirmedDepositArtifact](README.md#isunconfirmeddepositartifact)
- [isUnconfirmedDepositArtifactTx](README.md#isunconfirmeddepositartifacttx)
- [isUnconfirmedFindArtifact](README.md#isunconfirmedfindartifact)
- [isUnconfirmedFindArtifactTx](README.md#isunconfirmedfindartifacttx)
- [isUnconfirmedGetShips](README.md#isunconfirmedgetships)
- [isUnconfirmedGetShipsTx](README.md#isunconfirmedgetshipstx)
- [isUnconfirmedInit](README.md#isunconfirmedinit)
- [isUnconfirmedInitTx](README.md#isunconfirmedinittx)
- [isUnconfirmedInvadePlanet](README.md#isunconfirmedinvadeplanet)
- [isUnconfirmedInvadePlanetTx](README.md#isunconfirmedinvadeplanettx)
- [isUnconfirmedMove](README.md#isunconfirmedmove)
- [isUnconfirmedMoveTx](README.md#isunconfirmedmovetx)
- [isUnconfirmedProspectPlanet](README.md#isunconfirmedprospectplanet)
- [isUnconfirmedProspectPlanetTx](README.md#isunconfirmedprospectplanettx)
- [isUnconfirmedRelease](README.md#isunconfirmedrelease)
- [isUnconfirmedReleaseTx](README.md#isunconfirmedreleasetx)
- [isUnconfirmedReveal](README.md#isunconfirmedreveal)
- [isUnconfirmedRevealTx](README.md#isunconfirmedrevealtx)
- [isUnconfirmedTransfer](README.md#isunconfirmedtransfer)
- [isUnconfirmedTransferTx](README.md#isunconfirmedtransfertx)
- [isUnconfirmedUpgrade](README.md#isunconfirmedupgrade)
- [isUnconfirmedUpgradeTx](README.md#isunconfirmedupgradetx)
- [isUnconfirmedWithdrawArtifact](README.md#isunconfirmedwithdrawartifact)
- [isUnconfirmedWithdrawArtifactTx](README.md#isunconfirmedwithdrawartifacttx)
- [isUnconfirmedWithdrawSilver](README.md#isunconfirmedwithdrawsilver)
- [isUnconfirmedWithdrawSilverTx](README.md#isunconfirmedwithdrawsilvertx)
- [locationIdFromBigInt](README.md#locationidfrombigint)
- [locationIdFromDecStr](README.md#locationidfromdecstr)
- [locationIdFromEthersBN](README.md#locationidfromethersbn)
- [locationIdFromHexStr](README.md#locationidfromhexstr)
- [locationIdToDecStr](README.md#locationidtodecstr)

## Type aliases

### RawArrival

Ƭ **RawArrival**: `Awaited`<`ReturnType`<`DarkForest`[``"getPlanetArrival"``]\>\>

---

### RawArtifactPointValues

Ƭ **RawArtifactPointValues**: `Awaited`<`ReturnType`<`DarkForest`[``"getArtifactPointValues"``]\>\>

---

### RawArtifactWithMetadata

Ƭ **RawArtifactWithMetadata**: `Awaited`<`ReturnType`<`DarkForest`[``"getArtifactById"``]\>\>

---

### RawPlanet

Ƭ **RawPlanet**: `Awaited`<`ReturnType`<`DarkForest`[``"planets"``]\>\>

---

### RawPlanetExtendedInfo

Ƭ **RawPlanetExtendedInfo**: `Awaited`<`ReturnType`<`DarkForest`[``"planetsExtendedInfo"``]\>\>

---

### RawPlanetExtendedInfo2

Ƭ **RawPlanetExtendedInfo2**: `Awaited`<`ReturnType`<`DarkForest`[``"planetsExtendedInfo2"``]\>\>

---

### RawPlayer

Ƭ **RawPlayer**: `Awaited`<`ReturnType`<`DarkForest`[``"players"``]\>\>

---

### RawRevealedCoords

Ƭ **RawRevealedCoords**: `Awaited`<`ReturnType`<`DarkForest`[``"revealedCoords"``]\>\>

---

### RawUpgrade

Ƭ **RawUpgrade**: `Awaited`<`ReturnType`<`DarkForest`[``"getArtifactById"``]\>\>[``"upgrade"``]

---

### RawUpgradesBranches

Ƭ **RawUpgradesBranches**: `Awaited`<`ReturnType`<`DarkForest`[``"getUpgrades"``]\>\>

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

Converts the raw typechain result of `ArrivalTypes.ArrivalData` struct to
to a `QueuedArrival` typescript typed object (see @darkforest_eth/types)

#### Parameters

| Name         | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Description                                                                                                            |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `rawArrival` | [`BigNumber`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `number`, `BigNumber`, `BigNumber`] & { `arrivalTime`: `BigNumber` ; `arrivalType`: `number` ; `carriedArtifactId`: `BigNumber` ; `departureTime`: `BigNumber` ; `distance`: `BigNumber` ; `fromPlanet`: `BigNumber` ; `id`: `BigNumber` ; `player`: `string` ; `popArriving`: `BigNumber` ; `silverMoved`: `BigNumber` ; `toPlanet`: `BigNumber` } | Raw data of a `ArrivalTypes.ArrivalData` struct, returned from a blockchain call (assumed to be typed with typechain). |

#### Returns

`QueuedArrival`

---

### decodeArtifact

▸ **decodeArtifact**(`rawArtifactWithMetadata`): `Artifact`

Converts the raw typechain result of `ArtifactTypes.ArtifactWithMetadata`
struct to an `Artifact` typescript typed object (see @darkforest_eth/types).

#### Parameters

| Name                      | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Description                                                                                                         |
| :------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------ |
| `rawArtifactWithMetadata` | [[`boolean`, `BigNumber`, `BigNumber`, `number`, `number`, `BigNumber`, `string`, `number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `string`] & { `activations`: `BigNumber` ; `artifactType`: `number` ; `controller`: `string` ; `discoverer`: `string` ; `id`: `BigNumber` ; `isInitialized`: `boolean` ; `lastActivated`: `BigNumber` ; `lastDeactivated`: `BigNumber` ; `mintedAtTimestamp`: `BigNumber` ; `planetBiome`: `number` ; `planetDiscoveredOn`: `BigNumber` ; `rarity`: `number` ; `wormholeTo`: `BigNumber` }, [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber` }, [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber` }] & { `artifact`: [`boolean`, `BigNumber`, `BigNumber`, `number`, `number`, `BigNumber`, `string`, `number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `string`] & { `activations`: `BigNumber` ; `artifactType`: `number` ; `controller`: `string` ; `discoverer`: `string` ; `id`: `BigNumber` ; `isInitialized`: `boolean` ; `lastActivated`: `BigNumber` ; `lastDeactivated`: `BigNumber` ; `mintedAtTimestamp`: `BigNumber` ; `planetBiome`: `number` ; `planetDiscoveredOn`: `BigNumber` ; `rarity`: `number` ; `wormholeTo`: `BigNumber` } ; `locationId`: `BigNumber` ; `owner`: `string` ; `timeDelayedUpgrade`: [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber` } ; `upgrade`: [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber` } ; `voyageId`: `BigNumber` } | Raw data of an `ArtifactWithMetadata` struct, returned from a blockchain call (assumed to be typed with typechain). |

#### Returns

`Artifact`

---

### decodeArtifactPointValues

▸ **decodeArtifactPointValues**(`rawPointValues`): `ArtifactPointValues`

Converts the raw typechain result of a call to
`DarkForest.getArtifactPointValues` to an `ArtifactPointValues`
typescript typed object (see @darkforest_eth/types).

#### Parameters

| Name             | Type                                                                           |
| :--------------- | :----------------------------------------------------------------------------- |
| `rawPointValues` | [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] |

#### Returns

`ArtifactPointValues`

---

### decodePlanet

▸ **decodePlanet**(`rawLocationId`, `rawPlanet`, `rawPlanetExtendedInfo`, `rawPlanetExtendedInfo2`): `Planet`

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

| Name                     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Description                                                                    |
| :----------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| `rawLocationId`          | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | string of decimal digits representing a number equal to a planet's ID          |
| `rawPlanet`              | [`string`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defense`: `BigNumber` ; `isHomePlanet`: `boolean` ; `owner`: `string` ; `planetLevel`: `BigNumber` ; `planetType`: `number` ; `population`: `BigNumber` ; `populationCap`: `BigNumber` ; `populationGrowth`: `BigNumber` ; `range`: `BigNumber` ; `silver`: `BigNumber` ; `silverCap`: `BigNumber` ; `silverGrowth`: `BigNumber` ; `speed`: `BigNumber` }                                                                     | typechain-typed result of a call returning a `PlanetTypes.Planet`              |
| `rawPlanetExtendedInfo`  | [`boolean`, `BigNumber`, `BigNumber`, `BigNumber`, `number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `boolean`, `BigNumber`, `boolean`, `BigNumber`] & { `createdAt`: `BigNumber` ; `destroyed`: `boolean` ; `hasTriedFindingArtifact`: `boolean` ; `hatLevel`: `BigNumber` ; `isInitialized`: `boolean` ; `lastUpdated`: `BigNumber` ; `perlin`: `BigNumber` ; `prospectedBlockNumber`: `BigNumber` ; `spaceJunk`: `BigNumber` ; `spaceType`: `number` ; `upgradeState0`: `BigNumber` ; `upgradeState1`: `BigNumber` ; `upgradeState2`: `BigNumber` } | typechain-typed result of a call returning a `PlanetTypes.PlanetExtendedInfo`  |
| `rawPlanetExtendedInfo2` | [`boolean`, `BigNumber`, `string`, `BigNumber`, `string`] & { `capturer`: `string` ; `invadeStartBlock`: `BigNumber` ; `invader`: `string` ; `isInitialized`: `boolean` ; `pausers`: `BigNumber` }                                                                                                                                                                                                                                                                                                                                                                 | typechain-typed result of a call returning a `PlanetTypes.PlanetExtendedInfo2` |

#### Returns

`Planet`

---

### decodePlanetDefaults

▸ **decodePlanetDefaults**(`rawDefaults`): `PlanetDefaults`

Converts the raw typechain result of a call which fetches a
`PlanetTypes.PlanetDefaultStats[]` array of structs, and converts it into
an object with type `PlanetDefaults` (see @darkforest_eth/types).

#### Parameters

| Name          | Type                                                                                                                                                                                                                                                                                                                                                                               | Description                                                                                                            |
| :------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `rawDefaults` | [`string`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `barbarianPercentage`: `BigNumber` ; `defense`: `BigNumber` ; `label`: `string` ; `populationCap`: `BigNumber` ; `populationGrowth`: `BigNumber` ; `range`: `BigNumber` ; `silverCap`: `BigNumber` ; `silverGrowth`: `BigNumber` ; `speed`: `BigNumber` }[] | result of a ethers.js contract call which returns a raw `PlanetTypes.PlanetDefaultStats` struct, typed with typechain. |

#### Returns

`PlanetDefaults`

---

### decodePlayer

▸ **decodePlayer**(`rawPlayer`): `Player`

Converts the raw typechain result of a call which fetches a
`PlayerTypes.Player` struct, and converts it into an object
with type `Player` (see @darkforest_eth/types) that can be used by a client.

#### Parameters

| Name        | Type                                                                                                                                                                                                                                                                                                                                                                                 | Description                                                                                                 |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| `rawPlayer` | [`boolean`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `boolean`] & { `claimedShips`: `boolean` ; `homePlanetId`: `BigNumber` ; `initTimestamp`: `BigNumber` ; `isInitialized`: `boolean` ; `lastRevealTimestamp`: `BigNumber` ; `player`: `string` ; `score`: `BigNumber` ; `spaceJunk`: `BigNumber` ; `spaceJunkLimit`: `BigNumber` } | result of an ethers.js contract call which returns a raw `PlayerTypes.Player` struct, typed with typechain. |

#### Returns

`Player`

---

### decodeRevealedCoords

▸ **decodeRevealedCoords**(`rawRevealedCoords`): `RevealedCoords`

Converts the result of a typechain-typed ethers.js contract call returning a
`RevealTypes.RevealedCoords` struct into a `RevealedCoords` object (see

**`darkforest_eth/types)`**

#### Parameters

| Name                | Type                                                                                                                                           | Description                                                                                            |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| `rawRevealedCoords` | [`BigNumber`, `BigNumber`, `BigNumber`, `string`] & { `locationId`: `BigNumber` ; `revealer`: `string` ; `x`: `BigNumber` ; `y`: `BigNumber` } | the result of a typechain-typed ethers.js contract call returning a RevealTypes.RevealedCoords` struct |

#### Returns

`RevealedCoords`

---

### decodeUpgrade

▸ **decodeUpgrade**(`rawUpgrade`): `Upgrade`

Converts raw data received from a typechain-typed ethers.js contract call
returning a `UpgradeTypes.Upgrade` into an `Upgrade` object (see

**`darkforest_eth/types)`**

#### Parameters

| Name         | Type                                                                                                                                                                                                                                       | Description                                                                                         |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------- |
| `rawUpgrade` | [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber` } | raw data received from a typechain-typed ethers.js contract call returning a `UpgradeTypes.Upgrade` |

#### Returns

`Upgrade`

---

### decodeUpgradeBranches

▸ **decodeUpgradeBranches**(`rawUpgradeBranches`): `UpgradeBranches`

Converts the raw return value of an ether.js contract call to
`DarkForest.getUpgrades` to a 2D array of `Upgrade`s.

#### Parameters

| Name                 | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Description                                                            |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------- |
| `rawUpgradeBranches` | [[[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }, [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }, [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }, [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }], [[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }, [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }, [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }, [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }], [[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }, [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }, [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }, [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `defMultiplier`: `BigNumber` ; `popCapMultiplier`: `BigNumber` ; `popGroMultiplier`: `BigNumber` ; `rangeMultiplier`: `BigNumber` ; `speedMultiplier`: `BigNumber`  }]] | raw return value of ether.js contract call to `DarkForest.getUpgrades` |

#### Returns

`UpgradeBranches`

---

### hashToInt

▸ **hashToInt**(`hash`): `number`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `hash` | `string` |

#### Returns

`number`

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

### isUnconfirmedActivateArtifact

▸ **isUnconfirmedActivateArtifact**(`txIntent`): txIntent is UnconfirmedActivateArtifact

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedActivateArtifact

---

### isUnconfirmedActivateArtifactTx

▸ **isUnconfirmedActivateArtifactTx**(`tx`): tx is Transaction<UnconfirmedActivateArtifact\>

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedActivateArtifact\>

---

### isUnconfirmedBuyHat

▸ **isUnconfirmedBuyHat**(`txIntent`): txIntent is UnconfirmedBuyHat

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedBuyHat

---

### isUnconfirmedBuyHatTx

▸ **isUnconfirmedBuyHatTx**(`tx`): tx is Transaction<UnconfirmedBuyHat\>

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedBuyHat\>

---

### isUnconfirmedCapturePlanet

▸ **isUnconfirmedCapturePlanet**(`txIntent`): txIntent is UnconfirmedCapturePlanet

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedCapturePlanet

---

### isUnconfirmedCapturePlanetTx

▸ **isUnconfirmedCapturePlanetTx**(`tx`): tx is Transaction<UnconfirmedCapturePlanet\>

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedCapturePlanet\>

---

### isUnconfirmedDeactivateArtifact

▸ **isUnconfirmedDeactivateArtifact**(`txIntent`): txIntent is UnconfirmedDeactivateArtifact

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedDeactivateArtifact

---

### isUnconfirmedDeactivateArtifactTx

▸ **isUnconfirmedDeactivateArtifactTx**(`tx`): tx is Transaction<UnconfirmedDeactivateArtifact\>

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedDeactivateArtifact\>

---

### isUnconfirmedDepositArtifact

▸ **isUnconfirmedDepositArtifact**(`txIntent`): txIntent is UnconfirmedDepositArtifact

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedDepositArtifact

---

### isUnconfirmedDepositArtifactTx

▸ **isUnconfirmedDepositArtifactTx**(`tx`): tx is Transaction<UnconfirmedDepositArtifact\>

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedDepositArtifact\>

---

### isUnconfirmedFindArtifact

▸ **isUnconfirmedFindArtifact**(`txIntent`): txIntent is UnconfirmedFindArtifact

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedFindArtifact

---

### isUnconfirmedFindArtifactTx

▸ **isUnconfirmedFindArtifactTx**(`tx`): tx is Transaction<UnconfirmedFindArtifact\>

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedFindArtifact\>

---

### isUnconfirmedGetShips

▸ **isUnconfirmedGetShips**(`txIntent`): txIntent is UnconfirmedGetShips

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedGetShips

---

### isUnconfirmedGetShipsTx

▸ **isUnconfirmedGetShipsTx**(`tx`): tx is Transaction<UnconfirmedGetShips\>

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedGetShips\>

---

### isUnconfirmedInit

▸ **isUnconfirmedInit**(`txIntent`): txIntent is UnconfirmedInit

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedInit

---

### isUnconfirmedInitTx

▸ **isUnconfirmedInitTx**(`tx`): tx is Transaction<UnconfirmedInit\>

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedInit\>

---

### isUnconfirmedInvadePlanet

▸ **isUnconfirmedInvadePlanet**(`txIntent`): txIntent is UnconfirmedInvadePlanet

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedInvadePlanet

---

### isUnconfirmedInvadePlanetTx

▸ **isUnconfirmedInvadePlanetTx**(`tx`): tx is Transaction<UnconfirmedInvadePlanet\>

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedInvadePlanet\>

---

### isUnconfirmedMove

▸ **isUnconfirmedMove**(`txIntent`): txIntent is UnconfirmedMove

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedMove

---

### isUnconfirmedMoveTx

▸ **isUnconfirmedMoveTx**(`tx`): tx is Transaction<UnconfirmedMove\>

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedMove\>

---

### isUnconfirmedProspectPlanet

▸ **isUnconfirmedProspectPlanet**(`txIntent`): txIntent is UnconfirmedProspectPlanet

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedProspectPlanet

---

### isUnconfirmedProspectPlanetTx

▸ **isUnconfirmedProspectPlanetTx**(`tx`): tx is Transaction<UnconfirmedProspectPlanet\>

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedProspectPlanet\>

---

### isUnconfirmedRelease

▸ **isUnconfirmedRelease**(`txIntent`): txIntent is UnconfirmedMove

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedMove

---

### isUnconfirmedReleaseTx

▸ **isUnconfirmedReleaseTx**(`tx`): tx is Transaction<UnconfirmedMove\>

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedMove\>

---

### isUnconfirmedReveal

▸ **isUnconfirmedReveal**(`txIntent`): txIntent is UnconfirmedReveal

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedReveal

---

### isUnconfirmedRevealTx

▸ **isUnconfirmedRevealTx**(`tx`): tx is Transaction<UnconfirmedReveal\>

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedReveal\>

---

### isUnconfirmedTransfer

▸ **isUnconfirmedTransfer**(`txIntent`): txIntent is UnconfirmedPlanetTransfer

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedPlanetTransfer

---

### isUnconfirmedTransferTx

▸ **isUnconfirmedTransferTx**(`tx`): tx is Transaction<UnconfirmedPlanetTransfer\>

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedPlanetTransfer\>

---

### isUnconfirmedUpgrade

▸ **isUnconfirmedUpgrade**(`txIntent`): txIntent is UnconfirmedUpgrade

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedUpgrade

---

### isUnconfirmedUpgradeTx

▸ **isUnconfirmedUpgradeTx**(`tx`): tx is Transaction<UnconfirmedUpgrade\>

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedUpgrade\>

---

### isUnconfirmedWithdrawArtifact

▸ **isUnconfirmedWithdrawArtifact**(`txIntent`): txIntent is UnconfirmedWithdrawArtifact

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedWithdrawArtifact

---

### isUnconfirmedWithdrawArtifactTx

▸ **isUnconfirmedWithdrawArtifactTx**(`tx`): tx is Transaction<UnconfirmedWithdrawArtifact\>

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedWithdrawArtifact\>

---

### isUnconfirmedWithdrawSilver

▸ **isUnconfirmedWithdrawSilver**(`txIntent`): txIntent is UnconfirmedWithdrawSilver

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `txIntent` | `TxIntent` |

#### Returns

txIntent is UnconfirmedWithdrawSilver

---

### isUnconfirmedWithdrawSilverTx

▸ **isUnconfirmedWithdrawSilverTx**(`tx`): tx is Transaction<UnconfirmedWithdrawSilver\>

#### Parameters

| Name | Type                       |
| :--- | :------------------------- |
| `tx` | `Transaction`<`TxIntent`\> |

#### Returns

tx is Transaction<UnconfirmedWithdrawSilver\>

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
