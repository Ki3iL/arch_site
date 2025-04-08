<template>
  <button
    v-show="isVisible"
    @click="scrollToTop"
    class="fixed bottom-8 right-8 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300 z-50"
    aria-label="Прокрутить вверх"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const scrollThreshold = 300; // Показывать кнопку после прокрутки на 300px

const checkScrollPosition = () => {
  isVisible.value = window.scrollY > scrollThreshold;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', checkScrollPosition);
  checkScrollPosition(); // Проверяем начальное положение
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScrollPosition);
});
</script> 