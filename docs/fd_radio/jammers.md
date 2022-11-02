---
title: Jammers
---

## Disable jammers
To disable range for everyone, please update config `Config.AllowJammers` to `false`.
```lua
Config.AllowJammers = false
```

## Config explanation
```lua
Config.AllowJammers = false -- Allow jammers to be used
Config.JammerRadius = 20
Config.JammerPickUpUse = '3d' -- Avaiable: 3d (draws 3d text above jammer), qb-target, qtarget, ox_target
Config.PlaceJammerCommand = 'placejammer' -- Command to place jammer, to disable it set it to false (only work with Framework = none)
Config.UseJammerItem = false -- Item name to use as jammer, only works with QB or ESX, set false to disable
Config.JammerItemName = "radio_jammer" -- item name
Config.MinimumDistanceBetweenJammers = 100 -- Minimum distance between jammers placement
Config.DisableJammerForJobs = { 'police' } -- Only works for QB or ESX
Config.DisableJammerForChannels = { -- Disables jammer functionality for specific channels
    [2] = true
}
```
