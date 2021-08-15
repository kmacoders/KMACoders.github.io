import Vue from 'vue'

Vue.directive('aos', {
  inserted: (el: HTMLElement, binding: any) => {
    el.setAttribute('data-aos', binding.value)
  }
})
