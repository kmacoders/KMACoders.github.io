<template>
  <div>
    <Banner />
    <Skills />

    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child box">
            One
          </div>
          <div class="tile is-child box">
            One
          </div>

        </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            One
          </div>
        </div>
      </div>

    </div>
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
