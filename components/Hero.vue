<template>
<section class="text-gray-700 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="me" src="hero/me.jpeg">
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Ariel Mejia Dev</h1>
      <p class="mb-8 leading-relaxed">
        I am a software developer with 5 years of experience working with backend
        and frontend technologies such as PHP, Javascript, Laravel, VueJS and other technologies,
        I seek to collaborate in a position that allows me to create software with these technologies.
      </p>
      <div class="flex justify-center">
        <router-link to="/portfolio" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Portfolio</router-link>
        <a href="#testimonials" class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Testimonials</a>
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
