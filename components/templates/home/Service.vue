<template>
  <section class="service section">
    <div class="container">
      <div class="service__heading">
        <h2 class="title is-2" data-aos="fade-up">
          <span class="has-underline is-level-5">
            Service
          </span>
        </h2>
        <br>
      </div>
      <div class="service__wrapper">
        <div class="columns is-flex-wrap-wrap">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="column is-4-tablet"
          >
            <div class="card" data-aos="fade-up">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="item.imageUrl" :alt="item.title">
                </figure>
              </div>
              <div class="card-content">
                <h4 class="title is-4">
                  {{ item.title }}
                </h4>
                <div class="content">
                  {{ item.description }}
                </div>
              </div>
            </div>
          </div>
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
      title: 'SHOPIFY STORE SETUP',
      description: 'Get your Shopify store up and running with completely custom solutions.',
      imageUrl: require('~/assets/images/home/shopify-setup.png')
    },
    {
      title: 'SHOPIFY DESIGN & DEVELOPMENT',
      description: 'I provide full-cycle services design and development services for Shopify projects.',
      imageUrl: require('~/assets/images/home/shopify-design.png')
    },
    {
      title: 'SHOPIFY THEME DEVELOPMENT',
      description: 'Create a custom, user-friendly and interactive Shopify theme with the help of certified developers.',
      imageUrl: require('~/assets/images/home/shopify-develop.png')
    },
    {
      title: 'WORDPRESS DEVELOPMENT',
      description: 'Websites built on Wordpress account for 70%. I can create your landing page, branded website, or anything else.',
      imageUrl: require('~/assets/images/home/wordpress-develop.png')
    },
    {
      title: 'CREATIVE FRONTEND',
      description: 'Do you have a beautiful website design or template? I can help you translate it into code, ensuring pixel-perfect requirements.',
      imageUrl: require('~/assets/images/home/creative-frontend.png')
    },
    {
      title: 'UX/UI DESIGN',
      description: 'I can help you rebrand your store. Provide creative designs, make your store easy to impress customers.',
      imageUrl: require('~/assets/images/home/ux-ui-designer.png')
    }
  ]
}
</script>
<style lang="scss" scoped>
.card {
  box-shadow: none;
  border: 1px solid #eee;
  transition: all 0.3s linear;

  &:hover {
    border-bottom: 1px solid #ff6303;
  }
}

.card-content {
  .title {
    min-height: 55px;
  }

  .content {
    min-height: 75px;
  }
}
</style>
