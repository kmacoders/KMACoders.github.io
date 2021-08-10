<template>
  <section class="section">
    <div class="container">
      <ul class="columns">
        <li v-for="tag in tags" :key="tag" class="column">
          <nuxt-link
            :to="{ name: 'tags-tag', params: { tag: tag.toLowerCase() } }"
            class="text-4xl hover:underline"
          >
            {{ tag }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class ListTags extends Vue {
  @Prop({ type: Array })
  tags!: string[]
}
</script>
