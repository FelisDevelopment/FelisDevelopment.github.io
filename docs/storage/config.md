---
title: Config
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Config

To find out more about configuration please check descriptions below

```lua
Config =  {
    debug = true, -- Enables or Disables prints in server console
    purge_expired_every = 1000 * 60 * 10, -- 10 minutes, defines intervals for expired containers checking and removing
    save_storages_every = 1000 * 60 * 10, -- 10 minutes, defines intervals when on the ground inventories are saved
    hacking = {
        icons = 3, -- how many icons appears in hacking
        time = 5000 -- how much time user has to guess correct color
    },
    core = {
        framework = 'qbcore', -- available: qbcore, esx
        resource = 'reign-core' -- for qbcore usually: qb-core, for esx usually: es_extended
    },
    animations = { -- different animations for actions
        destroy = {
            dict = 'anim@amb@clubhouse@tutorial@bkr_tut_ig3@',
            name = 'machinic_loop_mechandplayer',
        },
        repair = {
            dict = 'anim@amb@clubhouse@tutorial@bkr_tut_ig3@',
            name = 'machinic_loop_mechandplayer',
        },
        create = {
            dict = "random@domestic",
            name = "pickup_low"
        },
        lock = {
            dict = 'anim@amb@clubhouse@tutorial@bkr_tut_ig3@',
            name = 'machinic_loop_mechandplayer',
        },
        unlock = {
            dict = 'anim@amb@clubhouse@tutorial@bkr_tut_ig3@',
            name = 'machinic_loop_mechandplayer',
        }
    },
    crates = { -- defines all containers which are available
        smallcrate = {
            lifetime = 14 * 86400, -- 7 days, defines container age after which it will be despawned and destroyed (seconds)
            model = "gr_prop_gr_rsply_crate03a", -- container model
            can_pickup = true, -- can container be picked up
            destroy_time = 30000, -- how many time it takes to destroy container
            lock_time = 30000, -- how many time it takes to put a lock on container
            break_time = 30000, -- how many time it takes for hack to appear
            repair_time = 30000, -- how many time it takes to repair / extend lifetime
            distance = 2, -- target distance
            repair_kits_needed = 1, -- how many repair kits needed to repair / extend lifetime
            size = {
                slots = 15, -- how many slots are available for this container
                weight = 50000 -- maximum weight available for this container
            }
        },
        mediumcrate = {
            lifetime = 14 * 86400, -- 14 days
            model = "prop_box_wood07a",
            destroy_time = 60000,
            lock_time = 30000,
            break_time = 30000,
            repair_time = 30000,
            distance = 2,
            repair_kits_needed = 2,
            size = {
                slots = 30,
                weight = 100000
            }
        },
        bigcrate = {
            lifetime = 30 * 86400, -- 30 days
            model = "prop_box_wood04a",
            destroy_time = 90000,
            lock_time = 30000,
            break_time = 30000,
            repair_time = 30000,
            distance = 2,
            repair_kits_needed = 3,
            size = {
                slots = 50,
                weight = 200000
            }
        },
        smallcontainer = {
            lifetime = 30 * 86400, -- 30 days
            model = "prop_container_05mb",
            destroy_time = 120000,
            lock_time = 30000,
            break_time = 30000,
            repair_time = 30000,
            distance = 3,
            repair_kits_needed = 4,
            size = {
                slots = 100,
                weight = 500000
            }
        },
        mediumcontainer = {
            lifetime = 30 * 86400, -- 30 days
            model = "prop_container_03mb",
            destroy_time = 120000,
            lock_time = 30000,
            break_time = 30000,
            repair_time = 30000,
            distance = 5,
            repair_kits_needed = 5,
            size = {
                slots = 200,
                weight = 1000000
            }
        },
        bigcontainer = {
            lifetime = 30 * 86400, -- 30 days
            model = "prop_container_01mb",
            destroy_time = 120000,
            lock_time = 30000,
            break_time = 30000,
            repair_time = 30000,
            distance = 7,
            repair_kits_needed = 6,
            size = {
                slots = 400,
                weight = 1500000
            }
        },
        smalltrapcrate = {
            lifetime = 30 * 86400, -- 30 days
            model = "gr_prop_gr_rsply_crate03a",
            destroy_time = 30000,
            distance = 3,
            trap = true
        },
        trapcrate = {
            lifetime = 30 * 86400, -- 30 days
            model = "prop_box_wood07a",
            destroy_time = 30000,
            distance = 3,
            trap = true
        },
        bigtrapcrate = {
            lifetime = 30 * 86400, -- 30 days
            model = "prop_box_wood04a",
            destroy_time = 30000,
            distance = 3,
            trap = true
        },
        portablefridge = {
            lifetime = 30 * 86400, -- 30 days
            model = "v_res_tre_fridge",
            destroy_time = 30000,
            distance = 3,
            offset = 0.0,
            size = {
                slots = 20,
                weight = 70000
            }
        }
    }
}

```

## New crate

Since script is dynamic, you can add new containers at any time.

### fd_storage config
First of all, add container to config `shared/config.lua`, please refer to example down below. It will be named `newawesomecontainer`

```lua
Config =  {
    ...,
    crates = {
        ...,
        newawesomecontainer = {
            lifetime = 30 * 86400, -- 30 days
            model = "v_res_tre_fridge",
            destroy_time = 30000,
            distance = 3,
            offset = 0.0,
            size = {
                slots = 20,
                weight = 70000
            }
        }
    }
}
```

### Inventory item
After adding container to config, you'll need to add item to your inventory.

<Tabs>
<TabItem value="qbcore" label="QBCore" default>

Add item to `shared/items.lua` or where your `QBShared.Items` is.


```lua
    ["newawesomecontainer"] = {
        ["name"] = "newawesomecontainer",
        ["label"] = "New Awesome Container",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "newawesomecontainer.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Is there something in it? It's new."
    },
```
</TabItem>
<TabItem value="esx" label="ESX" default>

Add item to `ox_inventory/data/items.lua`;

```lua
    ['newawesomecontainer'] = {
		label = 'New Awesome Container',
		weight = 1,
		stack = false,
		close = true,
		description = 'Is there something in it?',
        client = {
            usetime = 2500,
            export = 'fd_storage.newawesomecontainer'
        },
        server = {
            export = 'fd_storage.newawesomecontainer'
        }
	},
```
</TabItem>
</Tabs>
