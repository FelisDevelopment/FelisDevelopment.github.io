---
title: Installation
---

:::caution

Please carefully read installation process, otherwise `fd_banking` resource will not work.
:::

### Dependecies

We've tried not to use a lot of third party dependencies, so you won't need to install that many dependencies. For this resource to work, you'll need to install

Supported framework: QBCore or QBox [mandatory]

- [oxmysql](https://github.com/overextended/oxmysql) [mandatory]
- [ox_lib](https://github.com/overextended/ox_lib) [mandatory]
- [ox_target](https://github.com/overextended/ox_target) [optional, places for it is not escrowed and can be easily changed to qb-target]

### QBCore

Resource is compatible with QBCore or QBox, you can get it at [QBCore Framework Repository](https://github.com/qbcore-framework) or [QBox Project Repository](https://github.com/Qbox-project/qbx-core). However, it's tested only with newest versions.

### Framework detection

Framework is detected automatically by resource name. if you've renamed `qb-core` or `qbx-core` to something else, please go to `modules/bridge` and update `resourceName` variable accordingly in the following files:

```
modules/bridge/client/qb.lua
modules/bridge/server/qb.lua
modules/bridge/shared/qb.lua
```

```lua
local resourceName = 'qb-core'
```

### Adjust config

Before starting, please adjust config values as you want. [Config](/docs/fd_banking/config)

### Start

Add

```
ensure ox_lib

ensure fd_banking
```

to your server.cfg and if you did everything as described above, please start your server and enjoy your new shiny new banking system.

##

## Common Issues

### Database

If your user doesn't have permissions to create tables, please grant him permissions to do so. You can do it by executing following query:

```sql
GRANT CREATE, ALTER, DROP, INDEX, INSERT, SELECT, UPDATE, DELETE ON `database_name`.`table` TO 'username'@'localhost';
```

Otherwise, you can create tables manually, by executing provided .sql file in resource.

### Questions

If you have an issue or questions, please visit our discord, and open a ticket.
