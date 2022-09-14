---
title: Config
---
:::info Attention
Please very carefully read config below.
:::

```lua
Config = {}

Config.core = 'qb' -- Available: qb, esx
Config.coreResource = 'qb-core' -- only used for qb framework
Config.targetResource = 'qb-target' -- only qtarget and qb-target support for now
Config.oldItemCheckingForQBCore = false -- only used for qbcore, to enable old item checking

Config.padItem = 'felispad' -- Pad item, to start heist (make sure to change your items accordingly)
Config.envelopeItem = 'envelope' -- Envelope item, for ESX it will become: envelope_1, envelope_2 etc... (make sure to change your items accordingly)
Config.neededPadsToStart = 4 -- How many pads needs to be registered before heist start

Config.secondsBeforeOverrideStart = 300 -- seconds to wait before clues are shown on screens

Config.resetAfterIfNotAllPadsRegistered = 1200 -- seconds to reset if not all pads registered
Config.cooldownAfterSuccesfulRobebry = 3600 -- seconds for cooldown if robbery was a success
Config.cooldownAfterFailedRobbery = 3600 -- seconds for cooldown if robbery was failed

Config.policeNeeded = 4 -- How many police is needed to start heist

-- Loot config (Explained in "Add loot")
Config.loot = {
    ['safe_1'] = {
        {
            ['item'] = 'money',
            ['amount'] = { 10000, 20000 }
        },
        {
            ['chances'] = { 1, 1 },
            ['lucky'] = 1,
            ['item'] = 'goldbar',
            ['amount'] = { 1, 2 }
        }
    },
    ['safe_2'] = {
        {
            ['chances'] = { 1, 1 },
            ['lucky'] = 1,
            ['item'] = 'goldbar',
            ['amount'] = { 1, 2 }
        }
    },
    ['safe_3'] = {
        {
            ['chances'] = { 1, 1 },
            ['lucky'] = 1,
            ['item'] = 'goldbar',
            ['amount'] = { 1, 2 }
        }
    },
}

-- Locale strings
Config.messages = {
    ['begin_override'] = 'Begin Override',
    ['currently_on_cooldown'] = 'At this time, override is imposible!',
    ['no_pad'] = 'I think you need something?',
    ['attaching_pad'] = 'Attaching Pad...',
    ['registered_pad'] = 'Pad %s/%s registered!',
    ['steam'] = 'Adjust Steam Settings',
    ['stash_search'] = 'Search',
    ['laptop'] = 'Hack laptop',
    ['loot_safe'] = 'Loot',
    ['phone'] = 'Hack phone',
    ['sound_system'] = 'Change Station',
    ['horse'] = 'Turn Statue',
    ['alarm'] = 'Change Time',
    ['tv_player'] = 'Insert Disc',
    ['searching_loot'] = 'Searching...',
    ['envelope'] = 'Envelope #%s',
    ['already_looted'] = 'Nothing here...',
    ['controller_1'] = 'Controller 1',
    ['controller_2'] = 'Controller 2',
    ['controller_3'] = 'Controller 3',
    ['password'] = 'Password',
    ['looting_safe'] = 'Looting...',
    ['safe_looted'] = 'Looted!',
    ['cant_loot'] = 'Not available!',
    ['not_enough_police'] = 'Not enough police!'
}


-- Do not touch
Config.panelsCoords = vector3(-2055.46, -1027.62, 2.59)

-- If you don't know what you're doing, don't touch this
Config.stashes = {
    'captain_stash',
    'top_stash',
    'top_stash_1',
    'top_stash_2',
    'top_stash_3',
    'top_stash_4',
    'top_stash_5',
    'top_stash_6',
    'main_stash_1',
    'main_stash_2',
    'main_stash_3',
    'main_stash_4',
    'main_stash_5',
    'main_stash_6',
    'main_stash_7',
    'main_stash_8',
    'main_stash_9',
    'main_stash_10',
    'main_stash_11',
    'main_stash_12'
}
```
