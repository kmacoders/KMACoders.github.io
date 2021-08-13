<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2">Skills</h2>
      <ul class="skill-wrapper">
        <li class="skill-item is-scss">
          <IconScss />
        </li>
        <li class="skill-item is-shopify">
          <icon-shopify />
        </li>
        <li class="skill-item is-typescript">
          <icon-typescript />
        </li>
        <li class="skill-item is-vue">
          <icon-vue />
        </li>
        <li class="skill-item is-nuxt">
          <icon-nuxt />
        </li>
        <li class="skill-item is-vite">
          <icon-vite />
        </li>
        <li class="skill-item is-webpack">
          <icon-webpack />
        </li>
        <li class="skill-item is-figma">
          <icon-figma />
        </li>
      </ul>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import IconScss from '@/components/atoms/icon/IconScss.vue'
import IconShopify from '~/components/atoms/icon/IconShopify.vue'
import IconTypescript from '~/components/atoms/icon/IconTypescript.vue'
import IconVue from '~/components/atoms/icon/IconVue.vue'
import IconNuxt from '~/components/atoms/icon/IconNuxt.vue'
import IconVite from '~/components/atoms/icon/IconVite.vue'
import IconWebpack from '~/components/atoms/icon/IconWebpack.vue'
import IconFigma from '~/components/atoms/icon/IconFigma.vue'

@Component({
  components: {
    IconScss,
    IconShopify,
    IconTypescript,
    IconVue,
    IconNuxt,
    IconVite,
    IconWebpack,
    IconFigma
  }
})
export default class Skills extends Vue {

}
</script>
<style lang="scss" scoped>
$sass-color: #c69;
$shopify-color: #64943e;
$typescript-color: #007acc;
$vue-color: #41b883;
$nuxt-color: #3b8070;
$vite-color: #b455cf;
$webpack-color: #8dd6f9;
$figma-color: #aaa;

@mixin gridPosition($x, $y, $w, $h, $color) {
  grid-column: #{$x} / span #{$w};
  grid-row: #{$y}/ span #{$h};
  background: rgba($color, 0.1);
}

.skill-wrapper {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(16, 2rem);

  @include responsive(MD) {
    grid-template-rows: repeat(12, 3rem);
  }

  gap: 15px;
}

svg {
  @include box(100px, 100px);

  @include responsive(MD) {
    @include box(150px, 150px);
  }
}

.skill-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.skill-item.is-scss {
  @include gridPosition(1, 1, 6, 4, $sass-color);

  @include responsive(MD) {
    @include gridPosition(1, 1, 4, 4, $sass-color);
  }
}

.skill-item.is-shopify {
  @include gridPosition(7, 1, 6, 4, $shopify-color);

  @include responsive(MD) {
    @include gridPosition(5, 1, 4, 4, $shopify-color);
  }
}

.skill-item.is-typescript {
  @include gridPosition(1, 5, 6, 4, $typescript-color);

  @include responsive(MD) {
    @include gridPosition(9, 1, 4, 4, $typescript-color);
  }
}

.skill-item.is-vue {
  @include gridPosition(7, 5, 6, 4, $vue-color);

  @include responsive(MD) {
    @include gridPosition(1, 5, 6, 4, $vue-color);
  }
}

.skill-item.is-nuxt {
  @include gridPosition(1, 9, 6, 4, $nuxt-color);

  @include responsive(MD) {
    @include gridPosition(7, 5, 6, 4, $nuxt-color);
  }
}

.skill-item.is-vite {
  @include gridPosition(7, 9, 6, 4, $vite-color);

  @include responsive(MD) {
    @include gridPosition(1, 9, 4, 4, $vite-color);
  }
}

.skill-item.is-webpack {
  @include gridPosition(1, 13, 6, 4, $webpack-color);

  @include responsive(MD) {
    @include gridPosition(5, 9, 4, 4, $webpack-color);
  }
}

.skill-item.is-figma {
  @include gridPosition(7, 13, 6, 4, $figma-color);

  @include responsive(MD) {
    @include gridPosition(9, 9, 5, 4, $figma-color);
  }
}
</style>
