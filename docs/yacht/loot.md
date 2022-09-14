---
title: Add loot
---

### Config
Basically, adding new loot is pretty easy. There's 3 safes, which can have different loot with chances, or items which will be given everytime.
Please take a look in `shared/config.lua` at `Config.loot`:
```lua
Config.loot = {
    ['safe_1'] = {
        {
            ['item'] = 'money',
            ['amount'] = { 10000, 20000 } -- used in math.random
        },
        {
            ['chances'] = { 1, 1 },
            ['lucky'] = 1, -- if number is equal to the one from randomized from 'changes'
            ['item'] = 'goldbar',
            ['amount'] = { 1, 2 } -- used in math.random
        }
    },
    ['safe_2'] = {
        {
            ['chances'] = { 1, 1 },
            ['lucky'] = 1, -- if number is equal to the one from randomized from 'changes'
            ['item'] = 'goldbar',
            ['amount'] = { 1, 2 } -- used in math.random
        }
    },
    ['safe_3'] = {
        {
            ['chances'] = { 1, 1 },
            ['lucky'] = 1, -- if number is equal to the one from randomized from 'changes'
            ['item'] = 'goldbar',
            ['amount'] = { 1, 2 } -- used in math.random
        }
    },
}
```
As you can see, there's couple type of items there. Let me explain a bit more.

### Add item which will be given all the time.
If you want to add an item which will be given all the time, you need to add a simple table without any `chances`. In this example we'll add item `bandage` which will be given every time user loots safe. Example:
```lua
{
    ['item'] = 'bandage', -- item name
    ['amount'] = { 1, 5 } -- amount will always be randomised, so please use two values, if you want hardcoded amount, please use same number in both values
}
```
After item is formatted, please add it to `safe_1`, `safe_2` or `safe_3`. In this example we'll add to `safe_1`. So final config will look like this:
```lua
Config.loot = {
    ['safe_1'] = {
        {
            ['item'] = 'money',
            ['amount'] = { 10000, 20000 }
        },
        {
            ['item'] = 'bandage',
            ['amount'] = { 1, 5 } -- amount will always be randomised, so please two values, if you want hardcoded amount, please use same number every time
        },
        {
            ['chances'] = { 1, 1 },
            ['lucky'] = 1,
            ['item'] = 'goldbar',
            ['amount'] = { 1, 2 }
        }
    },
    ['safe_2'] = {
        {
            ['chances'] = { 1, 1 },
            ['lucky'] = 1,
            ['item'] = 'goldbar',
            ['amount'] = { 1, 2 }
        }
    },
    ['safe_3'] = {
        {
            ['chances'] = { 1, 1 },
            ['lucky'] = 1,
            ['item'] = 'goldbar',
            ['amount'] = { 1, 2 }
        }
    },
}
```

### Add item which has a chance.
If you want to add an item which has a chance to be given, you need to add a simple table with `chances` key. In this example we'll add item `rolex` which will be given if user is lucky. Example:
```lua
{
    {
        ['chances'] = { 1, 3 }, -- math.radom will be used with these values
        ['lucky'] = 1, -- if this number is equal to the one randomized from 'changes'
        ['item'] = 'rolex', -- item name
        ['amount'] = { 1, 2 } -- amount will always be randomised, so please use two values, if you want hardcoded amount, please use same number in both values
    }
}
```
After item is formatted, please add it to `safe_1`, `safe_2` or `safe_3`. In this example we'll add to `safe_2`. So final config will look like this:
```lua
Config.loot = {
    ['safe_1'] = {
        {
            ['item'] = 'money',
            ['amount'] = { 10000, 20000 }
        },
        {
            ['chances'] = { 1, 1 },
            ['lucky'] = 1,
            ['item'] = 'goldbar',
            ['amount'] = { 1, 2 }
        }
    },
    ['safe_2'] = {
        {
            ['chances'] = { 1, 1 },
            ['lucky'] = 1,
            ['item'] = 'goldbar',
            ['amount'] = { 1, 2 }
        },
        {
            ['chances'] = { 1, 3 }, -- math.radom will be used with these values
            ['lucky'] = 1, -- if this number is equal to the one randomized from 'changes'
            ['item'] = 'rolex',
            ['amount'] = { 1, 2 } -- amount will always be randomised, so please use two values, if you want hardcoded amount, please use same number in both values
        }
    },
    ['safe_3'] = {
        {
            ['chances'] = { 1, 1 },
            ['lucky'] = 1,
            ['item'] = 'goldbar',
            ['amount'] = { 1, 2 }
        }
    },
}
```
