---
title: Optional
---

## Inventory images
We've provided new radio icon. You can find it in `optional/inventory icon/radio.png`

## Join / Leave sound
Under the hood, `fd_radio` utilizies [interact-sound](https://github.com/plunkettscott/interact-sound), where we provided `radioclick.ogg` sound file in `optional/join-leave sound/` directory. If you're using **interact-sound**, please upload sound to its directory.

Otherwise, if you don't want to use interact-sound resource, use can override trigger in `modules/bridge/client.lua` by changing trigger.
```lua
function bridge.clickSound()
    TriggerEvent("InteractSound_CL:PlayOnOne", "radioclick", 0.6)
end
```

You can also override function in specific framework overrides. Which are found at `modules/brige/client/*.lua`.
