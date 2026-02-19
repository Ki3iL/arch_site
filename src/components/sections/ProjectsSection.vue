<script setup>
const projects = [
  {
    image_name: 'warehouses',
    title: 'Склады',
    alt: 'Склады'
  },
  {
    image_name: 'nursing_home',
    title: 'Больницы',
    alt: 'Больницы'
  },
  {
    image_name: 'perspektiva',
    title: 'Многофункциональные комплексы',
    alt: 'Многофункциональные комплексы'
  }
];

function getImageUrl(fileName, fileExtension) {
  return new URL(`../../assets/images/projects/${fileExtension}/${fileName}.${fileExtension}`, import.meta.url).href;
}
</script>

<template>
  <section id="projects" class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-12 text-center">НАШИ ПРОЕКТЫ</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="project in projects" 
          :key="project.title"
          class="relative overflow-hidden rounded-lg group"
        >
          <picture>
            <source :srcset="getImageUrl(project.image_name, 'avif')" type="image/avif">
            <source :srcset="getImageUrl(project.image_name, 'webp')" type="image/webp">
            <img
              :src="getImageUrl(project.image_name, 'jpg')"
              :alt="project.alt"
              class="w-full h-64 object-cover"
            >
          </picture>
          <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h3 class="text-2xl font-bold text-center text-white">{{ project.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 