<template>
  <div>
    <Banner />
    <Skills />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import Banner from '@/components/templates/home/Banner'
import Skills from '@/components/templates/home/Skills'

@Component({
  components: {
    Banner,
    Skills
  }
})
export default class Index extends Vue {
}
</script>
