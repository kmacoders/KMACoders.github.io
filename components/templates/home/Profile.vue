<template>
  <section class="section">
    <div class="container">
      <h2
        class="title is-2"
        data-aos="fade-up"
      >
        <span class="has-underline is-level-5">Profile</span>
      </h2>
      <div class="columns">
        <div
          class="column is-12-mobile is-6-tablet"
          data-aos="fade-up"
        >
          <div class="profile-avatar">
            <BlobProfile />
            <img src="~assets/images/home/phungthaihung.png">
          </div>
        </div>
        <div
          class="column is-12-mobile is-6-tablet"
          data-aos="fade-up"
        >
          <div class="profile-heading">
            <div class="has-text-primary">
              My info
            </div>
            <h3 class="title is-3">
              About Me
            </h3>
            <p>
              Are you looking for a Shopify expert and Shopify developer for some custom coding, fix Shopify custom code, and Shopify customization? Then don't worry because you are in the right place.<br>
              I have great experience with Shopify custom coding, and I have worked on 30+ Shopify stores and have great experience in Shopify, fix Shopify bugs, theme customization, Shopify liquid coding, Shopify theme design, Shopify plugins integration.
            </p>
          </div>
          <div class="profile-info">
            <div class="profile-info__item">
              <div class="profile-info__icon">
                <span>
                  <icon-person />
                </span>
                <span>
                  Fullname :
                </span>
              </div>
              <div class="profile-info__detail">
                Rio Phung
              </div>
            </div>
            <div class="profile-info__item">
              <div class="profile-info__icon">
                <span>
                  <icon-phone />
                </span>
                <span>
                  Phone :
                </span>
              </div>
              <div class="profile-info__detail">
                0868389736
              </div>
            </div>
            <div class="profile-info__item">
              <div class="profile-info__icon">
                <span>
                  <icon-email />
                </span>
                <span>
                  Email :
                </span>
              </div>
              <div class="profile-info__detail">
                contact.riophung@gmail.com
              </div>
            </div>
          </div>
          <div class="profile-signature">
            <img src="~assets/images/home/signature.png">
            <div>
              Rio Phung
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import IconBook from '~/components/atoms/icon/IconBook.vue'
import IconCamera from '~/components/atoms/icon/IconCamera.vue'
import IconEmail from '~/components/atoms/icon/IconEmail.vue'
import IconPerson from '~/components/atoms/icon/IconPerson.vue'
import IconPhone from '~/components/atoms/icon/IconPhone.vue'
import BlobProfile from '~/components/atoms/illustrator/BlobProfile.vue'

@Component({
  components: {
    BlobProfile,
    IconPerson,
    IconPhone,
    IconEmail,
    IconBook,
    IconCamera
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
  margin: 0.5rem 0;

  .profile-info__icon {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      margin-right: 0.4rem;
    }

    span:last-child {
      font-weight: 600;
    }
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
}

.profile-signature {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 14rem;
    height: auto;
  }

  div {
    margin-top: 1rem;
  }
}
</style>
