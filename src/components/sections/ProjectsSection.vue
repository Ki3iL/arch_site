<script setup>
import { projects } from '@/data/projects.js';

function getImageUrl(fileName) {
  return new URL(`../../assets/images/projects/${fileName}`, import.meta.url).href;
}
</script>

<template>
  <div id="projects" class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-12 text-center">НАШИ ПРОЕКТЫ</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="project in projects" 
          :key="project.title"
          class="relative overflow-hidden rounded-lg group"
        >
          <img 
            :src="getImageUrl(project.image_name)" 
            :alt="project.alt"
            class="w-full h-64 object-cover"
          >
          <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h3 class="text-2xl font-bold text-white">{{ project.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 