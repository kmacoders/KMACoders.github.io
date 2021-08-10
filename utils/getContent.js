export default async ($content, params, error, path) => {
  const currentPage = parseInt(params.page)
  /**
   * Số items trên 1 page
   */
  const perPage = 14
  const allArticles = await $content(path, { deep: true })
    .sortBy('published', 'desc')
    .fetch()
  const totalArticles = allArticles.length

  /**
   * Số trang
   * Tổng items / items trên 1 page
   */
  const lastPage = Math.ceil(totalArticles / perPage)
  const lastPageCount = totalArticles % perPage

  /**
   * Tính số items cần bỏ qua khi get
   */
  const skipNumber = () => {
    if (currentPage === 1) {
      return 0
    }
    if (currentPage === lastPage) {
      return totalArticles - lastPageCount
    }
    return (currentPage - 1) * perPage
  }

  /**
   * get items skip
   */
  const paginatedArticles = await $content(path, { deep: true })
    .only(['title', 'description', 'image', 'slug', 'tags', 'published'])
    .sortBy('published', 'desc')
    .limit(perPage)
    .skip(skipNumber())
    .fetch()

  if (currentPage === 0 || !paginatedArticles.length) {
    return error({ statusCode: 404, message: 'No articles found!' })
  }

  return {
    allArticles,
    paginatedArticles
  }
}
