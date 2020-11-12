<template>
  <div class="relative flex flex-col items-center justify-center min-h-screen bg-white bg-cover min-w-screen">
    <div class="flex flex-col flex-col-reverse items-center justify-center p-10 mx-auto lg:flex-row lg:max-w-6xl lg:p-0">
        <div class="relative w-full pr-10 rounded-lg cursor-pointer md:w-2/3 lg:w-1/2 group">
            <div class="relative rounded-md">
                <img src="about/me_illustration.svg" class="z-10 object-cover w-full h-full">
            </div>
        </div>
        <div class="container relative z-20 flex flex-col w-full px-5 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:px-0 md:px-10 sm:items-center lg:items-start lg:mb-0">
            <h1
                class="relative z-20 font-sans text-4xl font-extrabold leading-none text-black sm:text-5xl xl:text-6xl sm:text-center lg:text-left">
                <span class="relative">
                    <span
                        class="absolute bottom-0 left-0 inline-block w-full h-4 mb-1 -ml-1 transform -skew-x-3 bg-indigo-200"></span>
                    <span class="relative">More</span>
                </span>
                <span class="relative block text-indigo-500">about me.</span>
            </h1>
            <ul class="relative z-20 block mt-6 text-sm text-gray-700 sm:text-center lg:text-left">
              <li class="my-1 list-disc">
                I belive in Opensource, I am the creator an mantainer of
                  <a target="_blank" class="font-semibold text-indigo-700 underline hover:text-indigo-800" href="https://arielmejiadev.github.io/LarapexCharts-Documentation/installation.html">Larapex Charts</a>
                with thousands of downloads.
              </li>
              <li class="my-1 list-disc">
                I am founder of
                <a target="_blank" class="font-semibold text-indigo-700 underline hover:text-indigo-800" href="https://www.facebook.com/laravelgt">
                    Laravel Guatemala
                </a>
                 &
                 <a target="_blank" class="font-semibold text-indigo-700 underline hover:text-indigo-800" href="https://www.meetup.com/es/Flutter-Guatemala/">
                    Flutter Guatemala
                </a>
                (development communities).
              </li>
              <li class="my-1 list-disc">
                I also contribute to devdojo tails project,
                  <a target="_blank" class="font-semibold text-indigo-700 underline hover:text-indigo-800" href="https://devdojo.com/tails">
                    an opensource Tailwindcss library.
                  </a>
              </li>
              <li class="my-1 list-disc">
                If you want to know more about me,
                <a target="_blank" class="font-semibold text-indigo-700 underline hover:text-indigo-800" href="https://www.youtube.com/watch?v=BFFTHJWqx9s">here is an old podcast interview in spanish.</a>
              </li>
            </ul>

            <div class="relative flex items-center mt-10">
                <a href="#certificates" class="flex items-center self-start justify-center px-5 py-3 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-indigo-500 border border-transparent rounded-lg shadow hover:bg-indigo-600 focus:outline-none focus:border-indigo-600 focus:shadow-outline-yellow md:py-4 md:text-lg xl:text-xl md:px-10">
                  View Certificates
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoreAboutMeHero',
}
</script>
