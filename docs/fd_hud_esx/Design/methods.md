---
title: Editing colors, icons and etc.
---
## Edit colors, icon
HUD is fully dynamic and pretty much nothing is hardcoded, that's why you can do whatever you want, and edit it to your liking. Our UI library is powerful and very optimised.

For example, if you want to change hunger filling color, just go to `modules/hud/client/basicNeeds.lua`, open it and find `line 22`.
```lua
hunger = ui.indicator({
    icon = 'fa-solid fa-pizza-slice',
    bg = 'bg-amber-300',
    position = 4,
    value = 50
})
```

As you can see, this defines hunger indicator, it's position, icon, value, and filling background. Indicator class exposes few methods like `update`, `show`, `hide`, `getLastValue`, `isShown`, `delete`. So there's few ways to change color, icon, value, position.
- You can change current values in indicator creation and forget about it, or if you want to be awesome, do it in more advanced way. For example go to the end of the file and add:
```lua
Citizen.CreateThread(function()
    hunger.update('bg', 'bg-red-500')
end)
```
- Done! More documentation on how indicator class works and what methods it has, will be up soon with our library documentation.
