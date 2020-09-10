<template>
  <div>
    <Navbar />
    <PortfolioGrid />
    <CallToAction />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import PortfolioGrid from '~/components/PortfolioGrid'
import CallToAction from '~/components/CallToAction'
import Footer from '~/components/Footer'

export default {
  name: 'Portfolio',
  components: {
    Navbar,
    PortfolioGrid,
    CallToAction,
    Footer
  },
  head () {
    return {
      title: 'Portfolio | Ariel Mejia Dev',
      meta: [
        { hid: 'Ariel Mejia Dev Portfolio', name: 'Ariel Mejia Dev Portfolio', content: 'Ariel Mejia Portfolio' }
      ]
    }
  }
}
</script>

<style>

</style>
