<script setup>
import { ref } from 'vue';
import { menu } from '@/data/menu.js';
import { tel } from '@/data/contacts.js';
import { scrollToElement } from '@/utils/scroll.js';
import BaseIcon from '@/components/icons/BaseIcon.vue';

const isMenuOpen = ref(false);

const handleNavClick = (e, href) => {
  if (href === '#') {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    isMenuOpen.value = false;
  } else if (href.startsWith('#')) {
    e.preventDefault();
    const id = href.slice(1);
    scrollToElement(id, 80);
    isMenuOpen.value = false;
  }
};
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-20">
        <div class="flex items-center">
          <a href="#" class="flex items-center space-x-2" @click="handleNavClick($event, '#')">
            <BaseIcon name="logo" size="2xl" color="yellow-500" />
            <span class="text-4xl font-sofia text-yellow-500 relative top-[5px]">АРХТЕХПРОЕКТ</span>
          </a>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden cm:flex items-center space-x-6">
          <a v-for="item in menu"
             :key="item.title"
             :href="item.href"
             @click="handleNavClick($event, item.href)"
             class="text-gray-300 hover:text-white transition">
            {{ item.title }}
          </a>

          <a :href="`tel:${tel}`" class="text-yellow-500 font-semibold">{{ tel }}</a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="cm:hidden flex items-center">
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
    <div v-if="isMenuOpen" class="cm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a v-for="item in menu"
           :key="item.title"
           :href="item.href"
           @click="handleNavClick($event, item.href)"
           class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
          {{ item.title }}
        </a>
        <a :href="`tel:${tel}`" class="block px-3 py-2 text-base font-medium text-yellow-500 hover:text-yellow-400">
          {{ tel }}
        </a>
      </div>
    </div>
  </nav>
</template>