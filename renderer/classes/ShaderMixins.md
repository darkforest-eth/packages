# Class: ShaderMixins

these are 'includes' that you can add into shader template strings as in `${include}`

## Table of contents

### Constructors

- [constructor](ShaderMixins.md#constructor)

### Properties

- [PI](ShaderMixins.md#pi)
- [arcTan](ShaderMixins.md#arctan)
- [blend](ShaderMixins.md#blend)
- [desaturate](ShaderMixins.md#desaturate)
- [fade](ShaderMixins.md#fade)
- [hueShift](ShaderMixins.md#hueshift)
- [invertBrightness](ShaderMixins.md#invertbrightness)
- [invertColors](ShaderMixins.md#invertcolors)
- [mod2pi](ShaderMixins.md#mod2pi)
- [modFloat](ShaderMixins.md#modfloat)
- [noiseVec3](ShaderMixins.md#noisevec3)
- [perlin3](ShaderMixins.md#perlin3)
- [radAtAngle](ShaderMixins.md#radatangle)
- [seededRandom](ShaderMixins.md#seededrandom)
- [seededRandomVec2](ShaderMixins.md#seededrandomvec2)
- [simplex4](ShaderMixins.md#simplex4)

## Constructors

### constructor

• **new ShaderMixins**()

## Properties

### PI

▪ `Static` **PI**: `string`

---

### arcTan

▪ `Static` **arcTan**: `string`

Good atan that returns [0, 2Pi)

---

### blend

▪ `Static` **blend**: `string`

1 minus source alpha blend mode

---

### desaturate

▪ `Static` **desaturate**: `string`

---

### fade

▪ `Static` **fade**: `string`

Fade out the last `tail * 100` percent of `value` to 0 - a plateau with a steep dropoff

---

### hueShift

▪ `Static` **hueShift**: `string`

---

### invertBrightness

▪ `Static` **invertBrightness**: `string`

---

### invertColors

▪ `Static` **invertColors**: `string`

---

### mod2pi

▪ `Static` **mod2pi**: `string`

---

### modFloat

▪ `Static` **modFloat**: `string`

---

### noiseVec3

▪ `Static` **noiseVec3**: `string`

---

### perlin3

▪ `Static` **perlin3**: `string`

3d perlin noise - `cnoise(vec3)`, returns `[-1, 1]`
https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83

---

### radAtAngle

▪ `Static` **radAtAngle**: `string`

---

### seededRandom

▪ `Static` **seededRandom**: `string`

---

### seededRandomVec2

▪ `Static` **seededRandomVec2**: `string`

---

### simplex4

▪ `Static` **simplex4**: `string`

4d simplex noise - `snoise(vec4)`, seems to return `[-1, 1]`
https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
