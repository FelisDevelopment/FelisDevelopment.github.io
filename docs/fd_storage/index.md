---
title: Installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution

Please carefully read installation process, otherwise `fd_storage` resource will not work.
:::

## Dependecies

### Global dependencies

We've tried not use a lot of third party dependencies, so you won't need to install that many dependencies. For this resource to work, you'll need to install

- [ox_lib](https://github.com/overextended/ox_lib) [mandatory]
- [ox_target](https://github.com/overextended/ox_target) [mandatory] (you can easily add bridge for other targets)

and other framework specific dependencies.

### Inventory

At the moment, storage supports `qb-inventory` and `ox_inventory`. For other inventories, you'll have to write your own bridge.

## Config

Storage is detecting framework automatically. If you have renamed your resources or core, please check `/modules/bridge` folder, there you'll be able to change name and etc. Otherwise, please check config at `shared/*` folder.

## Items

### Icons

First of all, please move icons from `images/` folder to your inventory resource and add items to inventory config as specified below.

### Items

<Tabs>
<TabItem value="qbcore" label="QB Inventory" default>

Add items to `shared/items.lua` or where your `QBShared.Items` is.

```lua
    ["smallcrate"] = {
        ["name"] = "smallcrate",
        ["label"] = "Small Crate",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "smallcrate.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Is there something in it?"
    },
    ["mediumcrate"] = {
        ["name"] = "mediumcrate",
        ["label"] = "Medium Crate",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "mediumcrate.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Is there something in it?"
    },
    ["bigcrate"] = {
        ["name"] = "bigcrate",
        ["label"] = "Big Crate",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "bigcrate.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Is there something in it?"
    },
    ["smallcontainer"] = {
        ["name"] = "smallcontainer",
        ["label"] = "Small Container",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "smallcontainer.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Is there something in it?"
    },
    ["mediumcontainer"] = {
        ["name"] = "mediumcontainer",
        ["label"] = "Medium Container",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "mediumcontainer.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Is there something in it?"
    },
    ["bigcontainer"] = {
        ["name"] = "bigcontainer",
        ["label"] = "Big Container",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "bigcontainer.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Is there something in it?"
    },
    ["smalltrapcrate"] = {
        ["name"] = "smalltrapcrate",
        ["label"] = "Small Fake Crate",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "smalltrapcrate.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Is there something in it?"
    },
    ["trapcrate"] = {
        ["name"] = "trapcrate",
        ["label"] = "Medium Fake Crate",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "trapcrate.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Is there something in it?"
    },
    ["bigtrapcrate"] = {
        ["name"] = "bigtrapcrate",
        ["label"] = "Big Fake Crate",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "bigtrapcrate.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Is there something in it?"
    },

    ["portablefridge"] = {
        ["name"] = "portablefridge",
        ["label"] = "Portable Fridge",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "portablefridge.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Is there something in it?"
    },
    ["craterepairkit"] = {
        ["name"] = "craterepairkit",
        ["label"] = "Container repairkit",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "craterepairkit.png",
        ["unique"] = false,
        ["useable"] = false,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Extend that lifetime?"
    },
    ["cratehackingdevice"] = {
        ["name"] = "cratehackingdevice",
        ["label"] = "Container hacking device",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "cratehackingdevice.png",
        ["unique"] = false,
        ["useable"] = false,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Unlock that god damn container..."
    },
    ["cratepadlock"] = {
        ["name"] = "cratepadlock",
        ["label"] = "Container padlock",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "cratepadlock.png",
        ["unique"] = false,
        ["useable"] = false,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Let's make that container safe..."
    },
```

</TabItem>
<TabItem value="ox" label="OX Inventory">

Add items to `ox_inventory/data/items.lua`;

```lua
    -- containers
    ['smallcrate']               = {
        label = 'Small crate',
        weight = 100,
        stack = false,
        close = true,
        server = {
            export = "fd_storage.usedItem"
        }
    },
    ['mediumcrate']              = {
        label = 'Medium crate',
        weight = 100,
        stack = false,
        close = true,
        server = {
            export = "fd_storage.usedItem"
        }
    },
    ['bigcrate']                 = {
        label = 'Big crate',
        weight = 100,
        stack = false,
        close = true,
        server = {
            export = "fd_storage.usedItem"
        }
    },
    ['smallcontainer']           = {
        label = 'Small container',
        weight = 100,
        stack = false,
        close = true,
        server = {
            export = "fd_storage.usedItem"
        }
    },
    ['mediumcontainer']          = {
        label = 'Medium container',
        weight = 100,
        stack = false,
        close = true,
        server = {
            export = "fd_storage.usedItem"
        }
    },
    ['bigcontainer']             = {
        label = 'Big container',
        weight = 100,
        stack = false,
        close = true,
        server = {
            export = "fd_storage.usedItem"
        }
    },
    ['smalltrapcrate']           = {
        label = 'Small trap crate',
        weight = 100,
        stack = false,
        close = true,
        server = {
            export = "fd_storage.usedItem"
        }
    },
    ['trapcrate']                = {
        label = 'Medium trap crate',
        weight = 100,
        stack = false,
        close = true,
        server = {
            export = "fd_storage.usedItem"
        }
    },
    ['bigtrapcrate']             = {
        label = 'Big trap crate',
        weight = 100,
        stack = false,
        close = true,
        server = {
            export = "fd_storage.usedItem"
        }
    },
    ['portablefridge']           = {
        label = 'Portable fridge',
        weight = 100,
        stack = false,
        close = true,
        server = {
            export = "fd_storage.usedItem"
        }
    },
    ['cratepadlock']             = {
        label = 'Container padlock',
        weight = 5,
        stack = false,
        close = true,
    },
    ['cratehackingdevice']       = {
        label = 'Container hacking device',
        weight = 100,
        stack = false,
        close = true,
    },
    ['craterepairkit']           = {
        label = 'Container repair kit',
        weight = 100,
        stack = false,
        close = true,
    },
```

</TabItem>
</Tabs>

## Start

If you did everything as described above, please start your server and enjoy new portable / additional storages!

## Common Issues

### Questions

If you have an issue or questions, please visit our discord, and open a ticket.
