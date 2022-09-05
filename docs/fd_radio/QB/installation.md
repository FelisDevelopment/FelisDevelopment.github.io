---
title: Installation
---

:::caution

Please carefully read installation process, otherwise `fd_radio` resource will not work.
:::

### Dependecies

We've tried not use a lot of third party dependencies, so you won't need to install that many dependencies. For this resource to work, you'll need to install
- [pma-voice](https://github.com/AvarianKnight/pma-voice) [mandatory]
- [fd_lib](https://github.com/FelisDevelopment/fd_lib) [mandatory]

### QBCore
Resource is compatible with QBCore, you can get it at [QBCore Framework Repository](https://github.com/qbcore-framework). However, it's tested only with newest version.

### Set correct framework
Go to `shared/config.lua` and set your framework.
```lua
Config.core = 'qb' -- available: standalone, QB or ESX
Config.coreResource = 'qb-core' -- only used if QB
```

### Optional
Check out optional stuff, which might make sense for your setup. [Optional link](http://localhost:3000/docs/fd_radio/optional)

### Start

Add
```
ensure fd_radio
```
to your server.cfg and if you did everything as described above, please start your server and enjoy your new radio!

## Common Issues

### Questions

If you have an issue or questions, please visit our discord, and open a ticket.
