---
title: Optional
---

## Inventory images
We've provided new radio icon. You can find it in `optional/inventory icons/**`

## Override framework functions
You can also override function in specific framework overrides. Which are found at `modules/brige/client/*.lua`.


## Quick radio change
if `Config.quickJoinCommandEnabled` is enabled, you'll be able to switch radios with a custom command. Command can be update by changing config value to anything you want. Just change `Config.QuickJoinCommand`.

### Syntax
```lua
/qradio {0-999} -- 0 leaves radio
```

### Example
```
/radio 1
```

## Custom channel name
You can define custom channel names in config, and it will be shown in radio UI. Just add custom to `Config.UseCustomChannelNames` and shown below.
```lua
Config.UseCustomChannelNames = {
    [1] = "PD Radio Endless name",
    [1.11] = 'Chase 1',
    [1.12] = 'Chase 2'
}
```
