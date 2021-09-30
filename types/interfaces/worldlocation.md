# Interface: WorldLocation

A location in the world with relevant properties: the location's ID
(deterministically generated from its coords), the spacetype perlin value at
these coordinates, and the biomebase perlin value at these coordinates
(combined with spacetype to derive the biome here)

## Table of contents

### Properties

- [biomebase](worldlocation.md#biomebase)
- [coords](worldlocation.md#coords)
- [hash](worldlocation.md#hash)
- [perlin](worldlocation.md#perlin)

## Properties

### biomebase

• **biomebase**: _number_

---

### coords

• **coords**: [_WorldCoords_](worldcoords.md)

---

### hash

• **hash**: [_LocationId_](../README.md#locationid)

---

### perlin

• **perlin**: _number_
