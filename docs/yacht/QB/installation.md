---
title: Installation
---

:::caution

Please carefully read installation process, otherwise `fd_yacht` resource will not work.
:::

### Dependecies

We've tried not to use a lot of third party dependencies, so you won't need to install that many dependencies. For this resource to work on QBCore, you'll need to install
- [qb-target](https://github.com/qbcore-framework/qb-target) [mandatory]
- [fd_lib](https://github.com/FelisDevelopment/fd_lib) [mandatory]

### QBCore
Resource is compatible with QBCore, you can get it at [QBCore Framework Repository](https://github.com/qbcore-framework). However, it's tested only with newest version.

### Set correct framework
Go to `shared/config.lua` and set your framework and target resources.
```lua
Config.core = 'qb' -- available: qb or esx
Config.coreResource = 'qb-core' -- only used if framework is qb
Config.targetResource = 'qb-target' -- only qtarget and qb-target support for now
```

:::caution
If you're using old QB Inventory that means old qb-inventory, lj-inventory or any other inventory, please enable `Config.oldItemCheckingForQBCore` in `shared/config.lua`.
:::

### Items
To work, this resources requires few items to be added to your core. Please add the following items to your core (item icons can be found in `items/qb` directory):
```lua
['felispad'] = { ['name'] = 'felispad', ['label'] = 'FelisPad', ['weight'] = 500, ['type'] = 'item', ['image'] = 'felispad.png', ['unique'] = true, ['useable'] = true, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Who this?' },

['envelope'] = { ['name'] = 'envelope', ['label'] = 'Microchipped Envelope', ['weight'] = 500, ['type'] = 'item', ['image'] = 'envelope.png', ['unique'] = true, ['useable'] = true, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Wirelessly connected to the Yacht Security.' },
```

### Loot
Make to configure your loot! Please take a look at [Add loot](/docs/yacht/loot) section.

### Start

Add
```
ensure fd_yacht
```
to your server.cfg and if you did everything as described above, please start your server and enjoy your new heist!

## Common Issues

### Questions

If you have an issue or questions, please visit our discord, and open a ticket.
