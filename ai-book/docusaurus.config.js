import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'Learning Physical AI and Robotics',
  favicon: 'img/favicon.ico',

  url: 'https://hackathon-ai-humanoid-textbook-5s52.vercel.app/',
  baseUrl: '/',

  organizationName: 'Mohibalikhan',
  projectName: 'Hackathon-ai-humanoid-textbook',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/ph-ai-logo.png',

    /* ================= HEADER ================= */
    navbar: {
      title: 'Physical AI & Robotics',
      logo: {
        alt: 'Physical AI Logo',
        src: 'img/ai-robotic.jpeg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '📘 Textbook',
        },
        {
          href: 'https://github.com/Mohibalikhan',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/mohib-ali-khan-64518a260/',
          label: 'LinkedIn',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          i18n: {
            defaultLocale: 'en',
            locales: ['en', 'ur'],
            localeConfigs: {
              ur: {
                label: 'اردو',
                direction: 'rtl',
              },
            },
          },
        },
      ],
    },

    /* ================= FOOTER ================= */
    footer: {
      style: 'dark',
      links: [
        {
          title: '📚 Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/docs/introduction/intro',
            },
          ],
        },
        {
          title: '🌐 Connect',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Mohibalikhan',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/mohib-ali-khan-64518a260/',
            },
          ],
        },
      ],
      copyright:
        `© ${new Date().getFullYear()} Mohib Ali Khan. All rights reserved.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
