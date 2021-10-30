<template>
  <div>
    <Banner />
    <Profile />
    <Skills />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import AOS from 'aos'
import Banner from '@/components/templates/home/Banner.vue'
import Profile from '@/components/templates/home/Profile.vue'
import Skills from '@/components/templates/home/Skills.vue'

@Component({
  components: {
    Banner,
    Profile,
    Skills
  }
})
export default class Index extends Vue {
  mounted (): void {
    AOS.init({
      duration: 500,
      once: true
    })
  }
}
</script>
