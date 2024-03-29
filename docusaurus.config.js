// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Felis Development',
    tagline: 'Documentation for Felis Development resources / scripts',
    url: 'https://felisdevelopment.github.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'FelisDevelopment', // Usually your GitHub org/user name.
    projectName: 'FelisDevelopment.github.io', // Usually your repo name.
    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                // ... Your options.
                // `hashed` is recommended as long-term-cache of index file is possible.
                hashed: true,
                // For Docs using Chinese, The `language` is recommended to set to:
                // ```
                // language: ["en", "zh"],
                // ```
            },
        ],
    ],
    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/FelisDevelopment/FelisDevelopment.github.io/tree/main',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: true,
            },
            navbar: {
                title: 'Felis Development',
                logo: {
                    alt: 'Felis Development',
                    src: 'img/felsilogofull.png',
                },
                items: [
                    {
                        href: 'https://www.github.com/felisdevelopment',
                        label: 'GitHub',
                        position: 'left',
                    },
                    {
                        href: 'https://discord.gg/h26D7WfqGF',
                        label: 'Discord',
                        position: 'left',
                    },
                    {
                        to: 'docs/',
                        label: 'Documentation',
                        position: 'right',
                    },
                    {
                        // Still have to add the actual search :(
                        type: 'search',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                copyright: `Copyright © ${new Date().getFullYear()} Felis Development`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['lua']
            },
        }),
};

module.exports = config;
