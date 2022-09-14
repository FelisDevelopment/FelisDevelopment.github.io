---
title: Dispatch
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Police alert
By default, whenever yacht heist starts script will send default notification to every police officer. If you're using somekind of dispatch script, you can override method and add trigger to send alert to your dispatch.


### Edit alert

<Tabs>
<TabItem value="qbcore" label="QBCore" default>

To override alert, please go to `modules/bridge/server/qb.lua`, to a line 54 and please override `bridge.triggerDispatch` method.
Here's how current trigger looks:

```lua
function bridge.triggerDispatch(coords)
    local players = core.Functions.GetPlayers()
    for _, player in pairs(players) do
        if player.PlayerData.job.name == 'police' and player.PlayerData.job.onduty then
            TriggerClientEvent('fd_yacht:notification', player.PlayerData.source, Config.messages['heist_in_progress'], 'error')
        end
    end
end
```

If your dispatch uses somekind of event, you can edit to:
```lua
function bridge.triggerDispatch(coords)
    TriggerEvent('dispatch:event', ...)
end
```

</TabItem>
<TabItem value="esx" label="ESX">

To override alert, please go to `modules/bridge/server/esx.lua`, to a line 69 and please override `bridge.triggerDispatch` method.
Here's how current trigger looks:

```lua
function bridge.triggerDispatch(coords)
    local players = core.GetPlayers()
    for _, player in pairs(players) do
        if player.job.name == 'police' then
            TriggerClientEvent('fd_yacht:notification', player.source, Config.messages['heist_in_progress'], 'error')
        end
    end
end
```

If your dispatch uses somekind of event, you can edit to:
```lua
function bridge.triggerDispatch(coords)
    TriggerEvent('dispatch:event', ...)
end
```
</TabItem>
</Tabs>
