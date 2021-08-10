<template>
  <div>
    <contact-form />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import ContactForm from '@/components/templates/contact-us/ContactForm'

@Component({
  components: {
    ContactForm
  }
})
export default class ContactUs extends Vue {
}
</script>
