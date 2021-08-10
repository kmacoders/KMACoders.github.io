<template>
  <div>
    <banner />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import Banner from '@/components/templates/home/Banner'

@Component({
  components: {
    Banner
  }
})
export default class Index extends Vue {
}
</script>
