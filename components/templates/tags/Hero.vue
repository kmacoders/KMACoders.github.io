<template>
  <section class="hero is-info">
    <div class="hero-body">
      <h1 class="title is-3 has-text-centered">
        {{ title }}
      </h1>
      <p class="subtitle has-text-centered">
        {{ subTitle }}
      </p>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Hero extends Vue {
  @Prop({ type: String })
  title!: string

  @Prop({ type: String })
  subTitle!: string;
}
</script>
