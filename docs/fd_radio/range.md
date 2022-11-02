---
title: Range
---

## Disable range
To disable range for everyone, please update config `Config.UseRanges` to `false`.
```lua
Config.UseRanges = false
```

## Disable range for jobs
To disable range for multiple jobs, please update config `Config.DisableRangesForJobs` and add job to table.
```lua
Config.DisableRangesForJobs = { 'police', 'ambulance' }
```

## Disable for specific whitelisted radio
To disable range for specific whitelisted radio, please go `Config.DisableRangeForChannels`, and add specific channel to table.
```lua
Config.DisableRangeForChannels = {
    [1] = true
}
```
