<template>
  <div class="error-page-container">
    <h1 class="">404</h1>
    <div v-if="error.statusCode === 404">
      Oop! Nothing was found
    </div>
    <div v-else>An error occurred</div>
    <NuxtLink
      to="/"
      class="btn"
    >
      Go Back
    </NuxtLink>
  </div>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  layout: 'basic'
})
export default class ErrorLayout extends Vue {
  @Prop() error;
}
</script>

<style>
  .error-page-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 6.5rem;
  }

</style>
