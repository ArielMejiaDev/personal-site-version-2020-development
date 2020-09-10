<template>
  <div>
    <Navbar />
    <Hero />
    <CallToAction />
    <Testimonials />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Hero from '~/components/Hero'
import Testimonials from '~/components/Testimonials'
import CallToAction from '~/components/CallToAction'
import Footer from '~/components/Footer'

export default {
  name: 'Landing',
  components: {
    Navbar,
    Hero,
    Testimonials,
    CallToAction,
    Footer
  },
  head () {
    return {
      title: 'Ariel Mejia Dev',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'Ariel Mejia Dev landing page', name: 'Ariel Mejia Dev Laravel - VueJS Developer', content: 'Ariel Mejia Dev personal site.' }
      ]
    }
  }
}
</script>

<style>

</style>
