<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2">Profile</h2>
      <div class="columns">
        <div class="column is-12-mobile is-6-tablet">
          <div class="profile-avatar">
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
              <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color: rgb(255, 99, 3);"></stop>
              <stop offset="100%" style="stop-color: rgb(255, 195, 113);"></stop>
              </linearGradient>
              </defs>
              <path id="blob" d="M471,303.5Q455,357,419.5,400.5Q384,444,330,455Q276,466,220.5,469.5Q165,473,129,431Q93,389,66.5,345.5Q40,302,35.5,249Q31,196,60,151.5Q89,107,127.5,67.5Q166,28,220.5,36Q275,44,320,63.5Q365,83,405.5,115Q446,147,466.5,198.5Q487,250,471,303.5Z" fill="url(#gradient)"></path>
            </svg>
            <img src="~assets/images/home/phungthaihung.png">
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
