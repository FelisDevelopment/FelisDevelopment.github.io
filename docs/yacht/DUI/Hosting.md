---
title: Hosting your own DUI
---
:::warning Attention!
If you don't know what you're doing, please just use pre-hosted solution!
:::

### Support
UI can be hosted at any hosting provider, under the hood, it utilizies Vue3 and Tailwind.

### Repository
UI is fully opensource and can be found at:
[Yacht DUI Repository](https://github.com/FelisDevelopment/fd_yacht_dui)

### Steps
1. Clone repository
    ```bash
    git clone https://github.com/FelisDevelopment/fd_yacht_dui.git
    ```
2. Switch directory
    ```bash
    cd fd_yacht_dui
    ```
3. Install dependencies using `npm`, `yarn` or `pnpm`
    ```bash
    npm install
    ```
4. Build UI
    ```bash
    npm run build
    ```
5. Upload built UI from `dist` folder. If you are using Apache, please upload also .htaccess file from `root` directory.

6. Please update your url accordingly in `modules/heist/client.lua` at line 4:
    ```lua
        local urls = {
            text = 'http://yacht.felis.cloud/text?text=%s&fontSize=5em',
            countdown = 'http://yacht.felis.cloud/countdown?fontSize=5em&seconds=%s',
            clue = 'http://yacht.felis.cloud/clue?fontSize=5em&up=%s&down=%s&left=%s&right=%s&identifier=%s'
        }
    ```
