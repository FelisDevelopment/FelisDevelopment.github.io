---
title: HUD defaults
---
## Current defaults
HUD preset default values can be found at: `modules/hud/shared/defaults.lua`, changing those will affect new preset creation, and new users will get those default settings.

```lua
config.DefaultSettings = {
    map = 'square', -- square or circle
    theme = 'reign', -- any theme
    delayed = true, -- is general hud thread delayed or not, might increase FPS for low end users
    showHealthAlways = true,
    showHealthLowerThan = 50,
    showArmorAlways = true,
    showArmorLowerThan = 50,
    showHungerAlways = true,
    showHungerLowerThan = 50,
    showThirstAlways = true,
    showThirstLowerThan = 50,
    showOxygenAlways = false,
    showOxygenLowerThan = 50,
    showSprintAlways = false,
    showSprintLowerThan = 50,
    compassFollowCam = true,
    compassDelayed = true,
    vehicleHudDelayed = true,
    showFuelAlways = true,
    showFuelLowerThan = 50,
    notifyLowFuel = true,
    cinematicEnabled = false,
    cinematicBarsHeight = 10
}

```
