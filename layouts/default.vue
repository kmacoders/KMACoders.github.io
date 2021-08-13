<template>
  <div>
    <TheHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import TheHeader from '@/components/templates/TheHeader'
import TheFooter from '@/components/templates/TheFoooter'

@Component({
  components: {
    TheHeader,
    TheFooter
  }
})
export default class DefaultLayout extends Vue {}
</script>
