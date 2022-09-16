---
title: Compass as an item
---

## Default
By default, compass is enabled whenever you get in the car, but some owners would love to make it as an item and make compass available for on foot players. That can be done with this hud. By default, it's not enabled and you need some configuration. About it, please read the `Compass as an item` instalation below.

## Instalation
- First of all, to make compass as an item, you'll need to add item to your item list. Add this item to your `items`:
```lua
{
    label = "Compass",
    item = "compass"
}
```
- Add item icon to your inventory. We've prepared one for you, it can be found at `install/inventory images`

- Enable `compass as an item` in config, and set your item name. `shared/config.lua` options needed to be set:
```lua
config.CompassEnabledWithItem = true -- is compass enabled only with item?
config.CompassItem = 'compass' -- item name
```
