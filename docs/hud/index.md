---
title: Installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution

Please carefully read installation process, otherwise `fd_hud` resource will not work.
:::
### Framework Specific

<Tabs>
<TabItem value="qbcore" label="QBCore" default>

Resource is compatible with QBCore, you can get it at [QBCore Framework Repository](https://github.com/qbcore-framework). However, it's tested only with newest version.

Additionally you'll need:
- [nb-keyevent](https://github.com/negbook/nb-keyevent) [mandatory for fd_lib]
- [fd_lib](https://github.com/FelisDevelopment/fd_lib/releases) [mandatory]

Please make sure to ensure these before `fd_hud` resource.
</TabItem>
</Tabs>

## Config
- HUD preset default values can be found at: `modules/hud/shared/defaults.lua`, changing those will affect new preset creation, and new users will get those default settings.
- HUD config can be found at: `shared/config.lua`, make sure to take a look before starting resource.
