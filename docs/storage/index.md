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
- [PolyZone](https://github.com/mkafrin/PolyZone) [mandatory]
- [Howdy Hackminigame](https://github.com/HiHowdy/howdy-hackminigame) [mandatory for hacking containers]

and other framework specific dependencies.
### Framework Specific

<Tabs>
<TabItem value="qbcore" label="QBCore" default>

Resource should be compatible with older and newest QBCore versions, you can get it at [QBCore Framework Repository](https://github.com/qbcore-framework). However, it's tested only with newest version.

Additionally you'll need:
- [qb-target](https://github.com/BerkieBb/qb-target) [mandatory]

Please make sure to ensure it before `fd_storage` resource, and don't forget to set your framework and core resource in `shared/config.lua`.
</TabItem>
<TabItem value="esx" label="ESX">

Use a compatible version of [ESX Legacy](https://github.com/esx-framework/esx-legacy) (1.6.0+).
Additionally you'll need:
- [ox_inventory](https://github.com/overextended/ox_inventory) [mandatory]
- [qtarget](https://github.com/overextended/qtarget) [mandatory]

Please make sure to ensure them before `fd_storage` resource, and don't forget to set your framework and core resource in `shared/config.lua`.
</TabItem>
</Tabs>

## Config

Depending on your framework please set appropriate framework configuration in `shared/config.lua`.

<Tabs>
<TabItem value="qbcore" label="QBCore" default>

```lua
core = {
    framework = 'qbcore', -- available: qbcore, esx
    resource = 'qb-core' -- for qbcore usually: qb-core, for esx usually: es_extended
},
```
</TabItem>
<TabItem value="esx" label="ESX">

```lua
core = {
    framework = 'esx', -- available: qbcore, esx
    resource = 'es_extended' -- for qbcore usually: qb-core, for esx usually: es_extended
},
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
<TabItem value="esx" label="ESX">

Add items to `ox_inventory/data/items.lua`;

```lua
    ['smallcrate'] = {
		label = 'Small Crate',
		weight = 1,
		stack = false,
		close = true,
		description = 'Is there something in it?',
        client = {
            usetime = 2500,
            export = 'fd_storage.smallcrate'
        },
        server = {
            export = 'fd_storage.smallcrate'
        }
	},
    ['mediumcrate'] = {
		label = 'Medium Crate',
		weight = 1,
		stack = false,
		close = true,
		description = 'Is there something in it?',
        client = {
            usetime = 2500,
            export = 'fd_storage.mediumcrate'
        },
        server = {
            export = 'fd_storage.mediumcrate'
        }
	},
    ['bigcrate'] = {
		label = 'Big Crate',
		weight = 1,
		stack = false,
		close = true,
		description = 'Is there something in it?',
        client = {
            usetime = 2500,
            export = 'fd_storage.bigcrate'
        },
        server = {
            export = 'fd_storage.bigcrate'
        }
	},

    ['smallcontainer'] = {
		label = 'Small Container',
		weight = 1,
		stack = false,
		close = true,
		description = 'Is there something in it?',
        client = {
            usetime = 2500,
            export = 'fd_storage.smallcontainer'
        },
        server = {
            export = 'fd_storage.smallcontainer'
        }
	},
    ['mediumcontainer'] = {
		label = 'Medium Container',
		weight = 1,
		stack = false,
		close = true,
		description = 'Is there something in it?',
        client = {
            usetime = 2500,
            export = 'fd_storage.mediumcontainer'
        },
        server = {
            export = 'fd_storage.mediumcontainer'
        }
	},
    ['bigcontainer'] = {
		label = 'Big Container',
		weight = 1,
		stack = false,
		close = true,
		description = 'Is there something in it?',
        client = {
            usetime = 2500,
            export = 'fd_storage.bigcontainer'
        },
        server = {
            export = 'fd_storage.bigcontainer'
        }
	},

    ['smalltrapcrate'] = {
		label = 'Small Fake Crate',
		weight = 1,
		stack = false,
		close = true,
		description = 'Is there something in it?',
        client = {
            usetime = 2500,
            export = 'fd_storage.smalltrapcrate'
        },
        server = {
            export = 'fd_storage.smalltrapcrate'
        }
	},
    ['trapcrate'] = {
		label = 'Medium Fake Crate',
		weight = 1,
		stack = false,
		close = true,
		description = 'Is there something in it?',
        client = {
            usetime = 2500,
            export = 'fd_storage.trapcrate'
        },
        server = {
            export = 'fd_storage.trapcrate'
        }
	},
    ['bigtrapcrate'] = {
		label = 'Big Fake Crate',
		weight = 1,
		stack = false,
		close = true,
		description = 'Is there something in it?',
        client = {
            usetime = 2500,
            export = 'fd_storage.bigtrapcrate'
        },
        server = {
            export = 'fd_storage.bigtrapcrate'
        }
	},

    ['portablefridge'] = {
		label = 'Portable Fridge',
		weight = 1,
		stack = false,
		close = true,
		description = 'Is there something in it?',
        client = {
            usetime = 2500,
            export = 'fd_storage.portablefridge'
        },
        server = {
            export = 'fd_storage.portablefridge'
        }
	},

    ['craterepairkit'] = {
		label = 'Container repairkit',
		weight = 1,
		stack = false,
		close = true,
		description = 'Extend that lifetime?'
	},
    ['cratepadlock'] = {
		label = 'Container padloc',
		weight = 1,
		stack = false,
		close = true,
		description = 'Let\'s make that container safe...'
	},
    ['cratehackingdevice'] = {
		label = 'Container hacking device',
		weight = 1,
		stack = false,
		close = true,
		description = 'Unlock that god damn container...'
	},
```
</TabItem>
</Tabs>

## Start

If you did everything as described above, please start your server and enjoy new portable / additional storages!

## Common Issues

### Questions

If you have an issue or questions, please open an issue in [fd_storage support repo](https://github.com/FelisDevelopment/fd_storage_support/issues).
