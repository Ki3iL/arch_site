<script setup>
const projects = [
  {
    image_name: 'warehouses',
    title: 'Логистические\n центры',
    alt: 'Логистические центры'
  },
  {
    image_name: 'nursing_home',
    title: 'Медицинские\n учреждения',
    alt: 'Медицинские учреждения'
  },
  {
    image_name: 'perspektiva',
    title: 'Многофункциональные\n комплексы',
    alt: 'Многофункциональные комплексы'
  }
];

const widths = [800, 1200];

function getSrcset(fileName, fileExtension) {
  return widths
    .map(width => {
      const url = new URL(`../../assets/images/projects/${fileExtension}/${fileName}-${width}.${fileExtension}`, import.meta.url).href;
      return `${url} ${width}w`;
    })
    .join(', ');
}

function getFallbackUrl(fileName, fileExtension) {
  // Возвращаем самый маленький вариант (800) для старых браузеров
  return new URL(`../../assets/images/projects/${fileExtension}/${fileName}-800.${fileExtension}`, import.meta.url).href;
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
            <!-- AVIF с srcset -->
            <source 
              :srcset="getSrcset(project.image_name, 'avif')" 
              type="image/avif"
              sizes="(max-width: 768px) 100vw, 400px"
            >
            <!-- WebP с srcset -->
            <source 
              :srcset="getSrcset(project.image_name, 'webp')" 
              type="image/webp"
              sizes="(max-width: 768px) 100vw, 400px"
            >
            <!-- JPG fallback (всегда 800px) -->
            <img
              :src="getFallbackUrl(project.image_name, 'jpg')"
              :alt="project.alt"
              loading="lazy"
              class="w-full h-64 object-cover"
            >
          </picture>
          <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h3 class="text-2xl md:text-lg lg:text-2xl font-bold text-center text-white whitespace-pre-line">{{ project.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 