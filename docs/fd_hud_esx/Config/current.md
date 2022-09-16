---
title: Config
---
## Current config

As you can see below, we kept most on original qbus functionality and config, it should be easilly understandable.

```lua
Config.Locale = 'en'
Config.WhitelistedWeaponArmed = { -- weapons specifically whitelisted to not show armed mode
    -- miscellaneous
    `weapon_petrolcan`,
    `weapon_hazardcan`,
    `weapon_fireextinguisher`,
    -- melee
    `weapon_dagger`,
    `weapon_bat`,
    `weapon_bottle`,
    `weapon_crowbar`,
    `weapon_flashlight`,
    `weapon_golfclub`,
    `weapon_hammer`,
    `weapon_hatchet`,
    `weapon_knuckle`,
    `weapon_knife`,
    `weapon_machete`,
    `weapon_switchblade`,
    `weapon_nightstick`,
    `weapon_wrench`,
    `weapon_battleaxe`,
    `weapon_poolcue`,
    `weapon_briefcase`,
    `weapon_briefcase_02`,
    `weapon_garbagebag`,
    `weapon_handcuffs`,
    `weapon_bread`,
    `weapon_stone_hatchet`,
    -- throwables
    `weapon_grenade`,
    `weapon_bzgas`,
    `weapon_molotov`,
    `weapon_stickybomb`,
    `weapon_proxmine`,
    `weapon_snowball`,
    `weapon_pipebomb`,
    `weapon_ball`,
    `weapon_smokegrenade`,
    `weapon_flare`
}

Config.CompassEnabledWithItem = false -- is compass enabled only with item?
Config.CompassItem = 'compass' -- item name
Config.UseKmh = true -- want to use km/h?
Config.NeededPlaneLicense = false -- if enabled, users will need license to drive heli or a plane
Config.VehicleFirstPersonAim = false -- if enabled, players will be forced for first person shooting from any vehicle
Config.ElectricVehicles = {
    `airtug`,
    `caddy`,
    `neon`,
    `omnisegt`,
    `raiden`,
    `rcbandito`,
    `cyclone`,
    `cyclone`,
    `furia`,
    `voltic`,
    `voltic2`,
    `dilettante`,
    `dilettante2`,
    `surge`,
    `imorgon`,
    `iwagen`,
    `tezeract`,
    `khamelion`,
}

Config.UseFuel = true
Config.FuelExport = 'LegacyFuel'

Config.SeatbeltEnabled = true
-- Use MPH or KMH units, automatically will be converted to GTA units
Config.SeatbeltSpeed = {
    without = 50,
    with = 200
}
Config.SeatbeltKey = 'b'

Config.CruiseEnabled = true
Config.CruiseKey = 'i'
Config.MinimumSpeedToEnable = 50 -- Use MPH or KMH units, automatically will be converted to GTA units

```
