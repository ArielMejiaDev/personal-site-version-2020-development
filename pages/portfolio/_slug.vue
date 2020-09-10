<template>
<div>
  <Navbar />
    <section class="text-gray-700 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded shadow-xl" alt="hero" :src="`${selectedProject.image}`">
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{{ selectedProject.name }}</h1>
          <p class="mb-8 leading-relaxed text-left" v-html="selectedProject.description"></p>
          <div class="flex justify-center">
            <a v-if="selectedProject.github" :href="selectedProject.github" target="_blank" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mx-2">
              Github
            </a>
            <a v-if="selectedProject.demo" :href="selectedProject.demo" target="_blank" class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg mx-2">
              Demo
            </a>
            <a v-if="selectedProject.url" :href="selectedProject.url" target="_blank" class="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg mx-2">
              View
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
import portfolioPlugin from '~/plugins/portfolio-plugin'
import Navbar from '~/components/Navbar'
import CallToAction from '~/components/CallToAction'
import Footer from '~/components/Footer'

export default {

  data: () => ({
    portfolio: portfolioPlugin,
    selectedProject: {},
  }),
  components: {
    Navbar,
    CallToAction,
    Footer
  },
  mounted() {
    this.selectedProject = this.portfolio.find(item => item.slug === this.$route.params.slug)
  },
  head () {
    return {
      title: `${this.selectedProject.name} | Ariel Mejia Dev`,
      meta: [
        { hid: 'Ariel Mejia Dev Portfolio', name: 'Ariel Mejia Dev Portfolio', content: 'Ariel Mejia Portfolio' }
      ]
    }
  }
}
</script>

<style>

</style>
