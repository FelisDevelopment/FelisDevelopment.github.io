---
title: Stress
---
### Explanation
We've kept all original `qb-hud` functionality with more advanced stuff. One of them is stress, original qb-hud had maximum of 100 stress available, which is pretty low and gets to 100 fast enough.

### Changes made
- In config you can define how much stress user can receive / have. `default: 1000`;
- Totaly removed blackout effect, which has a lot of bugs, for example if blackout happens whenever you drive, car will instantly go to full stop;
- Now, there's only blur effect, which can be defined in config, how often, how long and etc;
- From a lot of stress, player will start to ragdoll, this is also can be defined in config;
