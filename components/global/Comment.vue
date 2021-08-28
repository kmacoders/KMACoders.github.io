<template>
  <div>
    <br>
    <div id="blog-comment" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Comment extends Vue {
  mounted (): void {
    const scriptTag = document.createElement('script') as HTMLScriptElement
    scriptTag.async = true
    scriptTag.src = 'https://utteranc.es/client.js'
    scriptTag.setAttribute('repo', 'kmacoders/kmacoders.github.io')
    scriptTag.setAttribute('issue-term', 'pathname')
    scriptTag.setAttribute('label', 'Comment')
    scriptTag.setAttribute('theme', 'github-light')
    scriptTag.setAttribute('crossorigin', 'anonymous')

    const blogCommentEl = document.getElementById('blog-comment')

    if (blogCommentEl) {
      blogCommentEl.appendChild(scriptTag)
    }
  }
}
</script>
