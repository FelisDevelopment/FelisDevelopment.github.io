/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

    // But you can create a sidebar manually
    docs: [
        {
            type: 'doc',
            label: 'Documentation',
            id: 'index'
        },
        {
            type: 'link',
            label: 'Radio',
            href: '/docs/fd_radio',
        },
        {
            type: 'link',
            label: 'RC (Remote control vehicles)',
            href: '/docs/fd_rc',
        },
        {
            type: 'link',
            label: 'HUD',
            href: '/docs/fd_hud',
        },
        {
            type: 'link',
            label: 'Portable storage / containers',
            href: '/docs/fd_storage',
        },
        {
            type: 'link',
            label: 'Yacht Heist',
            href: '/docs/yacht',
        }
    ],
    fd_lib: [
        {
            type: 'link',
            label: '← Documentation',
            href: '/docs',
        },
        {
            type: 'category',
            label: 'HUD',
            link: {
                type: 'generated-index',
                title: 'FD HUD',
            },
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'fd_hud',
                },
            ],
        },
    ],
    yacht: [
        {
            type: 'link',
            label: '← Documentation',
            href: '/docs',
        },
        {
            type: 'category',
            label: 'Yacht Heist',
            link: {
                type: 'generated-index',
                title: 'Yacht Heist',
            },
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'yacht',
                },
            ],
        },
    ],
    fd_rc: [
        {
            type: 'link',
            label: '← Documentation',
            href: '/docs',
        },
        {
            type: 'category',
            label: 'Remote control vehicles',
            link: {
                type: 'generated-index',
                title: 'RC (Remote control vehicles)'
            },
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'fd_rc',
                },
            ],
        },
    ],
    fd_hud: [
        {
            type: 'link',
            label: '← Documentation',
            href: '/docs',
        },
        {
            type: 'category',
            label: 'HUD',
            link: {
                type: 'generated-index',
                title: 'FD HUD',
            },
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'fd_hud',
                },
            ],
        },
    ],
    fd_storage: [
        {
            type: 'link',
            label: '← Documentation',
            href: '/docs',
        },
        {
            type: 'category',
            label: 'Portable storage / containers',
            link: {
                type: 'generated-index',
                title: 'Portable storage / containers'
            },
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'fd_storage',
                },
            ],
        },
    ],
    fd_radio: [
        {
            type: 'link',
            label: '← Documentation',
            href: '/docs',
        },
        {
            type: 'category',
            label: 'Radio',
            link: {
                type: 'generated-index',
                title: 'Radio'
            },
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'fd_radio',
                },
            ],
        },
    ],

};

module.exports = sidebars;
// {
//     type: 'category',
//     label: 'HUD Docs',
//     items: [
//         {
//             type: 'autogenerated',
//             dirName: 'hud'
//         }
//     ]
// },
// {
//     type: 'category',
//     label: 'Storage Docs',
//     items: [
//         {
//             type: 'autogenerated',
//             dirName: 'storage'
//         }
//     ]
// },
// {
//     type: 'category',
//     label: '(QB) Remote Control',
//     items: [
//         {
//             type: 'autogenerated',
//             dirName: 'rc_qb'
//         }
//     ]
// },
// {
//     type: 'category',
//     label: '(ESX) Remote Control',
//     items: [
//         {
//             type: 'autogenerated',
//             dirName: 'rc_esx'
//         }
//     ]
// },
