<template>
<nav class="flex items-center justify-between flex-wrap bg-indigo-600 p-6">

  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <router-link to="/" class="font-semibold text-xl tracking-tight">Ariel Mejia Dev</router-link>
  </div>

  <div class="block lg:hidden">
    <button @click="isOpen = ! isOpen" class="flex items-center px-3 py-2 border rounded text-indigo-100 border-indigo-100 hover:text-white hover:border-white focus:outline-none">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>

  <div class="w-full hidden lg:block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <nuxt-link :to="{ name: 'portfolio' }" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-100 hover:text-white mr-4">
        Portfolio
      </nuxt-link>
      <nuxt-link :to="{ name: 'about' }" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-100 hover:text-white mr-4">
        About Me
      </nuxt-link>
      <a href="https://dev.to/arielmejiadev" target="_blank" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-100 hover:text-white mr-4">
        Blog
      </a>
      <nuxt-link :to="{ name: 'contact' }" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-100 hover:text-white">
        Contact Me
      </nuxt-link>
    </div>
    <div>
      <a download href="/Software_Developer_Ariel_Mejia_Resume.pdf" class="inline-block text-sm px-4 py-2 leading-none border rounded text-indigo-100 border-indigo-100 hover:border-transparent hover:text-indigo-600 hover:bg-white mt-4 lg:mt-0">Download Resume</a>
    </div>
  </div>

<transition name="expand">
  <div v-if="isOpen" class="w-full block lg:hidden flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <nuxt-link :to="{ name: 'portfolio' }" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-100 hover:text-white mr-4">
        Portfolio
      </nuxt-link>
      <nuxt-link :to="{ name: 'about' }" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-100 hover:text-white mr-4">
        About Me
      </nuxt-link>
      <a href="https://dev.to/arielmejiadev" target="_blank" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-100 hover:text-white mr-4">
        Blog
      </a>
      <nuxt-link :to="{ name: 'contact' }" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-100 hover:text-white">
        Contact Me
      </nuxt-link>
    </div>
    <div>
      <a download href="/Software_Developer_Ariel_Mejia_Resume.pdf" class="inline-block text-sm px-4 py-2 leading-none border rounded text-indigo-100 border-indigo-100 hover:border-transparent hover:text-indigo-600 hover:bg-white mt-4 lg:mt-0">Download Resume</a>
    </div>
  </div>
</transition>

</nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    isOpen: false,
  }),
}
</script>

<style>

.expand-enter-active,
.expand-leave-active {
  transition: 1s ease-in-out;
  height: 200px;
  overflow: hidden;
}
.expand-enter,
.expand-leave-to {
  height: 0;
  /* opacity: 0; */
}
</style>
