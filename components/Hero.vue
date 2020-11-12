<template>
<section class="text-gray-700 body-font">
  <div class="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
    <div class="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
      <img class="object-cover object-center rounded" alt="me" src="hero/me.jpg">
    </div>
    <div class="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
      <h1 class="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">Ariel Mejia Dev</h1>
      <p class="mb-8 leading-relaxed">
        Software developer with 5+ years of experience working with backend
        and frontend technologies, such as PHP, Javascript, Laravel, VueJS and other technologies,
        I seek to collaborate in a position that allows me to create software with these technologies.
      </p>
      <div class="flex justify-center">
        <router-link to="/portfolio" class="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Portfolio</router-link>
        <a href="#testimonials" class="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300">Testimonials</a>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style>

</style>
