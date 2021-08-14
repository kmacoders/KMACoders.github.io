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
          <div class="profile-heading">
            <div class="has-text-primary">My info</div>
            <h3 class="title is-3">About Me</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate quaerat autem quas culpa, expedita ducimus animi labore. Modi quasi eligendi, possimus ratione aliquid, reprehenderit sapiente, quisquam eaque similique enim dolores.
            </p>
          </div>
          <div class="profile-info">
            <div class="profile-info__item">
              <div class="profile-info__icon">
                <span>
                  <icon-person />
                </span>
                <span>
                  Name
                </span>
              </div>
              <div class="profile-info__detail">
                Phung Thai Hung
              </div>
            </div>
            <div class="profile-info__item">
              <div class="profile-info__icon">
                <span>
                  <icon-phone />
                </span>
                <span>
                  Phone
                </span>
              </div>
              <div class="profile-info__detail">
                0868389736
              </div>
            </div>
          </div>
          <div class="profile-info__item">
            <div class="profile-info__icon">
              <span>
                <icon-email />
              </span>
              <span>
                Email
              </span>
            </div>
            <div class="profile-info__detail">
              hungphung.act@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import IconEmail from '~/components/atoms/icon/IconEmail.vue'
import IconPerson from '~/components/atoms/icon/IconPerson.vue'
import IconPhone from '~/components/atoms/icon/IconPhone.vue'
import BlobProfile from '~/components/atoms/illustrator/BlobProfile.vue'

@Component({
  components: {
    BlobProfile,
    IconPerson,
    IconPhone,
    IconEmail
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
    top: 7rem;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  img {
    z-index: 1;
  }
}

.profile-heading {
  margin: 5rem 0 1rem;

  h3 {
    margin: 1rem 0;
  }
}

.profile-info__item {
  display: flex;
  align-items: center;

  .profile-info__icon {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      margin-right: 0.4rem;
    }
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
}
</style>
