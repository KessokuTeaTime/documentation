import { defineConfig } from 'vitepress'
import Icons from 'unplugin-icons/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      Icons({ compiler: "vue3" })
    ]
  },
  title: "Kessoku Documentation",
  description: "下北沢で本当有名のバンド & Kessoku",
  base: "/documentation/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduces', link: '/lib-docs/index' }
    ],

    sidebar: [
      {
        text: 'KessokuLib',
        items: [
          { text: 'Introduction KessokuLib', link: '/lib-docs/index' },
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
