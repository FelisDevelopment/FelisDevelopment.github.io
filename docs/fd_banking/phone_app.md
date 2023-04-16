---
title: LB-Phone APP installation
---

:::caution

Please carefully read installation process, otherwise `fd_banking_app` resource will not work.
:::

## Remove default wallet app

Please go to `lb-phone/config/config.json` and from `apps` array remove `Wallet` app.

## Install fd_banking_app

Please download latest release from [FD Banking App Repository](https://github.com/FelisDevelopment/fd_banking_app/releases). Then, please extract it to your `resources` folder. After that, please add `ensure fd_banking_app` to your `server.cfg` and start your server.
Your server.cfg start should look like this:

```
ensure ox_lib
ensure lb-phone
ensure fd_banking
ensure fd_banking_app
```

## Enjoy your new shiny banking app!
