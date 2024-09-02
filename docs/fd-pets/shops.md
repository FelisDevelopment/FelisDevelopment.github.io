---
title: Shops (OX Inventory only)
---

:::caution

Please note that these configs only work for ox_inventory.
:::

## Basic shops

Add items to `ox_inventory/data/shops.lua`;

```lua
    Petshop = {
        name = 'The Pet Shop',
        inventory = {
            { name = 'chicken',      price = 50000 },
            { name = 'rabbit',      price = 50000 },
            { name = 'cat1',      price = 70000 },
            { name = 'cat2',      price = 70000 },
            { name = 'cat3',      price = 70000 },
            { name = 'westy1',      price = 200000 },
            { name = 'westy2',      price = 200000 },
            { name = 'westy3',      price = 200000 },
            { name = 'pug1',      price = 200000 },
            { name = 'pug2',      price = 200000 },
            { name = 'pug3',      price = 200000 },
            { name = 'poodle',      price = 250000 },
            { name = 'shepherd1',      price = 350000 },
            { name = 'retriever1',      price = 350000 },
            { name = 'retriever2',      price = 350000 },
            { name = 'retriever3',      price = 350000 },
            { name = 'retriever4',      price = 350000 },
            { name = 'rottweiler1',      price = 360000 },
            { name = 'rottweiler2',      price = 360000 },
            { name = 'rottweiler3',      price = 360000 },
            { name = 'husky1',      price = 370000 },
            { name = 'husky2',      price = 370000 },
            { name = 'husky3',      price = 370000 },
        },
        locations = {
        },
        blip = {
            id = 442, colour = 37, scale = 0.6},
        targets = {
            {
                ped = `S_F_Y_Scrubs_01`,
                scenario = 'CODE_HUMAN_CROSS_ROAD_WAIT',
                loc = vector3(560.3, 2738.18, 41.2),
                heading = 180.12,
            },
        }
    },


    Illegalpetshop = {
        name = 'Illegal Pet Shop',
        inventory = {
            { name = 'mtlion1',      price = 1000000 },
            { name = 'panther',      price = 1000000 },

        },
        locations = {
        },
        targets = {
            {
                ped = `IG_AcidLabCook`,
                scenario = 'WORLD_HUMAN_YOGA',
                loc = vector3(414.13, 5572.66, 777.90),
                heading = 269.45,
            },
        }
    },
```
