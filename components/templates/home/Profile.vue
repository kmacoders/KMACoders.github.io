<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2">Profile</h2>
      <div class="columns">
        <div class="column is-12-mobile is-6-tablet">
          <div class="profile-avatar">
            <BlobProfile />
            <img src="~assets/images/home/phungthaihung.png">
          </div>
        </div>
        <div class="column is-12-mobile is-6-tablet">
          <p class="has-text-primary">My info</p>
          <h3 class="title is-3">About Me</h3>
          <div class="profile-info">
            <div class="profile-info__item">
              <div class="profile-info__icon">
                Name
              </div>
              <div class="profile-info__detail">
                Phung Thai Hung
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import BlobProfile from '~/components/atoms/illustrator/BlobProfile.vue'

@Component({
  components: {
    BlobProfile
  }
})
export default class Profile extends Vue {
}
</script>
<style lang="scss" scoped>
.profile-avatar {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  svg {
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  img {
    z-index: 1;
  }
}
</style>
