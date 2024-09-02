---
title: Installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution

Please carefully read installation process, otherwise `fd-pets` resource will not work.
:::

## Dependecies

### Global dependencies

We've tried not use a lot of third party dependencies, so you won't need to install that many dependencies. For this resource to work, you'll need to install

- [ox_lib](https://github.com/overextended/ox_lib) [mandatory]

and other framework specific dependencies.

### Inventory

At the moment, pets support `qb-inventory` and `ox_inventory`. For other inventories, you'll have to write your own bridge.

## Config

Storage is detecting framework automatically. If you have renamed your resources or core, please check `/bridge` folder, there you'll be able to change name and etc. Otherwise, please check config at `configs/*` folder.

## Items

### Icons

First of all, please move icons from `images/` folder to your inventory resource and add items to inventory config as specified below.

### Items

<Tabs>
<TabItem value="qbcore" label="QB Inventory">

Add items to `shared/items.lua` or where your `QBShared.Items` is.

```lua
    ["rottweiler1"]              = {
        ["name"] = "rottweiler1",
        ["label"] = "Rottweiler",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "rottweiler1.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Black-colored"
    },
    ["rottweiler2"]              = {
        ["name"] = "rottweiler2",
        ["label"] = "Rottweiler",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "rottweiler2.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Brown-colored"
    },
    ["rottweiler3"]              = {
        ["name"] = "rottweiler3",
        ["label"] = "Rottweiler",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "rottweiler3.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Dark brown brindle-colored"
    },

    ["cat1"]                     = {
        ["name"] = "cat1",
        ["label"] = "Cat",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "cat1.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Tabby kitten"
    },
    ["cat2"]                     = {
        ["name"] = "cat2",
        ["label"] = "Cat",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "cat2.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Tuxedo kitten"
    },
    ["cat3"]                     = {
        ["name"] = "cat3",
        ["label"] = "Cat",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "cat3.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Orange kitten"
    },

    ["chicken"]                  = {
        ["name"] = "chicken",
        ["label"] = "Chicken",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "chicken.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Orange kitten"
    },

    ["husky1"]                   = {
        ["name"] = "husky1",
        ["label"] = "Husky",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "husky1.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Black and white-colored"
    },
    ["husky2"]                   = {
        ["name"] = "husky2",
        ["label"] = "Husky",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "husky2.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Golden and white-colored"
    },
    ["husky3"]                   = {
        ["name"] = "husky3",
        ["label"] = "Husky",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "husky3.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Light-colored"
    },

    ["mtlion1"]                  = {
        ["name"] = "mtlion1",
        ["label"] = "Mountain Lion",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "mtlion1.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "What is a kitten doing here?"
    },

    ["panther"]                  = {
        ["name"] = "panther",
        ["label"] = "Panther",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "panther.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "What is a kitten doing here?"
    },

    ["poodle"]                   = {
        ["name"] = "poodle",
        ["label"] = "Poodle",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "poodle.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "A dog for fancy people"
    },

    ["pug1"]                     = {
        ["name"] = "pug1",
        ["label"] = "Pug",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "pug1.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Light-colored"
    },

    ["pug2"]                     = {
        ["name"] = "pug2",
        ["label"] = "Pug",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "pug2.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Gray-colored"

    },
    ["pug3"]                     = {
        ["name"] = "pug3",
        ["label"] = "Pug",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "pug3.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Brown-colored"

    },
    ["pug4"]                     = {
        ["name"] = "pug4",
        ["label"] = "Pug",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "pug4.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Black-colored"
    },

    ["retriever1"]               = {
        ["name"] = "retriever1",
        ["label"] = "Retriever",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "retriever1.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Light orange-colored"

    },
    ["retriever2"]               = {
        ["name"] = "retriever2",
        ["label"] = "Retriever",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "retriever2.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Black-colored"
    },
    ["retriever3"]               = {
        ["name"] = "retriever3",
        ["label"] = "Retriever",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "retriever3.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Light brown-colored"
    },
    ["retriever4"]               = {
        ["name"] = "retriever4",
        ["label"] = "Retriever",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "retriever4.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Brown-colored"
    },

    ["shepherd1"]                = {
        ["name"] = "shepherd1",
        ["label"] = "Shepherd",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "shepherd1.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Good shepherd dog"
    },

    ["westy1"]                   = {
        ["name"] = "westy1",
        ["label"] = "Westy",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "westy1.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "White-colored"
    },
    ["westy2"]                   = {
        ["name"] = "westy2",
        ["label"] = "Westy",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "westy2.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Brown-colored"
    },
    ["westy3"]                   = {
        ["name"] = "westy3",
        ["label"] = "Westy",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "westy3.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "Black-colored"
    },

    ["rabbit"]                   = {
        ["name"] = "rabbit",
        ["label"] = "Rabbit",
        ["weight"] = 0,
        ["type"] = "item",
        ["image"] = "rabbit.png",
        ["unique"] = true,
        ["useable"] = true,
        ["shouldClose"] = true,
        ["combinable"] = nil,
        ["description"] = "I think he likes rabbits."
    },
```

</TabItem>
<TabItem value="ox" label="OX Inventory" default>

Add items to `ox_inventory/data/items.lua`;

```lua
    ["rottweiler1"]        = {
        label = "Rottweiler",
        weight = 5000,
        stack = true,
        close = true,
        description = "Black-colored",
    },
    ["rottweiler2"]        = {
        label = "Rottweiler",
        weight = 5000,
        stack = true,
        close = true,
        description = "Brown-colored",
    },
    ["rottweiler3"]        = {
        label = "Rottweiler",
        weight = 5000,
        stack = true,
        close = true,
        description = "Dark brown brindle-colored",
    },
    ["cat1"]               = {
        label = "Cat",
        weight = 1000,
        stack = true,
        close = true,
        description = "Tabby kitten",
        },
    ["cat2"]               = {
        label = "Cat",
        weight = 1000,
        stack = true,
        close = true,
        description = "Tuxedo kitten",
        },
    ["cat3"]               = {
        label = "Cat",
        weight = 1000,
        stack = true,
        close = true,
        description = "Orange kitten",
        },
    ["chicken"]            = {
        label = "Chicken",
        weight = 1000,
        stack = true,
        close = true,
        description = "What is a chicken doing here?",
        },
    ["husky1"]             = {
        label = "Husky",
        weight = 5000,
        stack = true,
        close = true,
        description = "Black and white-colored",
    },
    ["husky2"]             = {
        label = "Husky",
        weight = 5000,
        stack = true,
        close = true,
        description = "Golden and white-colored",
    },
    ["husky3"]             = {
        label = "Husky",
        weight = 5000,
        stack = true,
        close = true,
        description = "Light-colored",
    },
    ["mtlion1"]            = {
        label = "Mountain lion",
        weight = 10000,
        stack = true,
        close = true,
        description = "What is a kitten doing here?",
        },
    ["panther"]            = {
        label = "Panther",
        weight = 10000,
        stack = true,
        close = true,
        description = "What is a kitten doing here?",
        },
    ["poodle"]             = {
        label = "Poodle",
        weight = 5000,
        stack = true,
        close = true,
        description = "A dog for fancy people",
        },
    ["shepherd1"]          = {
        label = "Border Collie",
        weight = 5000,
        stack = true,
        close = true,
        description = "Good shepherd dog",
        },
    ["pug1"]               = {
        label = "Pug",
        weight = 5000,
        stack = true,
        close = true,
        description = "Light-colored",
        },
    ["pug2"]               = {
        label = "Pug",
        weight = 5000,
        stack = true,
        close = true,
        description = "Gray-colored",
    },
    ["pug3"]               = {
        label = "Pug",
        weight = 5000,
        stack = true,
        close = true,
        description = "Brown-colored",
    },
    ["pug4"]               = {
        label = "Pug",
        weight = 5000,
        stack = true,
        close = true,
        description = "Black-colored",
    },
    ["retriever1"]         = {
        label = "Retriever",
        weight = 5000,
        stack = true,
        close = true,
        description = "Light orange-colored",
    },
    ["retriever2"]         = {
        label = "Retriever",
        weight = 1000,
        stack = true,
        close = true,
        description = "Black-colored",
    },
    ["retriever3"]         = {
        label = "Retriever",
        weight = 5000,
        stack = true,
        close = true,
        description = "Light brown-colored",
    },
    ["retriever4"]         = {
        label = "Retriever",
        weight = 5000,
        stack = true,
        close = true,
        description = "Brown-colored",
    },

    ["westy1"]             = {
        label = "West Highland White Terrier",
        weight = 5000,
        stack = true,
        close = true,
        description = "White-colored",
    },
    ["westy2"]             = {
        label = "Scottish Terrier",
        weight = 5000,
        stack = true,
        close = true,
        description = "Brown-colored",

    },
    ["westy3"]             = {
        label = "Scottish Terrier",
        weight = 5000,
        stack = true,
        close = true,
        description = "Black-colored",
    },
    ["rabbit"]             = {
        label = "Rabbit",
        weight = 5000,
        stack = true,
        close = true,
        description = "Bring some carrots for sure",
    },
```

</TabItem>
</Tabs>

## Start

If you did everything as described above, please start your server and enjoy adorable pets!

## Common Issues

### Questions

If you have an issue or questions, please visit our discord, and open a ticket.
