<template>
  <b-navbar
    fixed-top
    transparent
    spaced
  >
    <template #brand>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
        <img
          src="~assets/images/rio-svg.svg"
          alt="eHandy logo"
        >
      </b-navbar-item>
    </template>
    <template #start>
      <template v-for="(nav, index) in navbarItems">
        <b-navbar-item
          v-if="nav.subMenu.length === 0"
          :key="index"
          tag="nuxt-link"
          :to="nav.link"
        >
          {{ nav.title }}
        </b-navbar-item>
        <b-navbar-dropdown
          v-else
          :key="index"
          :label="nav.title"
          collapsible
          hoverable
        >
          <b-navbar-item
            v-for="(sub, i) in nav.subMenu"
            :key="i"
            tag="nuxt-link"
            :to="sub.link"
          >
            {{ sub.title }}
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <TheSearcher />
      </b-navbar-item>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a href="https://www.linkedin.com/in/kmacoders/" class="button is-primary">
            Hire me
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class TheHeader extends Vue {
  navbarItems = [
    {
      title: 'Home',
      link: '/',
      subMenu: []
    },
    {
      title: 'Blog',
      link: '/blog',
      subMenu: [
        {
          title: 'All articles',
          link: '/blog'
        },
        {
          title: 'Article by tag',
          link: '/tags'
        }
      ]
    },
    {
      title: 'Contact',
      link: '/contact-us',
      subMenu: []
    }

  ]
}
</script>
