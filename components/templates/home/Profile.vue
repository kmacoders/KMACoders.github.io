<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-12-mobile is-6-tablet">
          <div class="profile-avatar">
            <img src="~assets/images/home/phungthaihung.jpeg">
          </div>
        </div>
        <div class="column is-12-mobile is-6-tablet">
          Phung Thai Hung
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {
  }
})
export default class Profile extends Vue {
}
</script>
<style lang="scss" scoped>
.profile-avatar {
  border: 2px solid $rio-primary-color;
  padding: 50px;
}
</style>
