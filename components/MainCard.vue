<template>
  <div class="py-12 mx-auto bg-gray-100 lg:py-16">
    <div class="container mx-auto">
      <div class="flex flex-col overflow-hidden bg-white border rounded-lg shadow-xl lg:flex-row sm:mx-auto lg:max-w-6xl">
        <div class="relative lg:w-1/2">
            <img src="main-card/main-card.jpg" alt="Me with a developer friend." class="object-cover w-full lg:absolute h-80 lg:h-full" />
            <svg class="absolute top-0 right-0 hidden h-full text-white lg:inline-block" viewBox="0 0 20 104"
                fill="currentColor">
                <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104"></polygon>
            </svg>
        </div>
        <div class="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
                <p class="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-purple-600 uppercase bg-purple-200 rounded-full">
                    Cursos
                </p>
            </div>
            <h5 class="mb-3 text-3xl font-extrabold leading-none text-indigo-900 sm:text-4xl">
                Create a Remote.ok clone.
            </h5>
            <p class="py-5 mb-5 text-sm text-gray-800">
              I am working on a InertiaJS course for Latam developers, where you can learn
              <span class="font-bold">Laravel, VueJS, InertiaJS, AlphineJS y TailwindCSS</span>
              to create a modern (SPA), maintanable and escalable.
            </p>
            <div class="flex items-center">
                <button disabled type="submit"
                    class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-purple-500 bg-opacity-50 rounded-lg cursor-not-allowed focus:shadow-outline focus:outline-none">
                    Course
                </button>
                <a target="_blank" href="https://www.youtube.com/watch?v=_5IU2tVKQs0" aria-label=""
                    class="inline-flex items-center text-lg text-purple-900 underline transition-colors duration-200 hover:text-purple-800">
                    Learn more about InertiaJS
                    <svg class="inline-block w-2 ml-2" fill="currentColor" viewBox="0 0 12 12">
                        <path
                            d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z">
                        </path>
                    </svg>
                </a>
            </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'MainCard',
}
</script>
