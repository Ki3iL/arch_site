<template>
  <div class="relative bg-gray-900 text-white py-32">
    <div class="absolute inset-0">
      <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" 
          alt="Architecture" 
          class="w-full h-full object-cover opacity-30">
    </div>
    <div class="relative max-w-7xl mx-auto px-4">
      <div class="flex items-center space-x-2 mb-6">
        <BaseIcon name="logo" size="3xl" color="white" />
        <!-- <img src="/images/logo_big.svg" alt="Логотип" width="60" /> -->
        <h1 class="text-6xl font-sofia font-bold relative top-[6px]">АРХТЕХПРОЕКТ</h1>
      </div>
      <p class="text-xl mb-8">Ваш надежный партнер в проектировании и строительстве</p>
      <a href="#contact" class="bg-yellow-500 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition inline-block">
        Получить консультацию
      </a>
    </div>
  </div>
</template>

<script setup>
import BaseIcon from '@/components/icons/BaseIcon.vue';
</script> 
