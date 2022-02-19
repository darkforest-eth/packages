# Interface: ModalPosition

Contains metadata on modals in the game. Meant to store coordinates and state. Is
uniquely identified by a ModalId, which typically either the modalId of a given modal pane, or
plugin id.

## Table of contents

### Properties

- [modalId](ModalPosition.md#modalid)
- [state](ModalPosition.md#state)
- [x](ModalPosition.md#x)
- [y](ModalPosition.md#y)

## Properties

### modalId

• **modalId**: [`ModalId`](../README.md#modalid)

---

### state

• **state**: `"open"` \| `"closed"` \| `"minimized"`

---

### x

• `Optional` **x**: `number`

---

### y

• `Optional` **y**: `number`
