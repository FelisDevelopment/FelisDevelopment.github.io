---
title: Config
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Config

To find out more about configuration please check descriptions below

```lua
Config = {
    core_resource = 'qb-core',
    rcs = {
        drone = {
            name = "drone",
            model = `xs_prop_arena_drone_02`,
            camOffset = { -0.125, -0.135 }, -- camera offsets
            maxDistance = 320.0, -- max distance after which signal will be lost
            battery = 45 -- how much battery will drone / car have in minutes
        },
        rc_car = {
            name = "rc_car",
            model = `rcbandito`,
            camOffset = { 0.115, 0.35 }, -- camera offsets
            maxDistance = 320.0, -- max distance after which signal will be lost
            battery = 45, -- how much battery will drone / car have in minutes
            isVehicle = true, -- if rc is a vehicle, like rcbandito, please enable this option
        }
    },
    controls = {
        vehicle = {
            {194, "actions.exit"}
        },
        drone = {
            {21, "actions.increase_speed"},
            {32, "actions.forward"},
            {33, "actions.backward"},
            {34, "actions.left"},
            {35, "actions.right"},
            {38, "actions.up"},
            {44, "actions.down"},
            {194, "actions.exit"},
        }
    }
}
```

## New RC

Since script is dynamic, you can add new remote control vehicles at any time.

### fd_storage config
First of all, add rc to config `shared/config.lua`, please refer to example down below. It will be named `newawesomecontainer`

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
<TabItem value="qbcore" label="QBCore" default>

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
