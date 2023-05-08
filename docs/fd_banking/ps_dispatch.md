---
title: PS Dispatch Integration
---

:::info Attention
Please very carefully read, to properly integrate `ps-dispatch` notifications for tracked players.
:::

### Add custom codes to `ps-dispatch`

Please open `sv_dispatchcodes.lua` at `ps-dispatch/server/` and add custom codes provided below at the end of `dispatchCodes`
Custom codes:

```lua
["bank_used"] =  {displayCode = '10-xx', description = "Tracked person used bank", radius = 0, recipientList = {'LEO', 'police'}, blipSprite = 442, blipColour = 1, blipScale = 0, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "false", blipflash = "false"},
["atm_used"] =  {displayCode = '10-xx', description = "Tracked person used ATM", radius = 0, recipientList = {'LEO', 'police'}, blipSprite = 442, blipColour = 1, blipScale = 0, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "false", blipflash = "false"},

```

Please adjust any information to adjust your needs.

### Add custom alerts to `ps-dispatch`

Please open `cl_extraalerts.lua` at `ps-dispatch/client/` and add custom alerts with exports provided below at the end of file.
Custom alerts:

```lua
local function UsedBankAlert(name)
    local currentPos = GetEntityCoords(PlayerPedId())
    local locationInfo = getStreetandZone(currentPos)
    local gender = GetPedGender()
    TriggerServerEvent("dispatch:server:notify",{
        dispatchcodename = "bank_used", -- has to match the codes in sv_dispatchcodes.lua so that it generates the right blip
        dispatchCode = "10-xx",
        firstStreet = locationInfo,
        gender = gender,
        model = nil,
        plate = nil,
        priority = 2, -- priority
        firstColor = nil,
        automaticGunfire = false,
        origin = {
            x = currentPos.x,
            y = currentPos.y,
            z = currentPos.z
        },
        dispatchMessage = ('%s used Bank'):format(name or 'Unknown'), -- message
        job = {"LEO", "police"} -- type or jobs that will get the alerts
    })
end exports('UsedBankAlert', UsedBankAlert)

local function UsedATMAlert(name)
    local currentPos = GetEntityCoords(PlayerPedId())
    local locationInfo = getStreetandZone(currentPos)
    local gender = GetPedGender()
    TriggerServerEvent("dispatch:server:notify",{
        dispatchcodename = "atm_used", -- has to match the codes in sv_dispatchcodes.lua so that it generates the right blip
        dispatchCode = "10-xx",
        firstStreet = locationInfo,
        gender = gender,
        model = nil,
        plate = nil,
        priority = 2, -- priority
        firstColor = nil,
        automaticGunfire = false,
        origin = {
            x = currentPos.x,
            y = currentPos.y,
            z = currentPos.z
        },
        dispatchMessage = ('%s Used ATM'):format(name or 'Unknown'), -- message
        job = {"LEO", "police"} -- type or jobs that will get the alerts
    })
end exports('UsedATMAlert', UsedATMAlert)

```

### Edit `fd_banking` to support `ps-dispatch`

Please open `modules/bridge/server/qb.lua` and edit `bridge.trackedPlayerUsed` method to:

```lua
function bridge.trackedPlayerUsed(source, identifier, coords, type)
    TriggerClientEvent("fd_banking:client:playerIsTracked", source, type)
end

```

Please open `modules/bridge/client/qb.lua` and before last `end)` add:

```lua
RegisterNetEvent("fd_banking:client:playerIsTracked", function(type)
    local fullName = ("%s %s"):format(PlayerData.charinfo.firstname, PlayerData.charinfo.lastname)

    if type == 'bank' then
        exports['ps-dispatch']:UsedBankAlert(fullName)
    end

    if type == 'atm' then
        exports['ps-dispatch']:UsedATMAlert(fullName)
    end
end)

```

### Enjoy

Now server your server and you can test, if everything works as expected.
