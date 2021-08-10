<template>
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="columns is-vcentered">
        <div class="column is-5">
          <figure class="image is-5by3">
            <img
              class="main-image"
              src="~assets/images/logo.png"
              alt="Description"
            >
          </figure>
        </div>
        <div class="column is-6 is-offset-1">
          <h1 class="title is-2">
            Superhero Scaffolding
          </h1>
          <h2 class="subtitle is-4">
            Let this cover page describe a product or service.
          </h2>
          <br>
          <p class="has-text-centered">
            <a class="button is-medium is-info is-outlined">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Banner extends Vue {

}
</script>
<style scoped>
.main-image {
  min-width: 300px;
}
</style>
