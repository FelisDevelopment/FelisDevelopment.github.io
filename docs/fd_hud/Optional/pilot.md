---
title: Pilot license
---
## Pilot license
If enabled in config, players won't be able to drive any aircraft, but there's a catch.
- If player gets into a helicopter without license and starts flying, it'll get simulated turbulence, which most likely will cause a crash.
- If player gets into a plane, he won't be able to start it, it's done that way, because planes don't have turbulence.

## Installation
- Enable it in config. `shared/config.lua`
```lua
config.NeededPlaneLicense = true -- if enabled, users will need license to drive heli or a plane

```

- Restart your server

## Add license for player
You can either add a command for some job, admin command or make an automated system to add license. This example will show how to add license with admin command.

- Server side
```lua
function addLicense(src)
    local Player = QBCore.Functions.GetPlayer(src)

    if Player then
        Player.PlayerData.metadata["licences"]["pilot"] = true
        Player.Functions.SetMetaData("licences", Player.PlayerData.metadata["licences"])

        return true
    end

    return false
end


QBCore.Commands.Add('newpilot', 'Add pilot for user', {{name = "id", help = Lang:t('info.player_id')}}, false, function(source, args)
	local src = source

	if args[1] then
		local Player = QBCore.Functions.GetPlayer(tonumber(args[1]))

		if addLicense(tonumber(args[1])) then
            TriggerClientEvent('QBCore:Notify', src, 'Pilot license was added!')
            TriggerClientEvent('QBCore:Notify', tonumber(args[1]), 'You\'ve just received pilot license!')

			return
		end

        TriggerClientEvent('QBCore:Notify', src, 'Error occured, couldn\'t add pilot license.', "error")

        return
	end

    TriggerClientEvent('QBCore:Notify', src, 'No user provided', "error")
end, "admin")
```
