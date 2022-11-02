---
title: Lists
---

## Enable lists for every channel
To enable user list for every channel, please update config `Config.AllChanelsHaveUserList` to `true`.
```lua
Config.AllChanelsHaveUserList = false
```

## Enable lists for every channel
To enable user list for all whietelisted channels, please update config `Config.AllWhitelistedChannelsHaveUserList` to `true`.
```lua
Config.AllWhitelistedChannelsHaveUserList = false
```

## Enable list for specific whitelisted radio
If all other options are false above, you can enable list for specific whitelisted radios. To do so, please go `Config.ChannelsWhichHasList` and add specific channel to it. This will enable

```lua
Config.ChannelsWhichHasList = {
    [1] = true
}
```
