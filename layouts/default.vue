<template>
  <div>
    <the-header />
    <nuxt />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import TheHeader from '@/components/templates/TheHeader'

@Component({
  components: {
    TheHeader
  }
})
export default class DefaultLayout extends Vue {}
</script>
