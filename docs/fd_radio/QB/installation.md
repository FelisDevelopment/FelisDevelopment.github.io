---
title: Installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution

Please carefully read installation process, otherwise `fd_radio` resource will not work.
:::

## Dependecies

We've tried not to use a lot of third party dependencies, so you won't need to install that many dependencies. For this resource to work, you'll need to install

- [pma-voice](https://github.com/AvarianKnight/pma-voice) [mandatory (main branch)]
- [ox_lib](https://github.com/overextended/ox_lib) [mandatory]

## QBCore

Resource is compatible with QBCore, you can get it at [QBCore Framework Repository](https://github.com/qbcore-framework). However, it's tested only with newest version.

:::caution
We do not recommend using QBCore, instead use [QBox](https://github.com/Qbox-project).
:::

### Set correct framework

Go to `shared/config.lua` and set your framework.

```lua
Config.core = 'qb' -- available: standalone, QB or ESX
Config.coreResource = 'qb-core' -- only used if QB
```

## Adjust config

Before starting, please adjust config values as you want. [Config](/docs/fd_radio/config)

## Optional

Check out optional stuff, which might make sense for your setup. [Optional link](/docs/fd_radio/optional)

## Items

### Single Item

<Tabs>
<TabItem value="qbcore" label="QB Inventory" default>

Add items to `shared/items.lua` or where your `QBShared.Items` is.

```lua
    ["radio"] = {
        ["name"] = "radio",
        ["label"] = "Radio",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "radio.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Hmm??"
    },
    ["radio_jammer"] = {
        ["name"] = "radio_jammer",
        ["label"] = "Radio Jammer",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "radio_jammer.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Hmm??"
    },
    ["radio_antenna"] = {
        ["name"] = "radio_antenna",
        ["label"] = "Radio Antenna",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "radio_antenna.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Hmm??"
    },
```

</TabItem>
<TabItem value="ox" label="OX Inventory">

Add items to `ox_inventory/data/items.lua`;

```lua
    ['radio'] = {
        label = 'Radio',
        weight = 200,
        client = {
            export = "fd_radio.useRadio",
        }
    },
    ['radio_jammer'] = {
        label = 'Jammer',
        weight = 200,
        client = {
            export = "fd_radio.useJammer",
        }
    },
    ['radio_antenna'] = {
        label = "Radio Antenna",
        weight = 200,
    },
```

</TabItem>
</Tabs>

### Multiple items

<Tabs>
<TabItem value="qbcore" label="QB Inventory" default>

Add items to `shared/items.lua` or where your `QBShared.Items` is.

```lua
    ["radio_default"] = {
        ["name"] = "radio_default",
        ["label"] = "Radio Black",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "radio_default.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Hmm??"
    },
    ["radio_red"] = {
        ["name"] = "radio_red",
        ["label"] = "Radio Red",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "radio_default.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Hmm??"
    },
    ["radio_blue"] = {
        ["name"] = "radio_blue",
        ["label"] = "Radio Blue",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "radio_blue.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Hmm??"
    },
    ["radio_green"] = {
        ["name"] = "radio_green",
        ["label"] = "Radio Green",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "radio_green.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Hmm??"
    },
    ["radio_yellow"] = {
        ["name"] = "radio_yellow",
        ["label"] = "Radio Yellow",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "radio_yellow.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Hmm??"
    },
    ["radio_white"] = {
        ["name"] = "radio_white",
        ["label"] = "Radio White",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "radio_white.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Hmm??"
    },
    ["radio_jammer"] = {
        ["name"] = "radio_jammer",
        ["label"] = "Radio Jammer",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "radio_jammer.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Hmm??"
    },
    ["radio_antenna"] = {
        ["name"] = "radio_antenna",
        ["label"] = "Radio Antenna",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "radio_antenna.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Hmm??"
    },
```

</TabItem>
<TabItem value="ox" label="OX Inventory">

Add items to `ox_inventory/data/items.lua`;

```lua
    ['radio_default'] = {
        label = 'Radio Black',
        weight = 200,
        client = {
            export = "fd_radio.useRadioDefault",
        }
    },
    ['radio_red'] = {
        label = 'Radio Red',
        weight = 200,
        client = {
            export = "fd_radio.useRadioRed",
        }
    },
    ['radio_blue'] = {
        label = 'Radio Blue',
        weight = 200,
        client = {
            export = "fd_radio.useRadioBlue",
        }
    },
    ['radio_green'] = {
        label = 'Radio Green',
        weight = 200,
        client = {
            export = "fd_radio.useRadioGreen",
        }
    },
    ['radio_yellow'] = {
        label = 'Radio Yellow',
        weight = 200,
        client = {
            export = "fd_radio.useRadioYellow",
        }
    },
    ['radio_white'] = {
        label = 'Radio White',
        weight = 200,
        client = {
            export = "fd_radio.useRadioWhite",
        }
    },

    ['radio_jammer'] = {
        label = 'Jammer',
        weight = 200,
        client = {
            export = "fd_radio.useJammer",
        }
    },

    ['radio_antenna'] = {
        label = "Radio Antenna",
        weight = 200,
    },
```

</TabItem>
</Tabs>

## Start

Add

```
ensure fd_radio
```

to your server.cfg and if you did everything as described above, please start your server and enjoy your new radio!

## Common Issues

### Questions

If you have an issue or questions, please visit our discord, and open a ticket.
