<template>
  <section class="timeline section">
    <div class="timeline__heading container">
      <h2 class="title is-2" data-aos="fade-up">
        <span class="has-underline is-level-5">
          How i work
        </span>
      </h2>
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="'timeline__items columns ' + ( index % 2 === 1 ? 'is-flex-direction-row-reverse': '')"
        data-aos="fade-up"
      >
        <div class="timeline_item column is-half-desktop is-flex is-flex-direction-column is-justify-content-center">
          <h3 class="timeline__title title is-3">
            {{ item.title }}
          </h3>
          <div class="timeline__description">
            {{ item.description }}
          </div>
        </div>
        <div class="timline__image column is-half-desktop">
          <img :src="item.imageUrl">
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Timeline extends Vue {
  items = [
    {
      title: 'QA',
      description: 'Ever wanted a Shopify store of your own? Or do you have problems customers keep complaining about the Shopify website? Don\'t worry the Shopify expert is here to fix all.',
      imageUrl: require('~/assets/images/home/timeline1.png')
    },
    {
      title: 'Build',
      description: 'No matter the complexity, i build and integrate solutions to support your business’s growth. Work progress will be reported daily.',
      imageUrl: require('~/assets/images/home/timeline2.png')
    },
    {
      title: 'Grow',
      description: 'Every project needs a clear roadmap. We work to fully understand your business and customers in order to deliver the best strategy for short- and long-term growth.',
      imageUrl: require('~/assets/images/home/timeline4.png')
    }
  ]
}
</script>
<style lang="scss" scoped>
.timeline__description {
  width: 100%;

  @include responsive(MD) {
    width: 70%;

    .timeline__items:not(.is-flex-direction-row-reverse) & {
      text-align: right;
      margin-left: auto;
    }
  }

  @include responsive(XL) {
    width: 60%;
  }
}

.timeline__title {
  @include responsive(MD) {
    .timeline__items:not(.is-flex-direction-row-reverse) & {
      text-align: right;
    }
  }
}
</style>
