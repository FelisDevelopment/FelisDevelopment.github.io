---
title: Lockable Channels
---

## Disable lockable channels
To disable range for everyone, please update config `Config.AllChannelsCanBeLocked ` to `false`.
```lua
Config.AllChannelsCanBeLocked  = false
```

## Enable lock for specific channel
To allow lock for specific channal, please go to `Config.ChannelsWhichCanBeLocked` and add specific channel.
```lua
Config.ChannelsWhichCanBeLocked = {
    [5] = true
}
```
