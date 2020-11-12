<template>
<div>
  <Navbar />

  <MoreAboutMeHero />

  <section id="certificates" class="min-h-screen text-gray-700 bg-gray-100 body-font">
    <div class="container px-5 py-24 mx-auto" v-if="certificates">
      <div class="flex flex-col w-full mb-12 text-center">
        <h1 class="mb-2 text-3xl font-bold tracking-wide text-gray-700 uppercase md:text-5xl title-font">Certifications.</h1>
      </div>
      <div class="flex flex-wrap -m-2">

        <div class="w-full p-2 lg:w-1/3 md:w-1/2" v-for="(certificate, index) in certificates" :key="index">
          <a class="flex items-center h-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md" :href="certificate.url" target="_blank">
            <img alt="team" class="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" :src="`certificates/${certificate.badge}`">
            <div class="flex-grow">
              <h2 class="font-medium text-gray-900 title-font">{{ certificate.category }}</h2>
              <p class="text-gray-500">{{ certificate.info }}</p>
            </div>
          </a>
        </div>

      </div>
    </div>
    <CallToAction />
    <Footer />
  </section>

</div>
</template>

<script>
import Navbar from '~/components/Navbar'
import MoreAboutMeHero from '~/components/MoreAboutMeHero'
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
    MoreAboutMeHero,
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
