---
marp: true
title: Code Protection
theme: uncover
class: theme.css

---

# <!-- fit --> Code Protection
by not-matthias

---

### Nothing is 100% secure. 

It's just a matter of time.

---

### Types

- Obfuscation
- Anti Debugging
- Packing 
- Virtualization

---

## Obfuscation

> To make so confused or opaque as to be difficult to perceive or understand.

---

### Unobfuscated JavaScript

```javascript
console.log("Hello World!");
```

--- 

### Obfuscated JavaScript

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

### Pros

- Reduced file size
- Very confusing and hard to deal with
- Will stop a large portion of people

---

### Cons

- Will not prevent reversing
- Revertable with a script

---

## Anti Debugging

- Detecting the debugger
- Restricting/Limit debugger usage

---

### Example

```javascript
if(/* check if devtools opened */) {
    while(true) {
        debugger;
    }
}
```

---

### Pros

- Easier to make mistakes
- You have to make assumptions.

---

### Cons

- Only good when combined

---

## Packing

Encrypting the binary and 

--- 

### Encrypted Binary


---

## Virtualization


---




## All in all

Don't trust the client.