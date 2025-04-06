<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>

<template>
  <nav class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-20">
        <div class="flex items-center">
          <a href="#" class="flex items-center">
            <span class="text-2xl font-bold text-yellow-500">АрхТехПроект</span>
          </a>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-6">
          <a href="#" class="text-gray-300 hover:text-white transition">Главная</a>
          <a href="#about" class="text-gray-300 hover:text-white transition">О нас</a>
          <a href="#services" class="text-gray-300 hover:text-white transition">Услуги</a>
          <a href="#contact" class="text-gray-300 hover:text-white transition">Контакты</a>
          <a href="tel:+79205121032" class="text-yellow-500 font-semibold">+7 (920) 512-10-32</a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button @click="isMenuOpen = !isMenuOpen" class="text-gray-300">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="#" class="block px-3 py-2 text-gray-300 hover:text-white transition">Главная</a>
        <a href="#about" class="block px-3 py-2 text-gray-300 hover:text-white transition">О нас</a>
        <a href="#services" class="block px-3 py-2 text-gray-300 hover:text-white transition">Услуги</a>
        <a href="#contact" class="block px-3 py-2 text-gray-300 hover:text-white transition">Контакты</a>
        <a href="tel:+79205121032" class="block px-3 py-2 text-yellow-500 font-semibold">+7 (920) 512-10-32</a>
      </div>
    </div>
  </nav>
</template>