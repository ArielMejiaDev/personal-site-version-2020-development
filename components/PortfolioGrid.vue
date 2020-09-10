<template>
<section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto">

    <div class="flex flex-wrap -m-4" v-if="projects">

      <div class="lg:w-1/4 md:w-1/2 p-4 w-full" v-for="(project, index) in projects" :key="index">

        <router-link :to="'/portfolio/'+project.slug" class="block relative h-48 rounded overflow-hidden shadow-xl">
          <img
            alt="project image"
            class="object-cover object-center w-full h-full block"
            :src="require(`../static/portfolio/${project.image}`)">
        </router-link>

        <div class="mt-4">
          <router-link :to="`/portfolio/${project.slug}`" class="text-gray-500 text-xs tracking-widest title-font mb-1">{{ project.category }}</router-link>
          <h2 class="text-gray-900 title-font text-lg font-medium">{{ project.name }}</h2>
          <p class="mt-1">{{ project.stack }}</p>
        </div>

      </div>

    </div>

    <div v-else>
      <h2 class="text-3xl text-gray-500 text-bold w-full text-center">Loading...</h2>
    </div>

  </div>
</section>
</template>

<script>
import portfolioPlugin from '~/plugins/portfolio-plugin'

export default {
  name: 'PortfolioGrid',
  data: () => ({
    projects: portfolioPlugin
  })
}
</script>

<style>

</style>
