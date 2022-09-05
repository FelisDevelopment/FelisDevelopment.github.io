---
title: Range
---

## Disable range
To disable range for everyone, please update config `Config.radioRangesEnabled` to `false`.
```lua
Config.radioRangesEnabled = false
```

## Disable range for police
To disable range for police, please update config `Config.disableRangeForPolice` to `false`.
```lua
Config.disableRangeForPolice = false
```

## Disable for specific whitelisted radio
To disable range for specific whitelisted radio, please go `Config.restrictedChannels`, find specific channel and add `rangeDisabled = true` to it. This will disable range for specific whitelisted radio.
```lua
    [1] = {
        police = true,
        ambulance = true,
        rangeDisabled = true
    },
```
