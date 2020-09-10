const portfolio = [
  {
    slug: "recaudar",
    category: "Software as a service",
    name: "Recaudar",
    stack: "Laravel, VueJS, VueRouter, Vuex, TailwindCSS",
    image: "recaudar.png",
    github: "https://github.com/ArielMejiaDev/recaudar.com",
    demo: "",
    url: "https://recaudar.com",
    description: `
      Since COVID-19 there are a lot foundations that needs more than ever help,
      Recaudar.com is a Software as a service created with Laravel and VueJS ecosystem,
      that allows any Guatemalan foundation (Central America country) to get donations from anywhere around the world,
      it provides a subdomain site for every foundation with a front page, with different themes to select,
      and a checkout to get donations, it also provides a dashboard to manage foundation content, media
      and donations stats and reports.
    `,
  },
  {
    slug: "larapex-charts",
    category: "Laravel package",
    name: "Larapex Charts",
    stack: "Laravel, Javascript",
    image: "larapex_charts.png",
    github: "https://github.com/ArielMejiaDev/larapex-charts",
    demo: "https://www.youtube.com/watch?v=Qzr0b_92P4g",
    url: "https://arielmejiadev.github.io/LarapexCharts-Documentation/",
    description: `
      <p class="my-4">
        Create dashboards become a highly requested / popular feature,
        between different projects, it became a repetitive and tedious task,
        which took away development time and productivity.
      </p>

      <p class="my-4">
        With more than 1,200 downloads on packagist around the world,
        this package render charts in a much easier and efficient way,
        this Laravel package provides a fluent api
        that under the hood use a factory pattern to create chart objects, so you can share
        the object as json to an API endpoint or pass every chart as variables to blade files.
      </p>

      <p class="my-4">
        It allows to render the chart in your views
        without writting any Javascript, but you can even use it with VueJS components
        adding the "container()" and "script()" methods as attributes.
      </p>
    `,
  },
  {
    slug: "losa-group-app",
    category: "Application Web & Mobile",
    name: "Losa group App",
    stack: "Laravel, Javascript, Flutter",
    image: "losa_group_app.png",
    github: "https://github.com/ArielMejiaDev/Losa-group-app",
    demo: "",
    url: "https://play.google.com/store/apps/details?id=com.buildawow.losa_group",
    description: `
        <p class="my-4">
            The company needs an app to handle bookings, with different
            locations and a calendar to sync all this bookings,
            to solve this problem, I create an app that has the next features:
        </p>

        <ul class="my-4 pl-8">
            <li class="list-disc">list of bookings.</li>
            <li class="list-disc">general info</li>
            <li class="list-disc">calendar of events (from google calendar)</li>
            <li class="list-disc">open destination on google maps</li>
            <li class="list-disc">call booking contacts</li>
        </ul>

        <p class="my-4">
            I use Laravel to create a admin panel to handle all this data about bookinds,
            and handle users of the mobile app and permisions.
        </p>

        <p class="my-4">
            Using advance features like:
        </p>

        <ul class="my-4 pl-8">
            <li class="list-disc">jobs</li>
            <li class="list-disc">listeners</li>
            <li class="list-disc">observers</li>
            <li class="list-disc">notifications</li>
            <li class="list-disc">queues, scheduler</li>
            <li class="list-disc">Google calendar package by Spatie</li>
            <li class="list-disc">Connect to Microsoft Dynamics to add Crud operations by Alexa CRM API</li>
            <li class="list-disc">Bouncer package by David Sylber to add special permission using
            the native Gates and Policies from Laravel</li>
            <li class="list-disc">also a REST API to serve the data to the mobile app</li>
        </ul>

        <p>
            I use Flutter to consume JSON data, using clean and provider patterns,
            creating an app for both platforms Android and IOS with the same code.
        </p>
    `,
  },
  {
    slug: "grupo-alta-service-page",
    category: "Website",
    name: "Grupo Alta services page",
    stack: "VueJS, SASS",
    image: "grupo_alta.png",
    github: "https://github.com/ArielMejiaDev/WEB_SPA_grupo-alta",
    demo: "https://www.youtube.com/watch?v=Gl3nX04dB9U",
    url: "https://grupoalta.net/",
    description:
    `
    <p class="my-4">
      The company has several projects, it requires an index page to show data
      about all their projects, this site is created as a Single Page Application.
    </p>

    <p class="my-4">
        It uses: Vue and Vue router to handle route params and load data dinamically from a
        config file using the commond JS import and export module.
    </p>

    <p class="my-4">
      To handle the metadata I add a Vue meta component from Nuxt to
      add metatags for SEO, and some other community plugins like Vue Sweet-alert2 and
      vainilla js promise to store the contact form messages in a google sheet.
    </p>
    `,
  },
  {
    slug: "empire-music-festival",
    category: "Website",
    name: "Empire Music Festival",
    stack: "VueJS, SASS",
    image: "empire_music_festival.jpg",
    github: "",
    demo: "https://www.youtube.com/watch?v=WneabTv9SrA",
    url: "https://www.empiremusicfestival.com/",
    description: `
      <p class="my-4">
      One of the biggest music festival around central and south america,
      requires a site that reflects the vibes and quality of this event,
      it requires a high pixel perfection and Sass provides an easy way to get this goal.
      </p>

      <p class="my-4">
        This site has many data and user interactions so, it fit
        perfect for VueJS and its directives to get a clean code more
        expressive and fluent, It use Vimeo API to handle this task manipulating it with vainilla Javascript.
      </p>
    `,
  },
  {
    slug: "trending-topic-chatbot",
    category: "Chatbot",
    name: "Trending topic chatbot",
    stack: "Laravel, twitter API, facebook applications hooks",
    image: "trending_topics_chatbot.jpg",
    github: "https://github.com/ArielMejiaDev/Trending-Topic-Chatbot-for-facebook",
    demo: "https://www.youtube.com/watch?v=g_FFEMNiBG0&t=54s",
    url: "",
    description: `
        <p class="my-4">
            Chatbot created for Facebook Messenger to show Twitter trends from any city around the world by consuming Twitter API.
            To handle a conversation it use an endpoint consuming a xml from Facebook, and sending a JSON response from Laravel app,
        </p>

        <p class="my-4">
            This is based on chatbot academy project but I add more features:
        </p>

        <ul class="my-4 pl-4">
            <li class="list-disc">
                I add conversation support (the original version just accept the exact city word alone).
            </li>

            <li class="list-disc">
                I add a full conversation feature, to get all cities even if there are write between any phrase.
            </li>

            <li class="list-disc">
                It catch all conversations strings and search for a city,
                if there is a match, it fetch the city data from twitter API the trends and show it
            </li>

            <li class="list-disc">
                If there are not any city in the phrase it can handle a conversation and even ask
                if you need trends about another city or just say goodbye.
            </li>
        </ul>




    `,
  },
  {
    slug: "laravel-spa-preset",
    category: "package",
    name: "Laravel SPA preset",
    stack: "Laravel, VueJS, VueRouter, Vuex, TailwindCSS",
    image: "laravel_spa_preset.png",
    github: "",
    demo: "",
    url: "",
    description: `
      <p class="my-4">
        A very requested package for the community for short or large scale apps.
      </p>

      <p class="my-4">
        Its still in development, at this moment the package provides
        a variety of Vue and Blade components just to work interchangeable,
        all Vue components provide events to use them on different Vue methods
        to make requests or any other actions, all components and a dashboard theme are styled using tailwindCSS.
      </p>

      <p>
        It also provide a initial setup for Vuex modules to just add more modules, and a router to handle all vue router routes.
        by generating different Laravel fallback routes to mix and match simple Laravel routes and SPA routes as an entry point,
        for one or different SPA apps inside one Laravel project.
      </p>

      <p class="my-4">
        The idea is to add controllers for almost any type of forms and other many requested components,
        such as modals, actions panels, lists, data component, and much more all using
        a CLI commands to create this Vue components in a very particular way.
      </p>
    `,
  },
]

export default portfolio
