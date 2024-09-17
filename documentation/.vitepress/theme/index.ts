// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import MyLayout from './components/MyLayout.vue'
import VersionBadge from './components/VersionBadge.vue'
import VersionBox from './components/VersionBox.vue'
import VersionLine from './components/VersionLine.vue'
import VersionSwitcher from "./components/VersionSwitcher.vue";

import './styles/blur.css'

export default {
  extends: DefaultTheme,
  Layout: MyLayout,

  enhanceApp({ app, router, siteData }) {
    app.component('VersionBadge' , VersionBadge)
    app.component('VersionBox' , VersionBox)
    app.component('VersionLine' , VersionLine)
    app.component('VersionSwitcher', VersionSwitcher);
  }
} satisfies Theme
