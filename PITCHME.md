---
marp: true
title: Code Protection
theme: uncover
auto-scaling: true

---

# <!-- fit --> Code Protection
by not-matthias

---

### Nothing is uncrackable. 

It's just a matter of time.

---

### Types

- Obfuscation
- Anti Debugging
- Packing 
- Virtualization

---

## Obfuscation

TODO: Show normal js and obfuscated

---

### Unobfuscated JavaScript

<!-- @auto-scaling -->
<!-- footer: 'Obfuscated with obfuscator.io' -->

```javascript
console.log("Hello World!");
```


--- 

### Obfuscated JavaScript

<!-- footer: 'Obfuscated with obfuscator.io' -->

```javascript
var _0x21a2 = ['log', 'Hello\x20World!'];
var _0x3255 =
    (_0x26e26d, _0x591f48) => {
        _0x26e26d = _0x26e26d - 0x0; 
        var _0x288482 = _0x21a2[_0x26e26d];
        return _0x288482;
    };
console[_0x3255('0x0')](_0x3255('0x1'));
```

---

## Anti Debugging

- Prevent the use of a debugger

---

### Pros and Cons

Pros: 
- No debugger -> you have to make assumptions

Cons: 
- Only good when combined

## Packing

--- 

### Encrypted Binary


---

## Virtualization


---