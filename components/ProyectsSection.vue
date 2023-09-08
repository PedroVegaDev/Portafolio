<script setup lang="ts">
const proyects = [
  {
    repository: 'https://github.com/PedroVegaDamian/Code-Blog',
    url: 'https://code-blog.pages.dev/',
    image: '/images/proyect1_w400.png'
  },
  {
    repository: 'https://github.com/PedroVegaDamian/travesia-de-sabores',
    url: 'https://travesia-de-sabores.vercel.app/',
    image: '/images/proyect2_w400.png'
  },
  {
    repository: 'https://github.com/PedroVegaDamian/Musical-Space',
    url: 'https://musical-space.vercel.app',
    image: '/images/proyect3_w400.png'
  },
  {
    repository: 'https://github.com/PedroVegaDamian/maquetacion-pizza-web',
    url: 'https://pizza-web.vercel.app/',
    image: '/images/proyect4_w400.png'
  },
  {
    repository: 'https://github.com/PedroVegaDamian/app-contactos',
    url: 'https://pavd-contactos-app.netlify.app',
    image: '/images/proyect5_w400.png'
  },
  {
    repository: 'https://github.com/PedroVegaDamian/test-vue-2',
    url: 'https://test-vue-2-livid.vercel.app/',
    image: '/images/proyect6_w400.png'
  }
]
</script>

<template>
  <section class="min-h-screen pt-24 max-sm:px-4">
    <h2 class="text-3xl max-sm:text-2xl mb-6 font-semibold">Proyectos</h2>
    <div
      class="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-6 pb-6"
    >
      <article
        class="group relative rounded-md overflow-hidden shadow"
        v-for="proyect in proyects"
        :key="proyect.repository"
      >
        <div
          class="flex justify-center gap-6 items-center w-full h-full absolute opacity-0 group-hover:opacity-100 bg-black/80 transition-opacity duration-200 text-white"
        >
          <NuxtLink
            class="text-center"
            :to="proyect.repository"
            target="_blank"
            external
          >
            <Icon name="mdi:github" size="2rem" />
            <p class="text-sm">GitHub</p>
          </NuxtLink>
          <NuxtLink
            class="text-center"
            :to="proyect.url"
            target="_blank"
            external
          >
            <Icon name="mdi:web" size="2rem" />
            <p class="text-sm">Web</p>
          </NuxtLink>
        </div>
        <img
          class="mx-auto"
          width="400"
          height="183"
          :src="proyect.image"
          :alt="proyect.repository"
        />
      </article>
    </div>
  </section>
</template>
