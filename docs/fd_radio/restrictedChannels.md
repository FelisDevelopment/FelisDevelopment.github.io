---
title: Restricted channels
---

### Explanation
Our config contains `restrictedChannels` configuration, where you can whitelist fractions, gangs(for QB only at the moment) and specific people. Here's how config for `restrictedChannels` looks out of the box.
```lua
Config.restrictedChannels = {
    [1] = {
        isListEnabled = true, -- if all lists disabled above, it can be enabled for specific radio here
        police = true, -- job used for QB, ESX
        ambulance = true, -- job used for QB, ESX
        ace = true, -- ace is used only for standalone version
        rangeDisabled = true  -- range can be disabled for specific radio
    },
    [2] = {
        police = true,
        ambulance = true,
        ace = true
    },
    [3] = {
        isListEnabled = true,
        police = true,
        ambulance = true
    },
    [4] = {
        police = true,
        ambulance = true,
        ace = true
    },
    [5] = {
        police = true,
        ambulance = true,
        ace = true
    },
    [6] = {
        police = true,
        ambulance = true,
        ace = true
    },
    [7] = {
        police = true,
        ambulance = true,
        ace = true
    },
    [8] = {
        police = true,
        ambulance = true,
        ace = true
    },
    [9] = {
        police = true,
        ambulance = true,
        ace = true
    },
    [10] = {
        police = true,
        ambulance = true,
        ace = true
    }
}
```

### Specific channels and keys.
Let's take channels one as an example, there you can see a bunch of keys, what they do? Basically:
- `isListEnabled`: if global lists are disabled, with this you can enable list for specific radio.
- `police`, `ambulance`: this specifies fraction which can join this restrictred radio. For QB, same goes for gangs just add `ballas = true` and they will be able to join this radio.
- `ace`: ace permissions are used only for standalone version. Please read more about it in: [Ace permissions](/docs/fd_radio/Standalone/ace)
- (NEW)`identifier`: you can also add specific people by their identifier that means by either `license` or `steamid`. Just add `['license:xxxxxx'] = true` and you're done!
- `rangeDisabled`: if range is enabled, you can disable it for specific radio.
```lua
[1] = {
        isListEnabled = true, -- if all lists disabled above, it can be enabled for specific radio here
        police = true, -- job used for QB, ESX
        ambulance = true, -- job used for QB, ESX
        ace = true, -- ace is used only for standalone version
        rangeDisabled = true  -- range can be disabled for specific radio
        ['license:xxx'] = true -- allow specific player to join this channel
},
```
