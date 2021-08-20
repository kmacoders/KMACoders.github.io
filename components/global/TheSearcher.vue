<template>
  <section class="r-search">
    <input
      class="input is-rounded"
      type="search"
      placeholder="Search Articles"
      @click="isComponentModalActive = true"
    >
    <b-modal
      v-model="isComponentModalActive"
      full-screen
      has-modal-card
      :can-cancel="false"
      scroll="keep"
    >
      <section class="section">
        <div class="container is-max-desktop">
          <input
            v-model="searchQuery"
            class="r-search__searcher input is-rounded is-medium"
            type="search"
            autocomplete="off"
            placeholder="Search Articles"
          >
          <section
            v-if="articles.length"
            class="r-search__blog"
          >
            <ListBlog :list-blogs="articles" />
          </section>
          <section
            v-else
            class="r-search__illustrations"
          >
            <img
              src="~assets/images/home/search.svg"
              alt="Search"
            >
          </section>
        </div>
      </section>
    </b-modal>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator'
import { IContentDocument } from '@nuxt/content/types/content'
import ListBlog from '@/components/organisms/ListBlog.vue'

@Component({
  components: {
    ListBlog
  }
})
export default class TheSearcher extends Vue {
  searchQuery: string = ''

  articles: IContentDocument[] = []

  isComponentModalActive = false

  @Watch('searchQuery')
  async onSearchQuery (searchQuery: string): Promise<void> {
    if (!searchQuery) {
      this.articles = []
      return
    }

    this.articles = await this.$content('blog', { deep: true })
      .limit(6)
      .search(searchQuery)
      .fetch<IContentDocument[]>()
  }

  @Watch('$route')
  onChangeRoute (): void {
    if (this.isComponentModalActive) {
      this.isComponentModalActive = !this.isComponentModalActive
      this.searchQuery = ''
    }
  }

  toggleModal ():void {
    this.isComponentModalActive = !this.isComponentModalActive
    this.searchQuery = ''
  }
}
</script>
<style lang="scss">
.r-search {
  .modal {
    background-color: #fff;
    overflow: scroll;
  }

  .modal-background {
    background-color: #fff;
  }

  .r-search__searcher {
    margin-top: 3rem;
    margin-bottom: 5rem;
  }

  img {
    max-height: 999rem;
  }

  .r-search__illustrations {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      max-width: 40rem;
    }
  }
}
</style>
