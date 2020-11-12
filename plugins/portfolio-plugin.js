const portfolio = [
  {
    slug: "recaudar",
    category: "Software as a service",
    name: "Recaudar",
    stack: "Laravel, VueJS, TailwindCSS, InertiaJS",
    image: "recaudar.png",
    github: "https://github.com/ArielMejiaDev/recaudar.com",
    demo: "",
    url: "https://recaudar.com",
    description: `
      <p class="my-4 text-gray-900 text-sm">
        A Software as a service created with Laravel and VueJS ecosystem,
        that allows any Guatemalan foundation (Central America country) to get donations from anywhere around the world,
        it provides a subdomain site for every foundation with a front page, with
        a checkout to get donations, it also provides a dashboard to manage foundation profile page themes, content, media,
        donations stats and reports.
      </p>
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
      <p class="my-4 text-gray-900 text-sm">
        You need charts for your app?, you can trust in this package, it has <strong>Thousands of downloads</strong>
      </p>

      <p class="my-4 text-gray-900 text-sm">
        Installable with composer, it adds a simple API to write a chart object with PHP,
        you can pass the chart as a variable to a blade file,
        or expose the object as JSON to a REST API.
      </p>

      <p class="my-4 text-gray-900 text-sm">
        The primarly idea is to write charts without writing any type of Javascript,
        the package is popular in 'TALL' stack, TailwindCSS, AlphineJS, Laravel & Livewire.
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
        <p class="my-4 text-gray-900 text-sm">
            The company needs an app to handle bookings, with different
            locations and a calendar to sync all this bookings,
            to solve this problem, I create an app that has the next features:
        </p>

        <ul class="my-4 pl-8 text-gray-900 text-sm">
            <li class="list-disc">list of bookings.</li>
            <li class="list-disc">general info</li>
            <li class="list-disc">calendar of events (from google calendar)</li>
            <li class="list-disc">open destination on google maps</li>
            <li class="list-disc">call booking contacts</li>
        </ul>

        <p class="my-4 text-gray-900 text-sm">
            I use Laravel to create a admin panel to handle all this data about bookings,
            and handle users of the mobile app and permisions.
        </p>

        <p class="my-4 text-gray-900 text-sm">
            Using advance features like:
        </p>

        <ul class="my-4 pl-8 text-gray-900 text-sm">
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

        <p class="text-gray-900 text-sm">
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
    <p class="my-4 text-gray-900 text-sm">
      The company has several projects, it requires an index page to show data
      about all their projects, this site is created as a Single Page Application.
    </p>

    <p class="my-4 text-gray-900 text-sm">
        It uses: Vue and Vue router to handle route params and load data dinamically from a
        config file using the commond JS import and export module.
    </p>

    <p class="my-4 text-gray-900 text-sm">
      To handle the metadata I add a Vue meta component from Nuxt to
      add metatags for SEO, and some other community plugins like Vue Sweet-alert2 and
      a vainilla js promise (fetch) to store the contact form messages in a google sheet.
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
      <p class="my-4 text-gray-900 text-sm">
        One of the biggest music festival around central and south america,
        requires a site that reflects the vibes and quality of this event,
        it requires a high pixel perfection and Sass provides an easy way to get this goal.
      </p>

      <p class="my-4 text-gray-900 text-sm">
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
        <p class="my-4 text-gray-900 text-sm">
            Chatbot created for Facebook Messenger to show Twitter trends from any city around the world by consuming Twitter API.
            To handle a conversation it use an endpoint consuming a xml from Facebook, and sending a JSON response from Laravel app,
        </p>

        <p class="my-4 text-gray-900 text-sm">
            This is based on chatbot academy project but I add more features:
        </p>

        <ul class="my-4 pl-4 text-gray-900 text-sm">
            <li class="list-disc">
                I add conversation support (the original version just accept the exact city word alone).
            </li>

            <li class="list-disc text-gray-900 text-sm">
                I add a full conversation feature, to get all cities even if there are write between any phrase.
            </li>

            <li class="list-disc text-gray-900 text-sm">
                It catch all conversations strings and search for a city,
                if there is a match, it fetch the city data from twitter API the trends and show it
            </li>

            <li class="list-disc text-gray-900 text-sm">
                If there are not any city in the phrase it can handle a conversation and even ask
                if you need trends about another city or just say goodbye.
            </li>
        </ul>
    `,
  },
  {
    slug: "pagalo-gt-laravel-package",
    category: "package",
    name: "PagaloGT Laravel package",
    stack: "Laravel, PagaloGT API",
    image: "pagalogt_laravel_package.png",
    github: "https://github.com/ArielMejiaDev/pagalogt",
    demo: "",
    url: "https://packagist.org/packages/arielmejiadev/pagalogt",
    description: `
      <p class="my-4 text-gray-900 text-sm">
        You need a simple and fast way to add online payments to your Laravel platform?
        this is the package for you.
      </p>
      <p class="my-4 text-gray-900 text-sm">
        You can install the package using composer,
        to use this package you require an account with PagaloGT payment gateway,
        the package is available for any project with Laravel 5.5 to 8.
      </p>
      <p class="my-4 text-gray-900 text-sm">
        I AM NOT SPONSORED BY PAGALOGT, it saves you a lot of time reading their docs and adding some helpful methods that you actually will find useful.
      </p>
    `,
  },
]

export default portfolio
