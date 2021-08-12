<template>
  <section class="hero is-white">
    <div class="hero-body">
      <div class="container">
        <div class="columns reverse-columns">
          <div
            class="column is-10-mobile is-5-tablet aos-init aos-animate"
            data-aos="fade-down"
          >
            <h1 class="title titled is-1 mb-6">
              Hello,<br>
              My name is <span class="has-text-primary">Rio</span>
            </h1>
            <h2 class=" subtitled subtitle has-text-grey is-4 has-text-weight-normal is-family-sans-serif">
              Web Designer & Developer.<br>
              My expertise is in conceptualizing, designing, building e-commerce websites, especially with <span style="color: #3e8f16;">Shopify</span>.
            </h2>
            <div class="buttons">
              <button class="button is-primary">
                Resume
              </button>
              <button class="button">
                Contact</button>
            </div>
          </div>
          <div
            data-aos="fade-right"
            class="column is-10-mobile is-4-tablet is-4-desktop is-4-widescreen is-4-fullhd aos-animate"
          >
            <figure class="image is-square">
              <img src="~assets/images/home/banner.svg">
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Banner extends Vue {

}
</script>
<style lang="scss" scoped>
.columns {
  justify-content: space-between;
  align-items: center;
}
</style>
