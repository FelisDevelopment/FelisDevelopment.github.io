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
<TabItem value="ESX" label="ESX" default>

Use a compatible version of [ESX Legacy (1.6.0+)](https://github.com/ESX-framework). Additionally you'll need:

Additionally you'll need:
- [ox_lib](https://github.com/overextended/ox_lib) [mandatory] (version: 2.2.1)
- [ox_inventory](https://github.com/overextended/ox_inventory) [mandatory] (version: 2.8.3)
- [qtarget](https://github.com/overextended/qtarget) [mandatory]

Please make sure to ensure it before `fd_rc` resource.
</TabItem>
</Tabs>

## Items

### Icons
First of all, please move icons from `images/` folder to your inventory resource and add items to inventory config as specified below.

### Items
<Tabs>
<TabItem value="ESX" label="ESX" default>

Add items to `ox_inventory/data/items.lua;`.

```lua
    ['drone'] = {
		label = 'Drone',
		weight = 1,
		stack = false,
		close = true,
		description = 'Lets have some fun.',
        client = {
            usetime = 1000,
            export = 'fd_rc.itemUsed'
        },
        server = {
            export = 'fd_rc.itemUsed'
        }
	},
    ['rc_car'] = {
		label = 'RC Car',
		weight = 1,
		stack = false,
		close = true,
		description = 'Lets have some fun.',
        client = {
            usetime = 1000,
            export = 'fd_rc.itemUsed'
        },
        server = {
            export = 'fd_rc.itemUsed'
        }
	},

    ['rc_controller'] = {
		label = 'Remote Controller',
		weight = 1,
		stack = false,
		close = true,
		description = 'It\'s not for kids.'
	},
    ['rc_batteries'] = {
		label = 'RC Batteries',
		weight = 1,
		stack = false,
		close = true,
		description = 'Recharge your drone or car.'
	},
    ['rc_repair_kit'] = {
		label = 'RC Repair Kit',
		weight = 1,
		stack = false,
		close = true,
		description = 'Repair your RC.'
	},
```
</TabItem>
</Tabs>

## Start

If you did everything as described above, please start your server and enjoy remote control vehicles!

## Common Issues

### Questions

If you have an issue or questions, please visit our discord, and open a ticket.
