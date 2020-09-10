<template>
<section class="text-gray-700 body-font bg-gray-800">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <h1 class="flex-grow sm:pr-16 text-4xl font-medium title-font text-gray-100">Lets work together.</h1>
      <router-link :to="{ name: 'contact' }" class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Contact Me</router-link>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'CallToAction'
}
</script>

<style>

</style>
