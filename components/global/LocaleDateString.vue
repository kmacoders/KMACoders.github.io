<template>
  <span>
    {{ dateString }}
  </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class LocaleDateString extends Vue {
  @Prop({ required: true, type: String })
  date!: string

  get dateString (): string {
    const dateString = new Date(this.date)
      .toLocaleDateString(
        'en',
        { year: 'numeric', month: 'long', day: 'numeric' })

    return dateString
  }
}
</script>
