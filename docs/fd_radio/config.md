---
title: Config
---
:::info Attention
Please very carefully read config below.
:::

```lua
Config = {}

Config.core = 'qb' -- available: standalone, QB or ESX
Config.coreResource = 'qb-core' -- only used if QB
Config.oldItemCheckingForQBCore = false -- only used for qbcore, to enable old item checking

Config.defaultTheme = 'default' -- Default theme to use, available: default, blue, green, red, yellow
Config.allowThemeChange = true -- Client side only, command will be available if enabled
Config.themeChangeCommand = 'radioTheme'

Config.micClicks = true -- enables clicks for pma-voice
Config.radioAnims = true -- enabled radio anims for pma-voice

Config.maxFrequency = 999 -- maximum frequency
Config.defaultVolume = 100 -- default volume if none is set
Config.canMoveWhileRadioOpen = false -- can move while radio is open

Config.allChannelsHaveUserList = false -- If enabled, all radios will have user list
Config.allWhitelistedChannelsHaveUserList = false -- If enabled, all radio will have user list

Config.useKeyBindEnabled = true -- additional key bind to open radio
Config.useKeyBind = 'U' -- default key bind

Config.quickJoinCommandEnabled = true -- enabled command for quick join
Config.quickJoinCommand = 'radio' -- command

Config.radioRangesEnabled = true -- if disabled, it'll disable range for everyone
Config.disableRangeForPolice = true -- works only for QB or ESX, disables range for police

-- effects for ranges, inrange is a must for script to work
Config.radioRanges = {
    inrange = {
        effect = {
            { name = "freq_low", value = 100.0 },
            { name = "freq_hi", value = 5000.0 },
            { name = "rm_mod_freq", value = 300.0 },
            { name = "rm_mix", value = 0.1 },
            { name = "fudge", value = 4.0 },
            { name = "o_freq_lo", value = 300.0 },
            { name = "o_freq_hi", value = 5000.0 },
        },
    },
    wide = {
        effect = {
            { name = "freq_low", value = 100.0 },
            { name = "freq_hi", value = 5000.0 },
            { name = "rm_mod_freq", value = 300.0 },
            { name = "rm_mix", value = 0.5 },
            { name = "fudge", value = 11.0 },
            { name = "o_freq_lo", value = 300.0 },
            { name = "o_freq_hi", value = 5000.0 },
        },
        ranges = {
            min = 900,
            max = 1300.0
        }
    },
    wider = {
        effect = {
            { name = "freq_low", value = 100.0 },
            { name = "freq_hi", value = 5000.0 },
            { name = "rm_mod_freq", value = 300.0 },
            { name = "rm_mix", value = 0.8 },
            { name = "fudge", value = 17.0 },
            { name = "o_freq_lo", value = 300.0 },
            { name = "o_freq_hi", value = 5000.0 },
        },
        ranges = {
            min = 1300.0,
            max = 1700.0
        }
    },
    widest = {
        effect = {
            { name = "freq_low", value = 100.0 },
            { name = "freq_hi", value = 5000.0 },
            { name = "rm_mod_freq", value = 300.0 },
            { name = "rm_mix", value = 0.8 },
            { name = "fudge", value = 30.0 },
            { name = "o_freq_lo", value = 300.0 },
            { name = "o_freq_hi", value = 5000.0 },
        },
        volume = {
            frontLeftVolume = 0.05,
            frontRightVolume = 0.05,
            rearLeftVolume = 0.0,
            rearRightVolume = 0.0,
            channel5Volume = 1.0,
            channel6Volume = 1.0
        },
        mute = true,
        ranges = {
            min = 1700.0,
            max = 999999999.0
        }
    }
}

-- Ace permission only used with standalone version
Config.restrictedChannels = {
    [1] = {
        isListEnabled = true, -- if all lists disabled above, it can be enabled for specific radio here
        police = true, -- job used for QB, ESX
        ambulance = true, -- job used for QB, ESX
        ace = true, -- ace is used only for standalone version
        rangeDisabled = true  -- range can be disabled for specific radio
    },
    [2] = {
        police = true,
        ambulance = true,
        ace = true
    },
    [3] = {
        isListEnabled = true,
        police = true,
        ambulance = true
    },
    [4] = {
        police = true,
        ambulance = true,
        ace = true
    },
    [5] = {
        police = true,
        ambulance = true,
        ace = true
    },
    [6] = {
        police = true,
        ambulance = true,
        ace = true
    },
    [7] = {
        police = true,
        ambulance = true,
        ace = true
    },
    [8] = {
        police = true,
        ambulance = true,
        ace = true
    },
    [9] = {
        police = true,
        ambulance = true,
        ace = true
    },
    [10] = {
        police = true,
        ambulance = true,
        ace = true
    }
}

-- Locale strings
Config.locale = {
    ['radio_settings_header'] = 'Radio theme',
    ['radio_settings_choose'] = 'Choose theme',
    ['default'] = 'Black',
    ['blue'] = 'Blue',
    ['red'] = 'Red',
    ['green'] = 'Green',
    ['yellow'] = 'Yellow',
    ['ui'] = {
        ['join_radio'] = 'Join',
        ['leave_radio'] = 'Leave',
        ['change_radio'] = 'Change',
        ['back_radio'] = 'Back',
        ['radio_call_sign_placeholder'] = 'Call sign',
        ['radio_name_placeholder'] = 'Name'
    },
    ['restricted_channel_error'] = 'You can not connect to this signal!',
    ['you_on_radio'] = 'You\'re already connected to this channel!',
    ['invalid_radio'] = 'This frequency is not available.',
    ['joined_to_radio'] = 'You\'re connected to: %sMhz.',
    ['you_leave'] = 'You left the channel.',
    ['decrease_radio_volume'] = 'The radio is already set to maximum volume',
    ['increase_radio_volume'] = 'The radio is already set to the lowest volume',
    ['volume_radio'] = 'New radio volume %s.',
    ['open_radio'] = 'Open radio',
    ['name_updated'] = 'Callsign and Name have been updated!'
}

```
