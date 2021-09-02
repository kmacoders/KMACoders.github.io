<template>
  <div>{{ readingTime }} min read</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class ReadingTime extends Vue {
  @Prop({ required: true, type: String })
  content!: string

  get readingTime (): number {
    let minutes = 0
    const contentAsString = JSON.stringify(this.content)
    const words = contentAsString.split(' ').length
    const wordsPerMinute = 300

    minutes = Math.ceil(words / wordsPerMinute)

    return minutes
  }
}
</script>
