---
title: Installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution

Please carefully read installation process, otherwise `fd_rc` resource will not work.
:::

## Dependecies

### Global dependencies

We've tried not use a lot of third party dependencies, so you won't need to install that many dependencies. For this resource to work, you'll need to install

- [ox_lib](https://github.com/overextended/ox_lib) [mandatory]

Other resources are optional, but by default it has bridge for: <b>ox_target, qb-target, ox_inventory, qb-inventory</b>.

## Items

### Icons

First of all, please move icons from `images/` folder to your inventory resource and add items to inventory config as specified below.

### Items

<Tabs>
<TabItem value="qbcore" label="QB Inventory">

Add items to `shared/items.lua` or where your `QBShared.Items` is.

```lua
    ["drone"] = {
        ["name"] = "drone",
        ["label"] = "Drone",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "drone.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Lets have some fun."
    },

    ["rc_car"] = {
        ["name"] = "rc_car",
        ["label"] = "Remote Control Car",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "rc_car.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "It's not for kids."
    },

    ["rc_controller"] = {
        ["name"] = "rc_controller",
        ["label"] = "Remote Controller",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "rc_controller.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "It's not for kids."
    },

    ["rc_batteries"] = {
        ["name"] = "rc_batteries",
        ["label"] = "RC Batteries",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "rc_batteries.png",
        ["unique"] = false,
        ["useable"] = false,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Recharge your drone or car."
    },

    ["rc_repair_kit"] = {
        ["name"] = "rc_repair_kit",
        ["label"] = "RC Repair Kit",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "rc_repair_kit.png",
        ["unique"] = false,
        ["useable"] = false,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Repair your RC."
    },
```

</TabItem>
<TabItem value="ox" label="Ox Inventory" default>

Add items to `data/items.lua` or where your `ox_inventory` is.

```lua
     ['drone'] = {
        label = 'Drone',
        weight = 100,
        stack = true,
        description = "",
        server = {
            export = 'fd_rc.usedItem'
        }
    },
    ['rc_car'] = {
        label = 'Remote Control Car',
        weight = 100,
        stack = true,
        description = "",
        server = {
            export = 'fd_rc.usedItem'
        }
    },
    ['rc_batteries'] = {
        label = 'RC Batteries',
        weight = 100,
        stack = true,
        description = ""
    },
    ['rc_repair_kit'] = {
        label = 'RC Repair Kit',
        weight = 100,
        stack = true,
        description = ""
    },
    ['rc_controller'] = {
        label = 'Remote Controller',
        weight = 100,
        stack = true,
        description = "",
        server = {
            export = 'fd_rc.usedController'
        }
    },
```

</TabItem>
</Tabs>

## Start

If you did everything as described above, please start your server and enjoy remote control vehicles!

## Common Issues

### Questions

If you have an issue or questions, please visit our discord, and open a ticket.
