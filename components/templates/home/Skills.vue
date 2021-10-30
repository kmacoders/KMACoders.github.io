<template>
  <section class="section">
    <div class="container">
      <h2
        class="title is-2"
        data-aos="fade-up"
      >
        <span class="has-underline is-level-5">
          Skills
        </span>
      </h2>
      <ul class="skill-wrapper">
        <li
          class="skill-item is-shopify"
          data-aos="fade-up"
        >
          <icon-shopify />
        </li>
        <li
          class="skill-item is-wordpress"
          data-aos="fade-up"
        >
          <icon-wordpress />
        </li>
        <li
          class="skill-item is-php"
          data-aos="fade-up"
        >
          <icon-php />
        </li>
        <li
          class="skill-item is-typescript"
          data-aos="fade-up"
        >
          <icon-typescript />
        </li>
        <li
          class="skill-item is-scss"
          data-aos="fade-up"
        >
          <IconScss />
        </li>
        <li
          class="skill-item is-vue"
          data-aos="fade-up"
        >
          <icon-vue />
        </li>
        <li
          class="skill-item is-nuxt"
          data-aos="fade-up"
        >
          <icon-nuxt />
        </li>
        <li
          class="skill-item is-vite"
          data-aos="fade-up"
        >
          <icon-vite />
        </li>
        <li
          class="skill-item is-webpack"
          data-aos="fade-up"
        >
          <icon-webpack />
        </li>
        <li
          class="skill-item is-figma"
          data-aos="fade-up"
        >
          <icon-figma />
        </li>
      </ul>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import IconWordpress from '@/components/atoms/icon/IconWordpress.vue'
import IconPhp from '@/components/atoms/icon/IconPhp.vue'
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
    IconWordpress,
    IconPhp,
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
@mixin gridPosition($x, $y, $w, $h, $color) {
  grid-column: #{$x} / span #{$w};
  grid-row: #{$y}/ span #{$h};
  background: rgba($color, 0.1);
}

.skill-wrapper {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(5, 3rem);
  gap: 2px;

  @include responsive(MD) {
    grid-template-rows: repeat(20, 3rem);
    gap: 10px;
  }
}

svg {
  @include box(20px, 20px);

  @include responsive(MD) {
    @include box(90px, 90px);
  }
}

.skill-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.skill-item.is-shopify {
  @include gridPosition(1, 1, 6, 3, $shopify-color);

  @include responsive(MD) {
    @include gridPosition(1, 1, 6, 4, $shopify-color);
  }

  svg {
    @include box(80px, 80px);

    @include responsive(MD) {
      @include box(150px, 150px);
    }
  }
}

.skill-item.is-wordpress {
  @include gridPosition(7, 1, 6, 3, $wordpress-color);

  @include responsive(MD) {
    @include gridPosition(7, 1, 6, 4, $wordpress-color);
  }

  svg {
    @include box(80px, 80px);

    @include responsive(MD) {
      @include box(150px, 150px);
    }
  }
}

.skill-item.is-php {
  @include gridPosition(1, 4, 3, 1, $php-color);

  @include responsive(MD) {
    @include gridPosition(1, 5, 3, 3, $php-color);
  }
}

.skill-item.is-typescript {
  @include gridPosition(4, 4, 3, 1, $typescript-color);

  @include responsive(MD) {
    @include gridPosition(4, 5, 3, 3, $typescript-color);
  }
}

.skill-item.is-scss {
  @include gridPosition(7, 4, 3, 1, $sass-color);

  @include responsive(MD) {
    @include gridPosition(7, 5, 3, 3, $sass-color);
  }
}

.skill-item.is-vue {
  @include gridPosition(10, 4, 3, 1, $vue-color);

  @include responsive(MD) {
    @include gridPosition(10, 5, 3, 3, $vue-color);
  }
}

.skill-item.is-nuxt {
  @include gridPosition(1, 5, 3, 1, $nuxt-color);

  @include responsive(MD) {
    @include gridPosition(1, 8, 3, 3, $nuxt-color);
  }
}

.skill-item.is-vite {
  @include gridPosition(4, 5, 3, 1, $vite-color);

  @include responsive(MD) {
    @include gridPosition(4, 8, 3, 3, $vite-color);
  }
}

.skill-item.is-webpack {
  @include gridPosition(7, 5, 3, 1, $webpack-color);

  @include responsive(MD) {
    @include gridPosition(7, 8, 3, 3, $webpack-color);
  }
}

.skill-item.is-figma {
  @include gridPosition(10, 5, 3, 1, $figma-color);

  @include responsive(MD) {
    @include gridPosition(10, 8, 3, 3, $figma-color);
  }
}
</style>
