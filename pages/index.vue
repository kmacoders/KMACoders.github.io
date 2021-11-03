<template>
  <div>
    <Banner />
    <Profile />
    <Service />
    <Timeline />
    <Skills />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import AOS from 'aos'
import Banner from '@/components/templates/home/Banner.vue'
import Profile from '@/components/templates/home/Profile.vue'
import Skills from '@/components/templates/home/Skills.vue'
import Timeline from '@/components/templates/home/Timeline.vue'
import Service from '@/components/templates/home/Service.vue'

@Component({
  components: {
    Banner,
    Profile,
    Skills,
    Timeline,
    Service
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
