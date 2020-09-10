<template>
<div>
  <Navbar />

  <section class="text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto" v-if="certificates">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="text-3xl md:text-5xl text-gray-700 font-bold tracking-wide uppercase title-font mb-2">Certifications.</h1>
      </div>
      <div class="flex flex-wrap -m-2">

        <div class="p-2 lg:w-1/3 md:w-1/2 w-full" v-for="(certificate, index) in certificates" :key="index">
          <a class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-gray-200 shadow-sm" :href="certificate.url" target="_blank">
            <img
              alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              :src="`certificates/${certificate.badge}`">
            <div class="flex-grow">
              <h2 class="text-gray-900 title-font font-medium">{{ certificate.category }}</h2>
              <p class="text-gray-500">{{ certificate.info }}</p>
            </div>
          </a>
        </div>

      </div>
    </div>
  </section>

  <CallToAction />
  <Footer />
</div>
</template>

<script>
import Navbar from '~/components/Navbar'
import CallToAction from '~/components/CallToAction'
import Footer from '~/components/Footer'
import certificatesPlugin from '~/plugins/certificates-plugin'

export default {
  name: 'About',
  data: () => ({
    certificates: certificatesPlugin
  }),
  components: {
    Navbar,
    CallToAction,
    Footer
  },
  head () {
    return {
      title: 'About Me | Ariel Mejia Dev',
      meta: [
        { hid: 'Ariel Mejia Dev Portfolio', name: 'Ariel Mejia Dev Portfolio', content: 'Ariel Mejia Portfolio' }
      ]
    }
  }
}
</script>

<style>

</style>
