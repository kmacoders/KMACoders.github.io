// @ts-nocheck

export default async () => {
  const { $content } = require('@nuxt/content')
  const files = await $content('blog', { deep: true })
    .only(['description', 'slug', 'published'])
    .sortBy('published', 'desc')
    .fetch<IContent[]>()

  return files.map(file => (file.slug === '/index' ? '/' : '/blog/' + file.slug))
}
