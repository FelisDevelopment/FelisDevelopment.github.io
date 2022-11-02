---
title: Quick join list
---

## Quick join list for jobs
Radio has feature, where you can setup quick join list for jobs. For example you can specify quick join channels for `police`, so by pressing keybind or entering command, they we'll be able to quickly join any specified channel from the list.

### Command
You can change up command in config. Just change `Config.QuickListCommand`


### Define channels
You can define as many channels as you want, this example will show channels defined for `police`.
```lua
Config.QuickListForJobs = {
    ['police'] = {
        [1] = 'General PD Channel',
        [2] = 'General PD Channel',
        [3] = 'General PD Channel',
        [4] = 'General PD Channel',
        [5] = 'General PD Channel',
        [6] = 'General PD Channel',
        [7] = 'General PD Channel',
        [8] = 'General PD Channel',
        [9] = 'General PD Channel',
        [10] = 'General PD Channel',
    }
}

```
