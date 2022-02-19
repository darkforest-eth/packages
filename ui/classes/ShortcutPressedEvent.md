# Class: ShortcutPressedEvent

## Hierarchy

- `Event`

  ↳ **`ShortcutPressedEvent`**

## Table of contents

### Constructors

- [constructor](ShortcutPressedEvent.md#constructor)

### Properties

- [AT_TARGET](ShortcutPressedEvent.md#at_target)
- [BUBBLING_PHASE](ShortcutPressedEvent.md#bubbling_phase)
- [CAPTURING_PHASE](ShortcutPressedEvent.md#capturing_phase)
- [NONE](ShortcutPressedEvent.md#none)
- [bubbles](ShortcutPressedEvent.md#bubbles)
- [cancelBubble](ShortcutPressedEvent.md#cancelbubble)
- [cancelable](ShortcutPressedEvent.md#cancelable)
- [composed](ShortcutPressedEvent.md#composed)
- [currentTarget](ShortcutPressedEvent.md#currenttarget)
- [defaultPrevented](ShortcutPressedEvent.md#defaultprevented)
- [eventPhase](ShortcutPressedEvent.md#eventphase)
- [isTrusted](ShortcutPressedEvent.md#istrusted)
- [returnValue](ShortcutPressedEvent.md#returnvalue)
- [srcElement](ShortcutPressedEvent.md#srcelement)
- [target](ShortcutPressedEvent.md#target)
- [timeStamp](ShortcutPressedEvent.md#timestamp)
- [type](ShortcutPressedEvent.md#type)
- [AT_TARGET](ShortcutPressedEvent.md#at_target)
- [BUBBLING_PHASE](ShortcutPressedEvent.md#bubbling_phase)
- [CAPTURING_PHASE](ShortcutPressedEvent.md#capturing_phase)
- [NONE](ShortcutPressedEvent.md#none)

### Methods

- [composedPath](ShortcutPressedEvent.md#composedpath)
- [initEvent](ShortcutPressedEvent.md#initevent)
- [preventDefault](ShortcutPressedEvent.md#preventdefault)
- [stopImmediatePropagation](ShortcutPressedEvent.md#stopimmediatepropagation)
- [stopPropagation](ShortcutPressedEvent.md#stoppropagation)

## Constructors

### constructor

• **new ShortcutPressedEvent**()

#### Overrides

Event.constructor

## Properties

### AT_TARGET

• `Readonly` **AT_TARGET**: `number`

#### Inherited from

Event.AT_TARGET

---

### BUBBLING_PHASE

• `Readonly` **BUBBLING_PHASE**: `number`

#### Inherited from

Event.BUBBLING_PHASE

---

### CAPTURING_PHASE

• `Readonly` **CAPTURING_PHASE**: `number`

#### Inherited from

Event.CAPTURING_PHASE

---

### NONE

• `Readonly` **NONE**: `number`

#### Inherited from

Event.NONE

---

### bubbles

• `Readonly` **bubbles**: `boolean`

Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.

#### Inherited from

Event.bubbles

---

### cancelBubble

• **cancelBubble**: `boolean`

#### Inherited from

Event.cancelBubble

---

### cancelable

• `Readonly` **cancelable**: `boolean`

Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.

#### Inherited from

Event.cancelable

---

### composed

• `Readonly` **composed**: `boolean`

Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.

#### Inherited from

Event.composed

---

### currentTarget

• `Readonly` **currentTarget**: `null` \| `EventTarget`

Returns the object whose event listener's callback is currently being invoked.

#### Inherited from

Event.currentTarget

---

### defaultPrevented

• `Readonly` **defaultPrevented**: `boolean`

Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.

#### Inherited from

Event.defaultPrevented

---

### eventPhase

• `Readonly` **eventPhase**: `number`

Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.

#### Inherited from

Event.eventPhase

---

### isTrusted

• `Readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false otherwise.

#### Inherited from

Event.isTrusted

---

### returnValue

• **returnValue**: `boolean`

**`deprecated`**

#### Inherited from

Event.returnValue

---

### srcElement

• `Readonly` **srcElement**: `null` \| `EventTarget`

**`deprecated`**

#### Inherited from

Event.srcElement

---

### target

• `Readonly` **target**: `null` \| `EventTarget`

Returns the object to which event is dispatched (its target).

#### Inherited from

Event.target

---

### timeStamp

• `Readonly` **timeStamp**: `number`

Returns the event's timestamp as the number of milliseconds measured relative to the time origin.

#### Inherited from

Event.timeStamp

---

### type

• `Readonly` **type**: `string`

Returns the type of event, e.g. "click", "hashchange", or "submit".

#### Inherited from

Event.type

---

### AT_TARGET

▪ `Static` `Readonly` **AT_TARGET**: `number`

#### Inherited from

Event.AT_TARGET

---

### BUBBLING_PHASE

▪ `Static` `Readonly` **BUBBLING_PHASE**: `number`

#### Inherited from

Event.BUBBLING_PHASE

---

### CAPTURING_PHASE

▪ `Static` `Readonly` **CAPTURING_PHASE**: `number`

#### Inherited from

Event.CAPTURING_PHASE

---

### NONE

▪ `Static` `Readonly` **NONE**: `number`

#### Inherited from

Event.NONE

## Methods

### composedPath

▸ **composedPath**(): `EventTarget`[]

Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

#### Returns

`EventTarget`[]

#### Inherited from

Event.composedPath

---

### initEvent

▸ **initEvent**(`type`, `bubbles?`, `cancelable?`): `void`

**`deprecated`**

#### Parameters

| Name          | Type      |
| :------------ | :-------- |
| `type`        | `string`  |
| `bubbles?`    | `boolean` |
| `cancelable?` | `boolean` |

#### Returns

`void`

#### Inherited from

Event.initEvent

---

### preventDefault

▸ **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

#### Returns

`void`

#### Inherited from

Event.preventDefault

---

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.

#### Returns

`void`

#### Inherited from

Event.stopImmediatePropagation

---

### stopPropagation

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.

#### Returns

`void`

#### Inherited from

Event.stopPropagation
