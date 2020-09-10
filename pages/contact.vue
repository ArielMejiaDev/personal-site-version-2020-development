<template>
<div>
  <Navbar />

  <section class="text-gray-700 body-font relative">
    <div class="px-0 min-h-screen mx-auto flex sm:flex-no-wrap flex-wrap bg-green-500">
      <div class="w-full bg-gray-300 overflow-hidden p-10 flex items-center justify-start relative">
        <iframe
        width="100%"
        height="100%"
        class="absolute inset-0"
        frameborder="0"
        title="map"
        marginheight="0"
        marginwidth="0"
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123536.65268361419!2d-90.56260084354346!3d14.626375694654602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a180655c3345%3A0x4a72c7815b867b25!2sCdad.%20de%20Guatemala!5e0!3m2!1ses!2sgt!4v1592677069759!5m2!1ses!2sg"
        style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>

        <div class="bg-white relative flex flex-wrap py-6 shadow">
          <div class="lg:w-1/2 px-6">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm">ADDRESS</h2>
            <p class="leading-relaxed">
              Central America, Guatemala, Guatemala City.
            </p>
          </div>
          <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm">EMAIL</h2>
            <a class="text-indigo-100 bg-indigo-600 py-2 px-4 rounded mt-2 text-center block w-48 leading-relaxed hover:bg-indigo-700" href="mailto:arielmejiadev@gmail.com">Send me an email</a>
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">Github</h2>
            <a target="_blank" href="https://github.com/ArielMejiaDev" class="leading-relaxed text-indigo-500">Github profile</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</div>

</template>

<script>
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'

export default {
  name: 'Contact',
    components: {
    Navbar,
    Footer
  },
  head () {
    return {
      title: 'Contact Me | Ariel Mejia Dev',
      meta: [
        { hid: 'Ariel Mejia Dev Portfolio', name: 'Ariel Mejia Dev Portfolio', content: 'Ariel Mejia Portfolio' }
      ]
    }
  }
}
</script>

<style>

</style>
