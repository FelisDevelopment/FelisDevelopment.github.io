---
title: Restricted channels
---

### Explanation
Our config contains `Config.WhitelistedAccess` configuration, where you can whitelist fractions, gangs(for QB only at the moment) and specific people. Here's how config for `Config.WhitelistedAccess` looks out of the box.
```lua
Config.WhitelistedAccess = {
    [1] = {
        ['police'] = true,
        ['ambulance'] = true
    }
}
```
