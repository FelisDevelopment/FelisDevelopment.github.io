---
title: Config
---
## Current config

As you can see below, we kept most on original qbus functionality and config, it should be easilly understandable.

```lua
config.WhitelistedWeaponArmed = { -- weapons specifically whitelisted to not show armed mode
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

config.WhitelistedWeaponStress = {
    `weapon_petrolcan`,
    `weapon_hazardcan`,
    `weapon_fireextinguisher`
}

config.SpeedingStressEnabled = false
config.MinimumSpeedUnbuckled = 50
config.MinimumSpeed = 100
config.DisablePoliceStress = false
config.ShootingStressChance = 0.8
config.PoliceShootingChance = 0.6

config.MaximumStress = 1000

config.StressBlur = {
    {
        min = 100,
        max = 200,
        waitBeforeCheck = 100000,
        blurTime = 1500
    },
    {
        min = 200,
        max = 300,
        waitBeforeCheck = 90000,
        blurTime = 2000
    },
    {
        min = 300,
        max = 400,
        waitBeforeCheck = 80000,
        blurTime = 2500
    },
    {
        min = 400,
        max = 500,
        waitBeforeCheck = 70000,
        blurTime = 3000
    },
    {
        min = 500,
        max = 600,
        waitBeforeCheck = 60000,
        blurTime = 3500
    },
    {
        min = 600,
        max = 700,
        waitBeforeCheck = 50000,
        blurTime = 3500
    },
    {
        min = 700,
        max = 800,
        waitBeforeCheck = 40000,
        blurTime = 3500
    },
    {
        min = 800,
        max = 900,
        waitBeforeCheck = 30000,
        blurTime = 3500
    },
    {
        min = 900,
        max = 1000,
        waitBeforeCheck = 20000,
        blurTime = 3500
    }
}

config.StressRagdoll = {
    {
        min = 800,
        max = 900,
        waitBeforeCheck = 60000,
        ragdollTime = 3500
    },
    {
        min = 900,
        max = 1000,
        waitBeforeCheck = 20000,
        ragdollTime = 5000
    }
}

config.CompassEnabledWithItem = false
config.CompassItem = 'compass'
config.UseKmh = false
config.NeededPlaneLicense = false
config.VehicleFirstPersonAim = true
config.ElectricVehicles = {
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


```
