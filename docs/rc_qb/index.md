---
title: Installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution

Please carefully read installation process, otherwise `fd_rc` resource will not work.
:::

## Dependecies

### Framework Specific

<Tabs>
<TabItem value="qbcore" label="QBCore" default>

Resource is compatible with QBCore, you can get it at [QBCore Framework Repository](https://github.com/qbcore-framework). However, it's tested only with newest version.

Additionally you'll need:
- [qb-target](https://github.com/BerkieBb/qb-target) [mandatory]
- [qb-menu](https://github.com/qbcore-framework/qb-menu) [mandatory]

Please make sure to ensure it before `fd_rc` resource, and don't forget to set your core resource in `shared/config.lua`.
</TabItem>
</Tabs>

## Config

Depending on your framework please set appropriate framework core resource configuration in `shared/config.lua`.

<Tabs>
<TabItem value="qbcore" label="QBCore" default>

```lua
    core_resource = 'qb-core'
```
</TabItem>
</Tabs>

## Items

### Icons
First of all, please move icons from `images/` folder to your inventory resource and add items to inventory config as specified below.

### Items
<Tabs>
<TabItem value="qbcore" label="QBCore" default>

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
</Tabs>

## Start

If you did everything as described above, please start your server and enjoy remote control vehicles!

## Common Issues

### Questions

If you have an issue or questions, please open an issue in [fd_rc support repo](https://github.com/FelisDevelopment/fd_rc_support/issues).
