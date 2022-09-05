---
title: Lists
---

## Enable lists for every radio
To enable user list for every radio, please update config `Config.allChannelsHaveUserList` to `true`.
```lua
Config.allChannelsHaveUserList = false
```

## Enable lists for every radio
To enable user list for all whietelisted radios, please update config `Config.allWhitelistedChannelsHaveUserList` to `true`.
```lua
Config.allWhitelistedChannelsHaveUserList = false
```

## Enable list for specific whitelisted radio
If all other options are false above, you can enable list for specific whitelisted radios. To do so, please go `Config.restrictedChannels`, find specific channel and add `isListEnabled = true` to it. This will disable range for specific whitelisted radio.

```lua
    [1] = {
        police = true,
        ambulance = true,
        isListEnabled = true
    },
```
