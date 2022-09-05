---
title: Ace Permissions
---

### Permissions
If you want restricted channels to work in standalone version, please add `ace = true` to specific radios, and add permissions to your `server.cfg` or other config.

### Example
Permissions Example
```
add_ace channel_1 channel_1 allow
add_principal identifier.license:3d021beb817b069d35b7317a6cd7ddcbfa592846 channel_1
```

Permissions syntax
```
channel_{channel_number}
```
