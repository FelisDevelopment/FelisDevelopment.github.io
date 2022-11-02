---
title: Installation
---

:::caution

Please carefully read installation process, otherwise `fd_radio` resource will not work.
:::

### Dependecies

We've tried not to use a lot of third party dependencies, so you won't need to install that many dependencies. For this resource to work, you'll need to install
- [pma-voice](https://github.com/AvarianKnight/pma-voice) [mandatory (main branch)]
- [PolyZone](https://github.com/mkafrin/PolyZone) [mandatory]

### ESX
Use a compatible version of [ESX Legacy](https://github.com/esx-framework/esx-legacy) (Should be compatible with any version). Resource was tested with most recent [ox_recipe](https://github.com/overextended/ox_recipes) and [esx-recipe](https://github.com/esx-framework/ESX-recipes) for txAdmin.

### Set correct framework
Go to `shared/config.lua` and set your framework.
```lua
Config.core = 'esx' -- available: standalone, QB or ESX
```

### Adjust config
Before starting, please adjust config values as you want. [Config](/docs/fd_radio/config)

### Optional
Check out optional stuff, which might make sense for your setup. [Optional link](/docs/fd_radio/optional)

### Start

Add
```
ensure fd_radio
```
to your server.cfg and if you did everything as described above, please start your server and enjoy your new radio!

## Common Issues

### Questions

If you have an issue or questions, please visit our discord, and open a ticket.
