---
title: Config
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Config

To find out more about configuration please check descriptions below

```lua
Config = {
    rcs = {
        drone = {
            name = "drone",
            model = `xs_prop_arena_drone_02`,
            camOffset = { -0.125, -0.135 },
            maxDistance = 320.0,
            battery = 45 -- minutes
        },
        rc_car = {
            name = "rc_car",
            model = `rcbandito`,
            camOffset = { 0.115, 0.35 },
            maxDistance = 320.0,
            battery = 45, -- minutes
            isVehicle = true,
        }
    },
    items = {
        controller = "rc_controller",
        batteries = "rc_batteries",
        repair_kit = "rc_repair_kit"
    },
    controls = {
        vehicle = {
            { 194, "actions_exit" }
        },
        drone = {
            { 21,  "actions_increase_speed" },
            { 32,  "actions_forward" },
            { 33,  "actions_backward" },
            { 34,  "actions_left" },
            { 35,  "actions_right" },
            { 38,  "actions_up" },
            { 44,  "actions_down" },
            { 194, "actions_exit" },
        }
    }
}
```

## New RC

Since script is dynamic, you can add new remote control vehicles at any time.

### fd_rc config

First of all, add rc to config `shared/config.lua`, please refer to example down below. It will be named `newdrone`

```lua
Config =  {
    ...,
    rcs = {
        ...,
        newdrone = {
            name = "newdrone",
            model = `some_model`,
            camOffset = { -0.125, -0.135 }, -- camera offsets
            maxDistance = 320.0, -- max distance after which signal will be lost
            battery = 45 -- how much battery will drone / car have in minutes
        },
    }
}
```

### Inventory item

After adding rc to config, you'll need to add item to your inventory.

<Tabs>
<TabItem value="ox" label="Ox Inventory" default>

Add item to `data/items.lua` or where your `ox_inventory` is.

```lua
    ['newdrone'] = {
        label = 'New Awesome Drone',
        weight = 100,
        stack = true,
        description = "",
        server = {
            export = 'fd_rc.usedItem'
        }
    },
```

</TabItem>
<TabItem value="qbcore" label="QB Inventory">

Add item to `shared/items.lua` or where your `QBShared.Items` is.

```lua
    ["newdrone"] = {
        ["name"] = "newdrone",
        ["label"] = "New Awesome Drone",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "newdrone.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "This Drone Sucks."
    },
```

</TabItem>
</Tabs>
