---
title: Installation
---

:::caution

Please carefully read installation process, otherwise `fd_yacht` resource will not work.
:::


### Dependecies

We've tried not to use a lot of third party dependencies, so you won't need to install that many dependencies. For this resource to work, you'll need to install
- [qtarget](https://github.com/overextended/qtarget) [mandatory] (ox_target is supported at this moment, if you know what you're doing, yacht heist is open source)
- [fd_lib](https://github.com/FelisDevelopment/fd_lib) [mandatory]

### ESX
Use a compatible version of [ESX Legacy](https://github.com/esx-framework/esx-legacy) (1.6.0+). Resource was tested with most recent [ox_recipe](https://github.com/overextended/ox_recipes) for txAdmin.

### Set correct framework
Go to `shared/config.lua` and set your framework and target resources.
```lua
Config.core = 'esx' -- available: qb or esx
Config.targetResource = 'qtarget' -- only qtarget and qb-target support for now
```

### Items
To work, this resources requires few items to be added to your server. Since we wanted this resource to work with most of inventories, we've used old ESX methods for items, but depending on your inventory please add following items to where ever your items config is (item icons can be found in `items/esx` directory):
```lua
{
    {
        name = 'felispad',
        label = 'FelisPad'
    },
    {
        name = 'envelope_1',
        label = 'Microchipped Envelope'
    },
    {
        name = 'envelope_2',
        label = 'Microchipped Envelope'
    },
    {
        name = 'envelope_3',
        label = 'Microchipped Envelope'
    },
    {
        name = 'envelope_4',
        label = 'Microchipped Envelope'
    },
    {
        name = 'envelope_5',
        label = 'Microchipped Envelope'
    },
    {
        name = 'envelope_6',
        label = 'Microchipped Envelope'
    },
    {
        name = 'envelope_7',
        label = 'Microchipped Envelope'
    },
    {
        name = 'envelope_8',
        label = 'Microchipped Envelope'
    },
    {
        name = 'envelope_9',
        label = 'Microchipped Envelope'
    },
    {
        name = 'envelope_10',
        label = 'Microchipped Envelope'
    },
    {
        name = 'envelope_11',
        label = 'Microchipped Envelope'
    },
    {
        name = 'envelope_12',
        label = 'Microchipped Envelope'
    }
}

```

### Loot
Make to configure your loot! Please take a look at [Add loot](/docs/yacht/loot) section.

### Start

Add
```
ensure fd_yacht
```
to your server.cfg and if you did everything as described above, please start your server and enjoy your new radio!

## Common Issues

### Questions

If you have an issue or questions, please visit our discord, and open a ticket.
