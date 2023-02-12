---
title: Installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution

Please carefully read installation process, otherwise `fd_radio` resource will not work.
:::

### Dependecies

We've tried not to use a lot of third party dependencies, so you won't need to install that many dependencies. For this resource to work, you'll need to install
- [ox_lib](https://github.com/overextended/ox_lib) [mandatory]
- Supported inventory: Quasar Inventory, OX Inventory, QB Inventory, LJ Inventory [mandatory]
- [glow_minigames](https://github.com/christikat/glow_minigames) [optionakl, need only if `config.machinesCanBeHacked` is set to `true`]

### QBCore
Resource is compatible with QBCore, you can get it at [QBCore Framework Repository](https://github.com/qbcore-framework). However, it's tested only with newest version.

### Framework detection
Framework is detected automatically by resource name. if you've renamed `qb-core` to something else, please go to `modules/bridge/qb` and change
```lua
local resourceName = 'qb-core'
```
in both `client.lua` and `server.lua` to your resource name.

### Add items your inventory
<Tabs>
<TabItem value="qbcore" label="QB Inventory / LJ Inventory / Quasar inventory" default>

Add items to `qb-core/shared/items.lua`, get icons from `extras/Inventory images` and add them to your inventory.

```lua
 ['claw_machine'] 			     = {['name'] = 'claw_machine', 				['label'] = 'Claw Machine', 				['weight'] = 10000, 		['type'] = 'item', 		['image'] = 'claw_machine.png', 		['unique'] = true, 		['useable'] = true, 	['shouldClose'] = true,	   ['combinable'] = nil,   ['description'] = 'A claw machine, let\'s make some profit!' },

    ['humpy_tee_plushie'] 			 = {['name'] = 'humpy_tee_plushie', 				['label'] = 'Humpy tee plushie', 				['weight'] = 1000, 		['type'] = 'item', 		['image'] = 'humpy_tee_plushie.png', 		['unique'] = true, 		['useable'] = true, 	['shouldClose'] = true,	   ['combinable'] = nil,   ['description'] = 'Plush Plush!' },
    ['muffy_tee_plushie'] 			 = {['name'] = 'muffy_tee_plushie', 				['label'] = 'Muffy tee plushie', 				['weight'] = 1000, 		['type'] = 'item', 		['image'] = 'muffy_tee_plushie.png', 		['unique'] = true, 		['useable'] = true, 	['shouldClose'] = true,	   ['combinable'] = nil,   ['description'] = 'Plush Plush!' },
    ['saki_tee_plushie'] 			 = {['name'] = 'saki_tee_plushie', 				    ['label'] = 'Saki tee plushie', 				['weight'] = 1000, 		['type'] = 'item', 		['image'] = 'saki_tee_plushie.png', 		['unique'] = true, 		['useable'] = true, 	['shouldClose'] = true,	   ['combinable'] = nil,   ['description'] = 'Plush Plush!' },
    ['poopie_tee_plushie'] 			 = {['name'] = 'poopie_tee_plushie', 				['label'] = 'Poppie tee plushie', 				['weight'] = 1000, 		['type'] = 'item', 		['image'] = 'poopie_tee_plushie.png', 		['unique'] = true, 		['useable'] = true, 	['shouldClose'] = true,	   ['combinable'] = nil,   ['description'] = 'Plush Plush!' },
    ['smoker_tee_plushie'] 			 = {['name'] = 'smoker_tee_plushie', 				['label'] = 'Smoker tee plushie', 				['weight'] = 1000, 		['type'] = 'item', 		['image'] = 'smoker_tee_plushie.png', 		['unique'] = true, 		['useable'] = true, 	['shouldClose'] = true,	   ['combinable'] = nil,   ['description'] = 'Plush Plush!' },
    ['grindy_tee_plushie'] 			 = {['name'] = 'grindy_tee_plushie', 				['label'] = 'Grindy tee plushie', 				['weight'] = 1000, 		['type'] = 'item', 		['image'] = 'grindy_tee_plushie.png', 		['unique'] = true, 		['useable'] = true, 	['shouldClose'] = true,	   ['combinable'] = nil,   ['description'] = 'Plush Plush!' },
    ['princess_tee_plushie'] 		 = {['name'] = 'princess_tee_plushie', 				['label'] = 'Princess tee plushie', 			['weight'] = 1000, 		['type'] = 'item', 		['image'] = 'princess_tee_plushie.png', 		['unique'] = true, 		['useable'] = true, 	['shouldClose'] = true,	   ['combinable'] = nil,   ['description'] = 'Plush Plush!' },
    ['wasabi_kitty_tee_plushie'] 	 = {['name'] = 'wasabi_kitty_tee_plushie', 			['label'] = 'Wasabi Kitty tee plushie', 		['weight'] = 1000, 		['type'] = 'item', 		['image'] = 'wasabi_kitty_tee_plushie.png', 		['unique'] = true, 		['useable'] = true, 	['shouldClose'] = true,	   ['combinable'] = nil,   ['description'] = 'Plush Plush!' },
    ['master_tee_plushie'] 			 = {['name'] = 'master_tee_plushie', 				['label'] = 'Master tee plushie', 				['weight'] = 1000, 		['type'] = 'item', 		['image'] = 'master_tee_plushie.png', 		['unique'] = true, 		['useable'] = true, 	['shouldClose'] = true,	   ['combinable'] = nil,   ['description'] = 'Plush Plush!' },
```
</TabItem>
<TabItem value="ox" label="OX Inventory">

Add items to `ox_inventory/data/items.lua` in your inventory resource, get icons from `extras/Inventory images` and add them to your inventory.

```lua
['claw_machine'] = {
        label = 'Claw Machine',
        weight = 10000,
        stack = false,
        close = false,
        durability = 100,
        description = "A claw machine, let's make some profit!",
        client = {
            export = 'fd_claw.clawMachine'
        }
    },

    ['humpy_tee_plushie'] = {
        label = 'Humpy tee plushie',
        weight = 1000,
        stack = false,
        close = false,
        description = "Plush plush!",
        client = {
            export = 'fd_claw.usedPlushie'
        }
    },

    ['muffy_tee_plushie'] = {
        label = 'Muffy tee plushie',
        weight = 1000,
        stack = false,
        close = false,
        description = "Plush plush!",
        client = {
            export = 'fd_claw.usedPlushie'
        }
    },

    ['saki_tee_plushie'] = {
        label = 'Saki tee plushie',
        weight = 1000,
        stack = false,
        close = false,
        description = "Plush plush!",
        client = {
            export = 'fd_claw.usedPlushie'
        }
    },

    ['poopie_tee_plushie'] = {
        label = 'Poopie tee plushie',
        weight = 1000,
        stack = false,
        close = false,
        description = "Plush plush!",
        client = {
            export = 'fd_claw.usedPlushie'
        }
    },

    ['smoker_tee_plushie'] = {
        label = 'Smoker tee plushie',
        weight = 1000,
        stack = false,
        close = false,
        description = "Plush plush!",
        client = {
            export = 'fd_claw.usedPlushie'
        }
    },

    ['grindy_tee_plushie'] = {
        label = 'Grindy tee plushie',
        weight = 1000,
        stack = false,
        close = false,
        description = "Plush plush!",
        client = {
            export = 'fd_claw.usedPlushie'
        }
    },

    ['princess_tee_plushie'] = {
        label = 'Princess tee plushie',
        weight = 1000,
        stack = false,
        close = false,
        description = "Plush plush!",
        client = {
            export = 'fd_claw.usedPlushie'
        }
    },

    ['wasabi_kitty_tee_plushie'] = {
        label = 'Wasabi Kitty tee plushie',
        weight = 1000,
        stack = false,
        close = false,
        description = "Plush plush!",
        client = {
            export = 'fd_claw.usedPlushie'
        }
    },

    ['master_tee_plushie'] = {
        label = 'Master tee plushie',
        weight = 1000,
        stack = false,
        close = false,
        description = "Plush plush!",
        client = {
            export = 'fd_claw.usedPlushie'
        }
    }
```

</TabItem>
</Tabs>

### Adjust config
Before starting, please adjust config values as you want. [Config](/docs/fd_radio/config)

### Optional
Check out optional stuff, which might make sense for your setup. [Optional link](/docs/fd_radio/optional)

### Start

Add
```
ensure ox_lib

ensure fd_claw
```
to your server.cfg and if you did everything as described above, please start your server and enjoy your new shiny claw machine!

## Common Issues

### Questions

If you have an issue or questions, please visit our discord, and open a ticket.
