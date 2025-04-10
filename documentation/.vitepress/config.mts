import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      
    ]
  },
  title: "Kessoku Documentation",
  description: "下北沢で本当有名のバンド & Kessoku",
  base: "/documentation/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'KessokuLib', link: '/lib-docs/index' },
      { text: 'Koom', link: '/koom-docs/index' }
    ],

    sidebar: [
      {
        text: 'KessokuLib',
        items: [
          { text: 'Introduction KessokuLib', link: '/lib-docs/index' },
          { text: 'KessokuLib Modules', link: '/lib-docs/modules' }
        ]
      },
      {
        text: 'Koom',
        items: [
          { text: 'Introduction Koom', link: '/koom-docs/index' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KessokuTeaTime/documentation' }
    ],

    search: {
      provider: 'local'
    }
  }
})
