<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <ul>
          <li><IconFacebook /></li>
          <li><IconTwitter /></li>
          <li><IconGithub /></li>
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
ul {
  li {
    list-style-type: none;

    svg {
      @include box(40px, 40px);
    }
  }
}
</style>
