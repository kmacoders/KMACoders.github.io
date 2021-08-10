<template>
  <b-navbar
    fixed-top
    transparent
    shadow
    spaced
  >
    <template #brand>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
        <img
          src="~assets/images/logo.png"
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
        <div class="buttons">
          <NuxtLink to="/sign-in" class="button is-primary">
            Sign up
          </NuxtLink>
          <NuxtLink to="/sign-in" class="button is-light">
            Log in
          </NuxtLink>
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
      title: 'Trang chủ',
      link: '/',
      subMenu: []
    },
    {
      title: 'Khóa học',
      link: '/',
      subMenu: [
        {
          title: 'HTML5/CSS3',
          link: '/'
        },
        {
          title: 'Javascript',
          link: '/'
        },
        {
          title: 'Vue',
          link: '/'
        },
        {
          title: 'React',
          link: '/'
        },
        {
          title: 'NodeJS',
          link: '/'
        },
        {
          title: 'NuxtJS',
          link: '/'
        }
      ]
    },
    {
      title: 'Blog',
      link: '/blog',
      subMenu: [
        {
          title: 'Tất cả bài viết',
          link: '/blog'
        },
        {
          title: 'Bài viết theo chủ đề',
          link: '/tags'
        }
      ]
    },
    {
      title: 'eHandy Teams',
      link: '/',
      subMenu: [
        {
          title: 'sub 1',
          link: '/'
        },
        {
          title: 'Sub 2',
          link: '/'
        }
      ]
    },
    {
      title: 'Contact Us',
      link: '/contact-us',
      subMenu: []
    }

  ]
}
</script>
