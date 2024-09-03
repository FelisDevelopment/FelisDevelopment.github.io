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
<TabItem value="esx" label="ESX" default>

Resource is compatible with ESX Framework (ESX Legacy 1.6.0+).

Additionally you'll need:

- [ox_lib](https://github.com/overextended/ox_lib/releases) [mandatory]

Please make sure to ensure these before `fd_hud` resource.
</TabItem>
</Tabs>

## Config

- HUD preset default values can be found at: `modules/hud/shared/defaults.lua`, changing those will affect new preset creation, and new users will get those default settings.
- HUD config can be found at: `shared/config.lua`, make sure to take a look before starting resource.
