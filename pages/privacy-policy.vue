<template>
  <section class="section blog-detail">
    <div class="container is-max-desktop content">
      <article id="post-3" class="post-3 page type-page status-publish hentry">
        <h1 class="entry-title main_title">
          Privacy Policy
        </h1><div class="entry-content">
          <p>Your privacy is important to us and we are committed to protecting your privacy. when you use our services mobile applications, we may collect and use your related information. If the related information was not provided, otherwise you may not register as our user to use some of our services or we may not able to operate effectively and provide you with the best experiences from our services. So we’ve developed a Privacy Policy that covers aspects of how we collect, use, disclose, transfer and store your information. Please take a moment to familiarize yourself with our privacy practices and let us know if you have any questions.</p><h2>PERSONAL INFORMATION</h2><p>personal information is data that can be used to uniquely identify or contact a single person. We DO NOT collect, store or use any personal information while you visit, download or upgrade our website or our products, excepting the personal information that you submit to us when you create a user account, send an error report or participate in online surveys and other activities. Only for the following purposes that we may use personal information submitted by you: help us develop, deliver, and improve our products and services and supply higher quality service; manage online surveys and other activities you’ve participated in. In the following circumstances, we may disclose your personal information according to your wish or regulations by law:<br> (1) Your prior permission;<br> (2) By the applicable law within or outside your country of residence, legal process, litigation requests;<br> (3) By requests from public and governmental authorities;<br> (4) To protect our legal rights and interests.</p><h2>Non-Personal Information</h2><p>Non-personal information is data in a form that does not permit direct association with any specific individual, including but not limited to your device and app history, contacts, SMS, location, camera, photos, media, files, wi-fi connection information, device ID and call information, calendar, CPN model, memory size, your phone IMEI number, phone model, install, uninstall, frequency of use, etc. We may collect and use non-personal information in the following circumstances. To have a better understanding in user’s behavior, solve problems in products and services, improve our products, services, and advertising, we may collect non-personal information such as the data of install and uninstall (including a list of installed apps), frequency of use, country, equipment, and channel. If non-personal information is combined with personal information, we treat the combined information as personal information for the purposes of this Privacy Policy.</p><h2>Information Security</h2><p>Pusher Commerce is very concerned about safeguarding the confidentiality of your information. We will not collect Personal Information, in the meanwhile, we employ administrative, physical and electronic measures designed to protect your Non-Personal Information from unauthorized access and use.</p><h2>Privacy Questions</h2><p>If you have any questions or concerns about our Privacy Policy or data processing, please contact us<br> We may update Privacy Policy from time to time. When we change the policy in a material way, a notice will be posted on our website along with the updated Privacy Policy.</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Banner from '@/components/templates/home/Banner.vue'
import Profile from '@/components/templates/home/Profile.vue'
import Skills from '@/components/templates/home/Skills.vue'
import Timeline from '@/components/templates/home/Timeline.vue'
import Service from '@/components/templates/home/Service.vue'

@Component({
  components: {
    Banner,
    Profile,
    Skills,
    Timeline,
    Service
  }
})
export default class Index extends Vue {

}
</script>
