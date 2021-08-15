<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__intro">
        <div class="footer__slogan">
          <h5 class="title is-5">
            Living, learning, & leveling up <br> one day at a time.
          </h5>
        </div>
      </div>
      <div class="footer__social has-text-centered">
        <ul>
          <li>
            <a href="https://www.facebook.com/kmacoders">
              <IconFacebook />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/kmacoders">
              <IconTwitter />
            </a>
          </li>
          <li>
            <a href="https://github.com/kmacoders">
              <IconGithub />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import IconFacebook from '@/components/atoms/icon/IconFacebook.vue'
import IconTwitter from '@/components/atoms/icon/IconTwitter.vue'
import IconGithub from '@/components/atoms/icon/IconGithub.vue'

@Component({
  components: {
    IconFacebook,
    IconTwitter,
    IconGithub
  }
})
export default class TheFooter extends Vue {
}
</script>
<style lang="scss" scoped>
.footer {
  background: rgba($rio-primary-color, 0.05);
  padding: 3rem 0;
}

.footer__intro {
  margin-bottom: 1.5rem;

  .footer__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;

    img {
      @include box(3rem, 3rem);
    }
  }

  .footer__slogan {
    color: $rio-primary-color;
    text-align: center;
  }
}

.footer__social {
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    @include box(3rem, 3rem);

    list-style-type: none;
    margin: 0 0.4rem;
    border: 1px solid $rio-primary-color;
    border-radius: 50%;
    transition: all 0.3s;

    a {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    svg {
      transition: all 0.3s;
      fill: $rio-primary-color;

      @include box(1.5rem, 1.5rem);
    }
  }

  li:hover {
    background-color: $rio-primary-color;

    svg {
      fill: #fff;
    }
  }
}
</style>
